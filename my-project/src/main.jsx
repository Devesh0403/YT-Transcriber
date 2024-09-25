import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'

import ReactDOM from 'react-dom';

import { BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <App />
    </BrowserRouter>
  </StrictMode>,
)
