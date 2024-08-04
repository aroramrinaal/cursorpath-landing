import React, { useState } from "react";
import Link from "next/link";
import { TextCursorIcon } from "./TextCursorIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <nav className={`${isMenuOpen ? '' : 'hidden'} w-full lg:block lg:w-auto bg-background text-primary-foreground lg:bg-transparent lg:text-foreground`} id="navbar-menu">
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center justify-center lg:justify-start py-8 lg:py-0">
          <li className="lg:hidden">
            <Link href="/features" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
          </li>
          <li className="lg:hidden">
            <Link href="https://x.com/mrinaalarora25" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href="/" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href="https://chromewebstore.google.com/detail/cursor-path/mbdjmnlimadokilnbchhooijjphlipfc" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
              Webstore
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href="/features" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href="https://github.com/aroramrinaal/cursor-path" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
              Github
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href="https://x.com/mrinaalarora25" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
