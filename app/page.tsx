
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [photo4, setPhoto4] = useState("");
  const [photo5, setPhoto5] = useState("");
  const [photo6, setPhoto6] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then((res) => res.json())
      .then((data) => setPhoto1(data.url));

   
    fetch("https://jsonplaceholder.typicode.com/photos/2")
      .then((res) => res.json())
      .then((data) => setPhoto2(data.url));

   
    fetch("https://jsonplaceholder.typicode.com/photos/3")
      .then((res) => res.json())
      .then((data) => setPhoto3(data.url));

   
    fetch("https://jsonplaceholder.typicode.com/photos/4")
      .then((res) => res.json())
      .then((data) => setPhoto4(data.url));

  
    fetch("https://jsonplaceholder.typicode.com/photos/5")
      .then((res) => res.json())
      .then((data) => setPhoto5(data.url));

 
    fetch("https://jsonplaceholder.typicode.com/photos/6")
      .then((res) => res.json())
      .then((data) => setPhoto6(data.url));

  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <h1 className="mb-8 text-center text-4xl font-bold text-black">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {photo1 && (
          <img
            src={photo1}
            alt="Photo 1"
            className="h-64 w-full rounded-lg object-cover shadow-md"
          />
        )}

      
        {photo2 && (
          <img
            src={photo2}
            alt="Photo 2"
            className="h-64 w-full rounded-lg object-cover shadow-md"
          />
        )}

       
        {photo3 && (
          <img
            src={photo3}
            alt="Photo 3"
            className="h-64 w-full rounded-lg object-cover shadow-md"
          />
        )}

   
        {photo4 && (
          <img
            src={photo4}
            alt="Photo 4"
            className="h-64 w-full rounded-lg object-cover shadow-md"
          />
        )}

   
        {photo5 && (
          <img
            src={photo5}
            alt="Photo 5"
            className="h-64 w-full rounded-lg object-cover shadow-md"
          />
        )}

    
        {photo6 && (
          <img
            src={photo6}
            alt="Photo 6"
            className="h-64 w-full rounded-lg object-cover shadow-md"
          />
        )}

      </div>

    </main>
  );
}
