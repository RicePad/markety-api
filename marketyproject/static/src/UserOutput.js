import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>This is an output component with username: {props.username}</p>
        </div>
    )
}


export default userOutput;