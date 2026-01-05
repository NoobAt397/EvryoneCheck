'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/supabaseClient';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const validateForm = (name: string, email: string, message: string): FormErrors => {
    const errors: FormErrors = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Valid email required';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validate form
    const errors = validateForm(name, email, message);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Clear previous errors and messages
    setFormErrors({});
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    try {
      // Insert to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: name.trim(),
          email: email.trim().toLowerCase(),
          message: message.trim()
        }]);

      if (error) throw error;

      // Success - show message and reset form
      setSuccessMessage('Thank you! We\'ll get back to you soon.');
      formRef.current?.reset();

      // Focus on first field after reset
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);

    } catch (error: any) {
      if (process.env.NODE_ENV === 'development') console.error('Error submitting contact form:', error);
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="p-8">
        {/* Success Message */}
        {successMessage && (
          <div
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
            role="alert"
            aria-live="polite"
          >
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-green-800 text-sm font-medium">{successMessage}</p>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
            role="alert"
            aria-live="assertive"
          >
            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800 text-sm font-medium">{errorMessage}</p>
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="contact-form-label">
              Name <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              ref={nameInputRef}
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className={`contact-form-input ${formErrors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              aria-invalid={!!formErrors.name}
              aria-describedby={formErrors.name ? 'name-error' : undefined}
              disabled={isSubmitting}
            />
            {formErrors.name && (
              <p id="name-error" className="text-sm text-red-600 mt-1" role="alert">
                {formErrors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="contact-form-label">
              Email <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className={`contact-form-input ${formErrors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              aria-invalid={!!formErrors.email}
              aria-describedby={formErrors.email ? 'email-error' : undefined}
              disabled={isSubmitting}
            />
            {formErrors.email && (
              <p id="email-error" className="text-sm text-red-600 mt-1" role="alert">
                {formErrors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="contact-form-label">
              Message <span className="text-red-500" aria-label="required">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              required
              rows={5}
              className={`contact-form-textarea ${formErrors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
              aria-invalid={!!formErrors.message}
              aria-describedby={formErrors.message ? 'message-error' : undefined}
              disabled={isSubmitting}
            />
            {formErrors.message && (
              <p id="message-error" className="text-sm text-red-600 mt-1" role="alert">
                {formErrors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="contact-form-button w-full disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
