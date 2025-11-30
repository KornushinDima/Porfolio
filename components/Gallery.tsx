import Image from 'next/image';

interface GalleryProps {
    images: string[];
    columns?: 1 | 2 | 3;
}

export function Gallery({ images, columns = 2 }: GalleryProps) {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
    };

    return (
        <div className={`grid ${gridCols[columns]} gap-6 my-12`}>
            {images.map((src, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden shadow-lg border border-zinc-800 group">
                    <div className="aspect-[4/3] relative">
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
