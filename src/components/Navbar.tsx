import React from "react";
import Link from "next/link";
import { TextCursorIcon } from "./TextCursorIcon";

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <TextCursorIcon />
        <span className="sr-only">Cursor Path</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 text-foreground">
        <Link href="#" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Webstore
        </Link>
        <Link href="/features" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Features
        </Link>
        <Link href="https://github.com/aroramrinaal/cursorpath-landing" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Github
        </Link>
        <Link href="https://x.com/mrinaalarora25" className="text-xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
