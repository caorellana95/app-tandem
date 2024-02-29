import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Header2 from '@/components/header2';
import FooterIndustrial from '@/components/footer-industrial';




export default function NuestrosClientes(){
    
    const router = useRouter();
    const redirectToContacto = () => {
        router.push('/contacto-comercial');
    };

    return(
        <div className=''>
            <Head>
                <title>Tandem Industrial | Nuestros Clientes</title>
            </Head>
        <div className='bg-white pb-12'>
            <Header2/>
                <div className=''>
                    <h1 className='text-blue-600 font-bold text-3xl text-center mt-24'>NUESTROS CLIENTES</h1>
                </div>
                <div>
                    <p className='sm:hidden text-blue-600 pb-24 text-lg sm:mx-24 sm:mr-36 mt-12 mx-8'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='sm:flex hidden text-blue-600 pb-24 text-xl sm:mx-24 sm:mr-36 mt-12 mx-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p>
                </div>
                <div className='sm:hidden'>
                    <div className='flex justify-center mx-auto'>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-2 ml-2 sm:ml-24 px-16 mb-4 sm:h-96 h-32'></div>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-2 ml-2 mr-12 sm:ml-24 px-16 mb-4 sm:h-96 h-32'></div>
                    </div>
                    <div className='flex justify-center mx-auto'>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-2 ml-2 sm:ml-24 px-16 mb-4 sm:h-96 h-32'></div>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-2 ml-2 mr-12 sm:ml-24 px-16 mb-4 sm:h-96 h-32'></div>
                    </div>
                    <div className='flex justify-center mx-auto'>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-2 ml-2 sm:ml-24 px-16 mb-4 sm:h-96 h-32'></div>
                        <div className='bg-white border-2 border-black sm:w-96 w-12 mx-2 ml-2 mr-12 sm:ml-24 px-16 mb-4 sm:h-96 h-32'></div>
                    </div>
                </div>
                <div className='sm:flex flex-col hidden'>
                    <div className='flex justify-center mr-12 mb-12'>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                    </div>
                    <div className='flex justify-center mr-12'>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                        <div className='bg-white border-2 border-black sm:w-72 mx-auto sm:ml-24 sm:h-72'></div>
                    </div>

                </div>
                <div className='sm:justify-end flex mt-24'>
                    <Image
                        alt='icon'
                        src={'/images/invitacion-clientes.jpg'}
                        width={205}
                        height={12}
                        className=''
                    />
                    <div className=''>
                        <h1 className='sm:text-start text-center text-2xl font-bold text-blue-700 mr-12'>Invitación A UTILIZAR NUESTROS SERVICIOS</h1>
                        <p className='sm:text-start text-center text-blue-600 sm:mr-12 sm:text-xl sm:pb-2 sm:mx-auto mr-12  pb-8 text-lg mt-2 '>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                        <button type="submit" className='sm:w-60 h-[54px] bg-blue-800 text-xl text-white font-medium mr-10 mx-auto sm:mr-12'>
                            <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                        </button>
                    </div>
                </div>
        </div>
        <FooterIndustrial/>
    </div>
    )
}