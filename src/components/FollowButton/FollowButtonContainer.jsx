import React, { useState } from "react";
import PropTypes from "prop-types";
import FollowButtonPresenter from "./FollowButtonPresenter";

const FollowButtonContainer = ({ isFollowing }) => {
  const [follow, setFollow] = useState(isFollowing ? "Unfollow" : "follow");
  return <FollowButtonPresenter follow={follow} setFollow={setFollow} />;
};

FollowButtonContainer.propTypes = {
  id: PropTypes.string.isRequired
};

export default FollowButtonContainer;
