import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routeConfig.jsx'

const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
