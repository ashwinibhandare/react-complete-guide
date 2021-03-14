import React from 'react';

const validation = (props) => {
    // return ( 
    //     <div className="Person">
    // <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
    // <input type="text" onChange={props.change} value={props.name} />
    // </div>
    // )
    let validationMessage = 'Text long enough';
    if (props.textLegth <= 5) {
        validationMessage = 'Text short enough';
    }
    return ( 
       <div>
           <p> {validationMessage}</p>
       </div>
    )
};

export default validation;