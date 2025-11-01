
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const services = [
  {
    title: 'Personal Branding Workshops',
    slug: 'personal-branding-workshops',
    description: 'Define your unique story and learn how to communicate it effectively across all platforms. This workshop will cover personal narrative development, social media strategy, and public speaking techniques to build a compelling brand.',
    price: '₹200',
    demoVideoUrl: 'https://firebasestorage.googleapis.com/v0/b/studio-5719225374-524a4.firebasestorage.app/o/communicational%20video.mp4?alt=media&token=ba5950e8-7c78-4830-acd4-52c2dafc83d8'
  },
];

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link href="/" passHref>
          <Button variant="link" className="mt-4">Go back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl gradient-text mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            {service.description}
          </p>

          {service.demoVideoUrl && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-2xl border border-gray-200 aspect-video">
              <video
                src={service.demoVideoUrl}
                controls
                className="w-full h-full"
                style={{ objectFit: 'cover' }}
                autoPlay
                muted
                loop
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="rounded-lg border border-gray-200 bg-foreground/5 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-lg text-foreground/80">Price</p>
                <p className="text-4xl font-bold gradient-text">{service.price}</p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="glass-glow-button w-full md:w-auto">
                    Buy Now
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Coming Soon!</AlertDialogTitle>
                    <AlertDialogDescription>
                      Our payment system is being set up. Please check back later!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction>OK</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
