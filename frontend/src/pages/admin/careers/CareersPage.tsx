import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '@/components/ui/Modal';
import { Download, ExternalLink, Search } from 'lucide-react';
import toast from 'react-hot-toast';

const sampleApplications = [
  {
    id: 'APP-101',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    position: 'Senior Performance Marketer',
    experience: '4 Years',
    portfolioUrl: 'https://linkedin.com/in/rahulsharma',
    resumeUrl: 'https://res.cloudinary.com/demo/image/upload/v1680000000/sample_resume.pdf',
    status: 'Pending',
    createdAt: 'Yesterday, 3:20 PM',
    coverLetter: 'I have 4 years experience managing ₹10Cr+ ad spend on Meta & Google for Indian D2C brands with 3.8x average ROAS.',
  },
  {
    id: 'APP-102',
    name: 'Priyanka Das',
    email: 'priyanka.d@example.com',
    phone: '+91 98112 99887',
    position: 'Google Ad Grants Specialist',
    experience: '3 Years',
    portfolioUrl: 'https://linkedin.com/in/priyankadas',
    resumeUrl: 'https://res.cloudinary.com/demo/image/upload/v1680000000/sample_resume.pdf',
    status: 'Interviewed',
    createdAt: '3 days ago',
    coverLetter: 'Google Certified Ad Grants specialist who has restored 15+ suspended non-profit accounts in India.',
  },
];

export default function AdminCareersPage() {
  const [applications, setApplications] = useState(sampleApplications);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState<typeof sampleApplications[0] | null>(null);

  const filtered = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleStatusChange = (id: string, newStatus: string) => {
    setApplications(applications.map((app) => (app.id === id ? { ...app, status: newStatus } : app)));
    toast.success(`Candidate ${id} status updated to ${newStatus}`);
  };

  return (
    <>
      <Helmet>
        <title>Manage Career Applications | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Career Applications</h1>
            <p className="text-sm text-muted-foreground">Review job candidate applications and download resumes from Cloudinary.</p>
          </div>
        </div>

        <Card className="p-4 flex items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search candidate or position..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-border bg-background pl-10 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">{filtered.length} Applications</span>
        </Card>

        <div className="rounded-3xl border border-border/80 bg-card overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-foreground">
              <thead className="bg-muted text-muted-foreground uppercase font-semibold border-b border-border/60">
                <tr>
                  <th className="px-4 py-3">Candidate Name</th>
                  <th className="px-4 py-3">Position</th>
                  <th className="px-4 py-3">Experience</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Resume</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filtered.map((app) => (
                  <tr key={app.id} className="hover:bg-muted/40 transition-colors">
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-foreground">{app.name}</div>
                      <div className="text-[11px] text-muted-foreground">{app.email} | {app.phone}</div>
                    </td>
                    <td className="px-4 py-3.5">
                      <Badge variant="accent">{app.position}</Badge>
                    </td>
                    <td className="px-4 py-3.5 font-medium">{app.experience}</td>
                    <td className="px-4 py-3.5">
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app.id, e.target.value)}
                        className="rounded-lg border border-border bg-background px-2 py-1 text-xs font-semibold focus:outline-none"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Interviewed">Interviewed</option>
                        <option value="Hired">Hired</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-4 py-3.5">
                      <a
                        href={app.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        <Download className="h-3.5 w-3.5" /> Download Resume
                      </a>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <Button variant="outline" size="sm" onClick={() => setSelectedApp(app)}>
                        View Pitch
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
        <ModalContent className="max-w-lg p-6">
          <ModalHeader>
            <ModalTitle>Candidate Pitch ({selectedApp?.name})</ModalTitle>
          </ModalHeader>
          {selectedApp && (
            <div className="space-y-4 pt-2 text-sm text-foreground">
              <div>
                <span className="text-xs text-muted-foreground">Position Applied:</span>
                <div className="font-bold text-base">{selectedApp.position}</div>
              </div>
              {selectedApp.portfolioUrl && (
                <div>
                  <span className="text-xs text-muted-foreground">Portfolio / LinkedIn:</span>
                  <div>
                    <a
                      href={selectedApp.portfolioUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {selectedApp.portfolioUrl} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              )}
              <div>
                <span className="text-xs text-muted-foreground">Cover Letter Pitch:</span>
                <div className="mt-1 p-3 rounded-xl bg-muted text-xs leading-relaxed">{selectedApp.coverLetter}</div>
              </div>
              <div className="pt-2 flex justify-end">
                <Button variant="accent" onClick={() => setSelectedApp(null)}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
