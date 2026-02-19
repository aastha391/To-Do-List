import { useState } from "react"
export default function Search(){
    const[search,setSearch]=useState("")
    const name=["Dennis","Ritchie","Paul","Frank"];

    const student=name.filter((names)=>names.toLowerCase().includes(search.toLowerCase()));
    return(
        <>
        <h2>Demo to show search</h2>
        <input type="text"
        placeholder="Enter key to search"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>

        <ul>
        {student.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
        </>
    )
}