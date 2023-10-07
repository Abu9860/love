import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, CheckBox, FloatingInput, Img, List, Text } from "components";
import Header3 from "components/Header3";

import "react-circular-progressbar/dist/styles.css";

const DashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_uisanalytics.svg"
          alt="uisanalytics"
        />
      ),
      label: "Analytics",
    },
    {
      icon: (
        <Img
          className="h-[22px] w-[22px]"
          src="images/img_map_gray_400.svg"
          alt="map"
        />
      ),
      label: "Stock",
      href: "/stock",
      active: window.location.pathname === "/stock",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_miusers.svg" alt="miusers" />
      ),
      label: "Users",
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_bxdish.svg" alt="bxdish" />
      ),
      label: "Meals",
    },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-8 w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header3 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]"
            >
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[129px] md:ml-[0] ml-[21px] mr-[148px] mt-[94px] pr-[3px]"
                onClick={() => navigate("/dashboardstudents")}
                leftIcon={
                  <Img
                    className="h-7 mr-[15px]"
                    src="images/img_map.svg"
                    alt="map"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                  Students
                </div>
              </Button>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "24px",
                    gap: "16px",
                    color: "#b0b0b0",
                    fontWeight: 500,
                    fontSize: "18px",
                    borderRadius: "10px",
                    [`&:hover, &.ps-active`]: {
                      color: "#ffffff",
                      fontWeight: "600 !important",
                      backgroundColor: "#2d2d2dff !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[555px] pt-[25px] w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-gray-900 flex flex-col items-center justify-start p-3 rounded-[10px] w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start mb-3 mt-[9px] w-full">
                  <div className="flex flex-row items-center justify-start w-[14%] md:w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtMontserratSemiBold20"
                    >
                      Occupancy
                    </Text>
                    <Img
                      className="h-3 ml-0.5 w-3"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gray-900_01 flex flex-1 flex-col h-[309px] items-start justify-start p-[18px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-[19px] justify-start mb-[22px] mt-[3px] w-[88%] md:w-full">
                        <div className="flex flex-row gap-[7px] items-end justify-start w-[38%] md:w-full">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtMontserratSemiBold18"
                          >
                            Hostel 1
                          </Text>
                          <Img
                            className="h-3 my-1 w-3"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </div>
                        <div className="h-[206px] md:ml-[0] ml-[33px] relative w-[206px]">
                          <Text
                            className="m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                            size="txtMontserratSemiBold32"
                          >
                            50%
                          </Text>
                          <div className="!w-[206px] absolute h-[206px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[206px] absolute h-[206px] inset-[0] justify-center m-auto overflow-visible"
                              value={49}
                              strokeWidth={11}
                              styles={{
                                trail: { strokeWidth: 11, stroke: "#292929" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(90deg)",
                                  stroke: "#00fff5",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col h-[309px] items-start justify-start p-[18px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-[19px] justify-start mb-[22px] mt-[3px] w-[88%] md:w-full">
                        <div className="flex flex-row gap-[7px] items-end justify-start w-2/5 md:w-full">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtMontserratSemiBold18"
                          >
                            Hostel 2
                          </Text>
                          <Img
                            className="h-3 my-1 w-3"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </div>
                        <div className="h-[206px] md:ml-[0] ml-[33px] relative w-[206px]">
                          <Text
                            className="m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                            size="txtMontserratSemiBold32"
                          >
                            75%
                          </Text>
                          <div className="!w-[206px] absolute h-[206px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[206px] absolute h-[206px] inset-[0] justify-center m-auto overflow-visible"
                              value={74}
                              strokeWidth={11}
                              styles={{
                                trail: { strokeWidth: 11, stroke: "#292929" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(90deg)",
                                  stroke: "#ffe504",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col h-[309px] items-start justify-start p-[18px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-[19px] justify-start mb-[22px] mt-[3px] w-[88%] md:w-full">
                        <div className="flex flex-row gap-[7px] items-end justify-start w-2/5 md:w-full">
                          <Text
                            className="text-lg text-white-A700"
                            size="txtMontserratSemiBold18"
                          >
                            Hostel 3
                          </Text>
                          <Img
                            className="h-3 my-1 w-3"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </div>
                        <div className="h-[206px] md:ml-[0] ml-[33px] relative w-[206px]">
                          <Text
                            className="m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                            size="txtMontserratSemiBold32"
                          >
                            95%
                          </Text>
                          <div className="!w-[206px] absolute h-[206px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[206px] absolute h-[206px] inset-[0] justify-center m-auto overflow-visible"
                              value={95}
                              strokeWidth={11}
                              styles={{
                                trail: { strokeWidth: 11, stroke: "#292929" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(90deg)",
                                  stroke: "#ff04c7",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="h-[298px] sm:h-[311px] md:h-[649px] mt-5 relative w-full">
                <div className="sm:h-[291px] h-[298px] md:h-[629px] m-auto w-full">
                  <div className="absolute bg-gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[18px] rounded-[10px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between mb-[3px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[21px] items-start justify-start w-[23%] md:w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtMontserratSemiBold20"
                        >
                          Fees Collection
                        </Text>
                        <div className="h-[206px] relative w-[206px]">
                          <Text
                            className="m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                            size="txtMontserratSemiBold32"
                          >
                            50%
                          </Text>
                          <div className="absolute bg-gray-900_02 h-[206px] inset-[0] justify-center m-auto rounded-[50%] w-[206px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-center justify-start md:mt-0 mt-12 w-[74%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between w-full">
                          <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-start p-[11px] rounded-[10px] w-[47%] md:w-full">
                            <div className="flex flex-row items-center justify-between ml-2 md:ml-[0] w-[90%] md:w-full">
                              <div className="flex flex-col gap-[5px] items-start justify-start">
                                <Text
                                  className="text-base text-center text-white-A700"
                                  size="txtMontserratRegular16"
                                >
                                  Expected
                                </Text>
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  ₹ 52,00,000
                                </Text>
                              </div>
                              <Img
                                className="h-[22px] w-[22px]"
                                src="images/img_checkmark.svg"
                                alt="checkmark_One"
                              />
                            </div>
                          </div>
                          <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start p-[11px] rounded-[10px] w-[47%] md:w-full">
                            <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                              <div className="flex flex-col gap-[5px] justify-start">
                                <Text
                                  className="text-base text-center text-white-A700"
                                  size="txtMontserratRegular16"
                                >
                                  Remaining
                                </Text>
                                <Text
                                  className="ml-1.5 md:ml-[0] text-2xl md:text-[22px] sm:text-xl text-yellow-A400"
                                  size="txtMontserratMedium24YellowA400"
                                >
                                  ₹ 15,60,000
                                </Text>
                              </div>
                              <Img
                                className="h-[22px] w-[22px]"
                                src="images/img_maximize.svg"
                                alt="maximize"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-full">
                          <FloatingInput
                            wrapClassName="bg-gray-900_01 border-0 flex flex-1 pb-[9px] pl-5 pr-[35px] pt-[39px] rounded-[10px] top-[0] w-full"
                            className="font-medium leading-[normal] p-0 placeholder:bg-gray-900_01 placeholder:left-5 placeholder:text-white-A700 placeholder:top-[0] sm:pr-5 text-2xl text-cyan-A200 text-left w-full"
                            name="price_Two"
                            labelClasses="bg-gray-900_01 left-5 top-[0] text-white-A700"
                            focusedClasses="translate-y-[39px] scale-[1]"
                            wrapperClasses="top-[0]"
                            labelText="Collected"
                            defaultText="₹ 26,00,000"
                            suffix={
                              <Img
                                className="top-[0] my-auto"
                                src="images/img_maximize_cyan_a200.svg"
                                alt="maximize"
                              />
                            }
                          ></FloatingInput>
                          <FloatingInput
                            wrapClassName="bg-gray-900_01 border-0 flex flex-1 pb-[9px] pl-[18px] pr-[35px] pt-[39px] rounded-[10px] top-[0] w-full"
                            className="font-medium leading-[normal] p-0 placeholder:bg-gray-900_01 placeholder:left-[18px] placeholder:text-white-A700 placeholder:top-[0] sm:pr-5 text-2xl text-left text-purple-A400 w-full"
                            name="price_Three"
                            labelClasses="bg-gray-900_01 left-[18px] top-[0] text-white-A700"
                            focusedClasses="translate-y-[39px] scale-[1]"
                            wrapperClasses="top-[0]"
                            labelText="Overdue"
                            defaultText="₹ 10,40,000"
                            suffix={
                              <Img
                                className="top-[0] my-auto"
                                src="images/img_minimize.svg"
                                alt="minimize"
                              />
                            }
                          ></FloatingInput>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-purple-A400 bottom-[0] h-[260px] left-[0] rotate-[72deg] rounded-[50%] w-[260px]"></div>
                </div>
                <div className="absolute flex flex-col gap-[25px] h-max inset-y-[0] justify-start left-[3%] my-auto w-[21%]">
                  <Img
                    className="h-3 md:ml-[0] ml-[167px] w-3"
                    src="images/img_checkmark.svg"
                    alt="checkmark_Two"
                  />
                  <div className="!w-[206px] h-[206px] overflow-visible">
                    <CircularProgressbar
                      className="!w-[206px] h-[206px] overflow-visible"
                      value={29}
                      strokeWidth={11}
                      styles={{
                        trail: { strokeWidth: 11, stroke: "#00fff5" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          transformOrigin: "center",
                          transform: "rotate(90deg)",
                          stroke: "#ffe504",
                        },
                      }}
                    ></CircularProgressbar>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 flex flex-col items-center justify-start mt-3.5 p-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-6 items-start justify-start mb-1.5 w-full">
                  <CheckBox
                    className="font-semibold leading-[normal] sm:pr-5 text-left text-xl"
                    inputClassName="h-3 mr-[5px] w-3"
                    name="complaints"
                    id="complaints"
                    label="Complaints"
                  ></CheckBox>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="bg-yellow-A400 flex md:flex-1 flex-col items-start justify-start rounded-[10px] w-[24%] md:w-full">
                      <div className="bg-cyan-A200 h-[79px] rounded-bl-[10px] rounded-tl-[10px] w-[65%]"></div>
                    </div>
                    <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] w-[24%] md:w-full">
                      <CheckBox
                        className="leading-[normal] ml-2.5 md:ml-[0] sm:pr-5 text-base text-left"
                        inputClassName="h-4 mr-[5px] w-4"
                        name="totalcomplaints_One"
                        id="totalcomplaints_One"
                        label="Total Complaints"
                        size="xs"
                      ></CheckBox>
                      <Text
                        className="ml-2.5 md:ml-[0] my-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtMontserratMedium24"
                      >
                        158
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex md:flex-1 flex-col gap-[5px] items-start justify-start p-2.5 rounded-[10px] w-[24%] md:w-full">
                      <CheckBox
                        className="leading-[normal] md:ml-[0] ml-[13px] sm:pr-5 text-base text-center"
                        inputClassName="h-4 mr-[5px] w-4"
                        name="resolved"
                        id="resolved"
                        label="Resolved"
                        size="xs"
                      ></CheckBox>
                      <Text
                        className="h-[30px] mb-[3px] ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-cyan-A200 sm:text-xl"
                        size="txtMontserratMedium24CyanA200"
                      >
                        96
                      </Text>
                    </div>
                    <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] w-[24%] md:w-full">
                      <CheckBox
                        className="leading-[normal] ml-2.5 md:ml-[0] sm:pr-5 text-base text-left"
                        inputClassName="h-4 mr-[5px] w-4"
                        name="open"
                        id="open"
                        label="Open"
                        size="xs"
                      ></CheckBox>
                      <Text
                        className="ml-2.5 md:ml-[0] my-[3px] text-2xl md:text-[22px] sm:text-xl text-yellow-A400"
                        size="txtMontserratMedium24YellowA400"
                      >
                        62
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
              <div className="bg-gray-900 flex flex-col justify-center p-1 rounded-[10px] w-full">
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[183px] ml-4 md:ml-[0] mr-[134px] mt-[17px]"
                  onClick={() => navigate("/attendance")}
                  rightIcon={
                    <div className="h-3 mt-[5px] mb-[7px] ml-[5px] w-3 bg-white-A700">
                      <Img
                        className="h-3"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                  }
                >
                  <div className="font-semibold leading-[normal] text-left text-white-A700 text-xl">
                    Student Update
                  </div>
                </Button>
                <div className="flex flex-col gap-2.5 items-center justify-start my-0.5 pt-[7px] px-[7px] w-full">
                  <List
                    className="flex flex-col gap-2.5 items-center w-[97%]"
                    orientation="vertical"
                  >
                    <div className="bg-gray-900_01 flex flex-row gap-3 items-center justify-start my-0 p-3 rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto ml-0.5 my-0.5 rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseTen"
                      />
                      <div className="flex flex-col relative w-[53%]">
                        <Text
                          className="mx-auto text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Ramakant Sharma
                        </Text>
                        <Text
                          className="ml-5 mt-[-0.01px] text-sm text-white-A700 z-[1]"
                          size="txtMontserratLight14"
                        >
                          12:30
                        </Text>
                        <Img
                          className="h-3.5 mb-0.5 mt-[-NaNpx] w-3.5 z-[1]"
                          src="images/img_icoutlinelogin.svg"
                          alt="icoutlinelogin"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                      <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                        <Img
                          className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                          src="images/img_ellipse10.png"
                          alt="ellipseEleven"
                        />
                        <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_icoutlinelogin_yellow_a400.svg"
                              alt="icoutlinelogin"
                            />
                            <Text
                              className="text-sm text-white-A700"
                              size="txtMontserratLight14"
                            >
                              12:30
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                      <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                        <Img
                          className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                          src="images/img_ellipse10.png"
                          alt="ellipseTwelve"
                        />
                        <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_icoutlinelogin.svg"
                              alt="icoutlinelogin"
                            />
                            <Text
                              className="text-sm text-white-A700"
                              size="txtMontserratLight14"
                            >
                              12:30
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-row gap-3 items-center justify-start my-0 p-3 rounded-[10px] w-full">
                      <Img
                        className="h-10 md:h-auto ml-0.5 my-0.5 rounded-[50%] w-10"
                        src="images/img_ellipse10.png"
                        alt="ellipseThirteen"
                      />
                      <div className="flex flex-col relative w-[53%]">
                        <Text
                          className="mx-auto text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Ramakant Sharma
                        </Text>
                        <Text
                          className="ml-5 mt-[-0.01px] text-sm text-white-A700 z-[1]"
                          size="txtMontserratLight14"
                        >
                          12:30
                        </Text>
                        <Img
                          className="h-3.5 mb-0.5 mt-[-NaNpx] w-3.5 z-[1]"
                          src="images/img_icoutlinelogin_yellow_a400.svg"
                          alt="icoutlinelogin"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                      <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                        <Img
                          className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                          src="images/img_ellipse10.png"
                          alt="ellipseFourteen"
                        />
                        <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_icoutlinelogin.svg"
                              alt="icoutlinelogin"
                            />
                            <Text
                              className="text-sm text-white-A700"
                              size="txtMontserratLight14"
                            >
                              12:30
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-col items-start justify-end my-0 p-3 rounded-[10px] w-full">
                      <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[71%] md:w-full">
                        <Img
                          className="h-10 md:h-auto mb-0.5 rounded-[50%] w-10"
                          src="images/img_ellipse10.png"
                          alt="ellipseFifteen"
                        />
                        <div className="flex flex-col items-start justify-start mt-1 w-3/4">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <div className="flex flex-row gap-1.5 items-center justify-start w-[36%] md:w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_icoutlinelogin_yellow_a400.svg"
                              alt="icoutlinelogin"
                            />
                            <Text
                              className="text-sm text-white-A700"
                              size="txtMontserratLight14"
                            >
                              12:30
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="bg-gray-900_01 flex flex-col items-start justify-end pt-[15px] px-[15px] rounded-[10px] w-[97%] md:w-full">
                    <Img
                      className="h-[7px] md:h-auto object-cover rounded-[20px] w-[15%]"
                      src="images/img_ellipse10.png"
                      alt="ellipseSixteen"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-col gap-3 items-center justify-start p-[18px] rounded-[10px] w-[337px] md:w-full">
                <div className="bg-red-A700_19 flex flex-col h-[164px] items-center justify-start p-[22px] sm:px-5 rounded-[50%] w-[164px]">
                  <div className="bg-red-A700_19 flex flex-col h-[120px] items-center justify-start p-5 rounded-[50%] w-[120px]">
                    <div className="bg-red-A700_19 flex flex-col h-20 items-center justify-end p-1.5 rounded-[50%] w-20">
                      <Img
                        className="h-[66px] md:h-auto mt-0.5 object-cover w-[66px]"
                        src="images/img_materialsymbol_66x66.png"
                        alt="materialsymbol_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-center justify-start mb-[17px] w-[85%] md:w-full">
                  <Text
                    className="text-base text-center text-white-A700 w-full"
                    size="txtMontserratRegular16"
                  >
                    Press only in Case of Emergency
                  </Text>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[243px] text-base text-center"
                    shape="round"
                    size="md"
                    variant="outline"
                    color="red_A200_red_500_00"
                  >
                    EMERGENCY
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
