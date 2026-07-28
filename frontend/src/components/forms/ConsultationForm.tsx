import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const consultationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  company: z.string().min(2, 'Organization / Company name required'),
  type: z.enum(['book-consultation', 'request-proposal', 'ngo-audit', 'general']).default('book-consultation'),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;

export const ConsultationForm: FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { type: 'book-consultation' },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      await axios.post('/api/v1/inquiries', data);
      setSubmitted(true);
      toast.success('Strategy consultation requested!');
      if (onSuccess) onSuccess();
    } catch {
      toast.error('Failed to submit request. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className="py-6 text-center space-y-3">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
        <h4 className="font-display text-xl font-bold">Consultation Requested!</h4>
        <p className="text-sm text-muted-foreground">
          We will contact you via WhatsApp / Phone to confirm your preferred time slot.
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
          placeholder="e.g. Ananya Roy"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.name && <p className="text-xs text-destructive mt-0.5">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Work Email *</label>
        <input
          {...register('email')}
          type="email"
          placeholder="ananya@ngo.org"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.email && <p className="text-xs text-destructive mt-0.5">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Phone / WhatsApp *</label>
        <input
          {...register('phone')}
          placeholder="+91 98765 43210"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.phone && <p className="text-xs text-destructive mt-0.5">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Organization Name *</label>
        <input
          {...register('company')}
          placeholder="e.g. Smile Trust / Brand Pvt Ltd"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
        {errors.company && <p className="text-xs text-destructive mt-0.5">{errors.company.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-foreground mb-1">Preferred Date / Time</label>
        <input
          {...register('preferredDate')}
          type="date"
          className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm"
        />
      </div>

      <Button type="submit" variant="accent" isLoading={isSubmitting} className="w-full mt-2">
        <PhoneCall className="h-4 w-4 mr-2" /> Book Strategy Session
      </Button>
    </form>
  );
};
