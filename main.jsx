import React from 'react'
import ReactDOM from 'react-dom/client'
import Checkout from './Checkout'
import Cart from './Cart'
import SignUp from './Signup'
import LogIn from './Login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cart />
    <Checkout></Checkout>
    <SignUp></SignUp>
    <LogIn></LogIn>
  </React.StrictMode>,
)
