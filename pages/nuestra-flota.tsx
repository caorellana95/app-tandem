import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Header2 from '@/components/header2';
import Flota from '@/components/flota';
import FooterIndustrial from '@/components/footer-industrial';
import { BsChevronCompactLeft, BsChevronCompactRight, BsChevronCompactDown } from "react-icons/bs";
import FlotaImagenes from '@/components/flota-imagenes';




export default function NuestraFlota(){

    const flotaSlides = [
        {
            id:"1",
            img:"/images/tandem-bus.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            descriptionDk: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            
        },
        {
            id:"2",
            img:"/images/bus.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            descriptionDk: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        },
        {
            id:"3",
            img:"/images/bus2.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            descriptionDk: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

        },
        {
            id:"4",
            img:"/images/tandem-bus.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            descriptionDk: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


        },
        {
            id:"5",
            img:"/images/bus.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            descriptionDk: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id:"5",
            img:"/images/bus2.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            descriptionDk: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


        },


    ]

    const router = useRouter();
    const redirectToContacto = () => {
        router.push('/contacto');
    };

    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? flotaSlides.length - 1 : currentIndex - 1;
        console.log("Nuevo índice", newIndex)

        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === flotaSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        console.log("Nuevo índice", newIndex)
        setCurrentIndex(newIndex);
      };

    return(
        <div className=''>
            <Head>
                <title>Tandem Industrial | Nuestra Flota</title>
            </Head>
            <div className='bg-white pb-12'>
                <Header2/>
                <div className=''>
                <h1 className='text-blue-600 font-bold text-4xl text-center sm:ml-48 sm:text-start mt-24'>FLOTA</h1>
                </div>
                <div className='mt-12'>
                <p className='sm:mx-14 pb-10 text-blue-500 text-2xl sm:mx-12 ml-4 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                
                <div className='pb-10 flex justify-center sm:justify-start mx-max'>
            <div className='sm:flex bg-white w-max mx-12'>
                <Image
                    alt='Logo'
                    src={flotaSlides[currentIndex].img}
                    width={200}
                    height={4}
                    className='sm:mr-12 mx-auto sm:w-96 sm:h-max pb-8 sm:ml-48'
                                    />
                    <div className=' sm:mr-48'>
                        <h1 className='font-bold text-3xl text-blue-600 pb-6 sm:ml-0 ml-12'>Características</h1>
                        <p className='sm:hidden text-blue-600 sm:text-start text-center'>{flotaSlides[currentIndex].description}</p>
                        <p className='sm:flex hidden text-2xl text-blue-600  mr-2 text-start'>{flotaSlides[currentIndex].descriptionDk}</p>


                    </div>
                </div>
                <div className="pb-24 mt-24">
                         {/* Left Arrow */}
                        <div className="group-hover:block absolute bg-orange-400 translate-x-0 translate-y-[-50%] left-5 sm:left-20 text-2xl rounded-full sm:p-2 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={50} />
                        </div>
                        {/* Right Arrow */}
                        <div className=" group-hover:block absolute bg-orange-400 translate-x-0 translate-y-[-50%] right-5 sm:right-20 text-2xl rounded-full sm:p-2 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={50} />
                        </div>
                </div>
            </div>
                <div>
                    <h1 className='sm:flex hidden text-3xl text-blue-600 justify-center font-bold mb-12'>GALERÍA DE IMÁGENES</h1>
                    <FlotaImagenes/>
                </div>
            </div>
            <FooterIndustrial
            
            />

        </div>
    )
}