
import Link from "next/link";
import { SiBosch } from "react-icons/si";
import { FaFacebook, FaLinkedin, FaGithub,} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-orange-50 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold  text-lg mb-4 flex gap-1 items-center">< SiBosch />BrandBuzz</h1>
          <p className="mb-2">We create solutions for your business</p>
          
          <Link href="#" className="text-orange-500 hover:underline font-bold text-xl">Contact Us</Link>
          <div className="flex space-x-3 ">
          <Link href={"https://www.linkedin.com/in/syed-shurem-ali-5a55852a0/"} className="text-gray-400 hover:underline hover:text-orange-600 "><FaLinkedin size={28}/> </Link>
            <Link href={"https://www.facebook.com/"} className="text-gray-400 hover:underline hover:text-orange-600 "><FaFacebook size={28}/> </Link>
            <Link href={"https://github.com/shuremali02/next.js-class-assignment_2"} className="text-gray-400 hover:text-orange-600 hover:underline"><FaGithub size={28}/> </Link>
        </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h1 className="font-bold text-lg mb-4">Services</h1>
          <ul>
            <li><Link href="#" className="hover:underline hover:text-orange-600">SEO/SEM</Link></li>
            <li><Link href="#" className="hover:underline hover:text-orange-600">Marketing</Link></li>
            <li><Link href="#" className="hover:underline hover:text-orange-600">Viral Campaign</Link></li>
            <li><Link href="#" className="hover:underline hover:text-orange-600">Others</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h1 className="font-bold text-lg mb-4">External Links</h1>
          <ul>
            <li><Link href="//travelblog-assignment.netlify.app/" className="hover:underline hover:text-orange-600">TravelBlog</Link></li>
            <li><Link href="//blogpost101.netlify.app" className="hover:underline hover:text-orange-600">Blogpost</Link></li>
            <li><Link href="//resume-builder-milestone-5.netlify.app" className="hover:underline hover:text-orange-600">Dynamic Resume Builder </Link></li>
            <li><Link href="//milestone-02-personal-portfolio.netlify.app/" className="hover:underline hover:text-orange-600">Portfolio</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p>© 2024 BrandBuzz. All Rights Reserved Syed Shurem Ali.</p>
      </div>
    </footer>
  );
}

