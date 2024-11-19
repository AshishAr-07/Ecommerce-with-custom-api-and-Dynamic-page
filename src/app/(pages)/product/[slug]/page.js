'use client';

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchProducts } from "@/Api";
import Link from "next/link";
import { metronome } from 'ldrs'
metronome.register()



export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    loadProducts();
  }, []);

  const currentProduct = products[currentProductIndex] || {};

  const allImages = useMemo(
    () => [currentProduct.image, ...(currentProduct.additionalimage || [])].filter(Boolean),
    [currentProduct]
  );

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (currentProduct.image) {
      setMainImage(currentProduct.image);
    }
  }, [currentProduct]);

  useEffect(() => {
    if (!mainImage) return;

    const interval = setInterval(() => {
      const currentIndex = allImages.indexOf(mainImage);
      const nextIndex = (currentIndex + 1) % allImages.length;
      setMainImage(allImages[nextIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [mainImage, allImages]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  if (products.length === 0 || !mainImage) {
    return <div className="w-full h-screen flex justify-center items-center"><l-metronome
    size="40"
    speed="1.6" 
    color="black" 
  ></l-metronome></div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative  flex justify-center aspect-square overflow-hidden ">
            <Image
              src={mainImage}
              alt={currentProduct.title}
              height={720}
              width={540}
              priority = "property"
              className="transition-opacity  w-auto h-auto rounded-lg duration-300 hover:opacity-90"
            />
          </div>
          <Carousel className="w-full max-w-xs mx-auto" ref={emblaRef}>
            <CarouselContent>
              {allImages.map((image, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="p-1">
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="flex aspect-square items-center justify-center p-2">
                        <Image
                          src={image}
                          alt={`${currentProduct.title} - Image ${index + 1}`}
                          width={100}
                          height={100}
                          priority = "property"
                          className="rounded-md cursor-pointer object-cover hover:opacity-80 transition-opacity duration-300"
                          onClick={() => {
                            setMainImage(image);
                            scrollTo(index);
                          }}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{currentProduct.title}</h1>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl md:text-3xl font-semibold hover-color">
              ₹{currentProduct.saleprice}
            </span>
            <span className="text-lg md:text-xl text-gray-500 line-through">
              ₹{currentProduct.price}
            </span>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">Category</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-300 transition duration-300">
                {currentProduct.category}
              </span>
            </div>
          </div>
          
          <p className="text-lg pb-6">{currentProduct.shortdesc}</p>
         
          <Link href='/contact'>
            <button
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 btn-color font-semibold rounded-md shadow-md"
            >
             
              <span>Contact Now</span>
            </button>
          </Link>
         
          <h2 className="text-xl md:text-2xl font-semibold hover-color">Full Description</h2>
          <p className="text-lg leading-relaxed">{currentProduct.Decription}</p>
        </div>
      </div>
    </div>
    
  );
}