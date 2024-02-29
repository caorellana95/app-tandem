export interface FormularioTrabajo {
    nombre:string;
    rut:string;
    renta:string;
    telefono:string;
    email: string;
    descripcion:string;
    disponibilidad:string;

}

export interface ErroresFormularioTrabajo {
    nombre:string;
    rut:string;
    renta:string;
    telefono:string;
    email: string;
    descripcion:string;
    disponibilidad:string;
}

export function validarFormulario(formulario:FormularioTrabajo, errores:ErroresFormularioTrabajo, setErrores:Function) {
    let flag = true;

    if( formulario.nombre === '' || formulario.rut === '' || formulario.renta === '' || formulario.telefono === '' || 
        formulario.email === '' || formulario.descripcion === '' ) {
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