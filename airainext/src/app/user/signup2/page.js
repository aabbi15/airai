'use client'

import Image from "next/image";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';


import { GoogleLogin } from '@react-oauth/google';


export default function Loginner() {

    
        const [isChecked, setIsChecked] = useState(false);
      
        const handleCheckboxChange = () => {
          setIsChecked(!isChecked);
        }
    return (
        <div className=" flex justify-center">

            <div class="min-h-screen bg-gry-100 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="-ml-20 -mt-10">
                            <Image
                                src="/breezelogo.png"
                                height={150}
                                width={150}
                            />
                        </div>
                        <div class="max-w-md mx-auto">
                            <div>
                                <h1 class="text-2xl font-semibold">Create your free Breeze account now.</h1>
                                <h1 class="text-xl font-semibold mt-5">Step 2 of 2: Login Details</h1>

                            </div>
                            <div class="divide-y divide-gray-200">
                                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="flex justify-start mb-10">
                                    <GoogleOAuthProvider clientId="893619177983-rqsp4tvuer98m472857vjor93tpivdgl.apps.googleusercontent.com">
                                        <GoogleLogin
                                            size="large"
                                            width={900}
                                            
                                            onSuccess={credentialResponse => {
                                                console.log(credentialResponse);
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                        />


                                    </GoogleOAuthProvider>
                                    </div>
                                    
                                    
                                            <div className="text-center">or</div>
                                    <div class="relative">
                                        <input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
                                    </div>
                                    <div class="relative">
                                        <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>
                                   
                                        <div class="relative pt-10">
                                            <button class="bg-blue-500 text-white rounded-md px-2 py-1 w-full hover:bg-green-500 text-xl">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )
}
