import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/data/servicesData';
import { CheckCircle2, Edit3, Layers, Plus, Search, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const servicesList = Object.values(servicesData);

  const filtered = servicesList.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDelete = (title: string) => {
    toast.success(`Service "${title}" deleted.`);
  };

  return (
    <>
      <Helmet>
        <title>Manage Services | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Services Management</h1>
            <p className="text-sm text-muted-foreground">Create, edit, and organize agency service packages.</p>
          </div>

          <Link to="/admin/services/new">
            <Button variant="accent">
              <Plus className="h-4 w-4 mr-1" /> Add New Service
            </Button>
          </Link>
        </div>

        {/* Filter Bar */}
        <Card className="p-4 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-border bg-background pl-10 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">{filtered.length} Services Total</span>
        </Card>

        {/* Services Table */}
        <div className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-foreground">
              <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border/60">
                <tr>
                  <th className="px-4 py-3">Service Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Starting Price</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filtered.map((service) => (
                  <tr key={service.slug} className="hover:bg-muted/40 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-foreground flex items-center gap-2">
                        <Layers className="h-4 w-4 text-primary" /> {service.title}
                      </div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1">{service.summary}</div>
                    </td>
                    <td className="px-4 py-3.5">
                      <Badge variant="accent">{service.category}</Badge>
                    </td>
                    <td className="px-4 py-3.5 font-bold">
                      {service.startingPrice ? `₹${service.startingPrice.toLocaleString('en-IN')}` : 'Custom'}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        <CheckCircle2 className="h-3 w-3" /> Published
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right space-x-2">
                      <Link to={`/admin/services/${service.slug}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit3 className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(service.title)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
