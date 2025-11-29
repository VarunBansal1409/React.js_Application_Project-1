import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Master from './components/Master'
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ToastContainer />
        <Master />
    </BrowserRouter>
)
