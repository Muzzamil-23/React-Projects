import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router'
import Home from "./pages/Home.jsx"
import { AddPost, AllPosts, AuthLayout, EditPost, Login, Post } from './components/index.js'
import { RouterProvider } from 'react-router-dom'
import SignUp from "./pages/Signup.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: (
          <AuthLayout authentication>
            <Home/>
          </AuthLayout>
        )
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <SignUp/>
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts/>
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
