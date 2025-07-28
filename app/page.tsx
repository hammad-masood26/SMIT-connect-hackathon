'use client'

import Link from 'next/link'
import { Heart, Users, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-saylani-green via-blue-500 to-purple-600">
      {/* Header */}
      <header className="glass border-b border-white/20 animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3 animate-fade-in-left">
              <Heart className="h-8 w-8 text-white animate-float" />
              <h1 className="text-2xl font-bold text-white">Saylani Connect</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/user/login"
                className="nav-link text-white hover:text-saylani-green transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="gradient-text">Saylani Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A comprehensive appointment and request system designed to connect communities
            with Saylani Welfare International Trust's services.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/user/login">
              <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 hover-glow">
                <Users className="h-5 w-5" />
                <span>Login</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 stagger-children">
          <div className="card-hover text-center animate-scale-in">
            <div className="w-16 h-16 bg-saylani-green/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <Heart className="h-8 w-8 text-saylani-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Book Appointments</h3>
            <p className="text-gray-600">
              Schedule appointments with Saylani Welfare services easily and efficiently.
            </p>
          </div>

          <div className="card-hover text-center animate-scale-in">
            <div className="w-16 h-16 bg-saylani-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '1s' }}>
              <Users className="h-8 w-8 text-saylani-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Request Help</h3>
            <p className="text-gray-600">
              Submit help requests for food, health, education, and other assistance.
            </p>
          </div>

          <div className="card-hover text-center animate-scale-in">
            <div className="w-16 h-16 bg-saylani-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '2s' }}>
              <Shield className="h-8 w-8 text-saylani-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Monitor the status of your appointments and help requests in real-time.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold text-white mb-6">About Saylani Welfare</h2>
          <p className="text-white/90 max-w-4xl mx-auto text-lg leading-relaxed">
            Saylani Welfare International Trust is a non-governmental organization that has been
            serving humanity for over 20 years. We provide assistance in various areas including
            food, health, education, and social welfare to those in need across Pakistan and beyond.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-20 animate-slide-in-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white/80">
            <p>&copy; 2025 Saylani Welfare International Trust. All rights reserved.</p>
            <p className="mt-2">Empowering communities through technology and compassion.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 