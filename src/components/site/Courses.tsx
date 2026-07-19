import { ArrowRight, LayoutGrid } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { courseCategories } from "@/lib/data";

export function Courses({ limit }: { limit?: number }) {
  const displayCategories = limit ? courseCategories.slice(0, limit) : courseCategories;

  return (
    <section id="courses" className="py-20 md:py-28 bg-surface">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div data-aos="fade-right" className="max-w-2xl">
            <span className="eyebrow">Popular Courses</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-charcoal">
              Industry-ready programs that get you hired
            </h2>
            <p className="mt-3 text-muted-foreground">
              Choose from CAD, civil, mechanical, electrical and IT courses — all with certificates and placement support.
            </p>
          </div>
          <Link to="/courses" className="btn-outline self-start md:self-end" data-aos="fade-left">
            View All Courses <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayCategories.map((cat, i) => (
            <div
              key={cat.slug}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
              className="card-soft overflow-hidden flex flex-col group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/60 transition-opacity duration-500 group-hover:bg-charcoal/40" />
              </div>
              <div className="p-5 flex-1 flex flex-col relative z-20 bg-card">
                <h3 className="font-bold text-charcoal text-xl">{cat.name}</h3>
                <p className="mt-1.5 text-muted-foreground flex-1">{cat.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <LayoutGrid className="h-4 w-4" /> View Courses
                  </span>
                  <Link
                    to={`/courses/category/${cat.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-red hover:gap-2 transition-all"
                  >
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {limit && (
          <div className="mt-12 flex justify-center">
            <Link to="/courses" className="btn-primary">
              View All Courses <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
