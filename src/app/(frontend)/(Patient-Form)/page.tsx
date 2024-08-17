"use client";
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import logo from '@/assets/aims_jodhpur2.png';
import icmr_logo from '@/assets/icmr_logo-transformed.png';
import aiims_b from '@/assets/AIIMS_Bhatinda.png';
import aiims_r from '@/assets/AIIMS_Rishikesh.png'
import aiims_bb from '@/assets/AIIMS_Bhubaneswar.png'
import kg from "@/assets/King_George's_Medical_University_Logo.png"
import gmch from "@/assets/gmch.png"
import sgrr from "@/assets/shri_guru_ram.png"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
const InfiniteScroll = require('react-infinite-scroller');
const WelcomePage = () => {
    const { scrollYProgress } = useScroll();
    const router = useRouter();
    return (
        <div className='w-full h-fit flex flex-col justify-center items-center'>
        
            <div className='w-full h-screen hidden md:flex flex-row justify-center items-center'>
                <motion.div
                    className='flex justify-center items-center w-1/3'
                    initial={{ x: "50%", scale: 0.4 }}
                    animate={{ x: ["50%", "50%", '-10%'], scale: [0.5, 1, 1] }}
                    transition={{ duration: 2, ease: 'easeInOut', times: [0, 0.5, 1] }}
                >
                    <img src={logo.src} alt="logo" className='w-full' />
                </motion.div>
                <motion.div
                    className='w-1/3 flex flex-col justify-center items-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}

                >
                    <h1 className='text-2xl md:text-6xl font-extrabold text-green-5 text-center'>SurVIC Trial</h1>
                    <p className='text-lg font-bold text-center text-green-5 mt-4'>Welcome to eCRF page of SurVIC Trial Collaborative, AIIMS Jodhpur</p>
                    <Button className='bg-green-3 text-green-5 border border-2 border-green-5 h-[40px] md:h-[40px] text-lg md:text-lg lg:text-xl mt-4' onClick={() => { router.push('/login') }}>Get Started</Button>
                </motion.div>
            </div>

            <div className='w-screen h-screen flex md:hidden flex-col justify-center items-center gap-[30px]'>
                <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 100
                }}
                    className='flex justify-center items-center w-2/3'
                    
                >
                    <img src={logo.src} alt="logo" className='w-full' />
                </motion.div>
                <motion.div
                    className='w-full flex flex-col justify-center items-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}

                >
                    <h1 className='text-4xl md:text-6xl font-extrabold text-green-5 text-center'>SurVIC Trial</h1>
                    <p className='text-lg font-bold text-center text-green-5 mt-4'>Welcome to eCRF page of SurVIC Trial Collaborative, AIIMS Jodhpur</p>
                    <Button className='bg-green-3 text-green-5 border border-2 border-green-5 h-[40px] md:h-[40px] text-lg md:text-lg lg:text-xl mt-4' onClick={() => { router.push('/login') }}>Get Started</Button>

                </motion.div>
            </div>

            <div className='w-full h-screen flex flex-col justify-center items-center gap-[30px] '>
                <h2 className="text-2xl md:text-5xl font-extrabold text-green-5 mt-[30px]">Contact Us</h2>

                <div className="w-full max-w-md p-6 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">

                    <div className="mb-4">
                        <h1 className="text-lg font-medium">Dr. Dharma Ram Poonia</h1>
                        <h1 className="text-gray-700">Associate Professor</h1>
                        <h1 className="text-gray-700">Department of Surgical Oncology</h1>
                        <h1 className="text-gray-700">AIIMS Jodhpur</h1>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-medium">Phone</h4>
                        <a href="tel:9958654196" className="text-blue-700 hover:text-purple-600">9958654196</a>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-medium">Email</h4>
                        <a href="mailto:drdharmapoonia@gmail.com" className="text-blue-700 hover:text-purple-600">drdharmapoonia@gmail.com</a><br />
                        <a href="mailto:pooniadr@aiimsjodhpur.edu.in" className="text-blue-700 hover:text-purple-600">pooniadr@aiimsjodhpur.edu.in</a>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-medium">Twitter</h4>
                        <a href="https://twitter.com/drdharmapoonia" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-purple-600">@drdharmapoonia</a>

                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-medium">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/dr-dharma-ram-poonia-8a79481a0/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-purple-600">Dr. Dharma Ram Poonia</a>

                    </div>
                </div>

            </div>


            {/* scaleX: scrollYProgress, scaleY: scrollYProgress */}


            <div className='w-full h-fit md:h-screen flex flex-col justify-center items-center gap-[30px] '>
                <div className='w-full h-fit flex flex-col justify-start items-center gap-[30px]'>

                    <motion.div style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='w-full'>
                        <div className='w-full text-2xl md:text-4xl font-extrabold text-green-5 text-center mt-[20px]'>
                            Sponsored By
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='w-full flex justify-center items-center'
                    >
                        <img src={icmr_logo.src} alt="logo" className='w-[40%] md:w-[15%] bg-green-1 rounded-full border border-2 border-black' />
                    </motion.div>
                </div>


                <div className='w-screen h-fit md:w-full flex flex-col justify-center items-center gap-[30px] '>

                    <motion.div style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='w-full'>
                        <div className='w-full text-2xl md:text-4xl font-extrabold text-green-5 text-center mt-[20px]'>
                            In Collaboration with
                        </div>
                    </motion.div>

                        <div className='w-[80%] flex flex-col   md:flex-row  justify-around items-center gap-[20px]'>

                            <motion.div
                                style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='flex justify-center items-center w-[40%] md:w-[15%] mx-2'
                            >
                                <img src={aiims_b.src} alt="logo" className='w-full bg-green-1 rounded-full border border-2 border-black' />
                            </motion.div>

                            <motion.div
                                style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='flex justify-center items-center w-[40%] md:w-[15%] mx-2'
                            >
                                <img src={aiims_r.src} alt="logo" className='w-full  rounded-full  ' />
                            </motion.div>

                            <motion.div
                                style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='flex justify-center items-center w-[40%] md:w-[15%] mx-2'
                            >
                                <img src={aiims_bb.src} alt="logo" className='w-full  rounded-full ' />
                            </motion.div>

                            <motion.div
                                style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='flex justify-center items-center w-[40%] md:w-[15%] mx-2'
                            >
                                <img src={kg.src} alt="logo" className='w-full ' />
                            </motion.div>

                            <motion.div
                                style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='flex justify-center items-center w-[40%] md:w-[15%] mx-2'
                            >
                                <img src={gmch.src} alt="logo" className='w-full ' />
                            </motion.div>

                            <motion.div
                                style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }} className='flex justify-center items-center w-[40%] md:w-[15%] mx-2'
                            >
                                <img src={sgrr.src} alt="logo" className='w-full ' />
                            </motion.div>


                        </div>

                   







                </div>
            </div>
            <div className="w-full h-fit py-3 text-center bg-green-3 text-green-5">Developed by <b><a className="underline" href="https://www.linkedin.com/in/mayank-jonwal-b79a5a1ba/">Mayank Jonwal</a></b> from <b><a className="underline" href="https://www.iitj.ac.in/">IIT Jodhpur</a></b></div>

        </div>
    );
};

export default WelcomePage;
//  & <b className="underline"><a href="https://www.linkedin.com/in/dasanivishu/">Vishal Dasani</a></b>