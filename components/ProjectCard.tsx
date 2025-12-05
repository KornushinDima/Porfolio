import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Smartphone, Layers, Globe } from 'lucide-react';
import { CaseStudy } from '@/lib/mdx';

interface ProjectCardProps {
    project: CaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const isImage = project.image.startsWith('/') || project.image.startsWith('http');

    return (
        <Link href={`/work/${project.slug}`} className="block">
            <div
                className="group relative bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-900/10 hover:-translate-y-1 cursor-pointer flex flex-col md:flex-row h-auto md:h-[400px]"
            >
                {/* Content Area (Left on Desktop) */}
                <div className="p-8 md:p-10 md:w-5/12 flex flex-col justify-center order-2 md:order-1 relative z-10">
                    <div className="mb-4">
                        <div className="inline-block bg-zinc-800/50 border border-zinc-700/50 px-3 py-1 rounded-full text-xs font-medium text-violet-300 uppercase tracking-wide mb-4">
                            {project.category}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 group-hover:text-violet-400 transition-colors mb-4 leading-tight">
                            {project.title}
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed line-clamp-3 mb-6">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {(project.tags || []).slice(0, 3).map((tag, i) => (
                            <span key={i} className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                        {(project.tags?.length || 0) > 3 && (
                            <span className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded-md">
                                +{(project.tags?.length || 0) - 3}
                            </span>
                        )}
                    </div>

                    <div className="absolute top-8 right-8 md:hidden">
                        <ArrowUpRight className="text-zinc-600 group-hover:text-violet-400 transition-colors" />
                    </div>
                </div>

                {/* Image Area (Right on Desktop) */}
                <div className={`h-64 md:h-full md:w-7/12 relative overflow-hidden order-1 md:order-2 ${!isImage ? project.image : ''}`}>
                    {isImage && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    )}

                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                    {/* Decorative Icon for placeholder - Only show if NOT an image */}
                    {!isImage && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                            {project.category === 'Mobile' && <Smartphone size={120} className="text-white rotate-12" />}
                            {project.category === 'SaaS' && <Layers size={120} className="text-white -rotate-6" />}
                            {project.category === 'Web' && <Globe size={120} className="text-white" />}
                        </div>
                    )}

                    {/* View Project Button Overlay (Desktop Only) */}
                    <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span>View Case Study</span>
                        <ArrowUpRight size={16} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
