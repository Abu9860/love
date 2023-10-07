import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header1 from "components/Header1";

const AttendanceinPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] justify-start w-full">
          <Header1 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[51px] items-start justify-start md:ml-[0] ml-[15px] md:px-5 w-[78%] md:w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: " ",
                    marginTop: "22px",
                    gap: "17px",
                    margin: " ",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "18px",
                    borderRadius: "10px",
                    [`&:hover, &.ps-active`]: {
                      backgroundColor: "#2d2d2dff !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-end mb-[697px] pt-[25px] w-full"
              >
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[298px]"
                  onClick={() => navigate("/attendance")}
                  leftIcon={
                    <Img
                      className="h-6 mt-px mr-4"
                      src="images/img_materialsymbolsborderallrounded.svg"
                      alt="material-symbols:border-all-rounded"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-left text-lg text-white-A700">
                    All
                  </div>
                </Button>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbolsinhomemodesharp_cyan_a200.svg"
                      alt="materialsymbol_One"
                    />
                  }
                  active={window.location.pathname === "/attendancein"}
                  href="/attendancein"
                >
                  <Text>In</Text>
                </MenuItem>
                <div className="flex flex-col gap-[51px] items-center justify-end mt-[23px] w-full">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[298px]"
                    onClick={() => navigate("/attendanceout")}
                    leftIcon={
                      <Img
                        className="h-6 mr-[18px]"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                    }
                  >
                    <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                      Out
                    </div>
                  </Button>
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[298px]"
                    onClick={() => navigate("/attendanceleavemanagement")}
                    leftIcon={
                      <Img
                        className="h-6 mr-[18px]"
                        src="images/img_rewind_gray_400.svg"
                        alt="rewind"
                      />
                    }
                  >
                    <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                      Leave
                    </div>
                  </Button>
                </div>
              </Menu>
            </Sidebar>
            <div className="bg-gray-900 flex flex-1 flex-col items-center justify-end md:mt-0 mt-[25px] pr-3 py-3 rounded-[5px] w-full">
              <div className="flex flex-col gap-[17px] items-center justify-start mb-[7px] mt-[13px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtMontserratMedium24"
                  >
                    Live Student Update
                  </Text>
                  <div className="flex flex-col h-5 items-center justify-start ml-1.5 md:ml-[0] w-5">
                    <Img
                      className="h-5 md:h-auto object-cover w-5"
                      src="images/img_rectangle.png"
                      alt="rectangle"
                    />
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[170px] md:ml-[0] ml-[491px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-[11px]"
                        src="images/img_vscodeiconsfiletypeexcel2.svg"
                        alt="vscode-icons:file-type-excel2"
                      />
                    }
                    shape="round"
                    color="green_800"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium leading-[normal] text-base text-left">
                      Export Data
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col gap-[15px] items-center justify-end pt-4 px-4 w-full">
                  <List
                    className="flex flex-col gap-[15px] items-center mt-[3px] w-full"
                    orientation="vertical"
                  >
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[15px] rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Text
                        className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Img
                        className="h-3.5 md:ml-[0] ml-[92px] md:mt-0 mt-[15px] w-3.5"
                        src="images/img_icoutlinelogin.svg"
                        alt="icoutlinelogin"
                      />
                      <Text
                        className="ml-1.5 md:ml-[0] md:mt-0 mt-[13px] text-sm text-white-A700"
                        size="txtMontserratLight14"
                      >
                        12:30
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[165px] md:mt-0 mt-2.5 w-6"
                        src="images/img_materialsymbol_gray_400.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Room : 101
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                      <Text
                        className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratMedium16"
                      >
                        Hostel : H1
                      </Text>
                    </div>
                  </List>
                  <div className="flex h-7 md:h-[70px] justify-end relative w-full">
                    <div className="bg-gray-900_01 h-[70px] mt-auto mx-auto rounded-[10px] w-full"></div>
                    <div className="absolute bottom-[0] flex flex-row sm:gap-10 items-center justify-between left-[2%] w-4/5">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceinPage;
