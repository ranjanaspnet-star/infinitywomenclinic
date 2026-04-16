import { useState } from "react";
import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useSiteData, BlogPost } from "@/context/SiteDataContext";
import { useToast } from "@/hooks/use-toast";

const emptyBlog: Omit<BlogPost, "id"> = {
  title: "", slug: "", excerpt: "", content: "", image: "", category: "", author: "Dr. Trishna Narendra Taralkar", date: new Date().toISOString().split("T")[0], published: false,
};

const AdminBlogs = () => {
  const { blogs, setBlogs } = useSiteData();
  const { toast } = useToast();
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [open, setOpen] = useState(false);

  const openNew = () => {
    setEditing({ id: Date.now().toString(), ...emptyBlog } as BlogPost);
    setIsNew(true);
    setOpen(true);
  };

  const openEdit = (blog: BlogPost) => {
    setEditing({ ...blog });
    setIsNew(false);
    setOpen(true);
  };

  const save = () => {
    if (!editing) return;
    const slug = editing.slug || editing.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const updated = { ...editing, slug };
    if (isNew) {
      setBlogs([...blogs, updated]);
    } else {
      setBlogs(blogs.map((b) => (b.id === updated.id ? updated : b)));
    }
    toast({ title: isNew ? "Blog Created" : "Blog Updated" });
    setOpen(false);
  };

  const remove = (id: string) => {
    setBlogs(blogs.filter((b) => b.id !== id));
    toast({ title: "Blog Deleted" });
  };

  const togglePublish = (id: string) => {
    setBlogs(blogs.map((b) => (b.id === id ? { ...b, published: !b.published } : b)));
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Blog Posts</h2>
            <p className="text-sm text-muted-foreground">{blogs.length} posts total</p>
          </div>
          <Button onClick={openNew}><Plus className="w-4 h-4 mr-2" /> New Post</Button>
        </div>

        <div className="space-y-3">
          {blogs.map((blog) => (
            <Card key={blog.id} className="border-border/50">
              <CardContent className="p-4 flex items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium text-foreground truncate">{blog.title}</h3>
                  <p className="text-xs text-muted-foreground">{blog.category} · {blog.date}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{blog.published ? "Published" : "Draft"}</span>
                    <Switch checked={blog.published} onCheckedChange={() => togglePublish(blog.id)} />
                  </div>
                  <Button variant="outline" size="icon" onClick={() => openEdit(blog)}><Pencil className="w-4 h-4" /></Button>
                  <Button variant="outline" size="icon" onClick={() => remove(blog.id)}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{isNew ? "New Blog Post" : "Edit Blog Post"}</DialogTitle>
            </DialogHeader>
            {editing && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Title</label>
                  <Input value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Category</label>
                    <Input value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Author</label>
                    <Input value={editing.author} onChange={(e) => setEditing({ ...editing, author: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Excerpt</label>
                  <Textarea rows={2} value={editing.excerpt} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Content</label>
                  <Textarea rows={10} value={editing.content} onChange={(e) => setEditing({ ...editing, content: e.target.value })} />
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

export default AdminBlogs;
