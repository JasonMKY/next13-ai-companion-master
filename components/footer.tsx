import React from "react";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./MobileSidebar";
import { useProModal } from "@/hooks/use-pro-modal";
import { redirect, useRouter } from "next/navigation";
import { Router } from "next/router";

const Footer = () => {
  return (
    <footer className="fixed max-w-screen-2xl w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <ul className="flex justify-center space-x-6">
          <h1
        className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary"
      
            )}
          >
            
            </h1>
          <li>
            <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="text-gray-600 hover:text-gray-900">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>

    /* 
    <div className="fixed max-w-screen-2xl w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <MobileSidebar
          isPro={isPro}
          companionId={companionId}
          userId={userId}
        />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            roleplaypals.fun
          </h1>
        </Link>
      </div>
    */
  );
};

export default Footer;