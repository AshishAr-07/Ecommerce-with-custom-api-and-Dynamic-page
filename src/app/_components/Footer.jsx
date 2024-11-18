import React from 'react'
import Wrapper from './Wrapper'
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone, LuMail } from "react-icons/lu";
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='w-full bg-color  '>
      <Wrapper className='pb-0'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 py-2 '>
          <section className='flex flex-col gap-2 color'>
            <Link href='/'><Image width={150} height={50} alt='logo' src="/logo.png" /></Link>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.veniam quaerat vitae iure aliquid nam officiis.</h2>
            <div className='flex gap-2 mt-2'>
<Link href='#'><span><FaInstagram size={22}  /></span></Link>
<Link href='#'> <span><FaFacebookSquare size={22}  /></span></Link>
<Link href='#'><span><FaWhatsapp size={22}  /></span></Link>
            </div>
          </section>
          <section className='flex flex-col gap-6 mt-6 color'>
            
            <h2 className='flex gap-5 items-center'><IoLocationOutline size={28} /> 641, Satya The Hive</h2>
            <h2 className='flex gap-5 items-center'><LuPhone size={25} /> +91 9870175083</h2>
            <h2 className='flex gap-5 items-center'><LuMail size={25} /> hello@domain.com</h2>

          </section>
          <section className= ' flex flex-col gap-2 color'>
            <h1 className='text-xl pb-2 font-medium '>Useful Links</h1>
            <Link href='#' ><h2>Home</h2></Link>
            <Link href='#' ><h2>About</h2></Link>
            <Link href='#' ><h2>Products</h2></Link>
            <Link href='#' ><h2>Contact</h2></Link>
          </section>
          


        </div>
        <div className='w-full mt-8 text-lg  pt-4 border-t border-white color'><p className='text-center'>© Furni 2024 | All Rights Reserved | Design By Xcel B2B </p></div>
      </Wrapper>
    </div>
  )
}
