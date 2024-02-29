export interface FormularioContactoComercial {
    nombre:string;
    empresa:string;
    telefono:string;
    email: string;
    rutEmpresa:string;
    direccionProyecto:string;
    region: string;
    industria: string;

}

export interface ErroresFormularioComercial {
    nombre:string;
    empresa:string;
    telefono:string;
    email: string;
    rutEmpresa:string;
    direccionProyecto:string;
    region: string;
    industria: string;
}

export function validarFormulario(formulario:FormularioContactoComercial, errores:ErroresFormularioComercial, setErrores:Function) {
    let flag = true;

    if( formulario.nombre === '' || formulario.empresa === '' || formulario.telefono === '' || 
        formulario.email === '' || formulario.rutEmpresa === '' || formulario.direccionProyecto === '') {
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