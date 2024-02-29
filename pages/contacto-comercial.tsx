import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import axios, { Axios } from 'axios';
import { FormularioContactoComercial, ErroresFormularioComercial } from '../models/FormularioContactoComercial';
import { useRouter } from 'next/router';
import Header2 from '@/components/header2';
import FooterIndustrial from '@/components/footer-industrial';


export default function Contacto(){

  const [contacto, setContacto] = useState<FormularioContactoComercial>({
    nombre:'',
    empresa: '',
    email:'',
    rutEmpresa:'',
    telefono:'',
    direccionProyecto:'',
    region: '',
    industria: '',
  });

  const [errores, setErrores] = useState<ErroresFormularioComercial>({
    nombre:'',
    empresa: '',
    email:'',
    rutEmpresa: '',
    telefono:'',
    direccionProyecto:'',
    region: '',
    industria: '',
  })

  const router = useRouter();
  
  async function enviarFormulario(e: React.FocusEvent<HTMLFormElement>) {
    e.preventDefault();

    let errores:any = {};

    for(let key of Object.keys(contacto)){
      if( contacto[key as keyof FormularioContactoComercial] === '' ) {
        errores[`${ key }`] = `El campo ${ key } es obligatorio`;
      }
    }

    if (contacto.region === '--Seleccione región--') {
      errores.region = 'Debe seleccionar una región';
    }
    
    if(contacto.industria === '--Seleccione industria o sector--'){
      errores.industria = 'Debe seleccionar una industria o sector';
    }

    for(let key of Object.keys(errores)) {
      if( errores[key as keyof ErroresFormularioComercial] !== '' ) {
        setErrores(errores);
        return;
      }
    }
    router.push('confirmacion-contacto-comercial');
    
    // try {
    //   const response = await axios.post('/api/contacto-comercial', contacto);
    //   router.push('confirmacion-contacto-comercial');
    // } catch (error: any) {
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
      <div className='justify-center mx-auto'>
      <Head>
        <title>Tandem Industrial | Contáctenos</title>
      </Head>

      <div className=''>
        <div className='bg-white pb-12'>
          <Header2/>
            <div className=''>
              <h1 className='text-blue-600 font-bold text-4xl text-center mt-24'>CONTACTO COMERCIAL</h1>
            </div>
            <div className='mt-12'>
              <p className='sm:hidden mx-14 pb-10 text-blue-500 text-2xl sm:mx-auto ml-4 sm:mr-36 text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
              <p className='sm:flex hidden pb-4 text-blue-500 text-2xl sm:mx-12 sm:mr-36'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>
              <h1 className='sm:hidden underline underline-offset-1 text-center text-2xl font-bold text-blue-600 mb-12'>DATOS DEL SOLICITANTE</h1>
              <div className='sm:flex' id='contenedor-formulario-contacto-comercial'>
                <div className='sm:flex hidden sm:ml-12 bg-white border-4 sm:w-96 w-72 mx-auto sm:mt-24 sm:ml-16 px-36 mb-4 sm:px-96 sm:h-[931px] h-72'></div>
                
                <form id='formulario-contacto-comercial' className='mt-7 sm:mr-96' method='POST' onSubmit={(e: React.FocusEvent<HTMLFormElement>) => enviarFormulario(e)}>
                
                <h1 className='sm:flex hidden underline underline-offset-1 text-center sm:ml-48 text-2xl font-bold text-blue-600 mb-12'>DATOS DEL SOLICITANTE</h1>

                  <div className='sm:flex justify-center'>
                    <div className='mb-4 xl:w-[331px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-11/12 mx-auto sm:mx-12'>

                      
                      <label 
                        className={ `block text-blue-600 text-xl font-bold not-italic leading-normal ${ errores.nombre && 'text-red-600' }` } 
                        htmlFor='nombre'>
                          NOMBRE
                      </label>
                      
                      <input 
                        className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.nombre && 'border-red-600' }` }                    
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
                className={ `block text-blue-600 text-xl font-bold not-italic leading-normal ${ errores.email && 'text-red-600' }` } 
                htmlFor='email'>
                  CORREO ELECTRÓNICO
              </label>

              <input 
                className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.email && 'border-red-600'}` }
                type='text' 
                id='email' 
                name='email'
                value={ contacto.email }
                onBlur={ handleBlur }
                maxLength={ 100 }
                onChange={ handleChange }>
              </input>
              { errores.email && <p className='text-red-600 font-medium text-[12px]'>{ errores.email }</p> }
            </div>
          </div>

          <div className='xl:flex xl:flex-row md:flex md:flex-row xl:flex-auto md:flex-auto sm:flex-col justify-between'>
            <div className='mb-4 xl:w-[331px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-11/12 mx-auto sm:mx-12'>
              <label 
                className={`block text-blue-600 text-xl font-bold not-italic leading-normal  ${ errores.telefono && 'text-red-600' }`}
                htmlFor='telefono'>
                  TELÉFONO
              </label>
              <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  +569
                </div>
              <input 
                className={ `border-2 w-full h-14 pl-14 py-2 px-3 text-black focus:outline-none ${ errores.telefono && 'border-red-600'}` }
                type='text' 
                id='telefono' 
                name='telefono'
                value={ contacto.telefono }
                onKeyDown={ validarNumerico }
                onBlur={ handleBlur }
                maxLength={ 8 }
                onChange={ handleChange }>
              </input>
              { errores.telefono && <p className='text-red-600 font-medium text-[12px]'>{ errores.telefono }</p> }
            </div>
            </div>

            <div className='mb-4 xl:w-[331px] lg:w-[331px] md:w-[331px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-blue-600 text-xl font-bold not-italic leading-normal ${ errores.empresa && 'text-red-600' }` } 
                htmlFor='empresa'>
                  EMPRESA
              </label>
              <div className="relative">
                <input 
                  className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.empresa && 'border-red-600'}` }
                  type='text' 
                  id='empresa' 
                  name='empresa'
                  value={ contacto.empresa }
                  onBlur={ handleBlur }
                  onChange={ handleChange }>
                </input>
              </div>
              { errores.empresa && <p className='text-red-600 font-medium text-[12px]'>{ errores.empresa }</p> }
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='sm:ml-12 mb-4 block xl:w-[686px] lg:w-[686px] md:w-[686px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-blue-600 text-xl font-bold not-italic leading-normal ${ errores.rutEmpresa && 'text-red-600' }` }
                htmlFor='rutEmpresa'>
                  RUT EMPRESA
              </label>

              <input 
                className={ `border-2 w-full sm:w-[710px] h-14 py-2 px-3 text-black focus:outline-none ${ errores.rutEmpresa && 'border-red-600'}` }
                type='text' 
                id='rutEmpresa' 
                name='rutEmpresa'
                value={ contacto.rutEmpresa }
                onBlur={ handleBlur }
                onChange={ handleChange }
                maxLength={ 13 }>
              </input>
              { errores.rutEmpresa && <p className='text-red-600 font-medium text-[12px]'>{ errores.rutEmpresa }</p> }
            </div>
          </div>
          <div>
          <h1 className='underline underline-offset-1 text-center text-2xl font-bold text-blue-600 py-10'>DATOS DEL PROYECTO</h1>
          </div>
          
          <div className=''>
          <div className='flex justify-between'>
          <div className='mb-4 block xl:w-[686px] lg:w-[686px] md:w-[686px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-blue-600 text-xl font-bold not-italic leading-normal ${ errores.direccionProyecto && 'text-red-600' }` }
                htmlFor='adress'>
                  DIRECCIÓN DEL PROYECTO
              </label>

              <input 
                className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.direccionProyecto && 'border-red-600'}` }
                type='text' 
                id='adress' 
                name='direccionProyecto'
                value={ contacto.direccionProyecto }
                onBlur={ handleBlur }
                onChange={ handleChange }
                >
              </input>
              { errores.direccionProyecto && <p className='text-red-600 font-medium text-[12px]'>{ errores.direccionProyecto }</p> }
            </div>
          </div>
          <div className='flex justify-between'>
          <div className='mb-4 block xl:w-[686px] lg:w-[686px] md:w-[686px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-blue-600 text-xl font-bold not-italic leading-normal ${ errores.region && 'text-red-600'}` }
                htmlFor='region'>
                  REGIÓN DEL PROYECTO
              </label>

              <select 
                className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.region && 'border-red-600'}` } 
                id='region' 
                name='region'
                onBlur={ handleBlur }
                onChange={ handleChange }>
                    <option>--Seleccione región--</option>
                    <option>XV REGIÓN DE ARICA Y PARINACOTA</option>
                    <option>I REGIÓN DE TARAPACÁ</option>
                    <option>II REGIÓN DE ANTOFAGASTA</option>
                    <option> III REGIÓN DE ATACAMA</option>
                    <option>IV REGIÓN DE COQUIMBO</option>
                    <option>V REGIÓN DE VALPARAÍSO</option>
                    <option>REGIÓN METROPOLITANA DE SANTIAGO</option>
                    <option>VI REGIÓN DEL GENERAL BERNARDO O'HIGGINS</option>
                    <option>VII REGIÓN DEL MAULE</option>
                    <option>XVI REGIÓN DEL ÑUBLE</option>
                    <option>VII REGIÓN DEL BÍO BÍO</option>
                    <option>IX REGIÓN DE LA ARAUCANÍA</option>
                    <option>XIV REGIÓN DE LOS RÍOS</option>
                    <option>X REGIÓN DE LOS LAGOS</option>
                    <option>XI REGIÓN DE AYSEN GENERAL CARLOS IBÁÑEZ DEL CAMPO</option>
                    <option>XII REGIÓN DE MAGALLANES</option>
              </select>
              {errores.region && <p className='text-red-600 font-medium text-[12px]'>{errores.region}</p>}
            </div>
          </div>
          </div>

          <div className='flex justify-between pb-6'>
          <div className='mb-4 block xl:w-[686px] lg:w-[686px] md:w-[686px] sm:w-11/12 w-11/12 mx-auto'>
              <label 
                className={ `block text-blue-600 text-xl font-bold not-italic leading-normal ${ errores.industria && 'text-red-600'}` }
                htmlFor=''>
                  INDUSTRIA O SECTOR
              </label>

              <select 
                className={ `border-2 w-full h-14 py-2 px-3 text-black focus:outline-none ${ errores.industria && 'border-red-600'}` } 
                id='industria' 
                name='industria'
                onBlur={ handleBlur }
                onChange={ handleChange }>
                  <option>--Seleccione industria o sector--</option>
                  <option>AGRICULTURA</option>
                  <option>ALIMENTACIÓN</option>
                  <option>COMERCIO</option>
                  <option>CONSTRUCCIÓN</option>
                  <option>EDUCACIÓN</option>
                  <option>HOTELERÍA Y TURISMO</option>
                  <option>INGENIERÍA</option>
                  <option>MANUFACTURAS</option>
                  <option>MEDIOS DE COMUNICACIÓN</option>
                  <option>MINERÍA</option>
                  <option>SERVICIOS FINANCIEROS</option>
                  <option>SERVICIOS DE SALUD</option>
                  <option>SERVICIOS PÚBLICOS</option>
                  <option>TRANSPORTE</option>
                  <option>TELECOMUNICACIONES</option>
              </select>
              {errores.industria && <p className='text-red-600 font-medium text-[12px]'>{errores.industria}</p>}

              </div>
          </div>

          <div className='flex justify-between'>
          <button type="submit" className='w-60 h-[54px] bg-blue-800 text-2xl text-white font-medium mx-auto sm:mr-12 not-italic leading-normal transition duration-300 ease-in-out hover:bg-[#E75F00] hover:text-white'>CONTACTARME</button>
          </div>
        </form>
        </div>
        </div>
        </div>
        <FooterIndustrial/>


      
      </div>
      </div>
  )
  }