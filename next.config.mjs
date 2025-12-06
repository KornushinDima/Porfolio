const isProd = process.env.NODE_ENV === 'production';
const repoName = "Porfolio";

const nextConfig = {
    output: "export",
    basePath: isProd ? `/${repoName}` : "",
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
    },
};

export default nextConfig;
