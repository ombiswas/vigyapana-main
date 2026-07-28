import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.string().optional(),
  servicesInterested: z.array(z.string()).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/v1/contact', data);
      setIsSuccess(true);
      toast.success('Your message has been sent successfully!');
      reset();
    } catch {
      toast.error('Failed to send message. Please try again or WhatsApp us.');
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
        <h3 className="font-display text-2xl font-bold text-foreground">Message Received!</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
          Thank you for reaching out. A Vigyapana growth strategist will review your inquiry and get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { void handleSubmit(onSubmit)(e); }} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            placeholder="John Doe"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Phone / WhatsApp Number
          </label>
          <input
            {...register('phone')}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Organization / Company
          </label>
          <input
            {...register('company')}
            placeholder="NGO / Brand Name"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Subject *
          </label>
          <input
            {...register('subject')}
            placeholder="e.g. NGO Fundraising / Meta Ads Growth"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
            Estimated Monthly Ad Budget
          </label>
          <select
            {...register('budget')}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select budget range</option>
            <option value="under_50k">Under ₹50,000 / mo</option>
            <option value="50k_1l">₹50,000 - ₹1,000,000 / mo</option>
            <option value="1l_5l">₹1,000,000 - ₹5,000,000 / mo</option>
            <option value="above_5l">Above ₹5,000,000 / mo</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Your Message / Project Details *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Tell us about your goals, current ad challenges, or fundraising targets..."
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="accent" size="lg" isLoading={isSubmitting} className="w-full shadow-xl">
        Send Inquiry <Send className="h-4 w-4 ml-2" />
      </Button>
    </form>
  );
};
