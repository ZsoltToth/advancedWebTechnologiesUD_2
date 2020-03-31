import React from 'react';

function Greetings(props){
    return (
        <h1>Hello&nbsp;
            {
                props.name != null && props.name !== undefined ?
                props.name : "World"
            }
            !</h1>
    );
}
export default Greetings;
