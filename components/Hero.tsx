"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { ScrollReveal, StaggerContainer, staggerChild } from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="gradient-cream relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
       <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20 lg:px-10 sm:gap-8 sm:flex-col sm:items-start">
        <motion.div style={{ y: textY, opacity }} className="max-w-xl">
          <ScrollReveal delay={0.1}>
            <p className="mb-5 text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold">
              Premium Kabira Hair Studio
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-serif text-4xl leading-[1.1] text-navy sm:text-6xl lg:text-[5.4rem] lg:leading-[0.98]">
              Style, crafted{" "}
              <span className="italic text-gold">with care.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted lg:mt-8 lg:text-[1.05rem] lg:leading-[1.85]">
              Where modern style meets precision craft. Expert cuts, balayage, and
              luxury treatments designed for every texture &mdash; at the heart of
              Kabira Country Club.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:mt-10">
              <motion.a
                href="/book"
                className="animate-shine w-full sm:w-auto rounded-full bg-navy px-8 py-4 text-center text-[0.78rem] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:bg-ink"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(26,5,5,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
              </motion.a>
              <motion.a
                href={site.phoneHref}
                className="w-full sm:w-auto rounded-full border border-navy/10 bg-white/50 backdrop-blur-sm px-8 py-4 text-center text-[0.78rem] font-bold uppercase tracking-[0.2em] text-navy transition-all hover:bg-white/80"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us
              </motion.a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.55}>
            <StaggerContainer className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8" staggerDelay={0.15}>
              <motion.div variants={staggerChild}>
                <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-gold font-bold">
                  Experience
                </dt>
                <dd className="mt-1 font-serif text-2xl text-navy">20+ yrs</dd>
              </motion.div>
              <motion.div variants={staggerChild}>
                <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-gold font-bold">
                  Reviews
                </dt>
                <dd className="mt-1 font-serif text-2xl text-navy">4.9★</dd>
              </motion.div>
              <motion.div variants={staggerChild}>
                <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-gold font-bold">
                  Clients
                </dt>
                <dd className="mt-1 font-serif text-2xl text-navy">4k+</dd>
              </motion.div>
            </StaggerContainer>
          </ScrollReveal>
        </motion.div>

        <ScrollReveal delay={0.3} direction="right" className="relative mt-10 lg:mt-0">
          <motion.div 
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] shadow-[var(--shadow-large)] outline outline-1 outline-navy/5"
            suppressHydrationWarning
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80"
              alt="Stylist working with a client at Eric's Saloon"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div 
            className="absolute -left-4 top-10 hidden size-40 place-items-center rounded-full border border-gold/30 bg-white/80 text-center backdrop-blur-md sm:grid lg:-left-10 lg:size-44"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
          >
            <div>
              <p className="font-serif text-xl text-navy">Eric Ras</p>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gold">
                Est. Bukoto
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -bottom-6 right-6 hidden items-center gap-3 rounded-2xl border border-line bg-white/90 backdrop-blur-md px-5 py-4 shadow-xl sm:flex"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5, ease: "easeOut" }}
          >
            <motion.div 
              className="grid size-10 place-items-center rounded-full bg-gold text-white shadow-sm font-bold"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              ✦
            </motion.div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-gold font-bold">
                Now booking
              </p>
              <p className="text-sm font-medium text-navy">
                This week &middot; limited slots
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
      
      {/* Mobile Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="text-[0.6rem] uppercase tracking-[0.3em] font-bold">Scroll</p>
        <motion.div 
          className="h-10 w-px bg-gradient-to-b from-navy to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
