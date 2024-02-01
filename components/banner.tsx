'use client'
import Image from 'next/image'
import Header from '@/components/header';
import { useRouter } from 'next/navigation';
import News from './news';



export default function Banner(){
  
    
    const router = useRouter();
    const redirectToContacto = () => {
        router.push('/contacto');
    };


    return(
      <div className='bg-blue-800 w-full'>
        <div style={{backgroundImage:`url('/images/bus.jpg')`}}  className=" static sm:h-full bg-no-repeat sm:bg-cover bg-right-top bg-auto">
          <Header/>
          <div className=''>
            <div className='flex justify-end'>
              <div className='lg:mt-48'>
                <div className='sm:relative text-center sm:mr-24 sm:ml-24 ml-16 sm:mt-72 sm:pb-96  pb-24'>
                  <h1 className='sm:text-5xl sm:mb-6 text-lg text-white ml-24 pb-2 font-bold'></h1>
                  <p className='text-white sm:text-3xl text-sm sm:mx-auto ml-24'>Contamos con una flota de "X" entre buses y vehículos, para más de "Y" clientes </p>
                <div className=' flex gap-8 sm:absolute sm:mt-28 sm:ml-60 ml-28 sm:mt-2 mt-4'>
                  <div className='w-12 sm:w-48'>
                    <Image
                      alt='logo'
                      src={'/iso.png'}
                      width={144}
                      height={24}
                      className=''
                    />
                    <span className='text-sky-800 sm:text-5xl font-bold sm:mr-12'>19011</span>
                  </div>
                  <div className='w-12 sm:w-48'>
                    <Image
                      alt='logo'
                      src={'/iso.png'}
                      width={144}
                      height={24}
                    />
                    <span className='text-sky-800 sm:text-5xl font-bold sm:mr-12'>19011</span>
                  </div> 
                  <div className='w-12 sm:w-48'>
                    <Image
                      alt='logo'
                      src={'/iso.png'}
                      width={144}
                      height={24}
                  />
                   <span className='text-sky-800 sm:text-5xl font-bold sm:mr-12'>19011</span>
                  </div>
                </div>
                <button className="text-white sm:text-lg text-sm font-bold border bg-blue-800 sm:px-4 sm:ml-2 ml-24 sm:my-6 px-2 sm:mt-8 mt-4 h-10 sm:mb-4">
                  <p onClick={redirectToContacto} className='cursor-pointer'>CONTACTO COMERCIAL</p>
                </button>
              </div>
              
            </div>
          </div>
          
        </div>
        <News/>

        </div>
        </div>
    )


}