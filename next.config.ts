export default {
  // De hoofdpagina is ManiFlowStations. De commerce-demo blijft bereikbaar op
  // /search, /product/... — haal dit blok weg om de winkel weer op / te zetten.
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maniflowstations',
        permanent: false
      }
    ];
  },
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  }
};
