'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchProducts } from '@/Api'
import Wrapper from '@/app/_components/Wrapper'
import { metronome } from 'ldrs'
metronome.register()

export default function Product({ activepage = "product" }) {

  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(true)
  const FeaturedProduct = activepage == "homepage" ? Data.slice(0, 4) : Data;
  useEffect(() => {
    const Products = async () => {
      const data = await fetchProducts();
      setData(data);
      setLoading(false)

    }
    Products()
  }, [])

  return (
    <>
      <Wrapper>
        {Loading && (<div className="w-full h-screen flex justify-center items-center"><l-metronome
          size="40"
          speed="1.6"
          color="black"
        ></l-metronome></div>)}
        <h1 className='w-full text-center text-6xl pb-12'>{activepage === "homepage" ? "Featured Products" : "All Products"} </h1>
        <div className='grid relative grid-cols-1 md:grid-cols-2 md:px-4 lg:grid-cols-4 gap-6'>
          {FeaturedProduct.map((items, index) => (
            <Link className='group relative ' key={index} href='/product/slug'>
              <div className='flex flex-col '>
                <div

                  className='relative border rounded  hover:shadow-md'>
                  <Image
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:opacity-0" alt={items.title} width={540} height={720} src={items.image} />
                  <Image
                    className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" alt={items.title} width={540} height={720} src={items?.additionalimage[0]} />
                </div>
                <h2 className='pt-5 px-4'>{items.title}</h2>
                <h2 className='pt-2 px-4'>₹{items.price}</h2>


              </div></Link>
          ))}
        </div>
        {activepage === "homepage" &&
          (<div className='w-full text-center pt-6'><Link href='/product' ><button className="bg-color color border-0 mt-3 py-2 px-8 rounded text-lg  ">View All Products</button></Link></div>)
        }
      </Wrapper>
    </>
  )
}
