// "use client"
// import { Button } from '@/components/ui/button';
// import Link from 'next/link'
// import { useState } from 'react'
// import { IoMdMenu } from "react-icons/io";
// import { MdOutlineCancelPresentation } from "react-icons/md";
// import { SiBosch } from "react-icons/si";
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   return (
//     <header className=' text-black border md:justify-center border-b-black  shadow-md  shadow-gray-900 flex md:space-x-20 justify-between items-center md:gap-8  p-4 top-0 z-10 sticky'>
//       <Link className='hover:text-orange-500 font-bold items-center flex gap-x-1 text-xl' href={'#'}><SiBosch/>BrandBoss </Link>

//       {/* Show navigation links on medium screens and larger */}
//     <div className="hidden md:flex  gap-8 font-semibold ">
//         <Link href={'#'} className='transform hover:scale-105 hover:text-orange-500'> Home </Link>
//         <Link href={'#'} className='transform hover:scale-105 hover:text-orange-500'> About us </Link>
//         <Link href={'#'} className='transform hover:scale-105 hover:text-orange-500'> Services </Link>
//         <Link href={'#'} className='transform hover:scale-105 hover:text-orange-500'> Contact us </Link>
//         <Link href={'#'} className='transform hover:scale-105 hover:text-orange-500'> Blogs </Link>
//       </div>
//       <div className="md:flex space-x-3 hidden ">
//   <Button variant={'outline'} className="bg-orange-600 text-white border text-xl border-black font-semibold  text-center rounded-lg"><Link href="#">Login</Link></Button>
//   <Button variant={'outline'} className="bg-orange-600 border border-black text-xl text-white font-semibold text-center  rounded-lg "><Link href="#">Sign up</Link></Button>
//   </div>

//       {/* Show menu button on small screens */}
//       <div className='md:hidden'> 
//         <button onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <MdOutlineCancelPresentation size={24} /> : <IoMdMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile navigation menu when isOpen is true, only for small screens */}
//       {isOpen && (
//         <nav className='absolute top-14 left-0 w-full bg-black text-white p-4 md:hidden text-center'>
//           <ul className='flex flex-col gap-4'>
//             <Link href={'/'} className='transform hover:scale-105' onClick={() => setIsOpen(false)}> Home </Link>
//             <Link href={'/about'} className='transform hover:scale-105' onClick={() => setIsOpen(false)}> About us </Link>
//             <Link href={'/team'} className='transform hover:scale-105' onClick={() => setIsOpen(false)}> services</Link>
//             <Link href={'/testimonials'} className='transform hover:scale-105'>Contact us </Link>
//             <Link href={'/destination'} className='transform hover:scale-105' onClick={() => setIsOpen(false)}>  </Link>
//           </ul>
//           <div className="flex flex-col space-x-3 md:hidden  ">
//   <Button variant={'outline'} className="w-md max-w-md bg-orange-600 text-white border text-xl border-black font-semibold  text-center rounded-lg"><Link href="#">Login</Link></Button>
//   <Button variant={'outline'} className="bg-orange-600 border border-black text-xl text-white font-semibold text-center  rounded-lg "><Link href="#">Sign up</Link></Button>
//   </div>
//         </nav>
//       )}
//     </header>
//   )
// }

"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { SiBosch } from "react-icons/si";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="text-black bg-orange-50 border-b-black shadow-md shadow-gray-900 flex justify-between items-center p-4 top-0 z-10 sticky">
      {/* Brand logo */}
      <Link
        className="hover:text-orange-500 font-bold items-center flex gap-x-1 text-xl"
        href={"#"}
      >
        <SiBosch /> BrandBuzz
      </Link>

      {/* Show navigation links on medium screens and larger */}
      <div className="hidden md:flex justify-center gap-8 font-semibold">
        <Link href={"#"} className="transform hover:scale-105 hover:text-orange-500">
          {" "}
          Home{" "}
        </Link>
        <Link href={"#"} className="transform hover:scale-105 hover:text-orange-500">
          {" "}
          About us{" "}
        </Link>
        <Link href={"#"} className="transform hover:scale-105 hover:text-orange-500">
          {" "}
          Services{" "}
        </Link>
        <Link href={"#"} className="transform hover:scale-105 hover:text-orange-500">
          {" "}
          Contact us{" "}
        </Link>
        <Link href={"#"} className="transform hover:scale-105 hover:text-orange-500">
          {" "}
          Blogs{" "}
        </Link>
      </div>

      {/* Buttons for login/signup on larger screens */}
      <div className="hidden md:flex space-x-3">
        <Button
          variant={"outline"}
          className="bg-orange-600 text-white border text-xl border-black font-semibold text-center rounded-lg"
        >
          <Link href="#">Login</Link>
        </Button>
        <Button
          variant={"outline"}
          className="bg-orange-600 border border-black text-xl text-white font-semibold text-center rounded-lg"
        >
          <Link href="#">Sign up</Link>
        </Button>
      </div>

      {/* Show menu button on small screens */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdOutlineCancelPresentation size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {/* Mobile navigation menu when isOpen is true, only for small screens */}
      {isOpen && (
        <nav className="absolute top-16 right-0 w-full bg-black text-white p-6 md:hidden text-center">
          <ul className="flex flex-col gap-6">
            <Link href={"/"} className="transform hover:scale-105" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href={"/about"} className="transform hover:scale-105" onClick={() => setIsOpen(false)}>
              About us
            </Link>
            <Link href={"/services"} className="transform hover:scale-105" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href={"/contact"} className="transform hover:scale-105" onClick={() => setIsOpen(false)}>
              Contact us
            </Link>
            <Link href={"/blogs"} className="transform hover:scale-105" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
          </ul>

          {/* Login and Sign up buttons for mobile */}
          <div className="flex flex-col space-y-4 mt-4">
            <Button
              variant={"outline"}
              className="w-full bg-orange-600 text-white border text-xl border-black font-semibold text-center rounded-lg"
            >
              <Link href="#">Login</Link>
            </Button>
            <Button
              variant={"outline"}
              className="w-full bg-orange-600 border border-black text-xl text-white font-semibold text-center rounded-lg"
            >
              <Link href="#">Sign up</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
