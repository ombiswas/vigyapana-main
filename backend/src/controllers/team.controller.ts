import { Request, Response } from 'express';
import { TeamMember } from '../models/team-member.model';
import { asyncHandler } from '../utils/async-handler';
import { ApiError } from '../utils/api-error';
import { ApiResponse } from '../utils/api-response';

export const getTeamMembers = asyncHandler(async (_req: Request, res: Response) => {
  const members = await TeamMember.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
  return ApiResponse.success(res, 'Team members retrieved', members);
});

export const createTeamMember = asyncHandler(async (req: Request, res: Response) => {
  const member = await TeamMember.create(req.body);
  return ApiResponse.created(res, 'Team member added', member);
});

export const updateTeamMember = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const member = await TeamMember.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });
  if (!member) throw ApiError.notFound('Team member not found');

  return ApiResponse.success(res, 'Team member updated', member);
});

export const deleteTeamMember = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const member = await TeamMember.findByIdAndDelete(id);
  if (!member) throw ApiError.notFound('Team member not found');

  return ApiResponse.success(res, 'Team member deleted', null);
});
