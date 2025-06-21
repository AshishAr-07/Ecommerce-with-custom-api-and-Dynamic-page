'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = {
    'Shipping & Delivery': [
      {
        question: 'How long will it take to receive my order?',
        answer: (
          <ul className="list-disc pl-4">
            <li>Domestic orders: 2-5 business days</li>
            <li>International orders: 7-14 business days</li>
            <li>Express shipping options available at checkout</li>
          </ul>
        )
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location.'
      }
    ],
    'Returns & Exchanges': [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for unworn items in original condition with tags attached. Return shipping is free for domestic orders.'
      },
      {
        question: 'How do I initiate a return?',
        answer: (
          <ol className="list-decimal pl-4">
            <li>Log into your account</li>
            <li>Find your order</li>
            <li>Select Start Return</li>
            <li>Follow the instructions to print your return label</li>
          </ol>
        )
      }
    ],
   
    
  };

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-6xl text-center mb-12">
        Frequently Asked Questions
      </h1>

      {Object.entries(faqData).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold  mb-4">{category}</h2>
          
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(category, index)}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium ">{item.question}</span>
                <ChevronDown
                  className={`transform transition-transform duration-200 ${
                    openItems[`${category}-${index}`] ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openItems[`${category}-${index}`]
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-4 ">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;