'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { CaseStudy } from '@/lib/mdx';
import { FilterTab } from './FilterTab';
import { ProjectCard } from './ProjectCard';

interface WorkListProps {
    initialProjects: CaseStudy[];
}

export function WorkList({ initialProjects }: WorkListProps) {
    const [activeFilter, setActiveFilter] = useState('All');
    const [visibleProjects, setVisibleProjects] = useState(initialProjects);
    const [animate, setAnimate] = useState(false);

    const categories = ['All', ...Array.from(new Set(initialProjects.map(p => p.category)))];

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 500);

        if (activeFilter === 'All') {
            setVisibleProjects(initialProjects);
        } else {
            setVisibleProjects(initialProjects.filter(p => p.category === activeFilter));
        }

        return () => clearTimeout(timer);
    }, [activeFilter, initialProjects]);

    return (
        <section id="work" className="mb-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                <h2 className="text-2xl font-bold text-white">Selected Works</h2>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <FilterTab
                            key={cat}
                            label={cat}
                            active={activeFilter === cat}
                            onClick={() => setActiveFilter(cat)}
                        />
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className={`grid grid-cols-1 gap-12 ${animate ? 'opacity-50 translate-y-2' : 'opacity-100 translate-y-0'} transition-all duration-500`}>
                {visibleProjects.map(project => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                    />
                ))}
            </div>

            {visibleProjects.length === 0 && (
                <div className="py-20 text-center text-zinc-500 border border-dashed border-zinc-800 rounded-xl">
                    No projects found in this category.
                </div>
            )}

            <div className="mt-16 text-center">
                <a href="#" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <span>View Archive</span>
                    <ChevronRight size={16} />
                </a>
            </div>
        </section>
    );
}
