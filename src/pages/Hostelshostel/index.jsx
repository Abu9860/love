import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, CheckBox, FloatingInput, Img, Input, Text } from "components";
import Header4 from "components/Header4";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const HostelshostelPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const [group127value, setGroup127value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header4 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]"
            >
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[145px] md:ml-[0] ml-[23px] mr-[130px] mt-[25px]"
                onClick={() => navigate("/rooms")}
                leftIcon={
                  <Img
                    className="h-6 mr-[17px]"
                    src="images/img_phcirclesthreeplusfill_gray_400.svg"
                    alt="ph:circles-three-plus-fill"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                  Occupancy
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[106px] md:ml-[0] ml-[22px] mr-[170px] mt-[119px]"
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
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[126px] md:ml-[0] ml-[23px] mr-[149px] mt-12"
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
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "24px ",
                    paddingLeft: "38px",
                    paddingRight: "24px",
                    gap: "17px",
                    backgroundColor: "#2d2d2d",
                    margin: " ",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "18px",
                    borderRadius: "10px",
                  },
                }}
                className="flex flex-col items-center justify-start mb-[794px] pr-[15px] w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_ribuilding2line_cyan_a200.svg"
                      alt="ribuilding2line"
                    />
                  }
                  active={window.location.pathname === "/hostelshostel"}
                  href="/hostelshostel"
                >
                  <Text>Hostels</Text>
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[11px] justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[18px] w-[34%] md:w-full">
                <Input
                  name="group127"
                  placeholder="Search ..."
                  value={group127value}
                  onChange={(e) => setGroup127value(e)}
                  className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] p-0 text-left text-lg w-full"
                  wrapClassName="flex w-full"
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
                      onClick={() => setGroup127value("")}
                      style={{
                        visibility:
                          group127value?.length <= 0 ? "hidden" : "visible",
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
                <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-start w-[87%] md:w-full">
                  <div className="bg-gray-900_03 flex flex-row gap-6 items-center justify-between p-4 rounded-[10px] w-[48%] sm:w-full">
                    <Text
                      className="my-[3px] text-lg text-white-A700"
                      size="txtMontserratRegular18"
                    >
                      Total Hostels
                    </Text>
                    <Text
                      className="mr-1.5 my-[3px] text-lg text-white-A700"
                      size="txtMontserratSemiBold18"
                    >
                      4
                    </Text>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[190px] rounded-[10px] text-center text-lg"
                    onClick={() => navigate("/dashboardaddhostels")}
                    color="cyan_800"
                    size="xl"
                    variant="fill"
                  >
                    +Add Hostel
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-end pt-[26px] sm:px-5 px-[26px] w-full">
                <div className="bg-gray-900 md:h-[260px] h-[429px] sm:h-[488px] p-[15px] relative rounded-[10px] w-full">
                  <div className="absolute flex flex-col gap-[7px] items-start justify-start left-[1%] top-[5%] w-[57%]">
                    <div className="flex flex-row gap-[7px] items-end justify-start w-[13%] md:w-full">
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
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-[13px] text-base text-gray-400"
                        size="txtMontserratRegular16Gray400"
                      >
                        <>
                          Plot number 206, Tihri Nagar, Main Hawai Sadak
                          <br />
                          Jaipur - Rajasthan - 302021 India
                        </>
                      </Text>
                      <div className="flex md:flex-1 flex-row gap-5 items-center justify-center ml-20 md:ml-[0] w-[36%] md:w-full">
                        <div className="bg-gray-900_03 flex flex-row gap-1.5 items-center justify-start p-[13px] rounded-[10px] w-[53%]">
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
                      <div className="bg-gray-900_03 flex md:flex-1 flex-row gap-[7px] items-center justify-start mb-[15px] ml-5 md:ml-[0] p-[9px] rounded-[10px] w-[15%] md:w-full">
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
                  </div>
                  <div className="absolute bottom-[7%] flex flex-col gap-8 items-start justify-start left-[1%] w-[19%]">
                    <div className="h-[179px] relative w-[179px]">
                      <Text
                        className="m-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                        size="txtMontserratSemiBold32"
                      >
                        50%
                      </Text>
                      <div className="!w-[179px] absolute h-[179px] inset-[0] justify-center m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[179px] absolute h-[179px] inset-[0] justify-center m-auto overflow-visible"
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
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[239px] rounded-[10px] text-center text-xl"
                      color="cyan_800"
                      size="sm"
                      variant="fill"
                    >
                      +Add Room
                    </Button>
                  </div>
                  <div className="absolute flex sm:flex-col flex-row gap-[13px] items-center justify-center right-[3%] top-[12%] w-2/5">
                    <div className="md:h-[234px] h-[237px] relative w-1/2 sm:w-full">
                      <div className="absolute bg-gray-900_03 flex flex-col gap-[15px] h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[10px] w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtMontserratSemiBold20"
                        >
                          Collection
                        </Text>
                        <div className="h-[157px] md:h-[164px] mb-[7px] relative w-[157px]">
                          <Text
                            className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl w-max"
                            size="txtMontserratSemiBold24"
                          >
                            25%
                          </Text>
                          <div className="!w-[157px] absolute h-[157px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[157px] absolute h-[157px] inset-[0] justify-center m-auto overflow-visible"
                              value={24}
                              strokeWidth={16}
                              styles={{
                                trail: { strokeWidth: 16, stroke: "#292929" },
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
                          <div className="!w-[157px] absolute h-[157px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[157px] absolute h-[157px] inset-[0] justify-center m-auto overflow-visible"
                              value={43}
                              strokeWidth={16}
                              styles={{
                                trail: { strokeWidth: 16, stroke: "#292929" },
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
                      <div className="absolute bg-purple-A400 bottom-[0] h-[204px] inset-x-[0] mx-auto rotate-[158deg] rounded-[50%] w-[204px]"></div>
                    </div>
                    <div className="bg-gray-900_03 flex flex-col justify-center p-0.5 rounded-[10px] w-[48%] sm:w-full">
                      <CheckBox
                        className="leading-[normal] ml-2 md:ml-[0] mr-[134px] mt-2 sm:pr-5 text-base text-left"
                        inputClassName="h-3.5 mr-[5px] w-3.5"
                        name="furniture"
                        id="furniture"
                        label="Furniture"
                      ></CheckBox>
                      <div className="flex flex-col gap-2.5 items-center justify-start mb-[23px] mr-[3px] mt-0.5 pt-1.5 px-1.5 w-[99%] md:w-full">
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
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[15px] h-max inset-y-[0] items-center justify-start left-[28%] my-auto w-[30%]">
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
                      <div className="flex flex-col items-start justify-start mb-[3px] w-[95%] md:w-full">
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
                        <div className="flex flex-row items-start justify-start mt-0.5 w-[84%] md:w-full">
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
                  <div className="absolute bg-gray-900_03 bottom-[5%] flex flex-col items-start justify-start p-2.5 right-[3%] rounded-[10px] w-[71%]">
                    <div className="flex flex-col gap-[17px] items-start justify-start mb-3 md:ml-[0] ml-[9px] w-[86%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[90%] md:w-full">
                        <Text
                          className="text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Expected
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[137px] text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Collected
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[107px] text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Remaining
                        </Text>
                        <Text
                          className="ml-32 md:ml-[0] text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Overdue
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtMontserratSemiBold24"
                        >
                          ₹ 15,65,852
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-cyan-A200 sm:text-xl"
                          size="txtMontserratSemiBold24CyanA200"
                        >
                          ₹ 3,91,463
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] sm:text-xl text-yellow-A400"
                          size="txtMontserratSemiBold24YellowA400"
                        >
                          ₹ 7,51,608
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-purple-A400 sm:text-xl"
                          size="txtMontserratSemiBold24PurpleA400"
                        >
                          ₹ 4,85,414.12
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-col items-center justify-end pt-[15px] px-[15px] rounded-[10px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-1.5 w-full">
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[58%] md:w-full">
                      <div className="flex flex-row gap-[7px] items-end justify-start w-[13%] md:w-full">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtMontserratSemiBold18"
                        >
                          Hostel 1
                        </Text>
                        <Img
                          className="h-3 my-1 w-3"
                          src="images/img_checkmark.svg"
                          alt="checkmark_One"
                        />
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Text
                          className="md:mt-0 mt-[13px] text-base text-gray-400"
                          size="txtMontserratRegular16Gray400"
                        >
                          <>
                            Plot number 206, Tihri Nagar, Main Hawai Sadak
                            <br />
                            Jaipur - Rajasthan - 302021 India
                          </>
                        </Text>
                        <div className="flex md:flex-1 flex-row gap-5 items-center justify-center ml-20 md:ml-[0] w-[36%] md:w-full">
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
                        <div className="bg-gray-900_03 flex md:flex-1 flex-row gap-[7px] items-center justify-start mb-[15px] ml-5 md:ml-[0] p-[9px] rounded-[10px] w-[15%] md:w-full">
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
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between w-full">
                        <div className="flex h-[153px] md:h-[173px] justify-end sm:mt-0 mt-5 relative w-1/4 sm:w-full">
                          <Text
                            className="mb-[41px] mt-auto mx-auto md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                            size="txtMontserratSemiBold32"
                          >
                            50%
                          </Text>
                          <div className="!w-full absolute h-[153px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-full absolute h-[153px] inset-[0] justify-center m-auto overflow-visible"
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
                        <div className="flex sm:flex-1 flex-col gap-[15px] items-center justify-start mb-1 w-[53%] sm:w-full">
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
                            <div className="flex flex-col items-start justify-start mb-[3px] w-[95%] md:w-full">
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
                              <div className="flex flex-row items-start justify-start mt-0.5 w-[84%] md:w-full">
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
                      </div>
                    </div>
                    <div className="h-[237px] md:h-[242px] mb-2 md:mt-0 mt-[29px] relative w-[21%] md:w-full">
                      <div className="absolute bg-gray-900_03 flex flex-col gap-[15px] h-full inset-[0] items-center justify-center m-auto p-[15px] rounded-[10px] w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtMontserratSemiBold20"
                        >
                          Collection
                        </Text>
                        <div className="h-[157px] md:h-[164px] mb-[7px] relative w-[157px]">
                          <Text
                            className="absolute h-max inset-[0] justify-center m-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl w-max"
                            size="txtMontserratSemiBold24"
                          >
                            25%
                          </Text>
                          <div className="!w-[157px] absolute h-[157px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[157px] absolute h-[157px] inset-[0] justify-center m-auto overflow-visible"
                              value={24}
                              strokeWidth={16}
                              styles={{
                                trail: { strokeWidth: 16, stroke: "#292929" },
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
                          <div className="!w-[157px] absolute h-[157px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-[157px] absolute h-[157px] inset-[0] justify-center m-auto overflow-visible"
                              value={43}
                              strokeWidth={16}
                              styles={{
                                trail: { strokeWidth: 16, stroke: "#292929" },
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
                      <div className="absolute bg-purple-A400 bottom-[0] h-[204px] inset-x-[0] mx-auto rotate-[158deg] rounded-[50%] w-[204px]"></div>
                    </div>
                    <div className="bg-gray-900_03 flex md:flex-1 flex-col justify-center mb-1 md:mt-0 mt-[29px] p-0.5 rounded-[10px] w-1/5 md:w-full">
                      <CheckBox
                        className="leading-[normal] ml-2 md:ml-[0] mr-[134px] mt-2 sm:pr-5 text-base text-left"
                        inputClassName="h-3.5 mr-[5px] w-3.5"
                        name="furniture_One"
                        id="furniture_One"
                        label="Furniture"
                      ></CheckBox>
                      <div className="flex flex-col gap-2.5 items-center justify-start mb-[23px] mr-[3px] mt-0.5 pt-1.5 px-1.5 w-[99%] md:w-full">
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
                            alt="arrowright_Four"
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
                            alt="arrowright_Five"
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
                            alt="arrowright_Six"
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
                            alt="arrowright_Seven"
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
    </>
  );
};

export default HostelshostelPage;
