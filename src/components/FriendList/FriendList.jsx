import React from 'react';
import './FriendList.css';
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

export default function FriendList({friends, children}) {
    console.log(friends);
    return (
        <ul className='friendList'>
            {
                friends.map( (friend, index) => (
                    <FriendListItem key={index}
                                    index={index}
                                    avatar={friend.avatar}
                                    name={friend.name}
                                    isOnline={friend.isOnline} />
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