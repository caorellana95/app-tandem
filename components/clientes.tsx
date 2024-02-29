import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router';


export default function Clientes(){

    return(
        <div className='bg-white'>
        <div className='sm:pb-1 pb-12 sm:pt-1 pt-12'>
            <div className='flex sm:pb-12 sm:pt-12 sm:ml-60 justify-center gap-72 py-8 text-sky-700'>
                <h1 className='sm:text-5xl text-2xl pb-12 underline underline-offset-4 font-bold ml-2 text-center	'>CONOCE ALGUNOS DE LOS CLIENTES QUE TRABAJAN CON NOSOTROS</h1>
                <div className='sm:flex hidden'>
                    <h1 className='text-4xl pr-24 text-center'>Casos de éxito (Testimonios)</h1>
                </div>
                
            
            </div>
            <div className='sm:flex sm:pl-12 gap-12 pb-12'>
            <div className='bg-white border-4 sm:w-[800px] w-96 mx-auto sm:ml-24 px-36 mb-12 sm:h-96 h-72'>
                <Image
                    alt='Logo'
                    src={'/images/play.png'}
                    width={100}
                    height={54}
                    className='cursor-pointer sm:mt-36 sm:mx-auto mt-24'
                />
                </div>
                <div>
                    <div className='sm:text-start text-center sm:mr-96 text-sky-700'>
                        <h1 className='sm:text-4xl text-2xl pb-4 font-bold'>LOREM IPSUM DOLOR SIT AMET</h1>
                        <h2 className='sm:flex hidden pb-4 sm:text-2xl text-xl'>LOREM IPSUM DOLOR SIT AMET</h2>
                        <p className='sm:flex hidden pb-4 text-xl sm:mx-auto sm:mr-72 xl:mr-12 md:mr-96 xs:mr-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className='sm:hidden pb-4 text-xl mx-8 sm:mx-auto sm:mr-36'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>

                    </div>

                </div>
            </div>
            <div className='sm:flex sm:pl-12 gap-12 pb-12'>
            <div className='bg-white border-4 sm:w-[800px] w-96 mx-auto sm:ml-24 px-36 mb-12 sm:h-96 h-72'>
                <Image
                    alt='Logo'
                    src={'/images/play.png'}
                    width={100}
                    height={54}
                    className='cursor-pointer  sm:mt-36 sm:mx-auto mt-24'
                />
                </div>
                <div>
                <div className='sm:text-start text-center sm:mr-96 text-sky-700'>
                        <h1 className='sm:text-4xl text-2xl pb-4 font-bold'>LOREM IPSUM DOLOR SIT AMET</h1>
                        <h2 className='sm:flex hidden pb-4 sm:text-2xl text-xl'>LOREM IPSUM DOLOR SIT AMET</h2>
                        <p className='sm:flex hidden pb-4 text-xl sm:mx-auto sm:mr-72 xl:mr-12 md:mr-96 xs:mr-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className='sm:hidden pb-4 text-xl mx-8 sm:mx-auto sm:mr-36'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>


                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}