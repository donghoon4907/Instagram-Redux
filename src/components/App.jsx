import React from "react";
import style, { ThemeProvider } from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "../styles/globalstyle";
import theme from "../styles/theme";
import Routes from "./routes";
import Header from "./header";
import Footer from "./footer";

const Wrapper = style.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width:100%;
`;
export default function() {
  const isLogin = sessionStorage.getItem("loginId") ? true : false;
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          {isLogin && <Header />}
          <Wrapper>
            <Routes isLogin={isLogin} />
            <Footer />
          </Wrapper>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </Router>
      </>
    </ThemeProvider>
  );
}
