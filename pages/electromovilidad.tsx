import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Header2 from '@/components/header2';
import FooterIndustrial from '@/components/footer-industrial';



export default function Electromovilidad(){
    return(
        <div className=''>
            <Head>
                <title>Tandem Industrial | Electromovilidad</title>
            </Head>
            <div className='bg-white pb-12'>
            <Header2/>
            <div>
                <h1 className='text-blue-600 font-bold sm:text-start sm:ml-60 text-3xl text-center mt-24'>ELECTROMOVILIDAD</h1>
            </div>
            <div className='sm:pb-20'>
                <p className='sm:hidden mx-12 mt-8 text-blue-600 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <p className='sm:flex hidden mx-48 text-2xl mt-8 text-blue-600 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='sm:flex'>
            <div className='sm:ml-60 bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-16 px-36 mb-4 sm:px-96 sm:h-96 h-72'></div>
            <div className='mx-12'>
                <h1 className='text-center text-blue-600 font-bold text-2xl pb-8'> LOREM IPSUM DOLOR SIT AMET</h1>
                <p className='pb-4 text-blue-600 sm:mx-4 sm:text-2xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            </div>
            </div>
            <FooterIndustrial/>
        </div>
    )
}