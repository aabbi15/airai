

'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import locofy from "./locofy.png"
import axios from 'axios';

 function  Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [name, Setname] = useState('');
 const [islogged, Setislogged] = useState(true);

//  useEffect(() => {
// //   const fetchData = async () => {
// //     try {
// //       const response2 = await axios.get("/api/user/me");
// //       const response = response2.data;
// //       console.log(response);
// //       Setislogged(true);
// //       Setname(response.name);
// //     } catch (error) {
// //       console.log("Auth failed", error.message);
// //       // toast.error(error.message);
// //     } finally {
// //       // Remove this empty block if you don't need any specific code here
// //       // setLoading(false);
// //       // console.log("hi");
// //     }
// //   };

//   fetchData(); // Call the async function
// }, []);

 function Profile() {
     if (islogged) {
         return (
             <a href='/user/profile' className='flex justify-center items-center'>
                 

                     <Image
                         src='/user.png'
                         alt="Picture of the author"
                         className="w-11 h-11 bg-slate-700 rounded-l-full p-2 "
                         width={32}
                         height={32}
                     />
                     <div className='-m-1 pr-4 p-2 h-11 flex items-center text-gray-100 bg-slate-700 border-1 border-slate-400 rounded rounded-r-full'>Vivek</div>
                 </a>
             
         );

     }
   


 }

//  function Mycourses() {
//   if (islogged) {
//       return (
//         <li>
//         <a href="/mycourses" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My courses</a>
//       </li>
          
//       );

//   }
//   else {
//       return (
//        <></>
//       )
//   }


// }

 return (
   <nav className="flex items-center bg-white justify-between flex-wrap p-6 border-b border-gray-200 ">
     <div className="flex items-center flex-shrink-0 text-gray-800 mr-6 lg:mr-72">
     <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ml-5">
     <Image
      src="/breezelogo.png"
      width={150}
      height={150}
      alt="Picture of the author"
      className="-ml-20 rounded-lg"
     />
     <span className="self-center text-xl font-semibold whitespace-nowrap ">Breeze AI</span>
     </a>
     </div>
     <div className="block md:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow md:ok md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-lg md:flex-grow">
       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li>
        <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 " aria-current="page">Create</a>
       </li>
       <li>
         <a href="/sector" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 " aria-current="page">Contacts</a>
       </li>
       <li>
         <a href="/gallery" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Campaign</a>
       </li>
       <li>
         <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
       </li>
       {/* <Mycourses/> */}
     </ul>
       </div>
      {Profile()}
     </div>
   </nav>
 );
}
export default Navbar;