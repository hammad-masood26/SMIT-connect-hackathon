'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createHelpRequest } from '@/lib/database'
import { ArrowLeft, FileText, AlertCircle, Calendar, User, Phone, Package } from 'lucide-react'
import { User as UserType } from '@/lib/types'
import toast from 'react-hot-toast'


export default function HelpRequest() {
  const [user, setUser] = useState<UserType | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'Food' as 'Food' | 'Health' | 'Education' | 'Other',
    description: ''
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  if (!formData.name || !formData.phone || !formData.description.trim()) {
    toast.error('Please fill in all fields')
    return
  }

  setLoading(true)

  try {
    // Create help request in Firebase
    const helpRequestId = await createHelpRequest({
      userId: user.id,
      userName: formData.name,
      userPhone: formData.phone,
      type: formData.type,
      description: formData.description,
      status: 'pending'
    });

    // Create complete help request object for localStorage
    const helpRequestWithData = {
      id: helpRequestId,
      userId: user.id,
      userName: formData.name,
      userPhone: formData.phone,
      type: formData.type,
      description: formData.description,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    // Update localStorage
    const allHelpRequests = JSON.parse(localStorage.getItem('helpRequests') || '{}')
    const userHelpRequests = allHelpRequests[user.id] || []
    allHelpRequests[user.id] = [helpRequestWithData, ...userHelpRequests]
    localStorage.setItem('helpRequests', JSON.stringify(allHelpRequests))

    toast.success('Help request submitted successfully!')
    router.push('/user/dashboard')
  } catch (error: any) {
    console.error('Help request error:', error)
    toast.error(error.message || 'Failed to submit help request')
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
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Request Help</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="card">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Help Request Details</h2>
            <p className="text-gray-600">Please provide details about the assistance you need.</p>
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

            {/* Help Request Details */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                <Package className="inline h-4 w-4 mr-1" />
                Type of Help Needed
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="Food">Food Assistance</option>
                <option value="Health">Health & Medical</option>
                <option value="Education">Education Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="inline h-4 w-4 mr-1" />
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="input-field h-32 resize-none"
                placeholder="Please describe your situation and the specific help you need..."
                required
              />
            </div>

            {/* Help Type Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-900 mb-2">Available Assistance Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>
                  <strong>Food Assistance:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Emergency food packages</li>
                    <li>• Monthly food support</li>
                    <li>• Ramadan food distribution</li>
                  </ul>
                </div>
                <div>
                  <strong>Health & Medical:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Medical consultations</li>
                    <li>• Medicine assistance</li>
                    <li>• Hospital referrals</li>
                  </ul>
                </div>
                <div>
                  <strong>Education Support:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• School fee assistance</li>
                    <li>• Educational materials</li>
                    <li>• Skill development programs</li>
                  </ul>
                </div>
                <div>
                  <strong>Other Assistance:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Financial support</li>
                    <li>• Housing assistance</li>
                    <li>• Emergency relief</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-yellow-900 mb-2">Important Information</h3>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• All requests are reviewed by our team</li>
                <li>• Priority is given based on urgency and need</li>
                <li>• You will be contacted within 48 hours</li>
                <li>• Please provide accurate and detailed information</li>
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
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Submit Request'
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
} 