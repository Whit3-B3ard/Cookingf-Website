
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes.jsx'
import UserContextProvider from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
    <Routes/>  
    </UserContextProvider>
,
)
