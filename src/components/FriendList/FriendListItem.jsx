import React from 'react';
import {Fragment} from 'react';
import './FriendList.css';
import PropTypes from "prop-types";


export default function FriendListItem({index, avatar, name, isOnline}) {
    return (
        <Fragment>
            <li key={index+1} className="FriendItem">
                <span className="FriendStatus">Hola</span>
                <img className="FriendAvatar" src={avatar} alt="User avatar" width="48" />
                <p className="FriendName"> {name} </p>
            </li>
        </Fragment>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}