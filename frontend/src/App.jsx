import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { isMobile } from 'react-device-detect';
import {lazy} from "react";
import SignUp from "./pages/SignUp/SignUp.jsx"
import Login from './pages/Login/Login.jsx'
import{Toaster} from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext.jsx'
import { Navigate } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'


// const Home= lazy(()=>{return import("./pages/Home/Home.jsx")});
// const Login= lazy(()=>{ return import("./pages/Login/Login.jsx")});
// const SignUp = lazy(()=>{ return import("./pages/SignUp/SignUp.jsx")});

const SideBar = lazy(()=>{ return import("./components/SideBar/SideBar.jsx")});
function App() {
  const [count, setCount] = useState(0)
  const {authUser} = useAuthContext()

  console.log(authUser);
  // console.log(isMobile);

  return (
    // <BrowserRouter>
    //   <Routes>

    //   <Route path='/login' > <Login/> </Route> 
    //   </Routes>

    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        {/* <h1>aas</h1>
        <button className="btn btn-active btn-primary">Primary</button> */}
       {/* <Login></Login> */}

       {/* <SignUp></SignUp> */}



       <Routes>
       <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
       <Route path='/login' element={ authUser? <Navigate to='/' />: <Login/>    } />
       <Route path='/signup' element={ authUser? <Navigate to='/' />: <SignUp/> } />


       </Routes>
       {/* <Home></Home> */}
       <Toaster/>

      
      </div>
     
   </>

    // </BrowserRouter>
  )
}

export default App
