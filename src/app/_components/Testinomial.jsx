'use client'
import React from 'react'
import Wrapper from './Wrapper'
import { RiDoubleQuotesR } from "react-icons/ri";


const client = [
    {
        name: "Kamal Kumar",
        des: "I really want to thank you and your whole team from the bottom of my heart for making my wedding more than a dream.Every single person at the wedding was in awe of the decoration. You all managed everything so beautifully."
    },
    {
        name: "Rahul Sharma",
        des: "I really want to thank you and your whole team from the bottom of my heart for making my wedding more than a dream.Every single person at the wedding was in awe of the decoration. You all managed everything so beautifully."
    },
    
]

export default function Testimonial() {
    return (
        <Wrapper>
            <h1
                className='w-full text-center text-6xl pb-12'    >
                What Customer Says?
            </h1>
            <div
                className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {client.map((items, index) => (
                    <section
                        key={index}
                        className='flex flex-col gap-6 p-6 justify-center items-center  border-2 rounded-lg'   >
                        <span >
                            <RiDoubleQuotesR
                                size={50}
                                
                            />
                        </span>

                        <p className='text-center' >
                            {items.des}
                        </p>
                        <h2 className='text-xl '>
                            {items.name}
                        </h2>
                    </section>
                ))}
            </div>
        </Wrapper>
    );
}