import { useState } from 'react';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import { useNavigate } from 'react-router-dom';


const Main = () => {
  const [student,setStudent]=useState(true);
  const [institution,setInstitution]=useState(false);
  const [professional,setProfessional]=useState(false);
  const nav = useNavigate();
  const students = () =>{
    setStudent(true);
    setInstitution(false);
    setProfessional(false);
  }
  const institutions = () =>{
    setStudent(false);
    setInstitution(true);
    setProfessional(false);
  }
  const professionals = () =>{
    setStudent(false);
    setInstitution(false);
    setProfessional(true);
  }
    // console.log('main.jsx');
  return (
    <div className="p-2 bg-backgrounds/70 no-scroll text-text min-h-screen h-full ">
      <div>
      <section className="pt-2 my-8 text-center">
        <div className="w-4/5 m-auto">
            <h2 className='font-extrabold text-primary text-2xl'>Your Path to a Successful Career</h2>
            <p className=''>Discover your strengths and find the right career path with Compass.</p>
            <button onClick={()=>{nav('/options')}} className="bg-primary p-4 py-2 m-4 rounded-md text-white">Get Started</button>
            <h5 className='text-text/60 text-sm'>Career Assessment | Personalised Guidance | Profile Building | Virtual Internships | <br>
            </br> College Roadmap Planning | College Applications | Scholarship Hunt</h5>
            <div className="homepage-banner">
                <img src={image1} />
            </div>
        </div>
    </section>
    <section className="my-8">
        <div className="text-center px-28 py-8 detail-box2">
                        <h2 className='text-2xl my-4'>
                            Transforming the Career Guidance Landscape
                        </h2>
                        <p className='text-text/60 text-sm mb-8'>
                            Comprehensive career guidance solutions for students, parents, educators and schools
                        </p>
                        <div className="flex flex-wrap justify-center gap-5">
                            <div className="w-56 flex flex-col justify-center items-center rounded-md shadow-md p-4">
                            <img alt="Icon representing career assessment and guidance" height="80" src="https://storage.googleapis.com/a1aa/image/fQMOopykeToSVk3xj5WRecny8sKJfFowew7wSies8MO2ObOAF.jpg" width="80"/>
                            <p className='mt-5'>
                            Enable students to identify their best-fit career with our world-className career assessment and personalised guidance.
                            </p>
                            </div>
                            <div className="w-56 flex flex-col justify-center items-center rounded-md shadow-md p-4">
                            <img alt="Icon representing virtual career simulations" height="80" src="https://storage.googleapis.com/a1aa/image/5Xb3KFnpDZK2OtvM0yeBO8Faj1hXtVwBD2UhaJrAStag2cAKA.jpg" width="80"/>
                            <p className='mt-5'>
                            Empower students to learn all about the professional world with virtual career simulations, exhaustive career library, career blogs and vlogs.
                            </p>
                            </div>
                            <div className="w-56 flex flex-col justify-center items-center rounded-md shadow-md p-4">
                            <img alt="Icon representing college application guidance" height="80" src={image2} width="80"/>
                            <p className='mt-5'>
                            Pave student&apos;s way to their dream college with our end-to-end college application guidance, scholarship drive and corporate internship program.
                            </p>
                            </div>
                            <div className="w-56 flex flex-col justify-center items-center rounded-md shadow-md p-4">
                            <img alt="Icon representing career guidance ecosystem" height="80" src={image3} width="80"/>
                            <p className='mt-5'>
                            Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy
                            </p>
                            </div>
                            <div className="w-56 flex flex-col justify-center items-center rounded-md shadow-md p-4">
                            <img alt="Icon representing career coaches" height="80" src={image4} width="80"/>
                            <p className='mt-5'>
                            Empower educators to become International Certified Career Coaches and build a career in career guidance &amp; counselling
                            </p>
                            </div>
                            <div className="w-56 flex flex-col justify-center items-center rounded-md shadow-md p-4">
                            <img alt="Icon representing career guidance solutions" height="80" src={image5} width="80"/>
                            <p className='mt-5'>
                            Revolutionary assessment platform and technology driven career guidance solutions for educators to boost their career guidance &amp; counselling practice
                            </p>
                        </div>
                </div>
            </div> 
    </section>
    <section className="hero3">
        <div className="bg-primary text-white text-center p-5">
            <h1 className='font-extrabold text-xl'>
            Our Programs
            </h1>
            <p className='mx-2'>
            Customized, professional services &amp; assistance for all participants in the career guidance journey.
            </p>
        </div>
       <div className=" detail-box3">
            <ul className='flex mt-5 mx-auto w-2/3 md:w-4/5 gap-1 border-text/20 border border-b-0 justify-center'>
                    <li className={`w-1/3 p-2 rounded-tl-xl py-4 md:py-2 cursor-pointer shadow-md flex flex-col justify-center items-center text-lg hover:bg-pink-50  text-gray-500 ${student?' shadow-sm text-gray-800 text-text bg-pink-100 text-lg':''} `} onClick={()=>students()} id="student">
                    <img alt="Icon representing students" height="90" src={image6} width="60"/>
                    <h2 className=' text-gray-800'>
                    For Learners
                    </h2>
                </li>
                    <li className={`w-1/3 p-2 cursor-pointer border-text/20 border border-b-0 py-4 md:py-2 shadow-md flex flex-col justify-center items-center text-lg  text-gray-500 hover:bg-cyan-50 ${institution?'shadow-sm text-text bg-cyan-100':''}`} onClick={()=>institutions()} id="institution">
                    <img alt="Icon representing institutions" height="50" src={image7} width="50"/>
                    <h2 className='px-2 text-gray-800'>
                    For Educational Bodies
                    </h2>
                </li>
                    <li className={`w-1/3 p-2 border-text/20 border rounded-tr-xl border-b-0 py-4 md:py-2 cursor-pointer shadow-md flex flex-col justify-center items-center text-lg hover:bg-violet-50  text-gray-500 ${professional?'shadow-sm text-text bg-violet-100':''}`} onClick={()=>professionals()} id="professional">
                    <img alt="Icon representing career professionals" height="50" src={image8} width="50"/>
                    <h2 className='text-gray-800'>
                    For Career Experts
                    </h2>
                    </li>
            </ul>
        </div>
        <div className={`justify-around w-full text-gray-800 bg-pink-100 ${student?'flex':'hidden'}`} id="students" >
            <div className="flex flex-wrap justify-around p-5 mt-0 ">
                <div className="w-2/5 mx-2.5 ">
                <h3 className='text-red-500 text-lg font-semibold '>
                CAREER GUIDANCE PROGRAMS
                </h3>
    
                <h3 className='text-red-500 text-lg font-semibold '>
                Grades 8-9
                </h3>
                <p>
                Stream &amp; Subject Selection
                </p>
                <p>
                In-depth assessment &amp; personalized advice to help you choose the ideal stream and subjects that align with your career goals.
                </p>
                <button className='text-blue-600' href="#">
                View Program Details &gt;
                </button>
                </div>
                <div className="w-2/5 mx-2.5 ">
                <h3 className='text-red-500 text-lg font-semibold '>
                Grades 10-12
                </h3>
                <p>
                Career Selection &amp; Planning
                </p>
                <p>
                Professional advice &amp; comprehensive assessment to help you find your ideal career path and select the right course and college.
                </p>
                <button className='text-blue-600' href="#">
                View Program Details &gt;
                </button>
                </div>
                <div className="w-2/5 mx-2.5 ">
                <h3 className='text-red-500 text-lg font-semibold '>
                University Students and Graduates
                </h3>
                <p>
                Career Selection &amp; Development
                </p>
                <p>
                Comprehensive assessment &amp; expert advice to help you identify your ideal career and take the next best step.
                </p>
                <button className='text-blue-600' href="#">
                View Program Details &gt;
                </button>
                </div>
                <div className="w-2/5 mx-2.5 ">
                <h3 className='text-red-500 text-lg font-semibold  '>
                EXPERIENTIAL LEARNING PROGRAMS
                </h3>
                <h3>
                Virtual Internship Program
                </h3>
                <p>
                Hands-on, immersive self-paced program that allows students to explore different careers and gain practical experience.
                </p>
                <button className='text-blue-600' href="#">
                View Program Details &gt;
                </button>
                </div>
                <div className="w-2/5 mx-2.5 ">
                <h3 className='text-red-500 text-lg font-semibold '>
                UNIVERSITY APPLICATION PROGRAMS
                </h3>
                <h3 className='text-red-500 text-lg font-semibold '>
                International Application
                </h3>
                <p>
                Comprehensive overseas admissions guidance to help you create the perfect applications for your target universities.
                </p>
                <button className='text-blue-600' href="#">
                View Program Details &gt;
                </button>
                </div>
                <div className="w-2/5 mx-2.5 ">
                <h3 className='text-red-500 text-lg font-semibold '>
                Liberal Arts Application
                </h3>
                <p>
                Detailed guidance and personalized application development for admissions to Liberal Arts programs.
                </p>
                <button className='text-blue-600' href="#">
                View Program Details &gt;
                </button>
                </div>
           </div>
      </div>
     <div className={`text-gray-800 justify-around w-full bg-cyan-100  ${institution?'flex':'hidden'} `} id="institutions" >
            <div className="flex justify-around p-5  ">
                <div className="w-2/5 text-center ">
                    <h3 className='text-sky-700 text-lg font-semibold'>In-School<br />Career Guidance Program</h3>
                    <p>Our advanced career guidance platform offers assessments, expert counseling, in-school workshops, detailed analytics, alumni tracking, and more. It establishes a comprehensive career guidance system in schools to meet the needs of various stakeholders.</p>
                    <button className='text-blue-600'>View Program Details &gt;</button>
                </div>
                {/* <div className="program">
                    <h3>MUN Training<br />Program</h3>
                    <p>Equip students for success at Model United Nations with expert-led training and thorough guidance. This program covers everything from delegation and resolution drafting to public speaking and chairing, helping students excel at MUN conferences.</p>
                    <button href="#">View Program Details &gt;</button>
                </div> */}
                <div className="w-2/5 text-center ">
                    <h3 className='text-sky-700 text-lg font-semibold'>Career<br />Talks</h3>
                    <p>Promote career awareness and inspire students through interactive workshops with successful professionals. Experts from diverse fields such as Economics, Science, Music, Cryptocurrency, and more share their experiences, knowledge, and insights.</p>
                    <button className='text-blue-600' >View Program Details &gt;</button>
                </div>
            </div>
        </div>
        <div className={`justify-around text-gray-800 w-full bg-violet-100  ${professional?'flex':'hidden'} `} id="professionals" >
            <div className="flex justify-around p-5">
                <div className="w-2/5 text-center">
                    <h2 className='text-violet-700 text-lg font-semibold'>International Certified Career Coach (ICCC)</h2>
                    <p>Develop or enhance your career counselling skills with a 3-month certification program, crafted and delivered by industry professionals. Focusing on global best practices and hands-on learning, ICCC is the ideal starting point for educators and counsellors.</p>
                    <button className='text-blue-600'>View Program Details &gt;</button>
                </div>
                <div className="w-2/5 text-center">
                    <h2 className='text-violet-700 text-lg font-semibold'>Compass Partner Program</h2>
                    <p>Join the Compass Partner Counsellor program to broaden, improve, and grow your career counselling practice. Utilize a top-tier assessment platform, advanced analytics, and comprehensive counsellor support tools to provide high-quality career guidance and advance as a career counsellor.</p>
                    <button className='text-blue-600'>View Program Details &gt;</button>
                </div>
            </div>
        </div>
 </section>
    

      </div>
    </div>

  )
}


export default Main



