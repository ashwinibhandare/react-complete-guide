import React from 'react';
//import './Person.css';
import styled from "styled-components";

const person = (props) => {
    // return ( 
    //     <div className="Person">
    // <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
    // <input type="text" onChange={props.change} value={props.name} />
    // </div>
    // )
    const StyleDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    padding: 16px;
    text-align: center;
    @media(min-width:500px) {
        width:450px;
    }
`;
    return ( 
        // <div className="Person">
     <StyleDiv>  
    <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
    <input type="text" onChange={props.change} value={props.name} />
    </StyleDiv> 
    )
};

export default person;