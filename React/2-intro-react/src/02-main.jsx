import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const h1 = React.createElement('h1', null, 'Hello World!')
const h1 = <di><ul><li>Hola mundo</li></ul></di>;

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  h1
)
