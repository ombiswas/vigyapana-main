import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '@/components/ui/Modal';
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  HeartHandshake,
  Layers,
  Mail,
  Plus,
  Server,
  Sparkles,
  TrendingUp,
  UserCheck,
} from 'lucide-react';
import { Link } from 'react-router';

// Realistic Recent Inquiries Data
const sampleInquiries = [
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

export default function DashboardPage() {
  const [selectedInquiry, setSelectedInquiry] = useState<typeof sampleInquiries[0] | null>(null);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Vigyapana CMS</title>
      </Helmet>

      <div className="space-y-8">
        {/* Top Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold text-accent uppercase tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5" /> Analytics Overview
            </div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Agency Dashboard</h1>
            <p className="text-sm text-muted-foreground">Monitor real-time campaign leads, inquiries, and CMS activity.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link to="/admin/services/new">
              <Button variant="accent" size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add Service
              </Button>
            </Link>
            <Link to="/admin/portfolio/new">
              <Button variant="default" size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add Portfolio
              </Button>
            </Link>
          </div>
        </div>

        {/* 1. Analytics KPI Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 space-y-4 border-border/80 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Total Inquiries</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="font-display text-3xl font-extrabold text-foreground">124</div>
              <span className="text-xs font-bold text-emerald-500 flex items-center gap-0.5">
                <TrendingUp className="h-3.5 w-3.5" /> +18%
              </span>
            </div>
            <div className="text-[11px] text-muted-foreground">12 unread contact submissions</div>
          </Card>

          <Card className="p-6 space-y-4 border-border/80 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Active Services</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <Layers className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="font-display text-3xl font-extrabold text-foreground">13</div>
              <span className="text-xs font-bold text-accent font-mono">Published</span>
            </div>
            <div className="text-[11px] text-muted-foreground">Across 4 growth categories</div>
          </Card>

          <Card className="p-6 space-y-4 border-border/80 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Donations Tracked</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <HeartHandshake className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="font-display text-3xl font-extrabold text-foreground">₹50 Cr+</div>
              <span className="text-xs font-bold text-emerald-500">80G Verified</span>
            </div>
            <div className="text-[11px] text-muted-foreground">Raised for Indian NGO partners</div>
          </Card>

          <Card className="p-6 space-y-4 border-border/80 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Career Applications</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                <UserCheck className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="font-display text-3xl font-extrabold text-foreground">42</div>
              <span className="text-xs font-bold text-indigo-400">Resumes</span>
            </div>
            <div className="text-[11px] text-muted-foreground">Stored on Cloudinary</div>
          </Card>
        </div>

        {/* 2. Recent Inquiries Table & System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Recent Inquiries Table */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-foreground">Recent Contact & Audit Submissions</h2>
              <Link to="/admin/contacts" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                View All <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

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
                    {sampleInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-muted/40 transition-colors">
                        <td className="px-4 py-3.5">
                          <div className="font-bold text-foreground">{inq.name}</div>
                          <div className="text-[11px] text-muted-foreground">{inq.organization}</div>
                        </td>
                        <td className="px-4 py-3.5">
                          <Badge variant={inq.type === 'NGO Growth Audit' ? 'accent' : 'outline'}>
                            {inq.type}
                          </Badge>
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                            inq.status === 'New'
                              ? 'bg-accent/20 text-accent border border-accent/40'
                              : 'bg-emerald-500/20 text-emerald-500'
                          }`}>
                            {inq.status}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-muted-foreground">{inq.createdAt}</td>
                        <td className="px-4 py-3.5 text-right">
                          <Button variant="outline" size="sm" onClick={() => setSelectedInquiry(inq)}>
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Shortcuts & Server Health */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 space-y-4">
              <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" /> Quick CMS Shortcuts
              </h3>

              <div className="space-y-2 text-xs">
                <Link to="/admin/blog/new" className="flex items-center justify-between p-3 rounded-2xl bg-muted/50 hover:bg-muted font-medium text-foreground transition-colors">
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" /> Write New Blog Article
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Link>

                <Link to="/admin/careers" className="flex items-center justify-between p-3 rounded-2xl bg-muted/50 hover:bg-muted font-medium text-foreground transition-colors">
                  <span className="flex items-center gap-2">
                    <UserCheck className="h-4 w-4 text-accent" /> View Career Applicants
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Link>

                <Link to="/admin/media" className="flex items-center justify-between p-3 rounded-2xl bg-muted/50 hover:bg-muted font-medium text-foreground transition-colors">
                  <span className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-indigo-400" /> Upload Cloudinary Media
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </Link>
              </div>
            </Card>

            <Card className="p-6 space-y-3 bg-slate-950 text-white border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Server Health</span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> 99.9% Online
                </span>
              </div>
              <div className="text-xs text-slate-300">
                MongoDB connected. Cloudinary CDN active. JWT Token rotation enabled.
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Inquiry Detail Modal */}
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
                <span className="text-xs text-muted-foreground">Message:</span>
                <div className="mt-1 p-3 rounded-xl bg-muted text-xs leading-relaxed">{selectedInquiry.message}</div>
              </div>
              <div className="pt-2 flex justify-end">
                <Button variant="accent" onClick={() => setSelectedInquiry(null)}>
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
