import React from "react";
import styled from "styled-components";
import { Icon, Menu } from "antd";

const Ham = styled(Menu.Item)`
  float: right;
  color: white;
  cursor: pointer;
  font-size: 1.5em;
`;

const ButtonHamBurger = ({ icon, onClick }) => {
  return (
    <Ham onClick={onClick}>
      <Icon type={icon} />
    </Ham>
  );
};

export default ButtonHamBurger;
