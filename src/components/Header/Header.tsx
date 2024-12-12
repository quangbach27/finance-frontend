import { useLayoutDetect } from "@/hooks";
import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { settingCreator } from "@redux/slices/settingSlice";
import { useAppDispatch } from "@redux/store";
import React from "react";

const Header = () => {
  const isLessThanMd = useLayoutDetect("md");
  const dispatch = useAppDispatch();

  const handleMenuButtonClick = () => {
    dispatch(settingCreator.toggleDrawer());
  };
  return (
    <AppBar position="static">
      <Toolbar>
        {isLessThanMd ? (
          <IconButton onClick={handleMenuButtonClick}>
            <MenuIcon className="text-white" />
          </IconButton>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
