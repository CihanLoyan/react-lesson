import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const API_URL = "http://localhost:3005"

  const getAllUsers = async () => {
    const response = await axios.get(API_URL + '/users')
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(API_URL + `/users/${userId}`)
    console.log(response.data); 
  }

  const createUser = async (newUser) => {
    const user = await axios.post(API_URL + `/users`, newUser)
    console.log(user.data);
  }

  const updateUser = async (userId, updatedUser) => {
    const user = await axios.put(API_URL + `/users/${userId}`, updatedUser)
    console.log(user.data);
  }

  const deleteUserById = async (userId) => {
    const deletedUser = await axios.delete(API_URL + `/users/${userId}`)
    console.log(deletedUser.data);
  }

  useEffect(() => {  // İlk render edildiğinde
    /* getAllUsers() */
    /* getUserById(2) */


    /* const newUser = {
      "name": "salih", 
      "password": "zxc"
    }
    createUser(newUser) */



    /* const updatedUser = {
      "name": "salih2",
      "password": "vbn"
    }
    updateUser(26, updatedUser) */


    
    /* deleteUserById(26) */   
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
