import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Spinner from './components/spinner.jsx';
import './App.css';
import { useEffect } from 'react';
const LazyLogin = lazy(() => import('./pages/Login.jsx'));
const LazyRegister = lazy(() => import('./pages/Register.jsx'));
const LazyAbout = lazy(() => import('./pages/About.jsx'));
const LazyDashboard = lazy(() => import('./pages/Dashboard.jsx'));
const LazyEditprofile = lazy(() => import('./pages/Editprofile.jsx'));
const LazyAdminDashboard = lazy(() => import('./Admin/AdminDashboard.jsx'));
const LazyInstitute = lazy(() => import('./pages/Institute.jsx'));
const LazyCourses = lazy(() => import('./pages/Courses.jsx'));
const LazyPayment = lazy(() => import('./pages/Payment.jsx'));
const LazyHome = lazy(() => import('./pages/Home.jsx'));

function App() {
  // Define state to track user authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user login

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>

        {isAuthenticated ? (
          <>
          <Route path="/home" element={<Suspense fallback={<Spinner />}><LazyHome /></Suspense>} />
              <Route path="/login" element={<Suspense fallback={<Spinner />}><LazyLogin /></Suspense>} />
            <Route path="/register" element={<Suspense fallback={<Spinner />}><LazyRegister /></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<Spinner />}><LazyAbout /></Suspense>} />
            <Route path="/dashboard" element={<Suspense fallback={<Spinner />}><LazyDashboard /></Suspense>} />
            <Route path="/editProfile" element={<Suspense fallback={<Spinner />}><LazyEditprofile /></Suspense>} />
            <Route path="/adminDashboard" element={<Suspense fallback={<Spinner />}><LazyAdminDashboard /></Suspense>} />
            <Route path="/institute" element={<Suspense fallback={<Spinner />}><LazyInstitute /></Suspense>} />
            <Route path="/courses" element={<Suspense fallback={<Spinner />}><LazyCourses /></Suspense>} />
            <Route path="/payment" element={<Suspense fallback={<Spinner />}><LazyPayment /></Suspense>} />
            {/* <button onClick={handleLogout}>Logout</button> */}
          </>
        ) : (
          // Redirect to login page if not authenticated
          <>
          <Route path="/login" element={<Suspense fallback={<Spinner />}><LazyLogin /></Suspense>} />
          <Route path="/register" element={<Suspense fallback={<Spinner />}><LazyRegister /></Suspense>} />
  
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App