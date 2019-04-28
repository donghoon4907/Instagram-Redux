import React from "react";
import style from "styled-components";
import PropTypes from "prop-types";

const Container = style.button`
    width: 100%;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    font-weight: 600;
    background: ${props => props.theme.blueColor};
    text-align: center;
    padding: 7px 0;
    font-size: 14px;
`;

function Btn({ text }) {
  return <Container>{text}</Container>;
}
export default Btn;

Btn.propTypes = {
  text: PropTypes.string.isRequired
};
