'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, User, Mail, Phone, Save, Edit, X } from 'lucide-react'
import { User as UserType } from '@/lib/types'
import toast from 'react-hot-toast'

export default function UserProfile() {
  const [user, setUser] = useState<UserType | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const userObj = JSON.parse(userData)
      setUser(userObj)
      setFormData({
        name: userObj.name,
        email: userObj.email,
        phone: userObj.phone
      })
    } else {
      router.push('/user/login')
    }
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setLoading(true)

    try {
      // In a real app, you would update the user data in Firebase
      const updatedUser = { ...user!, ...formData }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setUser(updatedUser)
      setIsEditing(false)
      toast.success('Profile updated successfully!')
    } catch (error) {
      toast.error('Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    })
    setIsEditing(false)
  }

  if (!user) {
    return null
  }

  // Helper to format createdAt safely
  const getMemberSince = (createdAt: any) => {
    if (!createdAt) return 'N/A'
    const date = new Date(createdAt)
    return isNaN(date.getTime()) ? 'N/A' : date.toLocaleDateString()
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <button
                onClick={() => router.back()}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <h1 className="text-2xl font-bold text-gray-900 ml-4">Profile</h1>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 text-saylani-green hover:text-green-600 transition-colors duration-200"
              >
                <Edit className="h-5 w-5" />
                <span>Edit</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleCancel}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex items-center space-x-2 text-saylani-green hover:text-green-600 transition-colors duration-200"
                >
                  <Save className="h-5 w-5" />
                  <span>{loading ? 'Saving...' : 'Save'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="card">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h2>
            <p className="text-gray-600">Manage your account details and preferences.</p>
          </div>

          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="text-center">
              <div className="w-24 h-24 bg-saylani-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-12 w-12 text-saylani-green" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
              <p className="text-gray-600">Member since {getMemberSince(user.createdAt)}</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${!isEditing ? 'bg-gray-50' : ''}`}
                  readOnly={!isEditing}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-1" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${!isEditing ? 'bg-gray-50' : ''}`}
                  readOnly={!isEditing}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-field ${!isEditing ? 'bg-gray-50' : ''}`}
                  readOnly={!isEditing}
                />
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Account Information</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Account Type:</span>
                  <span className="font-medium">User</span>
                </div>
                <div className="flex justify-between">
                  <span>Member Since:</span>
                  <span className="font-medium">{getMemberSince(user.createdAt)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Account Status:</span>
                  <span className="font-medium text-green-600">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <button
            onClick={() => router.push('/user/dashboard')}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200"
          >
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={() => router.push('/user/appointment')}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200"
          >
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Appointment</span>
          </button>

          <button
            onClick={() => router.push('/user/help-request')}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200"
          >
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Help</span>
          </button>

          <button
            onClick={() => router.push('/user/my-requests')}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200"
          >
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Requests</span>
          </button>

          <button
            onClick={() => router.push('/user/profile')}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg bg-saylani-green/10 text-saylani-green"
          >
            <div className="w-5 h-5 bg-saylani-green rounded"></div>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}