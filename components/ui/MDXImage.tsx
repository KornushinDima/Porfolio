import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

interface MDXImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    alt?: string;
}

export function MDXImage({ src, alt, ...props }: MDXImageProps) {
    // Check if it's an external URL or absolute path that Next/Image can handle directly
    // or if it's a local static image.
    // For simplicity with MDX remote where we might get raw strings, we'll use a standard img tag 
    // but styled nicely, unless we want to wire up complex image optimization.
    // Given the "busy" feedback, let's keep it simple but clean.

    if (!src) return null;

    return (
        <figure className="my-12">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900/50">
                <img
                    src={getAssetPath(src)}
                    alt={alt || ''}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    {...props}
                />
            </div>
            {alt && (
                <figcaption className="mt-4 text-center text-sm text-zinc-500 italic">
                    {alt}
                </figcaption>
            )}
        </figure>
    );
}
