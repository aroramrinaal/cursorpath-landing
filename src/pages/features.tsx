import React from "react";
import Navbar from "@/components/Navbar";

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-card p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-accent">{title}</h3>
        <p className="text-card-foreground">{description}</p>
    </div>
);

const features = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-accent">Features</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Cursor Path offers a range of powerful features to help you track and
          analyze your mouse usage.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Cursor Visualization"
            description="See a real-time visualization of your cursor movements, complete with trails and heatmaps."
          />
          <FeatureCard 
            title="Pixel Measurement"
            description="Precisely measure the distance your cursor travels in pixels, helping you optimize your workflow."
          />
          <FeatureCard 
            title="Lifetime Tracking"
            description="Keep track of your lifetime mouse usage statistics, including total distance traveled and time spent."
          />
          <FeatureCard 
            title="Customizable Settings"
            description="Tailor the extension to your preferences, adjusting the visualization, measurement units, and more."
          />
          <FeatureCard 
            title="Cross-Device Sync"
            description="Sync your cursor data across multiple devices, ensuring your usage history is always accessible."
          />
          <FeatureCard 
            title="Detailed Analytics"
            description="Dive into comprehensive analytics, including heat maps, click patterns, and productivity insights."
          />
        </div>
      </main>
    </div>
  );
};

export default features;
