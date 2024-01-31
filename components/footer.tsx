import React from 'react';
import Image from "next/image"



export default function Footer(){

   
return(
    <footer className='sm:mx-8 sm:flex flex-row sm:flex-row justify-between text-black'>
            <div className='lg:flex flex-col mx-8  '>
                <div>
                <div className=' my-auto lg:static lg:h-0 lg:mt-48 lg:ml-[800px]'>
                    <Image 
                        src={'/images/certificados.png'}
                        alt='Footer'
                        width={500}
                        height={1200}
                        className=''
                    />
            </div>
                </div>
                <h1 className='pb-4 text-[20px]'>Medios de contacto</h1>
                    <div className='flex mb-4 items-center'>
                        <Image
                        alt='icon'
                        src={"/mail.jpg"}
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
            </div>
        
            
        </footer>
)

}