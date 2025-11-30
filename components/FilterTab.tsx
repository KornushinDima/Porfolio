interface FilterTabProps {
    active: boolean;
    label: string;
    onClick: () => void;
}

export function FilterTab({ active, label, onClick }: FilterTabProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active
                    ? 'bg-zinc-100 text-zinc-900 shadow-lg shadow-zinc-100/10'
                    : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800'
                }`}
        >
            {label}
        </button>
    );
}
