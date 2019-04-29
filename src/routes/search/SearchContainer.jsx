import React from "react";
import SearchPresenter from "./SearchPresenter";
import { withRouter } from "react-router-dom";
import data from "../../data/user";

export default withRouter(({ location: { search } }) => {
  const term = search.split("=")[1];
  //database에서 데이터를 가져오는 작업

  const members = data.searchUsers.filter(user => user.username.includes(term));

  return (
    <SearchPresenter term={term} users={members} posts={data.searchPosts} />
  );
});
