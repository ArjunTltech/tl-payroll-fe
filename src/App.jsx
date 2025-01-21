
import './App.css'
import { router } from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  const customTheme = { 
    backgroundColor: '#171717',
   }

  return (
    <>
    <ThemeProvider value={customTheme}>

    <RouterProvider router={router} />
    </ThemeProvider>
    <ToastContainer  position='bottom-right' autoClose='2000'/>
    </>
  )
}

export default App
