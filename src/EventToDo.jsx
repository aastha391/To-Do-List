export default function EventToDo(){
    // function handleClick(name){
    //     alert(`${name} pressed button`)
    // }

    function handleSubmit(){//e=event
        e.preventDefault();//to prevent the page from reloading 
        const input=e.target.value;
        const inputValue=input.trim();
        if(inputValue==="")
        {
            alert("Task cannot be empty");
            return;
        }
        const li=document.createElement("li");
        li.innerHTML=<span>${inputValue}</span>

    }

    return(
        <>
        {/* <h1>Event Handling</h1>
        <button onClick={handleClick}>Click Me</button> */}

        <h1>To Do App</h1>
        <button onClick={()=>handleClick("Aastha")}>Click Me</button>

        <form onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Add your task here"/>
            <input type="submit">Add Task</input>
        </form>

        <ul id="taskList" onClick={handleClickList}>
            
        </ul>
        </>
        // we do not use handleclick with round brackets as it will show output even before clicking the buttton
    )
}