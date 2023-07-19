import React from 'react';
import './FriendList.css';
//import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';

export default function FriendList(children) {
    <ul className='friend-list'>
        <FriendListItem />
        {children}
    </ul>
}