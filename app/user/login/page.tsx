'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { db } from '@/lib/firebase'
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore'

export default function UserLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // Save/update user info in Firestore
      const userData = {
        uid: user.uid,
        email: user.email,
        lastLogin: serverTimestamp(),
      }

      await setDoc(doc(db, 'users', user.uid), userData, { merge: true })

      // Fetch full user profile from Firestore
      const userDocRef = doc(db, 'users', user.uid)
      const userDocSnap = await getDoc(userDocRef)
      let fullUserData: any = userData
      if (userDocSnap.exists()) {
        const data = userDocSnap.data();
        // Convert Firestore Timestamp to ISO string if needed
        let createdAt = data.createdAt;
        if (createdAt && typeof createdAt.toDate === 'function') {
          createdAt = createdAt.toDate().toISOString();
        } else if (typeof createdAt === 'string') {
          // already a string, do nothing
        } else {
          createdAt = undefined;
        }
        fullUserData = { ...data, ...userData, createdAt };
      }

      // Check if user is admin (you can also fetch role from Firestore instead)
      const isAdmin = user.email === 'admin@saylani.org'

      if (isAdmin) {
        localStorage.setItem('admin', JSON.stringify(fullUserData))
        toast.success('Admin login successful!')
        router.push('/admin/dashboard')
      } else {
        localStorage.setItem('user', JSON.stringify(fullUserData))
        toast.success('Login successful!')
        router.push('/user/dashboard')
      }
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.");
      } else if (error.code === "auth/invalid-login-credentials") {
        toast.error("Invalid login credentials. Please try again.");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-saylani-green via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-fade-in-up">
        <Link
          href="/"
          className="inline-flex items-center text-white hover:text-saylani-green transition-all duration-300 mb-8 animate-fade-in-left"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="card animate-scale-in">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Saylani Connect account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10 pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center animate-fade-in-up hover-glow"
              style={{ animationDelay: '0.3s' }}
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/user/signup" className="text-saylani-green hover:text-green-600 font-medium transition-colors duration-200">
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          </div>
        </div>
      </div>
    </div>
  )
}
