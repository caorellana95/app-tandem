import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { GrAddCircle } from "react-icons/gr";
import Header2 from '@/components/header2';
import FooterIndustrial from '@/components/footer-industrial';



export default function NuestrosServicios(){
    
    const router = useRouter();
    const redirectToContacto = () => {
        router.push('/contacto-comercial');
    };
    const [menuExterno, setMenuExterno] = useState(false);
    const [menuInterno, setMenuInterno] = useState(false);
    const [menuInter, setMenuInter] = useState(false);
    const [menuRadio, setMenuRadio] = useState(false);



    const desplegarExterno = () => {
        cerrar()
        setMenuExterno(!menuExterno)
      }
    const desplegarInterno = () => {
        cerrar()
        setMenuInterno(!menuInterno)
      }
    const desplegarInter = () => {
        cerrar()
        setMenuInter(!menuInter)
      }
    const desplegarRadio = () => {
        cerrar()
        setMenuRadio(!menuRadio)
      }
    const cerrar = () => {
        setMenuExterno(false);
        setMenuInterno(false);
        setMenuInter(false);
        setMenuRadio(false);
    }

    return(
        <div className=''>
            <Head>
                <title>Tandem Industrial | Nuestros Servicios</title>
            </Head>
            <div className='bg-white pb-96'>
                <Header2/>
                    <div className=''>
                        <h1 className='text-blue-600 font-bold text-3xl text-center mt-12 pb-8'>NUESTROS SERVICIOS</h1>
                    </div>
                    <div>
                        <p className='sm:hidden pb-12 text-lg text-blue-600 sm:mx-12 sm:mr-36 pb-24 text-lg sm:mx-24 sm:mr-36 mt-12 mx-8 '>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='sm:flex hidden pb-4 text-2xl text- text-blue-600 sm:mx-40 sm:mr-36 sm:pb-12'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    </div>
                    <div className='sm:relative sm:flex sm:justify-center text-center pb-8 sm:pb-0 sm:px-0 sm:mx-auto'>
                        <div onClick={desplegarExterno} className={` sm:cursor-pointer sm:w-1/8 border-2 sm:h-1/2 border-blue-500 sm:pb-0 mx-4 sm:mx-0 sm:mt-0 sm:px-0 pb-2 sm:pb-0 ${menuExterno ? 'text-white' : 'text-blue-700'}`}>
                            <div className={`bg-${menuExterno ? 'blue-800' : 'white'} sm:w-72 sm:h-24 justify-items-center  `}>
                                <div className='sm:hidden flex justify-end mr-4'>
                                    <GrAddCircle onClick={desplegarExterno} size={30} className='pt-2'/>
                                </div>
                                    <h1 className='font-bold sm:pt-6'>SERVICIO EXTERNO</h1>
                                    <p className='pb-10'>(Ciudad-Faena)</p>
                            </div>
                            <div className='sm:hidden '>
                                {menuExterno &&(
                                    <div className='sm:flex  pt-4 sm:mx-0'>
                                        <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-16 px-36 mb-4 sm:px-24 sm:h-96 h-72'></div>
                                        <div>
                                        <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-12  sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                        <button className="text-white sm:text-lg text-sm font-bold border mx-16 bg-blue-800 sm:px-4 sm:ml-2 ml-24 sm:my-6 px-2 sm:mt-8 mt-4 h-10 sm:mb-4">
                                            <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                                        </button>
                                        </div>
                                    </div>
                            )}
                            </div>
                        
                           

                        </div>
                        <div onClick={desplegarInterno} className={`sm:cursor-pointer sm:w-1/8 border-2 sm:h-1/2 border-blue-500 sm:pb-0 mx-4 sm:mx-0 sm:mt-0 sm:px-0 pb-2 sm:pb-0  ${menuInterno ? 'text-white' : 'text-blue-700'}`}>
                    <div className={`bg-${menuInterno ? 'blue-800' : 'white'} sm:w-72 sm:h-24 justify-items-center`}>
                    <div className='sm:hidden flex justify-end mr-4'>
                        <GrAddCircle onClick={desplegarInterno} size={30} className='pt-2'/>
                        </div>
                            <h1 className='font-bold sm:pt-6'>SERVICIO INTERNO</h1>
                            <p className='pb-10'>(Mina-Planta-Campamento)</p>
                        </div>
                        
                        <div className='sm:hidden '>
                            {menuInterno &&(
                                <div className='pt-4'>
                                    <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-24 px-36 mb-4 sm:h-96 h-72'></div>
                                    <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-12  sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                    <button className="text-white sm:text-lg text-sm font-bold border mx-16 bg-blue-800 sm:px-4 sm:ml-2 ml-24 sm:my-6 px-2 sm:mt-8 mt-4 h-10 sm:mb-4">
                                        <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                    <div onClick={desplegarInter} className={`sm:cursor-pointer sm:w-1/8  border-2 sm:h-1/2 border-blue-500 sm:pb-0 mx-4 sm:mt-0 sm:mx-0 sm:px-0 pb-2 sm:pb-0  ${menuInter ? 'text-white' : 'text-blue-700'}`}>
                    <div className={`bg-${menuInter ? 'blue-800' : 'white'} sm:w-72 sm:h-24 justify-items-center`}>
                    <div className='sm:hidden flex justify-end mr-4'>
                        <GrAddCircle onClick={desplegarInter} size={30} className='pt-2'/>
                        </div>
                        <h1 className='font-bold sm:pt-6'>SERVICIO INTERREGIONAL</h1>
                            <p className='pb-2'>(Cambios de turno)</p>
                        </div>
                        
                        <div className='sm:hidden '>
                            {menuInter &&(
                                <div className='pt-4'>
                                    <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-24 px-36 mb-4 sm:h-96 h-72'></div>
                                    <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-12  sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                    <button className="text-white sm:text-lg text-sm font-bold border mx-16 bg-blue-800 sm:px-4 sm:ml-2 ml-24 sm:my-6 px-2 sm:mt-8 mt-4 h-10 sm:mb-4">
                                        <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                    <div onClick={desplegarRadio} className={`sm:cursor-pointer sm:w-1/8 border-2 sm:h-1/2 border-blue-500 sm:pb-0 mx-4 sm:mt-0 sm:mx-0 sm:px-0 pb-2 sm:pb-0  ${menuRadio ? 'text-white' : 'text-blue-700'}`}>
                    <div className={`bg-${menuRadio ? 'blue-800' : 'white'} sm:w-72 sm:h-24 justify-items-center`}>
                    <div className='sm:hidden flex justify-end mr-4'>
                        <GrAddCircle onClick={desplegarRadio} size={30} className='pt-2'/>
                        </div>
                        <h1 className='font-bold sm:pt-6'>SERVICIO DE RADIO TAXI</h1>
                            <p className='pb-2'>(TRANSPORTE PERSONALIZADO)</p>
                        </div>
                        
                        <div className='sm:hidden '>
                            {menuRadio &&(
                                <div className='pt-4'>
                                    <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-24 px-36 mb-4 sm:h-96 h-72'></div>
                                    <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-12  sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                    <button className="text-white sm:text-lg text-sm font-bold border mx-16 bg-blue-800 sm:px-4 sm:ml-2 ml-24 sm:my-6 px-2 sm:mt-8 mt-4 h-10 sm:mb-4">
                                        <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>


                <div className='sm:relative sm:flex sm:justify-center text-center sm:border-2 sm:border-blue-500 sm:w-[1164px] sm:h-[800px] pb-8 sm:pb-0 sm:px-auto sm:mx-auto center-container'>

                <div className=''>
                                {menuExterno &&(
                                    <div className='sm:flex sm:py-12 pt-4 sm:mx-0'>
                                    <div className='bg-white border-4 sm:w-[720px] w-72 mx-auto sm:ml-12 px-40 mb-4 sm:px-32 sm:h-[630px] '></div>
                                        <div className='sm:ml-12'>
                                            <h1 className='text-center text-3xl text-blue-600 font-bold mb-8'>Lorem ipsum dolor sit amet,</h1>
                                        <p className='sm:hidden pb-4 text-blue-500 text-xl sm:ml-12 sm:mr-12 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                        <p className='sm:flex hidden pb-4 text-blue-500 text-lg text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p className='sm:flex hidden pb-4 text-blue-500 text-lg text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button className="text-white sm:text-lg justify-end text-sm font-bold mx-16 bg-blue-800 sm:px-4 sm:ml-24 ml-24 sm:y-6 px-2 sm:mt-24 mt-4 h-10">
                                            <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                                        </button>
                                        </div>
                                    </div>
                            )}
                            </div>
                            <div className=' '>
                                {menuInterno &&(
                                    <div className='sm:flex sm:py-12 pt-4 sm:mx-0'>
                                    <div className='bg-white border-4 sm:w-[720px] w-72 mx-auto sm:ml-12 px-40 mb-4 sm:px-32 sm:h-[630px] '></div>
                                        <div className='sm:ml-12'>
                                            <h1 className='text-center text-3xl text-blue-600 font-bold mb-8'>Lorem ipsum dolor sit amet,</h1>
                                        <p className='sm:hidden pb-4 text-blue-500 text-xl sm:ml-12 sm:mr-12 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                        <p className='sm:flex hidden pb-4 text-blue-500 text-lg  text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p className='sm:flex hidden pb-4 text-blue-500 text-lg  text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button className="text-white sm:text-lg justify-end text-sm font-bold mx-16 bg-blue-800 sm:px-4 sm:ml-24 ml-24 sm:y-6 px-2 sm:mt-24 mt-4 h-10">
                                            <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                                        </button>
                                        </div>
                                    </div>
                            )}
                            </div>
                            <div className=''>
                                {menuInter &&(
                                    <div className='sm:flex sm:py-12 pt-4 sm:mx-0'>
                                    <div className='bg-white border-4 sm:w-[720px] w-72 mx-auto sm:ml-12 px-40 mb-4 sm:px-32 sm:h-[630px] '></div>
                                        <div className='sm:ml-12'>
                                            <h1 className='text-center text-3xl text-blue-600 font-bold mb-8'>Lorem ipsum dolor sit amet,</h1>
                                        <p className='sm:hidden pb-4 text-blue-500 text-xl sm:ml-12 sm:mr-12 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                        <p className='sm:flex hidden pb-4 text-blue-500 text-lg  text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p className='sm:flex hidden pb-4 text-blue-500 text-lg  text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button className="text-white sm:text-lg justify-end text-sm font-bold mx-16 bg-blue-800 sm:px-4 sm:ml-24 ml-24 sm:y-6 px-2 sm:mt-24 mt-4 h-10">
                                            <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                                        </button>
                                        </div>
                                    </div>
                            )}
                            </div>
                            <div className=''>
                                {menuRadio &&(
                                    <div className='sm:flex sm:py-12 pt-4 sm:mx-0'>
                                    <div className='bg-white border-4 sm:w-[720px] w-72 mx-auto sm:ml-12 px-40 mb-4 sm:px-32 sm:h-[630px] '></div>
                                        <div className='sm:ml-12'>
                                            <h1 className='text-center text-3xl text-blue-600 font-bold mb-8'>Lorem ipsum dolor sit amet,</h1>
                                        <p className='sm:hidden pb-4 text-blue-500 text-xl sm:ml-12 sm:mr-12 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                        <p className='sm:flex hidden pb-4 text-blue-500 text-lg  text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p className='sm:flex hidden pb-4 text-blue-500 text-lg  text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button className="text-white sm:text-lg justify-end text-sm font-bold mx-16 bg-blue-800 sm:px-4 sm:ml-24 ml-24 sm:y-6 px-2 sm:mt-24 mt-4 h-10">
                                            <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                                        </button>
                                        </div>
                                    </div>
                            )}
                            </div>

                </div>
                            

            </div>
            <FooterIndustrial/>
        </div>
    )
}