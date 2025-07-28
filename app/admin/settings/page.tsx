'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, LogOut, Settings, Info, Shield } from 'lucide-react'
import { User as UserType } from '@/lib/types'
import toast from 'react-hot-toast'

export default function AdminSettings() {
  const [admin, setAdmin] = useState<UserType | null>(null)
  const router = useRouter()

  useEffect(() => {
    const adminData = localStorage.getItem('admin')
    if (adminData) {
      setAdmin(JSON.parse(adminData))
    } else {
      router.push('/admin/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin')
    toast.success('Logged out successfully')
    router.push('/')
  }

  if (!admin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Admin Settings</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Admin Information */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Admin Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                <Shield className="h-5 w-5 text-saylani-green" />
                <div>
                  <h3 className="font-medium text-gray-900">{admin.name}</h3>
                  <p className="text-sm text-gray-600">{admin.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Information */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">System Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                <Info className="h-5 w-5 text-gray-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Saylani Connect Admin Panel</h3>
                  <p className="text-sm text-gray-600">Version 1.0.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Account</h2>
            <div className="space-y-4">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <LogOut className="h-5 w-5 text-red-600" />
                  <div className="text-left">
                    <h3 className="font-medium text-red-900">Logout</h3>
                    <p className="text-sm text-red-600">Sign out of admin panel</p>
                  </div>
                </div>
                <ArrowLeft className="h-5 w-5 text-red-400 rotate-180" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => router.push('/admin/appointments')}
                className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-saylani-green hover:bg-saylani-green/5 transition-colors duration-200"
              >
                <Settings className="h-6 w-6 text-saylani-green" />
                <div className="text-left">
                  <h4 className="font-medium text-gray-900">Manage Appointments</h4>
                  <p className="text-sm text-gray-600">Review and process</p>
                </div>
              </button>

              <button
                onClick={() => router.push('/admin/help-requests')}
                className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-saylani-blue hover:bg-saylani-blue/5 transition-colors duration-200"
              >
                <Settings className="h-6 w-6 text-saylani-blue" />
                <div className="text-left">
                  <h4 className="font-medium text-gray-900">Manage Help Requests</h4>
                  <p className="text-sm text-gray-600">Process assistance</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}