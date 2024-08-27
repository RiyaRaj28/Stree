import React from 'react'
import { createRoot } from 'react-dom/client'
import AppWrapper from './App.jsx'
import './index.css'


import { RecoilRoot } from 'recoil';
import { AuthProvider } from './store/auth.jsx';


createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
    <RecoilRoot>
      <AppWrapper />
    </RecoilRoot>
  </React.StrictMode>
  </AuthProvider>
)
