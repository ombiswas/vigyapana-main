import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Save } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ServiceFormPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: isEditing ? 'Google Ad Grants Management' : '',
    slug: isEditing ? 'google-ad-grants' : '',
    category: 'Branding & Design',
    startingPrice: isEditing ? 30000 : 25000,
    summary: isEditing ? 'We unlock $10,000/month in free Google search ads for NGOs.' : '',
    overview: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Service ${isEditing ? 'updated' : 'created'} successfully!`);
    void navigate('/admin/services');
  };

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Service' : 'Add New Service'} | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/admin/services">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="font-display text-2xl font-extrabold text-foreground">
                {isEditing ? `Edit Service (${id})` : 'Create New Service'}
              </h1>
              <p className="text-xs text-muted-foreground">Fill in the service details and pricing.</p>
            </div>
          </div>
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Service Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Custom Logo Design"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Branding & Design">Branding & Design</option>
                  <option value="Performance & Ads">Performance & Ads</option>
                  <option value="Content & Video">Content & Video</option>
                  <option value="Tech & Web">Tech & Web</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Starting Price (₹ INR)</label>
                <input
                  type="number"
                  placeholder="30000"
                  value={formData.startingPrice}
                  onChange={(e) => setFormData({ ...formData, startingPrice: Number(e.target.value) })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Short Summary *</label>
              <textarea
                rows={2}
                required
                placeholder="Brief summary of the service..."
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Full Scope Overview</label>
              <textarea
                rows={4}
                placeholder="Detailed scope, deliverables, and strategy..."
                value={formData.overview}
                onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-border/60">
              <Link to="/admin/services">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="accent">
                <Save className="h-4 w-4 mr-1.5" /> Save Service
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
