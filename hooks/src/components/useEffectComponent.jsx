import React, { useState } from 'react'
import { useEffect } from 'react';

function UseEffectComponent() {
    console.log("useEffectComponent is rendered!");

    useEffect(() => {
        console.log("Always works! (No parameter)");
    })  // Bu effect, component her render edildiğinde çalışır. 

    const [name, setName] = useState("")
    const [age, setAge] = useState(25)
    const [city, setCity] = useState("")
    const [district, setDistrict] = useState("")

    useEffect(() => {
        console.log("Works only once (Empty Array)");
    }, [])  //Bu effect, component ilk kez render edildiğinde çalışır.


    useEffect(() => {
        console.log("Name State Changed");
    }, [name])  // Bu effect, ilk kez render edildiğinde ve parametre olarak aldığı state değiştiğinde çalışır.


    useEffect(() => {
        console.log("Age State Changed!");
    }, [age])


    useEffect(() => {
        console.log("Both City and District States Changed!");
    }, [city, district])  // Bu effect, parametre olarak aldığı iki state'ten biri değiştiğinde çalışır.
    
  return (
   <>
    <br /> <br /> <br />
   {name}
    <button onClick={() => setName("cihan")}>Change</button>
    <br />
    <button onClick={() => setAge(age - 1)}>Decrease Age</button>
    {age}
    <button onClick={() => setAge(age + 1)}>Increase Age</button>
    <br />
     <button onClick={() => setCity("Bursa")}>Şehir Değiştir</button>
     <button onClick={() => setDistrict("MKP")}>İlçe Değiştir</button>
     <br />
     City: <i><strong>{city}</strong></i> District: <i><strong>{district}</strong></i>
   </>
  )
}

export default UseEffectComponent