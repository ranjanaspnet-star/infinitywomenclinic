import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useSiteData } from "@/context/SiteDataContext";
import { CheckCircle } from "lucide-react";
import doctorPortrait from "@/images/doctor-portrait.jpeg";
import clinicInterior from "@/assets/clinic-interior.jpg";

const values = [
  "Patient-centered, compassionate care",
  "Evidence-based medical practices",
  "Respect for privacy and dignity",
  "Continuous education and innovation",
  "Inclusive, welcoming environment",
  "Holistic approach to women's health",
];

const AboutPage = () => {
  const { content } = useSiteData();

  return (
    <Layout>
      <SEOHead title="About Us" description="Learn about Infinity Women Clinic — our mission, values, and dedicated team of gynecological specialists." keywords="about Infinity Women Clinic, best gynecologist in Maharashtra, Dr. Trishna Taralkar, women's health clinic Maharashtra, top women doctor, leading gynecology specialist, women's healthcare mission, top 5 doctors Maharashtra" />
      
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{content.aboutTitle}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">{content.aboutDescription}</p>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img 
              src={doctorPortrait} 
              alt="Dr. Trishna Taralkar - Lead Gynecologist" 
              loading="lazy" 
              width={800} 
              height={1024} 
              className="rounded-2xl shadow-medium w-full max-w-md mx-auto object-cover aspect-square" 
            />
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Meet Dr. Trishna Taralkar</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With over 19 years of experience in obstetrics and gynecology, Dr. Trishna Taralkar founded Infinity Women Clinic with a simple vision: to provide exceptional, personalized care in a warm and welcoming environment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Board-certified and fellowship-trained, Dr. Trishna specializes in minimally invasive gynecological surgery, high-risk obstetrics, and reproductive endocrinology. She is passionate about empowering women through education and preventive care.
              </p>
              <div className="bg-accent/50 rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{content.aboutMission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background/75">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">A leading gynecology clinic in Maharashtra</h2>
            <p className="text-muted-foreground leading-relaxed">
              Infinity Women Clinic is recognized for delivering high-quality women’s health care in Dombivli and the surrounding Kalyan region. Dr. Trishna Taralkar brings advanced gynecology expertise, warm patient communication, and a focus on outcomes that matter most to women and families.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Women's Health Expertise</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Gynecologist-Led Care for Every Stage</h2>
            <p className="text-muted-foreground leading-relaxed">
              As a leading Gynecologist & Obstetrician Doctor in Thane, Dr. Trishna Taralkar provides expert care for complex multiple pregnancy issues, laparoscopic infertility support, Mirena / Copper-T insertion, and stitchless Non descent vaginal hysterectomy. Our clinic also addresses White discharge - Leucorrhoea, sexual dysfunctions -- female, and vaginal rejuvenation tightening (non surgical) with sensitivity.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">High-risk pregnancy care</h3>
              <p className="text-muted-foreground leading-relaxed">We support complex multiple pregnancy issues and provide personalized monitoring by a skilled Gynecologist & Obstetrician Doctor.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Reproductive wellness</h3>
              <p className="text-muted-foreground leading-relaxed">From Mirena / Copper-T insertion to laparoscopy for infertility, we deliver advanced women's health solutions.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Women's comfort care</h3>
              <p className="text-muted-foreground leading-relaxed">Our team treats White discharge - Leucorrhoea, sexual dysfunctions -- female, lactation consultation and vaginal rejuvenation tightening with care and discretion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Our Values</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">What We Stand For</h2>
              <div className="grid gap-4">
                {values.map((v, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src={clinicInterior} alt="Clinic interior" loading="lazy" width={1200} height={800} className="rounded-2xl shadow-medium w-full object-cover aspect-[3/2]" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
