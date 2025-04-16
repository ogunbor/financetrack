import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

import "./globals.css";
import Link from "next/link";
import { ChartColumnBigIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserDropdown from "./user-dropdown";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
})



export const metadata: Metadata = {
  title: "FinanceTrack",
  description: "Track your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} antialiased`}
        >
          <nav className="bg-primary p-4 text-white h-20 flex items-center justify-between">
            <Link
              href="/"
              className="font-bold text-2xl flex gap-1 items-center"
            >
              <ChartColumnBigIcon className="text-lime-500" /> FinanceTrack
            </Link>
            <div>
              <SignedOut>
                <div className="flex items-center">
                  <Button asChild variant="link" className="text-white">
                    <SignInButton />
                  </Button>
                  <Button asChild variant="link" className="text-white">
                    <SignUpButton />
                  </Button>
                </div>
              </SignedOut>
              <SignedIn>
                <UserDropdown />
              </SignedIn>
            </div>
          </nav>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
