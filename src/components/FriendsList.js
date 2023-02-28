import React, { useState, useEffect } from "react";
import axios from "axios";


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token,
            }
        })
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div id="friends-list">
            {friends.map((friend) => {
                return (
                    <div className="friend" key={friend.id}>
                        <div className="friend-name">{friend.name}</div><div className="friend-email">{friend.email}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default FriendsList;