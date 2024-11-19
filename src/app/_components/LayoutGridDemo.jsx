"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";


export function LayoutGridDemo() {
  return (
    (<div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>)
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail:
      "H1.png",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail:
      "H2.png",
  },
  {
    id: 3,
   
    className: "col-span-1",
    thumbnail:
      "H2.png",
  },
  {
    id: 4,
    
    className: "md:col-span-2",
    thumbnail:
      "H1.png",
  },
];
