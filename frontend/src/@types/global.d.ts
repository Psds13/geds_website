export {}; // <- deve vir antes do declare global ou fora dele

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => {
        init: () => void;
      };
    };
  }
}

import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

/**
 * Nortech Business Domain Types
 */

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'superadmin';
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  timestamp: number;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationMeta;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  pricing?: {
    startingPrice: number;
    currency: string;
  };
}