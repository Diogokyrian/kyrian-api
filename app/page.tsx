
"use client";

import { useEffect, useState } from "react";

interface Photo {
  id: number;
  title: string;
  url: string;
}

export default function Home() {
  const [photoOne, setPhotoOne] = useState<Photo | null>(null);
  const [photoTwo, setPhotoTwo] = useState<Photo | null>(null);
  const [photoThree, setPhotoThree] = useState<Photo | null>(null);
  const [photoFour, setPhotoFour] = useState<Photo | null>(null);
  const [photoFive, setPhotoFive] = useState<Photo | null>(null);
  const [photoSix, setPhotoSix] = useState<Photo | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then((response) => response.json())
      .then((data) => setPhotoOne(data));

    fetch("https://jsonplaceholder.typicode.com/photos/2")
      .then((response) => response.json())
      .then((data) => setPhotoTwo(data));

    fetch("https://jsonplaceholder.typicode.com/photos/3")
      .then((response) => response.json())
      .then((data) => setPhotoThree(data));

    fetch("https://jsonplaceholder.typicode.com/photos/4")
      .then((response) => response.json())
      .then((data) => setPhotoFour(data));

    fetch("https://jsonplaceholder.typicode.com/photos/5")
      .then((response) => response.json())
      .then((data) => setPhotoFive(data));

    fetch("https://jsonplaceholder.typicode.com/photos/6")
      .then((response) => response.json())
      .then((data) => setPhotoSix(data));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-10 text-center text-4xl font-extrabold text-gray-900">
          Photo Gallery
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {photoOne && (
            <img
              src={photoOne.url}
              alt="Photo 1"
              className="h-64 w-full rounded-xl object-cover shadow-md"
            />
          )}

          {photoTwo && (
            <img
              src={photoTwo.url}
              alt="Photo 2"
              className="h-64 w-full rounded-xl object-cover shadow-md"
            />
          )}

          {photoThree && (
            <img
              src={photoThree.url}
              alt="Photo 3"
              className="h-64 w-full rounded-xl object-cover shadow-md"
            />
          )}

          {photoFour && (
            <img
              src={photoFour.url}
              alt="Photo 4"
              className="h-64 w-full rounded-xl object-cover shadow-md"
            />
          )}

          {photoFive && (
            <img
              src={photoFive.url}
              alt="Photo 5"
              className="h-64 w-full rounded-xl object-cover shadow-md"
            />
          )}

          {photoSix && (
            <img
              src={photoSix.url}
              alt="Photo 6"
              className="h-64 w-full rounded-xl object-cover shadow-md"
            />
          )}

        </div>
      </div>
    </main>
  );
}
