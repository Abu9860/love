import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, CheckBox, FloatingInput, Img, List, Text } from "components";
import Header from "components/Header";

import "react-circular-progressbar/dist/styles.css";

const AccountsPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 mt-[3px] w-6"
          src="images/img_materialsymbol_1.svg"
          alt="materialsymbol_One"
        />
      ),
      label: "Dashboard",
      href: "/",
      active: window.location.pathname === "/",
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
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]"
            >
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[108px] md:ml-[0] ml-[23px] mr-[167px] mt-[95px] pr-2.5"
                onClick={() => navigate("/accountscredit")}
                leftIcon={
                  <Img
                    className="h-6 mr-[17px]"
                    src="images/img_materialsymbolsinhomemodesharp.svg"
                    alt="material-symbols:in-home-mode-sharp"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                  Credit
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[93px] md:ml-[0] ml-[22px] mr-[183px] mt-12"
                onClick={() => navigate("/accountsdebit")}
                leftIcon={
                  <Img
                    className="h-6 mr-[18px]"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                  Debit
                </div>
              </Button>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "24px",
                    gap: "17px",
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
                className="flex flex-col items-center justify-start mb-[479px] pt-6 w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[15px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between w-[99%] md:w-full">
                <div className="sm:h-[291px] h-[298px] md:h-[609px] relative w-[76%] md:w-full">
                  <div className="sm:h-[291px] h-[298px] md:h-[609px] m-auto w-full">
                    <div className="absolute bg-gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[18px] rounded-[10px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between mb-[3px] w-[99%] md:w-full">
                        <div className="flex flex-col gap-[21px] items-start justify-start w-[23%] md:w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtMontserratSemiBold20"
                          >
                            Collection
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
                        <div className="flex flex-col gap-[17px] items-center justify-start md:mt-0 mt-12 w-[73%] md:w-full">
                          <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-full">
                            <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-start p-[11px] rounded-[10px] w-[49%] md:w-full">
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
                                  alt="checkmark"
                                />
                              </div>
                            </div>
                            <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start p-[11px] rounded-[10px] w-[49%] md:w-full">
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
                          <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full">
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
                  <div className="absolute flex flex-col gap-[25px] h-max inset-y-[0] justify-start left-[3%] my-auto w-[22%]">
                    <Img
                      className="h-3 md:ml-[0] ml-[117px] w-3"
                      src="images/img_checkmark.svg"
                      alt="checkmark_One"
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
                <div className="flex flex-col gap-[30px] items-center justify-start md:mt-0 mt-[30px] w-[22%] md:w-full">
                  <Button
                    className="border-2 border-cyan-A200 border-solid cursor-pointer font-medium leading-[normal] min-w-[273px] rounded-[10px] text-center text-xl"
                    color="black_900"
                    size="2xl"
                    variant="fill"
                  >
                    Request Payment
                  </Button>
                  <Button
                    className="!text-red-500_01 border-2 border-red-500_01 border-solid cursor-pointer leading-[normal] min-w-[273px] rounded-[10px] text-center text-xl"
                    color="black_900"
                    size="2xl"
                    variant="fill"
                  >
                    Make Payout
                  </Button>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-900 flex flex-1 flex-col gap-3 justify-end p-1 rounded-[5px] w-full">
                  <CheckBox
                    className="font-semibold leading-[normal] ml-4 md:ml-[0] mr-[524px] mt-3.5 sm:pr-5 text-left text-xl"
                    inputClassName="h-3 mr-[5px] w-3"
                    name="credit"
                    id="credit"
                    label="Credit"
                  ></CheckBox>
                  <div className="flex flex-col gap-5 items-center justify-end mb-1 pt-[11px] px-[11px] w-full">
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end mt-[3px] sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-cyan-A200"
                        size="txtMontserratRegular16CyanA200"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-cyan-A200"
                        size="txtMontserratRegular16CyanA200"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_One"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-cyan-A200"
                        size="txtMontserratRegular16CyanA200"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_Two"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-cyan-A200"
                        size="txtMontserratRegular16CyanA200"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_Three"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-cyan-A200"
                        size="txtMontserratRegular16CyanA200"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_Four"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-cyan-A200"
                        size="txtMontserratRegular16CyanA200"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_Five"
                        />
                      </div>
                    </div>
                    <div className="flex md:h-16 h-[22px] justify-end relative w-full">
                      <div className="bg-gray-900_01 h-16 mt-auto mx-auto rounded-[5px] w-full"></div>
                      <div className="absolute bg-gray-900_01 bottom-[0] flex flex-col items-start justify-start p-[21px] sm:px-5 right-[0] rounded-[5px] w-[10%]">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204_white_a700_21x3.svg"
                          alt="group204_Six"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-1 flex-col gap-2 justify-center pl-1.5 py-1.5 rounded-[5px] w-full">
                  <CheckBox
                    className="font-semibold leading-[normal] ml-3 md:ml-[0] mr-[537px] mt-3 sm:pr-5 text-left text-xl"
                    inputClassName="h-3 mr-[5px] w-3"
                    name="debit"
                    id="debit"
                    label="Debit"
                  ></CheckBox>
                  <div className="flex flex-col gap-5 items-center justify-end mb-[3px] pt-[9px] px-[9px] w-full">
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end mt-[9px] sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-red-500_01"
                        size="txtMontserratRegular16Red50001"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-red-500_01"
                        size="txtMontserratRegular16Red50001"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_One"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-red-500_01"
                        size="txtMontserratRegular16Red50001"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_Two"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-red-500_01"
                        size="txtMontserratRegular16Red50001"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_Three"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-red-500_01"
                        size="txtMontserratRegular16Red50001"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_Four"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end sm:pl-5 pl-7 rounded-[5px] w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[248px] text-base text-red-500_01"
                        size="txtMontserratRegular16Red50001"
                      >
                        ₹ 1,56,000
                      </Text>
                      <div className="bg-gray-900_01 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[45px] p-[21px] sm:px-5 rounded-[5px] w-[10%] sm:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204.svg"
                          alt="group204_Five"
                        />
                      </div>
                    </div>
                    <div className="flex md:h-16 h-[21px] justify-end relative w-full">
                      <div className="bg-gray-900_01 h-16 mt-auto mx-auto rounded-[5px] w-full"></div>
                      <div className="absolute bg-gray-900_01 bottom-[0] flex flex-col items-start justify-start p-[21px] sm:px-5 right-[0] rounded-[5px] w-[10%]">
                        <Img
                          className="h-[21px]"
                          src="images/img_group204_white_a700_21x3.svg"
                          alt="group204_Six"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
