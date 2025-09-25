import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Connect With Us
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Have a question, a story to share, or an idea for collaboration? We'd love to hear from you.
          </p>
          <p className="mt-2 text-md text-foreground/70">
            For partnerships, please email us at <a href="mailto:collab@brandbloom.com" className="font-semibold text-primary underline-offset-4 hover:underline">collab@brandbloom.com</a>.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
