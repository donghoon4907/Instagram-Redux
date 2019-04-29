import React from "react";
import Button from "../btn";

export default ({ follow, setFollow }) => (
  <Button
    text={follow}
    onClick={() => setFollow(follow === "Follow" ? "Unfollow" : "Follow")}
  />
);
