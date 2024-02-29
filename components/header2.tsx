import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'


export default function Header2() {
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
        router.push('/contacto-comercial');
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

    const redirectHome = () => {
        router.push('/');
    };
    
    

    const desplegarMovil = () => {
        setMenuMobile(!menuMobile)
    }



    return(
        <div>
            <nav className='bg-blue-800 flex flex-row sm:flex-row justify-between text-white'>

                {/* ESCRITORIO */}
                <div className='sm:flex hidden w-full flex mt-4 text-center ml-14 text-white text-xl font-medium leading-normal not-italic'
                    
                >
                    <div className='sm:flex flex-col sm:align-center sm:flex-row sm:items-stretch sm:gap-16 mt-4 sm:mb-1 sm:mt-0'>
                    <h1 onClick={redirectHome} className='cursor-pointer text-3xl font-bold mt-2 pb-4 '>TANDEM</h1>

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
                            <h1 className='cursor-pointer px-2 text-center'>Nuestra Flota</h1>
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
                    <div className='flex'>
                      <Image
                            src={'/images/menu.png'}
                            alt='Logo'
                            width={50}
                            height={4}
                            className='pl-2 py-2'
                            onClick={desplegarMovil}
                        />
                        <div>
                            <h1 onClick={redirectHome} className='text-3xl font-bold py-2 ml-24'>TANDEM</h1>
                        </div>
                    </div>
                        {menuMobile && (
                        <div className='absolute bg-blue-800 rounded mt-16 w-full transition-all  duration-300 text-center shadow pb-2 left-1/2 transform -translate-x-1/2'>
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