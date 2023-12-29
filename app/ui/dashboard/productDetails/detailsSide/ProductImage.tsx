"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductImage = ({ data }: any) => {
  const { image } = data[0];
  const [currentImage, setCurrentImage] = useState(image);

  return (
    <div className="">
      {/* main images */}
      <div className="bg-mainBg bg-opacity-10 rounded-md flex items-center px-2 py-5">
        {/* left arrow */}
        <div className="p-2 w-fit rounded-md text-slate-400 bg-mainBg bg-opacity-20 cursor-pointer">
          <IoIosArrowBack />
        </div>
        {/* slide images */}
        <div>
          <Image src={currentImage} alt="photo" height={450} width={300} />
        </div>
        {/* right arrow */}
        <div className="p-2 w-fit rounded-md text-[#c691f8] bg-mainBg bg-opacity-50 cursor-pointer">
          <IoIosArrowForward />
        </div>
      </div>
      {/* others product images */}
      <div className="mt-10 flex items-center gap-2">
        <div className="border-green-900 border p-1 w-fit rounded-md">
          <Image src={currentImage} alt="photo" height={80} width={80} />
        </div>
        <div className="border-green-900 border p-1 w-fit rounded-md">
          <Image src={currentImage} alt="photo" height={80} width={80} />
        </div>
        <div className="border-green-900 border p-1 w-fit rounded-md">
          <Image src={currentImage} alt="photo" height={80} width={80} />
        </div>
        <div className="border-green-900 border p-1 w-fit rounded-md">
          <Image src={currentImage} alt="photo" height={80} width={80} />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
