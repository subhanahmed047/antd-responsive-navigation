import React from "react";
import { Drawer, Menu } from "antd";
import { menuItems } from "../../utils/menuUtils";

const MobileNav = ({ open, onClose }) => {
  return (
    <Drawer
      title="Menu"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={open}
    >
      <Menu selectedKeys={["0"]} mode="vertical">
        {menuItems.map(item => (
          <Menu.Item key={item.key}>{item.title}</Menu.Item>
        ))}
      </Menu>
    </Drawer>
  );
};

export default MobileNav;
