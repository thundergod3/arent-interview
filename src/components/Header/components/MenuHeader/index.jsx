import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useHistory } from "react-router";

import { navLinkList } from "./constants";

import hamburgerIcon from "assets/icons/hamburger.svg";
import closeIcon from "assets/icons/close.svg";

import Icon from "components/Icon";

import { MenuHeaderContainer, MenuHeaderItem } from "./menuHeader.styles";

const MenuHeader = () => {
  const [open, setOpen] = useState(false);

  const menuHeaderRef = useRef();
  const menuHeaderButtonRef = useRef();
  const history = useHistory();

  const handleOutSideClick = (event) => {
    if (
      (menuHeaderButtonRef?.current &&
        menuHeaderButtonRef?.current?.contains(event.target)) ||
      (menuHeaderRef.current && menuHeaderRef?.current?.contains(event.target))
    )
      return;
    else {
      setOpen(false);
    }
  };

  const handleNavigate = useCallback(
    (path) => {
      if (path) history.push(path);

      setOpen(false);
    },
    [history]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box marginLeft='32px' position='relative'>
      <Box ref={menuHeaderButtonRef} onClick={() => setOpen(!open)}>
        <Icon icon={open ? closeIcon : hamburgerIcon} size={24} height={16} />
      </Box>

      {open && (
        <MenuHeaderContainer ref={menuHeaderRef}>
          {navLinkList.map((record, index) => (
            <MenuHeaderItem
              key={index}
              onClick={() => handleNavigate(record.path)}>
              {record.label}
            </MenuHeaderItem>
          ))}
        </MenuHeaderContainer>
      )}
    </Box>
  );
};

export default MenuHeader;
