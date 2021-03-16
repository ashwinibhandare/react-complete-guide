import logo from './logo.svg';
import styled from "styled-components";
import classes from './App.css';
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

import React, { useState } from 'react';
import Validation from './Validation/Validation';
import Char from "./Char/Char";


function App() {
  const[ personState, setPersonState] = useState({
    persons: [
      {id:1, name: "Max", age: "30"},
      {id:2, name: "Manu", age: "30"}
    ]
  });

  const[otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    setPersonState({
    persons: [
      {name: "Max1", age: "31"},
      {name: "Manu2", age: "30"}
    ]});
  };

const nameChangeHandler = (event, id) => {

  const personIndex = personState.persons.findIndex(p=>{
    return p.id === id;
  });
  
  ///Create copy by creating oobject with {}, with By value 
  const person = {
    ...personState.persons[personIndex]
  }
  person.name=event.target.value;

   ///Create copy by creating [], with By value 
  const persons = [...personState.persons];
  persons[personIndex] = person;
  
  setPersonState({persons:persons});
}

const [userState, setUserState] = useState({
  user: [
    {name:"Ash"},
    {name:"par"},
    {name:"yash"},
  ]
});

const changeUserName = () => {
setUserState({
  user: [
    {name:"Ash1"},
    {name:"pa2"},
    {name:"yash3"},
  ]
});
}

const onChangeUsername = (event) => {
  setUserState({
    user: [
      {name: event.target.value},
      {name: "dsf"},
      {name: "sdf"},
    ]
  });
}


const [showPersonState, setShowPersonState] = useState(false);

const togglePersonHandler = () => {
  setShowPersonState(!showPersonState)
}

const deletePersonHandler = (personIndex) => {
  //console.log("Jii")
  const persons = personState.persons;
  persons.splice(personIndex, 1);
  setPersonState({persons: persons});
}

const [textCountState, setTextCountState] = useState({text:''});
const textCount = (event) => {
  setTextCountState({text:event.target.value});
}

var textArray = textCountState.text.split("");

const deleteCharChandler = (index) => {
    const text = textCountState.text.split("");
    text.splice(index, 1);
    const updatetext = text.join('');
    setTextCountState({text:updatetext})
}

const charList = textArray.map((ch, index) => {
    return <Char character={ch}
    key={index}
    clicked={()=>deleteCharChandler(index)}/>
});

let assignedClasses = [];
if(personState.persons.length<=2) {
  assignedClasses.push(classes.red);
  console.log(personState.persons.length);
}
if(personState.persons.length<=1){
  assignedClasses.push(classes.bold);
  }


  return ( 
    
    <div className="{classes.App}" >
      <p className={assignedClasses.join(' ')}>Class</p>
      <button onClick={togglePersonHandler} alt={showPersonState}>
        Toggle Button
        </button>
  
      { showPersonState ?
      <div>
        {personState.persons.map((person, index) => {
           return <Person 
          //  click={switchNameHandler}
          click={() => deletePersonHandler(index)}
          
           name={person.name}
           age={person.age}
           change = {(event)=>nameChangeHandler(event, person.id)}
           key={person.id}
           ></Person>
        })}
       

    </div> : null
    }
      <button onClick={changeUserName}></button>
      <UserInput change={onChangeUsername} userName={userState.user[0].name}></UserInput>
      <UserOutput userName={userState.user[0].name}></UserOutput>
      <UserOutput userName={userState.user[1].name}></UserOutput>
      <UserOutput userName={userState.user[2].name}></UserOutput>

    {/* Assigment 2 */}
      <input type="text" onChange={(event) => textCount(event)}  value={textCountState.text}/>
      <p>{textCountState.text}</p>

      <Validation textLegth={textCountState.text.length}></Validation>
      { charList }
     
    {/* END Assigment 2 */}
    </div>
  );
}

export default App;
