/* const login = (Usuario) =>{
    const resultado={
        email:null,
        password:null,
    }
    let email 
        let Usuario = prompt ('ingrese un email')
            while (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(usuario))
                alert('email incorrecto')
            Usuario = prompt ('ingrese un email nuevamente')

            let password
        let Usuario = prompt ('ingrese su password')
            while(!number && =< 6 || '')
                if(password === password.ToLowerCase()||password===''||password===null)
                alert('password is wrong')
            Usuario = prompt ('ingrese nuevamente su password')
    }

console.log(email)

return resultado
 */

const tieneMayuscula = (palabra) => palabra.ToLowerCase() !== palabra

const validacionEmail = (email) =>{
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)
}

const validacionPassword = (password) =>{
    return password && password.length > 6 && tieneMayuscula (password)
}

const login = () =>{
    const usuario = {
        email:null,
        password:null,
    }
    let email = prompt('ingrese un email')
    while(!validacionEmail(email)){
        email = prompt('Error email invalido: ingrese nuevamente el email')
    }
}
usuario.password = password

alert(`Usuario ${usuario.email} registrado`)

return usuario

