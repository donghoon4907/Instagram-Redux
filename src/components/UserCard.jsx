import React from "react";
import style from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import FatText from "./FatText";
import PropTypes from "prop-types";
import FollowButton from "./FollowButton";

const Card = style.div`
    ${props => props.theme.whiteBox}
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;
const EAvatar = style(Avatar)`
    margin-bottom: 15px;
`;
const ELink = style(Link)`
    color: inherit;
    margin-bottom: 10px;
`;

const UserCard = ({ id, avatar, username, isSelf, isFollowing }) => (
  <Card>
    <EAvatar url={avatar} size="md" />
    <ELink to={`/${username}`}>
      <FatText text={username} />
    </ELink>
    {!isSelf && <FollowButton id={id} isFollowing={isFollowing} />}
  </Card>
);

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired
};

export default UserCard;
