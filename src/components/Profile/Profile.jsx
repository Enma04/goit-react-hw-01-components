import React from 'react';
import PropTypes from 'prop-types';
import {
  Stats,
  ProfileStyled,
  Description,
  DescriptionP,
} from './Profile-styled';

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default function Profile({
  src,
  username,
  tag,
  location,
  stats: { followers, views, likes },
  //stats
}) {
  return (
    <ProfileStyled>
      <Description>
        <img src={src} alt="user avatar" width="250px" />
        <DescriptionP>{username}</DescriptionP>
        <DescriptionP>@{tag}</DescriptionP>
        <DescriptionP>{location}</DescriptionP>
      </Description>

      <Stats>
        <li>
          <span>Followers: </span>
          <br />
          <span> {followers} </span>
        </li>
        <li>
          <span>Views: </span>
          <br />
          <span>{views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <br />
          <span>{likes}</span>
        </li>
      </Stats>
    </ProfileStyled>
  );
}
