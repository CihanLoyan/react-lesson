import React from 'react';
import './App.css'
import Counter from './Pages/counter';
import UserList from './Pages/userList';
import PostList from './Pages/PostList';
import Navbar from './components/navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { USERS, COUNTER, POSTS } from './constants/routes'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={USERS} element={<UserList />} />
        <Route path={COUNTER} element={<Counter />}/>
        <Route path={POSTS} element={<PostList />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
