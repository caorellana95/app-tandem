import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router';



export default function FlotaImagenes(){

    const fleetSlides = [
        {
            id:"1",
            img:"/images/foto1_normal.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum"

        },
        {
            id:"2",
            img:"/images/foto1_normal.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum"
        },
        {
            id:"3",
            img:"/images/foto1_normal.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum"
        },
        {
            id:"4",
            img:"/images/foto1_normal.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum"
        },
        {
            id:"5",
            img:"/images/foto1_normal.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum"
        },
        {
            id:"6",
            img:"/images/foto1_normal.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum"
        },
        {
            id:"7",
            img:"/images/foto1_normal.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum"
        },
        {
            id:"8",
            img:"/images/foto1_normal.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum"
        },


    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(0);



   
      
      const goToSlide = (slideIndex:any) => {
        setCurrentIndex(slideIndex);
        setSelectedSlide(slideIndex);

      };

    return(
        <div className='bg-white'>
            <div className=''>
                {/* <h1 className='text-4xl text-white p-4 sm:no-underline underline underline-offset text-center font-bold'>Flota</h1> */}
            </div>

             {/* ESCRITORIO */}
             <div className='sm:flex hidden justify-center '>
                 <div className='flex bg-gray-400 max-w-[400] border-2'>
                 <div className='cursor-pointer border-2 border-white'>
                    <img src={fleetSlides[0].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white w-[300px] py-8 mx-auto text-center'>{fleetSlides[0].description}</p>
                </div>
                <div className='cursor-pointer border-2 border-white'>
                    <img src={fleetSlides[1].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white w-[300px] py-8 mx-auto text-center'>{fleetSlides[1].description}</p>
                </div>  
                <div className='cursor-pointer border-2 border-white'>
                    <img src={fleetSlides[2].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white w-[300px] py-8 mx-auto text-center'>{fleetSlides[2].description}</p>
                </div>
                <div className='cursor-pointer border-2 border-white'>
                    <img src={fleetSlides[3].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white w-[300px] py-8 mx-auto text-center'>{fleetSlides[3].description}</p>
                </div>
            </div>
                            
             </div>
             <div className='sm:flex hidden pb-24 justify-center '>
                 <div className='flex bg-gray-400 max-w-[400] border-2'>
                 <div className='cursor-pointer border-2 border-white'>
                    <img src={fleetSlides[4].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white w-[300px] py-8 mx-auto text-center'>{fleetSlides[4].description}</p>
                </div>
                <div className='cursor-pointer border-2 border-white'>
                    <img src={fleetSlides[5].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white w-[300px] py-8 mx-auto text-center'>{fleetSlides[5].description}</p>
                </div>  
                <div className='cursor-pointer border-2 border-white'>
                    <img src={fleetSlides[6].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white w-[300px] py-8 mx-auto text-center'>{fleetSlides[6].description}</p>
                </div>
                <div className='cursor-pointer border-2 border-white'>
                    <img src={fleetSlides[7].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white w-[300px] py-8 mx-auto text-center'>{fleetSlides[7].description}</p>
                </div>
            </div>
                            
             </div>

            {/* RESPONSIVE */}
            <div className='sm:hidden py-6 pb-24 flex flex-col items-center mx-max grow w-full'>
                <div className='bg-gray-400 w-60 border-2'>
                    <img src={fleetSlides[currentIndex].img} alt="" className='mx-auto w-full'/>
                    <p className='text-white text-center'>{fleetSlides[currentIndex].description}</p>
                </div>
                <div className='flex mt-4'>
                {fleetSlides.map((slide, slideIndex) => (
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
        </div>
    )
}