import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Helloworld } from './HelloWorld'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Helloworld/>
  </StrictMode>,
)
