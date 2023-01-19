import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {

    // breve introduccion a useState
    //nost [ variable, metodo para actualizarlo] = useState(Valor Inicial)

    const [age, setage] = useState(29)

    const birthday = () => {
        setage(age + 1)
    }
    return (
        <div>
            <h1>
                soy flaite y la{ props.name } desde las tarria!
            </h1>
            <h2>
                tu edad es de :{ age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {
    name: PropTypes.string
};


export default Greetingf;
