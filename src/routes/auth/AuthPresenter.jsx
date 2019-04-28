import React from "react";
import Helmet from "react-helmet";
import style from "styled-components";
import Input from "../../components/input";
import Btn from "../../components/btn";

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
    &:Link {
      margin-left: 523px;
    }
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
export default ({
  action,
  setAction,
  username,
  firstname,
  lastname,
  email,
  handleSubmit,
  secret
}) => {
  return (
    <Wrapper>
      <Form>
        {action === "login" && (
          <div>
            <Helmet>
              <title>로그인</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
              <Input type={"email"} placeholder={"이메일"} {...email} />
              {}
              <Btn text={"로그인"} />
            </form>
          </div>
        )}
        {action === "signup" && (
          <>
            <Helmet>
              <title>회원가입</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder={"이름"}
                value={firstname.value}
                onChange={firstname.onChange}
              />
              <Input
                placeholder={"성"}
                value={lastname.value}
                onChange={lastname.onChange}
              />
              <Input
                type={"email"}
                placeholder={"이메일"}
                value={email.value}
                onChange={email.onChange}
              />
              <Input
                placeholder={"유저명"}
                value={username.value}
                onChange={username.onChange}
              />
              <Btn text={"회원가입"} />
            </form>
          </>
        )}
        {action === "confirm" && (
          <>
            <Helmet>
              <title>이메일 검증</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
              <Input placeholder={"보안 문자"} {...secret} />
              <Btn text={"확인"} />
            </form>
          </>
        )}
      </Form>
      {action !== "confirm" && (
        <StateChanger>
          {action === "login" ? (
            <div>
              계정이 없다면&nbsp;
              <Link onClick={() => setAction("signup")}>회원가입</Link>
            </div>
          ) : (
            <div>
              계정이 있다면&nbsp;
              <Link onClick={() => setAction("login")}>로그인</Link>
            </div>
          )}
        </StateChanger>
      )}
    </Wrapper>
  );
};
