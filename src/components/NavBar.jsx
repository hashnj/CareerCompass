import logo from '../assets/logo.png'
import { SidebarTrigger } from "./ui/sidebar";


const NavBar = () => {
  return (
    <nav className="fixed z-50  w-full h-20 flex text-text bg-backgrounds shadow-md">

    <div className='bg-gry z-30 w-screen h-{20px} flex text-white'>
      <div className='mt-5  '><SidebarTrigger className="flex mt-1" /></div>
      <img src={logo} className='h-14 m-2' alt="Career Compass" />
    </div>
    </nav>
  )
}

export default NavBar