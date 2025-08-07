import { Appointment, HelpRequest, AdminStats } from './types';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';
// Mock data for demo purposes
let mockAppointments: Appointment[] = [
  {
    id: 'apt1',
    userId: 'user1',
    userName: 'John Doe',
    userPhone: '0300-1234567',
    reason: 'Medical Consultation',
    preferredDate: '2024-01-15',
    preferredTime: '10:00 AM',
    status: 'pending',
    // createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: 'apt2',
    userId: 'user2',
    userName: 'Jane Smith',
    userPhone: '0300-7654321',
    reason: 'Education Support',
    preferredDate: '2024-01-20',
    preferredTime: '2:00 PM',
    status: 'approved',
    // createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-13'),
  },
];

let mockHelpRequests: HelpRequest[] = [
  {
    id: 'req1',
    userId: 'user1',
    userName: 'John Doe',
    userPhone: '0300-1234567',
    type: 'Health',
    description: 'Need financial help for emergency surgery',
    status: 'pending',
    // createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: 'req2',
    userId: 'user2',
    userName: 'Jane Smith',
    userPhone: '0300-7654321',
    type: 'Food',
    description: 'Need food assistance for family of 4',
    status: 'approved',
    // createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-09'),
  },
];

// Appointments
export const createAppointment = async (
  appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>
): Promise<string> => {
  const docRef = await addDoc(collection(db, 'appointments'), {
    ...appointmentData,
    status: 'pending',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getUserAppointments = async (userId: string): Promise<Appointment[]> => {
  const q = query(collection(db, 'appointments'), where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Appointment));
};

export const getAllAppointments = async (): Promise<Appointment[]> => {
  const snapshot = await getDocs(collection(db, 'appointments'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Appointment));
};

export const updateAppointmentStatus = async (
  appointmentId: string,
  status: 'approved' | 'rejected'
): Promise<void> => {
  const ref = doc(db, 'appointments', appointmentId);
  await updateDoc(ref, {
    status,
    updatedAt: Timestamp.now(),
  });
};

// Help Requests
export const createHelpRequest = async (helpRequestData: Omit<HelpRequest, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const newHelpRequest: HelpRequest = {
    id: `req${mockHelpRequests.length + 1}`,
    ...helpRequestData,
    // createdAt: new Date(),
    updatedAt: new Date(),
  };

  mockHelpRequests.push(newHelpRequest);
  return newHelpRequest.id;
};

export const getUserHelpRequests = async (userId: string): Promise<HelpRequest[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockHelpRequests.filter(req => req.userId === userId);
};

export const getAllHelpRequests = async (): Promise<HelpRequest[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockHelpRequests;
};

export const updateHelpRequestStatus = async (helpRequestId: string, status: 'approved' | 'rejected'): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const helpRequest = mockHelpRequests.find(req => req.id === helpRequestId);
  if (helpRequest) {
    helpRequest.status = status;
    helpRequest.updatedAt = new Date();
  }
};

// Admin Stats
export const getAdminStats = async (): Promise<AdminStats> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    totalAppointments: mockAppointments.length,
    totalHelpRequests: mockHelpRequests.length,
    pendingAppointments: mockAppointments.filter(a => a.status === 'pending').length,
    approvedAppointments: mockAppointments.filter(a => a.status === 'approved').length,
    rejectedAppointments: mockAppointments.filter(a => a.status === 'rejected').length,
    pendingHelpRequests: mockHelpRequests.filter(h => h.status === 'pending').length,
    approvedHelpRequests: mockHelpRequests.filter(h => h.status === 'approved').length,
    rejectedHelpRequests: mockHelpRequests.filter(h => h.status === 'rejected').length,
  };
}; 