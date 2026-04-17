import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Annual Well-Woman Exam",
  "Prenatal Care",
  "Contraception Consultation",
  "PCOS Management",
  "Menopause Care",
  "Fertility Evaluation",
  "General Consultation",
  "Other",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const BookingPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", service: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Appointment Requested!", description: "We'll confirm your appointment within 24 hours." });
  };

  if (submitted) {
    return (
      <Layout>
        <SEOHead title="Booking Confirmation" description="Your appointment request has been received." />
        <section className="py-32">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Appointment Requested!</h1>
            <p className="text-muted-foreground mb-8">Thank you, {form.name}. We'll contact you at {form.email} to confirm your appointment.</p>
            <Button onClick={() => setSubmitted(false)}>Book Another Appointment</Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead title="Book Appointment" description="Schedule your gynecological appointment at Infinity Women Clinic. Easy online booking." keywords="book gynecological appointment, schedule women's health visit, online booking Maharashtra, top gynecologist appointment, book Dr. Trishna Taralkar, women doctor appointment near me, Infinity Women Clinic booking" />

      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Appointments</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Book Your Appointment</h1>
          <p className="text-muted-foreground text-lg">Schedule a visit in just a few clicks. We'll confirm your appointment within 24 hours.</p>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-6">
            Book a consultation with one of the best gynecologists in Maharashtra. Infinity Women Clinic in Dombivli offers trusted care from Dr. Trishna Taralkar and her experienced team, with personalized plans for women's health, prenatal care, PCOS, and menopause support.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-border/50 shadow-medium">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Service *</label>
                    <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                      <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Date *</label>
                    <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Time *</label>
                    <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                      <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Notes</label>
                  <Textarea rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any specific concerns or information you'd like to share..." />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" /> Request Appointment
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  <Clock className="w-3 h-3 inline mr-1" />
                  We'll confirm your appointment via email within 24 hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Book a Specialist</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Gynecologist Care in Thane for Complex Conditions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Book an appointment for care with our leading Gynecologist & Obstetrician Doctors. We support complex multiple pregnancy issues, Mirena / Copper-T insertion, Non descent vaginal hysterectomy (stitchless surgery), White discharge - Leucorrhoea, sexual dysfunctions -- female, laparoscopy for infertility, and lactation consultation and guidance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Advanced Obstetric Care</h3>
              <p className="text-sm text-muted-foreground">Personalized pregnancy support for Thane-area women with complex multiple pregnancy issues.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Women’s Health Services</h3>
              <p className="text-sm text-muted-foreground">From White discharge - Leucorrhoea to vaginal rejuvenation tightening, we deliver discreet care.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
