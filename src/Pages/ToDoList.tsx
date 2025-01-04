
import {useState} from 'react'
import '../styles/todo.css'

function ToDoList() {
    const [tasks, setTask]:any = useState([]);
    const [newTask, setNewTask]:any = useState("");


    function handleInput(event: any){
        setNewTask(event.target.value);
    }

    function addTask(){
        
        if(newTask.trim() !== ""){
            setTask((t: any) => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index: number){
        const updatedTask = tasks.filter((_: any, i: number) => i !== index);
        setTask(updatedTask);
    }

    
    function UpTask(index: any){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] = 
            [updatedTask[index - 1],updatedTask[index]];
            setTask(updatedTask);
        }
    }

    
    function DownTask(index: number){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1],updatedTask[index]];
            setTask(updatedTask);
        }
    }

    return (
    <>
    <div className='ToDoList'>
        <h1>To do List</h1>
        <div>
            <input 
            type="text" 
            placeholder='Enter a Task'
            value={newTask}
            onChange={handleInput}
            />

            <button
            onClick={addTask}
            className='buttoning'>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task: any , index: any) => 
            <li key={index}>
                <span className="text">
                    {task}
                </span>
                
                <button
                className='delete-button'
                onClick={() => deleteTask(index)}>
                    Delete
                </button>

                <button
                className='delete-button'
                onClick={() => UpTask(index)}>
                    Up
                </button>

                <button
                className='delete-button'
                onClick={() => DownTask(index)}>
                    Down
                </button>
            </li>
            ) }
        </ol>

    </div>
    </>
)
}

export default ToDoList