const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  experimental: {
    serverComponentsExternalPackages: ["pdf-parse"],
  },
})
module.exports = withBundleAnalyzer({})

