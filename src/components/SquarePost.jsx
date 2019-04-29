import React from "react";
import style from "styled-components";
import PropTypes from "prop-types";
import { HeartFull, CommentFull } from "./icons";

const Overlay = style.div`
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s linear;
    svg {
        fill: white;
    }
`;

const Container = style.div`
    background-image: url(${props => props.bg});
    width:100%;
    height:100%;
    background-size: cover;
    cursor: pointer;
    &:hover {
        ${Overlay} {
            opacity: 1;
        }
    }
`;

const Number = style.div`
    color: white;
    display: flex;
    align-items:center;
    &:first-child {
        margin-right: 20px;
    }
`;

const NumberText = style.span`
    margin-left: 10px;
    font-size:18px;
`;

const SquarePost = ({ likeCount, commentCount, file }) => (
  <Container bg={file}>
    <Overlay>
      <Number>
        <HeartFull />
        <NumberText>{likeCount}</NumberText>
      </Number>
      <Number>
        <CommentFull />
        <NumberText>{commentCount}</NumberText>
      </Number>
    </Overlay>
  </Container>
);

SquarePost.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.string.isRequired
};

export default SquarePost;
