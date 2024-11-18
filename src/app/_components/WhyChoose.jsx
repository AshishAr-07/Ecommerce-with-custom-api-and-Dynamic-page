import React from 'react'
import Wrapper from './Wrapper'
import { GiClothes } from "react-icons/gi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiAwardFill } from "react-icons/ri";

export default function WhyChoose() {
    return (
        <>
            <Wrapper>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <section className='flex flex-col border-2 items-center py-12 shadow-md px-4 gap-4'>
                        <RiAwardFill size={50}/>
                        <h1 className='text-4xl'>Premium Quality</h1>
                        <p className='text-center'>Every piece is crafted with precision and care using the finest materials to ensure comfort, durability, and long-lasting wear.</p>
                    </section>
                    <section className='flex flex-col border-2 items-center py-12 shadow-md px-4 gap-4'>
                    <GiClothes size={50}/>
                        <h1 className='text-4xl'>Trendy Design</h1>
                        <p className='text-center'>Stay ahead of the fashion curve with our ever-evolving collections that cater to every taste and occasion.</p>
                    </section>
                    <section className='flex flex-col border-2 items-center py-12 shadow-md px-4 gap-4'>
                        <FaIndianRupeeSign size={50}/>
                        <h1 className='text-4xl'>Affordable Prices</h1>
                        <p className='text-center'>Look your best without breaking the bank. We believe everyone deserves access to stylish, high-quality clothing.</p>
                    </section>
                </div>

            </Wrapper>
        </>
    )
}
