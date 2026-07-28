import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal, ModalContent, ModalHeader, ModalTitle } from '@/components/ui/Modal';
import { Edit3, Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const initialTeam = [
  {
    id: '1',
    name: 'Om Biswas',
    role: 'Founder & Managing Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    bio: 'Pioneered Vigyapana’s dual-impact growth model.',
  },
  {
    id: '2',
    name: 'Ananya Deshmukh',
    role: 'Head of NGO Growth',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    bio: 'Google Certified Ad Grants specialist who unlocked $1.2M+ in free ads.',
  },
];

export default function AdminTeamPage() {
  const [team, setTeam] = useState(initialTeam);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleDelete = (id: string) => {
    setTeam(team.filter((t) => t.id !== id));
    toast.success('Team member removed.');
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && role) {
      setTeam([
        ...team,
        {
          id: String(Date.now()),
          name,
          role,
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
          bio: 'Digital growth strategist at Vigyapana.',
        },
      ]);
      toast.success('Team member added!');
      setName('');
      setRole('');
      setModalOpen(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Manage Team | Admin Vigyapana</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground">Team Management</h1>
            <p className="text-sm text-muted-foreground">Manage agency leadership and growth strategists.</p>
          </div>

          <Button variant="accent" onClick={() => setModalOpen(true)}>
            <Plus className="h-4 w-4 mr-1" /> Add Team Member
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <Card key={member.id} className="p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-4">
                <img src={member.image} alt={member.name} className="h-16 w-16 rounded-full object-cover border-2 border-primary" />
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                  <Badge variant="accent" className="text-[10px] mt-1">{member.role}</Badge>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>

              <div className="pt-3 border-t border-border/60 flex justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Edit3 className="h-3.5 w-3.5" />
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(member.id)}>
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
            <ModalTitle>Add Team Member</ModalTitle>
          </ModalHeader>
          <form onSubmit={handleAdd} className="space-y-4 pt-2">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rohan Verma"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Role / Designation *</label>
              <input
                type="text"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Lead Performance Marketer"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="accent">
                Add Member
              </Button>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
