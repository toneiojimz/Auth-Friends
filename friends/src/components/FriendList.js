import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosAuth';
import bulma from 'bulma';
import Friend from './Friend';
import NewFriend from './NewFriend';


const FriendList = props => {
    
    const [friends, setFriends]= useState([]);

    const [populate, setPopulate]= useState(true);
    
    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then (res => {
            console.log(res)
            setFriends(res.data)
            setPopulate(false);
        })
        .catch(err => console.log(err));
        

    }, []);

    const makeFriend= newFriend => {
        setPopulate(true);
        console.log(newFriend);
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => {
            setFriends(res.data);
            setPopulate(false);
        })
        .catch(err => console.log(err));
    } 

    return(
        <div>
            <NewFriend makeFriend={makeFriend}/>
            <div class='column has-gap is-one-fourth is-rounded is-success'>
                {populate && <p>Populating...</p>}
                {friends && friends.map(friend => {
                    return (<Friend key={friend.id} friend={friend}/>)
            })}
            </div>
        </div>
    )
}
export default FriendList;