import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  User as FirebaseUser 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase-client';
import { User } from './types';

export const signUp = async (name: string, email: string, phone: string, password: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userData: User = {
      id: user.uid,
      name,
      email,
      phone,
      role: 'user',
      createdAt: new Date(),
    };

    await setDoc(doc(db, 'users', user.uid), userData);
    return userData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) {
      throw new Error('User not found');
    }

    return userDoc.data() as User;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const adminSignIn = async (username: string, password: string): Promise<User> => {
  try {
    // For demo purposes, using a hardcoded admin account
    // In production, you should use proper admin authentication
    if (username === 'admin' && password === 'admin123') {
      const adminUser: User = {
        id: 'admin',
        name: 'Admin',
        email: 'admin@saylani.org',
        phone: '0300-1234567',
        role: 'admin',
        createdAt: new Date(),
      };
      return adminUser;
    } else {
      throw new Error('Invalid admin credentials');
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
}; 