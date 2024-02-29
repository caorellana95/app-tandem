import React from 'react';
import Image from "next/image"
import Trabajo from './trabajo';



export default function Footer(){

   
return(
    <footer className='bg-blue-700 lg:w-full w-full lg:h-full flex flex-row sm:flex-row inline-block align-middle justify-between text-white'>
        <div className='lg:flex flex-col mx-8'>
            
            <div className=' my-auto lg:static lg:h-0 lg:mt-24 lg:ml-[1600px]'>
                <Image
                    src={'/images/certificados.png'}
                    alt='Footer'
                    width={500}
                    height={1200}
                    className=''
                />
            </div>
               <h1 className='pb-4 text-[20px]'>Medios de contacto</h1>
                  <div className='flex mb-5 items-center'>
                    <Image
                        alt='icon'
                        src={"/images/mail.jpg"}
                        className='me-2'
                        width={25}
                        height={24}
                    />
                    <span className='text-[20px] font-normal not-italic leading-normal'>contacto@tandemindustrial.cl</span>
                  </div>
                   <div className='flex mb-4 items-center'>
                     <Image
                       alt='icon'
                       src={"/icons/phone.svg"}
                       className='me-2'
                       width={25}
                       height={24}
                    />
                    <span className='text-[20px] font-normal not-italic leading-normal'>+56 (2) 1234 567</span>
                    </div>
                        <div>
                            <h1 className='pb-4 text-[20px]'>Casa Matriz</h1>
                        </div>
                        <div className='flex mb-4 items-center'>
                            <Image
                            alt='icon'
                            src={"/icons/place.svg"}
                            className='me-2'
                            width={25}
                            height={24}
                            />
                            <span className='text-[18px] font-normal not-italic leading-normal'>Casa matriz: San Francisco de Borja 1251 - Estación Central - Santiago</span>
                        </div>
                        <div>
                <div className='sm:flex hidden sm:flex-col'>
                <Trabajo/>

                </div>

            </div>
                    </div>
                </footer>
    )

}