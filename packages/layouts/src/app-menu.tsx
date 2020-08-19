import React, { useMemo } from "react";
import { Menu } from "antd";
import { MenuProps } from "antd/lib/menu";

import { NavLink } from "react-router-dom";

import { computePath } from "@pcr/utils";

import { RouterConfig } from "./interface";

interface AppMenuProps extends MenuProps {
  menuConfig: RouterConfig;
}

const { SubMenu } = Menu;

export function AppMenu(props: AppMenuProps) {
  const { menuConfig, ...otherProps } = props;
  const menus = useMemo(() => {
    return menuConfig.map((route, i) => {
      if (route.routes && route.routes.length > 0) {
        return (
          <SubMenu
            key={route.path}
            title={
              <span>
                {route.icon}
                <span>{route.name}</span>
              </span>
            }
          >
            {route.routes
              .filter((d) => d.visiable === undefined)
              .map((d) => (
                <Menu.Item key={d.key || d.path}>
                  <NavLink
                    to={{
                      pathname: computePath(route.path, d.path),
                      state: { refresh: true },
                    }}
                  >
                    {d.icon}
                    <span>{d.name}</span>
                  </NavLink>
                </Menu.Item>
              ))}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={route.path}>
            <NavLink
              to={{
                pathname: computePath(route.path),
                state: { refresh: true },
              }}
            >
              {route.icon}
              <span>{route.name}</span>
            </NavLink>
          </Menu.Item>
        );
      }
    });
  }, [menuConfig]);
  return <Menu {...otherProps}>{menus}</Menu>;
}
