import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ArrowUpRight, Smartphone, Layers, Globe } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getCaseStudies, getCaseStudy } from '@/lib/mdx';
import { PROFILE } from '@/config/portfolio';

import { Gallery } from '@/components/Gallery';
import { MDXImage } from '@/components/ui/MDXImage';

export async function generateStaticParams() {
    const posts = getCaseStudies();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const project = getCaseStudy(params.slug);

    if (!project) {
        notFound();
    }

    const components = {
        h1: (props: any) => (
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 mt-12">
                <span className="w-8 h-1 bg-violet-500 rounded-full"></span>
                {props.children}
            </h3>
        ),
        h2: (props: any) => (
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 mt-12">
                <span className="w-8 h-1 bg-violet-500 rounded-full"></span>
                {props.children}
            </h2>
        ),
        p: (props: any) => (
            <p className="text-zinc-400 leading-relaxed text-lg md:text-xl mb-6">
                {props.children}
            </p>
        ),
        ul: (props: any) => (
            <ul className="list-disc list-inside text-zinc-400 mb-6 space-y-2">
                {props.children}
            </ul>
        ),
        li: (props: any) => (
            <li className="text-lg">
                {props.children}
            </li>
        ),
        img: MDXImage,
        Gallery: Gallery,
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-violet-500/30 selection:text-violet-200 p-6 lg:p-12 xl:p-20">
            <div className="animate-fade-in-up max-w-5xl mx-auto">
                {/* Back Navigation */}
                <Link
                    href="/#work"
                    className="group flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors w-fit"
                >
                    <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                        <ChevronLeft size={20} />
                    </div>
                    <span className="font-medium">Back to Projects</span>
                </Link>

                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-medium uppercase tracking-wide">
                            {project.category}
                        </span>
                        <span className="text-zinc-500 text-sm">•</span>
                        <span className="text-zinc-400 text-sm font-mono">{project.year}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Hero Image */}
                <div className={`w-full h-64 md:h-[500px] rounded-3xl mb-16 relative overflow-hidden shadow-2xl shadow-black/50 ${project.image.startsWith('/') || project.image.startsWith('http') ? '' : project.image}`}>
                    {/* Render Image if it's a URL */}
                    {(project.image.startsWith('/') || project.image.startsWith('http')) && (
                        <div className="absolute inset-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    )}

                    {/* Render Icons if it's NOT a URL (gradient background) */}
                    {!(project.image.startsWith('/') || project.image.startsWith('http')) && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-40">
                            {project.category === 'Mobile' && <Smartphone size={150} className="text-white rotate-12" />}
                            {project.category === 'SaaS' && <Layers size={150} className="text-white -rotate-6" />}
                            {project.category === 'Web' && <Globe size={150} className="text-white" />}
                        </div>
                    )}
                </div>

                {/* Project Meta Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-zinc-800 py-8 mb-20">
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Client</h4>
                        <p className="text-zinc-200 font-medium">{project.client}</p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Role</h4>
                        <p className="text-zinc-200 font-medium">{project.role}</p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Timeline</h4>
                        <p className="text-zinc-200 font-medium">4 Months</p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Deliverables</h4>
                        <p className="text-zinc-200 font-medium">UX Research, UI Design</p>
                    </div>
                </div>

                {/* Main Content Wrapper */}
                <div className="space-y-24">

                    {/* Content from MDX */}
                    <section className="max-w-3xl mx-auto">
                        <MDXRemote source={project.content} components={components} />
                    </section>

                    {/* Results Section - Full Width Prominent Grid */}
                    <section className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent rounded-3xl -z-10" />

                        <div className="py-10">
                            <h3 className="text-3xl font-bold text-white mb-12 text-center">Impact & Results</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {(project.results || []).map((res, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center justify-center p-8 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-violet-500/50 transition-all duration-300 group"
                                    >
                                        <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-4 group-hover:from-violet-400 group-hover:to-indigo-400 transition-all">
                                            {res.value}
                                        </span>
                                        <div className="h-1 w-12 bg-zinc-700 rounded-full mb-4 group-hover:bg-violet-500 transition-colors" />
                                        <p className="text-zinc-400 text-center font-medium uppercase tracking-wide text-sm">
                                            {res.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </div>

                {/* Bottom Navigation */}
                <div className="mt-32 pt-10 border-t border-zinc-900 flex justify-between items-center">
                    <Link href="/#work" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
                        <ChevronLeft size={16} /> Back to Projects
                    </Link>
                    <a href={`mailto:${PROFILE.socials.email}`} className="text-violet-400 hover:text-violet-300 transition-colors font-medium flex items-center gap-2">
                        Start a project like this <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
}

