import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  FloatingInput,
  Img,
  Input,
  Line,
  Text,
} from "components";
import Header4 from "components/Header4";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const RoomsPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const [group232value, setGroup232value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] justify-start w-full">
          <Header4 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start md:ml-[0] ml-[15px] md:px-5 w-[78%] md:w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "23px",
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
                className="flex flex-col items-center justify-start mb-[627px] pt-[25px] w-full"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <MenuItem
                    icon={
                      <Img
                        className="h-6 w-6"
                        src="images/img_phcirclesthreeplusfill.svg"
                        alt="phcirclesthreep"
                      />
                    }
                  >
                    <Text>Occupancy</Text>
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        className="h-6 w-6"
                        src="images/img_ribuilding2line.svg"
                        alt="ribuilding2line"
                      />
                    }
                    active={window.location.pathname === "/hostelshostel"}
                    href="/hostelshostel"
                  >
                    <Text>Hostels</Text>
                  </MenuItem>
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[298px] mt-12"
                  onClick={() => navigate("/hostelsrooms")}
                  leftIcon={
                    <Img
                      className="h-6 mr-[18px]"
                      src="images/img_materialsymbol_gray_400.svg"
                      alt="material-symbols:bed-outline-rounded"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                    Rooms
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[298px] mt-12"
                  onClick={() => navigate("/hostelsassigned")}
                  leftIcon={
                    <Img
                      className="h-6 mr-4"
                      src="images/img_mdiassignmentindoutline.svg"
                      alt="mdi:assignment-ind-outline"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                    Assigned
                  </div>
                </Button>
                <div className="flex flex-col items-center justify-end mt-12 w-full">
                  <MenuItem
                    icon={
                      <Img
                        className="h-6 w-6"
                        src="images/img_mapfurniturestore.svg"
                        alt="mapfurnituresto"
                      />
                    }
                    active={
                      window.location.pathname === "/dashboardaddroomsfurniture"
                    }
                    href="/dashboardaddroomsfurniture"
                  >
                    <Text>Furniture</Text>
                  </MenuItem>
                </div>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[11px] justify-start w-full">
              <Input
                name="group232"
                placeholder="Search ..."
                value={group232value}
                onChange={(e) => setGroup232value(e)}
                className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] p-0 text-left text-lg w-full"
                wrapClassName="flex md:ml-[0] ml-[31px] mr-[532px] w-[45%]"
                prefix={
                  <Img
                    className="cursor-pointer h-[30px] mr-[17px] my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#b0b0b0"
                    className="cursor-pointer h-[30px] my-auto"
                    onClick={() => setGroup232value("")}
                    style={{
                      visibility:
                        group232value?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={30}
                    width={30}
                    viewBox="0 0 30 30"
                  />
                }
                shape="round"
                color="gray_900_03"
                size="2xl"
                variant="fill"
              ></Input>
              <div className="flex flex-col gap-5 items-center justify-end pt-2 px-2 w-full">
                <div className="bg-gray-900 flex flex-col items-center justify-start mt-1.5 p-[17px] rounded-[10px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-2.5 mt-[3px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[19px] justify-start w-[26%] md:w-full">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtMontserratSemiBold18"
                      >
                        Hostel 1
                      </Text>
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
                    <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[62px] w-[41%] md:w-full">
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <div className="flex flex-row gap-5 items-center justify-between w-[68%]">
                          <div className="flex flex-col items-center justify-start w-[53%]">
                            <div className="bg-gray-900_03 flex flex-row gap-1.5 items-center justify-start p-[13px] rounded-[10px] w-full">
                              <Img
                                className="h-[30px] w-[30px]"
                                src="images/img_materialsymbol_purple_a400.svg"
                                alt="materialsymbol"
                              />
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtMontserratSemiBold20"
                              >
                                458
                              </Text>
                            </div>
                          </div>
                          <div className="bg-gray-900_03 flex flex-row gap-1.5 items-center justify-start p-[13px] rounded-[10px] w-2/5">
                            <Img
                              className="h-[30px] w-[30px]"
                              src="images/img_mdibathroomtissueoutline.svg"
                              alt="mdibathroomtiss"
                            />
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtMontserratSemiBold20"
                            >
                              5
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-900_03 flex flex-row gap-[7px] items-center justify-start p-[9px] rounded-[10px] w-[28%]">
                          <Img
                            className="h-[30px] my-[5px] w-[30px]"
                            src="images/img_fekitchencooker.svg"
                            alt="fekitchencooker"
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtMontserratSemiBold20"
                          >
                            15
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <div className="bg-gray-900_03 flex flex-col gap-[7px] items-start justify-start p-2.5 rounded-[10px]">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Total Rooms
                          </Text>
                          <Text
                            className="mb-1 text-white-A700 text-xl"
                            size="txtMontserratSemiBold20"
                          >
                            458
                          </Text>
                        </div>
                        <div className="bg-gray-900_03 flex flex-col gap-[5px] items-start justify-center p-2.5 rounded-[10px]">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Occupied
                          </Text>
                          <Text
                            className="h-[25px] mb-1 text-xl text-yellow-A400"
                            size="txtMontserratSemiBold20YellowA400"
                          >
                            58
                          </Text>
                        </div>
                        <FloatingInput
                          wrapClassName="placeholder:bg-gray-900_03 leading-[normal] placeholder:left-2.5 p-0 sm:pr-5 text-base text-left placeholder:text-white-A700 text-white-A700 placeholder:top-[0] w-full"
                          className="leading-[normal] p-0 sm:pr-5 text-base text-left text-white-A700 w-full"
                          name="floors"
                          labelClasses="bg-gray-900_03 left-2.5 top-[0] text-white-A700"
                          focusedClasses="translate-y-[10px] scale-[1]"
                          wrapperClasses="top-[0]"
                          labelText="Floors"
                          defaultText="Floors"
                        ></FloatingInput>
                      </div>
                      <div className="bg-gray-900_03 flex flex-col items-start justify-start p-[9px] rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start mb-[3px] w-[96%] md:w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-[3px] text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Students
                            </Text>
                            <Text
                              className="mb-[3px] text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              In Hostel
                            </Text>
                            <Text
                              className="mb-[3px] text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Outside Hostel
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-0.5 w-[83%] md:w-full">
                            <Text
                              className="mt-1 text-white-A700 text-xl"
                              size="txtMontserratSemiBold20"
                            >
                              6582
                            </Text>
                            <Text
                              className="ml-16 text-2xl md:text-[22px] text-cyan-A200 sm:text-xl"
                              size="txtMontserratMedium24CyanA200"
                            >
                              1569
                            </Text>
                            <Text
                              className="ml-[60px] text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                              size="txtMontserratMedium24Gray400"
                            >
                              2500
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_03 flex md:flex-1 flex-col justify-center md:ml-[0] ml-[15px] p-0.5 rounded-[10px] w-[27%] md:w-full">
                      <CheckBox
                        className="leading-[normal] ml-2 md:ml-[0] mr-[134px] mt-2 sm:pr-5 text-base text-left"
                        inputClassName="h-3.5 mr-[5px] w-3.5"
                        name="furniture_One"
                        id="furniture_One"
                        label="Furniture"
                      ></CheckBox>
                      <div className="flex flex-col gap-2.5 items-center justify-start mb-[5px] mr-[3px] mt-0.5 pt-1.5 px-1.5 w-[99%] md:w-full">
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Ceiling Fan
                          </Text>
                          <Text
                            className="h-[18px] ml-[81px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            50
                          </Text>
                          <Img
                            className="h-5 ml-[9px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Center Table
                          </Text>
                          <Text
                            className="ml-[71px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            12
                          </Text>
                          <Img
                            className="h-5 ml-[13px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_One"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Chairs
                          </Text>
                          <Text
                            className="ml-[115px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            123
                          </Text>
                          <Img
                            className="h-5 ml-1.5 my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Two"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Refrigerator
                          </Text>
                          <Text
                            className="h-[18px] ml-[74px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            06
                          </Text>
                          <Img
                            className="h-5 ml-[9px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Three"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Kettle
                          </Text>
                          <Text
                            className="ml-[118px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            12
                          </Text>
                          <Img
                            className="h-5 ml-[13px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Four"
                          />
                        </div>
                        <Line className="bg-gray-900 h-0.5 rounded-[1px] w-[99%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-col items-center justify-start p-[17px] rounded-[10px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-2.5 mt-[3px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[19px] justify-start w-[26%] md:w-full">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtMontserratSemiBold18"
                      >
                        Hostel 2
                      </Text>
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
                    <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[62px] w-[41%] md:w-full">
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <div className="flex flex-row gap-5 items-center justify-between w-[68%]">
                          <div className="bg-gray-900_03 flex flex-row gap-1.5 items-center justify-start p-[13px] rounded-[10px] w-[53%]">
                            <Img
                              className="h-[30px] w-[30px]"
                              src="images/img_materialsymbol_purple_a400.svg"
                              alt="materialsymbol_One"
                            />
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtMontserratSemiBold20"
                            >
                              458
                            </Text>
                          </div>
                          <div className="bg-gray-900_03 flex flex-row gap-1.5 items-center justify-start p-[13px] rounded-[10px] w-2/5">
                            <Img
                              className="h-[30px] w-[30px]"
                              src="images/img_mdibathroomtissueoutline.svg"
                              alt="mdibathroomtiss_One"
                            />
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtMontserratSemiBold20"
                            >
                              5
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-900_03 flex flex-row gap-[7px] items-center justify-start p-[9px] rounded-[10px] w-[28%]">
                          <Img
                            className="h-[30px] my-[5px] w-[30px]"
                            src="images/img_fekitchencooker.svg"
                            alt="fekitchencooker_One"
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtMontserratSemiBold20"
                          >
                            15
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <div className="bg-gray-900_03 flex flex-col gap-[7px] items-start justify-start p-2.5 rounded-[10px]">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Total Rooms
                          </Text>
                          <Text
                            className="mb-1 text-white-A700 text-xl"
                            size="txtMontserratSemiBold20"
                          >
                            458
                          </Text>
                        </div>
                        <div className="bg-gray-900_03 flex flex-col gap-[5px] items-start justify-center p-2.5 rounded-[10px]">
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Occupied
                          </Text>
                          <Text
                            className="h-[25px] mb-1 text-xl text-yellow-A400"
                            size="txtMontserratSemiBold20YellowA400"
                          >
                            58
                          </Text>
                        </div>
                        <FloatingInput
                          wrapClassName="placeholder:bg-gray-900_03 leading-[normal] placeholder:left-2.5 p-0 sm:pr-5 text-base text-left placeholder:text-white-A700 text-white-A700 placeholder:top-[0] w-full"
                          className="leading-[normal] p-0 sm:pr-5 text-base text-left text-white-A700 w-full"
                          name="floors_One"
                          labelClasses="bg-gray-900_03 left-2.5 top-[0] text-white-A700"
                          focusedClasses="translate-y-[10px] scale-[1]"
                          wrapperClasses="top-[0]"
                          labelText="Floors"
                          defaultText="Floors"
                        ></FloatingInput>
                      </div>
                      <div className="bg-gray-900_03 flex flex-col items-start justify-start p-[9px] rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start mb-[3px] w-[96%] md:w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="mt-[3px] text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Students
                            </Text>
                            <Text
                              className="mb-[3px] text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              In Hostel
                            </Text>
                            <Text
                              className="mb-[3px] text-base text-white-A700"
                              size="txtMontserratRegular16"
                            >
                              Outside Hostel
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-0.5 w-[83%] md:w-full">
                            <Text
                              className="mt-1 text-white-A700 text-xl"
                              size="txtMontserratSemiBold20"
                            >
                              6582
                            </Text>
                            <Text
                              className="ml-16 text-2xl md:text-[22px] text-cyan-A200 sm:text-xl"
                              size="txtMontserratMedium24CyanA200"
                            >
                              1569
                            </Text>
                            <Text
                              className="ml-[60px] text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                              size="txtMontserratMedium24Gray400"
                            >
                              2500
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_03 flex md:flex-1 flex-col justify-center md:ml-[0] ml-[15px] p-0.5 rounded-[10px] w-[27%] md:w-full">
                      <CheckBox
                        className="leading-[normal] ml-2 md:ml-[0] mr-[134px] mt-2 sm:pr-5 text-base text-left"
                        inputClassName="h-3.5 mr-[5px] w-3.5"
                        name="furniture_Two"
                        id="furniture_Two"
                        label="Furniture"
                      ></CheckBox>
                      <div className="flex flex-col gap-2.5 items-center justify-start mb-[5px] mr-[3px] mt-0.5 pt-1.5 px-1.5 w-[99%] md:w-full">
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Ceiling Fan
                          </Text>
                          <Text
                            className="h-[18px] ml-[81px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            50
                          </Text>
                          <Img
                            className="h-5 ml-[9px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Five"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Center Table
                          </Text>
                          <Text
                            className="ml-[71px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            12
                          </Text>
                          <Img
                            className="h-5 ml-[13px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Six"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Chairs
                          </Text>
                          <Text
                            className="ml-[115px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            123
                          </Text>
                          <Img
                            className="h-5 ml-1.5 my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Seven"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Refrigerator
                          </Text>
                          <Text
                            className="h-[18px] ml-[74px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            06
                          </Text>
                          <Img
                            className="h-5 ml-[9px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Eight"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Kettle
                          </Text>
                          <Text
                            className="ml-[118px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            12
                          </Text>
                          <Img
                            className="h-5 ml-[13px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Nine"
                          />
                        </div>
                        <Line className="bg-gray-900 h-0.5 rounded-[1px] w-[99%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-col items-center justify-end pt-[17px] px-[17px] rounded-[10px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[3px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[19px] justify-start w-[26%] md:w-full">
                      <Text
                        className="text-lg text-white-A700"
                        size="txtMontserratSemiBold18"
                      >
                        Hostel 3
                      </Text>
                      <div className="!w-[87%] h-[69px] md:ml-[0] ml-[33px] overflow-visible">
                        <CircularProgressbar
                          className="!w-[87%] h-[69px] md:ml-[0] ml-[33px] overflow-visible"
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
                    <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[62px] w-[41%] md:w-full">
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <div className="flex flex-row gap-5 items-center justify-between w-[68%]">
                          <div className="bg-gray-900_03 flex flex-row gap-1.5 items-center justify-start p-[13px] rounded-[10px] w-[53%]">
                            <Img
                              className="h-[30px] w-[30px]"
                              src="images/img_materialsymbol_purple_a400.svg"
                              alt="materialsymbol_Two"
                            />
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtMontserratSemiBold20"
                            >
                              458
                            </Text>
                          </div>
                          <div className="bg-gray-900_03 flex flex-row gap-1.5 items-center justify-start p-[13px] rounded-[10px] w-2/5">
                            <Img
                              className="h-[30px] w-[30px]"
                              src="images/img_mdibathroomtissueoutline.svg"
                              alt="mdibathroomtiss_Two"
                            />
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtMontserratSemiBold20"
                            >
                              5
                            </Text>
                          </div>
                        </div>
                        <div className="bg-gray-900_03 flex flex-row gap-[7px] items-center justify-start p-[9px] rounded-[10px] w-[28%]">
                          <Img
                            className="h-[30px] my-[5px] w-[30px]"
                            src="images/img_fekitchencooker.svg"
                            alt="fekitchencooker_Two"
                          />
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtMontserratSemiBold20"
                          >
                            15
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <Text
                          className="bg-gray-900_03 h-[39px] justify-center pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-[10px] text-base text-white-A700 w-[145px]"
                          size="txtMontserratRegular16"
                        >
                          Total Rooms
                        </Text>
                        <Text
                          className="bg-gray-900_03 h-[39px] justify-center pb-[7px] pl-2.5 sm:pr-5 pr-[22px] pt-[11px] rounded-[10px] text-base text-white-A700 w-[110px]"
                          size="txtMontserratRegular16"
                        >
                          Occupied
                        </Text>
                        <Text
                          className="bg-gray-900_03 h-[39px] justify-center pl-2.5 sm:pr-5 pr-[27px] py-[9px] rounded-[10px] text-base text-white-A700 w-[86px]"
                          size="txtMontserratRegular16"
                        >
                          Floors
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-900_03 flex md:flex-1 flex-col justify-end md:ml-[0] ml-[15px] pt-0.5 px-0.5 rounded-[10px] w-[27%] md:w-full">
                      <CheckBox
                        className="leading-[normal] ml-2 md:ml-[0] mr-[134px] mt-2 sm:pr-5 text-base text-left"
                        inputClassName="h-3.5 mr-[5px] w-3.5"
                        name="furniture_Three"
                        id="furniture_Three"
                        label="Furniture"
                      ></CheckBox>
                      <div className="flex flex-col gap-2.5 items-center justify-end mr-[3px] mt-0.5 pt-1.5 px-1.5 w-[99%] md:w-full">
                        <div className="bg-gray-900 flex flex-row items-center justify-end p-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Ceiling Fan
                          </Text>
                          <Text
                            className="h-[18px] ml-[81px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            50
                          </Text>
                          <Img
                            className="h-5 ml-[9px] my-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Ten"
                          />
                        </div>
                        <div className="flex flex-col gap-[29px] items-end justify-start w-[99%] md:w-full">
                          <div className="sm:h-[189px] h-[26px] md:h-[67px] relative w-full">
                            <div className="sm:h-[189px] h-[26px] md:h-[67px] m-auto w-full">
                              <div className="sm:h-[189px] h-[26px] md:h-[67px] m-auto w-full">
                                <div className="flex flex-col md:gap-10 gap-[162px] h-full items-center justify-start m-auto w-full">
                                  <div className="bg-gray-900 h-[26px] rounded-[10px] w-full"></div>
                                  <Line className="bg-gray-900 h-[-162px] w-full" />
                                </div>
                                <Line className="absolute bg-gray-900 bottom-[0] h-[-21px] inset-x-[0] mx-auto w-full" />
                                <Line className="absolute bg-gray-900 bottom-[0] h-[-68px] inset-x-[0] mx-auto w-full" />
                                <Line className="absolute bg-gray-900 bottom-[0] h-[-115px] inset-x-[0] mx-auto w-full" />
                                <Text
                                  className="absolute bottom-[0] left-[7%] text-sm text-white-A700"
                                  size="txtMontserratRegular14WhiteA700"
                                >
                                  Center Table
                                </Text>
                              </div>
                              <Text
                                className="absolute bottom-[0] left-[7%] text-sm text-white-A700"
                                size="txtMontserratRegular14WhiteA700"
                              >
                                Chairs
                              </Text>
                              <Text
                                className="absolute bottom-[0] left-[7%] text-sm text-white-A700"
                                size="txtMontserratRegular14WhiteA700"
                              >
                                Refrigerator
                              </Text>
                              <Text
                                className="absolute bottom-[0] left-[7%] text-sm text-white-A700"
                                size="txtMontserratRegular14WhiteA700"
                              >
                                Kettle
                              </Text>
                              <Text
                                className="absolute bottom-[0] right-[16%] text-sm text-white-A700"
                                size="txtMontserratRegular14WhiteA700"
                              >
                                12
                              </Text>
                            </div>
                            <Text
                              className="absolute bottom-[0] right-[13%] text-sm text-white-A700"
                              size="txtMontserratRegular14WhiteA700"
                            >
                              123
                            </Text>
                            <Text
                              className="absolute bottom-[0] right-[14%] text-sm text-white-A700"
                              size="txtMontserratRegular14WhiteA700"
                            >
                              06
                            </Text>
                            <Text
                              className="absolute bottom-[0] right-[16%] text-sm text-white-A700"
                              size="txtMontserratRegular14WhiteA700"
                            >
                              12
                            </Text>
                            <Img
                              className="absolute bottom-[0] h-[18px] right-[1%]"
                              src="images/img_arrowleft_white_a700.svg"
                              alt="arrowright_Eleven"
                            />
                          </div>
                          <div className="flex flex-col gap-[46px] items-center justify-start w-[9%] md:w-full">
                            <Img
                              className="h-px"
                              src="images/img_arrowleft_white_a700.svg"
                              alt="arrowright_Twelve"
                            />
                            <Img
                              className="h-px"
                              src="images/img_arrowleft_white_a700.svg"
                              alt="arrowright_Thirteen"
                            />
                            <Img
                              className="h-px"
                              src="images/img_arrowleft_white_a700.svg"
                              alt="arrowright_Fourteen"
                            />
                          </div>
                        </div>
                      </div>
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

export default RoomsPage;
