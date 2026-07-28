import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import toast from 'react-hot-toast';

export default function PortfolioFormPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: isEditing ? '₹1.4 Cr Raised for Child Healthcare' : '',
    clientName: isEditing ? 'Hope For Children NGO' : '',
    category: 'NGO Fundraising',
    industry: 'Healthcare NGO',
    tagline: isEditing ? 'Leveraged Google Ad Grants to drive 12,000+ donors.' : '',
    overview: '',
  });

  const [coverImageUrl, setCoverImageUrl] = useState(
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Portfolio project ${isEditing ? 'updated' : 'created'} successfully!`);
    void navigate('/admin/portfolio');
  };

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Project' : 'Add New Portfolio Project'} | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/admin/portfolio">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="font-display text-2xl font-extrabold text-foreground">
              {isEditing ? `Edit Project (${id})` : 'Add New Portfolio Showcase'}
            </h1>
            <p className="text-xs text-muted-foreground">Upload cover image and define campaign ROI metrics.</p>
          </div>
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Project Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. 4.2x ROAS Scaling for D2C Brand"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Client Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hope Trust NGO"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Industry Vertical *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Healthcare Non-Profit"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Cover Image URL (Cloudinary)</label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={coverImageUrl}
                  onChange={(e) => setCoverImageUrl(e.target.value)}
                  className="flex-1 rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="button" variant="outline" onClick={() => toast.success('Cloudinary Upload Triggered')}>
                  <Upload className="h-4 w-4 mr-1" /> Upload
                </Button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Tagline Summary</label>
              <textarea
                rows={2}
                placeholder="High impact summary sentence..."
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-border/60">
              <Link to="/admin/portfolio">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="accent">
                <Save className="h-4 w-4 mr-1.5" /> Save Project
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
