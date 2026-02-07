"use client"

import { ThemeToggle } from "./theme-toggle"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50
  border-b border-gray/10
  bg-background/10
  backdrop-blur-xs ">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
                {/* App Title / Logo */}
                <h1 className="text-sm font-semibold tracking-wide text-xl">
                    User Management
                </h1>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
