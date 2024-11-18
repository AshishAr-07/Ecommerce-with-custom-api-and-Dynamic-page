"use client";

import Wrapper from "@/app/_components/Wrapper";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone, LuMail } from "react-icons/lu";

export default function Component() {
  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.target);
      const formValues = Object.fromEntries(formData.entries());
      console.log("Form data:", formValues);
      event.target.reset();
      alert("Form Submitted Successfully");
    } catch (error) {
      throw error;
      alert("Error Please try Again Later");
    }
  };

  return (
    <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
<section className="flex flex-col gap-2 border-e py-2 justify-center items-center">
    <LuPhone size={52}/>
<h1 className="mt-2 text-2xl">Give us a Call</h1>
<p>+91-9870175083</p>
</section>
<section className="flex flex-col gap-2 border-e py-2 justify-center items-center">
    <LuMail size={52}/>
<h1 className="mt-2 text-2xl">Give us a Line</h1>
<p>hello@domain.com</p>
</section>
<section className="flex flex-col gap-2  py-2 justify-center items-center">
    <IoLocationOutline size={52}/>
<h1 className="mt-2 text-2xl"> Visit Us</h1>
<p>641 ,Satya the Hive</p>
</section>

        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.288074788611!2d76.96075877528283!3d28.470869875753362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17957da3b1e7%3A0xe31b6d39c72cc555!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1731919600012!5m2!1sen!2sin"
            width="600"
            height="450"
            
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section>
          <form
            className="bg-white border rounded-lg border-gray-200 py-8 md:px-16 px-8"
            onSubmit={handleSubmit}
          >
            <h1 className="pb-8 text-4xl font-bold">Get a Quote</h1>
            <div className="flex flex-col pb-4 gap-2">
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="border rounded-lg border-gray-200 py-2 px-3"
              />
            </div>
            <div className="flex flex-col pb-4 gap-2">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border rounded-lg border-gray-200 py-2 px-3"
              />
            </div>
            <div className="flex flex-col pb-4 gap-2">
              <label htmlFor="phone" className="text-xl">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="border rounded-lg border-gray-200 py-2 px-3"
              />
            </div>
            <div className="flex flex-col pb-4 gap-2">
              <label htmlFor="message" className="text-xl">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="border rounded-lg border-gray-200 p-3"
                rows={6}
              />
            </div>
            <button
              type="submit"
              className="xcel-btn-color w-full text-white text-xl  py-2 px-4 rounded-lg  transition-colors"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </Wrapper>
  );
}
