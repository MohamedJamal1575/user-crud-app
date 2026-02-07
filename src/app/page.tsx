"use client";
import UserForm from "@/components/UserForm";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Toaster position="top-center" />
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-6">
        <UserForm />
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-sm text-muted-foreground border-t border-border/40 bg-card/30 backdrop-blur-sm">
        <p className="flex items-center justify-center gap-1.5 flex-wrap">
          © 2026.
          <Heart className="h-4 w-4 text-primary fill-primary inline-block" />
          <a
            href="https://mohamed-jamal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline transition-colors"
          >
            Mohamed Jamal M
          </a>
        </p>
      </footer>
    </div>
  );
}
