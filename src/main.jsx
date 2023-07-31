import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './view/Login/Login.jsx'
import Producto from './view/Productos/Producto.jsx'
import App from './App.jsx'

// const rutas = createBrowserRouter([
//   {
//     path:"/",
//     element: <Login />
//   },
//   {
//     path:"Login",
//     element: <Login />
//   },
//   {
//     path:"Producto",
//     element: <Producto />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={rutas} /> */}
    <App />
  </React.StrictMode>,
)
