# Saylani Connect - Appointment & Request System

A comprehensive web application for managing appointments and help requests for Saylani Welfare International Trust. Built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## 🚀 Features

### User Side
- **Authentication**: Sign up and login with email/password
- **Appointment Booking**: Schedule appointments with detailed forms
- **Help Requests**: Submit requests for food, health, education, and other assistance
- **Request Management**: View and track status of all submissions
- **Profile Management**: Edit personal information
- **Settings**: Access legal pages and logout functionality
- **Responsive Design**: Mobile-first design with bottom navigation

### Admin Panel
- **Dashboard**: Overview of all statistics and metrics
- **Appointment Management**: Review, approve, or reject appointments
- **Help Request Management**: Process and manage assistance requests
- **Real-time Statistics**: Live updates of pending, approved, and rejected items
- **User-friendly Interface**: Clean and intuitive admin controls

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **UI Components**: Lucide React Icons
- **Notifications**: React Hot Toast
- **Forms**: React Hook Form
- **Date Handling**: Date-fns

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saylani-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Get your Firebase configuration

4. **Configure Firebase**
   - Update `lib/firebase.ts` with your Firebase configuration:
   ```typescript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Demo Credentials

### User Account
- **Email**: user@example.com
- **Password**: password123

### Admin Account
- **Username**: admin
- **Password**: admin123

## 📱 Usage

### For Users
1. Visit the homepage and click "Access User Portal"
2. Sign up for a new account or login with existing credentials
3. Use the bottom navigation to access different features:
   - **Home**: Dashboard with quick actions
   - **Appointment**: Book new appointments
   - **Help**: Submit help requests
   - **Requests**: View all your submissions
   - **Profile**: Manage your account

### For Admins
1. Visit the homepage and click "Admin Panel"
2. Login with admin credentials
3. Access the dashboard to view statistics
4. Navigate to manage appointments or help requests
5. Approve or reject submissions as needed

## 🏗️ Project Structure

```
saylani-connect/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   │   ├── dashboard/     # Admin dashboard
│   │   ├── appointments/  # Appointment management
│   │   ├── help-requests/ # Help request management
│   │   └── login/         # Admin login
│   ├── user/              # User panel pages
│   │   ├── dashboard/     # User dashboard
│   │   ├── appointment/   # Book appointments
│   │   ├── help-request/  # Submit help requests
│   │   ├── my-requests/   # View submissions
│   │   ├── profile/       # Profile management
│   │   ├── settings/      # Settings and legal pages
│   │   ├── login/         # User login
│   │   └── signup/        # User registration
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication functions
│   ├── database.ts       # Database operations
│   ├── firebase.ts       # Firebase configuration
│   └── types.ts          # TypeScript type definitions
├── components/           # Reusable components
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🎨 Design Features

- **Modern UI**: Clean and professional design
- **Responsive**: Works perfectly on all devices
- **Accessibility**: WCAG compliant components
- **Dark Mode Ready**: Prepared for future dark mode implementation
- **Custom Colors**: Saylani brand colors integrated
- **Smooth Animations**: Subtle transitions and hover effects

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  saylani: {
    green: '#00b894',
    blue: '#0984e3',
    orange: '#f39c12',
  }
}
```

### Firebase Configuration
Modify `lib/firebase.ts` to connect to your Firebase project.

### Styling
All styles are in `app/globals.css` using Tailwind CSS utilities.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables for Firebase
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` directory to Netlify
3. Configure environment variables

### Manual Deployment
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Deploy to your preferred hosting service

## 📄 License

This project is created for educational purposes and the Saylani Welfare International Trust hackathon.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact the development team or refer to the project documentation.

---

**Built with ❤️ for Saylani Welfare International Trust**