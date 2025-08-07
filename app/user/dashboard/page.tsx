'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Calendar, Heart, FileText, User, LogOut } from 'lucide-react'
import { User as UserType, Appointment, HelpRequest } from '@/lib/types'
import toast from 'react-hot-toast'
import { getUserAppointments, getUserHelpRequests } from '@/lib/database'

export default function UserDashboard() {
  const [user, setUser] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([])
  const router = useRouter()

  

useEffect(() => {
  const userData = localStorage.getItem('user')
  if (!userData) {
    router.push('/user/login')
    return
  }

  const parsedUser = JSON.parse(userData)
  setUser(parsedUser)

  // Load initial data from localStorage
  const loadFromLocalStorage = () => {
    const allHelpRequests = JSON.parse(localStorage.getItem('helpRequests') || '{}')
    const userHelpRequests = allHelpRequests[parsedUser.id] || []
    setHelpRequests(userHelpRequests)

    const allAppointments = JSON.parse(localStorage.getItem('appointments') || '{}')
    const userAppointments = allAppointments[parsedUser.id] || []
    setAppointments(userAppointments)
  }

  // Initial load from localStorage
  loadFromLocalStorage()

  // Then fetch from Firebase
  Promise.all([
    getUserAppointments(parsedUser.id)
      .then(data => {
        setAppointments(data)
        // Update localStorage
        const allAppointments = JSON.parse(localStorage.getItem('appointments') || '{}')
        allAppointments[parsedUser.id] = data
        localStorage.setItem('appointments', JSON.stringify(allAppointments))
      })
      .catch(err => {
        console.error('Failed to load appointments:', err)
        toast.error('Failed to load appointments')
      }),

    getUserHelpRequests(parsedUser.id)
      .then(data => {
        setHelpRequests(data)
        // Update localStorage
        const allHelpRequests = JSON.parse(localStorage.getItem('helpRequests') || '{}')
        allHelpRequests[parsedUser.id] = data
        localStorage.setItem('helpRequests', JSON.stringify(allHelpRequests))
      })
      .catch(err => {
        console.error('Failed to load help requests:', err)
        toast.error('Failed to load help requests')
      })
  ]).finally(() => {
    setLoading(false)
  })

  // Add event listeners for updates
  const handleStorageChange = () => {
    loadFromLocalStorage()
  }

  window.addEventListener('storage', handleStorageChange)
  window.addEventListener('focus', handleStorageChange)

  return () => {
    window.removeEventListener('storage', handleStorageChange)
    window.removeEventListener('focus', handleStorageChange)
  }
}, [router])
  

  const handleLogout = () => {
    localStorage.removeItem('user')
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

  if (!user) return null

  const recentItems = [...appointments, ...helpRequests]
    .map(item => ({
      ...item,
      createdAt: item.createdAt ? new Date(item.createdAt) : new Date(0)
    }))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 4)

  const total = appointments.length + helpRequests.length
  const approved = [...appointments, ...helpRequests].filter(r => r.status === 'approved').length
  const pending = [...appointments, ...helpRequests].filter(r => r.status === 'pending').length
  const rejected = [...appointments, ...helpRequests].filter(r => r.status === 'rejected').length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-saylani-green/10 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-saylani-green" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.name}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-all duration-300">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: 'Book Appointment',
              desc: 'Schedule a new appointment',
              icon: <Calendar className="h-6 w-6 text-saylani-green" />,
              bg: 'bg-saylani-green/10',
              href: '/user/appointment'
            },
            {
              label: 'Request Help',
              desc: 'Submit a help request',
              icon: <Heart className="h-6 w-6 text-saylani-blue" />,
              bg: 'bg-saylani-blue/10',
              href: '/user/help-request'
            },
            {
              label: 'My Requests',
              desc: 'View your appointments & requests',
              icon: <FileText className="h-6 w-6 text-saylani-orange" />,
              bg: 'bg-saylani-orange/10',
              href: '/user/my-requests'
            },
            {
              label: 'Profile',
              desc: 'Manage your account details',
              icon: <User className="h-6 w-6 text-purple-600" />,
              bg: 'bg-purple-100',
              href: '/user/profile'
            }
          ].map(({ label, desc, icon, bg, href }, i) => (
            <div
              key={i}
              onClick={() => handleNavigation(href)}
              className="cursor-pointer p-4 rounded-xl shadow bg-white hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bg}`}>
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{label}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-saylani-green" />
              Recent Activity
            </h3>
            {recentItems.length > 0 ? (
              <div className="space-y-4">
                {recentItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${'reason' in item ? 'bg-saylani-green/10' : 'bg-saylani-blue/10'}`}>
                        {'reason' in item ? <Calendar className="h-4 w-4 text-saylani-green" /> : <Heart className="h-4 w-4 text-saylani-blue" />}
                      </div>
                      <div>
                        <p className="font-medium">{'reason' in item ? item.reason : item.type + ' Assistance'}</p>
                        <p className="text-sm text-gray-600">
                          {'preferredDate' in item && item.preferredDate
                            ? `Scheduled for ${item.preferredDate}`
                            : `Submitted on ${item.createdAt.toLocaleDateString()}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No recent activity found.</p>
            )}
          </div>

          {/* Quick Stats */}
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-saylani-blue" />
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Requests', count: total, color: 'text-saylani-green', bg: 'bg-saylani-green/5' },
                { label: 'Approved', count: approved, color: 'text-saylani-blue', bg: 'bg-saylani-blue/5' },
                { label: 'Pending', count: pending, color: 'text-yellow-600', bg: 'bg-yellow-50' },
                { label: 'Rejected', count: rejected, color: 'text-gray-600', bg: 'bg-gray-50' }
              ].map((stat, i) => (
                <div key={i} className={`text-center p-4 rounded-lg ${stat.bg}`}>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.count}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          {[
            { icon: <Calendar className="h-5 w-5" />, label: 'Home', path: '/user/dashboard' },
            { icon: <Calendar className="h-5 w-5" />, label: 'Appointment', path: '/user/appointment' },
            { icon: <Heart className="h-5 w-5" />, label: 'Help', path: '/user/help-request' },
            { icon: <FileText className="h-5 w-5" />, label: 'Requests', path: '/user/my-requests' },
            { icon: <User className="h-5 w-5" />, label: 'Profile', path: '/user/profile' }
          ].map((btn, i) => (
            <button
              key={i}
              onClick={() => handleNavigation(btn.path)}
              className="flex flex-col items-center space-y-1 py-2 px-3 text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 rounded-lg transition"
            >
              {btn.icon}
              <span className="text-xs font-medium">{btn.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}


