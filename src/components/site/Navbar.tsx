import { useEffect, useState, useRef } from "react";
import { Menu, X, MessageCircle, Compass, ChevronDown } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import logoImg from "@/assets/logo-removebg-preview.png";
import { courses, courseCategories } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/placements", label: "Placements" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Desktop Mega Menu State
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeDesktopCategory, setActiveDesktopCategory] = useState(courseCategories[0]?.slug);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Mobile Accordion State
  const [isMobileCoursesExpanded, setIsMobileCoursesExpanded] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setIsMobileCoursesExpanded(false);
    setExpandedMobileCategory(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(8,28,75,0.25)]" : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span>
            <img src={logoImg} alt="Logo" className="h-10 w-15 sm:h-12 sm:w-17" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-md font-extrabold text-charcoal sm:text-lg ">CADDXPERT</div>
            <div className="text-[10px] tracking-widest text-muted-foreground sm:-mt-0.5">AI INNOVATIONS</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const isActive = (l.href === "/" && location.pathname === "/") || (l.href !== "/" && location.pathname.startsWith(l.href));
            
            if (l.label === "Courses") {
              return (
                <div 
                  key={l.href} 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={l.href}
                    className={`text-sm font-medium transition-colors hover:text-brand-red flex items-center gap-1 py-4 ${
                      isActive ? "text-brand-red" : "text-foreground/80"
                    }`}
                  >
                    {l.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  <div className={`absolute top-[90%] left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${isMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                    <div className="w-[800px] max-h-[calc(100vh-6rem)] bg-background rounded-2xl shadow-xl border overflow-hidden flex flex-row h-[450px]">
                      {/* Left Panel: Categories */}
                      <div className="w-[35%] bg-muted/40 border-r overflow-y-auto py-2 custom-scrollbar">
                        {courseCategories.map(cat => (
                          <div 
                            key={cat.slug}
                            onMouseEnter={() => setActiveDesktopCategory(cat.slug)}
                            className={`px-4 py-3 cursor-pointer transition-colors ${activeDesktopCategory === cat.slug ? 'bg-brand-red/5 border-r-2 border-brand-red' : 'hover:bg-muted'}`}
                          >
                            <Link 
                              to={`/courses/category/${cat.slug}`} 
                              onClick={closeMegaMenu}
                              className={`block text-sm font-medium ${activeDesktopCategory === cat.slug ? 'text-brand-red' : 'text-foreground/80'}`}
                            >
                              {cat.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                      {/* Right Panel: Sub-Courses */}
                      <div className="w-[65%] p-6 overflow-y-auto custom-scrollbar bg-card">
                        <div className="mb-4 pb-2 border-b">
                           <h3 className="text-lg font-bold text-charcoal">
                             {courseCategories.find(c => c.slug === activeDesktopCategory)?.name}
                           </h3>
                           <p className="text-xs text-muted-foreground mt-1">
                             {courseCategories.find(c => c.slug === activeDesktopCategory)?.desc}
                           </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {courses.filter(c => c.categorySlug === activeDesktopCategory).map(c => (
                            <Link 
                              key={c.slug} 
                              to={`/courses/${c.slug}`} 
                              onClick={closeMegaMenu} 
                              className="group flex flex-col p-3 rounded-lg hover:bg-muted transition-colors border border-transparent hover:border-border/50"
                            >
                              <div className="font-medium text-sm group-hover:text-brand-red transition-colors line-clamp-2">{c.name}</div>
                              <div className="text-xs text-muted-foreground line-clamp-2 mt-1">{c.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors hover:text-brand-red py-4 ${
                  isActive ? "text-brand-red" : "text-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp hidden sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a> */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background absolute top-full inset-x-0 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-xl">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => {
              const isActive = (l.href === "/" && location.pathname === "/") || (l.href !== "/" && location.pathname.startsWith(l.href));
              
              if (l.label === "Courses") {
                return (
                  <div key="courses" className="flex flex-col">
                    <button 
                      onClick={() => setIsMobileCoursesExpanded(!isMobileCoursesExpanded)}
                      className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive ? "text-brand-red bg-muted" : "text-foreground/80 hover:bg-muted"
                      }`}
                    >
                      {l.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileCoursesExpanded ? "rotate-180" : ""}`} />
                    </button>
                    
                    {/* Mobile Accordion */}
                    <div className={`overflow-hidden transition-all duration-300 ${isMobileCoursesExpanded ? 'max-h-[2000px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 flex flex-col gap-1 border-l-2 border-muted ml-3 py-1">
                        {courseCategories.map(cat => (
                          <div key={cat.slug} className="flex flex-col">
                            <button 
                              onClick={() => setExpandedMobileCategory(expandedMobileCategory === cat.slug ? null : cat.slug)}
                              className="flex items-center justify-between px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-red transition-colors text-left"
                            >
                              {cat.name}
                              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${expandedMobileCategory === cat.slug ? "rotate-180 text-brand-red" : "text-muted-foreground"}`} />
                            </button>
                            
                            {/* Sub-courses Accordion */}
                            <div className={`overflow-hidden transition-all duration-300 ${expandedMobileCategory === cat.slug ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                              <div className="pl-4 flex flex-col gap-1 border-l-2 border-brand-red/20 ml-3 py-2 mb-2 bg-muted/30 rounded-r-md">
                                <Link 
                                  to={`/courses/category/${cat.slug}`} 
                                  onClick={closeMobileMenu}
                                  className="text-xs font-bold text-brand-red py-1.5 px-2 hover:bg-brand-red/10 rounded-md transition-colors inline-block w-fit mb-1"
                                >
                                  View all in category &rarr;
                                </Link>
                                {courses.filter(c => c.categorySlug === cat.slug).map(c => (
                                  <Link 
                                    key={c.slug} 
                                    to={`/courses/${c.slug}`} 
                                    onClick={closeMobileMenu}
                                    className="text-xs text-muted-foreground hover:text-brand-red py-1.5 px-2 transition-colors line-clamp-1 block"
                                  >
                                    {c.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={closeMobileMenu}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted transition-colors ${
                    isActive ? "text-brand-red bg-muted" : "text-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
