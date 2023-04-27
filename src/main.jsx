import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import cartProduction from './Loader/cartProduction';
import Checkout from './components/Checkout/Checkout';
import AuthProvider from './Provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "order",
        element: <Order></Order>,
      loader : cartProduction
      },
      {
        path: "inventory",
        element:<Inventory></Inventory>
      },
      {
        path: "checkout",
        element:<Checkout></Checkout>
      },
      {
        path: "login",
        element:<LogIn></LogIn>
      },
      {
        path: "signup",
        element:<SignUp></SignUp>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)