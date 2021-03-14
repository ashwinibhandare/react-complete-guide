import React from 'react';

const char = (props) => {
    // return ( 
    //     <div className="Person">
    // <p onClick={props.click}>I am {props.name} and my age is {props.age}</p>
    // <input type="text" onChange={props.change} value={props.name} />
    // </div>
    // )
    const style = {
        display:'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };
    return ( 
        <div style={style} onClick={props.clicked}>
            <p>{props.character}</p>
    </div>
    )
};

export default char;