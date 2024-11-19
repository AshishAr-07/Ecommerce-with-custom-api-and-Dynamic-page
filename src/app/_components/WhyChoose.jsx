import React from 'react';
import { GiClothes } from "react-icons/gi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiAwardFill } from "react-icons/ri";

export default function WhyChoose() {
    const features = [
        {
            icon: <RiAwardFill className="hover-color transition-transform group-hover:scale-110" size={50} />,
            title: "Premium Quality",
            description: "Every piece is crafted with precision and care using the finest materials to ensure comfort, durability, and long-lasting wear."
        },
        {
            icon: <GiClothes className="hover-color transition-transform group-hover:scale-110" size={50} />,
            title: "Trendy Design",
            description: "Stay ahead of the fashion curve with our ever-evolving collections that cater to every taste and occasion."
        },
        {
            icon: <FaIndianRupeeSign className="hover-color transition-transform group-hover:scale-110" size={50} />,
            title: "Affordable Prices",
            description: "Look your best without breaking the bank. We believe everyone deserves access to stylish, high-quality clothing."
        }
    ];

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-6xl  mb-4">
                        Why Choose Us
                    </h2>
                    <div className="w-24 h-1 bg-color mx-auto rounded-full mb-4"></div>
                    <p className=" max-w-2xl mx-auto">
                        Discover the perfect blend of style, quality, and value with our exclusive collection
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-color transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            <div className="p-8">
                                <div className="mb-6 relative">
                                    {feature.icon}
                                    <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:bg-color transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-color transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}