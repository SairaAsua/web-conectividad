"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navigation } from "@/lib/data";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm"
                    : "bg-white/90 backdrop-blur-sm"
                } border-b border-black/5`}
        >
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #00b4d8, #38b000)" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="font-black text-xl text-gray-900">
                        Alter<span style={{ color: "#00b4d8" }}>Mundi</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-6">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="nav-link text-sm font-semibold">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex items-center gap-3">
                    <a href="https://foro.librerouter.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs px-4 py-2">
                        Foro ↗
                    </a>
                    <Link href="/contacto" className="btn-primary text-xs px-5 py-2">
                        Contacto
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menú"
                >
                    {menuOpen ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4">
                    <ul className="flex flex-col gap-3">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="block text-gray-700 hover:text-blue-500 font-semibold py-1.5 text-sm transition-colors" onClick={() => setMenuOpen(false)}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2 border-t border-gray-100 flex gap-3">
                            <a href="https://foro.librerouter.org/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs px-4 py-2 flex-1 justify-center">
                                Foro ↗
                            </a>
                            <Link href="/contacto" className="btn-primary text-xs px-4 py-2 flex-1 justify-center" onClick={() => setMenuOpen(false)}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
