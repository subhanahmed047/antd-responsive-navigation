import React, { useState } from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import { withBreakpoints } from "react-breakpoints";
import MobileNav from "./MobileNav";
import ButtonHamBurger from "./ButtonHamBurger";

const { Header } = Layout;

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

const Navbar = ({ menuItems, breakpoints, currentBreakpoint }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const renderMenuItems = () => {
    return menuItems.map(item => (
      <Menu.Item key={item.key}>{item.title}</Menu.Item>
    ));
  };

  const isMobile =
    breakpoints[currentBreakpoint] <= breakpoints.mobileLandscape;

  return (
    <Header>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        style={{ lineHeight: "64px" }}
      >
        {isMobile ? (
          <ButtonHamBurger
            icon="menu"
            onClick={() => setOpenMobileMenu(true)}
          />
        ) : (
          renderMenuItems()
        )}
      </Menu>
      {isMobile && (
        <MobileNav
          open={openMobileMenu}
          onClose={() => setOpenMobileMenu(false)}
        />
      )}
    </Header>
  );
};

export default withBreakpoints(Navbar);
