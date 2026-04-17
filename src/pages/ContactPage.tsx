import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { content } = useSiteData();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: content.clinicPhone },
    { icon: Mail, label: "Email", value: content.clinicEmail },
    { icon: MapPin, label: "Address", value: content.clinicAddress },
    { icon: Clock, label: "Hours", value: content.clinicHours },
  ];

  return (
    <Layout>
      <SEOHead title="Contact Us" description="Get in touch with Infinity Women Clinic. Call, email, or visit us today." keywords="contact Infinity Women Clinic, best gynecologist in Maharashtra contact, book appointment with Dr. Trishna Taralkar, women's clinic location Maharashtra, top women doctor phone number, gynecological consultation near me" />

      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">We'd love to hear from you. Reach out with any questions or to schedule a visit.</p>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-6">
            Contact Infinity Women Clinic in Dombivli for expert women’s health care from Dr. Trishna Taralkar. Our clinic is one of the top gynecology centers in Maharashtra, offering compassionate, confidential consultations and easy appointment scheduling.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <Card key={i} className="border-border/50 shadow-card">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <Card className="lg:col-span-2 border-border/50 shadow-card">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                  <div className="md:col-span-2">
                    <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" size="lg">Send Message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Specialized Women’s Care</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Talk to a Gynecologist & Obstetrician Doctor in Thane</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Contact Infinity Women Clinic for expert care in Thane and Dombivli. Our Gynecologist and Obstetrician Doctors manage complex multiple pregnancy issues, Mirena / Copper-T insertion, Non descent vaginal hysterectomy (stitchless surgery), and White discharge - Leucorrhoea with sensitivity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We also provide care for sexual dysfunctions -- female, laparoscopy for infertility, lactation consultation and guidance, and vaginal rejuvenation tightening (non surgical) in a discreet clinic environment.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Find Us on the Map</h2>
            <p className="text-muted-foreground">Visit our clinic location in Dombivli, Kalyan</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-96 border border-border/50">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(content.clinicAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
          <div className="mt-8 text-center">
            <a 
              href={`https://www.google.com/maps/search/${encodeURIComponent(content.clinicAddress)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
