import { Sidebar } from '@/components/Sidebar';
import { WorkList } from '@/components/WorkList';
import { PROFILE } from '@/config/portfolio';
import { getCaseStudies } from '@/lib/mdx';

export default function Home() {
    const projects = getCaseStudies();

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-violet-500/30 selection:text-violet-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

                {/* Sidebar (Left) - Col Span 4 */}
                <div className="lg:col-span-4 xl:col-span-3">
                    <Sidebar />
                </div>

                {/* Main Content (Right) - Col Span 8 */}
                <main className="lg:col-span-8 xl:col-span-9 p-6 lg:p-12 xl:p-20 overflow-x-hidden">

                    {/* Portfolio Case Studies Section */}
                    <WorkList initialProjects={projects} />

                    {/* Footer Area */}
                    <footer className="mt-32 pt-8 border-t border-zinc-900 text-zinc-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.</p>
                        <p>Vibecoded with Gemini and Antigravity.</p>
                    </footer>

                </main>
            </div>
        </div>
    );
}
