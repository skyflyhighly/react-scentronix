/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/recipes/categories',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
