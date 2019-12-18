import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosAuth';
import Friend from './Friend';
import NewFriend from './NewFriend';



const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axiosWithAuth().get('/friends')
        .then(res => {
            console.log(res);
            setFriends(res.data);
            setLoading(false);
        })
        .catch(err=> console.log(err));
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
                {loading && <p>Loading...</p>}
                {friends && friends.map(friend => {
                    return (<Friend key={friend.id} friend={friend} />)})}
            </div>
        </div>
    );
};

export default FriendsList;