import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, canonical, ogImage }: SEOHeadProps) => {
  useEffect(() => {
    document.title = `${title} | Infinity Women Clinic`;

    const setMeta = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const url = canonical ?? window.location.href;

    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("og:title", `${title} | Infinity Women Clinic`, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", url, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", `${title} | Infinity Women Clinic`);
    setMeta("twitter:description", description);

    if (ogImage) {
      setMeta("og:image", ogImage, true);
      setMeta("twitter:image", ogImage);
    }

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [title, description, canonical, ogImage]);

  return null;
};

export default SEOHead;
