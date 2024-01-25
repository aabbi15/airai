'use client'

import React from "react";
import ReactPlayer from 'react-player';
import Footer from "@/components/footer";
import Image from "next/image";






export default function App() {
  return (
    <div className="min-h-scree">
      <div className="flex justify-center">
        <div className="flex flex-col mymain items-center">
          <div className="mygrad head1 sm:text-[20px] md:text-[22px] lg:text-[32px] xl:text-[30px]">
            It's finally here...
          </div>
          <div className="mygrad head2 sm:text-[30px] md:text-[42px] lg:text-[53px] xl:text-[68px]">
            100,000 sales and customer service reps at the tap of a button.
          </div>
          <div className="mygrad2 head1 sm:text-[20px] md:text-[22px] lg:text-[32px] xl:text-[30px]">
            With Breeze AI!
          </div>

          <div className="text1 sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px]">
            Introducing the world's first ever AI that can have full on 10-40 minute long phone calls that sound like a REAL human, with infinite memory, perfect recall, and can autonomously take actions across 5,000 plus applications. It can do the entire job of a full time agent without having to be trained, managed or motivated. It just works 24/7/365.
          </div>
          
          <div>
          <Image 
            src="/robot-call.png"
            height={768}
            width={512}
            className="rounded-3xl"
            />


          </div>
          <button class=" mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
              Login Now
            </span>
          </button>


        </div>

      </div>
      <Footer />
    </div>
  );
}