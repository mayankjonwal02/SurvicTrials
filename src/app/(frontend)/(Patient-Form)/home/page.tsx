"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const home = () => {
    const router = useRouter();
    return (
        <div className='flex flex-col justify-start items-center h-screen w-screen '>
            <h1 className='text-2xl mt-7 mx-[20px] md:mx-[100px] text-green-5 font-bold text-center bg-white/30 py-6 px-3'>Upfront Surgery Vs Induction Chemotherapy Followed By Surgery In Oral Cavity Squamous Cell Cancers With Advanced Nodal Disease</h1>
            <h1 className='mt-4 font-bold '>{"(SurVic Trial)"}</h1>

            <h1 className='mt-1 font-bold '>{"A Phase 3 Multicentric Randomized Controlled Trial"}</h1>
            <div className='grow w-full flex flex-col  md:flex-row justify-center items-center gap-[30px]'>
                {/* <div>Add New Patient</div>
        <div>Update Patient Data</div>
        <div>View Data</div> */}
                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                ><Button className='bg-green-5 h-[70px] text-2xl' onClick={() => router.push('/inclusion_criteria')}>Add New Patient</Button></motion.button>

                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    
                ><Button className='bg-green-5 h-[70px] text-2xl' >Update Patient Data</Button></motion.button>

                <motion.button
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                ><Button className='bg-green-5 h-[70px] text-2xl'>View Data</Button></motion.button>
            </div>
        </div>
    )
}

export default home
