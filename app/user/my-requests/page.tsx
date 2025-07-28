'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getUserAppointments, getUserHelpRequests } from '@/lib/database-client'
import { Appointment, HelpRequest, User } from '@/lib/types'
import { Calendar, Clock, FileText, Phone, User as UserIcon, CheckCircle, XCircle, Clock as ClockIcon, ArrowLeft, Heart } from 'lucide-react'
import toast from 'react-hot-toast'

export default function MyRequests() {
  const [user, setUser] = useState<User | null>(null)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'appointments' | 'help'>('appointments')
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const userObj = JSON.parse(userData)
      setUser(userObj)
      loadUserData(userObj.id)
    } else {
      router.push('/user/login')
    }
  }, [router])

  const loadUserData = async (userId: string) => {
    try {
      const [appointmentsData, helpRequestsData] = await Promise.all([
        getUserAppointments(userId),
        getUserHelpRequests(userId)
      ])
      setAppointments(appointmentsData)
      setHelpRequests(helpRequestsData)
    } catch (error) {
      console.error('Failed to load user data:', error)
      toast.error('Failed to load your requests')
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'status-pending'
      case 'approved':
        return 'status-approved'
      case 'rejected':
        return 'status-rejected'
      default:
        return 'status-pending'
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
            <h1 className="text-2xl font-bold text-gray-900 ml-4">My Requests</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm mb-6">
          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-colors duration-200 ${activeTab === 'appointments'
                ? 'bg-saylani-green text-white'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Appointments ({appointments.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('help')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-colors duration-200 ${activeTab === 'help'
                ? 'bg-saylani-blue text-white'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            <Heart className="h-5 w-5" />
            <span className="font-medium">Help Requests ({helpRequests.length})</span>
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-saylani-green"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div>
                {appointments.length === 0 ? (
                  <div className="card text-center py-12">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Appointments</h3>
                    <p className="text-gray-600 mb-6">You haven't booked any appointments yet.</p>
                    <button
                      onClick={() => router.push('/user/appointment')}
                      className="btn-primary"
                    >
                      Book Appointment
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="card">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Calendar className="h-5 w-5 text-saylani-green" />
                              <h3 className="font-semibold text-gray-900">Appointment Request</h3>
                              <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(appointment.status)}`}>
                                {getStatusIcon(appointment.status)}
                                <span className="capitalize">{appointment.status}</span>
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>
                                <span className="font-medium">Reason:</span>
                                <p className="mt-1">{appointment.reason}</p>
                              </div>
                              <div>
                                <span className="font-medium">Preferred Date & Time:</span>
                                <p className="mt-1">{appointment.preferredDate} at {appointment.preferredTime}</p>
                              </div>
                            </div>
                            <div className="mt-3 text-xs text-gray-500">
                              Submitted on {new Date(appointment.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Help Requests Tab */}
            {activeTab === 'help' && (
              <div>
                {helpRequests.length === 0 ? (
                  <div className="card text-center py-12">
                    <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Help Requests</h3>
                    <p className="text-gray-600 mb-6">You haven't submitted any help requests yet.</p>
                    <button
                      onClick={() => router.push('/user/help-request')}
                      className="btn-secondary"
                    >
                      Request Help
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {helpRequests.map((request) => (
                      <div key={request.id} className="card">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Heart className="h-5 w-5 text-saylani-blue" />
                              <h3 className="font-semibold text-gray-900">Help Request</h3>
                              <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(request.status)}`}>
                                {getStatusIcon(request.status)}
                                <span className="capitalize">{request.status}</span>
                              </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                              <div>
                                <span className="font-medium">Type:</span>
                                <p className="mt-1">{request.type}</p>
                              </div>
                              <div>
                                <span className="font-medium">Description:</span>
                                <p className="mt-1">{request.description}</p>
                              </div>
                            </div>
                            <div className="mt-3 text-xs text-gray-500">
                              Submitted on {new Date(request.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
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
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg bg-saylani-green/10 text-saylani-green"
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs font-medium">Requests</span>
          </button>

          <button
            onClick={() => router.push('/user/profile')}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200"
          >
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
} 