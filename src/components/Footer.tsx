import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";

const Footer = () => {
  const { content } = useSiteData();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-heading text-primary-foreground text-lg font-bold">∞</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-semibold leading-tight">Infinity</span>
                <span className="text-xs opacity-70 leading-tight">Women Clinic</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Providing compassionate, comprehensive gynecological care for women at every stage of life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Blog", to: "/blog" },
                { label: "Book Appointment", to: "/booking" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <a href={`tel:${content.clinicPhone}`} className="flex items-start gap-2 text-sm opacity-70 hover:opacity-100">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /> {content.clinicPhone}
              </a>
              <a href={`mailto:${content.clinicEmail}`} className="flex items-start gap-2 text-sm opacity-70 hover:opacity-100">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /> {content.clinicEmail}
              </a>
              <a href={`https://www.google.com/maps/search/${encodeURIComponent(content.clinicAddress)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm opacity-70 hover:opacity-100">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {content.clinicAddress}
              </a>
              <div className="flex items-start gap-2 text-sm opacity-70">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" /> {content.clinicHours}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Office Hours</h3>
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition">
                <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Monday - Saturday</p>
                <p className="text-sm font-semibold">10:00 AM - 1:00 PM</p>
                <p className="text-xs opacity-60">Morning Session</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition">
                <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Monday - Saturday</p>
                <p className="text-sm font-semibold">5:00 PM - 8:00 PM</p>
                <p className="text-xs opacity-60">Evening Session</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition">
                <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Sunday</p>
                <p className="text-sm font-semibold">Urgent Only</p>
                <p className="text-xs opacity-60">Emergency Services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Infinity Women Clinic. All rights reserved.
          </p>
          <p className="text-sm opacity-60 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" /> for women's health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
