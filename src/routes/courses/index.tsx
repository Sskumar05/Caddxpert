import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { courseCategories } from "@/lib/data";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Course Categories | CADD XPERT Tiruvarur" },
      { name: "description", content: "Explore our wide range of industry-oriented course categories in CAD, BIM, IT, Full Stack, Data Science, and more." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Courses" />
          
          <div className="max-w-3xl mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
              Our <span className="text-brand-red">Course</span> Categories
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose from our comprehensive selection of professional course categories designed to make you industry-ready.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((cat, i) => (
              <div
                key={cat.slug}
                data-aos="fade-up"
                data-aos-delay={(i % 4) * 100}
                className="card-soft overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 transition-opacity duration-500 group-hover:bg-charcoal/40" />
                  {/* <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="font-display text-2xl md:text-3xl font-extrabold text-white drop-shadow-md text-center z-10 group-hover:scale-110 transition-transform">
                      {cat.name}
                    </span>
                  </div> */}
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
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
