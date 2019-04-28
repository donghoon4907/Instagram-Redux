import React, { useEffect, useState } from "react";
import style from "styled-components";
import Loader from "../components/loader";
import Post from "../components/Post";

const Wrapper = style.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
`;
const loadData = () => {
  let timeout;
  //load data
  const datas = [
    {
      id: "test",
      user: {
        id: "user01",
        avatar: "http://placehold.it/30x30",
        username: "manager"
      },
      files: [
        {
          id: "file01",
          url: "http://placehold.it/600x299"
        },
        {
          id: "file02",
          url: "http://placehold.it/600x300"
        }
      ],
      likeCount: 1,
      isLiked: true,
      comments: [
        {
          id: "comment01",
          text: "test message",
          user: {
            id: "user02",
            username: "nickname02"
          }
        }
      ],
      createdAt: "2019-04-28 16:20:30",
      location: "seoul",
      caption: "love"
    }
  ];
  const [val, setVal] = useState("loading");
  useEffect(() => {
    timeout = setTimeout(() => {
      setVal("loaded");
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return val === "loading" ? (
    <Loader />
  ) : (
    <>
      {datas.map(data => (
        <Post
          key={data.id}
          id={data.id}
          user={data.user}
          files={data.files}
          likeCount={data.likeCount}
          isLiked={data.isLiked}
          comments={data.comments}
          createdAt={data.createdAt}
          caption={data.caption}
          location={data.location}
        />
      ))}
    </>
  );
};

export default () => <Wrapper>{loadData()}</Wrapper>;
