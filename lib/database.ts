import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase-client';
import { Appointment, HelpRequest, AdminStats } from './types';

// Appointments
export const createAppointment = async (appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'appointments'), {
      ...appointmentData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUserAppointments = async (userId: string): Promise<Appointment[]> => {
  try {
    const q = query(
      collection(db, 'appointments'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
      updatedAt: doc.data().updatedAt.toDate(),
    })) as Appointment[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllAppointments = async (): Promise<Appointment[]> => {
  try {
    const q = query(collection(db, 'appointments'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
      updatedAt: doc.data().updatedAt.toDate(),
    })) as Appointment[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateAppointmentStatus = async (appointmentId: string, status: 'approved' | 'rejected'): Promise<void> => {
  try {
    const appointmentRef = doc(db, 'appointments', appointmentId);
    await updateDoc(appointmentRef, {
      status,
      updatedAt: Timestamp.now(),
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Help Requests
export const createHelpRequest = async (helpRequestData: Omit<HelpRequest, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'helpRequests'), {
      ...helpRequestData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUserHelpRequests = async (userId: string): Promise<HelpRequest[]> => {
  try {
    const q = query(
      collection(db, 'helpRequests'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
      updatedAt: doc.data().updatedAt.toDate(),
    })) as HelpRequest[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllHelpRequests = async (): Promise<HelpRequest[]> => {
  try {
    const q = query(collection(db, 'helpRequests'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
      updatedAt: doc.data().updatedAt.toDate(),
    })) as HelpRequest[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateHelpRequestStatus = async (helpRequestId: string, status: 'approved' | 'rejected'): Promise<void> => {
  try {
    const helpRequestRef = doc(db, 'helpRequests', helpRequestId);
    await updateDoc(helpRequestRef, {
      status,
      updatedAt: Timestamp.now(),
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Admin Stats
export const getAdminStats = async (): Promise<AdminStats> => {
  try {
    const appointments = await getAllAppointments();
    const helpRequests = await getAllHelpRequests();

    return {
      totalAppointments: appointments.length,
      totalHelpRequests: helpRequests.length,
      pendingAppointments: appointments.filter(a => a.status === 'pending').length,
      approvedAppointments: appointments.filter(a => a.status === 'approved').length,
      rejectedAppointments: appointments.filter(a => a.status === 'rejected').length,
      pendingHelpRequests: helpRequests.filter(h => h.status === 'pending').length,
      approvedHelpRequests: helpRequests.filter(h => h.status === 'approved').length,
      rejectedHelpRequests: helpRequests.filter(h => h.status === 'rejected').length,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}; 