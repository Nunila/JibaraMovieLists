import React from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

const user_info = {
    userName: "",
    lists:  "",
}

const UserContext = React.createContext(user_info);

export default UserContext;
