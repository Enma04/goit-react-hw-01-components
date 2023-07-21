import React from "react";
import PropTypes from "prop-types";
import './Profile.css';
import {Stats} from './Profile-styled';

function Profile( 
    {
        src,
        username,
        tag,
        location,
        stats:{followers, views, likes}
        //stats
    }) {
        return (
            <div className="profile">
                <div className="description">
                    <img src={src} alt="user avatar" className="avatar" width="250px" />
                    <p>{username}</p>
                    <p>@{tag}</p>
                    <p>{location}</p>
                </div>

                <Stats>
                    <li>
                        <span className="label">Followers: </span>
                        <br />
                        <span className="quantity"> {followers} </span>
                    </li>
                    <li>
                        <span className="label">Views: </span>
                        <br />
                        <span className="quantity">{views}</span>
                    </li>
                    <li>
                        <span className="label">Likes: </span>
                        <br />
                        <span className="quantity">{likes}</span>
                    </li>
                </Stats>
            </div>
            
        );
}

Profile.propTypes = {
    src: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default Profile;