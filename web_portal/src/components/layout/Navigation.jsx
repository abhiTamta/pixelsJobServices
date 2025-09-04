import { Menu } from "antd";
import React from "react";

const menu = [
  {
    label: "Jobs",
    Key: "jobs",
    children: [
      {
        type: "group",
        label: "Popular categories",
        children: [
          {
            label: "IT jobs",
            Key: "itjobs",
          },
          {
            label: "Sales jobs",
            Key: "salesjobs",
          },
          {
            label: "Marketing jobs",
            Key: "marketingjobs",
          },
        ],
      },
    ],
  },
  {
    label: "Companies",
    Key: "companies",
  },
  {
    label: "Services",
    Key: "services",
  },
];
const Navigation = () => {
  return (
    <Menu
      className="menuAbhinay"
      style={{ fontSize: "16px", fontWeight: "600", background: "transparent" }}
      mode="horizontal"
      items={menu}
    />
  );
};

export default Navigation;
