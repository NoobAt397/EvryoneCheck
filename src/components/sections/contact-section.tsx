import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            Let's Collaborate
          </h2>
          <p className="mt-2 text-base text-foreground/80">
            Have a question or an idea for a partnership? We'd love to hear from you.
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            For collaborations, please email us at <a href="mailto:collab@communicational.com" className="font-semibold text-primary underline-offset-4 hover:underline">collab@communicational.com</a>.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
