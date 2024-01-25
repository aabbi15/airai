'use client'

import Footer from "@/components/footer";
import Navbar from "@/components/header";
import { TypeAnimation } from "react-type-animation";


export default function App() {
    return (
        <div>
            <Navbar />
            <div className="container max-w-screen-xl mx-auto px-4 ">



                <div className="flex flex-col lg:flex-row justify-between space-x-20">
                    <div className="text-center lg:text-left mt-32">
                        <h1 className="font-semibold text-white-900 text-3xl md:text-5xl leading-normal mb-5 "> Start automating <br /> your calls now</h1>
                        <h1 className="font-semibold text-white-900 text-2xl md:text-6xl leading-normal mb-6 mygrad">Let AI handle the   <br />
                            <TypeAnimation
                                sequence={[
                                    "Customer Care",
                                    1000,
                                    "Appointment Scheduling",
                                    1000,
                                    "Dynamic interactions",
                                    1000,
                                    // "API ",
                                    // 1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>

                        <p className="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">We provide Internships for peoples of <br /> nationwide to support people who are in need.</p>

                        <a href='user/signup'><button className="px-6 py-4 bg-info font-semibold text-black text-lg rounded-xl border-2 border-blue-900 hover:bg-blue-700 transition ease-in-out duration-500 hover:text-white">Create Your AI agent</button></a>
                    </div>

                    <div className="mt-32">
                        <img src="/home-img.png" alt="Image" height={900} width={600}/>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}









