import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui/button';
import { Form } from '../../components/ui/form';
import CustomInput from '../../components/CustomInputs';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../lib/axiosInstance";
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { auth } from '../../store/auth';

// eslint-disable-next-line react/prop-types
const AuthForm = ({ type }) => {
  const [user, setUser] = useRecoilState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  const [mentor,setMentor]= useState(false);
  // const formSchema = authFormSchema(type);

  useEffect(()=>{
      const savedTheme = localStorage.getItem("theme") || "light"
      const isDark = savedTheme === "dark"  
  
      document.body.classList.toggle("dark", isDark)
      document.body.classList.toggle("light", !isDark)
  },[])

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    console.log(mentor);
  }, [mentor]);

 
  const handleSignUp = async (data) => {
    try {
      const response = await axiosInstance.post('/auth/signup', data);
      console.log(response);
      setUser(response.data);
      if(user){
        console.log('User:', user);
        toast.success('Successfully registered!');
        nav('/');
      }
    } catch (error) {
      console.error('Signup error:', error.response.data.message);
      toast.error(error.response.data.message);
      throw error;
    }
  };

  const handleSignIn = async (data) => {
    try {
      console.log(data);
      const response = await axiosInstance.post('/auth/signin', data);
      console.log(response.data);
      setUser(response.data);
      toast.success(response.data.message);
      if(response && user.role!=='mentor'){
        nav('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to sign in.');
      throw error;
    }
  };

  const onSubmit = async (data) => {
    

    setIsLoading(true);

    try {
      if (type === 'sign-up') {
        if(mentor){
          data['role']='mentor';
        }else{
          data['role']='student';
        }
        // console.log(data);
        const returnData = await handleSignUp(data );
        console.log(returnData);
        // toast.success(returnData.message);  

      } else if (type === 'sign-in') {
        await handleSignIn(data );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-background text-text w-full flex justify-center'>
    <section className="flex  min-h-screen w-full max-w-[420px] flex-col justify-center gap-3 py-4 md:gap-5">
      <header className="flex flex-col gap-2 md:gap-2">
        <div className="flex cursor-pointer text-primary items-center gap-1" onClick={() => nav('/')}>
          <h1 className="text-3xl  font-ibm-plex-serif font-bold  ">Career Compass</h1>
        </div>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-xl  font-semibold text-primary">
            {user ? 'Link Account' : type === 'sign-in' ? 'Sign-in' : 'Sign-up'}
          </h1>
          {type === 'sign-up' && (
          <div className='flex justify-around'>
            <div 
              className={`border-b-2 pb-2 w-full text-center  ${mentor?'':'border-primary'}`}
              onClick={()=>setMentor(false)}
              >Student </div>
            
            <div 
              className={` w-full text-center border-b-2 ${mentor ? 'border-primary ':''} `}
              onClick={()=>setMentor(true)}
              >Mentor</div>
          </div>)}
          {/* <hr />  */}
          <p className="text-16 font-normal text-gray-600">
            {user && user.role=='mentor' ? 'Link your account to get started' : 'Please enter your details'}
          </p>
        </div>
        
      </header>

      {user && user.role=='mentor' ? (
        <div className="flex flex-col gap-4">
          <button className='bg-primary p-2 w-1/4 rounded-lg' onClick={()=>nav('/')}>Skip</button>
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === 'sign-up' && (
                <>
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter Your First Name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter Your Last Name"
                    />
              <CustomInput control={form.control} name="phone" label="Phone" placeholder="Enter Your Phone No." />

                </>
              )}
              <CustomInput control={form.control} name="email" label="Email" placeholder="Enter Your Email" />
              <CustomInput control={form.control} name="password" label="Password" placeholder="Enter Your Password" />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="text-16 rounded-lg bg-primary/90 hover:bg-primary font-semibold text-white shadow-md" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
                    </>
                  ) : type === 'sign-in' ? (
                    'Sign In'
                  ) : (
                    'Sign Up'
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in' ? "Don't have an account ? " : 'Already have an Account ? '}
            </p>
            <span
              className="text-14 cursor-pointer font-medium text-blue-500"
              onClick={() => (type === 'sign-in' ? nav('/auth/register') : nav('/auth/login'))}
            >
              {type === 'sign-in' ? 'sign-up' : 'sign-in'}
            </span>
          </footer>
        </>
      )}
    </section>
    </div>
  );
};

export default AuthForm
