import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import axios, { Axios } from 'axios';
import { useRouter } from 'next/router';
import Header2 from '@/components/header2';
import { FormularioTrabajo, ErroresFormularioTrabajo } from '../models/FormularioTrabajo';
import FooterIndustrial from '@/components/footer-industrial';




export default function TrabajaConNosotros(){
    const [trabajo, setTrabajo] = useState<FormularioTrabajo>({
        nombre:'',
        rut: '',
        renta:'',
        telefono:'',
        email:'',
        descripcion:'',
        disponibilidad:''
      });
    
      const [errores, setErrores] = useState<ErroresFormularioTrabajo>({
        nombre:'',
        rut: '',
        renta:'',
        telefono:'',
        email:'',
        descripcion:'',
        disponibilidad:''
      })


  const router = useRouter();
  
  async function enviarFormulario(e:React.FocusEvent<HTMLFormElement>) {
    e.preventDefault();

    let errores:any = {};

    for(let key of Object.keys(trabajo)){
      if( trabajo[key as keyof FormularioTrabajo] === '' ) {
        errores[`${ key }`] = `El campo ${ key } es obligatorio`;
      }
    }

    if(trabajo.disponibilidad === '--Seleccione disponibilidad--'){
      errores.disponibilidad = 'Debe seleccionar disponibilidad';
    }

    for(let key of Object.keys(errores)) {
      if( errores[key as keyof ErroresFormularioTrabajo] !== '' ) {
        setErrores(errores);
        return;
      }
    }
    router.push('confirmacion-trabajo');

    // try {
    //   const response = await axios.post('/api/trabajo', trabajo);
    //   router.push('confirmacion-trabajo');
    // } catch (error:any) {
    //   window.alert(error.response.data.message + "\nIntente denuevo más tarde");
    // }

  }

  function agregarError(key:string, value:string) {
    setErrores({ ...errores, [key]: value})
  }

  function handleBlur(e:any) {
    const { name, value } = e.target;
    if( value === '' ) {
      agregarError(name, `El campo ${ name } es obligatorio.`);
    } else {
      agregarError(name, ``);
    }
  }

  function handleChange(e:any) {
    const { name, value } = e.target;
    setTrabajo({ ...trabajo, [name]: value });
  }

  function validarNumerico(event:any) {
    if(event.keyCode >= 48 && event.keyCode <= 57 || 
      event.keyCode === 8 || 
      event.keyCode === 9 || 
      event.keyCode >= 96 && event.keyCode <= 105 ||
      event.keyCode >= 37 && event.keyCode <= 40){
      return true;
    }
    event.preventDefault();
  }

    return(
        <div className=''>
            <Head>
                <title>Tandem Industrial | Trabaja con nosotros</title>
            </Head>
            <div className='bg-white pb-12'>
            <Header2/>
            <div id='contenedor-formulario-trabajo'>
                <h1 className='text-blue-600 font-bold sm:text-5xl text-3xl text-center mt-24'>TRABAJA CON NOSOTROS</h1>
                <p className='sm:hidden mx-12 mt-8 text-blue-600 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                <p className='sm:flex hidden mx-36 text-4xl mt-8 text-blue-600 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <form id='formulario-trabajo' className='mt-7' method='POST' onSubmit={ (e:React.FocusEvent<HTMLFormElement>) => enviarFormulario(e) }>
                <div className='sm:flex justify-center'>
                <div className='mb-4 xl:w-[662px] lg:w-[331px] md:w-[331px] sm:w-9/12 w-9/12 mx-12'>
                    <label 
                    className={ `block text-black text-xl text-blue-600 font-bold not-italic leading-normal ${ errores.nombre && 'text-red-600' }` } 
                    htmlFor='nombre'>
                        NOMBRE COMPLETO
                    </label>

                    <input 
                    className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.nombre && 'border-red-600' }` }
                    type='text' 
                    id='nombre' 
                    name='nombre'
                    maxLength={ 100 }
                    value={ trabajo.nombre }
                    onBlur={ handleBlur }
                    onChange={ handleChange }>
                    </input>
                   { errores.nombre && <p className='text-red-600 font-medium text-[12px]'>{ errores.nombre }</p> }

                </div>

                <div className='mb-4 xl:w-[662px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-9/12 mx-12'>
                    <label 
                    className={ `block text-black text-xl text-blue-600 font-bold not-italic leading-normal ${ errores.rut && 'text-red-600' }` } 
                    htmlFor='rut'>
                        RUT/PASAPORTE
                    </label>

                    <input 
                    className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.rut && 'border-red-600' }` }
                    type='text' 
                    id='rut' 
                    name='rut'
                    maxLength={ 100 }
                    value={ trabajo.rut }
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    >
                    </input>
                    { errores.rut && <p className='text-red-600 font-medium text-[12px]'>{ errores.rut }</p> }

                </div>
                </div>

                <div className='sm:flex justify-center'>
                <div className='mb-4 xl:w-[662px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-9/12 mx-12'>
                    <label 
                    className={ `block text-black text-xl text-blue-600 font-bold not-italic leading-normal ${ errores.email && 'text-red-600' }` } 
                    htmlFor='empresa'>
                        CORREO ELECTRÓNICO
                    </label>

                    <input 
                    className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.email && 'border-red-600' }` }
                    type='text' 
                    id='email' 
                    name='email'
                    maxLength={ 100 }
                    value={ trabajo.email }
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    >
                    </input>
                    { errores.email && <p className='text-red-600 font-medium text-[12px]'>{ errores.email }</p> }

                </div>

                <div className='mb-4 xl:w-[662px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-9/12 mx-12'>
                    <label 
                    className={ `block text-black text-xl text-blue-600 font-bold not-italic leading-normal ${ errores.telefono && 'text-red-600' }` } 
                    htmlFor='telefono'>
                        TELÉFONO
                    </label>
                    <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        +56
                    </div>
                    <input 
                    className={ `border-2 w-full pl-14 h-14 py-2 px-3 text-black focus:outline-none ${ errores.telefono && 'border-red-600' }` }
                    type='text' 
                    id='telefono' 
                    name='telefono'
                    maxLength={ 100 }
                    value={ trabajo.telefono }
                    onBlur={ handleBlur }
                    onChange={ handleChange }>
                    </input>
                    { errores.telefono && <p className='text-red-600 font-medium text-[12px]'>{ errores.telefono }</p> }

                    </div>
                </div>
                </div>

                <div className='sm:flex justify-center'>
                <div className='mb-4 block xl:w-[662px] lg:w-[686px] md:w-[686px] sm:w-11/12 w-9/12 mx-12'>
                    <label 
                    className={ `block text-black text-xl text-blue-600 font-bold not-italic leading-normal ${ errores.renta && 'text-red-600' }` } 
                    htmlFor='email'>
                        PRETENSIONES DE RENTA
                    </label>

                    <input 
                    className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.renta && 'border-red-600' }` }
                    type='text' 
                    id='renta' 
                    name='renta'
                    maxLength={ 100 }
                    value={ trabajo.renta }
                    onKeyDown={ validarNumerico }
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    >
                    </input>
                    { errores.renta && <p className='text-red-600 font-medium text-[12px]'>{ errores.renta }</p> }

                    <p className='text-red-600 font-medium text-[12px]'></p> 
                </div>
                
                <div className='mb-4 block xl:w-[662px] lg:w-[686px] md:w-[686px] sm:w-11/12 w-9/12 mx-12'>
                    <label 
                    className={ `block text-black text-xl text-blue-600 font-bold not-italic leading-normal ${ errores.disponibilidad && 'text-red-600'}` } 
                    htmlFor='disponibilidad horaria'>
                        DISPONIBILIDAD HORARIA
                    </label>

                    <select 
                      className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.disponibilidad && 'border-red-600'}` }
                      id='disponibilidad' 
                      name='disponibilidad'
                      onBlur={ handleBlur }
                      onChange={ handleChange }
                      >
                        <option>--Seleccione disponibilidad--</option>
                        <option>Jornada Completa</option>
                        <option>Jornada Parcial</option>
                    </select>
                    {errores.disponibilidad && <p className='text-red-600 font-medium text-[12px]'>{errores.disponibilidad}</p>}
                </div>
                </div>

                <div className='sm:flex justify-center sm:mr-20'>
                <div className='mb-4 block xl:w-[1450px]  sm:w-11/12 w-9/12 mx-auto sm:mx-72'>
                    <label 
                    className={ `block text-black text-xl text-blue-600 font-bold not-italic leading-normal ${ errores.descripcion && 'text-red-600' }` } 
                    htmlFor='descripcion'>
                        BREVE DESCRIPCIÓN DE EXPERIENCIA LABORAL
                    </label>

                    <textarea 
                    className={ `border-2 w-full h-96 py-2 px-3 text-black focus:outline-none ${ errores.descripcion && 'border-red-600' }` }
                    id='descripcion' 
                    name='descripcion'
                    onBlur={ handleBlur }
                    onChange={ handleChange }
 

                    >
                    </textarea>
                    { errores.descripcion && <p className='text-red-600 font-medium text-[12px]'>{ errores.descripcion }</p> }

                </div>
                </div>

                <div className='flex justify-between '>
                <button type="submit" className='w-60 h-[54px] bg-blue-800 text-2xl text-white font-medium mx-auto sm:mr-96 not-italic leading-normal transition duration-300 ease-in-out hover:bg-[#E75F00] hover:text-white'>ENVIAR</button>
                </div>
</form>
            </div>
            <FooterIndustrial/>
        </div>
    )
}