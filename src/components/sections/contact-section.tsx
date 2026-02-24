import { ContactForm } from "./contact-form";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-4 md:py-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Left — info */}
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              Let's Collaborate
            </h2>
            <p className="mt-2 text-sm text-foreground/80">
              Have a question or an idea for a partnership? We'd love to hear from you.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a
                href="mailto:collab@communicational.com"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                collab@communicational.com
              </a>
            </div>
            <p className="mt-3 text-xs text-foreground/60 leading-relaxed">
              For collaborations, sponsorships, or corporate training enquiries — reach out via the form or directly at our email above.
            </p>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
