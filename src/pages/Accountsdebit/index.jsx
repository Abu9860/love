import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, CheckBox, FloatingInput, Img, List, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

import "react-circular-progressbar/dist/styles.css";

const AccountsdebitPage = () => {
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
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[18px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]" />
            <div className="flex flex-1 flex-col gap-[31px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[99%] md:w-full">
                <div className="sm:h-[289px] h-[298px] md:h-[609px] relative w-[76%] md:w-full">
                  <div className="absolute bg-gray-900 flex flex-col h-max inset-[0] items-center justify-center m-auto p-5 rounded-[10px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between w-[99%] md:w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-[23%] md:w-full">
                        <CheckBox
                          className="font-semibold leading-[normal] sm:pr-5 text-left text-xl"
                          inputClassName="h-3 mr-[5px] w-3"
                          name="expenses"
                          id="expenses"
                          label="Expenses"
                        ></CheckBox>
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
                      <div className="flex flex-col gap-[17px] items-center justify-start md:mt-0 mt-[45px] w-[73%] md:w-full">
                        <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-full">
                          <FloatingInput
                            wrapClassName="bg-gray-900_01 border-0 flex flex-1 pb-[11px] pl-5 pr-[35px] pt-[37px] rounded-[10px] top-[0] w-full"
                            className="font-medium leading-[normal] p-0 placeholder:bg-gray-900_01 placeholder:left-5 placeholder:text-white-A700 placeholder:top-[0] sm:pr-5 text-2xl text-left text-white-A700 w-full"
                            name="price"
                            labelClasses="bg-gray-900_01 left-5 top-[0] text-white-A700"
                            focusedClasses="translate-y-[37px] scale-[1]"
                            wrapperClasses="top-[0]"
                            labelText="Total Expense"
                            defaultText="₹ 52,00,000"
                            suffix={
                              <Img
                                className="top-[0] my-auto"
                                src="images/img_checkmark.svg"
                                alt="checkmark"
                              />
                            }
                          ></FloatingInput>
                          <div className="bg-gray-900_01 flex flex-col items-center justify-start p-2.5 rounded-[10px]">
                            <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                              <div className="flex flex-col gap-[7px] justify-start">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtMontserratRegular16"
                                >
                                  Paid
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
                            labelText="Unpaid"
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
                  <div className="!w-[206px] absolute bottom-[9%] h-[206px] left-[3%] overflow-visible">
                    <CircularProgressbar
                      className="!w-[206px] absolute bottom-[9%] h-[206px] left-[3%] overflow-visible"
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
                <Button
                  className="!text-red-500_01 border-2 border-red-500_01 border-solid cursor-pointer leading-[normal] mb-[226px] min-w-[273px] rounded-[10px] text-center text-xl"
                  color="black_900"
                  size="2xl"
                  variant="fill"
                >
                  Make Payout
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
                <div className="bg-gray-900 flex md:flex-1 flex-col items-center justify-end pr-1 py-1 rounded-[5px] w-1/2 md:w-full">
                  <div className="flex flex-col gap-4 justify-start mb-3 mt-[18px] w-full">
                    <div className="flex flex-row gap-[17px] items-start justify-start ml-5 md:ml-[0] w-[29%] md:w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtMontserratSemiBold20"
                      >
                        Debit History
                      </Text>
                      <Img
                        className="common-pointer h-6 w-6"
                        src="images/img_mdiarrowexpandall.svg"
                        alt="mdiarrowexpanda"
                        onClick={() => navigate("/accountsdebitexpand")}
                      />
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-end pt-[7px] px-[7px] w-full">
                      <List
                        className="flex flex-col gap-5 items-center w-[99%]"
                        orientation="vertical"
                      >
                        <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end my-0 sm:pl-5 pl-7 rounded-[5px] w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[248px] text-base text-red-500"
                            size="txtMontserratRegular16Red500"
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
                        <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end my-0 sm:pl-5 pl-7 rounded-[5px] w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[248px] text-base text-red-500"
                            size="txtMontserratRegular16Red500"
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
                        <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end my-0 sm:pl-5 pl-7 rounded-[5px] w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[248px] text-base text-red-500"
                            size="txtMontserratRegular16Red500"
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
                        <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end my-0 sm:pl-5 pl-7 rounded-[5px] w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[248px] text-base text-red-500"
                            size="txtMontserratRegular16Red500"
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
                        <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end my-0 sm:pl-5 pl-7 rounded-[5px] w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[248px] text-base text-red-500"
                            size="txtMontserratRegular16Red500"
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
                        <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-end my-0 sm:pl-5 pl-7 rounded-[5px] w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[248px] text-base text-red-500"
                            size="txtMontserratRegular16Red500"
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
                      </List>
                      <div className="flex md:h-16 h-3.5 justify-end relative w-[99%] md:w-full">
                        <div className="bg-gray-900_01 h-16 mt-auto mx-auto rounded-[5px] w-full"></div>
                        <Img
                          className="absolute bottom-[0] h-16 right-[0]"
                          src="images/img_debitdetails.svg"
                          alt="debitdetails"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex md:flex-1 flex-col gap-[52px] justify-start mb-[198px] p-5 rounded-[5px] w-1/2 md:w-full">
                  <Text
                    className="mt-0.5 text-white-A700 text-xl"
                    size="txtMontserratSemiBold20"
                  >
                    Debit Graph
                  </Text>
                  <div className="flex flex-col gap-[19px] h-[272px] md:h-auto items-start justify-start mb-3.5 md:ml-[0] ml-[11px] mr-1 w-[581px] sm:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[216px] items-center justify-start w-full"
                      style={{ backgroundImage: "url('images/img_graph.svg')" }}
                    >
                      <Img
                        className="h-[216px] md:h-auto object-cover"
                        src="images/img_graph_green_a200.png"
                        alt="graph"
                      />
                    </div>
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-blue_gray-300 text-xs w-auto"
                        size="txtMontserratMedium12"
                      >
                        Mar
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-xs w-auto"
                        size="txtMontserratMedium12"
                      >
                        Apr
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-xs w-auto"
                        size="txtMontserratMedium12"
                      >
                        May
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-xs w-auto"
                        size="txtMontserratMedium12"
                      >
                        Jun
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-xs w-auto"
                        size="txtMontserratMedium12"
                      >
                        Jul
                      </Text>
                      <Text
                        className="text-blue_gray-300 text-xs w-auto"
                        size="txtMontserratMedium12"
                      >
                        Aug
                      </Text>
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

export default AccountsdebitPage;
