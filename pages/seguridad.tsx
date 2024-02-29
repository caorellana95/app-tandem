import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Header2 from '@/components/header2';
import { GrAddCircle } from "react-icons/gr";
import FooterIndustrial from '@/components/footer-industrial';





export default function NuestraSeguridad(){

    const [menuGeoloc, setMenuGeoloc] = useState(false);
    const [menuControl, setMenuControl] = useState(false);
    const [menuCanbus, setMmenuCanbus] = useState(false);
    const [menuDvr, setMenuDvr] = useState(false);
    const [menuIncendio, setMenuIncendio] = useState(false);
    const [menuAlerta, setMenuAlerta] = useState(false);


    const desplegarGeoloc = () => {
        cerrar()
        setMenuGeoloc(!menuGeoloc)
      }
    const desplegarControl = () => {
        cerrar()
        setMenuControl(!menuControl)
      }
    const desplegarCanbus = () => {
        cerrar()
        setMmenuCanbus(!menuCanbus)
      }
    const desplegarDvr = () => {
        cerrar()
        setMenuDvr(!menuDvr)
      }
    const desplegarIncendio = () => {
        cerrar()
        setMenuIncendio(!menuIncendio)
      }
    const desplegarAlerta = () => {
        cerrar()
        setMenuAlerta(!menuAlerta)
      }
    const cerrar = () => {
        setMenuGeoloc(false);
        setMenuControl(false);
        setMmenuCanbus(false);
        setMenuDvr(false);
        setMenuIncendio(false);
        setMenuAlerta(false);
        
    }


    return(
        <div className=''>
            <Head>
                <title>Tandem Industrial | Seguridad</title>
            </Head>
            <div className='bg-white pb-12'>
                <Header2/>
                <div>
                    <h1 className='text-blue-600 font-bold text-4xl sm:ml-56 sm:text-start text-center mt-24'>SEGURIDAD</h1>
                </div>
                <div className='mt-12'>
                    <p className='sm:mx-10 sm:px-24 pb-10 text-blue-500 text-2xl ml-4 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                <div className='flex sm:justify-start sm:pb-12'>
                <div className='sm:relative sm:flex-col text-center sm:w-96 pb-8 sm:pb-0 sm:px-0 sm:mx-12'>
                        <div onClick={desplegarGeoloc} className={` sm:cursor-pointer sm:w-72 sm:ml-22 border-2 sm:h-24 border-blue-500 sm:pb-0 mx-4 sm:mx-12 sm:mt-0 sm:px-0 pb-2 sm:pb-0 sm:ml-36 ${menuGeoloc ? 'text-white' : 'text-blue-700'}`}>
                            <div className={`bg-${menuGeoloc ? 'blue-800' : 'white'} sm:w-full sm:h-full justify-items-center  `}>
                                    <h1 className='font-bold sm:pt-6 sm:px-10 py-8'>SISTEMAS DE GEOLOCALIZACIÓN</h1>
                            </div>
                            <div className='sm:hidden '>
                                {menuGeoloc &&(
                                    <div className='sm:flex  pt-4 sm:mx-0'>
                                        <div className='bg-white border-2 border-black sm:w-96 w-72 mx-auto sm:ml-16 px-36 mb-4 sm:px-24 sm:h-96 h-72'></div>
                                        <div>
                                        <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-4 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                        </div>
                                    </div>
                            )}
                            </div>
                        </div>
                        <div onClick={desplegarControl} className={` sm:cursor-pointer sm:w-72 border-2 sm:h-24 border-blue-500 sm:pb-0 mx-4 sm:mx-10 sm:mt-0 sm:px-0 pb-2 sm:pb-0 sm:ml-36 ${menuControl ? 'text-white' : 'text-blue-700'}`}>
                            <div className={`bg-${menuControl ? 'blue-800' : 'white'} sm:w-full sm:h-full justify-items-center  `}>
                                    <h1 className='font-bold sm:pt-6 py-8'>SISTEMA DE CONTROL DE PASAJEROS</h1>
                            </div>
                            <div className='sm:hidden '>
                                {menuControl &&(
                                    <div className='sm:flex  pt-4 sm:mx-0'>
                                        <div className='bg-white border-2 border-black sm:w-96 w-72 mx-auto sm:ml-16 px-36 mb-4 sm:px-24 sm:h-96 h-72'></div>
                                        <div>
                                        <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-4 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                        </div>
                                    </div>
                            )}
                            </div>
                        </div>
                        <div onClick={desplegarCanbus} className={` sm:cursor-pointer sm:w-72 border-2 sm:h-24 border-blue-500 sm:pb-0 mx-4 sm:mx-0 sm:mt-0 sm:px-0 pb-2 sm:pb-0 sm:ml-36 ${menuCanbus ? 'text-white' : 'text-blue-700'}`}>
                            <div className={`bg-${menuCanbus ? 'blue-800' : 'white'} sm:w-full sm:h-full justify-items-center  `}>
                                    <h1 className='font-bold sm:pt-6 py-8'>MODULO CANBUS</h1>
                            </div>
                            <div className='sm:hidden'>
                                {menuCanbus &&(
                                    <div className='sm:flex  pt-4 sm:mx-0'>
                                        <div className='bg-white border-2 border-black sm:w-96 w-72 mx-auto sm:ml-16 px-36 mb-4 sm:px-24 sm:h-96 h-72'></div>
                                        <div>
                                        <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-4 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                        </div>
                                    </div>
                            )}
                            </div>
                        </div>
                        <div onClick={desplegarDvr} className={` sm:cursor-pointer sm:w-72 border-2 sm:h-24 border-blue-500 sm:pb-0 mx-4 sm:mx-0 sm:mt-0 sm:px-0 pb-2 sm:pb-0 sm:ml-36 ${menuDvr ? 'text-white' : 'text-blue-700'}`}>
                            <div className={`bg-${menuDvr ? 'blue-800' : 'white'} sm:w-full sm:h-full justify-items-center  `}>
                                    <h1 className='font-bold sm:pt-6 py-8'>SISTEMA DE DVR</h1>
                            </div>
                            <div className='sm:hidden '>
                                {menuDvr &&(
                                    <div className='sm:flex  pt-4 sm:mx-0'>
                                        <div className='bg-white border-2 border-black sm:w-96 w-72 mx-auto sm:ml-16 px-36 mb-4 sm:px-24 sm:h-96 h-72'></div>
                                        <div>
                                        <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-4 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                        </div>
                                    </div>
                            )}
                            </div>
                        </div>
                        <div onClick={desplegarIncendio} className={` sm:cursor-pointer sm:w-72 border-2 sm:h-24 border-blue-500 sm:pb-0 mx-4 sm:mx-0 sm:mt-0 sm:px-0 pb-2 sm:pb-0 sm:ml-36 ${menuIncendio ? 'text-white' : 'text-blue-700'}`}>
                            <div className={`bg-${menuIncendio ? 'blue-800' : 'white'} sm:w-full sm:h-full justify-items-center  `}>
                                    <h1 className='font-bold sm:pt-4 pt-8'>SISTEMAS AUTOMÁTICO DE EXTINCIÓN DE INCENDIOS</h1>
                                    <p className='font-bold sm:pt-0 pb-2'>fogmaker</p>

                            </div>
                            <div className='sm:hidden '>
                                {menuIncendio &&(
                                    <div className='sm:flex  pt-4 sm:mx-0'>
                                        <div className='bg-white border-2 border-black sm:w-96 w-72 mx-auto sm:ml-16 px-36 mb-4 sm:px-24 sm:h-96 h-72'></div>
                                        <div>
                                        <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-4 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                        </div>
                                    </div>
                            )}
                            </div>
                        </div>
                        <div onClick={desplegarAlerta} className={` sm:cursor-pointer sm:w-72 border-2 sm:h-24 border-blue-500 sm:pb-0 mx-4 sm:mx-0 sm:mt-0 sm:px-0 pb-2 sm:pb-0 sm:ml-36 ${menuAlerta ? 'text-white' : 'text-blue-700'}`}>
                            <div className={`bg-${menuAlerta ? 'blue-800' : 'white'} sm:w-full sm:h-full justify-items-center  `}>
                                    <h1 className='font-bold sm:pt-4 pt-8'>SISTEMAS DE ALERTA TEMPRANA</h1>
                                    <p className='font-bold sm:pt-0 pb-2'>Tercer ojo</p>
                            </div>
                            <div className='sm:hidden '>
                                {menuAlerta &&(
                                    <div className='sm:flex  pt-4 sm:mx-0'>
                                        <div className='bg-white border-2 border-black sm:w-96 w-72 mx-auto sm:ml-16 px-36 mb-4 sm:px-24 sm:h-96 h-72'></div>
                                        <div>
                                        <p className='pb-4 text-blue-500 text-xl sm:mx-auto ml-4 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                        </div>
                                    </div>
                            )}
                            </div>
                        </div>
                </div>

                <div className='sm:relative sm:flex hidden sm:justify-center text-center pb-8 sm:pb-0 sm:px-auto sm:w-[1164px] border-blue-500 border-2'>
                    <div className=''>
                                {menuGeoloc &&(
                                    <div className='sm:flex sm:px-auto pt-4 sm:mx-auto mr-24 justify-center'>
                                        <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-12 px-36 mb-4 sm:h-[500px] h-72'></div>
                                            <div className='sm:ml-12'>
                                                <h1 className='text center mb-6 text-3xl font-bold text-blue-500'>LOREM IPSUM DOLOR SIT AMET</h1>
                                                <p className='sm:hidden pb-4 text-blue-500 text-xl sm:mx-auto sm:mr-12 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                                <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                    </div>
                                )}
                    </div>
                    <div className=''>
                                {menuControl &&(
                                   <div className='sm:flex sm:px-auto pt-4 sm:mx-auto mr-24 justify-center'>
                                        <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-12 px-36 mb-4 sm:h-[500px] h-72'></div>
                                            <div className='sm:ml-12'>
                                                <h1 className='text center mb-6 text-3xl font-bold text-blue-500'>LOREM IPSUM DOLOR SIT AMET</h1>
                                                <p className='sm:hidden pb-4 text-blue-500 text-xl sm:mx-auto sm:mr-12 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                                <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                    </div>
                                  )}
                    </div>
                            <div className=''>
                                {menuCanbus &&(
                                    <div className='sm:flex sm:px-auto pt-4 sm:mx-auto mr-24 justify-center'>
                                        <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-12 px-36 mb-4 sm:h-[500px] h-72'></div>
                                            <div className='sm:ml-12'>
                                                <h1 className='text center mb-6 text-3xl font-bold text-blue-500'>LOREM IPSUM DOLOR SIT AMET</h1>
                                                <p className='sm:hidden pb-4 text-blue-500 text-xl sm:mx-auto sm:mr-12 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                                <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                    </div>
                            )}
                            </div>
                            <div className=''>
                                {menuDvr &&(
                                    <div className='sm:flex sm:px-auto pt-4 sm:mx-auto mr-24 justify-center'>
                                        <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-12 px-36 mb-4 sm:h-[500px] h-72'></div>
                                            <div className='sm:ml-12'>
                                                <h1 className='text center mb-6 text-3xl font-bold text-blue-500'>LOREM IPSUM DOLOR SIT AMET</h1>
                                                <p className='sm:hidden pb-4 text-blue-500 text-xl sm:mx-auto sm:mr-12 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                                <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                            )}
                            </div>
                            <div className=''>
                                {menuIncendio &&(
                                    <div className='sm:flex sm:px-auto pt-4 sm:mx-auto mr-24 justify-center'>
                                        <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-12 px-36 mb-4 sm:h-[500px] h-72'></div>
                                        <div className='sm:ml-12'>
                                            <h1 className='text center mb-6 text-3xl font-bold text-blue-500'>LOREM IPSUM DOLOR SIT AMET</h1>
                                            <p className='sm:hidden pb-4 text-blue-500 text-xl sm:mx-auto sm:mr-12 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                            <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                            )}
                            </div>
                            <div className=''>
                                {menuAlerta &&(
                                   <div className='sm:flex sm:px-auto pt-4 sm:mx-auto mr-24 justify-center'>
                                        <div className='bg-white border-4 sm:w-96 w-72 mx-auto sm:ml-12 px-36 mb-4 sm:h-[500px] h-72'></div>
                                        <div className='sm:ml-12'>
                                            <h1 className='text center mb-6 text-3xl font-bold text-blue-500'>LOREM IPSUM DOLOR SIT AMET</h1>
                                            <p className='sm:hidden pb-4 text-blue-500 text-xl sm:mx-auto sm:mr-12 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                                            <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <p className='sm:flex hidden pb-4 text-blue-500 text-xl text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        </div>
                                    </div>
                            )}
                            </div>
                </div>
                </div>
                <div>
                                    <div className='sm:flex sm:relative pt-4 sm:mx-auto justify-center'>
                                        <div className='bg-white border-2 border-black sm:w-[1500px] w-[390px] mx-auto sm:mx-0 sm:px-2 sm:h-96 h-72'></div>
                                        <div className='bg-blue-900 sm:w-[1450px] w-[390px] sm:h-[382px] sm:ml-0 ml-3 px-auto'>
                                            <h1 className='sm:text-4xl text-2xl sm:py-4 sm:mt-4 sm:text-start text-center sm:ml-12 text-white mb-4'>LOREM IPSUM DOLOR SIT AMET</h1>
                                            <p className='sm:hidden pb-4 text-xl text-blue-500 text-white sm:mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                                            <p className='sm:flex hidden pb-4 sm:text-xl text-blue-500 text-white sm:mx-12 sm:ml-4 sm:mb-0 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                        </div>
                                    </div>

                </div>
            </div>
            <FooterIndustrial/>
        </div>
    )
}