'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactDown } from "react-icons/bs";



export default function Seguridad(){

    const seguridadSlides = [
        {
            id:"1",
            title: "SISTEMA DE ALERTA TEMPRANA",
            description: "Tercer ojo",
            img:"/images/ojo.png"

        },
        {
            id:"2",
            title: "SISTEMA DE CONTROL DE PASAJEROS",
            img:"/images/pasajeros.png"

        },
        {
            id:"3",
            title: "MODELO CANBUS",
            img:"/images/odometro.png"

        },
        {
            id:"4",
            title: "SISTEMAS DE GEOLOCALIZACIÓN",
            img:"/images/geolocalizacion.jpg",
        },
        {
            id:"5",
            title: "SISTEMAS DE DVR",
            img:"/images/camara.png",
        },
        {
            id:"5",
            title: "SISTEMA AUTOMÁTICO DE EXTINCIÓN DE INCENDIOS",
            img:"/images/extintor.png",
        },


    ]

    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? seguridadSlides.length - 1 : currentIndex - 1;
        console.log("Nuevo índice", newIndex)

        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === seguridadSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        console.log("Nuevo índice", newIndex)
        setCurrentIndex(newIndex);
      };
      
      const goToSlide = (slideIndex:any) => {
        setCurrentIndex(slideIndex);
      };

    return(
        <div className='bg-blue-800'>
            <div>
                <h1 className=' mx-auto text-white text-4xl pl-24 pb-12 text-start font-bold'>SEGURIDAD</h1>
            </div>
                {/* ESCRITORIO */}
            <div className='sm:flex hidden pb-10 flex justify-center mx-max gap-10'>
                <div className='bg-white w-60 text-center cursor-pointer'>
                <h1 className='mt-2 mx-1'>{seguridadSlides[0].title}</h1>
                    <p>{seguridadSlides[0].description}</p>
                    <img src={seguridadSlides[0].img} alt="" className='mx-auto w-full h-56'/>
                </div>
                <div className='bg-white w-60 text-center cursor-pointer'>
                <h1 className='mt-2 mx-1'>{seguridadSlides[1].title}</h1>
                    <img src={seguridadSlides[1].img} alt="" className='mx-auto w-48'/>
                </div>
                <div className='bg-white w-60 text-center cursor-pointer'>
                   <h1 className='mt-2 mx-1'>{seguridadSlides[2].title}</h1>
                    <img src={seguridadSlides[2].img} alt="" className='mx-auto w-48'/>
                </div>

            </div>
            <div className='sm:flex hidden pb-24 flex justify-center mx-max gap-10'>
                <div className='bg-white w-60 text-center cursor-pointer'>
                <h1 className='mt-2 mx-1'>{seguridadSlides[3].title}</h1>
                    <img src={seguridadSlides[3].img} alt="" className='mx-auto w-48'/>
                </div>
                <div className='bg-white w-60 text-center cursor-pointer'>
                <h1 className='mt-2 mx-1'>{seguridadSlides[4].title}</h1>
                    <img src={seguridadSlides[4].img} alt="" className='mx-auto w-48'/>
                </div>
                <div className='bg-white w-60 text-center cursor-pointer'>
                <h1 className='mt-2 mx-1'>{seguridadSlides[5].title}</h1>
                    <img src={seguridadSlides[5].img} alt="" className='mx-auto w-48' />
                </div>

            </div>

            {/* RESPONSIVE */}
            <div className='sm:hidden pb-10 flex justify-center mx-max gap-10'>
            <div className='bg-white w-60 text-center ml-12'>
                    <h1 className='mt-2 mx-1'>{seguridadSlides[currentIndex].title}</h1>
                    <p>{seguridadSlides[currentIndex].description}</p>
                    <img src={seguridadSlides[currentIndex].img} alt="" className='mx-auto w-48' />
                </div>
                <div className="pb-24 mt-24">
                         {/* Left Arrow */}
                        <div className="group-hover:block absolute bg-white translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-blue-500 cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                        </div>
                        {/* Right Arrow */}
                        <div className=" group-hover:block absolute bg-white  translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-blue-500 cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                        </div>
          </div>
            </div>
        </div>
    )
}