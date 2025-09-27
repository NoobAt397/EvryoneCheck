import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Let's Collaborate
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Have a question or an idea for a partnership? We'd love to hear from you.
          </p>
          <p className="mt-2 text-md text-foreground/70">
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
