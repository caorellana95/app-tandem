import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Header2 from '@/components/header2';
import FooterIndustrial from '@/components/footer-industrial';



export default function Directorio(){
    return(
        <div className=''>
            <Head>
                <title>Tandem Industrial | Directorio</title>
            </Head>
            <div className='bg-white pb-12'>
            <Header2/>
            <div>
              <h1 className='text-blue-600 font-bold sm:text-5xl ml-2 sm:ml-10 text-3xl sm:text-start text-center mt-12'>DIRECTORIO</h1>
            </div>
            <div className='sm:flex'>
                <div className='sm:flex-col'>
                    <div className='bg-white border-2 border-black sm:w-72 w-72 mx-auto sm:mx-auto  px-36 mb-4 sm:px-2 sm:h-72 h-60 mt-24'></div>
                    <p className='text-center sm:mx-36 sm:ml-36 text-blue-600 mx-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div>
                    <div className='bg-white border-2 border-black sm:w-72 w-72 mx-auto sm:mx-auto  px-36 mb-4 sm:px-2 sm:h-72 h-60 mt-24'></div>
                    <p className='text-center sm:mx-36 sm:ml-36 text-blue-600 mx-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div>
                    <div className='bg-white border-2 border-black sm:w-72 w-72 mx-auto sm:mx-auto  px-36 mb-4 sm:px-2 sm:h-72 h-60 mt-24'></div>
                    <p className='text-center sm:mx-36 sm:ml-36 text-blue-600 mx-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
            </div>
            <div className='sm:flex hidden sm:ml-56'>
                <div className='sm:flex-col'>
                    <div className='bg-white border-2 border-black sm:w-72 w-72 mx-auto sm:mx-auto px-36 mb-4 sm:px-2 sm:h-72 h-60 mt-24'></div>
                    <p className='text-center sm:mx-12 sm:ml-24 text-blue-600 mx-12 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div className='sm:flex-col'>
                    <div className='bg-white border-2 border-black sm:w-72 w-72 mx-auto sm:mx-auto px-36 mb-4 sm:px-2 sm:h-72 h-60 mt-24'></div>
                    <p className='text-center sm:mx-12 sm:ml-24 text-blue-600 mx-12 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                
            </div>
            

            </div>
            <FooterIndustrial/>

        </div>
    )
}