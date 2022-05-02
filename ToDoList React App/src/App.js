import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ToDos from './Components/ToDos';
import Footer from './Components/Footer';
import ToDosItem from './Components/ToDosItem';
import React, {useState} from 'react';

function App() {

  const {todos, setTodos} = useState([
    {
      "SrNum" : 1,
      "Title" : "Go to the shop"
    },
    {
      "SrNum" : 2,
      "Title" : "Go to the Market"
    },
    {
      "SrNum" : 3,
      "Title" : "Go to the Showroom"
    }
  ]);

  const onDelete = (todos)=>{

  }
  return (
    <>
    <Header title= "MyToDoList"/>
    <ToDos todos = {toDoArray} onDelete ={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
