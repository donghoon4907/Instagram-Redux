import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PostPresenter from "./PostPresenter";
import useInput from "../../hooks/useInput";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  caption,
  location
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);
  const comment = useInput("");
  let timeout;

  //포스트의 사진 무한 슬라이드
  const slide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      timeout = setTimeout(() => setCurrentItem(0), 2000);
    } else {
      timeout = setTimeout(() => setCurrentItem(currentItem + 1), 2000);
    }
  };
  //좋아요 아이콘 누를 때 이벤트
  const toggleLike = () => {
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }
    //database에 저장하는 로직
    try {
    } catch {
      setIsLiked(!isLikedS);
    }
  };
  const onKeyPress = e => {
    const user = sessionStorage.getItem("loginId");
    if (e.which === 13) {
      e.preventDefault();
      comment.setValue("");
      setSelfComments([
        ...selfComments,
        {
          id: `comment${Math.floor(Math.random() * 10000)}`,
          text: comment.value,
          user: {
            username: user.substring(0, user.lastIndexOf("@"))
          }
        }
      ]);
    }
    return;
  };
  useEffect(() => {
    slide();
    return () => {
      clearTimeout(timeout);
    };
  }, [currentItem]);
  return (
    <PostPresenter
      user={user}
      files={files}
      comments={comments}
      createdAt={createdAt}
      isLiked={isLikedS}
      newComment={comment}
      likeCount={likeCountS}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      location={location}
      caption={caption}
      currentItem={currentItem}
      toggleLike={toggleLike}
      handleKeyPress={onKeyPress}
      selfComments={selfComments}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequried,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ),
  createdAt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string
};
export default PostContainer;
