'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-lg bg-black/20 border-b border-white/10 transition-all duration-300">
            {/* Left: Logo + Text */}
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative size-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 group-hover:border-white/20 group-hover:bg-white/10 transition-all duration-300">
                    <Image
                        src="/bear_cherry.png"
                        alt="Nailart.AI Logo"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white opacity-90 group-hover:opacity-100 transition-opacity">
                    Nailart.AI
                </span>
            </Link>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-10">
                {['Features', 'Pricing', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-white/40 hover:text-white transition-all duration-300 relative group/link"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/40 transition-all duration-300 group-hover/link:w-full" />
                    </Link>
                ))}
            </div>

            {/* Right: CTA Button */}
            <div className="flex items-center gap-6">
                <button className="hidden sm:block text-sm font-medium text-white/50 hover:text-white transition-colors">
                    Log in
                </button>
                <button className="relative px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full overflow-hidden hover:bg-neutral-100 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-white/5 shadow-lg hover:shadow-white/10">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
