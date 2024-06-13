"use client";
import React, { useState, useEffect } from "react";

// components
import Logo from "./Logo";
import ThemeToogler from "./ThemeToogler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [header, setHeader] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll: EventListener = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    // Adicionar o ouvinte de evento
    window.addEventListener("scroll", handleScroll);

    // Remover o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
    } sticky top-0 z-30 transition-all ${pathname === "/" && 'bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <Link href="/">
            <h1 className="h1">AKOPOL</h1>
            <p className="text-4xl leading-none font-bold text-primary">Agência de Detetives</p>
          </Link>
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToogler />
            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
