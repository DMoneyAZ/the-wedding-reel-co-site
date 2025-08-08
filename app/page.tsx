'use client';
import { motion } from 'framer-motion';

export default function Page() {
  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages', href: '#packages' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111]">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#FAF9F6]/80 border-b border-[#E8E5DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo mark */}
            <div className="relative h-10 w-10 rounded-full bg-[#111111] grid place-items-center">
              {/* Minimal reel icon */}
              <div className="h-6 w-6 rounded-full border-2 border-white relative">
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-1 w-3 bg-white" />
                <span className="absolute -right-3 top-1/2 -translate-y-1/2 h-1 w-3 bg-white" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-xl sm:text-2xl font-serif tracking-wide">The Wedding Reel Co.</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#6B655E]">Cinematic Love Stories</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-[#2A2A2A] hover:text-[#D4AF37] transition">
                {l.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full border border-[#D4AF37] px-4 py-2 text-sm font-medium text-[#111111] hover:bg-[#D4AF37] hover:text-white transition">
              Book Your Date
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-serif text-white max-w-3xl"
          >
            Your story, seamlessly told.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-white/90 max-w-2xl"
          >
            Luxury wedding cinematography for couples who want timeless, soulful films. Serving Arizona and destinations worldwide.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-[#D4AF37] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition">Check Availability</a>
            <a href="#portfolio" className="rounded-full border border-white/70 text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-[#111111] transition">Watch Portfolio</a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-[#E8E5DF] bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center text-xs uppercase tracking-widest text-[#6B655E]">
          <div>Drone Certified</div>
          <div>Dual-Cam Coverage</div>
          <div>48hr Teaser Option</div>
          <div>Vendor Friendly</div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-serif">Featured Films</h2>
          <a href="#contact" className="text-sm text-[#D4AF37] hover:underline">Book your date →</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm bg-[#F9E6E0]"
            >
              <img
                alt="Wedding still"
                className="h-60 w-full object-cover group-hover:scale-105 transition"
                src={`https://images.unsplash.com/photo-1520${60 + i}73390465-6f0e5c2c5b${10 + i}?q=80&w=1200&auto=format&fit=crop`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="text-sm/none uppercase tracking-widest">Highlight Film</div>
                <div className="font-medium">Phoenix • Desert Botanical Garden</div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-white border-y border-[#E8E5DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-serif">Packages</h2>
          <p className="mt-2 text-[#6B655E] max-w-2xl">Transparent, customizable collections. Add drone, extra hours, or next‑day social edits to any package.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              name: 'Essentials',
              price: '$1,800',
              features: ['6 hours coverage', '1 cinematographer', '3–5 min highlight', 'Licensed music'],
            },{
              name: 'Signature',
              price: '$2,800',
              features: ['8 hours coverage', '2 cinematographers', '6–8 min film', 'Drone coverage'],
            },{
              name: 'Heirloom',
              price: '$4,200',
              features: ['10 hours coverage', '2+ cinematographers', '10–12 min film', 'Full ceremony + speeches'],
            }].map((p, idx) => (
              <div key={p.name} className={`rounded-2xl p-6 border ${idx===1?'border-[#D4AF37] bg-[#FAF9F6] shadow-md':'border-[#E8E5DF] bg-white'}`}>
                <div className="text-xs uppercase tracking-[0.25em] text-[#6B655E]">{p.name}</div>
                <div className="mt-2 text-3xl font-serif">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (<li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />{f}</li>))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex rounded-full bg-[#111111] text-white px-4 py-2 text-sm hover:bg-[#2A2A2A]">Check Availability</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif">About The Wedding Reel Co.</h2>
            <p className="mt-4 text-[#2A2A2A]">We craft elegant, true‑to‑you wedding films with a focus on authentic moments and editorial beauty. Our team uses cinema‑grade cameras, crisp audio, and thoughtful storytelling to create heirloom films you’ll return to for decades.</p>
            <ul className="mt-6 space-y-2 text-sm text-[#2A2A2A]">
              <li>• Based in Arizona • Available worldwide</li>
              <li>• Drone‑licensed pilots • Redundant audio on vows & toasts</li>
              <li>• Next‑day teaser & vertical socials available</li>
            </ul>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow">
            <iframe
              className="h-full w-full"
              src="https://player.vimeo.com/video/76979871?h=8272103f6e&title=0&byline=0&portrait=0"
              title="Wedding highlight"
              allow="autoplay; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-serif">Let’s make something beautiful</h2>
          <p className="mt-2 text-[#6B655E]">Tell us a little about your day and we’ll get back within 24 hours.</p>

          {/* Formspree: replace YOUR_FORM_ID */}
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" className="rounded-xl border border-[#E8E5DF] bg-[#FAF9F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Full Name" required />
              <input name="email" type="email" className="rounded-xl border border-[#E8E5DF] bg-[#FAF9F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="phone" type="tel" className="rounded-xl border border-[#E8E5DF] bg-[#FAF9F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Phone" />
              <input name="date" type="date" className="rounded-xl border border-[#E8E5DF] bg-[#FAF9F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Wedding Date" />
            </div>
            <input name="venue" className="rounded-xl border border-[#E8E5DF] bg-[#FAF9F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Venue / Location" />
            <textarea name="message" rows={5} className="rounded-xl border border-[#E8E5DF] bg-[#FAF9F6] px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="Tell us about your vision…"></textarea>
            <input type="hidden" name="_subject" value="New inquiry from The Wedding Reel Co." />
            <button className="mt-2 inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-medium text-white hover:opacity-90">Send Inquiry</button>
            <p className="text-xs text-[#6B655E]">Prefer email? Write us at <a className="underline" href="mailto:hello@theweddingreelco.com">hello@theweddingreelco.com</a></p>
          </form>

          <p className="text-xs text-[#6B655E] mt-4">Create a free account at formspree.io → New Form → copy the form ID → replace <code>YOUR_FORM_ID</code> above → commit to GitHub → Vercel redeploys automatically.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8E5DF] bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-serif text-lg">The Wedding Reel Co.</div>
            <p className="mt-2 text-sm text-[#6B655E]">Arizona • Worldwide</p>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Explore</div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.name}><a className="hover:underline" href={l.href}>{l.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:underline" href="mailto:hello@theweddingreelco.com">hello@theweddingreelco.com</a></li>
              <li>Mon–Fri, 9–6 MST</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium mb-2">Follow</div>
            <div className="flex gap-3">
              <a aria-label="Instagram" href="https://instagram.com/theweddingreelco" className="h-10 w-10 rounded-full border border-[#E8E5DF] grid place-items-center hover:bg-white">IG</a>
              <a aria-label="TikTok" href="https://tiktok.com/@theweddingreelco" className="h-10 w-10 rounded-full border border-[#E8E5DF] grid place-items-center hover:bg-white">TT</a>
              <a aria-label="Facebook" href="https://facebook.com/theweddingreelco" className="h-10 w-10 rounded-full border border-[#E8E5DF] grid place-items-center hover:bg-white">FB</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-[#6B655E] pb-8">© {new Date().getFullYear()} The Wedding Reel Co. All rights reserved.</div>
      </footer>
    </div>
  );
}
