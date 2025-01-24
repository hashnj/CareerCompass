import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
  } from "../components/ui/sidebar";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import { CiLogout } from "react-icons/ci";
  import { useIsMobile } from "../hooks/use-mobile";
  import { FormField, FormItem } from "../components/ui/form";
  import { Switch } from "../components/ui/switch";
  // import { z } from "zod";
  import { useForm } from "react-hook-form";
//   import {  auth, authCheck } from "@/store/auth"; 
  import { toast } from "react-toastify";
  import { FaHome,FaVideo,FaCalendarAlt,FaUser } from "react-icons/fa";
  import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { auth, authCheck } from "../store/auth";
import { GoCommentDiscussion } from 'react-icons/go'
import { AiOutlineProfile } from "react-icons/ai";
import { IoEarth } from 'react-icons/io5'
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import axiosInstance from "../lib/axiosInstance";
// import { GrTest } from "react-icons/gr";

const StudentItems=[
  {title:"Dashboard" , url:'/student/dashboard', icon:LuLayoutDashboard},
]

  const mentorItems = [
    { title: "Career Councelling", url: "/councelling", icon: GoCommentDiscussion },
    { title: "Career Options", url: "/options", icon:AiOutlineProfile  },
    { title: "View Interviews", url: "/view", icon: FaVideo },
    { title: "Scheduled Events", url: "/events", icon:FaCalendarAlt  },
    // { title: "test", url: "/test", icon: GrTest },
  ];

  const trend=[
    {title:"Explore" , url:'/explore', icon:IoEarth},
]
const extra = [
  {title:"View Mentor" , url:'/mentor', icon:FaUser},
  {title:"Contact Us" , url:'/contact', icon:MdOutlinePermPhoneMsg},

]
  
  // const FormSchema = z.object({
  //   theme: z.boolean(),
  // });
  
  export function AppSidebar() {
    const user = useRecoilValueLoadable(authCheck);
    const [data,setData]= useState(null); 
    const [authh,setAuth] = useRecoilState(auth);
    const nav = useNavigate();
    const mobile = useIsMobile();
    const [mode, setMode] = useState(null);
    const location = useLocation();
    const isActive = (url) => location.pathname === url;
  
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "light";
      const isDark = savedTheme === "dark";
      setMode(isDark);
  
      document.body.classList.toggle("dark", isDark);
      document.body.classList.toggle("light", !isDark);
    }, []);
  
  useEffect(()=>{
    if(user.state=='hasValue'){
      console.log(user.contents,authh);
      setData(user.contents);
    }
    else{
      setData(null);
    }
  },[user,authh])
  
  
    const form = useForm({
      defaultValues: { theme: mode ?? false },
    });
  
    const onThemeToggle = (value) => {
      setMode(value);
      const theme = value ? "dark" : "light";
      localStorage.setItem("theme", theme);
  
      document.body.classList.toggle("dark", value);
      document.body.classList.toggle("light", !value);
    };
  
    const handleLogOut = async () => {
      try {
        const response = await axiosInstance.post("/auth/logout", {});
        
        if (response.status === 200) {
          setAuth(null);
          setData(null);
          
          toast.success("Logged out successfully!"); 
          user
        } else {
          toast.error("Logout failed."); 
        }
      } catch (error) {
        console.error("Logout error:", error);
        toast.error("Logged out already!!!");
      }
    };
  
  
    if (mode === null) return null; 
  
    return (
      <Sidebar className={` ${mobile? 'border-0':'border-r-2'}   border-text/20  bg-background text-text`} collapsible="offcanvas">
        <SidebarHeader className="mt-4 flex flex-row justify-between items-center w-full">
          <SidebarTrigger className={mobile ? 'flex' : 'hidden'} />
          <div className="mx-7 mt-16 text-lg font-bold flex ">Directions <div>🧭</div> </div>
        </SidebarHeader>
  
        <SidebarContent className="pl-2 no-scroll">
          <SidebarMenu className='pl-3'>
            <SidebarMenuItem key="Home">
              <SidebarMenuButton asChild>
                <div
                    key="Home"
                    className={`flex items-center p-2 cursor-pointer  ${
                      isActive('/') ? "text-primary hover:text-primary" : "hover:text-primary"
                    }`}
                    onClick={() => nav('/')}
                  >
                    <div className="group flex items-center p-2 cursor-pointer" >
                    <FaHome className="mr-2" />
                    <span className=" hover:text-primary">Home</span>
                    </div>
                    
                  </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
          
            </SidebarMenu>
        <SidebarGroup className=" ">
          <SidebarGroupLabel className="border-b rounded-none border-text/10">Student</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {StudentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                  <div
                    key={item.title}
                    className={`flex items-center p-2 cursor-pointer  ${
                      isActive(item.url) ? "text-primary hover:text-primary" : "hover:text-primary"
                    }`}
                    onClick={() => nav(item.url)}
                  >
                    <div className="group flex items-center p-2 cursor-pointer" >
                    <item.icon className="mr-2" />
                    <span className=" hover:text-primary">{item.title}</span>
                    </div>
                    
                  </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className=" ">
          <SidebarGroupLabel className="border-b rounded-none border-text/10">Mentor</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mentorItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                  <div
                    key={item.title}
                    className={`flex items-center p-2 cursor-pointer  ${
                      isActive(item.url) ? "text-primary hover:text-primary" : "hover:text-primary"
                    }`}
                    onClick={() => nav(item.url)}
                  >
                    <div className="group flex items-center p-2 cursor-pointer" >
                    <item.icon className="mr-2" />
                    <span className=" hover:text-primary">{item.title}</span>
                    </div>
                    
                  </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className=" ">
          <SidebarGroupLabel className="border-b rounded-none border-text/10">Trending Career</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {trend.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                  <div
                    key={item.title}
                    className={`flex items-center p-2 cursor-pointer ${
                      isActive(item.url) ? "text-primary hover:text-primary" : ""
                    }`}
                    onClick={() => nav(item.url)}
                  >
                    <item.icon className="mr-2" />
                    <span>{item.title}</span>
                  </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup className=" ">
          <SidebarGroupLabel className="border-b rounded-none border-text/10">Extra</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {extra.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                  <div
                    key={item.title}
                    className={`flex items-center p-2 cursor-pointer ${
                      isActive(item.url) ? "text-primary hover:text-primary" : ""
                    }`}
                    onClick={() => nav(item.url)}
                  >
                    <item.icon className="mr-2" />
                    <span>{item.title}</span>
                  </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
  
        <SidebarFooter className="bg-background rounded-t-xl border-t text-text border-text/20 border-b-0 py-4">
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between rounded-lg">
                <div className="pl-2 text-text">Dark Mode</div>
                <Switch
                  className="mr-2 border"
                  checked={mode}
                  onCheckedChange={(value) => {
                    field.onChange(value);
                    onThemeToggle(value);
                  }}
                />
              </FormItem>
            )}
          />
        </SidebarFooter>
  
        <SidebarFooter className="bg-background rounded-b-xl  border-text/20 border-t-0 py-6">
        {user.state === 'loading' ? (
          <div className="w-full flex justify-center">
            <AiOutlineLoading3Quarters className="text-primary animate-spin text-xl" />
          </div>
            // 
         ) :  data ? (
          <div
            className="flex flex-row cursor-pointer items-center justify-between gap-2"
            // onClick={() => nav('/settings')}
          >{console.log(data,user.state)}
            <div className="flex items-center justify-center rounded-full bg-gray-200 w-10 h-10">
              <p className="text-xl font-bold text-gray-700">
                {data?.firstname[0].toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col">
            <div className="flex-1 flex-col text-text justify-center">
              <h1 className="text-lg truncate capitalize font-semibold text-text">
                {data.firstname.length>15?data.firstname.slice(0,15)+'...':data.firstname}
              </h1>
              <p className="text-sm truncate text-text/50">
                {data.email.length>18?data.email.slice(0,18)+'...':data.email}
              </p>
              </div>
              <div className="flex-1 flex-col text-text text-sm justify-center">
              logged in as {data.role}
            </div>
            </div>
            <div
              className="bg-background p-3 rounded-lg hover:text-xl transition-all"
              onClick={(e) => {
                e.stopPropagation();
                handleLogOut();
              }}
            >
              <CiLogout />
            </div>
          </div>
        ) : (
          <div className="w-full text-center">
            <p>Log-in to get a personalized experience...</p>
            <button
              className="mt-2 text-lg rounded-lg bg-primary/90 hover:bg-primary font-semibold text-white py-2 px-4 shadow-md"
              onClick={() => nav('/auth/login')}
            >
              Log-in
            </button>
          </div>
        )}
      </SidebarFooter>
      </Sidebar>
    );
  }
  