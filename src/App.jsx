import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Main from "./pages/Main";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Unauthorized from "./pages/Unauthorized";
import Layout from "./pages/Layout";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./pages/NotFound";
import CareerOptions from "./pages/CareerOptions";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Councelling from "./pages/Councelling";
import MediaUpload from "./pages/Upload";
import ShowContent from "./pages/DisplayContent";




function App() {
  // const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="bg-background text-primary text-6xl w-screen h-screen flex justify-center items-center">
          <AiOutlineLoading3Quarters className="animate-spin" />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/auth/register" element={<SignUp />} />
          <Route path="/auth/login" element={<SignIn />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* <Route path='/options' element={<CareerOptions/>}/> */}
          
          <Route path="/*" element={<Layout isLoading={isLoading} />}>
            <Route index element={<Main />} /> 
            <Route element={<RequireAuth allowedRoles={['student', 'mentor','admin']} />}>
            <Route path='student/dashboard' element={<Dashboard/>}/>
              
            <Route path='explore' element={<CareerOptions/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='councelling' element={<Councelling/>}/>
                            
            <Route path="*" element={<NotFound />} />

            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path='options' element={<CareerOptions/>}/>
            <Route path='upload' element={<MediaUpload/>}/>
            <Route path='view' element={<ShowContent/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
      position="bottom-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark" 
    />
    </Suspense>
  )
}

export default App
