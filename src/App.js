import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingf';
import TaskListComponent from './components/container/task_listo';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
     {/* <header className="App-header"> */}
         {/* <img src={logo} className="App-logo" alt="logo" />  */}
        {/* COmponetne propio greeting.jsx*/}
        {/*<Greeting name="ctm"></Greeting>*/}
        {/* Componente de ejemplo funcional*/}
       {/* <Greetingf name=" que sucede"></Greetingf>*/}
       {/* Componente de listado de tareas*/}
       {/* <TaskListComponent></TaskListComponent>*/}
       {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1>*/}
        {/* <Ejemplo2></Ejemplo2>  */}
        {/*  <MiComponenteConContexto></MiComponenteConContexto> */}
         {/* todo lo que hay aqui, es tratado como props.children  */}
        {/* <Ejemplo4 nombre="Kalbert">
          <h3> 
          Contenido del props.children
          </h3>
        </Ejemplo4>  */}
       {/* <GreetingStyled name="kal"></GreetingStyled> */}
        
      {/* </header>  */}
      {/* Gestion de eventos */}
        <Father></Father>
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;