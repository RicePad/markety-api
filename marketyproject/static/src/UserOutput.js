import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p onClick={props.click}>This is an output component with username: {props.username} </p>
        </div>
    )
}


export default userOutput;