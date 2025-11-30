import Link from 'next/link';
import { ArrowUpRight, Smartphone, Layers, Globe } from 'lucide-react';
import { CaseStudy } from '@/lib/mdx';

interface ProjectCardProps {
    project: CaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/work/${project.slug}`} className="block">
            <div
                className="group relative bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-violet-900/10 hover:-translate-y-1 cursor-pointer"
            >
                {/* Image Area */}
                <div className={`h-64 w-full ${project.image} relative overflow-hidden`}>
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-wide">
                        {project.category}
                    </div>

                    {/* Decorative Icon for placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
                        {project.category === 'Mobile' && <Smartphone size={64} className="text-white rotate-12" />}
                        {project.category === 'SaaS' && <Layers size={64} className="text-white -rotate-6" />}
                        {project.category === 'Web' && <Globe size={64} className="text-white" />}
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-violet-400 transition-colors">
                            {project.title}
                        </h3>
                        <ArrowUpRight className="text-zinc-600 group-hover:text-violet-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300" />
                    </div>

                    <p className="text-zinc-400 mb-6 line-clamp-2">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
