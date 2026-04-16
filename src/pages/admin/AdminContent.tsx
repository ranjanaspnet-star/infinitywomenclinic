import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSiteData } from "@/context/SiteDataContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const AdminContent = () => {
  const { content, setContent } = useSiteData();
  const { toast } = useToast();
  const [form, setForm] = useState(content);

  const save = () => {
    setContent(form);
    toast({ title: "Content Updated", description: "Your changes are now live on the website." });
  };

  const fields: { label: string; key: keyof typeof form; multiline?: boolean }[] = [
    { label: "Hero Title", key: "heroTitle" },
    { label: "Hero Subtitle", key: "heroSubtitle" },
    { label: "Hero Description", key: "heroDescription", multiline: true },
    { label: "About Page Title", key: "aboutTitle" },
    { label: "About Description", key: "aboutDescription", multiline: true },
    { label: "Mission Statement", key: "aboutMission", multiline: true },
    { label: "Phone Number", key: "clinicPhone" },
    { label: "Email Address", key: "clinicEmail" },
    { label: "Clinic Address", key: "clinicAddress" },
    { label: "Office Hours", key: "clinicHours" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">Site Content</h2>
          <p className="text-sm text-muted-foreground">Edit the text displayed across your website.</p>
        </div>

        <Card className="border-border/50">
          <CardContent className="p-6 space-y-5">
            {fields.map((f) => (
              <div key={f.key}>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{f.label}</label>
                {f.multiline ? (
                  <Textarea rows={3} value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
                ) : (
                  <Input value={form[f.key]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} />
                )}
              </div>
            ))}
            <Button onClick={save}>Save All Changes</Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminContent;
