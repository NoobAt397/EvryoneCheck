'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="bg-background shadow-lg">
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h3 className="mt-4 text-2xl font-semibold">Thank you!</h3>
          <p className="mt-2 text-muted-foreground">
            We'll be in touch soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-background shadow-lg">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              required
              rows={5}
            />
          </div>
          <Button type="submit" className="w-full text-base" size="lg">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
