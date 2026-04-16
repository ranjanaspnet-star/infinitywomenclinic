import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Baby, Stethoscope, Calendar, Users, Microscope, Pill } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Stethoscope, title: "Annual Well-Woman Exams", desc: "Comprehensive physical exams including breast exams, Pap smears, and overall health assessments tailored to your age and risk factors." },
  { icon: Baby, title: "Prenatal & Postnatal Care", desc: "Expert care throughout your pregnancy journey, including ultrasounds, nutrition counseling, labor preparation, and postpartum support." },
  { icon: Shield, title: "Contraception & Family Planning", desc: "Personalized contraception counseling including IUDs, implants, oral contraceptives, and natural family planning methods." },
  { icon: Heart, title: "Menopause Management", desc: "Comprehensive menopause care including hormone replacement therapy, symptom management, and bone density screening." },
  { icon: Calendar, title: "PCOS & Hormonal Disorders", desc: "Specialized diagnosis and treatment plans for PCOS, endometriosis, fibroids, and other hormonal imbalances." },
  { icon: Users, title: "Adolescent Gynecology", desc: "Gentle, age-appropriate care for teens including menstrual health education, HPV vaccination, and early screening." },
  { icon: Microscope, title: "Minimally Invasive Surgery", desc: "Advanced laparoscopic and hysteroscopic procedures for conditions like fibroids, ovarian cysts, and endometriosis." },
  { icon: Pill, title: "Fertility Evaluation", desc: "Comprehensive fertility assessments, ovulation tracking, and referrals for advanced reproductive technologies when needed." },
];

const ServicesPage = () => {
  return (
    <Layout>
      <SEOHead title="Services" description="Explore comprehensive gynecological services at Infinity Women Clinic — from routine exams to specialized treatments." />
      
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Women's Healthcare</h1>
          <p className="text-muted-foreground text-lg">We offer a full range of gynecological services to support your health at every stage of life.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <Card key={i} className="group hover:shadow-medium transition-all border-border/50">
                <CardContent className="p-8 flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <svc.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Have Questions About Our Services?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">We're here to help. Schedule a consultation to discuss your specific needs.</p>
          <Link to="/booking"><Button size="lg" variant="secondary">Schedule Consultation</Button></Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
