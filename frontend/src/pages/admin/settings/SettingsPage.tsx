import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Save } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminSettingsPage() {
  const [formData, setFormData] = useState({
    siteName: 'Vigyapana Services Pvt. Ltd.',
    contactEmail: 'info@vigyapana.com',
    supportEmail: 'support@vigyapana.com',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    address: 'Plot B-14, Sector 62, Noida, NCR, UP 201309, India',
    googleAdGrantsNotice: 'Active default $10,000/mo search grant setup for Indian 80G non-profits.',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Agency settings saved successfully!');
  };

  return (
    <>
      <Helmet>
        <title>Agency Settings | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6 max-w-3xl mx-auto">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-foreground">Agency & System Settings</h1>
          <p className="text-sm text-muted-foreground">Configure global site settings, contact touchpoints, and API defaults.</p>
        </div>

        <Card className="p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-foreground border-b border-border/60 pb-2">
                General Agency Info
              </h3>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Official Company Name</label>
                <input
                  type="text"
                  value={formData.siteName}
                  onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">Primary Contact Email</label>
                  <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">Support Email</label>
                  <input
                    type="email"
                    value={formData.supportEmail}
                    onChange={(e) => setFormData({ ...formData, supportEmail: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-foreground block mb-1">WhatsApp Business Number</label>
                  <input
                    type="text"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">HQ Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border/60">
              <h3 className="font-display text-lg font-bold text-foreground border-b border-border/60 pb-2">
                Google Ad Grants & NGO Defaults
              </h3>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1">Default Audit Banner Notice</label>
                <textarea
                  rows={2}
                  value={formData.googleAdGrantsNotice}
                  onChange={(e) => setFormData({ ...formData, googleAdGrantsNotice: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" variant="accent">
                <Save className="h-4 w-4 mr-1.5" /> Save Configuration
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
