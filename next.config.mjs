import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Ensure Turbopack uses this project as the workspace root
    root: __dirname,
  },
};

export default nextConfig;
