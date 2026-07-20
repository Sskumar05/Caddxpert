import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Caddxpert AI Innovations" },
      { name: "description", content: "Terms of Service and conditions of use for Caddxpert AI Innovations training, certification, and placement programs." },
    ],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Terms of Service" />

          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="eyebrow">Legal Information</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Please read these Terms of Use carefully before using the Caddxpert AI Innovations website and services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Terms of Use</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Caddxpert AI Innovations. By accessing, browsing, or using our website, you agree to comply with these Terms of Use. These terms are designed to ensure a safe, transparent, and professional experience for every visitor, student, and organization interacting with our website and services. If you do not agree with any part of these terms, please discontinue using the website.
              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Scope</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Use apply to all visitors, students, parents, professionals, organizations, and anyone accessing the Caddxpert AI Innovations website. They govern the use of our training programs, workshops, internships, certification courses, online resources, enquiry forms, placement-related services, and all other educational services provided through this website. By continuing to use our website, you acknowledge that you have read and accepted these terms.
              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Services</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
Caddxpert AI Innovations provides industry-focused training in CAD, Engineering, Information Technology, Artificial Intelligence, Software Development, Industrial Automation, Electronics, Digital Marketing, Data Science, Professional Certification Programs, Workshops, and Placement Assistance.<br/>

The information available on this website is provided for educational and informational purposes only. Course content, duration, schedules, fees, eligibility, and other details may be updated or modified periodically to improve our services without prior notice.              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed marker:text-brand-red">
                <li>Professional training programs in CAD, Engineering, IT, AI, Software Development, Digital Marketing, Industrial Automation, and Electronics.</li>
                <li>Workshops and practical internships.</li>
                <li>Industry-recognized certifications.</li>
                <li>Placement assistance and career guidance.</li>
              </ul>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Registration & User Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                When submitting an enquiry, registering for a course, or communicating with us through our website, you agree to provide accurate, complete, and up-to-date information.<br/>

Providing false, misleading, or incomplete information may result in the rejection of your enquiry or registration. Users are responsible for maintaining the accuracy of the information they submit and for updating it whenever necessary.              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Acceptable Use</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                You agree to use our website and services only for lawful purposes. You are strictly prohibited from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed marker:text-brand-red">
                <p>While using this website, you agree not to:</p>
                <li>Upload or distribute viruses, malware, or any harmful software.</li>
                <li>Attempt unauthorized access to our website, servers, databases, or systems.</li>
                <li>Copy, reproduce, modify, or misuse any website content without permission.</li>
                <li>Submit false, misleading, or fraudulent information.</li>
                <li>Engage in spam, abusive behavior, or unlawful activities.</li>
                <li>Violate any applicable laws or intellectual property rights.</li>
              </ul>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Intellectual Property</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
All content available on this website, including text, graphics, images, videos, logos, icons, branding, course materials, downloadable resources, and other digital assets, is the intellectual property of Caddxpert AI Innovations, unless otherwise stated.              </p>
              <p className="text-muted-foreground leading-relaxed">
No part of this website may be copied, reproduced, distributed, published, modified, or reused without prior written permission from Caddxpert AI Innovations.              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
Your privacy is important to us. Any personal information collected through enquiry forms, course registrations, contact forms, or other communication channels will be handled in accordance with our Privacy Policy. By using this website, you also agree to the practices described in our Privacy Policy.              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
While Caddxpert AI Innovations makes every effort to ensure that the information published on this website is accurate, complete, and up to date, we do not guarantee that all content will always be free from errors, omissions, or interruptions.<br/>

We shall not be held responsible for any direct, indirect, incidental, or consequential loss arising from the use of this website, reliance on its content, technical issues, or links to third-party websites.              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
Caddxpert AI Innovations reserves the right to update, revise, or modify these Terms of Use at any time without prior notice. Any updates will become effective immediately after being published on this page. We encourage users to review this page periodically to stay informed about the latest terms.              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
If you have any questions, concerns, or require clarification regarding these Terms of Use, please feel free to contact us through our Contact page or our official communication channels. Our team will be happy to assist you.              </p>
            </div>

            <div className="mt-12 text-center" data-aos="fade-up">
              <p className="text-sm font-medium text-muted-foreground/70">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
