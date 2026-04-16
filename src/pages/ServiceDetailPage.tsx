import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { getServiceBySlug } from "@/data/services";
import { Button } from "@/components/ui/button";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <Layout>
        <SEOHead title="Service Not Found" description="The requested service could not be found." />
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">We couldn&apos;t locate that service. Please select a different service from the list.</p>
            <Link to="/services">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      <SEOHead title={service.title} description={service.desc} />

      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Service Details</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{service.title}</h1>
          <p className="text-muted-foreground text-lg">{service.desc}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[1fr,320px] items-start">
          <div className="space-y-8">
            <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary mb-6">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">What to expect</h2>
              <p className="text-muted-foreground leading-relaxed">{service.longDesc}</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-10 shadow-sm">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Why this service matters</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Personalized care plans for your unique needs.</li>
                <li>• Experienced clinicians using evidence-based approaches.</li>
                <li>• Supportive and private environment for every appointment.</li>
              </ul>
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-primary p-8 text-primary-foreground shadow-sm">
            <h3 className="font-heading text-2xl font-semibold mb-6">Next step</h3>
            <p className="text-primary-foreground/80 mb-8">Book an appointment and discuss the details of {service.title} with our care team.</p>
            <Link to="/booking">
              <Button size="lg">Book Appointment</Button>
            </Link>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetailPage;
