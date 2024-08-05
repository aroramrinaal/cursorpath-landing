import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TextCursorIcon } from "./TextCursorIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const mobileNavItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "https://x.com/mrinaalarora25", label: "Contact" },
  ];

  const desktopNavItems = [
    { href: "/", label: "Home" },
    { href: "https://chromewebstore.google.com/detail/cursor-path/mbdjmnlimadokilnbchhooijjphlipfc", label: "Webstore" },
    { href: "/features", label: "Features" },
    { href: "https://github.com/aroramrinaal/cursor-path", label: "Github" },
    { href: "https://x.com/mrinaalarora25", label: "Contact" },
  ];

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background text-primary-foreground">
      <Link href="/" className="flex items-center" prefetch={false}>
        <TextCursorIcon />
        <span className="sr-only">Cursor Path</span>
      </Link>
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-primary-foreground rounded-lg lg:hidden bg-background hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        aria-controls="navbar-menu"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Toggle menu</span>
        <div className="w-6 h-6 relative flex flex-col justify-center items-center">
          <span className={`absolute h-0.5 w-full bg-primary-foreground transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`} />
          <span className={`absolute h-0.5 w-full bg-primary-foreground transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`absolute h-0.5 w-full bg-primary-foreground transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`} />
        </div>
      </button>
      <nav 
        className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          lg:flex absolute top-14 left-1/2 transform -translate-x-1/2
          lg:relative lg:top-0 lg:left-0 lg:transform-none
          w-4/5 lg:w-auto bg-background lg:bg-transparent
          rounded-md shadow-lg lg:shadow-none
          ${isMenuOpen ? 'border-2 border-white' : ''} lg:border-none
        `} 
        id="navbar-menu"
      >
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center w-full py-4 lg:py-0">
          {(isMobile ? mobileNavItems : desktopNavItems).map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href} 
                className="text-xl font-medium text-primary-foreground hover:underline underline-offset-4" 
                prefetch={false}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;