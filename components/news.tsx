'use client'
import React, {useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";


export default function News(){

    const newsSlides = [
        {
            id:"1",
            img: "/images/bus2.jpg",
            title: "LOREM IPSUM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum",
            link: "Leer más"
        },
        {
            id:"2",
            img: "/images/bus2.jpg",
            title: "LOREM I",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum",
            link: "Leer más"
        },
        {
            id:"3",
            img: "/images/bus2.jpg",
            title: "LOREM IPS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum",
            link: "Leer más"
        },
        {
            id:"4",
            img: "/images/bus2.jpg",
            title: "LORE IPSUM",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum",
            link: "Leer más"
        },


    ]

    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? newsSlides.length - 1 : currentIndex - 1;
        console.log("Nuevo índice", newIndex)

        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === newsSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        console.log("Nuevo índice", newIndex)
        setCurrentIndex(newIndex);
      };
      
      const goToSlide = (slideIndex:any) => {
        setCurrentIndex(slideIndex);
      };

    return(
      <div className="w-full h-full sm:pb-44 pb-16 justify-center flex gap-8">

         {/* ESCRITORIO */}
         <div className="sm:flex hidden  gap-16 mx-24">
          <div className="">
                  <Image
                        src={'/images/bus2.jpg'}
                        alt='Logo'
                        width={450}
                        height={4}
                        className='w-full'
                        />
            <div className="flex h-12 text-start">      
              <div className="bg-white my-30 pb-48">
                <div className="duration-100">
                  <span className="text-sky-700 text-2xl ml-4 mb-48"><b>{newsSlides[0].title}</b></span>
                  <p className="px-4 h-4/5">{newsSlides[0].description}</p>
                </div>
                <div className="text-end">
                    <p className="cursor-pointer text-sky-800 font-bold py-2 px-12  rounded-lg">{newsSlides[0].link}</p>
                </div>
              </div>
              
            </div>  
          </div>
          <div className="">
                  <Image
                        src={'/images/bus2.jpg'}
                        alt='Logo'
                        width={450}
                        height={4}
                        className='w-full'
                        />
            <div className="flex h-12 text-start">      
              <div className="bg-white my-30 pb-48">
                <div className="duration-100">
                  <span className="text-sky-700 text-2xl ml-4 mb-48"><b>{newsSlides[1].title}</b></span>
                  <p className="px-4 h-4/5">{newsSlides[1].description}</p>
                </div>
                <div className="text-end">
                    <p className="cursor-pointer text-sky-800 font-bold py-2 px-12 w rounded-lg">{newsSlides[1].link}</p>
                </div>
              </div>
              
            </div>  
          </div>
          <div >
                  <Image
                        src={'/images/bus2.jpg'}
                        alt='Logo'
                        width={450}
                        height={4}
                        className='w-full'
                        />
            <div className="flex h-12 text-start">      
              <div className="bg-white my-30 pb-48">
                <div className="duration-100">
                  <span className="text-sky-700 text-2xl ml-4 mb-48"><b>{newsSlides[2].title}</b></span>
                  <p className="px-4 h-4/5">{newsSlides[2].description}</p>
                </div>
                <div className="text-end">
                    <p className="cursor-pointer text-sky-800 font-bold py-2 px-12 w rounded-lg">{newsSlides[2].link}</p>
                </div>
              </div>
              
            </div>  
          </div>
          <div className="" >
                  <Image
                        src={'/images/bus2.jpg'}
                        alt='Logo'
                        width={450}
                        height={4}
                        className='w-full'
                        />
            <div className="flex h-12 text-start">      
              <div className="bg-white my-30 pb-48">
                <div className="duration-100">
                  <span className="text-sky-700 text-2xl ml-4 mb-48"><b>{newsSlides[3].title}</b></span>
                  <p className="px-4 h-4/5">{newsSlides[3].description}</p>
                </div>
                <div className="text-end">
                    <p className="cursor-pointer text-sky-800 font-bold py-2 px-12 w rounded-lg">{newsSlides[3].link}</p>
                </div>
              </div>
              
            </div>  
          </div>
        </div>





        {/* RESPONSIVE */}
        <div className="sm:hidden duration-100 mr-24 ml-28">
          <div>
                <Image
                  src={'/bus2.jpg'}
                  alt='Logo'
                  width={450}
                  height={4}
                  className=''
                />
                    {newsSlides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-xl cursor-pointer">
                    </div>
                    ))}
            <div className="flex text-start">      
              <div className="bg-white w-60 ">
                <div className="duration-100 mt-4">
                  <span className="text-sky-700 text-2xl"><b>{newsSlides[currentIndex].title}</b></span>
                  <p className="mt-2">{newsSlides[currentIndex].description}</p>
                </div>
                <div className="text-end">
                  <p className="cursor-pointer text-sky-800 font-bold py-2 px-12 w rounded-lg">{newsSlides[currentIndex].link}</p>
                </div>
              </div>
            </div>  
          </div>
        </div>
        
        <div className="sm:hidden">
          {/* Left Arrow */}
            <div className=" absolute top-[60%] sm:top-[50%] bg-white -translate-x-0 translate-y-[-50%] ml-6 mb-24 left-1 sm:left-60 text-2xl rounded-full pl-35 text-black cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
          {/* Right Arrow */}
          <div className=" absolute top-[60%] sm:top-[50%] bg-white -translate-x-0 translate-y-[-50%] mr-10 mb-18 right-1 sm:left-60 text-2xl rounded-full pl-35 text-black cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>  
            
      </div>
    )
}