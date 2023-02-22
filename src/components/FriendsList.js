import React from "react";
import { connect } from "react-redux";


const FriendsList = (props) => {

    console.log(props.friends);
    return (
        <div>
            {props.friends.map((friend) => {
                return (
                    <div className="friend" key={friend.id}>
                        {friend.name}: {friend.email}
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