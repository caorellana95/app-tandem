import React from 'react';
import Image from "next/image"
import RedesSociales from './redes-sociales';
import Trabajo from './trabajo';



export default function FooterIndustrial(){

   

    return(
        <footer className='sm:mx-8 sm:flex flex-row sm:flex-row justify-between my-12 mt-16 text-white '>
                    <div className='sm:hidden mx-12'>
                    <Image 
                        src={'/certificados.png'}
                        alt='Footer'
                        width={300}
                        height={54}
                    />
                    </div>
                    <div className='sm:hidden pt-8 '>
                        <div className='pb-8'>
                        <RedesSociales/>

                        </div>
                        <div className='pb-4 sm:mr-12'>
                        <Trabajo/>

                        </div>

                    </div>
                    
            <div className='sm:flex flex-col my-auto mx-8 pb-8 '>
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
            <div>
                <div className='sm:flex hidden sm:flex-col'>
                <Trabajo/>

                </div>

            </div>
            <div className='sm:flex hidden'>
            <RedesSociales/>
            </div>
            <div className='sm:flex hidden my-auto'>
                    <Image 
                        src={'/images/certificados.png'}
                        alt='Footer'
                        width={500}
                        height={1200}
                    />
            </div>
        </footer>
    )
}