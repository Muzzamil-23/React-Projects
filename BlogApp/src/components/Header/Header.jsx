import React, { useState } from 'react'
import { Container, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
      <Container>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button onClick={() => navigate("/")} className="flex cursor-pointer items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-white">BlogSpace</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {
                navItems.map((item) => item.active ? (
                  <button key={item.name} to={item.slug} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer"
                  onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                ) : null)
              }
              {authStatus && (
                <div>
                  <LogoutBtn/>
                </div>
              )}
            </nav>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800 py-4">
              <nav className="flex flex-col space-y-4">
                {
                  navItems.map((item) => item.active ? (
                   <button key={item.name} to={item.slug} className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer"
                  onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                  ) : null)
                }
              </nav>
            </div>
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header