import {useState} from 'react'//importing a hook
export default function Counter(){
    //var count=0;
//this increment and decrement will work to inc or dec the value of count but for the chnages in ui we need states and to use states we need hooks
//hooks are predefined components that are used to enhance the functionality 
//can create hooks of our own 

//state is basically a variable that is used to update ui
//useState is a tool to create state 
const [count,setCount]=useState(0);//created a state 
    function handleIncrement(){
        setCount(count=>count+1);//used the manager setCount that updates the value in ui and cannot use = int his as we are changing dtate not value so use =>
        console.log(count)
    }

    function handleDecrement(){
        if(count===0){
            alert("Can't decrease now")
            return;
        }
        setCount(count=>count-1);
        console.log(count)
    }
    return(
        <>
        <h1>Counter App</h1>
        <h3>Count={count}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </>
    )
}