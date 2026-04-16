import { Baby, Heart, Microscope, Pill, Shield, Stethoscope, Users, Calendar } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  desc: string;
  longDesc: string;
  icon: LucideIcon;
}

export const services: ServiceData[] = [
  {
    slug: "annual-well-woman-exams",
    title: "Annual Well-Woman Exams",
    desc: "Comprehensive physical exams including breast exams, Pap smears, and overall health assessments tailored to your age and risk factors.",
    longDesc:
      "Our annual well-woman exams focus on preventive care, early detection, and a complete review of your reproductive and overall health. These visits include breast and pelvic exams, cervical cancer screening, lab testing, and personalized counseling for maintaining wellness throughout every stage of life.",
    icon: Stethoscope,
  },
  {
    slug: "prenatal-and-postnatal-care",
    title: "Prenatal & Postnatal Care",
    desc: "Expert care throughout your pregnancy journey, including ultrasounds, nutrition counseling, labor preparation, and postpartum support.",
    longDesc:
      "Our prenatal and postnatal care program is designed to help mothers feel confident and supported before, during, and after pregnancy. We provide routine monitoring, education, birth planning, breastfeeding guidance, and follow-up care to make your motherhood journey as healthy and comfortable as possible.",
    icon: Baby,
  },
  {
    slug: "contraception-and-family-planning",
    title: "Contraception & Family Planning",
    desc: "Personalized contraception counseling including IUDs, implants, oral contraceptives, and natural family planning methods.",
    longDesc:
      "We help you choose the best contraception strategy for your lifestyle, health goals, and future family planning needs. Our specialists explain options clearly, support informed decisions, and provide safe initiation and follow-up care for each chosen method.",
    icon: Shield,
  },
  {
    slug: "menopause-management",
    title: "Menopause Management",
    desc: "Comprehensive menopause care including hormone replacement therapy, symptom management, and bone density screening.",
    longDesc:
      "Our menopause management services address hot flashes, mood changes, sleep disruptions, and bone health with evidence-based treatments. We create personalized plans that may include hormone therapy, lifestyle guidance, and regular monitoring to help you feel more balanced.",
    icon: Heart,
  },
  {
    slug: "pcos-and-hormonal-disorders",
    title: "PCOS & Hormonal Disorders",
    desc: "Specialized diagnosis and treatment plans for PCOS, endometriosis, fibroids, and other hormonal imbalances.",
    longDesc:
      "We provide advanced evaluation for hormonal disorders to pinpoint root causes and design customized treatment plans. Our care covers PCOS management, endometriosis support, fibroid treatment, and symptom relief strategies that help restore comfort and hormonal balance.",
    icon: Calendar,
  },
  {
    slug: "adolescent-gynecology",
    title: "Adolescent Gynecology",
    desc: "Gentle, age-appropriate care for teens including menstrual health education, HPV vaccination, and early screening.",
    longDesc:
      "Our adolescent gynecology services provide a safe, respectful space for young patients and their families. We focus on education, preventive care, privacy, and support for menstrual health, immunizations, and early reproductive wellness.",
    icon: Users,
  },
  {
    slug: "minimally-invasive-surgery",
    title: "Minimally Invasive Surgery",
    desc: "Advanced laparoscopic and hysteroscopic procedures for conditions like fibroids, ovarian cysts, and endometriosis.",
    longDesc:
      "Our minimally invasive surgery options reduce recovery time and lower complication risk while delivering precise treatment for gynecological conditions. We offer diagnostic and therapeutic procedures using modern techniques and careful post-operative follow-up.",
    icon: Microscope,
  },
  {
    slug: "fertility-evaluation",
    title: "Fertility Evaluation",
    desc: "Comprehensive fertility assessments, ovulation tracking, and referrals for advanced reproductive technologies when needed.",
    longDesc:
      "Our fertility evaluation service includes a complete review of reproductive history, hormonal testing, and personalized planning. We support patients with fertility challenges through diagnosis, monitoring, referrals, and compassionate guidance at every step.",
    icon: Pill,
  },
];

export const getServiceBySlug = (slug: string | undefined) =>
  services.find((service) => service.slug === slug) ?? null;
