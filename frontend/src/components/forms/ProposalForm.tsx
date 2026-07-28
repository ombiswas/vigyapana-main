import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, FileText } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const proposalSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  company: z.string().min(2, 'Company is required'),
  serviceName: z.string().min(2, 'Service required'),
  budget: z.string().min(1, 'Budget selection required'),
  message: z.string().optional(),
});

export type ProposalFormData = z.infer<typeof proposalSchema>;

export const ProposalForm: FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema),
  });

  const onSubmit = async (data: ProposalFormData) => {
    try {
      await axios.post('/api/v1/inquiries', { ...data, type: 'request-proposal' });
      setSubmitted(true);
      toast.success('Proposal request received!');
      if (onSuccess) onSuccess();
    } catch {
      toast.error('Failed to submit proposal request.');
    }
  };

  if (submitted) {
    return (
      <div className="py-6 text-center space-y-3">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
        <h4 className="font-display text-xl font-bold">Proposal Request Received!</h4>
        <p className="text-sm text-muted-foreground">
          We will prepare a customized scope of work and ROI projection document for your review.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { void handleSubmit(onSubmit)(e); }} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Your Name *</label>
        <input
          {...register('name')}
          placeholder="e.g. Rahul Sharma"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.name && <p className="text-xs text-destructive mt-0.5">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Work Email *</label>
        <input
          {...register('email')}
          type="email"
          placeholder="rahul@brand.com"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.email && <p className="text-xs text-destructive mt-0.5">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Phone Number *</label>
        <input
          {...register('phone')}
          placeholder="+91 98765 43210"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.phone && <p className="text-xs text-destructive mt-0.5">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Company / Brand *</label>
        <input
          {...register('company')}
          placeholder="e.g. Acme Tech Solutions"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.company && <p className="text-xs text-destructive mt-0.5">{errors.company.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Primary Service Needed *</label>
        <select
          {...register('serviceName')}
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        >
          <option value="">Select a service</option>
          <option value="Meta Ads Performance">Meta & Instagram Ads</option>
          <option value="Google Search Ads">Google Search & Display Ads</option>
          <option value="Website Development">Website / Landing Page Development</option>
          <option value="Branding & Content">Branding, Video & Graphic Content</option>
          <option value="SEO Optimization">Search Engine Optimization (SEO)</option>
        </select>
        {errors.serviceName && <p className="text-xs text-destructive mt-0.5">{errors.serviceName.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Monthly Budget *</label>
        <select
          {...register('budget')}
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        >
          <option value="">Select budget range</option>
          <option value="under_50k">Under ₹50,000 / mo</option>
          <option value="50k_1l">₹50,000 - ₹1,000,000 / mo</option>
          <option value="1l_5l">₹1,000,000 - ₹5,000,000 / mo</option>
          <option value="above_5l">Above ₹5,000,000 / mo</option>
        </select>
        {errors.budget && <p className="text-xs text-destructive mt-0.5">{errors.budget.message}</p>}
      </div>

      <Button type="submit" variant="default" isLoading={isSubmitting} className="w-full mt-2">
        <FileText className="h-4 w-4 mr-2" /> Request Detailed Proposal
      </Button>
    </form>
  );
};
