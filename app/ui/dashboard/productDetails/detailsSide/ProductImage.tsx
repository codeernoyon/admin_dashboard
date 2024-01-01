"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductImage = ({ data }: any) => {
  const { image } = data[0];
  const imageRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(image);
  const [slideWidth, setSlideWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index >= 3) return;
    setIndex(index + 1);
  };
  const prvSlide = () => {
    if (index <= 0) return;
    setIndex((prv) => prv - 1);
  };
  const mapping = [1, 2, 3, 4];
  useEffect(() => {
    if (imageRef.current) {
      const width = imageRef.current.offsetWidth;
      setSlideWidth(width);
    }
  }, []);

  return (
    <div className=" max-w-[330px] z-[9999] bg-main_clr">
      {/* main images */}
      <div className="bg-mainBg bg-opacity-10 rounded-md flex items-center px-2 py-5">
        {/* left arrow */}
        <div
          className={`p-2 w-fit rounded-md text-[#c691f8] bg-mainBg bg-opacity-50 cursor-pointer ${
            index === 0 && "pointer-events-none opacity-30 e"
          }`}
          onClick={() => prvSlide()}
        >
          <IoIosArrowBack />
        </div>
        {/* slide images */}
        <div className=" overflow-hidden">
          <div
            className={`flex min-w-[${
              slideWidth * 4 + "px"
            }]  transition-all duration-500`}
            style={{ translate: `-${slideWidth * index}px` }}
          >
            {mapping.map((index) => (
              <div
                key={index + 32}
                ref={imageRef}
                className="relative min-w-[250px] h-[260px] "
              >
                <Image
                  src={currentImage}
                  alt="photo"
                  width={380}
                  height={280}
                />
              </div>
            ))}
          </div>
        </div>
        {/* right arrow */}
        <div
          className={`p-2 w-fit rounded-md text-[#c691f8] bg-mainBg bg-opacity-50 cursor-pointer ${
            index === 3 && "pointer-events-none opacity-30 e"
          }`}
          onClick={() => nextSlide()}
        >
          <IoIosArrowForward />
        </div>
      </div>
      {/* others product images */}
      <div className="mt-10 flex items-center gap-2">
        {mapping.map((i) => (
          <div
            key={i}
            className={`border-mainBg border-opacity-60 border p-1 w-fit rounded-md cursor-pointer ${
              index === i - 1 && "bg-mainBg bg-opacity-20"
            }`}
            onClick={() => setIndex(i - 1)}
          >
            <Image src={currentImage} alt="photo" height={80} width={80} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
