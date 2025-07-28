/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use SWC for better performance and compatibility
  swcMinify: true,
  
  webpack: (config, { isServer }) => {
    // Fix for undici module parsing issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        undici: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
        buffer: false,
        util: false,
      };
      
      // Exclude problematic modules from client-side bundling
      config.externals = config.externals || [];
      config.externals.push('undici');
      config.externals.push('fs');
      config.externals.push('net');
      config.externals.push('tls');
      config.externals.push('crypto');
      config.externals.push('stream');
      config.externals.push('http');
      config.externals.push('https');
      
      // Add rule to completely ignore undici module
      config.module.rules.push({
        test: /node_modules\/undici/,
        use: 'null-loader',
      });
    }
    
    return config;
  },
  
  // Add experimental features for better compatibility
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = nextConfig 