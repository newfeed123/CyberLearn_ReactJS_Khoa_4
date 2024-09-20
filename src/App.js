import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import './App.css';
import Header from './components/Home/Header/Header';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import TodoList from './pages/ToDoList/TodoList';
import TodoListRFC from './pages/ToDoList/TodoListRFC';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/profile" element={<Detail />} />
        <Route exact path="/todolistrfc" element={<TodoListRFC />} />
        <Route exact path="/todolistrcc" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;