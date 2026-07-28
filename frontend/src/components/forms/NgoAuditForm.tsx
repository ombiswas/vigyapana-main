import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const ngoAuditSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone is required'),
  company: z.string().min(2, 'NGO / Trust Name is required'),
  hasGoogleAdGrant: z.string().optional(),
  currentMonthlyDonations: z.string().optional(),
  websiteUrl: z.string().optional(),
});

export type NgoAuditFormData = z.infer<typeof ngoAuditSchema>;

export const NgoAuditForm: FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NgoAuditFormData>({
    resolver: zodResolver(ngoAuditSchema),
  });

  const onSubmit = async (data: NgoAuditFormData) => {
    try {
      await axios.post('/api/v1/inquiries', {
        ...data,
        type: 'ngo-audit',
        message: `NGO Audit Request: Ad Grant Status = ${data.hasGoogleAdGrant ?? 'N/A'}, Monthly Donations = ${data.currentMonthlyDonations ?? 'N/A'}, Website = ${data.websiteUrl ?? 'N/A'}`,
      });
      setSubmitted(true);
      toast.success('Free NGO Audit request submitted!');
      if (onSuccess) onSuccess();
    } catch {
      toast.error('Failed to submit audit request.');
    }
  };

  if (submitted) {
    return (
      <div className="py-6 text-center space-y-3">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
        <h4 className="font-display text-xl font-bold">Audit Requested!</h4>
        <p className="text-sm text-muted-foreground">
          Our NGO growth team will evaluate your donation funnel and Google Ad Grant status. Expect your report within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { void handleSubmit(onSubmit)(e); }} className="space-y-4">
      <div className="rounded-2xl bg-accent/10 border border-accent/30 p-3.5 flex items-center gap-3 text-xs text-accent font-medium mb-2">
        <ShieldCheck className="h-5 w-5 shrink-0" />
        <span>100% Free Audit for Registered 80G / 12A Indian NGOs & Foundations</span>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Your Name *</label>
        <input
          {...register('name')}
          placeholder="e.g. Trustee / Founder Name"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.name && <p className="text-xs text-destructive mt-0.5">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Official Email *</label>
        <input
          {...register('email')}
          type="email"
          placeholder="contact@ngotrust.org"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.email && <p className="text-xs text-destructive mt-0.5">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">WhatsApp / Phone *</label>
        <input
          {...register('phone')}
          placeholder="+91 98765 43210"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.phone && <p className="text-xs text-destructive mt-0.5">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">NGO / Trust Name *</label>
        <input
          {...register('company')}
          placeholder="e.g. Care Foundation India"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.company && <p className="text-xs text-destructive mt-0.5">{errors.company.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Do you currently have $10,000/mo Google Ad Grants?</label>
        <select
          {...register('hasGoogleAdGrant')}
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        >
          <option value="">Select option</option>
          <option value="Yes - Active">Yes, active but need better results</option>
          <option value="No - Need Setup">No, want Vigyapana to apply & manage</option>
          <option value="Not Sure">Not sure / Need guidance</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">NGO Website URL</label>
        <input
          {...register('websiteUrl')}
          placeholder="https://ngotrust.org"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
      </div>

      <Button type="submit" variant="accent" isLoading={isSubmitting} className="w-full mt-2 shadow-xl">
        <HeartHandshake className="h-4 w-4 mr-2" /> Claim Free NGO Growth Audit
      </Button>
    </form>
  );
};
