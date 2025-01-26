import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/ui/button';
import { Form } from '../../components/ui/form';
import CustomInput from '../../components/CustomInputs';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../lib/axiosInstance';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { auth } from '../../store/auth';

// eslint-disable-next-line react/prop-types
const AuthForm = ({ type }) => {
  const [user, setUser] = useRecoilState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  const [mentor, setMentor] = useState(false);
  const [showMentorForm, setShowMentorForm] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDark = savedTheme === 'dark';
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
  }, []);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // useEffect(() => {
  //   console.log(mentor);
  // }, [mentor]);

  const handleSignUp = async (data) => {
    try {
      const response = await axiosInstance.post('/auth/signup', data);
      console.log(response);
      setUser(response.data);
      toast.success('Successfully registered!');
      if (mentor) {
        setShowMentorForm(true); 
      } else {
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
      toast.success('signed in successfully!');
      nav('/');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to sign in.');
      throw error;
    }
  };

  const handleMentorDetailsSubmit = async (data) => {
    try {
      console.log('Submitting mentor details:', data);
      await axiosInstance.post('/auth/mentor', data); 
      toast.success('Mentor details submitted!');
      nav('/');
    } catch (error) {
      console.error('Mentor details submission error:', error);
      toast.error('Failed to submit mentor details.');
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      if (type === 'sign-up') {
        data.role = mentor ? 'mentor' : 'student';
        await handleSignUp(data);
      } else if (type === 'sign-in') {
        await handleSignIn(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  if (showMentorForm) {
    return (
      <div className="bg-background text-text w-full flex justify-center">
        <section className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-3 py-4 md:gap-5">
          <header className="flex flex-col gap-2 md:gap-2">
            <h1 className="text-2xl font-semibold text-primary">Additional Information</h1>
            <p className="text-16 font-normal text-primary/50">
              Please provide more details to complete your mentor profile.
            </p>
          </header>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleMentorDetailsSubmit)}
              className="space-y-8"
            >
              <CustomInput
      control={form.control}
      name="email"
      label="Email"
      placeholder="Enter Your Email"
      defaultValue={user?.email} 
      disabled 
    />
    

    <div>
      <label className="block text-sm font-medium">Profile Picture (Optional)</label>
      <input
        type="file"
        accept="image/*"
        className="mt-1 block w-full rounded-md border border-text/20 p-2 bg-background shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
        onChange={(e) => {
          const file = e.target.files[0];
          form.setValue('profilePicture', file); // Manually bind file to the form
        }}
      />
    </div>
              <div className='flex w-full gap-1 '>
                <div className='w-full'>
              <CustomInput
                control={form.control}
                name="expertise"
                label="Expertise"
                placeholder="Enter Your Expertise"
              />
              </div>
              <div className='w-full'>
              <CustomInput
                control={form.control}
                name="educationalQualifications"
                label="Educational Qualifications"
                placeholder="Educational Qualifications"
              />
              </div>
              </div>
              <CustomInput
                control={form.control}
                name="jobTitle"
                label="Current/Former Job Title"
                placeholder="Enter Your Current or Former Job Title"
              />
              <div>
                <label className="block text-sm font-medium ">
                  Experience in Current/Former Field
                </label>
                <select
                  {...form.register("experience")}
                  className="mt-1 block w-full rounded-md border border-text/20 p-2 bg-background  shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                >
                  <option value="">Select Experience Level</option>
                  <option value="0-3 years">0-3 Years</option>
                  <option value="3-10 years">3-10 Years</option>
                  <option value="10+ years">10+ Years</option>
                </select>
              </div>
              <CustomInput
                control={form.control}
                name="bio"
                label="Brief Introduction / Bio"
                placeholder="Enter a Short Bio"
              />

              <div className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="text-16 rounded-lg bg-primary/90 hover:bg-primary font-semibold text-white shadow-md"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-background text-text w-full flex justify-center">
      <section className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-3 py-4 md:gap-5">
        <header className="flex flex-col gap-2 md:gap-2">
          <div
            className="flex cursor-pointer text-primary items-center gap-1"
            onClick={() => nav('/')}
          >
            <h1 className="text-3xl font-ibm-plex-serif font-bold">Career Compass</h1>
          </div>
          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-xl font-semibold text-primary">
              {user ? 'Link Account' : type === 'sign-in' ? 'Sign-in' : 'Sign-up as :'}
            </h1>
            {type === 'sign-up' && (
              <div className="">
                <div className='flex justify-around'>
                  <div
                    className={`border-b-2 pb-2 w-full text-center ${
                      mentor ? '' : 'border-primary'
                    }`}
                    onClick={() => setMentor(false)}
                  >
                    Student
                  </div>
                  <div
                    className={`w-full text-center border-b-2 ${
                      mentor ? 'border-primary ' : ''
                    }`}
                    onClick={() => setMentor(true)}
                  >
                    Mentor
                  </div>
                </div>
                <p className="text-16 font-normal text-gray-600">
                  {user && user.role === 'mentor'
                    ? 'Link your account to get started'
                    : 'Please enter your details'}
                </p>
              </div>
            )}
          </div>
        </header>

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
                <CustomInput
                  control={form.control}
                  name="phone"
                  label="Phone"
                  placeholder="Enter Your Phone No."
                />
              </>
            )}
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter Your Email"
            />
            <CustomInput
              control={form.control}
              name="password"
              type="password"
              label="Password"
              placeholder="Enter Your Password"
            />
            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                className="text-16 rounded-lg bg-primary/90 hover:bg-primary font-semibold text-white shadow-md"
                disabled={isLoading}
              >
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
              <div>
                <p className="text-16 text-center text-text/60 font-thin cursor-default">
                  {type === 'sign-in' ? 'New to Career Compass ?' : 'Already have an account?'}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => nav(type === 'sign-in' ? '/auth/register' : '/auth/login-in')}
                  >
                    {type === 'sign-in' ? ' Sign Up' : ' Sign In'}
                  </span>
                </p>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </div>
  );
};

export default AuthForm;
