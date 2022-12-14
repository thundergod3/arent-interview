import React, { isValidElement, useCallback } from "react";
import {
  Flex,
  Stack,
  useColorModeValue,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";

import { navLinkList } from "../MenuHeader/constants";

import hamburgerIcon from "assets/icons/hamburger.svg";

import MobileNavContent from "../MobileNavContent";
import Icon from "components/Icon";
import MenuHeader from "../MenuHeader";

import { NavbarContainer, HStack, NavItem } from "./navbar.styles";
import { useHistory } from "react-router";

const Template = (props) => {
  const { mobileNav } = props;

  const [checkMobileView] = useMediaQuery("(max-width: 48em)");
  const history = useHistory();

  const children = React.Children.toArray(props.children).filter(
    isValidElement
  );

  const handleNavigate = useCallback(
    (path) => {
      if (path) history.push(path);

      mobileNav?.onClose();
    },
    [history, mobileNav]
  );

  return (
    <NavbarContainer borderBottomWidth={useColorModeValue("none", "1px")}>
      {children.find((child) => child.type === Brand)?.props.children}
      <HStack
        style={{
          marginLeft: "auto",
        }}>
        {children.find((child) => child.type === Links)?.props.children}
      </HStack>
      <HStack>
        <MenuHeader />
      </HStack>
      <Icon
        icon={hamburgerIcon}
        size={24}
        height={16}
        onClick={mobileNav.onOpen}
        style={{
          marginLeft: "auto",
          display: checkMobileView ? "block" : "none",
        }}
      />
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose}>
        <Stack width='100%' background='#777777'>
          <Box padding={5}>
            <Flex>
              {children.find((child) => child.type === Brand)?.props.children}
            </Flex>
            <Stack>
              {navLinkList.map((record) => (
                <Box
                  key={record.label}
                  onClick={() => handleNavigate(record.path)}>
                  <NavItem>{record.label}</NavItem>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </MobileNavContent>
    </NavbarContainer>
  );
};

const Brand = () => null;

const Links = () => null;

const Navbar = Object.assign(Template, {
  Brand,
  Links,
});

export default Navbar;
