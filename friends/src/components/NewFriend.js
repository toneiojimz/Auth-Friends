import React, {useState} from 'react';




const NewFriend = props => {
    const [friend, setFriend] = useState({ name: '', age:'', email:''});

   


    const handleSubmit = e => {
        e.preventDefault();
        props.makeFriend(friend);
        setFriend({ name: '', age: '', email: ''});

    }

    const handleChange= e => {
        setFriend({...friend, [e.target.name]: e.target.value
        });
    }

    return (
        <div className='column'>
            
            <h1 className='label is-large'>Add New Friend</h1>
           
            <form  onSubmit={handleSubmit}>
                <input className='column '
                    type='text'
                    name='name'
                    onChange={handleChange}
                    value={friend.name}
                    placeholder='name'
                    />
                    <input className='column'
                    type='text'
                    name='age'
                    onChange={handleChange}
                    value={friend.age}
                    placeholder='age'
                    />
                    <input className='column '
                    type='text'
                    name='email'
                    onChange={handleChange}
                    value={friend.email}
                    placeholder='email'
                    />
                    <button className='button is-success is-loading' 
                    type='submit'> Get Friend-ly!</button>
            </form>
        </div>
    );
};

export default NewFriend;