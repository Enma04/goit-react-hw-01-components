import React from 'react';
import './FriendList.css';
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

export default function FriendList({friends, children}) {
    console.log(friends);
    return (
        <ul key="listaAmigos" className='friend-list'>
            {
                friends.map( (friend, index) => (
                    <FriendListItem key={index} index={index} avatar={friend.avatar} name={friend.name} />
                ))
            }
            {children}
        </ul>
        
    );
}

FriendList.propTypes = {
    //children: PropTypes.,
    friends: PropTypes.array.isRequired,
}