import { useDisclosure, Box } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useHistory, useLocation } from "react-router";

import * as routes from "constants/routes";
import { navLinkList } from "./constants";

import logoIcon from "assets/icons/logo.svg";

import Navbar from "./components/Navbar";
import NavLink from "./components/NavLink/index";
import Icon from "components/Icon";

import {
  HeaderContainer,
  Center,
  NotificationContainer,
} from "./header.styles";

const Header = () => {
  const location = useLocation();
  const mobileNav = useDisclosure();
  const history = useHistory();

  const handleNavLink = useCallback(
    (path) => {
      if (path) history.push(path);

      mobileNav.onClose();
    },
    [history, mobileNav]
  );

  return (
    <>
      <HeaderContainer>
        <Navbar mobileNav={mobileNav}>
          <Navbar.Brand>
            <Center
              margin='0'
              marginLeft={{
                base: 0,
                md: "10px",
              }}
              onClick={() => {
                history.push(routes.TOP_PAGE);
              }}>
              <Icon icon={logoIcon} width={110} height={40} />
            </Center>
          </Navbar.Brand>
          <Navbar.Links>
            {navLinkList.map((navLink, index) => (
              <NavLink
                isActive={location?.pathname === navLink.path}
                key={index}
                onClick={() => handleNavLink(navLink.path)}>
                <Box display='flex' alignItems='center'>
                  <Box position='relative'>
                    <Icon
                      icon={navLink.icon}
                      size='32px'
                      style={{
                        color: "#FF963C",
                        marginRight: 16,
                      }}
                    />
                    {navLink.showNotification && (
                      <NotificationContainer>1</NotificationContainer>
                    )}
                  </Box>
                  {navLink.label}
                </Box>
              </NavLink>
            ))}
          </Navbar.Links>
        </Navbar>
      </HeaderContainer>
    </>
  );
};

export default Header;
