"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
const [mainTask, setMainTask] = useState([])

  const rukRefresh = (e) =>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
  }

  const deleteTask = (i) =>{
    let copytask = [...mainTask,]
    copytask.splice(i,1)
    setMainTask(copytask)
  }
  
  let renderTask = <h2 className=' flex justify-center text-[2vw] font-bold'>No Task Avaliable</h2>

  if (mainTask.length>0)  {
    renderTask = mainTask.map((t,i)=>{
      return(
        <li className="flex justify-center items-center">
        <div className=" flex justify-between mb-5 items-center">
          <h1 className='  font-bold   text-[2vw] w-[30vw] rounded items-center '>{t.title}</h1>
          <h1 className=' text-[1.5vw] w-[30vw] rounded font-semibold  px-3 py-3'>{t.desc}</h1>
        </div>
        <button className=" border-2 border-red-400 m-5 px-10 py-3 text-[1.5vw]  bg-red-400 text-white font-bold  rounded" onClick={()=>{
            deleteTask(i)
          }}>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
    <h1 className="text-[2vw] bg-black text-white py-4 text-center font-bold">Harsh's To-do List</h1>

    <form className=' flex justify-center' onSubmit={rukRefresh}>
      <input type="text" className="border-4 border-black
       m-5 mt-10 px-3 py-3 text-[1.5vw] w-[30vw] rounded"  placeholder='Enter Your Task'
       value={title}
       onChange={(e)=>{
        settitle(e.target.value)
       }}/>
      
      <input type="text" className="border-4 border-black m-5 px-3 mt-10 py-3 text-[1.5vw] w-[30vw] rounded"  placeholder='Enter Your Task Description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}/>

      <button className="border-2 border-black m-5 px-10 py-3 text-[1.5vw] mt-10 bg-black text-white font-bold  rounded add">Add Task</button>
    </form> 

    <div className=" bg-slate-300 py-5 mt-5">{renderTask}</div>
    </>
  )
}

export default page