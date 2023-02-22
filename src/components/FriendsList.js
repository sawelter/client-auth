import React from "react";
import { connect } from "react-redux";


const FriendsList = (props) => {

    console.log(props.friends);
    return (
        <div id="friends-list">
            {props.friends.map((friend) => {
                return (
                    <div className="friend" key={friend.id}>
                        <div className="friend-name">{friend.name}</div><div className="friend-email">{friend.email}</div>
                    </div>
                )
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, {})(FriendsList);