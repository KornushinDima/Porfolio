import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/case-studies');

export type CaseStudy = {
    slug: string;
    title: string;
    category: string;
    client: string;
    year: string;
    role: string;
    image: string;
    tags: string[];
    description: string;
    challenge: string;
    solution: string;
    results: { value: string; label: string }[];
    content: string;
};

export function getCaseStudies(): CaseStudy[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            ...data,
            content,
        } as CaseStudy;
    });

    return allPostsData;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
        return undefined;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        ...data,
        content,
    } as CaseStudy;
}
