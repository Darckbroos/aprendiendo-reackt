import React, {useState} from 'react';

//Definiendo estilos en constantes:

//? Estilo para usuario logueo
const loggedStyle = {
    color: 'blue'
};

//? Estilo para usuario no logeado
const unloggedStyle ={
    color:'tomato',
    fontWeigth: 'bold'
}

const GreetingStyled = (props) => {

    //generamos un estado para el componente
    //y asi controlar si el usuario esta o no logueado

    const [logged, setLogged] = useState(false)

    const greetingUsuer = () => (<p>hola, {props.name}</p>)

    const pleaseLogin = () =>  (<p>Please Login</p>)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {logged ?
            // (<p>hola, {props.name}</p>)
            greetingUsuer ()
            :
            // (<p>Please Login</p>)
            pleaseLogin ()
            }
            <button onClick={()=>{
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
