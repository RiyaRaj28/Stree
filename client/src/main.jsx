import React from 'react'
import { createRoot } from 'react-dom/client'
import AppWrapper from './App.jsx'
import './index.css'


import { RecoilRoot } from 'recoil';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <AppWrapper />
    </RecoilRoot>
  </React.StrictMode>
)
