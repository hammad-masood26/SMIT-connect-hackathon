'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Users, 
  Calendar, 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  ArrowRight,
  Shield,
  LogOut
} from 'lucide-react'
import { getAdminStats } from '@/lib/database'
import { AdminStats, User } from '@/lib/types'
import toast from 'react-hot-toast'

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<User | null>(null)
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const adminData = localStorage.getItem('admin')
    if (adminData) {
      setAdmin(JSON.parse(adminData))
      loadStats()
    } else {
      router.push('/user/login')
    }
    setLoading(false)
  }, [router])

  const loadStats = async () => {
    try {
      const statsData = await getAdminStats()
      setStats(statsData)
    } catch (error) {
      console.error('Failed to load stats:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin')
    toast.success('Logged out successfully')
    router.push('/')
  }

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saylani-green"></div>
      </div>
    )
  }

  if (!admin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 animate-fade-in-left">
              <div className="w-10 h-10 bg-saylani-green/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-saylani-green" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Welcome back, {admin.name}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-all duration-300 animate-fade-in-right"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 stagger-children">
          <div className="card animate-scale-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Appointments</p>
                <p className="text-3xl font-bold text-saylani-green">{stats?.totalAppointments || 0}</p>
              </div>
              <div className="w-12 h-12 bg-saylani-green/10 rounded-lg flex items-center justify-center animate-float">
                <Calendar className="h-6 w-6 text-saylani-green" />
              </div>
            </div>
          </div>

          <div className="card animate-scale-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Help Requests</p>
                <p className="text-3xl font-bold text-saylani-blue">{stats?.totalHelpRequests || 0}</p>
              </div>
              <div className="w-12 h-12 bg-saylani-blue/10 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
                <FileText className="h-6 w-6 text-saylani-blue" />
              </div>
            </div>
          </div>

          <div className="card animate-scale-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Items</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {(stats?.pendingAppointments || 0) + (stats?.pendingHelpRequests || 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="card animate-scale-in">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-3xl font-bold text-green-600">
                  {(stats?.approvedAppointments || 0) + (stats?.approvedHelpRequests || 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Management Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          {/* Appointments Stats */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-saylani-green" />
              Appointments Overview
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending</span>
                <span className="font-semibold text-yellow-600">{stats?.pendingAppointments || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Approved</span>
                <span className="font-semibold text-green-600">{stats?.approvedAppointments || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rejected</span>
                <span className="font-semibold text-red-600">{stats?.rejectedAppointments || 0}</span>
              </div>
            </div>
            <button
              onClick={() => handleNavigation('/admin/appointments')}
              className="btn-primary w-full mt-4 hover-glow"
            >
              Manage Appointments
            </button>
          </div>

          {/* Help Requests Stats */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-saylani-blue" />
              Help Requests Overview
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pending</span>
                <span className="font-semibold text-yellow-600">{stats?.pendingHelpRequests || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Approved</span>
                <span className="font-semibold text-green-600">{stats?.approvedHelpRequests || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rejected</span>
                <span className="font-semibold text-red-600">{stats?.rejectedHelpRequests || 0}</span>
              </div>
            </div>
            <button
              onClick={() => handleNavigation('/admin/help-requests')}
              className="btn-secondary w-full mt-4 hover-glow"
            >
              Manage Help Requests
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
            <button
              onClick={() => handleNavigation('/admin/appointments')}
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-saylani-green hover:bg-saylani-green/5 transition-all duration-300 hover-lift"
            >
              <Calendar className="h-6 w-6 text-saylani-green" />
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Appointments</h4>
                <p className="text-sm text-gray-600">Review and manage</p>
              </div>
            </button>

            <button
              onClick={() => handleNavigation('/admin/help-requests')}
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-saylani-blue hover:bg-saylani-blue/5 transition-all duration-300 hover-lift"
            >
              <Shield className="h-6 w-6 text-saylani-blue" />
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Help Requests</h4>
                <p className="text-sm text-gray-600">Process assistance</p>
              </div>
            </button>

            <button
              onClick={() => handleNavigation('/admin/settings')}
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover-lift"
            >
              <FileText className="h-6 w-6 text-gray-600" />
              <div className="text-left">
                <h4 className="font-medium text-gray-900">Settings</h4>
                <p className="text-sm text-gray-600">System preferences</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
} 