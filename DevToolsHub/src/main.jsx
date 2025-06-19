import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout/Layout'
import Home from './components/Pages/Home'
import ToolsDetails from './components/Pages/ToolsDetails'
import Tools from './components/Pages/Tools'
import useToolsInfo from './hook/useToolsInfo'
import App from './App'
import ToolsProvider from './context/ToolsProvider'
import { ThemeProvider } from './context/Theme'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='tools' element={
        <ToolsProvider>
          <Tools />
        </ToolsProvider>
      } />
      <Route path='tools/detail/:toolId' element={
        <ToolsProvider>
          <ToolsDetails />
        </ToolsProvider>
      } />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />  
    </ThemeProvider>
  </StrictMode>,
)
