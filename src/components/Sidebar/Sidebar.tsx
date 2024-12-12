"use client";

import { useLayoutDetect } from "@hooks/index";
import { Lock, Translate, Wallet, LocalAtm } from "@mui/icons-material";
import { Drawer, List, ListSubheader } from "@mui/material";
import { settingCreator, settingSelector } from "@redux/slices/settingSlice";
import { useAppDispatch, useAppSelector } from "@redux/store";
import clsx from "clsx";
import React from "react";
import { Link, useLocation, useRoutes } from "react-router-dom";

const SidebarContent = () => {
  const { pathname } = useLocation();

  const renderListItemCluster = (
    items: Array<{
      title: string;
      url: string;
      Icon: React.ElementType;
    }>,
    subHeading?: string,
  ) => (
    <List className="!p-4m flex flex-col rounded-md bg-white shadow-md">
      {subHeading && (
        <ListSubheader className="text-dark-100/50">{subHeading}</ListSubheader>
      )}
      {items.map(({ title, url, Icon }, index) => (
        <Link
          className={clsx(
            "flex items-center gap-2 px-4 py-2 hover:bg-slate-200",
            { "bg-slate-200 text-slate-600": url === pathname },
          )}
          key={`${title}-${index}`}
          to={url}
        >
          <Icon fontSize="small" />
          {title}
        </Link>
      ))}
    </List>
  );

  return (
    <div className="w-64 space-y-4">
      {renderListItemCluster([
        {
          title: "Wallets",
          url: "/wallets",
          Icon: Wallet,
        },
        {
          title: "Transactions",
          url: "/transactions",
          Icon: LocalAtm,
        },
      ])}

      {renderListItemCluster(
        [
          {
            title: "Account",
            url: "settings/account",
            Icon: Lock,
          },
          {
            title: "Languages",
            url: "settings/languages",
            Icon: Translate,
          },
        ],
        "Settings",
      )}
    </div>
  );
};

const Sidebar = () => {
  const isDrawer = useLayoutDetect();
  const isOpenDrawer = useAppSelector(settingSelector.getOpenDrawer);
  const dispatch = useAppDispatch();

  return isDrawer ? (
    <Drawer
      open={isOpenDrawer}
      onClose={() => {
        dispatch(settingCreator.toggleDrawer());
      }}
      classes={{ paper: "p-4 space-y-4 bg-dark-200" }}
    >
      <SidebarContent />
    </Drawer>
  ) : (
    <SidebarContent />
  );
};

export default Sidebar;
