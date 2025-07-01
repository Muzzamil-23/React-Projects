import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      } catch (error) {
        // console.log("Guest account");
        console.error("Error fetching user:", error);
        dispatch(logout());
      } finally {
        setLoading(false)
      }
    }

    fetchUser();
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
