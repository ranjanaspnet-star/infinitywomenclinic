import { useState, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, FileText, MessageSquare, Settings, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const adminNav = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  { label: "Blogs", to: "/admin/blogs", icon: FileText },
  { label: "Testimonials", to: "/admin/testimonials", icon: MessageSquare },
  { label: "Site Content", to: "/admin/content", icon: Settings },
];

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:relative lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-heading text-primary-foreground text-sm font-bold">∞</span>
            </div>
            <span className="font-heading font-semibold text-foreground">Admin Panel</span>
          </Link>
          <nav className="space-y-1">
            {adminNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.to
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
            <LogOut className="w-4 h-4 mr-2" /> Back to Site
          </Button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-3 lg:px-6">
          <button className="lg:hidden p-1" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="font-heading text-lg font-semibold text-foreground">
            {adminNav.find((n) => n.to === location.pathname)?.label || "Admin"}
          </h1>
        </header>
        <div className="p-4 lg:p-8">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
