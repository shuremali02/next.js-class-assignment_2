
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";

export default function HeroSec() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 items-center min-h-[40vh] py-6 text-left">
      {/* Text Section */}
      <div className="flex flex-col justify-start space-y-6 m-6">
        <h1 className="font-bold leading-loose mt-4 text-2xl md:text-5xl">
          We Create <br /> 
          <span className="text-orange-600">
            Solutions
          </span> 
          for <br /> your business
        </h1>   
        <p className="text-md md:text-xl text-gray-600">
          Discover the most breathtaking locations from around the world, handpicked just for you. Whether you&#39;re seeking adventure, relaxation, or cultural immersion, we make it easy to find and plan your next dream vacation. Let us be your guide to unforgettable experiences!
        </p>
        <div className="space-y-4 flex flex-col">
          <Link href={"#"}>
            <Button className="py-2 px-4">Get Started</Button>
          </Link>
          <Link href={"#"}>
            <Button variant={"outline"} className="py-2 px-4 gap-x-1">
              <BsFillArrowDownRightCircleFill /> Explore Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end">
        <Image 
          src="/image.jpeg" 
          alt="Business Solutions" 
          width={1022}   // Adjusted width for responsiveness
          height={464}  // Adjusted height for better fit
          className="object-cover w-full max-w-1xl md:h-[40rem]" 
        />
      </div>
    </div>
  );
}
