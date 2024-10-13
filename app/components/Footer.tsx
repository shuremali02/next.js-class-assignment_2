
import Link from "next/link";
import { SiBosch } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="bg-orange-50 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h1 className="font-bold text-lg mb-4 flex gap-1 items-center">< SiBosch />BrandBuzz</h1>
          <p className="mb-2">We create solutions for your business</p>
          <Link href="/contact" className="text-orange-500 hover:underline">Contact Us</Link>
        </div>

        {/* Column 2: Services */}
        <div>
          <h1 className="font-bold text-lg mb-4">Services</h1>
          <ul>
            <li><Link href="/seo" className="hover:underline">SEO/SEM</Link></li>
            <li><Link href="/marketing" className="hover:underline">Marketing</Link></li>
            <li><Link href="/campaigns" className="hover:underline">Viral Campaign</Link></li>
            <li><Link href="/others" className="hover:underline">Others</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h1 className="font-bold text-lg mb-4">Quick Links</h1>
          <ul>
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p>© 2024 BrandBuzz. All Rights Reserved Syed Shurem Ali.</p>
      </div>
    </footer>
  );
}

