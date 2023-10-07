import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowleft.svg"
          alt="arrowleft"
        />
      ),
      label: "Debit",
      href: "/accountsdebitexpandone",
      active: window.location.pathname === "/accountsdebitexpandone",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_rewind_gray_400.svg"
          alt="rewind"
        />
      ),
      label: "Vendors",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconparkoutlineorder.svg"
          alt="iconparkoutline"
        />
      ),
      label: "Orders",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_heroiconssolidcollection.svg"
          alt="heroiconssolidc"
        />
      ),
      label: "Expected",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_mdiclockalertoutline.svg"
          alt="mdiclockalertou"
        />
      ),
      label: "Overdue",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="flex flex-col gap-[46px] items-start justify-start md:ml-[0] ml-[23px] mr-[71px] mt-6 w-[69%]">
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[204px] pr-[35px]"
            onClick={() => navigate("/accounts")}
            leftIcon={
              <Img
                className="h-6 mt-px mr-[17px]"
                src="images/img_materialsymbolsborderallrounded.svg"
                alt="material-symbols:border-all-rounded"
              />
            }
          >
            <div className="font-medium font-montserrat leading-[normal] sm:pr-5 text-gray-400 text-left text-lg">
              Dashboard
            </div>
          </Button>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[108px] pr-2.5"
            onClick={() => navigate("/accountscredit")}
            leftIcon={
              <Img
                className="h-6 mr-[17px]"
                src="images/img_materialsymbolsinhomemodesharp.svg"
                alt="material-symbols:in-home-mode-sharp"
              />
            }
          >
            <div className="font-medium font-montserrat leading-[normal] text-gray-400 text-left text-lg">
              Credit
            </div>
          </Button>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "22px",
              gap: "18px",
              marginTop: "2px",
              color: "#b0b0b0",
              fontWeight: 500,
              fontSize: "18px",
              fontFamily: "Montserrat",
              borderRadius: "10px",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                fontWeight: "600 !important",
                backgroundColor: "#2d2d2dff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-end mb-[479px] pt-[25px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
