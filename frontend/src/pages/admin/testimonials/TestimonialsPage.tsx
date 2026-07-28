import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '@/components/ui/Modal';
import { Plus, Quote, Star, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const initialTestimonials = [
  {
    id: '1',
    author: 'Ramesh Sharma',
    role: 'Executive Director, Hope Trust NGO',
    rating: 5,
    quote: 'Vigyapana helped us raise over ₹1.4 Crores in 6 months. Unbelievable technical expertise.',
  },
  {
    id: '2',
    author: 'Priya Mehta',
    role: 'Co-Founder & CMO, Aura Organic',
    rating: 5,
    quote: 'Our e-commerce brand went from 1.4x to 4.2x ROAS in 60 days.',
  },
];

export default function AdminTestimonialsPage() {
  const [items, setItems] = useState(initialTestimonials);
  const [modalOpen, setModalOpen] = useState(false);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [quote, setQuote] = useState('');

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    toast.success('Testimonial removed.');
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && quote) {
      setItems([
        ...items,
        { id: String(Date.now()), author, role: role || 'Client', rating: 5, quote },
      ]);
      toast.success('Testimonial added!');
      setAuthor('');
      setRole('');
      setQuote('');
      setModalOpen(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Manage Testimonials | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Testimonials Management</h1>
            <p className="text-sm text-muted-foreground">Manage client reviews, ratings, and quotes.</p>
          </div>

          <Button variant="accent" onClick={() => setModalOpen(true)}>
            <Plus className="h-4 w-4 mr-1" /> Add Testimonial
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="p-6 space-y-4 shadow-md relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground italic leading-relaxed">&ldquo;{item.quote}&rdquo;</p>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <div>
                  <div className="font-display text-sm font-bold text-foreground">{item.author}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>

                <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal open={modalOpen} onOpenChange={setModalOpen}>
        <ModalContent className="max-w-md p-6">
          <ModalHeader>
            <ModalTitle>Add Client Testimonial</ModalTitle>
          </ModalHeader>
          <form onSubmit={handleAdd} className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Author Name *</label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Vikramaditya Roy"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Designation & Company</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="VP Marketing, Apex HealthTech"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Quote *</label>
              <textarea
                rows={3}
                required
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Client feedback quote..."
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="accent">
                Add Testimonial
              </Button>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
