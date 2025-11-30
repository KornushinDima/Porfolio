'use client';

import Link from 'next/link';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { PROFILE } from '@/config/portfolio';

export function Sidebar() {
    return (
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between py-12 lg:py-20 px-6 lg:px-12 border-b lg:border-b-0 lg:border-r border-zinc-800 bg-zinc-950 z-10">
            <div>
                {/* Avatar / Logo Area */}
                <Link href="/" className="block mb-8 cursor-pointer">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-zinc-600 flex items-center justify-center text-2xl font-bold text-zinc-300 shadow-xl shadow-zinc-900/50 hover:scale-105 transition-transform">
                        DK
                    </div>
                </Link>

                <h1 className="text-4xl font-bold text-zinc-100 tracking-tight mb-2">
                    {PROFILE.name}
                </h1>
                <h2 className="text-xl text-violet-400 font-medium mb-6">
                    {PROFILE.role}
                </h2>
                <p className="text-zinc-400 leading-relaxed max-w-sm mb-8">
                    {PROFILE.tagline}
                </p>

                <div className="flex flex-col gap-4 text-zinc-500 text-sm mb-10">
                    <div className="flex items-center gap-3">
                        <MapPin size={18} />
                        <span>{PROFILE.location}</span>
                    </div>
                    <a href={`mailto:${PROFILE.socials.email}`} className="flex items-center gap-3 hover:text-violet-400 transition-colors w-fit">
                        <Mail size={18} />
                        <span>{PROFILE.socials.email}</span>
                    </a>
                    <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-violet-400 transition-colors w-fit">
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>
                </div>

                {/* Navigation / Quick Links (Desktop) */}
                <nav className="hidden lg:block space-y-4 mb-16">
                    <Link href="/#about" className="block text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider text-left">About</Link>
                    <Link href="/#experience" className="block text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider text-left">Experience</Link>
                    <Link href="/#work" className="block text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-wider text-left">Selected Work</Link>
                </nav>
            </div>
        </div>
    );
}
