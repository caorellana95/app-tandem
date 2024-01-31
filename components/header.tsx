'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function Header() {
    const [menuConocenos, setMenuConocenos] = useState(false);
    const [menuFlota, setMenuFlota] = useState(false);
    const [menuMobile, setMenuMobile] = useState(false)
    const router = useRouter();



    const desplegarConocenos = () => {
        setMenuConocenos(true);
      };
    
    const ocultarConocenos = () => {
        setMenuConocenos(false);
      };  

    const desplegarFlota = () => {
        setMenuFlota(true);
    }

    const ocultarFlota = () => {
        setMenuFlota(false);
    }

    const conocenosMobile = () => {
        setMenuConocenos(!menuConocenos);
    }

    const flotaMobile = () => {
        setMenuFlota(!menuFlota);
    }

    const redirectToContacto = () => {
        router.push('/contactos');
    };

    const redirectToQuienesSomos = () => {
        router.push('/quienes-somos');
    };
    
    const redirectToDirectorio = () => {
        router.push('/directorio');
    };
    
    const redirectToHistoria = () => {
        router.push('/historia');
    };
    
    const redirectToFlota = () => {
        router.push('/nuestra-flota');
    };
    const redirectToSeguridad = () => {
        router.push('/seguridad');
    };
    
    const redirectToElectro = () => {
        router.push('/electromovilidad');
    };
    const redirectToNClientes = () => {
        router.push('/nuestros-clientes');
    };
    
    const redirectToNServicios = () => {
        router.push('/nuestros-servicios');
    };
    
    

    const desplegarMovil = () => {
        setMenuMobile(!menuMobile)
    }



    return(
        <div>
            <nav className='bg-blue-700 lg:w-[2400px] w-[400px] flex flex-row sm:flex-row py-4 inline-block align-middle justify-between text-white'>

                {/* ESCRITORIO */}
                <div className='lg:flex hidden w-11/12 flex mt-4 text-center justify-center ml-14 text-white text-xl font-medium leading-normal not-italic'>
                    <div className='sm:flex flex-col sm:align-center sm:mr-12 sm:flex-row sm:items-stretch sm:gap-8 mt-4 sm:mt-0'>
                        <div className=''>
                            <Image
                                src={'/logo-tandem.png'}
                                alt='Logo'
                                width={322}
                                height={1}
                                className='sm:mr-6 ml-2'
                            />

                        </div>
                        
                        <div className='ml-96 hover:bg-blue-700 py-3 text-start shadow '
                            onMouseEnter={desplegarConocenos}
                            onMouseLeave={ocultarConocenos}
                        >
                            <h1 className='cursor-pointer px-2'>Conócenos</h1>
                                {menuConocenos && (
                                    <div className='absolute w-48 bg-blue-700 rounded shadow mr-2 mt-2 px-4' >
                                        <a onClick={redirectToQuienesSomos} className='cursor-pointer block mb-2 hover:bg-blue-800'>Quiénes somos</a>
                                        <a onClick={redirectToDirectorio} className='cursor-pointer block mb-2 hover:bg-blue-800'>Directorio</a>
                                        <a onClick={redirectToHistoria} className='cursor-pointer block mb-2 hover:bg-blue-800'>Historia</a>                         
                                    </div>
                                )}
                        </div>
                        <div className='hover:bg-blue-700 py-3 px-4'>
                            <h1 onClick={redirectToNClientes} className='cursor-pointer'>Nuestros Clientes</h1>
                        </div>
                        <div className='hover:bg-blue-700 py-3 px-4'>
                            <h1 onClick={redirectToNServicios} className='cursor-pointer'>Nuestros Servicios</h1>
                        </div>
                        <div className='relative group hover:bg-blue-700 py-3 text-start'
                            onMouseEnter={desplegarFlota}
                            onMouseLeave={ocultarFlota}
                        >
                            <h1 className='cursor-pointer text-center px-2'>Nuestra Flota</h1>
                                {menuFlota && (
                                    <div className='absolute w-96 bg-blue-700 rounded shadow p-4 mt-2' >
                                        <a onClick={redirectToFlota} className='cursor-pointer block mb-2 hover:bg-blue-800'>Flota</a>
                                        <a onClick={redirectToSeguridad} className='cursor-pointer block mb-2 hover:bg-blue-800'>Seguridad</a>
                                        <a onClick={redirectToElectro} className='cursor-pointer block mb-2 hover:bg-blue-800'>Electromovilidad</a>
                                    </div>
                                )}
                        </div> 
                        <div className=' hover:bg-blue-700 py-3 px-4 relative group'>
                            <h1 onClick={redirectToContacto} className='cursor-pointer'>Contacto Comercial</h1>
                        </div>
                    </div>
                </div>


                {/* RESPONSIVE */}
                <div className='sm:hidden flex'>
                    <div>
                        <Image
                            src={'/logo-tandem.png'}
                            alt='Logo'
                            width={242}
                            height={54}
                            className='ml-2'
                        />
                    </div>
                    <div>
                      <Image
                            src={'/images/menu.png'}
                            alt='Logo'
                            width={50}
                            height={4}
                            className='ml-20'
                            onClick={desplegarMovil}
                        />
                    </div>
                        {menuMobile && (
                        <div className='absolute bg-blue-800 rounded mt-16 w-[400px] transition-all  duration-300 text-center shadow pb-2 left-1/2 transform -translate-x-1/2'>
                            <h1 onClick={conocenosMobile} className=' cursor-pointer pb-2'>Conócenos</h1>
                                {menuConocenos && (
                                    <div className=' border border-white bg-blue-600 rounded shadow  mt-2 ' >
                                        <a onClick={redirectToQuienesSomos} className='block mb-2'>Quiénes somos</a>
                                        <a onClick={redirectToDirectorio} className='block mb-2'>Directorio</a>
                                        <a onClick={redirectToHistoria} className='block mb-2'>Historia</a>                         
                                    </div>
                                )}
                             <div className='pb-2'>
                                <h1 onClick={redirectToNClientes} className=''>Nuestros Clientes</h1>
                             </div>
                             <div className='pb-2'>
                                <h1 onClick={redirectToNServicios} className=''>Nuestros Servicios</h1>
                             </div>
                             <div className='relative group'>
                                <h1 onClick={flotaMobile} className='cursor-pointer pb-2'>Nuestra Flota</h1>
                                    {menuFlota && (
                                        <div className='border border-white bg-blue-600 rounded shadow mt-2 pb-2' >
                                        <a onClick={redirectToFlota} className='block mb-2'>Flota</a>
                                        <a onClick={redirectToSeguridad} className='block mb-2'>Seguridad</a>
                                        <a onClick={redirectToElectro} className='block mb-2'>Electromovilidad</a>
                                        </div>
                                    )}
                             </div>
                             <div className='relative group'>
                                <h1 onClick={redirectToContacto} className='cursor-pointer'>Contacto Comercial</h1>
                             </div>
                        </div>
                            
                        )}
                </div>
            </nav>
        </div>
    )

}