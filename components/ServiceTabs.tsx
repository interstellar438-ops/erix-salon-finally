"use client";

import { useState } from "react";
import Image from "next/image";
import { serviceCategories, type ServiceCategory } from "@/lib/site";

export function ServiceTabs() {
  const [active, setActive] = useState<ServiceCategory["id"]>("haircuts");
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState<ServiceCategory["id"] | null>(null);
  const current = serviceCategories.find((c) => c.id === active)!;

  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold">
            Our Signature Services
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Hair, color, and treatment.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Tailored services for every texture &mdash; from precision cuts to
            balayage and Brazilian smoothing.
          </p>
        </div>

         {/* Mobile Accordion & Desktop Tabs */}
         <div className="mb-8">
           {/* Mobile Accordion */}
           <div className="space-y-4 md:hidden">
             {serviceCategories.map((category) => (
               <div key={category.id} className="border border-line rounded-xl overflow-hidden">
                 <button
                   onClick={() => setMobileAccordionOpen(
                     mobileAccordionOpen === category.id ? null : category.id
                   )}
                   className={`w-full flex items-center justify-between px-6 py-4 text-left font-medium text-[0.9rem] 
                     ${mobileAccordionOpen === category.id 
                       ? "bg-navy text-white" 
                       : "bg-surface text-navy hover:bg-gray-50"}
                   `}
                 >
                   <span>{category.label}</span>
                   <svg 
                     className={`h-4 w-4 transition-transform duration-200 ${mobileAccordionOpen === category.id ? "rotate-180" : ""}`}
                     xmlns="http://www.w3.org/2000/svg" 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                   >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                       d="M19 9l-7 7-7-7"/>
                     </svg>
                 </button>
                 
                 {mobileAccordionOpen === category.id && (
                   <div className="border-t border-line bg-white/5 px-6 py-4">
                     <div className="space-y-3">
                       <p className="text-[0.78rem] uppercase tracking-[0.2em] text-gold font-medium">
                         {category.label}
                       </p>
                       <h3 className="mt-2 font-serif text-2xl leading-tight text-navy">
                         {category.blurb}
                       </h3>
                       
                       <ul className="mt-4 divide-y divide-line">
                         {category.items.map((item) => (
                           <li
                             key={item.name}
                             className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-3"
                           >
                             <div>
                               <p className="text-[0.85rem] font-medium text-navy">
                                 {item.name}
                               </p>
                               {item.note && (
                                 <p className="mt-1 text-[0.75rem] italic text-ink-muted">
                                   {item.note}
                                 </p>
                               )}
                             </div>
                             <span className="text-[0.85rem] font-semibold tracking-wide text-gold">
                               {item.price}
                             </span>
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                 )}
               </div>
             ))}
           </div>
           
           {/* Desktop Tabs */}
           <div className="hidden md:block">
             <div className="inline-flex overflow-x-auto no-scrollbar rounded-full border border-line bg-surface p-1.5 shadow-sm max-w-full">
               <div className="flex flex-nowrap">
                 {serviceCategories.map((c) => (
                   <button
                     key={c.id}
                     onClick={() => setActive(c.id)}
                     className={`whitespace-nowrap rounded-full px-6 py-2.5 text-[0.74rem] font-medium uppercase tracking-[0.2em] transition-all ${
                       active === c.id
                         ? "bg-navy text-white shadow"
                         : "text-ink-muted hover:text-navy"
                     }`}
                   >
                     {c.label}
                   </button>
                 ))}
               </div>
             </div>
           </div>
         </div>

        <div
          key={current.id}
          className="fade-up mt-12 grid gap-10 overflow-hidden rounded-[32px] border border-line bg-surface p-6 shadow-[var(--shadow-soft)] lg:grid-cols-[1.1fr_1.4fr] lg:p-10"
        >
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl">
            <Image
              src={current.image}
              alt={current.label}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/75">
                Category
              </p>
              <p className="mt-1 font-serif text-3xl">{current.label}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[0.78rem] uppercase tracking-[0.2em] text-gold">
              {current.label}
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-navy lg:text-4xl">
              {current.blurb}
            </h3>

            <ul className="mt-8 divide-y divide-line">
              {current.items.map((item) => (
                <li
                  key={item.name}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-4"
                >
                  <div>
                    <p className="text-[0.95rem] font-medium text-navy">
                      {item.name}
                    </p>
                    {item.note && (
                      <p className="mt-1 text-[0.82rem] italic text-ink-muted">
                        {item.note}
                      </p>
                    )}
                  </div>
                  <span className="text-[0.95rem] font-semibold tracking-wide text-gold">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-[0.82rem] italic text-ink-muted">
          Pricing starts at the listed amount and may vary by stylist, length,
          and density. A consultation confirms your final quote.
        </p>
      </div>
    </section>
  );
}
