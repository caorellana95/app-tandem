import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import axios, { Axios } from 'axios';
import { FormularioContacto, ErroresFormulario } from '../models/FormularioContacto';
import { useRouter } from 'next/router';

export default function Home() {

  const [contacto, setContacto] = useState<FormularioContacto>({
    nombre:'',
    apellido:'',
    empresa: '',
    email:'',
    telefono:'',
    mensaje:''
  });

  const [errores, setErrores] = useState<ErroresFormulario>({
    nombre:'',
    apellido:'',
    empresa: '',
    email:'',
    telefono:'',
    mensaje:''
  })

  const router = useRouter();
  
  async function enviarFormulario(e:React.FocusEvent<HTMLFormElement>) {
    e.preventDefault();

    let errores:any = {};

    for(let key of Object.keys(contacto)){
      if( contacto[key as keyof FormularioContacto] === '' ) {
        errores[`${ key }`] = `El campo ${ key } es obligatorio`;
      }
    }

    for(let key of Object.keys(errores)) {
      if( errores[key as keyof ErroresFormulario] !== '' ) {
        setErrores(errores);
        return;
      }
    }

    try {
      const response = await axios.post('/api/contacto', contacto);
      router.push('confirmacion-contacto');
    } catch (error:any) {
      window.alert(error.response.data.message + "\nIntente denuevo más tarde");
    }

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
    setContacto({ ...contacto, [name]: value });
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

  return (
    <main className="w-full bg-[url('/images/banner_contacto.jpg')] md:bg-[length:100%_382px] lg:bg-[length:100%_382px] xl:bg-[length:100%_382px] sm:bg-auto bg-no-repeat md:bg-origin-border lg:bg-origin-border xl:bg-origin-border bg-top-center">
      <div className='container justify-center mx-auto'>
      <Head>
        <title>Tandem Industrial | Contáctenos</title>
      </Head>

      <div className='w-full'>
        <Image
          className='flex mx-auto pt-6'
          src={'/images/tandem_header_contacto.png'}
          alt='Logo'
          width={ 330 }
          height={ 74 }/>
      </div>

      <div className='mt-8 text-center mx-auto text-white text-xl font-medium leading-normal not-italic'>
        ¡Ups! Nuestro sitio se está renovando
      </div>

      <div className='lg:w-[43rem] sm:w-11/12 mx-auto mt-14' id='contenedor-formulario-contacto'>
        <div className='xl:px-0 lg:px-0 md:px-0 sm:px-3 sm:w-11/12 mx-auto text-white'>
          Contáctate con nuestro equipo comercial completando el siguiente formulario:
        </div>

        <form id='formulario-contacto' className='mt-7' method='POST' onSubmit={ (e:React.FocusEvent<HTMLFormElement>) => enviarFormulario(e) }>

          <div className='xl:flex xl:flex-row md:flex md:flex-row sm:flex sm:flex-col justify-between'>
            <div className='mb-4 xl:w-[331px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-white text-[12px] font-medium not-italic leading-normal ${ errores.nombre && 'text-red-600' }` } 
                htmlFor='nombre'>
                  Nombre(s):
              </label>

              <input 
                className={ `border bg-[#F0F0F0] rounded-[20px] w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.nombre && 'border-red-600' }` }
                type='text' 
                id='nombre' 
                name='nombre'
                maxLength={ 100 }
                value={ contacto.nombre }
                onBlur={ handleBlur }
                onChange={ handleChange }>
              </input>
              { errores.nombre && <p className='text-red-600 font-medium text-[12px]'>{ errores.nombre }</p> }
            </div>

            <div className='mb-4 xl:w-[331px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-white text-[12px] font-medium not-italic leading-normal ${ errores.apellido && 'text-red-600' }` }
                htmlFor='apellido'>
                  Apellido(s):
              </label>

              <input 
                className={ `border bg-[#F0F0F0] rounded-[20px] w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.apellido && 'border-red-600'}` }
                type='text' 
                id='apellido' 
                name='apellido'
                value={ contacto.apellido }
                onBlur={ handleBlur }
                maxLength={ 100 }
                onChange={ handleChange }>
              </input>
              { errores.apellido && <p className='text-red-600 font-medium text-[12px]'>{ errores.apellido }</p> }
            </div>
          </div>

          <div className='xl:flex xl:flex-row md:flex md:flex-row xl:flex-auto md:flex-auto sm:flex-col justify-between'>
            <div className='mb-4 xl:w-[331px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={`block text-white text-[12px] font-medium not-italic leading-normal ${ errores.empresa && 'text-red-600' }`}
                htmlFor='empresa'>
                  Empresa:
              </label>

              <input 
                className={ `border bg-[#F0F0F0] rounded-[20px] w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.empresa && 'border-red-600'}` }
                type='text' 
                id='empresa' 
                name='empresa'
                value={ contacto.empresa }
                onBlur={ handleBlur }
                maxLength={ 256 }
                onChange={ handleChange }>
              </input>
              { errores.empresa && <p className='text-red-600 font-medium text-[12px]'>{ errores.empresa }</p> }
            </div>

            <div className='mb-4 xl:w-[331px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-white text-[12px] font-medium not-italic leading-normal ${ errores.telefono && 'text-red-600' }` } 
                htmlFor='telefono'>
                  Celular:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  +569
                </div>
                <input 
                  className={ `border pl-14 bg-[#F0F0F0] rounded-[20px] w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.telefono && 'border-red-600'}` }
                  type='text' 
                  id='telefono' 
                  name='telefono'
                  maxLength={ 8 }
                  value={ contacto.telefono }
                  onKeyDown={ validarNumerico }
                  onBlur={ handleBlur }
                  onChange={ handleChange }>
                </input>
              </div>
              { errores.telefono && <p className='text-red-600 font-medium text-[12px]'>{ errores.telefono }</p> }
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='mb-4 block xl:w-[686px] lg:w-[686px] md:w-[686px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-white text-[12px] font-medium not-italic leading-normal ${ errores.email && 'text-red-600' }` }
                htmlFor='email'>
                  Correo Electrónico:
              </label>

              <input 
                className={ `border bg-[#F0F0F0] rounded-[20px] w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.email && 'border-red-600'}` }
                type='email' 
                id='email' 
                name='email'
                value={ contacto.email }
                onBlur={ handleBlur }
                onChange={ handleChange }
                maxLength={ 256 }>
              </input>
              { errores.email && <p className='text-red-600 font-medium text-[12px]'>{ errores.email }</p> }
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='mb-4 block xl:w-[686px] lg:w-[686px] md:w-[686px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-white text-[12px] font-medium not-italic leading-normal ${ errores.mensaje && 'text-red-600' }` }
                htmlFor='mensaje'>
                  Mensaje:
              </label>

              <textarea 
                className={ `border bg-[#F0F0F0] rounded-[20px] w-full h-[117px] py-2 px-3 text-black resize-none focus:outline-none ${ errores.mensaje && 'border-red-600'}` }
                id='mensaje' 
                name='mensaje'
                value={ contacto.mensaje }
                onBlur={ handleBlur }
                maxLength={ 900 }
                onChange={ handleChange }>
              </textarea>
              { errores.email && <p className='text-red-600 font-medium text-[12px]'>{ errores.mensaje }</p> }
            </div>
          </div>

          <div className='flex justify-between'>
            <button type="submit" className='w-[330px] h-[54px] bg-[#F0F0F0] rounded-[20px] text-[12px] text-[#003FA2] font-medium mx-auto not-italic leading-normal transition duration-300 ease-in-out hover:bg-[#E75F00] hover:text-white'>Enviar formulario</button>
          </div>

        </form>
      </div>
      </div>
    </main>
  )
}
