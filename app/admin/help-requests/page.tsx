'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAllHelpRequests, updateHelpRequestStatus } from '@/lib/database'
import { HelpRequest, User } from '@/lib/types'
import { FileText, User as UserIcon, Phone, Calendar, AlertCircle, CheckCircle, XCircle, Clock, ArrowLeft, Heart, Package } from 'lucide-react'
import toast from 'react-hot-toast'

export default function AdminHelpRequests() {
  const [admin, setAdmin] = useState<User | null>(null)
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all')
  const router = useRouter()

  useEffect(() => {
    const adminData = localStorage.getItem('admin')
    if (adminData) {
      setAdmin(JSON.parse(adminData))
      loadHelpRequests()
    } else {
      router.push('/admin/login')
    }
  }, [router])

  const loadHelpRequests = async () => {
    try {
      const data = await getAllHelpRequests()
      setHelpRequests(data)
    } catch (error) {
      console.error('Failed to load help requests:', error)
      toast.error('Failed to load help requests')
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (helpRequestId: string, status: 'approved' | 'rejected') => {
    try {
      await updateHelpRequestStatus(helpRequestId, status)
      await loadHelpRequests() // Reload data
      toast.success(`Help request ${status} successfully`)
    } catch (error) {
      console.error('Failed to update help request:', error)
      toast.error('Failed to update help request status')
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Food':
        return 'text-orange-600 bg-orange-100'
      case 'Health':
        return 'text-red-600 bg-red-100'
      case 'Education':
        return 'text-blue-600 bg-blue-100'
      case 'Other':
        return 'text-gray-600 bg-gray-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredHelpRequests = helpRequests.filter(request => {
    if (filter === 'all') return true
    return request.status === filter
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
              <h1 className="text-2xl font-bold text-gray-900 ml-4">Manage Help Requests</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-saylani-blue" />
              <span className="text-sm text-gray-600">{helpRequests.length} total</span>
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
                  ? 'bg-saylani-blue text-white'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              All ({helpRequests.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'pending'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Pending ({helpRequests.filter(h => h.status === 'pending').length})
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'approved'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Approved ({helpRequests.filter(h => h.status === 'approved').length})
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'rejected'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Rejected ({helpRequests.filter(h => h.status === 'rejected').length})
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-saylani-blue"></div>
          </div>
        ) : filteredHelpRequests.length === 0 ? (
          <div className="card text-center py-12">
            <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Help Requests</h3>
            <p className="text-gray-600">
              {filter === 'all'
                ? 'No help requests have been submitted yet.'
                : `No ${filter} help requests found.`
              }
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredHelpRequests.map((request) => (
              <div key={request.id} className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-4">
                      <Heart className="h-5 w-5 text-saylani-blue" />
                      <h3 className="font-semibold text-gray-900">Help Request</h3>
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(request.status)}`}>
                        {getStatusIcon(request.status)}
                        <span className="capitalize">{request.status}</span>
                      </span>
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(request.type)}`}>
                        <Package className="h-3 w-3" />
                        <span>{request.type}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <UserIcon className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{request.userName}</p>
                          <p className="text-xs text-gray-500">Name</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{request.userPhone}</p>
                          <p className="text-xs text-gray-500">Phone</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">Description:</p>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{request.description}</p>
                    </div>
                    <div className="text-xs text-gray-500">
                      Submitted on {request.createdAt ? new Date(request.createdAt).toLocaleDateString() : 'N/A'}
                    </div>

                  </div>

                  {request.status === 'pending' && (
                    <div className="flex flex-col space-y-2 ml-4">
                      <button
                        onClick={() => handleStatusUpdate(request.id, 'approved')}
                        className="flex items-center space-x-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Approve</span>
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(request.id, 'rejected')}
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