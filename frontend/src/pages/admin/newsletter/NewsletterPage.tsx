import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Download, Mail, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const initialSubscribers = [
  { id: '1', email: 'director@childhope.org', subscribedAt: 'July 24, 2026', status: 'Active' },
  { id: '2', email: 'cmo@auraorganic.in', subscribedAt: 'July 22, 2026', status: 'Active' },
  { id: '3', email: 'marketing@apexclinic.com', subscribedAt: 'July 18, 2026', status: 'Active' },
  { id: '4', email: 'founder@greenearth.org', subscribedAt: 'July 12, 2026', status: 'Active' },
];

export default function AdminNewsletterPage() {
  const [subscribers, setSubscribers] = useState(initialSubscribers);

  const handleDelete = (id: string) => {
    setSubscribers(subscribers.filter((s) => s.id !== id));
    toast.success('Subscriber removed.');
  };

  const handleExportCSV = () => {
    toast.success('Exporting subscriber email list to CSV...');
  };

  return (
    <>
      <Helmet>
        <title>Newsletter Subscribers | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Newsletter Subscribers</h1>
            <p className="text-sm text-muted-foreground">Manage active email subscribers receiving weekly growth dispatches.</p>
          </div>

          <Button variant="accent" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-1" /> Export CSV List
          </Button>
        </div>

        <div className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-foreground">
              <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border/60">
                <tr>
                  <th className="px-4 py-3">Subscriber Email</th>
                  <th className="px-4 py-3">Subscribed Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {subscribers.map((sub) => (
                  <tr key={sub.id} className="hover:bg-muted/40 transition-colors">
                    <td className="px-4 py-3.5 font-bold flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" /> {sub.email}
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground">{sub.subscribedAt}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        <CheckCircle2 className="h-3 w-3" /> {sub.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(sub.id)}>
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
