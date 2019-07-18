import React from "react";
import { menuItems } from "../../utils/menuUtils";
import { Menu } from "antd";
import ButtonHamBurger from "./ButtonHamBurger";

const DesktopNav = () => {
  const renderMenuItems = () => {
    return menuItems.map(item => (
      <Menu.Item key={item.key}>{item.title}</Menu.Item>
    ));
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["0"]}
      style={{ lineHeight: "64px" }}
    >
      {renderMenuItems()}
      <ButtonHamBurger icon="menu" />
    </Menu>
  );
};

export default DesktopNav;
