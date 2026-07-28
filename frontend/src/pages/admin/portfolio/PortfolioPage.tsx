import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolioData';
import { Edit3, Plus, Search, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminPortfolioPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const projectsList = Object.values(portfolioData);

  const filtered = projectsList.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDelete = (title: string) => {
    toast.success(`Portfolio project "${title}" deleted.`);
  };

  return (
    <>
      <Helmet>
        <title>Manage Portfolio | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Portfolio Management</h1>
            <p className="text-sm text-muted-foreground">Manage client case studies, metrics, and showcases.</p>
          </div>

          <Link to="/admin/portfolio/new">
            <Button variant="accent">
              <Plus className="h-4 w-4 mr-1" /> Add New Project
            </Button>
          </Link>
        </div>

        <Card className="p-4 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects by client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-border bg-background pl-10 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">{filtered.length} Projects</span>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Card key={project.slug} className="p-5 flex flex-col justify-between space-y-4 shadow-md">
              <div className="space-y-3">
                <div className="relative h-44 rounded-2xl overflow-hidden bg-muted">
                  <img src={project.coverImage.url} alt={project.title} className="h-full w-full object-cover" />
                  <div className="absolute top-2 left-2">
                    <Badge variant="accent">{project.category}</Badge>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Client: {project.clientName}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground line-clamp-1">{project.title}</h3>
                </div>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-accent">{project.industry}</span>
                <div className="flex gap-2">
                  <Link to={`/admin/portfolio/${project.slug}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit3 className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(project.title)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
