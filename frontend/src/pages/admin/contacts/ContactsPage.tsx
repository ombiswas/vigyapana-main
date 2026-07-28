import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '@/components/ui/Modal';
import { Search } from 'lucide-react';
import toast from 'react-hot-toast';

const initialInquiries = [
  {
    id: 'INQ-101',
    name: 'Siddharth Rao',
    email: 'siddharth@smilefoundation.org',
    phone: '+91 98112 34567',
    type: 'NGO Growth Audit',
    organization: 'Smile Care Trust',
    status: 'New',
    createdAt: 'Today, 2:15 PM',
    message: 'We want to restore our suspended Google Ad Grants account and build a new donor landing page for child education.',
  },
  {
    id: 'INQ-102',
    name: 'Anushka Sen',
    email: 'anushka@auraskincare.in',
    phone: '+91 98765 12345',
    type: 'Business Consultation',
    organization: 'Aura Organic Skincare',
    status: 'Contacted',
    createdAt: 'Yesterday, 5:40 PM',
    message: 'Looking for Meta Ads & CAPI setup to scale our D2C monthly revenue to ₹50 Lakhs.',
  },
  {
    id: 'INQ-103',
    name: 'Dr. Alok Verma',
    email: 'dralok@apexclinic.com',
    phone: '+91 99001 88776',
    type: 'Business Consultation',
    organization: 'Apex Healthcare Labs',
    status: 'In Progress',
    createdAt: '2 days ago',
    message: 'Need Google Search ads campaign setup for clinic lead generation across Noida & Delhi.',
  },
];

export default function AdminContactsPage() {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<typeof initialInquiries[0] | null>(null);

  const filtered = inquiries.filter(
    (i) =>
      i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleStatusChange = (id: string, newStatus: string) => {
    setInquiries(inquiries.map((i) => (i.id === id ? { ...i, status: newStatus } : i)));
    toast.success(`Inquiry ${id} status updated to ${newStatus}`);
  };

  return (
    <>
      <Helmet>
        <title>Manage Contact Inquiries | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Inquiries & Contact Submissions</h1>
            <p className="text-sm text-muted-foreground">Manage leads from Contact, NGO Audit, and Consultation forms.</p>
          </div>
        </div>

        <Card className="p-4 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by client or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-border bg-background pl-10 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">{filtered.length} Submissions</span>
        </Card>

        <div className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-foreground">
              <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border/60">
                <tr>
                  <th className="px-4 py-3">Client Name</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filtered.map((inq) => (
                  <tr key={inq.id} className="hover:bg-muted/40 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-foreground">{inq.name}</div>
                      <div className="text-[11px] text-muted-foreground">{inq.organization} ({inq.email})</div>
                    </td>
                    <td className="px-4 py-3.5">
                      <Badge variant={inq.type === 'NGO Growth Audit' ? 'accent' : 'outline'}>
                        {inq.type}
                      </Badge>
                    </td>
                    <td className="px-4 py-3.5">
                      <select
                        value={inq.status}
                        onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                        className="rounded-lg border border-border bg-background px-2 py-1 text-xs font-semibold focus:outline-none"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground">{inq.createdAt}</td>
                    <td className="px-4 py-3.5 text-right">
                      <Button variant="outline" size="sm" onClick={() => setSelectedInquiry(inq)}>
                        View Message
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal open={!!selectedInquiry} onOpenChange={() => setSelectedInquiry(null)}>
        <ModalContent className="max-w-lg p-6">
          <ModalHeader>
            <ModalTitle>Inquiry Details ({selectedInquiry?.id})</ModalTitle>
          </ModalHeader>
          {selectedInquiry && (
            <div className="space-y-4 pt-2 text-sm text-foreground">
              <div>
                <span className="text-xs text-muted-foreground">From:</span>
                <div className="font-bold text-base">{selectedInquiry.name}</div>
                <div className="text-xs text-muted-foreground">{selectedInquiry.email} | {selectedInquiry.phone}</div>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Organization:</span>
                <div className="font-semibold">{selectedInquiry.organization}</div>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Message Body:</span>
                <div className="mt-1 p-3 rounded-xl bg-muted text-xs leading-relaxed">{selectedInquiry.message}</div>
              </div>
              <div className="pt-2 flex justify-end">
                <Button variant="accent" onClick={() => setSelectedInquiry(null)}>
                  Close Window
                </Button>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
