import FooterIndustrial from '@/components/footer-industrial'
import Header2 from '@/components/header2'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function ConfirmacionContacto() {

    const router = useRouter();
    const redirectToHome = () => {
        router.push('/');
    };

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/')
    //     }, 5000)
    // })

    return (
        <div className=''>
            <div className='bg-white pb-60'>
                <Header2/>
                <div className='sm:flex mt-4 sm:justify-center'>
                    <Image
                    src={'/images/invitacion-clientes.jpg'}
                    alt='Logo'
                    width={650}
                    height={4}
                    className='sm:w-[450px] sm:ml-36'
                    />
                    <div className='sm:mx-96 sm:mr-60'>
                        <h1 className='text-2xl sm:text-5xl text-blue-600 text-center font-bold mt-4'>GRACIAS POR PREFERIR TANDEM INDUSTRIAL!!!</h1>
                        <p className='text-xl sm:text-4xl ml-3 mx-auto text-blue-600 text-center mt-12'>Formulario enviado con éxito, uno de nuestros ejecutivos los atenderá prontamente</p>
                        <div>
                <Image
                  src={'/wink.png'}
                  alt='Logo'
                  width={260}
                  height={4}
                  className='mx-auto mt-12'
                />
                
                </div>
                <div className='sm:mx-96'>
                    <button onClick={redirectToHome} className='font-bold bg-orange-400 w-72 p-4 text-white sm:mx-12 border-2 border-black ml-16 mt-12'>
                        <p>Volver a TANDEM</p>
                    </button>
                </div>
                    </div>

                </div>

               
               

            </div>
            <FooterIndustrial/>

        </div>
    )
}
