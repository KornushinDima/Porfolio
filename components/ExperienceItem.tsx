interface ExperienceItemProps {
    item: {
        company: string;
        role: string;
        period: string;
        description: string;
    };
    isLast: boolean;
}

export function ExperienceItem({ item, isLast }: ExperienceItemProps) {
    return (
        <div className={`relative pl-8 pb-12 ${isLast ? '' : 'border-l border-zinc-800'}`}>
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-lg font-bold text-zinc-200">{item.company}</h4>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800 w-fit mt-1 sm:mt-0">
                    {item.period}
                </span>
            </div>
            <div className="text-violet-400 font-medium text-sm mb-3">{item.role}</div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                {item.description}
            </p>
        </div>
    );
}
