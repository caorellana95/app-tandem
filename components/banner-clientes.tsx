import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router';



export default function BannerClientes(){

    return(
        <div>
               {/* ESCRITORIO */}
         <div className="w-full sm:h-72 h-96 sm:pt-4 bg-[url('/images/apreton-manos.jpg')] md:bg-[length:100%_382px] lg:bg-[length:100%_382px] xl:bg-[length:100%_382px] sm:bg-auto bg-cover mt-0 bg-no-repeat md:bg-origin-border lg:bg-origin-border xl:bg-origin-border sm:bg-top-center bg-center">
                <div className='p-4 sm:mx-auto h-auto sm:my-6 text-center'>
                    <h1 className='text-sky-700 sm:text-5xl text-3xl sm:mt-20 mt-36 '>BANNER DE CLIENTES</h1>
                </div>
         </div>
         
        </div>
      
    )
}