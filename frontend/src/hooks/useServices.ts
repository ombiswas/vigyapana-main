import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { serviceService } from '@/services/service.service';
import type { FilterParams } from '@/types/common.types';
import type { Service } from '@/types/service.types';

// ── Query Keys ──────────────────────────────────────────────────────────────────
export const SERVICE_KEYS = {
  all:    ['services'] as const,
  lists:  () => [...SERVICE_KEYS.all, 'list'] as const,
  list:   (params: FilterParams) => [...SERVICE_KEYS.lists(), params] as const,
  detail: (slug: string) => [...SERVICE_KEYS.all, 'detail', slug] as const,
};

// ── Queries ────────────────────────────────────────────────────────────────────
export function useServices(params?: FilterParams) {
  return useQuery({
    queryKey: SERVICE_KEYS.list(params ?? {}),
    queryFn:  () => serviceService.getAll(params),
  });
}

export function useService(slug: string) {
  return useQuery({
    queryKey: SERVICE_KEYS.detail(slug),
    queryFn:  () => serviceService.getBySlug(slug),
    enabled:  !!slug,
  });
}

// ── Mutations ──────────────────────────────────────────────────────────────────
export function useCreateService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: Partial<Service>) => serviceService.create(payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: SERVICE_KEYS.lists() });
      toast.success('Service created successfully!');
    },
    onError: () => toast.error('Failed to create service.'),
  });
}

export function useUpdateService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: Partial<Service> }) =>
      serviceService.update(id, payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: SERVICE_KEYS.lists() });
      toast.success('Service updated successfully!');
    },
    onError: () => toast.error('Failed to update service.'),
  });
}

export function useDeleteService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => serviceService.delete(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: SERVICE_KEYS.lists() });
      toast.success('Service deleted.');
    },
    onError: () => toast.error('Failed to delete service.'),
  });
}

export function useToggleServicePublished() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => serviceService.togglePublished(id),
    onSuccess: (updated) => {
      void queryClient.invalidateQueries({ queryKey: SERVICE_KEYS.lists() });
      toast.success(`Service ${updated?.isPublished ? 'published' : 'unpublished'}.`);
    },
    onError: () => toast.error('Failed to update publish status.'),
  });
}
