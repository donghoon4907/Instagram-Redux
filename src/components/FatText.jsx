import React from "react";
import PropTypes from "prop-types";
import style from "styled-components";

const Text = style.span`
    font-weight: 600;
`;

const FatText = ({ text }) => <Text>{text}</Text>;

FatText.propTypes = {
  text: PropTypes.string.isRequired
};

export default FatText;
