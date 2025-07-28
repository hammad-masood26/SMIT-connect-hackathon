'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, LogOut, FileText, Shield, Info, X } from 'lucide-react'
import { User as UserType } from '@/lib/types'
import toast from 'react-hot-toast'

export default function UserSettings() {
  const [user, setUser] = useState<UserType | null>(null)
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push('/user/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    toast.success('Logged out successfully')
    router.push('/')
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
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Settings</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Legal Pages */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal Information</h2>
            <div className="space-y-4">
              <button
                onClick={() => setShowTerms(true)}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-saylani-green hover:bg-saylani-green/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-saylani-green" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900">Terms & Conditions</h3>
                    <p className="text-sm text-gray-600">Read our terms of service</p>
                  </div>
                </div>
                <ArrowLeft className="h-5 w-5 text-gray-400 rotate-180" />
              </button>

              <button
                onClick={() => setShowPrivacy(true)}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-saylani-green hover:bg-saylani-green/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-saylani-blue" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900">Privacy Policy</h3>
                    <p className="text-sm text-gray-600">How we protect your data</p>
                  </div>
                </div>
                <ArrowLeft className="h-5 w-5 text-gray-400 rotate-180" />
              </button>
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
                    <p className="text-sm text-red-600">Sign out of your account</p>
                  </div>
                </div>
                <ArrowLeft className="h-5 w-5 text-red-400 rotate-180" />
              </button>
            </div>
          </div>

          {/* App Information */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                <Info className="h-5 w-5 text-gray-600" />
                <div className="text-left">
                  <h3 className="font-medium text-gray-900">Saylani Connect</h3>
                  <p className="text-sm text-gray-600">Version 1.0.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Terms & Conditions</h2>
                <button
                  onClick={() => setShowTerms(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="prose prose-sm max-w-none">
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing and using Saylani Connect, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h3>2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials on Saylani Connect for personal, non-commercial transitory viewing only.</p>

                <h3>3. Disclaimer</h3>
                <p>The materials on Saylani Connect are provided on an 'as is' basis. Saylani Welfare International Trust makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                <h3>4. Limitations</h3>
                <p>In no event shall Saylani Welfare International Trust or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Saylani Connect.</p>

                <h3>5. Accuracy of Materials</h3>
                <p>The materials appearing on Saylani Connect could include technical, typographical, or photographic errors. Saylani Welfare International Trust does not warrant that any of the materials on its website are accurate, complete or current.</p>

                <h3>6. Links</h3>
                <p>Saylani Welfare International Trust has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Saylani Welfare International Trust of the site.</p>

                <h3>7. Modifications</h3>
                <p>Saylani Welfare International Trust may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Privacy Policy</h2>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="prose prose-sm max-w-none">
                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you create an account, submit a request, or contact us for support.</p>

                <h3>2. How We Use Your Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, process your requests, and communicate with you.</p>

                <h3>3. Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

                <h3>4. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

                <h3>5. Data Retention</h3>
                <p>We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.</p>

                <h3>6. Your Rights</h3>
                <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>

                <h3>7. Changes to This Policy</h3>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

                <h3>8. Contact Us</h3>
                <p>If you have any questions about this privacy policy, please contact us at privacy@saylani.org</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
            className="flex flex-col items-center space-y-1 py-2 px-3 rounded-lg text-gray-600 hover:text-saylani-green hover:bg-saylani-green/10 transition-colors duration-200"
          >
            <div className="w-5 h-5 bg-gray-400 rounded"></div>
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