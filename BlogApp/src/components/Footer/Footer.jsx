import React from 'react'
import { Link } from "react-router-dom";
import {Container} from '../index'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">BlogSpace</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Discover amazing stories, insights, and ideas from writers around the world. Join our community of
                passionate readers and creators.
              </p>
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All Posts
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Write for Us
                </Link>
              </nav>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Categories</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Technology
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Lifestyle
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Travel
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Food & Recipes
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Business
                </Link>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for the latest posts and updates.</p>
              <form className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} BlogSpace. All rights reserved.</p>
                <div className="flex items-center space-x-1 text-gray-400 text-sm">
                  <span>Made with ❤️ </span>
                  <span>by our team</span>
                </div>
              </div>

              <div className="flex space-x-6">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer