import React, { useEffect, useState } from "react";
import style from "styled-components";
import Loader from "../components/loader";
import Post from "../components/Post";
import datas from "../data";
import Footer from "../components/footer";

const Wrapper = style.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
`;
const loadData = () => {
  let timeout;
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
      <Footer />
    </>
  );
};

export default () => <Wrapper>{loadData()}</Wrapper>;
