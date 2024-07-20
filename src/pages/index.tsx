import Navbar from "@/components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full px-4 md:px-6 py-8 md:py-12 lg:py-16">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-primary-foreground">
              Cursor Path: Track Your Mouse Journey
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Unlock insights into your mouse usage with our powerful Chrome extension. Visualize your cursor
              movements, measure precise pixel distances, and track your lifetime achievements.
            </p>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Install Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
