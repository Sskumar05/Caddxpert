import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Building2, IndianRupee, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import { placementCompanies, placementStories } from "@/lib/data";
import heroStudent from "@/assets/INfynuxs_Logo.png";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements | CADD XPERT Tiruvarur" },
      { name: "description", content: "View our successful placement records and the top companies where our students are working." },
    ],
  }),
  component: PlacementsPage,
});

const placementHighlights = [
"Specializing in Web Development to build scalable, high-performance applications.",
"Premium Native & Cross-Platform Mobile App Development (iOS & Android).",
"Advanced AI Integrations and seamless UI/UX Design tailored to your brand.",
"A globally recognized, registered MSME & StartupTN enterprise.",
];

function PlacementsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Placements" />


          {/* ── Existing page content ── */}
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="eyebrow">Placement Success</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-charcoal">
              Our graduates work at <span className="text-brand-red">India's</span> top companies
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              2,000+ students placed across CAD, engineering and IT roles with leading employers.
            </p>
          </div>

          <div className="mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" data-aos="fade-up">
            {placementCompanies.map((c) => (
              <div
                key={c}
                className="h-16 rounded-xl border bg-card flex items-center justify-center px-3 text-center text-sm font-bold text-charcoal/80 hover:border-brand-red hover:text-brand-red transition-colors"
              >
                {c}
              </div>
            ))}
          </div>



                 {/* ── Premium Split-Layout Hero ── */}
          <div
            className="mb-20 rounded-3xl border bg-white shadow-xl overflow-hidden"
            data-aos="fade-up"
          >
            <div className="grid md:grid-cols-2 min-h-[520px]">
              {/* Left – Image Panel */}
              <div className="relative flex items-center justify-center p-10 bg-gradient-to-br from-rose-50 via-white to-red-50 overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />

                <div
                  className="relative z-10 rounded-2xl overflow-hidden shadow-2xl max-w-xs w-full"
                  style={{ animation: "floatY 4s ease-in-out infinite" }}
                >
                  <img
                    src={heroStudent}
                    alt="Placed student"
                    className="w-full h-full object-cover"
                  />
                  {/* Floating badge */}
                  {/* <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg px-4 py-3 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-red to-brand-dark-red flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Students Placed</p>
                      <p className="font-extrabold text-charcoal text-base leading-tight">2,000+</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Right – Content Panel */}
              <div className="flex flex-col justify-center p-10 md:p-12 lg:p-14" data-aos="fade-left" data-aos-delay="100">
                {/* <span className="eyebrow mb-4">Career Support</span> */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal leading-tight">
                  Empowering growth through<br />
                  <span className="text-brand-red">expert IT solutions.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
Infynux Solutions is your trusted partner for driving digital transformation. Based in Nagapattinam, we deliver cutting-edge technology that bridges the gap between your vision and real-world success.                </p>

                <ul className="mt-7 space-y-3">
                  {placementHighlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9">
                  <Link to="https://www.infynuxsolutions.in/" className="btn-primary inline-flex items-center gap-2">
                    Visit Official Website <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>



          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {placementStories.map((s, i) => (
              <div
                key={s.name}
                data-aos="zoom-in"
                data-aos-delay={(i % 4) * 100}
                className="card-soft p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-red to-brand-dark-red text-white flex items-center justify-center font-bold text-lg">
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-charcoal">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.role}</div>
                  </div>
                </div>
                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Building2 className="h-4 w-4 text-brand-red" /> {s.company}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <IndianRupee className="h-4 w-4 text-brand-red" /> {s.pkg}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <TrendingUp className="h-4 w-4 text-brand-red" /> {s.course}
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
