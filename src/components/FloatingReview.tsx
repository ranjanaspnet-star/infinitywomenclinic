import { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSiteData } from "@/context/SiteDataContext";

const FloatingReview = () => {
  const { testimonials, setTestimonials } = useSiteData();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [offlineFallback, setOfflineFallback] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitted(false);
    setOfflineFallback(false);

    if (!name.trim() || !reviewText.trim()) {
      setSubmitError("Please enter your name and review.");
      return;
    }

    setIsSubmitting(true);

    const newTestimonial = {
      id: Date.now().toString(),
      name: name.trim(),
      rating,
      text: reviewText.trim(),
      date: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      published: false,
    };

    try {
      const response = await fetch("/.netlify/functions/submit-testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newTestimonial.name, rating, text: newTestimonial.text }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.error || response.statusText || "Submission failed");
      }

      setTestimonials([newTestimonial, ...testimonials]);
      setSubmitted(true);
      setName("");
      setRating(5);
      setReviewText("");
    } catch (error: any) {
      setSubmitError(error?.message || "Unable to submit review.");
      setOfflineFallback(true);
      setTestimonials([newTestimonial, ...testimonials]);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <div className="fixed bottom-6 right-6 z-50">
        <DialogTrigger asChild>
          <button className="group relative rounded-full bg-gradient-to-r from-primary to-pink-600 px-6 py-3 text-sm font-semibold text-background shadow-2xl shadow-primary/40 transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/50 flex items-center gap-2">
            <span className="text-lg">⭐</span>
            <span className="hidden sm:inline">Write Review</span>
            <span className="inline sm:hidden">Review</span>
          </button>
        </DialogTrigger>
      </div>

      <DialogContent className="w-[min(100%,520px)]">
        <div className="space-y-4">
          <div className="space-y-1 text-center">
            <DialogTitle>Share your review</DialogTitle>
            <DialogDescription>Tell us about your experience and help other patients choose the right care.</DialogDescription>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
              <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Review</label>
              <Textarea value={reviewText} onChange={(event) => setReviewText(event.target.value)} placeholder="Share your experience" className="min-h-[120px]" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">Rating</label>
              <Select value={rating.toString()} onValueChange={(value) => setRating(Number(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  {[5, 4, 3, 2, 1].map((value) => (
                    <SelectItem key={value} value={value.toString()}>{value} Star{value > 1 ? "s" : ""}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Review"}
              </Button>
              {submitted && !submitError && (
                <p className="text-sm text-success">Thank you! Your review is pending admin approval.</p>
              )}
              {submitError && <p className="text-sm text-destructive">{submitError}</p>}
              {offlineFallback && (
                <p className="text-sm text-muted-foreground">Saved locally because the server function is unavailable.</p>
              )}
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FloatingReview;
