import "./EventToDo.css";
import { useState } from "react";
export default function EventToDo(){
    // function handleClick(name){
    //     alert(`${name} pressed button`)
    // }

    // function handleSubmit(e){//e=event
    //     e.preventDefault();//to prevent the page from reloading 
    //     const input=e.target.task;
    //     const TaskValue=input.value.trim();
    //     if(TaskValue==="")
    //     {
    //         alert("Task cannot be empty");
    //         return;
    //     }
    //     const li=document.createElement("li");
    //     li.innerHTML=`<span>${TaskValue}</span>
    //     <button class="deletebtn">Delete</button>`//kept in back ticks to concatenate two html elements and also static values
    //     document.getElementById("taskList").appendChild(li);
    // }

    // function handleClickList(e){
    //     if(e.target.className=="deletebtn"){
    //        e.target.parentElement.remove();
    //     }
    // }

    // return(
    //     <>
    //     {/* <h1>Event Handling</h1>
    //     <button onClick={handleClick}>Click Me</button> */}

    //     <h1>To Do App</h1>
    //     {/* <button onClick={()=>handleClick("Aastha")}>Click Me</button> */}

    //     <form onSubmit={handleSubmit}>
    //         <input type="text" name="task" placeholder="Add your task here"/>
    //         <button type="submit">Add Task</button>
    //     </form>

    //     <ul id="taskList" onClick={handleClickList}>
            
    //     </ul>
    //     </>
    //     // we do not use handleclick with round brackets as it will show output even before clicking the buttton
    // )

//     const [task,setTask]=useState("");
//     const[tasks,setTasks]=useState([]);
//      function handleSubmit(e){//e=event
//         e.preventDefault();//to prevent the page from reloading 
//         const input=e.target.task;
//         const TaskValue=input.value.trim();
//         if(TaskValue==="")
//         {
//             alert("Task cannot be empty");
//             return;
//         }
//         const li=document.createElement("li");
//         li.innerHTML=`<span>${TaskValue}</span>
//         <button class="deletebtn">Delete</button>`//kept in back ticks to concatenate two html elements and also static values
//         document.getElementById("taskList").appendChild(li);
//     }

//     function handleClickList(e){
//         if(e.target.className=="deletebtn"){
//            e.target.parentElement.remove();
//         }
//     }

//     return(
//         <>
//         {/* <h1>Event Handling</h1>
//         <button onClick={handleClick}>Click Me</button> */}

//         <h1>To Do App</h1>
//         {/* <button onClick={()=>handleClick("Aastha")}>Click Me</button> */}

//         <form onSubmit={handleSubmit}>
//             <input type="text" name="task" placeholder="Add your task here"/>
//             <button type="submit">Add Task</button>
//         </form>

//         <ul id="taskList" onClick={handleClickList}>
            
//         </ul>
//         </>
//         // we do not use handleclick with round brackets as it will show output even before clicking the buttton
//     )
 const[task,setTask]=useState("");
   const[tasks,setTasks]=useState([]);


 function handleSubmit(e) {
    e.preventDefault();

    const taskValue = task.trim();

    if (taskValue === "") {
      alert("Cannot add empty task");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, taskValue]);
    setTask("");
  }

  function handleDelete(index) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  }


    return(
        <>
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="task">Add Task</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
);





 }