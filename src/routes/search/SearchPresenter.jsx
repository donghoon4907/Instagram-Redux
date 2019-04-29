import React, { useState, useEffect } from "react";
import style from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../components/FatText";
import Loader from "../../components/loader";
import UserCard from "../../components/UserCard";
import SquarePost from "../../components/SquarePost";
import Footer from "../../components/footer";

const Wrapper = style.div`
    height: 50vh;
    text-align: center;
`;

const Section = style.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, 160px);
    grid-template-rows: 160px;
    grid-auto-rows: 160px;
    margin-bottom: 50px; 
`;
const SearchPresenter = ({ term, users, posts }) => {
  const [isLoaded, setIsLoad] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setIsLoad("loaded");
    }, 1000);
  }, []);
  return isLoaded !== "loaded" ? (
    <Wrapper>
      <Loader />
    </Wrapper>
  ) : (
    <>
      {(() => {
        if (term === undefined) {
          return (
            <Wrapper>
              <FatText text="검색어를 입력하세요." />
            </Wrapper>
          );
        } else if (users && posts) {
          return (
            <Wrapper>
              <Section>
                {users.length === 0 ? (
                  <FatText text="사용자를 찾을 수 없습니다" />
                ) : (
                  users.map(user => (
                    <UserCard
                      key={user.id}
                      username={user.username}
                      isFollowing={user.isFollowing}
                      avatar={user.avatar}
                      isSelf={user.isSelf}
                      id={user.id}
                    />
                  ))
                )}
              </Section>
              <Section>
                {users.length === 0 || posts.length === 0
                  ? ""
                  : posts.map(post => (
                      <SquarePost
                        key={post.id}
                        likeCount={post.likeCount}
                        commentCount={post.comments.length}
                        file={post.files[0].url}
                      />
                    ))}
              </Section>
              <Footer />
            </Wrapper>
          );
        } else {
          return <div>error</div>;
        }
      })()}
    </>
  );
};

SearchPresenter.propTypes = {
  term: PropTypes.string,
  loading: PropTypes.bool
};

export default SearchPresenter;
