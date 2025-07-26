import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorldApp 
    user={{ name: 'Pepe', lastname: 'Doe' }} 
    id={1}
    title={'Hello Worls!!'}/>    
  </StrictMode>,
)
