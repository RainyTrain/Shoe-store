import { Auth } from 'firebase/auth';

export type UserType = {
  auth: Auth;
  email: string;
  password: string;
};

export type PasswordValidationType = {
  status: boolean;
  errorMessage: string;
};