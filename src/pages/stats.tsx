// import React from "react";
// import Navbar from "@/components/Navbar";

// const StatsPage = () => {
//     return (
//         <div className="min-h-screen flex flex-col bg-background">
//         </div>
//     );
// };

// export default StatsPage;
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";

const StatsPage = () => {
    useEffect(() => {
        // Listen for custom event indicating the extension is installed
        window.addEventListener("extension-detected", () => {
            const statsElement = document.getElementById('extension-stats');
            const placeholderElement = document.getElementById('extension-stats-placeholder');
            if (statsElement && placeholderElement) {
                statsElement.style.display = 'block';
                placeholderElement.style.display = 'none';
            }
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <div id="extension-stats-placeholder" className="max-w-4xl w-full bg-card p-10 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl mb-4">Cursor Path Statistics</h2>
                    <p className="text-xl">Please install the Cursor Path extension to view your cursor path statistics.</p>
                    <a href="https://chrome.google.com/webstore" className="text-accent mt-4 inline-block">
                        Install Extension
                    </a>
                </div>
                <div id="extension-stats" className="hidden max-w-4xl w-full bg-card p-10 rounded-lg shadow-md text-center">
                    <h2 className="text-4xl mb-4">Cursor Path Statistics</h2>
                    <p className="text-xl">Total Distance: <span id="totalDistance"></span> pixels</p>
                    <p className="text-xl">Approximate Real-World Distance: <span id="realWorldDistance"></span></p>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;

