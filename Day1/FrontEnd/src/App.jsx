
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './pages/Home.jsx';
import Spinner from './components/spinner.jsx';
const LazyLogin = lazy(() => import('./pages/Login.jsx'));
const LazyRegister=lazy(()=> import('./pages/Register.jsx'));
const LazyAbout = lazy(() => import('./pages/About.jsx'));
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
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  )
}
export default App
