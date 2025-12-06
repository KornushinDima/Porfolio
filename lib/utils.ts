export function getAssetPath(path: string) {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    // If path already starts with basePath, return it as is
    if (basePath && path.startsWith(basePath)) return path;

    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    // If no base path, return clean path
    if (!basePath) return cleanPath;

    return `${basePath}${cleanPath}`;
}
