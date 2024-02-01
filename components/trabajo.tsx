'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";



export default function Trabajo(){
    
    const router = useRouter();
    const redirectToTrabajar = () => {
        router.push('/trabaja-con-nosotros');
    };

    return(
<div className='pb-8 mx-8'>
                        <h1 className='pb-4 text-[20px]'>Trabaja con nosotros</h1>
                        <div className='flex'>
                            <Image
                            alt='icon'
                            src={"/icons/briefcase.svg"}
                            className='cursor-pointer mr-2'
                            onClick={redirectToTrabajar}
                            width={40}
                            height={40}
                            />
                        <p className="text-[20px]">Si quieres ser uno más de nosotros,</p>
                        </div>
                </div>
    )
}