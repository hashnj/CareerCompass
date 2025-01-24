import  { useEffect, useState } from 'react'
import { FaCircleNotch, FaFlag } from 'react-icons/fa'
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { auth, authCheck } from '../store/auth';

const Dashboard = () => {
    const user = useRecoilValueLoadable(authCheck);
    const [data,setData]= useState(null); 
    const authh = useRecoilValue(auth);

  useEffect(()=>{
    if(user.state=='hasValue'){
      console.log(user.contents);
      setData(user.contents);
    }
  },[user,authh]);

  return (
  
<div className="container text-text p-2 bg-backgrounds ">
   <div className=" ">
    <h1 className='text-xl mb-2.5'>
     Hi There! {data && data.firstname}
    </h1>
    <p className='text-text/70 mb-5'>
     Let&apos;s Start Your Career Journey!
    </p>
    <div className="progress-cards px-1 flex justify-between mb-5">
     <div className="progress-card rounded-md p-5 w-1/3 shadow-xl bg-background">
      <h3 className='text-lg mb-2.5'>
       MY PROGRESS
      </h3>
      <div className="status flex items-center">
       <FaFlag className='text-xl mr-2.5'/>
       <p className='text-text/70'>
        0/8 Milestone Completed
       </p>
      </div>
      <div className="status flex items-center">
       <FaCircleNotch className='text-xl mr-2.5' />
       <p className='text-text/70'>
        Not started Profile Level
       </p>
      </div>
      <button className="btn text-primary" href="#">
       Evaluate Now
      </button>
     </div>
     <div className="progress-card mx-4 rounded-md p-5 w-1/3 shadow-xl bg-background">
      <h3 className='text-lg mb-2.5'>
       ONGOING
      </h3>
      <p className='text-text/70'>
       Continue Upcoming Milestones
      </p>
      <button className="btn text-primary" href="#">
       Show Milestones
      </button>
     </div>
     <div className="progress-card rounded-md p-5 w-1/3 shadow-xl bg-background">
      <h3 className='text-lg mb-2.5'>
       COMING UP NEXT
      </h3>
      <p className='text-text/70'>
       Complete Stream Assessment
      </p>
      <button className="btn text-primary" href="#">
       Start Now
      </button>
     </div>
    </div>
    <div className="banner bg-background rounded-xl p-5 mb-5 flex items-center justify-between shadow-xl">
     <div>
      <h2 className='mb-2.5 text-xl'>
       Take multiple careers for a spin!
      </h2>
      <p className='mb-5 text-text/70'>
       Experience multiple careers to identify the one that you like the best and get certified in the process!
      </p>
      <button className="btn p-2 rounded-md text-white bg-primary" href="#">
       Learn More
      </button>
     </div>
     <img alt="Person using VR headset"  src="https://storage.googleapis.com/a1aa/image/zSawxqf2O70mOCf9u3A27LQDoYzDlwnUiJya7qNXdXt6GJBUA.jpg" width="100"/>
    </div>
    <h2 className='text-xl mb-2.5'>
     FIND SOLUTIONS FOR
    </h2>
    <div className="solutions flex px-1 justify-between">
     <div className="solution-card bg-background rounded-md p-5 w-1/2 shadow-lg">
      <h3 className='text-xl mb-2.5'>
       Shortlisting
      </h3>
      <p className='text-text/70 mb-2.5 '>
       Understand your inclination and shortlist your Best-Fit Stream and Career path through our Psychometric Assessment and Internship Program
      </p>
     </div>
     <div className="solution-card bg-background rounded-md p-5 w-1/2 mx-2 shadow-lg">
      <h3 className='text-xl mb-2.5'>
       Planning Tools
      </h3>
      <p className='text-text/70 mb-2.5 '>
       Experience multiple careers by enhancing your Psychometric Assessment and Internship Program
      </p>
     </div>
     <div className="solution-card bg-background rounded-md p-5 w-1/2 shadow-lg">
        <h3 className='text-xl mb-2.5'>
         Personalized Guidance
        </h3>
        <p className='text-text/70 mb-2.5 '>
            Gain better career clarity by getting in touch with our Expert Counsellors by scheduling one-on-one sessions
        </p>
       </div>
    </div>
   </div>
  </div>
)
}
export default Dashboard