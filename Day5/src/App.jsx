
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './pages/Home.jsx';
import Spinner from './components/spinner.jsx';
import './App.css';
const LazyLogin = lazy(() => import('./pages/Login.jsx'));
const LazyRegister=lazy(()=> import('./pages/Register.jsx'));
const LazyAbout = lazy(() => import('./pages/About.jsx'));
const LazyDashboard = lazy(() => import('./pages/Dashboard.jsx'));
const LazyEditprofile = lazy(() => import('./pages/Editprofile.jsx'));
const LazyAdminDashboard = lazy(() => import('./Admin/AdminDashboard.jsx'));
const LazyInstitute = lazy(() => import('./pages/Institute.jsx'));
const LazyCourses = lazy(() => import('./pages/Courses.jsx'));
const LazyPayment = lazy(() => import('./pages/Payment.jsx'));
function App() {
  const router= createBrowserRouter([
    {
      path: '/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:'/login',
      element:<Suspense fallback={<Spinner/>}><LazyLogin/></Suspense>
    },
    {
      path:'/about',
      element:<Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
    },
    {
      path:'/register',
      element:<Suspense fallback={<Spinner/>}><LazyRegister/></Suspense>
    },
    {
      path:'/dashboard',
      element:<Suspense fallback={<Spinner/>}><LazyDashboard/></Suspense>
    },
    {
      path:'/editProfile',
      element:<Suspense fallback={<Spinner/>}><LazyEditprofile/></Suspense>
    },
    {
      path:"/adminDashboard",
      element:<Suspense fallback={<Spinner/>}><LazyAdminDashboard/></Suspense>
    },
    {
      path:"/institute",
      element:<Suspense fallback={<Spinner/>}><LazyInstitute/></Suspense>
    },
    {
      path:"/courses",
      element:<Suspense fallback={<Spinner/>}><LazyCourses/></Suspense>
    },
    {
      path:"/payment",
      element:<Suspense fallback={<Spinner/>}><LazyPayment/></Suspense>
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}
export default App
