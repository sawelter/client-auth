export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const addFriend = (friend) => {
    return({type: ADD_FRIEND, payload: friend});
}
