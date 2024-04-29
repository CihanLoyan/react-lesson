import React from 'react'
import { useState } from 'react'

function UseStateComponent() {
  console.log("useStateComponent is rendered!");

  const [firstName, setFirstName] = useState('Cihan')
  const handleChange = () => setFirstName("Sümeyye")

  const [names, setNames] = useState(["Cihan", "Sümeyye"])
  const handleName = () => {
    setNames(["Sümeye", "Cihan"])
  }

  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  const [userInfo, setUserInfo] = useState({name: "Cihan", age: 26})
  const [log, setLog] = useState(false)
  const handleLog = () => setLog(log ? false : true)

  return (
    <>
      <button onClick={handleChange}>Change</button> 
      <br />
      {firstName} 
    
      <br />
      <button onClick={handleName}>Change Names</button>
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      <br />

      <div>
        <button onClick={decrease}>Decrease</button>
        <span>{count}</span>
        <button onClick={increase}>Increase</button>
      </div>


      <button onClick={handleLog}>{log ? "Log Out" : "Log In"}</button>
      {log ? <div>Hoşgeldiniz: {userInfo.name} {userInfo.age} </div> : <div>Giriş yapılamadı!</div>}
    </>
  )
}

export default UseStateComponent;