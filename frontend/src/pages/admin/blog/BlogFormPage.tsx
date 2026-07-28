import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Save, Upload } from 'lucide-react';
import toast from 'react-hot-toast';

export default function BlogFormPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: isEditing ? 'The Ultimate Guide to Google Ad Grants 2026' : '',
    category: 'NGO Growth',
    tags: 'Google Ad Grants, NGO Fundraising',
    excerpt: isEditing ? 'Step-by-step roadmap for 80G registered non-profits.' : '',
    content: isEditing ? '## Introduction to Google Ad Grants\n\nGoogle Ad Grants offers $10,000/mo...' : '',
  });

  const [coverImageUrl, setCoverImageUrl] = useState(
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?auto=format&fit=crop&w=800&q=80',
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Blog article ${isEditing ? 'updated' : 'published'} successfully!`);
    void navigate('/admin/blog');
  };

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Blog Article' : 'Write New Article'} | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-3">
          <Link to="/admin/blog">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="font-display text-2xl font-extrabold text-foreground">
              {isEditing ? `Edit Article (${id})` : 'Write & Publish New Article'}
            </h1>
            <p className="text-xs text-muted-foreground">Markdown formatting is fully supported in the content editor.</p>
          </div>
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Article Headline *</label>
              <input
                type="text"
                required
                placeholder="e.g. How to Recover 35% Lost Ad Data with Meta CAPI"
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
                  <option value="NGO Growth">NGO Growth</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="SEO Strategy">SEO Strategy</option>
                  <option value="Web Engineering">Web Engineering</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Tags (Comma-separated)</label>
                <input
                  type="text"
                  placeholder="Google Ad Grants, Meta CAPI, Next.js"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
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
                <Button type="button" variant="outline" onClick={() => toast.success('Image Upload Triggered')}>
                  <Upload className="h-4 w-4 mr-1" /> Upload
                </Button>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Short Excerpt *</label>
              <textarea
                rows={2}
                required
                placeholder="Short article preview summary..."
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Article Body (Markdown Format) *</label>
              <textarea
                rows={10}
                required
                placeholder="Use ## for Headings, - for bullet points..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-border/60">
              <Link to="/admin/blog">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" variant="accent">
                <Save className="h-4 w-4 mr-1.5" /> Publish Article
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
