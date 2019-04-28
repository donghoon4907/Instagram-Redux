import React, { useState } from "react";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import AuthPresenter from "./AuthPresenter";

export default () => {
  const [action, setAction] = useState("login");
  const username = useInput("");
  const firstname = useInput("");
  const lastname = useInput("");
  const email = useInput("");
  const secret = useInput("");
  const onSubmit = e => {
    e.preventDefault();
    if (action === "login") {
      setAction("confirm");
      toast.success("해당 이메일로 보안 문자를 전송했습니다.");
    } else if (action === "signup") {
      toast.success("회원가입 성공");
    } else if (action === "confirm") {
      sessionStorage.setItem("loginId", email.value);
      window.location.reload();
    } else {
      toast.error("알 수 없는 경로로 접근하였습니다.");
    }
  };
  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstname={firstname}
      lastname={lastname}
      email={email}
      handleSubmit={onSubmit}
      secret={secret}
    />
  );
};
