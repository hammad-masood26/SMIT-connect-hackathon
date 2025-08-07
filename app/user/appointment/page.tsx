'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createAppointment } from '@/lib/database'
import { ArrowLeft, Calendar, Clock, User, Phone, FileText } from 'lucide-react'
import { User as UserType } from '@/lib/types'
import toast from 'react-hot-toast'

export default function BookAppointment() {
  const [user, setUser] = useState<UserType | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: '',
    preferredDate: '',
    preferredTime: ''
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
      setFormData((prev) => ({
        ...prev,
        name: parsedUser.name || '',
        phone: parsedUser.phone || ''
      }))
    } else {
      router.push('/user/login')
    }
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast.error('User not found')
      return
    }

    if (!formData.name || !formData.phone || !formData.reason || !formData.preferredDate || !formData.preferredTime) {
      toast.error('Please fill in all fields')
      return
    }

    setLoading(true)

     try {
    // Create appointment without createdAt in the initial object
    const appointment = await createAppointment({
      userId: user.id,
      userName: formData.name,
      userPhone: formData.phone,
      reason: formData.reason,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      status: 'pending'
    });

    // Add createdAt when saving to localStorage
    const appointmentWithTimestamp = {
      ...(typeof appointment === 'object' && appointment !== null ? appointment : {}),
      createdAt: new Date().toISOString()
    }

    // Save to localStorage with timestamp
    const allAppointments = JSON.parse(localStorage.getItem('appointments') || '{}')
    const userAppointments = allAppointments[user.id] || []
    allAppointments[user.id] = [appointmentWithTimestamp, ...userAppointments]
    localStorage.setItem('appointments', JSON.stringify(allAppointments))

    toast.success('Appointment booked successfully!')
    router.push('/user/dashboard')
  } catch (error: any) {
    toast.error(error.message || 'Failed to book appointment')
  } finally {
    setLoading(false)
  }
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Book Appointment</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="card">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Appointment Details</h2>
            <p className="text-gray-600">Please provide the details for your appointment request.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Information (Read-only) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="input-field bg-gray-50"
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
                  className="input-field bg-gray-50"
                />
              </div>
            </div>

            {/* Appointment Details */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="inline h-4 w-4 mr-1" />
                Reason for Appointment
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="input-field h-32 resize-none"
                placeholder="Please describe the reason for your appointment..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Preferred Date
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="input-field"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Preferred Time
                </label>
                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-900 mb-2">Important Information</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Appointments are subject to availability</li>
                <li>• You will receive a confirmation once approved</li>
                <li>• Please arrive 10 minutes before your scheduled time</li>
                <li>• Bring any relevant documents or identification</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="btn-outline flex-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex-1 flex items-center justify-center"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Booking...</span>
                  </div>
                ) : (
                  'Book Appointment'
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
} 