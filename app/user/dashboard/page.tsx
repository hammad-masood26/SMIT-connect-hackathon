// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { Calendar, Heart, FileText, User, Settings, LogOut } from 'lucide-react'
// import { User as UserType, Appointment, HelpRequest } from '@/lib/types'
// import toast from 'react-hot-toast'
// import { getUserAppointments, getUserHelpRequests } from '@/lib/database'

// export default function UserDashboard() {
//   const [user, setUser] = useState<UserType | null>(null)
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()
//   const [appointments, setAppointments] = useState<Appointment[]>([])
//   const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([])

//   useEffect(() => {
//     const userData = localStorage.getItem('user')
//     if (userData) {
//       const parsedUser = JSON.parse(userData)
//       setUser(parsedUser)

//       // 1. Load from localStorage for instant UI (per user)
//       const allAppointments = JSON.parse(localStorage.getItem('appointments') || '{}')
//       const localAppointments = allAppointments[parsedUser.id] || []
//       const allHelpRequests = JSON.parse(localStorage.getItem('helpRequests') || '{}')
//       const localHelpRequests = allHelpRequests[parsedUser.id] || []
//       setAppointments(localAppointments)
//       setHelpRequests(localHelpRequests)

//       // 2. Load from Firebase (async)
//       Promise.all([
//         getUserAppointments(parsedUser.id).then((data) => {
//           setAppointments(data)
//           const allAppointments = JSON.parse(localStorage.getItem('appointments') || '{}')
//           allAppointments[parsedUser.id] = data
//           localStorage.setItem('appointments', JSON.stringify(allAppointments))
//         }).catch(() => setAppointments([])),

//         getUserHelpRequests(parsedUser.id).then((data) => {
//           setHelpRequests(data)
//           const allHelpRequests = JSON.parse(localStorage.getItem('helpRequests') || '{}')
//           allHelpRequests[parsedUser.id] = data
//           localStorage.setItem('helpRequests', JSON.stringify(allHelpRequests))
//         }).catch(() => setHelpRequests([]))
//       ]).finally(() => {
//         // ✅ Only set loading to false once both calls are done
//         setLoading(false)
//       })
//     } else {
//       router.push('/user/login')
//     }
//   }, [router])


//   const handleLogout = () => {
//     localStorage.removeItem('user')
//     toast.success('Logged out successfully')
//     router.push('/')
//   }

//   const handleNavigation = (path: string) => {
//     router.push(path)
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-saylani-green"></div>
//       </div>
//     )
//   }

//   if (!user) {
//     return null
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b animate-fade-in-down">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-3 animate-fade-in-left">
//               <div className="w-10 h-10 bg-saylani-green/10 rounded-full flex items-center justify-center">
//                 <User className="h-6 w-6 text-saylani-green" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
//                 <p className="text-gray-600">Welcome back, {user.name}</p>
//               </div>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-all duration-300 animate-fade-in-right"
//             >
//               <LogOut className="h-5 w-5" />
//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Quick Actions */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 stagger-children">
//           {/* Appointment Card */}
//           <div
//             className="card-hover animate-scale-in"
//             onClick={() => handleNavigation('/user/appointment')}
//           >
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-saylani-green/10 rounded-lg flex items-center justify-center animate-float">
//                 <Calendar className="h-6 w-6 text-saylani-green" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">Book Appointment</h3>
//                 <p className="text-gray-600">Schedule a new appointment</p>
//               </div>
//             </div>
//           </div>

//           {/* Help Request Card */}
//           <div
//             className="card-hover animate-scale-in"
//             onClick={() => handleNavigation('/user/help-request')}
//           >
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-saylani-blue/10 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
//                 <Heart className="h-6 w-6 text-saylani-blue" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">Request Help</h3>
//                 <p className="text-gray-600">Submit a help request</p>
//               </div>
//             </div>
//           </div>

//           {/* My Requests Card */}
//           <div
//             className="card-hover animate-scale-in"
//             onClick={() => handleNavigation('/user/my-requests')}
//           >
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-saylani-orange/10 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
//                 <FileText className="h-6 w-6 text-saylani-orange" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">My Requests</h3>
//                 <p className="text-gray-600">View your appointments & requests</p>
//               </div>
//             </div>
//           </div>

//           {/* Profile Card */}
//           <div
//             className="card-hover animate-scale-in"
//             onClick={() => handleNavigation('/user/profile')}
//           >
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
//                 <User className="h-6 w-6 text-purple-600" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
//                 <p className="text-gray-600">Manage your account details</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
//           {/* Recent Activity (Appointments & Help Requests) */}
//           <div className="card">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//               <Calendar className="h-5 w-5 mr-2 text-saylani-green" />
//               Recent Activity
//             </h3>
//             <div className="space-y-4">
//               {[...appointments, ...helpRequests]
//                 .map((item) => ({
//                   ...item,
//                   createdAt: item.createdAt ? new Date(item.createdAt) : new Date(0), // Defensive date parsing
//                 }))
//                 .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
//                 .slice(0, 4)
//                 .map((item) => (
//                   <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                     <div className="flex items-center space-x-3">
//                       <div className={`w-8 h-8 rounded-full flex items-center justify-center ${'reason' in item ? 'bg-saylani-green/10' : 'bg-saylani-blue/10'}`}>
//                         {'reason' in item ? <Calendar className="h-4 w-4 text-saylani-green" /> : <Heart className="h-4 w-4 text-saylani-blue" />}
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">
//                           {'reason' in item ? item.reason : item.type + ' Assistance'}
//                         </p>
//                         <p className="text-sm text-gray-600">
//                           {('preferredDate' in item && item.preferredDate)
//                             ? `Scheduled for ${item.preferredDate}`
//                             : `Submitted on ${item.createdAt.toLocaleDateString()}`}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               {(appointments.length === 0 && helpRequests.length === 0) && (
//                 <div className="text-gray-500 text-center">No recent activity found.</div>
//               )}
//             </div>

//           </div>

//           {/* Quick Stats */}
//           <div className="card">
//             <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//               <FileText className="h-5 w-5 mr-2 text-saylani-blue" />
//               Quick Stats
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center p-4 bg-saylani-green/5 rounded-lg">
//                 <div className="text-2xl font-bold text-saylani-green">{appointments.length + helpRequests.length}</div>
//                 <div className="text-sm text-gray-600">Total Requests</div>
//               </div>
//               <div className="text-center p-4 bg-saylani-blue/5 rounded-lg">
//                 <div className="text-2xl font-bold text-saylani-blue">{[...appointments, ...helpRequests].filter(r => r.status === 'approved').length}</div>
//                 <div className="text-sm text-gray-600">Approved</div>
//               </div>
//               <div className="text-center p-4 bg-yellow-50 rounded-lg">
//                 <div className="text-2xl font-bold text-yellow-600">{[...appointments, ...helpRequests].filter(r => r.status === 'pending').length}</div>
//                 <div className="text-sm text-gray-600">Pending</div>
//               </div>
//               <div className="text-center p-4 bg-gray-50 rounded-lg">
//                 <div className="text-2xl font-bold text-gray-600">{[...appointments, ...helpRequests].filter(r => r.status === 'rejected').length}</div>
//                 <div className="text-sm text-gray-600">Rejected</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Mobile Navigation */}
//       <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 animate-slide-in-bottom">
//         <div className="flex justify-around items-center">
//           <button
//             onClick={() => handleNavigation('/user/dashboard')}
//             className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg bg-saylani-green/10 text-saylani-green transition-all duration-300 hover:scale-105"
//           >
//             <Calendar className="h-5 w-5" />
//             <span className="text-xs font-medium">Home</span>
//           </button>

//           <button
//             onClick={() => handleNavigation('/user/appointment')}
//             className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-all duration-300 hover:scale-105"
//           >
//             <Calendar className="h-5 w-5" />
//             <span className="text-xs font-medium">Appointment</span>
//           </button>

//           <button
//             onClick={() => handleNavigation('/user/help-request')}
//             className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-all duration-300 hover:scale-105"
//           >
//             <Heart className="h-5 w-5" />
//             <span className="text-xs font-medium">Help</span>
//           </button>

//           <button
//             onClick={() => handleNavigation('/user/my-requests')}
//             className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-all duration-300 hover:scale-105"
//           >
//             <FileText className="h-5 w-5" />
//             <span className="text-xs font-medium">Requests</span>
//           </button>

//           <button
//             onClick={() => handleNavigation('/user/profile')}
//             className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-all duration-300 hover:scale-105"
//           >
//             <User className="h-5 w-5" />
//             <span className="text-xs font-medium">Profile</span>
//           </button>
//         </div>
//       </nav>
//     </div>
//   )
// } 



"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Heart, FileText, LogOut } from "lucide-react"
import toast from "react-hot-toast"

// Define types locally since we don't have access to the types file
interface Appointment {
  id: string
  userId: string
  reason: string
  preferredDate: string
  status: "pending" | "approved" | "rejected"
  createdAt: string | Date
}

interface HelpRequest {
  id: string
  userId: string
  type: string
  description: string
  status: "pending" | "approved" | "rejected"
  createdAt: string | Date
}

interface LocalUser {
  id: string
  name: string
  email: string
  phone?: string
}

// Mock database functions - replace these with your actual database implementation
const getUserAppointments = async (userId: string): Promise<Appointment[]> => {
  try {
    // Replace this with your actual Firebase/database call
    // For now, return data from localStorage or empty array
    const allAppointments = JSON.parse(localStorage.getItem("userAppointments") || "{}")
    return allAppointments[userId] || []
  } catch (error) {
    console.error("Error fetching appointments:", error)
    return []
  }
}

const getUserHelpRequests = async (userId: string): Promise<HelpRequest[]> => {
  try {
    // Replace this with your actual Firebase/database call
    // For now, return data from localStorage or empty array
    const allHelpRequests = JSON.parse(localStorage.getItem("userHelpRequests") || "{}")
    return allHelpRequests[userId] || []
  } catch (error) {
    console.error("Error fetching help requests:", error)
    return []
  }
}

export default function UserDashboard() {
  const [user, setUser] = useState<LocalUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([])

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = localStorage.getItem("user")
        if (!userData) {
          router.push("/user/login")
          return
        }

        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)

        // Load from localStorage first for instant UI
        const allAppointments = JSON.parse(localStorage.getItem("userAppointments") || "{}")
        const localAppointments = allAppointments[parsedUser.id] || []
        const allHelpRequests = JSON.parse(localStorage.getItem("userHelpRequests") || "{}")
        const localHelpRequests = allHelpRequests[parsedUser.id] || []

        // Set initial data from localStorage
        setAppointments(localAppointments)
        setHelpRequests(localHelpRequests)

        // Fetch fresh data from database
        try {
          const [appointmentsData, helpRequestsData] = await Promise.all([
            getUserAppointments(parsedUser.id),
            getUserHelpRequests(parsedUser.id),
          ])

          // Update state with fresh data
          setAppointments(appointmentsData || [])
          setHelpRequests(helpRequestsData || [])

          // Update localStorage with fresh data
          const updatedAppointments = { ...allAppointments, [parsedUser.id]: appointmentsData || [] }
          const updatedHelpRequests = { ...allHelpRequests, [parsedUser.id]: helpRequestsData || [] }

          localStorage.setItem("userAppointments", JSON.stringify(updatedAppointments))
          localStorage.setItem("userHelpRequests", JSON.stringify(updatedHelpRequests))
        } catch (error) {
          console.error("Error fetching data:", error)
          toast.error("Failed to load latest data")
          // Keep using localStorage data if database fails
        }
      } catch (error) {
        console.error("Error loading user data:", error)
        router.push("/user/login")
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    toast.success("Logged out successfully")
    router.push("/")
  }

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  // Helper function to safely parse dates
  const parseDate = (dateString: any): Date => {
    if (!dateString) return new Date(0)
    if (dateString instanceof Date) return dateString
    if (typeof dateString === "string") return new Date(dateString)
    if (dateString.seconds) return new Date(dateString.seconds * 1000) // Firestore timestamp
    return new Date(0)
  }

  // Combine and sort recent activities
  const getRecentActivities = () => {
    const allActivities = [
      ...appointments.map((apt) => ({ ...apt, type: "appointment" })),
      ...helpRequests.map((req) => ({ ...req, type: "help-request" })),
    ]

    return allActivities
      .map((item) => ({
        ...item,
        parsedDate: parseDate(item.createdAt),
      }))
      .sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime())
      .slice(0, 4)
  }

  // Calculate stats
  const getTotalRequests = () => appointments.length + helpRequests.length
  const getApprovedCount = () => [...appointments, ...helpRequests].filter((r) => r.status === "approved").length
  const getPendingCount = () => [...appointments, ...helpRequests].filter((r) => r.status === "pending").length
  const getRejectedCount = () => [...appointments, ...helpRequests].filter((r) => r.status === "rejected").length

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const recentActivities = getRecentActivities()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <LogOut className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
                <p className="text-gray-600">Welcome back, {user.name}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Appointment Card */}
          <div
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleNavigation("/user/appointment")}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Book Appointment</h3>
                <p className="text-gray-600">Schedule a new appointment</p>
              </div>
            </div>
          </div>

          {/* Help Request Card */}
          <div
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleNavigation("/user/help-request")}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Request Help</h3>
                <p className="text-gray-600">Submit a help request</p>
              </div>
            </div>
          </div>

          {/* My Requests Card */}
          <div
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleNavigation("/user/my-requests")}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">My Requests</h3>
                <p className="text-gray-600">View your appointments & requests</p>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleNavigation("/user/profile")}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <LogOut className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
                <p className="text-gray-600">Manage your account details</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-green-600" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivities.length > 0 ? (
                recentActivities.map((item) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${item.type === "appointment" ? "bg-green-100" : "bg-blue-100"
                          }`}
                      >
                        {item.type === "appointment" ? (
                          <Calendar className="h-4 w-4 text-green-600" />
                        ) : (
                          <Heart className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {item.type === "appointment"
                            ? (item as any).reason || "Appointment"
                            : `${(item as any).type || "Help"} Assistance`}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.type === "appointment" && (item as any).preferredDate
                            ? `Scheduled for ${(item as any).preferredDate}`
                            : `Submitted on ${item.parsedDate.toLocaleDateString()}`}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : item.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : item.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                    >
                      {item.status || "pending"}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-center py-8">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>No recent activity found.</p>
                  <p className="text-sm mt-2">Your appointments and help requests will appear here.</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Quick Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{getTotalRequests()}</div>
                <div className="text-sm text-gray-600">Total Requests</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{getApprovedCount()}</div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{getPendingCount()}</div>
                <div className="text-sm text-gray-600">Pending</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">{getRejectedCount()}</div>
                <div className="text-sm text-gray-600">Rejected</div>
              </div>
            </div>

            {/* Debug info - remove in production */}
            {process.env.NODE_ENV === "development" && (
              <div className="mt-4 p-2 bg-gray-100 rounded text-xs">
                <p>
                  Debug: Appointments: {appointments.length}, Help Requests: {helpRequests.length}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:hidden">
        <div className="flex justify-around items-center">
          <button
            onClick={() => handleNavigation("/user/dashboard")}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg bg-green-100 text-green-600"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => handleNavigation("/user/appointment")}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-medium">Appointment</span>
          </button>
          <button
            onClick={() => handleNavigation("/user/help-request")}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50"
          >
            <Heart className="h-5 w-5" />
            <span className="text-xs font-medium">Help</span>
          </button>
          <button
            onClick={() => handleNavigation("/user/my-requests")}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50"
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs font-medium">Requests</span>
          </button>
          <button
            onClick={() => handleNavigation("/user/profile")}
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50"
          >
            <LogOut className="h-5 w-5" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
