import React from 'react';
import bulma from 'bulma';

const Friend = props => {
    
    return(
        <div className='column is-one-third'>
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
            <p> Email: {props.email}</p>
        </div>
        )
}

export default Friend;