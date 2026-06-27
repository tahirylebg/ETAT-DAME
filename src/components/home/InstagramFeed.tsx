import Image from 'next/image'
import { AtSign } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SignatureMark from '@/components/ui/SignatureMark'

const posts = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/instagram/insta${n}.jpg`,
  alt: `Publication Instagram État Dame ${n}`,
}))

export default function InstagramFeed() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16 bg-creme-100">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="bg-creme-50 rounded-card p-6 md:p-10">
            <div className="text-center mb-8">
              <SignatureMark className="w-8 h-8 text-garrigue-700 mx-auto mb-3" />
              <p className="text-xs uppercase tracking-wide text-creme-500 mb-2">
                Suivez-nous
              </p>
              <a
                href="https://www.instagram.com/etatdame_brunch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-3xl md:text-4xl hover:text-creme-700 transition-colors"
              >
                <AtSign size={28} className="text-creme-700" />
                etatdame_brunch
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {posts.map((post, i) => (
                <Reveal key={post.src} delayMs={i * 50}>
                  <a
                    href="https://www.instagram.com/etatdame_brunch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative aspect-square overflow-hidden rounded-card border border-creme-300 bg-creme-100 p-1 shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-lg hover:border-creme-500"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[2px]">
                      <Image
                        src={post.src}
                        alt={post.alt}
                        fill
                        sizes="(min-width: 768px) 16vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-creme-900/0 transition-colors duration-300 group-hover:bg-creme-900/15" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
