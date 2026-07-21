import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { testimonialsData } from "@/lib/data";

export function Testimonials({ limit }: { limit?: number }) {
  const displayItems = limit ? testimonialsData.slice(0, limit) : testimonialsData;
  const [i, setI] = useState(0);
  
  const next = () => setI((p) => (p + 1) % displayItems.length);
  const prev = () => setI((p) => (p - 1 + displayItems.length) % displayItems.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-surface">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="eyebrow">Student Voices</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-charcoal">
            Hear from our successful students
          </h2>
        </div>

        <div className="mt-12 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative card-soft p-8 md:p-12 text-center flex flex-col justify-between min-h-[380px] md:min-h-[400px]">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-brand-red/20" />
            
            <div className="flex-grow flex flex-col justify-center">
              <div className="flex justify-center gap-1">
                {Array.from({ length: displayItems[i].rating }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-5 text-lg md:text-xl text-foreground/90 leading-relaxed">
                "{displayItems[i].text}"
              </p>
            </div>
            
            <div className="mt-8 flex flex-col w-full">
              <div className="flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-red to-brand-dark-red text-white flex items-center justify-center font-bold shrink-0">
                  {displayItems[i].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-charcoal">{displayItems[i].name}</div>
                  <div className="text-xs text-muted-foreground">{displayItems[i].course}</div>
                </div>
              </div>
              
              <div className="w-full flex justify-end mt-8 md:mt-4">
                <a 
                  href={displayItems[i].link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-semibold text-brand-red flex items-center group transition-colors hover:text-brand-dark-red cursor-pointer"
                >
                  View Review <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} className="h-10 w-10 rounded-full border bg-card hover:bg-charcoal hover:text-white transition-colors flex items-center justify-center">
              <ChevronLeft className="h-5 w-5" />
            </button>
            {displayItems.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-brand-red" : "w-2 bg-muted-foreground/30"}`}
                aria-label={`Go to testimonial ${k + 1}`}
              />
            ))}
            <button onClick={next} className="h-10 w-10 rounded-full border bg-card hover:bg-charcoal hover:text-white transition-colors flex items-center justify-center">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {limit && (
            <div className="mt-10 flex justify-center">
              <Link to="/testimonials" className="btn-primary">
                Read More Testimonials <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
