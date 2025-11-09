import { JSX, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegHeart } from "react-icons/fa";
import logo from '@/assets/head/logo.png'
import { FaUser} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { MdQrCode } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoIosHome } from "react-icons/io";

interface Props {
  children: JSX.Element; 
}

interface User {
  id: number;
  username: string;
}

const Index = ({ children }: Props) => {
  const isAuthenticated = localStorage.getItem("users");

  if (!isAuthenticated) {
    return <Navigate to="/registration" replace />;
  }

  const [authenticatedUser, setAuthenticatedUser] = useState<User[]>(
    isAuthenticated ? JSON.parse(isAuthenticated) : []
  );


  return (
    <>
<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
          <li>
            <NavLink to={'/'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <IoIosHome className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
              <span className="flex-1 ms-3 whitespace-nowrap">Home Page</span>
            </NavLink>
          </li>

         <li>
            <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                 <FaUser className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Accounts</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2 w-full">
                {
                  authenticatedUser.map((el) => (
                    <li key={el.id}>
                      <span>{el.username}</span>
                    </li>
                  ))
                }
            </ul>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <MdQrCode className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Promo-code</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <FaLocationDot className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Location</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <RiLogoutBoxFill className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

    </>
  );
};

export default Index;
