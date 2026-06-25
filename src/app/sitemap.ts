import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://etatdame.fr' },
    { url: 'https://etatdame.fr/menu' },
    { url: 'https://etatdame.fr/infos' },
    { url: 'https://etatdame.fr/contact' },
  ]
}
