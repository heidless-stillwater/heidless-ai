"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/support', label: 'Support' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="font-bold font-headline text-xl">heidless <span className="text-accent">ai</span></span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-muted-foreground transition-colors hover:text-foreground">
              {label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground outline-none">
              <span>
                Tools <ChevronDown className="h-4 w-4 opacity-70 relative top-px" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/tools">Tools Overview</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/dental-ai-functions">Dental Practice</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/accountancy-ai-functions">Accountancy Firm</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/business-consultancy-ai-functions">Business Consultancy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/cleaning-property-maintenance-ai-functions">Cleaning/Property Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/fast-food-ai-functions">Fast Food Business</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/fitness-coach-ai-functions">Fitness Coach</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/life-coach-ai-functions">Life Coach</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/legal-practice-ai-functions">Legal Practice</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground outline-none">
              <span>
                Admin <ChevronDown className="h-4 w-4 opacity-70 relative top-px" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/admin">Admin Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/tools/web-consultancy-ai-functions">Web Tools</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-border/40">
          <div className="flex flex-col gap-4 p-4">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
                {label}
              </Link>
            ))}
            <Link href="/tools" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Tools Overview
            </Link>
            <Link href="/tools/dental-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Dental Practice
            </Link>
             <Link href="/tools/accountancy-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Accountancy Firm
            </Link>
            <Link href="/tools/business-consultancy-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Business Consultancy
            </Link>
            <Link href="/tools/cleaning-property-maintenance-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Cleaning/Property Services
            </Link>
            <Link href="/tools/fast-food-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Fast Food Business
            </Link>
            <Link href="/tools/fitness-coach-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Fitness Coach
            </Link>
            <Link href="/tools/life-coach-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Life Coach
            </Link>
            <Link href="/tools/legal-practice-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Legal Practice
            </Link>
            <Link href="/admin" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Admin Dashboard
            </Link>
            <Link href="/tools/web-consultancy-ai-functions" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Web Tools
            </Link>
            <Link href="/#contact" className="text-muted-foreground hover:text-foreground" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
