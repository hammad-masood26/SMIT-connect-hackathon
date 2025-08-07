'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getUserAppointments, getUserHelpRequests } from '@/lib/database'
import { Appointment, HelpRequest, User as UserType } from '@/lib/types'
import { Calendar, Heart, FileText, Phone, User, CheckCircle, XCircle, Clock, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

export default function MyRequests() {
  const [user, setUser] = useState<UserType | null>(null)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'appointments' | 'help'>('appointments')
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)

      // Function to load data from localStorage
      const loadLocalData = () => {
        const allAppointments = JSON.parse(localStorage.getItem('appointments') || '{}')
        const localAppointments = allAppointments[parsedUser.id] || []
        const allHelpRequests = JSON.parse(localStorage.getItem('helpRequests') || '{}')
        const localHelpRequests = allHelpRequests[parsedUser.id] || []
        
        setAppointments(localAppointments)
        setHelpRequests(localHelpRequests)
      }

      // Initial load from localStorage
      loadLocalData()

      // Load from Firebase
      Promise.all([
        getUserAppointments(parsedUser.id).then((data) => {
          setAppointments(data)
          // Update localStorage with Firebase data
          const allAppointments = JSON.parse(localStorage.getItem('appointments') || '{}')
          allAppointments[parsedUser.id] = data
          localStorage.setItem('appointments', JSON.stringify(allAppointments))
        }).catch(() => {
          toast.error('Failed to load appointments')
        }),

        getUserHelpRequests(parsedUser.id).then((data) => {
          setHelpRequests(data)
          // Update localStorage with Firebase data
          const allHelpRequests = JSON.parse(localStorage.getItem('helpRequests') || '{}')
          allHelpRequests[parsedUser.id] = data
          localStorage.setItem('helpRequests', JSON.stringify(allHelpRequests))
        }).catch(() => {
          toast.error('Failed to load help requests')
        })
      ]).finally(() => {
        setLoading(false)
      })

      // Listen for localStorage changes
      const handleStorage = (event: StorageEvent) => {
        if (event.key === 'appointments' || event.key === 'helpRequests') {
          loadLocalData()
        }
      }

      // Listen for window focus (when returning from other pages)
      const handleFocus = () => {
        loadLocalData()
      }

      window.addEventListener('storage', handleStorage)
      window.addEventListener('focus', handleFocus)

      return () => {
        window.removeEventListener('storage', handleStorage)
        window.removeEventListener('focus', handleFocus)
      }
    } else {
      router.push('/user/login')
    }
  }, [router])

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saylani-green"></div>
      </div>
    )
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
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-colors duration-200 
              ${activeTab === 'appointments' ? 'bg-saylani-green text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Calendar className="h-5 w-5" />
            <span>Appointments ({appointments.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('help')}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-colors duration-200
              ${activeTab === 'help' ? 'bg-saylani-blue text-white' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <Heart className="h-5 w-5" />
            <span>Help Requests ({helpRequests.length})</span>
          </button>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {activeTab === 'appointments' ? (
            appointments.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No Appointments</h3>
                <p className="text-gray-500 mt-2">You haven't booked any appointments yet.</p>
              </div>
            ) : (
              appointments.map((appointment) => (
                <div key={appointment.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-saylani-green" />
                      <h3 className="font-medium text-gray-900">Appointment</h3>
                    </div>
                    <div className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm bg-gray-100">
                      {getStatusIcon(appointment.status)}
                      <span className="capitalize">{appointment.status}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Reason</p>
                      <p className="font-medium">{appointment.reason}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Date & Time</p>
                      <p className="font-medium">{appointment.preferredDate} at {appointment.preferredTime}</p>
                    </div>
                  </div>
                </div>
              ))
            )
          ) : (
            helpRequests.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No Help Requests</h3>
                <p className="text-gray-500 mt-2">You haven't submitted any help requests yet.</p>
              </div>
            ) : (
              helpRequests.map((request) => (
                <div key={request.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-saylani-blue" />
                      <h3 className="font-medium text-gray-900">{request.type} Assistance</h3>
                    </div>
                    <div className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm bg-gray-100">
                      {getStatusIcon(request.status)}
                      <span className="capitalize">{request.status}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-500">Description</p>
                    <p className="font-medium mt-1">{request.description}</p>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </main>
    </div>
  )
}