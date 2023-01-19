import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    /**
     * Function that returns a Badge
     * depending on the level of the task
     */

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                ) 
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )                   
                
        
            default:
                break;
        }
    }
        /**
         * Function that returns icon depending on completion of the task
         */


    function taskCompletedicon(parms) {
        if (task.completed) {
            return (<i className='bi bi-archive' style={{color:'green'}}></i>)
        }else {
            return (<i className='bi bi-bag-heart-fill' style={{color:'grey'}}></i>)
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <spam className='ms-2'>{task.name}</spam>
            </th>
            <td className='aling-middle'>
               <spam >{task.description}</spam>
            </td>
            <td className='aling-middle'>
                {/* Execution of function to return badge element */}
                {taskLevelBadge()}
            {/* todo: sustituir por un badge
               <spam >{task.level}</spam> */}

            </td>
            <td className='aling-middle'>
            {/* todo: sustituir por un icons */}
            {/* execution of function to return icon depending on completion */}
              {taskCompletedicon ()}

               {/* { task.completed ?
                    (<i className='bi bi-archive' style={{color:'green'}}></i>)  
                    :  (<i className='bi bi-bag-heart-fill' style={{color:'grey'}}></i>)

               } */}
               <i className='bi-trash' style={{color: 'tomato', fontSize: '40px'}}></i>
                <spam >{task.completed ? 'Completed ' : 'pending'}</spam> 
            </td>
        </tr>



        // <div>
        //     <h2 className= 'task-name'>
        //         Nombre: { task.name }
        //     </h2>
        //     <h3>
        //         Descripción: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level }
        //     </h4>
        //     <h5>
        //         this task is : { task.completed ? 'COMPLETED': 'PENDING' }
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;