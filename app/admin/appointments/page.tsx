'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAllAppointments, updateAppointmentStatus } from '@/lib/database'
import { Appointment, User } from '@/lib/types'
import { Calendar, User as UserIcon, Phone, Clock, CheckCircle, XCircle, ArrowLeft } from 'lucide-react'
import toast from 'react-hot-toast'

export default function AdminAppointments() {
  const [admin, setAdmin] = useState<User | null>(null)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all')
  const router = useRouter()

  useEffect(() => {
    const adminData = localStorage.getItem('admin')
    if (adminData) {
      setAdmin(JSON.parse(adminData))
      loadAppointments()
    } else {
      router.push('/admin/login')
    }
  }, [router])

  const loadAppointments = async () => {
    try {
      const data = await getAllAppointments()
      setAppointments(data)
    } catch (error) {
      console.error('Failed to load appointments:', error)
      toast.error('Failed to load appointments')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (appointmentId: string, status: 'approved' | 'rejected') => {
    try {
      await updateAppointmentStatus(appointmentId, status)
      await loadAppointments() // Reload data
      toast.success(`Appointment ${status} successfully`)
    } catch (error) {
      console.error('Failed to update appointment:', error)
      toast.error('Failed to update appointment status')
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

  const filteredAppointments = appointments.filter(appointment => {
    if (filter === 'all') return true
    return appointment.status === filter
  })

  if (!admin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
              <h1 className="text-2xl font-bold text-gray-900 ml-4">Manage Appointments</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-saylani-green" />
              <span className="text-sm text-gray-600">{appointments.length} total</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Controls */}
        <div className="mb-6">
          <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'all'
                ? 'bg-saylani-green text-white'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              All ({appointments.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'pending'
                ? 'bg-yellow-500 text-white'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Pending ({appointments.filter(a => a.status === 'pending').length})
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'approved'
                ? 'bg-green-500 text-white'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Approved ({appointments.filter(a => a.status === 'approved').length})
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'rejected'
                ? 'bg-red-500 text-white'
                : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Rejected ({appointments.filter(a => a.status === 'rejected').length})
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-saylani-green"></div>
          </div>
        ) : filteredAppointments.length === 0 ? (
          <div className="card text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Appointments</h3>
            <p className="text-gray-600">
              {filter === 'all'
                ? 'No appointments have been submitted yet.'
                : `No ${filter} appointments found.`
              }
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="h-5 w-5 text-saylani-green" />
                      <h3 className="font-semibold text-gray-900">Appointment Request</h3>
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(appointment.status)}`}>
                        {getStatusIcon(appointment.status)}
                        <span className="capitalize">{appointment.status}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <UserIcon className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{appointment.userName}</p>
                          <p className="text-xs text-gray-500">Name</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{appointment.userPhone}</p>
                          <p className="text-xs text-gray-500">Phone</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {appointment.preferredDate} at {appointment.preferredTime}
                          </p>
                          <p className="text-xs text-gray-500">Preferred Time</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Reason for Appointment:</p>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{appointment.reason}</p>
                    </div>
                    <div className="text-xs text-gray-500">
                      Submitted on {appointment.createdAt ? new Date(appointment.createdAt).toLocaleDateString() : 'N/A'}
                    </div>
                  </div>

                  {appointment.status === 'pending' && (
                    <div className="flex flex-col space-y-2 ml-4">
                      <button
                        onClick={() => handleStatusUpdate(appointment.id, 'approved')}
                        className="flex items-center space-x-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Approve</span>
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(appointment.id, 'rejected')}
                        className="flex items-center space-x-1 px-3 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
                      >
                        <XCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Reject</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
} 