import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task ('Example', 'Default', true, LEVELS.NORMAL);
    const defaultTask1 = new Task ('Example1', 'Default1', false, LEVELS.URGENT);
    const defaultTask2 = new Task ('Example2', 'Default2', true, LEVELS.BLOCKING);





    const [task, setTasks] = useState([defaultTask,defaultTask1,defaultTask2]);
    const [loading, setLoading] = useState(true);
    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [task]);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estad de una tarea')
    }

    return (
        <div>
        <div className='col-12'>
            <div className='card'>
                <div className='card-header p-3 '>
                    {/* Card header (title) */}
                    <h5>
                     Your Task: 
                    </h5>
                </div>
                {/* Card Body (content) */}
                <div className='card-body' data-mbd-perfect-Scroll='true' style={ {possition: 'relative', height: '400px'} }>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>

                            </tr>
                        </thead>
                        <tbody>

                        {
                            task.map((task, index) => 
                            {
                                return(
                                    <TaskComponent 
                                        key={index} 
                                        task={task} >
                                    </TaskComponent>
                                )
                            })
                        }
                            {/*  TODO: Iterar sobre una lista de tareas */}
                            
                            
                        </tbody>
                       
                    </table>
                </div>
                <TaskForm></TaskForm>
            </div>
            
        </div>
        {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
        {/* <TaskComponent task={defaultTask} ></TaskComponent> */}
    </div>
    );
};


export default TaskListComponent;