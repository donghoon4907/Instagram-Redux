import React, { useState } from "react";
import style from "styled-components";
import Input from "../components/input";
import Btn from "../components/btn";
import useInput from "../hooks/useInput";

const Wrapper = style.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Box = style.div`
    ${props => props.theme.whiteBox}
    border-radius: 0;
    width:100%;
    max-width:350px;
`;
const StateChanger = style(Box)`
    text-align: center;
    padding: 20px 0px;
`;

const Link = style.span`
    color: ${props => props.theme.blueColor};
    cursor: pointer;
`;

const Form = style(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    width: 100%;
    form {
        width: 100%;
        input {
            width: 100%;
            &:not(last-child) {
                margin-bottom: 10px;
            }
        }
        button {
            margin-top: 10px;
        }

    }
`;
export default () => {
  const [action, setAction] = useState("login");
  const username = useInput("");
  const firstname = useInput("");
  const lastname = useInput("");
  const email = useInput("");

  return (
    <Wrapper>
      <Form>
        {action === "login" ? (
          <form>
            <Input type={"email"} placeholder={"이메일"} {...email} />
            <Btn text={"로그인"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"이름"} {...firstname} />
            <Input placeholder={"성"} {...lastname} />
            <Input type={"email"} placeholder={"이메일"} {...email} />
            <Input placeholder={"유저명"} {...username} />
            <Btn text={"회원가입"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "login" ? (
          <>
            계정이 없다면
            <Link onClick={() => setAction("signup")}>회원가입</Link>
          </>
        ) : (
          <>
            계정이 있다면 <Link onClick={() => setAction("login")}>로그인</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
