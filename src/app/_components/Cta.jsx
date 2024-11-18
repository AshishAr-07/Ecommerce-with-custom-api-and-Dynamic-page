import React from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'

export default function Cta() {
  return (
    <>
<Wrapper>
    <div className='w-full flex flex-col rounded py-12 shadow-md gap-4 justify-center items-center'> 
    <h1 className="text-3xl font-medium text-center  ">Style Redefined: Shop the Trends That Define You!</h1>
    <Link href='#' ><button className="bg-color color border-0 mt-3 py-2 px-8 rounded text-lg  ">Contact Us</button></Link>
    </div> 
</Wrapper>
    </>
  )
}
