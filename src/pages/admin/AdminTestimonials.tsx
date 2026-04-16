import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { useSiteData, Testimonial } from "@/context/SiteDataContext";
import { useToast } from "@/hooks/use-toast";

const AdminTestimonials = () => {
  const { testimonials, setTestimonials } = useSiteData();
  const { toast } = useToast();
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [open, setOpen] = useState(false);

  const openNew = () => {
    setEditing({ id: Date.now().toString(), name: "", rating: 5, text: "", date: new Date().toISOString().split("T")[0], published: false });
    setIsNew(true);
    setOpen(true);
  };

  const openEdit = (t: Testimonial) => { setEditing({ ...t }); setIsNew(false); setOpen(true); };

  const save = () => {
    if (!editing) return;
    if (isNew) setTestimonials([...testimonials, editing]);
    else setTestimonials(testimonials.map((t) => (t.id === editing.id ? editing : t)));
    toast({ title: isNew ? "Testimonial Added" : "Testimonial Updated" });
    setOpen(false);
  };

  const remove = (id: string) => { setTestimonials(testimonials.filter((t) => t.id !== id)); toast({ title: "Testimonial Deleted" }); };
  const togglePublish = (id: string) => { setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, published: !t.published } : t))); };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Testimonials</h2>
            <p className="text-sm text-muted-foreground">{testimonials.length} total</p>
          </div>
          <Button onClick={openNew}><Plus className="w-4 h-4 mr-2" /> Add Testimonial</Button>
        </div>

        <div className="space-y-3">
          {testimonials.map((t) => (
            <Card key={t.id} className="border-border/50">
              <CardContent className="p-4 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground">{t.name}</h3>
                    <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-3 h-3 fill-gold text-gold" />)}</div>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{t.text}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Switch checked={t.published} onCheckedChange={() => togglePublish(t.id)} />
                  <Button variant="outline" size="icon" onClick={() => openEdit(t)}><Pencil className="w-4 h-4" /></Button>
                  <Button variant="outline" size="icon" onClick={() => remove(t.id)}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader><DialogTitle>{isNew ? "Add Testimonial" : "Edit Testimonial"}</DialogTitle></DialogHeader>
            {editing && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Patient Name</label>
                  <Input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Rating</label>
                  <Select value={editing.rating.toString()} onValueChange={(v) => setEditing({ ...editing, rating: parseInt(v) })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {[5, 4, 3, 2, 1].map((r) => <SelectItem key={r} value={r.toString()}>{r} Star{r > 1 ? "s" : ""}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Review Text</label>
                  <Textarea rows={4} value={editing.text} onChange={(e) => setEditing({ ...editing, text: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Date</label>
                  <Input type="date" value={editing.date} onChange={(e) => setEditing({ ...editing, date: e.target.value })} />
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={editing.published} onCheckedChange={(v) => setEditing({ ...editing, published: v })} />
                  <span className="text-sm text-foreground">Published</span>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                  <Button onClick={save}>Save</Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
};

export default AdminTestimonials;
