import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center md:py-32">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Our Shop is Coming Soon!
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80">
            We're busy curating a special collection of products to help you on your journey. Stay tuned!
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
