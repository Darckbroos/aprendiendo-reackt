/**
 * Ejemplo de uso del Hooks useState
 * crear un componente de tipo funcion y acceder a su estado 
 * privado a traves de un hook y, ademas, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {


    // Valor iniciarl para iun contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre : 'Martin',
        email: 'martin@imaginagroup.com'

    } 

    /**
     * Queremos que el valorinicial y personainicial sean parte del estado del componente
     * para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente.
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial) 
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial)


    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador(){
        // ? funcionParaCambiar (nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de persona del componente
     */
    function actualizarPersona(){
        setPersona({
            nombre: 'kalbert',
            email: 'kal@gmail.com'
        })
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ****</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2> DATOS DE LA PERSONA: </h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* Bloqye de botones para actualizar el estado del componente */}
            <div>
                <button onClick={incrementarContador}> Incrementar contador</button>
                <button onClick={actualizarPersona}> Actualizar persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
