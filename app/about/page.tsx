
import { Download, CheckCircle } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { ExperienceItem } from '@/components/ExperienceItem';
import { PROFILE, EXPERIENCE } from '@/config/portfolio';

export default function About() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-violet-500/30 selection:text-violet-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

                {/* Sidebar (Left) - Col Span 4 */}
                <div className="lg:col-span-4 xl:col-span-3">
                    <Sidebar />
                </div>

                {/* Main Content (Right) - Col Span 8 */}
                <main className="lg:col-span-8 xl:col-span-9 p-6 lg:p-12 xl:p-20 overflow-x-hidden">

                    {/* Introduction Section */}
                    <section id="about" className="mb-24 animate-fade-in-up">
                        <p className="text-violet-500 font-mono text-sm mb-4 tracking-widest uppercase">Introduction</p>
                        <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white mb-8 max-w-3xl">
                            I translate complex problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">elegant, easy-to-use</span> interface designs.
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    {PROFILE.bio} I believe that great design is invisible—it just works. My process is deeply rooted in user research and iterative prototyping, ensuring that every pixel serves a purpose.
                                </p>
                                <button className="flex items-center gap-2 text-white border-b border-violet-500 pb-1 hover:text-violet-400 transition-colors group">
                                    <span>Download Resume</span>
                                    <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                                </button>
                            </div>

                            {/* Skills Grid */}
                            <div className="bg-zinc-900/30 p-6 rounded-xl border border-zinc-800/50">
                                <h3 className="text-zinc-100 font-medium mb-4 flex items-center gap-2">
                                    <CheckCircle size={18} className="text-violet-500" />
                                    <span>Core Competencies</span>
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {PROFILE.skills.map(skill => (
                                        <span key={skill} className="text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section id="experience" className="mb-24">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-2xl font-medium text-white">Experience</h2>
                            <div className="h-px bg-zinc-800 flex-grow ml-6"></div>
                        </div>
                        <div className="ml-2">
                            {EXPERIENCE.map((item, index) => (
                                <ExperienceItem key={item.id} item={item} isLast={index === EXPERIENCE.length - 1} />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
