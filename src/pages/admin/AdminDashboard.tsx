import AdminLayout from "@/components/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, MessageSquare, Eye } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { blogs, testimonials } = useSiteData();

  const stats = [
    { icon: FileText, label: "Blog Posts", value: blogs.length, published: blogs.filter((b) => b.published).length, to: "/admin/blogs" },
    { icon: MessageSquare, label: "Testimonials", value: testimonials.length, published: testimonials.filter((t) => t.published).length, to: "/admin/testimonials" },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-1">Welcome Back</h2>
          <p className="text-muted-foreground text-sm">Manage your clinic's website content from here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <Link key={i} to={stat.to}>
              <Card className="hover:shadow-medium transition-all border-border/50 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label} ({stat.published} published)</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="border-border/50">
          <CardContent className="p-6">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link to="/admin/blogs" className="bg-accent hover:bg-accent/80 rounded-lg p-4 text-center transition-colors">
                <FileText className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Manage Blogs</p>
              </Link>
              <Link to="/admin/testimonials" className="bg-accent hover:bg-accent/80 rounded-lg p-4 text-center transition-colors">
                <MessageSquare className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Manage Testimonials</p>
              </Link>
              <Link to="/admin/content" className="bg-accent hover:bg-accent/80 rounded-lg p-4 text-center transition-colors">
                <Eye className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Edit Site Content</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
