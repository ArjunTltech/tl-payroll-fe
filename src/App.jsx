
import './App.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer  position='bottom-right' autoClose='2000'/>
    </>
  )
}

export default App
