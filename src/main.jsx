import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
<<<<<<< HEAD
      <GlobalProvider>
        <App />
      </GlobalProvider>
=======
    <GlobalProvider>
      <App />
    </GlobalProvider>
>>>>>>> 70ae104d9cb0a7f94dd0aa13af3f4e80f6ee83ee
    </BrowserRouter>,
);
