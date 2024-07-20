import Navbar from "@/components/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center text-primary">
        <div className="w-full px-4 md:px-6 py-8 md:py-12 lg:py-16">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-primary-foreground font-sans">
              Cursor Path: Track Your Mouse Journey
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-muted-foreground font-andika">
              Unlock insights into your mouse usage with our powerful Chrome extension. Visualize your cursor
              movements, measure precise pixel distances, and track your lifetime achievements.
            </p>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-md bg-card px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Install Now
            </Link>
          </div>
        </div>
      </main>
      <footer className="w-full py-2 px-4 border-t border-border/40 flex justify-between items-center text-xs text-muted-foreground">
        <p>&copy; 2024 Cursor Path. All rights reserved.</p>
        <p>Made with React, TypeScript, Tailwind and ❤️</p>
      </footer>
    </div>
  );
}

export default Home;