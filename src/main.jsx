import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Paginas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Usuarios from './routes/Usuarios.jsx'
import DadosUSuarios from './routes/DadosUsuario.jsx'
import ErrorPage from './routes/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Usuarios/>
      },
      {
        path: "/usuario/:id",
        element: <DadosUSuarios/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)