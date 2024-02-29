import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Header2 from '@/components/header2';
import FooterIndustrial from '@/components/footer-industrial';




export default function QuienesSomos(){
    return(
        <div className=''>
            <Head>
                <title>Tandem Industrial | Quiénes somos</title>
            </Head>
            <div className='bg-white pb-12'>
            <Header2/>
            <div>
            <div className='contain bg-white border-2 border-black sm:w-full w-72 mx-auto sm:mx-0 sm:mr-2 px-36 mb-4 sm:px-2 sm:h-96 h-72 mt-12'></div>

            </div>
            <div>
                <h1 className='text-blue-600 font-bold sm:text-5xl text-3xl text-center mt-24'>Quiénes somos</h1>
                <p className='sm:hidden mx-4 mt-8 text-lg text-blue-600 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui off</p>
                <p className='sm:flex hidden text-xl mx-72 mt-8 text-3xl text-blue-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='sm:flex hidden text-xl mx-72 text-lg text-blue-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className='sm:flex hidden text-xl mx-72 text-lg text-blue-600 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


            </div>
            <div>
                <h1 className='text-blue-600 font-bold sm:text-5xl text-3xl text-center mt-24'>Propósito</h1>
                <p className='sm:hidden mx-4 mt-8 text-lg text-blue-600 pb-12 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
                <p className='sm:flex hidden mx-96 mt-8 text-3xl text-blue-600 pb-12 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
            
            </div>
            <div>
                <h1 className='text-blue-600 font-bold sm:text-5xl text-3xl text-center mt-24 mb-8'>Valores</h1>
            </div>
            <div>
            <div className='flex justify-center mx-auto'>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-auto ml-12 sm:ml-24 px-24 mb-4 sm:h-96 h-32'></div>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-auto ml-2 mr-12 sm:ml-24 px-24 mb-4 sm:h-96 h-32'></div>
                    </div>
                    <div className='flex justify-center mx-auto sm:mx-96'>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-auto ml-12 sm:ml-24 px-24 mb-4 sm:h-96 h-32'></div>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-auto ml-2 mr-12 sm:ml-24 px-24 mb-4 sm:h-96 h-32'></div>
                    </div>
                

            </div>
            </div>
            <FooterIndustrial/>
        </div>
    )
}