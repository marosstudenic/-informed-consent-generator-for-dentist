/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['reliable-caterpillar-771.convex.cloud'],
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
