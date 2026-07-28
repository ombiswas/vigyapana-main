import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Copy, Trash2, Upload } from 'lucide-react';
import toast from 'react-hot-toast';

const sampleMedia = [
  {
    id: 'm1',
    name: 'ngo_fundraising_banner.jpg',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    size: '1.2 MB',
    uploadedAt: 'July 24, 2026',
  },
  {
    id: 'm2',
    name: 'd2c_performance_dashboard.jpg',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    size: '850 KB',
    uploadedAt: 'July 22, 2026',
  },
  {
    id: 'm3',
    name: 'scholarship_ad_grant.jpg',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    size: '1.4 MB',
    uploadedAt: 'July 18, 2026',
  },
];

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState(sampleMedia);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyUrl = (id: string, url: string) => {
    void navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast.success('Cloudinary image URL copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = (id: string) => {
    setMediaList(mediaList.filter((m) => m.id !== id));
    toast.success('Media asset deleted.');
  };

  return (
    <>
      <Helmet>
        <title>Media Library | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Media Library</h1>
            <p className="text-sm text-muted-foreground">Upload and manage Cloudinary images and digital campaign assets.</p>
          </div>

          <Button variant="accent" onClick={() => toast.success('Cloudinary File Uploader Triggered')}>
            <Upload className="h-4 w-4 mr-1" /> Upload New File
          </Button>
        </div>

        {/* Upload Dropzone */}
        <Card className="p-8 border-2 border-dashed border-border/80 text-center hover:border-primary transition-colors">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Upload className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-bold text-foreground">Cloudinary Drag & Drop Uploader</h3>
            <p className="text-xs text-muted-foreground">Supports JPG, PNG, WEBP, and GIF up to 10MB per file.</p>
          </div>
        </Card>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaList.map((item) => (
            <Card key={item.id} className="p-4 space-y-3 shadow-md">
              <div className="relative h-44 rounded-xl overflow-hidden bg-muted">
                <img src={item.url} alt={item.name} className="h-full w-full object-cover" />
              </div>

              <div>
                <div className="font-bold text-xs text-foreground truncate">{item.name}</div>
                <div className="text-[10px] text-muted-foreground">{item.size} • {item.uploadedAt}</div>
              </div>

              <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopyUrl(item.id, item.url)}
                  className="text-xs"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 mr-1 text-emerald-500" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 mr-1" /> Copy URL
                    </>
                  )}
                </Button>

                <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
