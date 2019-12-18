import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from './Friend';
import NewFriend from './NewFriend';


const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState({name:'', age:'', email:''});

    useEffect(()=> {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(response => {
            console.log(response);
            setFriends(response.data);
            setLoading(false);
        })
        .catch(error=> console.log(error));
    }, []);

    const addFriend = newFriend => {
        setLoading(true);
        console.log(newFriend);
        axiosWithAuth().post('/friends', newFriend)
        .then(res => {
            console.log(res);
            setFriends(res.data);
            setLoading(false);
        })
        .catch(err => console.log(err));
    }

    


    return (
        <div>
            <NewFriend addFriend={addFriend}/>
            <h2>....Friends....</h2>
            <div>
                {loading && <p>Populating...</p>}
                {friends.map(friend => {
                    return (<Friend key={friend.id} friend={friend} />)})}
            </div>
        </div>
    );
};

export default FriendsList;