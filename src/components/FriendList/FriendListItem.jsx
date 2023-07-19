import React from 'react';
import './FriendList.css';
//import PropTypes from "prop-types";

function FriendListItem() {
    return (
        <li key="1" class="item">
            <span class="status">Hola</span>
            <img class="avatar" src="" alt="User avatar" width="48" />
            <p class="name">arriba esta la imagen de prueba</p>
        </li>
    );
}

export default FriendListItem;