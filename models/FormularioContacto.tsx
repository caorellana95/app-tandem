export interface FormularioContacto {
    nombre:string;
    apellido:string;
    empresa:string;
    telefono:string;
    email: string;
    mensaje:string;
}

export interface ErroresFormulario {
    nombre:string;
    apellido:string;
    empresa:string;
    telefono:string;
    email: string;
    mensaje:string;
}

export function validarFormulario(formulario:FormularioContacto, errores:ErroresFormulario, setErrores:Function) {
    let flag = true;

    if( formulario.nombre === '' || formulario.apellido === '' || formulario.empresa === '' || formulario.telefono === '' || 
        formulario.email === '' || formulario.mensaje === '' ) {
        flag = false;
    }

    if( formulario.nombre === '' ) {
        setErrores({ ...errores, errorNombre: 'El campo Nombre es obligatorio' });
        flag = false;
    } else {
        setErrores({ ...errores, errorNombre: '' });
    }
    return flag;
}