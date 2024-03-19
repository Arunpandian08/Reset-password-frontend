import { Routes,Route } from 'react-router-dom'
import Intro from './Components/Intro'
import Register from './Components/Register'
import Login from './Components/Login'
import ForGet from './Components/ForGet'
import ResetPassword from './Components/ResetPassword'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {

  return (
    <>
      <ToastContainer />
    <Routes>
      
      <Route path='/' element={<Intro />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/forgetpassword' element={<ForGet />} />
      <Route path='/resetpassword/:token' element={<ResetPassword />} />

    </Routes>
    </>
  )
}

export default App
