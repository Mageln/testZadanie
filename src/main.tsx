import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/home/App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import { CssBaseline } from '@mui/material'
import Auth from './pages/auth/Auth.tsx'


const router = createBrowserRouter([
  {
    path: "/home",
    element: <App/>
  },
  {
    path:"/",
    element: <Auth/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline  />
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </StrictMode>
)
