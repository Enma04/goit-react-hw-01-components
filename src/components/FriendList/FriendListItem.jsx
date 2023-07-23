import React from 'react';
import { Fragment } from 'react';
import Estilos from './FrienList.module.css';
import PropTypes from 'prop-types';

export default function FriendListItem({ index, avatar, name, isOnline }) {
  return (
    <Fragment>
      <li key={index + 1} className={Estilos.FriendItem}>
        <span
          className={Estilos.FriendStatus}
          style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        ></span>
        <img
          className={Estilos.FriendAvatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={Estilos.FriendName}> {name} </p>
      </li>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
