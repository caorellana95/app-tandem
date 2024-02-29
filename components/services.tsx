'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsChevronCompactDown } from "react-icons/bs";



// Hacer un carrusel rotativo
export default function Services(){

    const servicesSlides = [
        {
            id:"1",
            title: "INTERNO",
            info: "Mina - Planta - Campamento",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            descriptionRp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"

        },
        {
            id:"2",
            title: "EXTERNO",
            info: "Ciudad - Faena",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            descriptionRp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
        },
        {
            id:"3",
            title: "INTERREGIONAL",
            info: "Cambios de turno",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            descriptionRp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
        },
        {
            id:"4",
            title: "LORE IPSUM",
            info: "Lorem ipsum dolor sit amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            descriptionRp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
        },


    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [menuDown, setMenuDown] = useState(false);
    const [selectedSlide, setSelectedSlide] = useState(0);



    const goToSlide = (slideIndex:any) => {
        setCurrentIndex(slideIndex);
        setSelectedSlide(slideIndex);

    };

    const desplegarAbajo = () => {
        setMenuDown(!menuDown)
    }


    return(
        <div className='bg-white'>
            <div className="w-3/4 mx-auto text-center">
                <h1 className="sm:text-5xl text-xl sm:p-12 pt-8 sm:no-underline underline underline-offset-4 text-sky-700 font-bold">MIRA LOS SERVICIOS QUE TANDEM PUEDE OFRECERTE</h1>
            </div>
            <div className='sm:flex pb-12 pt-20 sm:ml-4 sm:mx-2 sm:gap-12 overflow-hidden'>
                    <div>
                    <div className="sm:flex hidden items-center ">
                            {servicesSlides.map((slide, slideIndex) => (
                            <div
                            key={slide.id}
                            onClick={() => goToSlide(slideIndex)}
                            className={`cursor-pointer mx-4 sm:w-3/5 w-3/5 h-72 bg-no-repeat text-center border-2 sm:h-[530px] ${selectedSlide === slideIndex ? 'scale-125 z-10' : 'scale-100'}`}
                            >
                                <div className="sm:mx-auto sm:mt-4 text-center sm:my-30 sm:pb-4">
                                        <div className="">
                                            <div className='my-2 sm:py-48 sm:mt-2 border-2 sm:h-full h-36 w-36 sm:w-4/5 mx-auto sm:pb-12'></div>
                                            <span className="text-sky-700 mt-12 sm:mt-24 text-2xl sm:text-2xl"><b>{slide.title}</b></span>
                                            <p className="sm:h-4/5 text-sky-700 sm:px-4 sm:mx-8 mt-2 sm:text-xl">{slide.info}</p>
                                        </div>
                                    </div>
                            </div>
                            ))}     
                        </div>
                        <div className="sm:hidden cursor-pointer mx-auto sm:my-auto sm:object-center sm:w-1/5 w-3/5 h-72 bg-no-repeat text-center border-2 sm:h-[450px] ">
                        <div className="sm:flex ">     
                            <div className="sm:mx-auto sm:mt-4 text-center sm:my-30 sm:pb-4 ">
                                <div className="">
                                    <div className='text-2xl my-4 sm:py-48 sm:mt-2 border-2 sm:h-full h-36 w-36 sm:w-4/5 mx-auto sm:pb-12'></div>
                                    <span className="text-sky-700 mt-12 sm:mt-24 text-2xl sm:text-3xl"><b>{servicesSlides[currentIndex].title}</b></span>
                                    <p className="sm:h-4/5 text-sky-700 sm:px-4 sm:mx-8 mt-2 sm:text-2xl">{servicesSlides[currentIndex].info}</p>
                                    <div className="sm:hidden cursor-pointer bg-gray-300">
                                <BsChevronCompactDown onClick={desplegarAbajo} size={50} className='ml-24' />
                                </div>
                                </div>
                            </div>
                        </div>  
                    </div>  
                    </div>              
                    <div className="sm:hidden mx-auto sm:my-auto mt-12 object-center sm:w-2/5 w-3/5 bg-no-repeat text-center border-2 h-120 ">
                        <div className='sm:hidden'>
                            <div className=''>
                                {menuDown && (
                                    <div className=''>
                                        <span className="text-sky-700 ml-4 text-2xl my-24"	><b>{servicesSlides[currentIndex].title}</b></span>
                                        <p className="h-4/5 px-4 mx-12 sm:mx-24">{servicesSlides[currentIndex].info}</p>
                                        <p className="sm:hidden cursor-pointer text-sky-800 text-start py-2 px-1 ml-2 rounded-lg">{servicesSlides[currentIndex].descriptionRp}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='sm:hidden py-6 pb-24 flex flex-col items-center mx-max grow w-full'>
                                <div className='bg-gray-400 w-60'>
                                </div>
                                <div className='flex mt-4'>
                                    {servicesSlides.map((slide, slideIndex) => (
                                        <div
                                            key={slideIndex}
                                            onClick={() => goToSlide(slideIndex)}
                                            className={`mx-1 w-4 text-5xl cursor-pointer ${selectedSlide === slideIndex ? 'text-black' : 'text-gray-400'}`}
                                            >
                                            &#8226;
                                        </div>
                                    ))}
                                </div>                
                            </div>
                    <div className="sm:flex hidden mx-auto sm:my-auto mt-12 pb-12 object-center sm:w-2/5 w-3/5 bg-no-repeat text-center border-2 h-120 ">
                        <div className='sm:visible'>
                            <span className=" text-sky-700 ml-4 text-4xl my-24 sm:mt-12"><b>{servicesSlides[currentIndex].title}</b></span>
                            <p className=" px-4 mx-12 text-sky-800 text-3xl sm:mt-12 sm:mb-6">{servicesSlides[currentIndex].info}</p>
                            <p className="cursor-pointer text-start text-sky-800 text-2xl sm:mt-2  py-2 px-12 rounded-lg">{servicesSlides[currentIndex].description}</p>
                        </div>
                    </div>
                </div>
                <div className='sm:flex p-8 sm:ml-12 sm:my-30 my-1'>
                    <div className='sm:ml-20 sm:my-auto sm:w-3/5 w-11/12 ml-4 sm:h-2/5 text-center sm:gap-24 border-2 '>
                        <div className='text-2xl sm:my-72 sm:mt-96 my-12'>
                        <Image
                            alt='Logo'
                            src={'/images/play.png'}
                            width={100}
                            height={54}
                            className='cursor-pointer sm:mt-36 mx-auto mt-12 '
                        />
                        </div>
                    </div>
                    <div className='pb-12 pt-12 '>
                        <div className='sm:flex mx-auto sm:ml-20 sm:my-auto sm:w-4/5 w-11/12 h-1/2 bg-no-repeat  text-center rounded-xl border-2 '>
                            <h1 className='text-center sm:text-4xl sm:py-28 text-xl font-bold text-sky-700 sm:pb-24'>Texto Persuasivo para llevar al usuario a generar el Leads</h1>
                        </div>
                        <div className='sm:flex mx-auto sm:ml-20 sm:w-4/5 w-11/12 h-1/2 bg-no-repeat text-center rounded-xl border-2 '>
                            <h1 className='text-center sm:h-4/5 sm:px-72 sm:py-24 py-4 sm:text-4xl text-2xl text-sky-700 font-bold'>CTA</h1>                    
                        </div>
                    </div>
                </div>
                
        </div>
    )
}