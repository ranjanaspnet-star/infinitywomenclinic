import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  published: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  published: boolean;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutMission: string;
  clinicPhone: string;
  clinicEmail: string;
  clinicAddress: string;
  clinicHours: string;
}

interface SiteData {
  blogs: BlogPost[];
  testimonials: Testimonial[];
  content: SiteContent;
  setBlogs: (blogs: BlogPost[]) => void;
  setTestimonials: (testimonials: Testimonial[]) => void;
  setContent: (content: SiteContent) => void;
}

const defaultContent: SiteContent = {
  heroTitle: "Compassionate Care for Every Woman",
  heroSubtitle: "Infinity Women Clinic",
  heroDescription: "Expert gynecological care in a warm, supportive environment. From routine wellness visits to specialized treatments, we're here for every stage of your life.",
  aboutTitle: "Dedicated to Women's Health & Wellness",
  aboutDescription: "At Infinity Women Clinic, we believe every woman deserves personalized, compassionate healthcare. Our team of experienced gynecologists combines cutting-edge medical expertise with a gentle, understanding approach to provide the highest standard of care.",
  aboutMission: "Our mission is to empower women through comprehensive healthcare services, education, and support, ensuring every patient feels heard, respected, and cared for.",
  clinicPhone: "+1 (555) 123-4567",
  clinicEmail: "care@infinitywomenclinic.com",
  clinicAddress: "Unit-403, Lodha Signet, Premier Colony Ground, 1, Kalyan - Shilphata Rd, Dombivli, Kalyan, Maharashtra 421204",
  clinicHours: "Mon-Sat:  10AM-1PM & 5PM - 8PM",
};

const defaultBlogs: BlogPost[] = [
  {
    id: "1",
    title: "Understanding PCOS: Symptoms, Causes & Modern Treatments",
    slug: "understanding-pcos",
    excerpt: "Polycystic Ovary Syndrome affects millions of women worldwide. Learn about the latest approaches to diagnosis and management.",
    content: "Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders among women of reproductive age. It affects approximately 1 in 10 women and can lead to a range of symptoms including irregular periods, excess androgen levels, and polycystic ovaries.\n\nSymptoms of PCOS include irregular menstrual cycles, heavy bleeding, excess hair growth, acne, weight gain, and darkening of the skin. Early diagnosis and treatment can help manage these symptoms effectively.\n\nModern treatment approaches include lifestyle modifications, hormonal birth control, anti-androgen medications, and fertility treatments when needed. At Infinity Women Clinic, we take a holistic approach to PCOS management, combining medical treatment with nutritional counseling and emotional support.",
    image: "",
    category: "Women's Health",
    author: "Dr. Trishna Taralkar",
    date: "2026-04-10",
    published: true,
  },
  {
    id: "2",
    title: "The Importance of Regular Gynecological Check-ups",
    slug: "importance-regular-checkups",
    excerpt: "Preventive care is the foundation of women's health. Discover why annual gynecological visits are essential.",
    content: "Regular gynecological check-ups are crucial for maintaining optimal reproductive and overall health. These visits allow your healthcare provider to detect potential issues early, when they're most treatable.\n\nDuring a routine visit, your gynecologist will perform a pelvic exam, may conduct a Pap smear, and discuss any concerns you may have about your menstrual cycle, contraception, or other health topics.\n\nWe recommend women begin having annual gynecological exams at age 21 or when they become sexually active. These visits are also an opportunity to discuss family planning, screen for sexually transmitted infections, and address any changes in your health.",
    image: "",
    category: "Preventive Care",
    author: "Dr. Trishna Taralkar",
    date: "2026-04-05",
    published: true,
  },
  {
    id: "3",
    title: "Pregnancy Planning: What Every Woman Should Know",
    slug: "pregnancy-planning-guide",
    excerpt: "Planning for pregnancy? Here's a comprehensive guide to preparing your body and mind for this beautiful journey.",
    content: "Planning for pregnancy is an exciting time that comes with many questions. Taking proactive steps before conception can significantly improve your chances of a healthy pregnancy and baby.\n\nKey steps include starting prenatal vitamins with folic acid at least three months before trying to conceive, scheduling a preconception visit with your gynecologist, maintaining a healthy weight, and addressing any chronic health conditions.\n\nAt Infinity Women Clinic, our preconception counseling services help you create a personalized plan for a healthy pregnancy. We'll review your medical history, discuss lifestyle modifications, and ensure you're in the best possible health before conception.",
    image: "",
    category: "Pregnancy",
    author: "Dr. Trishna Taralkar",
    date: "2026-03-28",
    published: true,
  },
];

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ritu Gupta",
    rating: 5,
    text: "The care I received at Infinity Women Clinic was exceptional. Dr. Trishna made me feel completely at ease during what can be an anxiety-inducing visit. The staff is warm, professional, and truly caring.",
    date: "2026-03-15",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    published: true,
  },
  {
    id: "2",
    name: "Asha",
    rating: 5,
    text: "I've been a patient here for three years and couldn't be happier. The clinic is beautiful, wait times are minimal, and the doctors take time to really listen to your concerns.",
    date: "2026-02-20",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    published: true,
  },
  {
    id: "3",
    name: "Suchita",
    rating: 5,
    text: "After struggling with PCOS for years, I finally found a doctor who understood my condition. The treatment plan has been life-changing. I highly recommend Infinity Women Clinic.",
    date: "2026-01-10",
    avatar: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    published: true,
  },
  {
    id: "4",
    name: "Leena",
    rating: 5,
    text: "The prenatal care I received was outstanding. From my first appointment to delivery, the entire team was supportive, knowledgeable, and made my pregnancy journey a wonderful experience.",
    date: "2026-03-01",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    published: true,
  },
];

const SiteDataContext = createContext<SiteData | undefined>(undefined);

const STORAGE_KEY = "infinity-women-clinic-data";

export const SiteDataProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY + "-blogs");
    return saved ? JSON.parse(saved) : defaultBlogs;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY + "-testimonials");
    return saved ? JSON.parse(saved) : defaultTestimonials;
  });

  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem(STORAGE_KEY + "-content");
    return saved ? JSON.parse(saved) : defaultContent;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY + "-blogs", JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY + "-testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY + "-content", JSON.stringify(content));
  }, [content]);

  return (
    <SiteDataContext.Provider value={{ blogs, testimonials, content, setBlogs, setTestimonials, setContent }}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) throw new Error("useSiteData must be used within SiteDataProvider");
  return context;
};
