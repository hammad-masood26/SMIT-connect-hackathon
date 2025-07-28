export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

export interface Appointment {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  reason: string;
  preferredDate: string;
  preferredTime: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface HelpRequest {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  type: 'Food' | 'Health' | 'Education' | 'Other';
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminStats {
  totalAppointments: number;
  totalHelpRequests: number;
  pendingAppointments: number;
  approvedAppointments: number;
  rejectedAppointments: number;
  pendingHelpRequests: number;
  approvedHelpRequests: number;
  rejectedHelpRequests: number;
}