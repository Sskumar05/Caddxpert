import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageWrapper } from "@/components/site/PageWrapper";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Caddxpert AI Innovations" },
      { name: "description", content: "Privacy Policy for Caddxpert AI Innovations. Learn how we collect, use, and protect your personal information." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1">
        <div className="container-x">
          <Breadcrumb title="Privacy Policy" />

          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="eyebrow">Legal Information</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-charcoal leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Learn how we collect, use, and protect your personal information at Caddxpert AI Innovations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Caddxpert AI Innovations. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us when you use our services, including our CAD, Engineering, IT, AI, Software Development, Digital Marketing, and professional training programs.
              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Information We Collect</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We collect personal information only when you voluntarily submit it to us. This typically occurs when you interact with our website through enquiry forms, course registrations, contact forms, or other direct communication channels. The types of information we may collect include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed marker:text-brand-red">
                <li>Full Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>City of Residence</li>
                <li>Course of Interest</li>
              </ul>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">How We Use Your Information</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                The information we collect is strictly used to provide and improve our educational services. Specifically, we use your data for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed marker:text-brand-red">
                <li>Responding to your enquiries and questions.</li>
                <li>Providing detailed information about our courses and programs.</li>
                <li>Processing admissions and managing course registrations.</li>
                <li>Offering ongoing student support and academic guidance.</li>
                <li>Providing placement assistance and career services.</li>
                <li>Improving our website, training programs, and overall service quality.</li>
              </ul>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Information Sharing</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Caddxpert AI Innovations strictly respects your privacy. We <strong className="text-charcoal font-semibold">do not</strong> sell, rent, or trade your personal information to third parties for marketing or any other purposes. 
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We may only share your information in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed marker:text-brand-red">
                <li>With trusted service providers who assist us in operating our website or delivering our services, under strict confidentiality agreements.</li>
                <li>When we are legally required to do so by law, court order, or governmental regulation.</li>
              </ul>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate physical, electronic, and managerial security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We continuously review and update our security protocols to ensure your data remains safe.
              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Your Rights</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                You have the right to control your personal data. At any time, you may request to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground leading-relaxed marker:text-brand-red">
                <li>Access the personal information we hold about you.</li>
                <li>Correct any inaccurate or incomplete information.</li>
                <li>Delete your personal data from our systems.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                To exercise any of these rights, please contact our institute directly via the details provided on our Contact page.
              </p>
            </div>

            <div className="card-soft p-8 md:p-10" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-charcoal mb-4">Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                Caddxpert AI Innovations reserves the right to update or modify this Privacy Policy periodically to reflect changes in our practices or legal requirements. The latest version of our Privacy Policy will always be available on this page. We encourage you to review this page periodically.
              </p>
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
