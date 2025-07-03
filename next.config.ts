import type { NextConfig } from 'next';
import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

const nextConfig: NextConfig = {
    experimental: {
        useCache: true,
        dynamicIO: true
    }
};

export default withFlowbiteReact(nextConfig);
