import React from 'react';
import bulma from 'bulma';

const Friend = props => {
   
    return(
        <div className='box'>
            <p> Name: {props.friend.name}</p>
            <p> Age: {props.friend.age}</p>
            <p> Email: {props.friend.email}</p>
        </div>
        )
}

export default Friend;