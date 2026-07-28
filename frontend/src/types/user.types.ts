import type { TimestampedDocument } from './common.types';

export type UserRole = 'super_admin' | 'admin' | 'editor' | 'viewer';

export interface User extends TimestampedDocument {
  name:            string;
  email:           string;
  role:            UserRole;
  avatar:          { url: string | null; publicId: string | null };
  phone?:          string;
  designation?:    string;
  isActive:        boolean;
  isEmailVerified: boolean;
  lastLogin?:      string;
  loginCount:      number;
}

export interface LoginPayload {
  email:    string;
  password: string;
}

export interface RegisterPayload {
  name:            string;
  email:           string;
  password:        string;
  passwordConfirm: string;
}

export interface AuthResponse {
  user:        User;
  accessToken: string;
}

export interface ChangePasswordPayload {
  currentPassword:    string;
  newPassword:        string;
  newPasswordConfirm: string;
}
