import React,{useState} from 'react';

const Friend = (fern) => {
    
    return(
        <div>
            <p> Name: {fern.name}</p>
            <p> Age: {fern.age}</p>
            <p> Email: {fern.email}</p>
        </div>
        )
}

export default Friend;