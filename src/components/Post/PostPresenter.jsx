import React from "react";
import style from "styled-components";
import Avatar from "../Avatar";
import FatText from "../FatText";
import { HeartFull, HeartEmpty, Comment } from "../icons";
import TextareaAutosize from "react-autosize-textarea";

const Post = style.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
`;

const Header = style.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = style.div`
  margin-left: 10px;
`;

const Location = style.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = style.div`
  position: relative;
`;

const File = style.div`
  max-width:100%;
  position: absolute;
  width: 100%;
  height: 300px;
  top:0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity .5s linear;
`;

const Button = style.span`
  cursor: pointer;
`;

const Meta = style.div`
  margin-top:300px;
  padding:15px;
  ${Button} {
    &:first-child {
      margin-right: 10px; 
    }
  }
`;

const Buttons = style.div`

`;

const Timestamp = style.span`
  font-weight: 400;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  border-bottom: 1px solid lightgrey; 
`;

const TextArea = style(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px; 
  &:focus {
    outline: none;
  }
`;

const Comments = style.ul`
  margin-top: 10px;
`;

const CommentItem = style.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

export default ({
  user: { username, avatar },
  location,
  isLiked,
  likeCount,
  files,
  createAt,
  newComment,
  currentItem,
  toggleLike,
  handleKeyPress,
  comments,
  selfComments
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <FatText text={username} />
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, idx) => (
          <File
            key={file.id}
            id={file.id}
            src={file.url}
            showing={idx === currentItem}
          />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} like`} />
      {comments &&
        comments.map(comment => (
          <Comments key={comment.id}>
            <CommentItem>
              <FatText text={comment.user.username} />
              {comment.text}
            </CommentItem>
          </Comments>
        ))}
      {selfComments &&
        selfComments.map(selfComment => (
          <Comments key={selfComment.id}>
            <CommentItem>
              <FatText text={selfComment.user.username} />
              {selfComment.text}
            </CommentItem>
          </Comments>
        ))}
      <Timestamp>{createAt}</Timestamp>
      <form>
        <TextArea
          placeholder="새 메시지 입력"
          value={newComment.value}
          onChange={newComment.onChange}
          onKeyDown={handleKeyPress}
        />
      </form>
    </Meta>
  </Post>
);
