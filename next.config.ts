import type { NextConfig } from 'next'

// Cette configuration de Next.js définit les en-têtes de sécurité pour l'application, ainsi que les paramètres pour le chargement des images à partir de Cloudinary. Les en-têtes de sécurité incluent des directives pour empêcher le clickjacking, le sniffing de type de contenu, et pour définir une politique de sécurité stricte pour le contenu chargé par l'application.
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "img-src 'self' https://res.cloudinary.com data:",
      `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''}`,
      "style-src 'self' 'unsafe-inline'",
      "connect-src 'self'",
      "frame-src 'self' https://www.google.com",
    ].join('; '),
  },
]

// Configuration de Next.js
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig