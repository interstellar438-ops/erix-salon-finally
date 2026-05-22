"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/lib/site";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0f14]/95 border-b border-white/10 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
          <a
            href="/"
            className="relative z-[70] flex items-center"
          >
            <Image
              src="/logo-transparent.png"
              alt="Eric's Salon"
              width={160}
              height={52}
              priority
              style={{
                height: 52,
                width: "auto",
                objectFit: "contain",
                filter: !scrolled ? "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" : "none",
              }}
            />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative text-[0.72rem] font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${
                  scrolled
                    ? "text-white/70 hover:text-white"
                    : "text-navy/70 hover:text-navy"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                  scrolled ? "bg-white" : "bg-gold"
                }`} />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/book"
              className={`rounded-full px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${
                scrolled
                  ? "bg-white text-navy hover:bg-white/90"
                  : "bg-navy text-white hover:bg-ink"
              }`}
            >
              Book Now
            </a>
          </div>

           <button
             aria-label="Toggle menu"
             onClick={() => setOpen((v) => !v)}
             className={`relative z-[90] grid size-14 place-items-center rounded-2xl border transition-all duration-300 shadow-sm md:hidden ${
               open || scrolled
                 ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                 : "border-line bg-surface/90 text-navy hover:bg-surface"
             }`}
             onTouchStart={(e) => e.currentTarget.classList.add('touch-active')}
             onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')}
             onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')}
           >
             {open ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-[#0d0f14] flex flex-col pt-32 px-8 pb-12 md:hidden"
          >
             <div className="flex flex-col gap-6">
               {site.nav.map((item, i) => (
                 <motion.a
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.1 + i * 0.05 }}
                   key={item.href}
                   href={item.href}
                   onClick={() => setOpen(false)}
                   className="font-serif text-5xl text-white hover:text-gold transition-colors py-4"
                 >
                   {item.label}
                 </motion.a>
               ))}
             </div>

            <div className="mt-auto space-y-6">
               <div className="h-px w-full bg-white/10" />
               <div>
                 <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold font-bold">
                   Contact Us
                 </p>
                 <a
                   href={`tel:${site.phones[0].replace(/\s/g, '')}`}
                   className="mt-2 block text-2xl text-white hover:text-gold transition-colors font-serif"
                 >
                   {site.phones[0]}
                 </a>
               </div>
               <a
                href="/book"
                onClick={() => setOpen(false)}
                className="block w-full rounded-2xl bg-gold py-5 text-center text-[0.8rem] font-bold uppercase tracking-[0.2em] text-white shadow-xl hover:bg-gold-soft transition-all"
              >
                Book Your Visit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
