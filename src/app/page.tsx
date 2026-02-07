"use client";
import UserForm from "@/components/UserForm";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Toaster position="top-center"/>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-6">
        <UserForm />
      </main>
    </div>
  );
}
