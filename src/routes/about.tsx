import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { TrustStrip } from "@/components/site/Stats";
import { WhyChoose } from "@/components/site/WhyChoose";
import studentimg from "@/assets/aboutimg.png"
import { Target, Lightbulb, CheckCircle2, TrendingUp, Award, UserCheck, Settings, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | CADPOINT Tiruvarur" },
      { name: "description", content: "Learn about CADPOINT Tiruvarur, our mission, vision, and the expert team behind our premier CAD and IT training institute." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="About Us" />

          <div className="max-w-3xl mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
              Empowering careers through <span className="text-brand-red">expert training</span> since 2010.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Caddxpert AI Innovations, powered by CADPOINT, is committed to delivering industry-focused technical education that bridges the gap between academic learning and real-world careers. We provide comprehensive, hands-on training using the latest engineering, design, business, and digital technologies, helping students and professionals build practical skills that meet current industry standards.<br/><br/>

              Our experienced trainers combine technical expertise with real-world industry experience to deliver high-quality learning through practical sessions, live projects, and career-focused guidance. Along with industry-recognized certification and placement assistance, we are dedicated to empowering every learner with the confidence, knowledge, and skills needed to build a successful professional career.
            </p>
          </div>
        </div>

        <WhyChoose />
        <TrustStrip />

        {/* Mission & Vision Section */}
        {/* <section className="py-20 md:py-28 bg-white">
          <div className="container-x">
            <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
              <div className="card-soft p-7 group" data-aos="fade-up" data-aos-delay="100">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-red to-brand-dark-red text-white flex items-center justify-center shadow-[0_10px_25px_-10px_rgba(79,70,229,0.6)] group-hover:scale-110 transition-transform">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-charcoal">Our Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  To empower students and professionals with practical, industry-ready skills, bridging the gap between theoretical knowledge and real-world application, ensuring robust career success in today's competitive landscape.
                </p>
              </div>
              
              <div className="card-soft p-7 group" data-aos="fade-up" data-aos-delay="200">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-red to-brand-dark-red text-white flex items-center justify-center shadow-[0_10px_25px_-10px_rgba(79,70,229,0.6)] group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-charcoal">Our Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  To become a leading technology and engineering training institute globally, recognized for delivering excellence, driving innovation, and transforming quality education into impactful career opportunities.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Why Choose Caddxpert AI Innovations */}
        {/* <section className="py-20 md:py-28 bg-slate-50">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">Why Choose Caddxpert AI Innovations</h2>
              <p className="mt-4 text-lg text-muted-foreground">Discover the unique advantages that set us apart.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: UserCheck, title: "Industry Expert Trainers" },
                { icon: Settings, title: "Hands-on Practical Training" },
                { icon: Target, title: "Real-Time Projects" },
                { icon: Lightbulb, title: "Latest Industry Software" },
                { icon: TrendingUp, title: "Placement Assistance" },
                { icon: Award, title: "Career Guidance" },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all group" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 text-brand-red flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Our Training Methodology */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">Our Training Methodology</h2>
              <p className="mt-4 text-lg text-muted-foreground">A proven path to your success.</p>
            </div>

            <div className="relative overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ WebkitOverflowScrolling: "touch" }}>
              <div className="relative" style={{ minWidth: "600px" }}>
                <div className="absolute top-8 left-0 w-full h-1 bg-slate-100 rounded-full"></div>
                <div className="grid grid-cols-5 gap-8">
                  {["Learn", "Practice", "Build Projects", "Get Certified", "Get Placed"].map((step, idx) => (
                    <div key={idx} className="relative z-10 flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
                      <div className="h-16 w-16 bg-white border-4 border-brand-red text-brand-red font-bold text-xl rounded-full flex items-center justify-center mb-6 shadow-lg">
                        0{idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-charcoal">{step}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Benefits */}
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="container-x">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-6">Student Benefits</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  We provide a comprehensive ecosystem designed to support your journey from a beginner to an industry-ready professional.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {["Industry-Oriented Curriculum", "Live Projects", "Internship Support", "Resume Building", "Mock Interviews", "Placement Assistance"].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-brand-red" />
                      </div>
                      <span className="font-semibold text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative" data-aos="fade-left">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark-red to-brand-red opacity-20 mix-blend-multiply z-10"></div>
                  <img src={studentimg} alt="Students collaborating" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 md:py-20">
          <div className="container-x">
            <div
              data-aos="zoom-in"
              className="relative overflow-hidden rounded-[2rem] bg-charcoal text-charcoal-foreground px-6 py-12 md:px-14 md:py-16"
            >
              <div className="absolute inset-0 bg-[radial-gradient(50%_70%_at_10%_20%,oklch(0.5_0.22_270/0.45),transparent_60%)]" />
              <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-brand-red/30 blur-3xl" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-xl">
                  <span className="eyebrow !bg-white/10 !text-white">Admissions Open</span>
                  <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                    Start Your Career Journey with Caddxpert AI Innovations
                  </h2>
                  <p className="mt-3 text-white/75">
                    Join our industry-focused training programs and build the skills required for today's competitive job market. Explore our courses or connect with our experts to find the right learning path for your career.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/courses" className="btn-primary">
                    Explore Courses <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/enquiry" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 hover:!text-white">
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
