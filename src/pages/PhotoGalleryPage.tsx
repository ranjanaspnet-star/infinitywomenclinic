import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const galleryImages = [
  {
    id: 1,
    title: "Clinic Reception Area",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Consultation Room",
    src: "https://images.unsplash.com/photo-1551809747-89c7f6ce1d14?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Patient Comfort Space",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "State-of-the-Art Equipment",
    src: "https://images.unsplash.com/photo-1586773860410-1745d5eb0e77?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Friendly Staff",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Wellness Consultation",
    src: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Comfortable Recovery Area",
    src: "https://images.unsplash.com/photo-1519617776942-36d6b6de5f64?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Quiet Waiting Lounge",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Gentle Care Environment",
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
];

const PhotoGalleryPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedImage = useMemo(
    () => galleryImages.find((image) => image.id === selectedId) ?? null,
    [selectedId],
  );

  const selectedIndex = useMemo(
    () => galleryImages.findIndex((image) => image.id === selectedId),
    [selectedId],
  );

  const previousImage = selectedIndex > 0 ? galleryImages[selectedIndex - 1] : null;
  const nextImage = selectedIndex >= 0 && selectedIndex < galleryImages.length - 1 ? galleryImages[selectedIndex + 1] : null;

  return (
    <Layout>
      <SEOHead
        title="Photo Gallery"
        description="Browse the Infinity Women Clinic photo gallery to see our welcoming spaces, expert care environment, and patient-focused clinic design."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Gallery</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Photo Gallery</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore the spaces that make Infinity Women Clinic a place of comfort, privacy, and trusted care.
              Click any image to enlarge and navigate through the gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                type="button"
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-medium"
                onClick={() => setSelectedId(image.id)}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-slate-950">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 text-left">
                  <p className="font-semibold text-foreground mb-1">{image.title}</p>
                  <p className="text-sm text-muted-foreground">Tap to enlarge</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-[32px] bg-background shadow-2xl ring-1 ring-border"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border/50 p-4 sm:p-6">
              <div>
                <p className="text-lg font-semibold text-foreground">{selectedImage.title}</p>
                <p className="text-sm text-muted-foreground">Use the arrows to browse through the gallery.</p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
                onClick={() => setSelectedId(null)}
              >
                <X className="h-4 w-4" /> Close
              </button>
            </div>

            <div className="relative overflow-hidden rounded-b-[32px] bg-slate-950">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="h-[min(75vh,720px)] w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-foreground">Gallery controls</p>
                <p className="text-sm text-muted-foreground">Click close or outside the area to exit.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => previousImage && setSelectedId(previousImage.id)}
                  disabled={!previousImage}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button
                  variant="outline"
                  onClick={() => nextImage && setSelectedId(nextImage.id)}
                  disabled={!nextImage}
                >
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PhotoGalleryPage;
