import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  FloatingInput,
  Img,
  Input,
  Line,
  List,
  Text,
} from "components";
import Header4 from "components/Header4";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const HostelsroomsPage = () => {
  const navigate = useNavigate();

  const [group681value, setGroup681value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header4 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]">
              <div className="flex flex-col gap-[47px] items-start justify-start md:ml-[0] ml-[23px] mr-[130px] mt-[25px] w-[49%]">
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[145px]"
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
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[109px]"
                  onClick={() => navigate("/hostelshostel")}
                  leftIcon={
                    <Img
                      className="h-6 mr-[17px]"
                      src="images/img_ribuilding2line.svg"
                      alt="ri:building-2-line"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                    Hostels
                  </div>
                </Button>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: " ",
                    gap: "18px",
                    width: "100%",
                    margin: " ",
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
                className="flex flex-col items-center justify-start mb-[555px] pt-6 w-full"
              >
                <SubMenu
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbol_2.svg"
                      alt="materialsymbol"
                    />
                  }
                  label={<Text>Rooms</Text>}
                >
                  <div className="flex flex-col items-center justify-start mt-[71px] pb-6 w-full">
                    <MenuItem
                      icon={
                        <Img
                          className="h-6 w-6"
                          src="images/img_mapfurniturestore.svg"
                          alt="mapfurnituresto"
                        />
                      }
                      active={
                        window.location.pathname ===
                        "/dashboardaddroomsfurniture"
                      }
                      href="/dashboardaddroomsfurniture"
                    >
                      <Text>Furniture</Text>
                    </MenuItem>
                  </div>
                </SubMenu>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-5 justify-start w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px] w-[68%] md:w-full">
                <Input
                  name="group681"
                  placeholder="Search ..."
                  value={group681value}
                  onChange={(e) => setGroup681value(e)}
                  className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] p-0 text-left text-lg w-full"
                  wrapClassName="flex w-1/2"
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
                      onClick={() => setGroup681value("")}
                      style={{
                        visibility:
                          group681value?.length <= 0 ? "hidden" : "visible",
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
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start mt-5 w-[47%] md:w-full">
                  <div className="bg-gray-900_03 flex flex-row gap-[27px] items-center justify-between p-4 rounded-[10px] w-1/2 sm:w-full">
                    <Text
                      className="my-[3px] text-lg text-white-A700"
                      size="txtMontserratRegular18"
                    >
                      Total Rooms
                    </Text>
                    <Text
                      className="mr-1.5 my-[3px] text-lg text-white-A700"
                      size="txtMontserratSemiBold18"
                    >
                      456
                    </Text>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[190px] rounded-[10px] text-center text-lg"
                    onClick={() => navigate("/dashboardaddroomsone")}
                    color="cyan_800"
                    size="xl"
                    variant="fill"
                  >
                    +Add Rooms
                  </Button>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[25px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900_03 flex flex-1 flex-col gap-3 items-start justify-center p-4 rounded-[10px] w-full">
                    <Text
                      className="mt-[5px] text-lg text-white-A700"
                      size="txtMontserratRegular18"
                    >
                      Occupied
                    </Text>
                    <Text
                      className="mb-2.5 md:text-3xl sm:text-[28px] text-[32px] text-cyan-A200"
                      size="txtMontserratSemiBold32CyanA200"
                    >
                      358
                    </Text>
                  </div>
                  <div className="bg-gray-900_03 flex flex-1 flex-col gap-3.5 items-start justify-center p-4 rounded-[10px] w-full">
                    <Text
                      className="mt-[3px] text-lg text-white-A700"
                      size="txtMontserratRegular18"
                    >
                      Vacant
                    </Text>
                    <Text
                      className="mb-2.5 md:text-3xl sm:text-[28px] text-[32px] text-yellow-A400"
                      size="txtMontserratSemiBold32YellowA400"
                    >
                      98
                    </Text>
                  </div>
                  <div className="bg-gray-900_03 flex flex-1 flex-col gap-3 items-start justify-center p-4 rounded-[10px] w-full">
                    <Text
                      className="mt-[5px] text-lg text-white-A700"
                      size="txtMontserratRegular18"
                    >
                      Types
                    </Text>
                    <Text
                      className="mb-2.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtMontserratSemiBold32"
                    >
                      14
                    </Text>
                  </div>
                  <div className="bg-gray-900_03 flex flex-1 flex-col gap-3.5 items-start justify-center p-4 rounded-[10px] w-full">
                    <Text
                      className="mt-[3px] text-lg text-white-A700"
                      size="txtMontserratRegular18"
                    >
                      Tenants
                    </Text>
                    <Text
                      className="mb-2.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtMontserratSemiBold32"
                    >
                      750
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start pt-[5px] px-[5px] w-full">
                <div className="bg-gray-900 flex flex-col items-center justify-start p-4 rounded-[10px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-between mt-1 w-full">
                    <div className="flex md:flex-1 flex-col gap-[33px] items-start justify-start w-[78%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[79%] md:w-full">
                        <Img
                          className="h-9 w-9"
                          src="images/img_materialsymbol_white_a700.svg"
                          alt="materialsymbol_One"
                        />
                        <Text
                          className="md:ml-[0] ml-[17px] text-lg text-white-A700"
                          size="txtMontserratSemiBold18"
                        >
                          6 Bedded Bunker
                        </Text>
                        <Button
                          className="border border-gray-800_05 border-solid cursor-pointer flex items-center justify-center min-w-[84px] ml-5 md:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-4 mt-px mb-0.5 mr-[5px]"
                              src="images/img_majesticonseditpen2.svg"
                              alt="majesticons:edit-pen-2"
                            />
                          }
                          shape="round"
                          color="gray_900"
                          size="sm"
                          variant="fill"
                        >
                          <div className="leading-[normal] text-base text-left">
                            Edit
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[59px] md:ml-[0] ml-[178px]"
                          leftIcon={
                            <Img
                              className="h-5 mb-px mr-1.5"
                              src="images/img_ribuilding2line_white_a700.svg"
                              alt="ri:building-2-line"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="sm"
                          variant="fill"
                        >
                          <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                            H1
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[59px] ml-2.5 md:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-5 mb-px mr-[7px]"
                              src="images/img_materialsymbolsfloor.svg"
                              alt="material-symbols:floor"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="xs"
                          variant="fill"
                        >
                          <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                            07
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[63px] ml-2.5 md:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-5 mb-px mr-[5px]"
                              src="images/img_mapfurniturestore_white_a700.svg"
                              alt="map:furniture-store"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="sm"
                          variant="fill"
                        >
                          <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                            07
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[63px] ml-2.5 md:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-6 mr-[3px]"
                              src="images/img_materialsymbolsreducecapacityrounded.svg"
                              alt="material-symbols:reduce-capacity-rounded"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="xs"
                          variant="fill"
                        >
                          <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                            06
                          </div>
                        </Button>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[48%] md:w-full">
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                            <FloatingInput
                              wrapClassName="placeholder:bg-gray-900_01 leading-[normal] placeholder:left-2.5 p-0 sm:pr-5 text-2xl text-left placeholder:text-white-A700 text-white-A700 placeholder:top-[0] w-full"
                              className="leading-[normal] p-0 sm:pr-5 text-2xl text-left text-white-A700 w-full"
                              name="OneHundredTwentyFive"
                              labelClasses="bg-gray-900_01 left-2.5 top-[0] text-white-A700"
                              focusedClasses="translate-y-[36px] scale-[1]"
                              wrapperClasses="top-[0]"
                              labelText="Total Rooms"
                              defaultText="125"
                            ></FloatingInput>
                            <FloatingInput
                              wrapClassName="placeholder:bg-gray-900_01 leading-[normal] placeholder:left-2.5 p-0 sm:pr-5 text-2xl text-left placeholder:text-white-A700 text-white-A700 placeholder:top-[0] w-full"
                              className="leading-[normal] p-0 sm:pr-5 text-2xl text-left text-white-A700 w-full"
                              name="price"
                              labelClasses="bg-gray-900_01 left-2.5 top-[0] text-white-A700"
                              focusedClasses="translate-y-[38px] scale-[1]"
                              wrapperClasses="top-[0]"
                              labelText="Rent Per Tenant"
                              defaultText="₹ 50,000"
                            ></FloatingInput>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                            <FloatingInput
                              wrapClassName="placeholder:bg-gray-900_01 leading-[normal] placeholder:left-2.5 p-0 sm:pr-5 text-2xl text-left placeholder:text-white-A700 text-white-A700 placeholder:top-[0] w-full"
                              className="leading-[normal] p-0 sm:pr-5 text-2xl text-left text-white-A700 w-full"
                              name="SixHundredFiftyEight"
                              labelClasses="bg-gray-900_01 left-2.5 top-[0] text-white-A700"
                              focusedClasses="translate-y-[36px] scale-[1]"
                              wrapperClasses="top-[0]"
                              labelText="Tenants"
                              defaultText="658"
                            ></FloatingInput>
                            <FloatingInput
                              wrapClassName="placeholder:bg-gray-900_01 leading-[normal] placeholder:left-2.5 p-0 sm:pr-5 text-2xl text-left placeholder:text-white-A700 text-white-A700 placeholder:top-[0] w-full"
                              className="leading-[normal] p-0 sm:pr-5 text-2xl text-left text-white-A700 w-full"
                              name="OneHundredTwentyFive_One"
                              labelClasses="bg-gray-900_01 left-2.5 top-[0] text-white-A700"
                              focusedClasses="translate-y-[36px] scale-[1]"
                              wrapperClasses="top-[0]"
                              labelText="Furniture"
                              defaultText="125"
                            ></FloatingInput>
                          </div>
                          <Text
                            className="text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Distribution
                          </Text>
                          <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-start rounded-[7px] w-full">
                            <div className="bg-red-800 h-3.5 rounded-bl-[10px] rounded-tl-[10px] w-[31%]"></div>
                            <div className="bg-deep_purple-A200 h-3.5 w-[6%]"></div>
                            <div className="bg-teal-A400 h-3.5 w-[12%]"></div>
                            <div className="bg-yellow-A400 h-3.5 w-[12%]"></div>
                            <div className="bg-light_blue-A700 h-3.5 rounded-br-[10px] rounded-tr-[10px] w-[42%]"></div>
                          </div>
                        </div>
                        <div className="md:h-[234px] h-[235px] sm:h-[399px] relative w-1/2 md:w-full">
                          <div className="md:h-[234px] h-[235px] sm:h-[399px] m-auto w-full">
                            <div className="absolute bg-gray-900_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded-[10px] w-full">
                              <div className="flex sm:flex-col flex-row gap-8 items-start justify-between mb-[3px] mt-[34px] w-full">
                                <div className="h-[157px] relative w-[157px]">
                                  <Text
                                    className="m-auto text-2xl md:text-[22px] text-white-A700 sm:text-xl"
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
                                        trail: {
                                          strokeWidth: 16,
                                          stroke: "#ffe504",
                                        },
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
                                <div className="flex sm:flex-1 flex-col items-start justify-start w-[58%] sm:w-full">
                                  <div className="flex flex-row gap-[74px] items-start justify-start w-[87%] md:w-full">
                                    <Text
                                      className="text-base text-white-A700"
                                      size="txtMontserratRegular16"
                                    >
                                      Expected
                                    </Text>
                                    <Text
                                      className="text-base text-white-A700"
                                      size="txtMontserratRegular16"
                                    >
                                      Collected
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-center justify-between mt-1 w-[98%] md:w-full">
                                    <Text
                                      className="text-white-A700 text-xl"
                                      size="txtMontserratSemiBold20"
                                    >
                                      ₹ 6,58,000
                                    </Text>
                                    <Text
                                      className="text-cyan-A200 text-xl"
                                      size="txtMontserratSemiBold20CyanA200"
                                    >
                                      ₹ 1,54,500
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-center justify-between mt-[33px] w-[91%] md:w-full">
                                    <Text
                                      className="text-base text-white-A700"
                                      size="txtMontserratRegular16"
                                    >
                                      Due
                                    </Text>
                                    <Text
                                      className="text-base text-white-A700"
                                      size="txtMontserratRegular16"
                                    >
                                      Overdue
                                    </Text>
                                  </div>
                                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                                    <Text
                                      className="text-xl text-yellow-A400"
                                      size="txtMontserratSemiBold20YellowA400"
                                    >
                                      ₹ 3,00,000
                                    </Text>
                                    <Text
                                      className="text-purple-A400 text-xl"
                                      size="txtMontserratSemiBold20PurpleA400"
                                    >
                                      ₹ 2,04,000
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-purple-A400 bottom-[0] h-[204px] left-[0] rotate-[158deg] rounded-[50%] w-[204px]"></div>
                          </div>
                          <Text
                            className="absolute left-[5%] text-base text-white-A700 top-[6%]"
                            size="txtMontserratRegular16"
                          >
                            Collection
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex md:flex-1 flex-col gap-2.5 justify-start md:mt-0 mt-1 p-2.5 rounded-[10px] w-[22%] md:w-full">
                      <CheckBox
                        className="leading-[normal] ml-1.5 md:ml-[0] mr-[142px] mt-1 sm:pr-5 text-base text-left"
                        inputClassName="h-3.5 mr-[5px] w-3.5"
                        name="furniture_Two"
                        id="furniture_Two"
                        label="Furniture"
                      ></CheckBox>
                      <div className="flex flex-col gap-2.5 items-center justify-start mb-[3px] mr-[11px] pt-1.5 px-1.5 w-[96%] md:w-full">
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
                        <div className="bg-gray-900 flex flex-row items-start justify-end pt-0.5 px-0.5 rounded-[10px] w-[99%] md:w-full">
                          <Text
                            className="mt-[9px] text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            Ceiling Fan
                          </Text>
                          <Text
                            className="ml-[81px] mt-2 text-sm text-white-A700"
                            size="txtMontserratRegular14WhiteA700"
                          >
                            50
                          </Text>
                          <Img
                            className="h-[19px] ml-[9px] mt-1.5 w-5"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrowright_Five"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 flex flex-col items-center justify-end pt-4 px-4 rounded-[10px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-1 w-full">
                    <div className="flex md:flex-1 flex-col gap-[33px] items-start justify-start w-[78%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[79%] md:w-full">
                        <Img
                          className="h-9 w-9"
                          src="images/img_materialsymbol_white_a700.svg"
                          alt="materialsymbol_Two"
                        />
                        <Text
                          className="md:ml-[0] ml-[17px] text-lg text-white-A700"
                          size="txtMontserratSemiBold18"
                        >
                          6 Bedded Bunker
                        </Text>
                        <Button
                          className="border border-gray-800_05 border-solid cursor-pointer flex items-center justify-center min-w-[84px] ml-5 md:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-4 mt-px mb-0.5 mr-[5px]"
                              src="images/img_majesticonseditpen2.svg"
                              alt="majesticons:edit-pen-2"
                            />
                          }
                          shape="round"
                          color="gray_900"
                          size="sm"
                          variant="fill"
                        >
                          <div className="leading-[normal] text-base text-left">
                            Edit
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[59px] md:ml-[0] ml-[178px]"
                          leftIcon={
                            <Img
                              className="h-5 mb-px mr-1.5"
                              src="images/img_ribuilding2line_white_a700.svg"
                              alt="ri:building-2-line"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="sm"
                          variant="fill"
                        >
                          <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                            H1
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[59px] ml-2.5 md:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-5 mb-px mr-[7px]"
                              src="images/img_materialsymbolsfloor.svg"
                              alt="material-symbols:floor"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="xs"
                          variant="fill"
                        >
                          <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                            07
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[63px] ml-2.5 md:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-5 mb-px mr-[5px]"
                              src="images/img_mapfurniturestore_white_a700.svg"
                              alt="map:furniture-store"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="sm"
                          variant="fill"
                        >
                          <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                            07
                          </div>
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[63px] ml-2.5 md:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-6 mr-[3px]"
                              src="images/img_materialsymbolsreducecapacityrounded.svg"
                              alt="material-symbols:reduce-capacity-rounded"
                            />
                          }
                          shape="round"
                          color="gray_900_01"
                          size="xs"
                          variant="fill"
                        >
                          <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                            06
                          </div>
                        </Button>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[48%] md:w-full">
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                            <FloatingInput
                              wrapClassName="placeholder:bg-gray-900_01 leading-[normal] placeholder:left-2.5 p-0 sm:pr-5 text-2xl text-left placeholder:text-white-A700 text-white-A700 placeholder:top-[0] w-full"
                              className="leading-[normal] p-0 sm:pr-5 text-2xl text-left text-white-A700 w-full"
                              name="OneHundredTwentyFive_Two"
                              labelClasses="bg-gray-900_01 left-2.5 top-[0] text-white-A700"
                              focusedClasses="translate-y-[36px] scale-[1]"
                              wrapperClasses="top-[0]"
                              labelText="Total Rooms"
                              defaultText="125"
                            ></FloatingInput>
                            <FloatingInput
                              wrapClassName="placeholder:bg-gray-900_01 leading-[normal] placeholder:left-2.5 p-0 sm:pr-5 text-2xl text-left placeholder:text-white-A700 text-white-A700 placeholder:top-[0] w-full"
                              className="leading-[normal] p-0 sm:pr-5 text-2xl text-left text-white-A700 w-full"
                              name="price_Five"
                              labelClasses="bg-gray-900_01 left-2.5 top-[0] text-white-A700"
                              focusedClasses="translate-y-[38px] scale-[1]"
                              wrapperClasses="top-[0]"
                              labelText="Rent Per Tenant"
                              defaultText="₹ 50,000"
                            ></FloatingInput>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                            <Input
                              name="group689"
                              placeholder="Tenants"
                              className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                              wrapClassName="sm:flex-1 sm:w-full"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            ></Input>
                            <Input
                              name="group685"
                              placeholder="Furniture"
                              className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                              wrapClassName="sm:flex-1 sm:w-full"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-end pr-[15px] pt-[15px] rounded-[10px] w-1/2 md:w-full">
                          <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start w-[98%] md:w-full">
                            <div className="h-[110px] relative w-[45%] sm:w-full">
                              <Text
                                className="mb-[-4.11px] ml-[25px] text-base text-white-A700 z-[1]"
                                size="txtMontserratRegular16"
                              >
                                Collection
                              </Text>
                              <div className="flex h-[95px] justify-end mt-auto mx-auto w-full">
                                <div className="!w-[77%] h-[71px] mt-auto mx-auto overflow-visible">
                                  <CircularProgressbar
                                    className="!w-[77%] h-[71px] mt-auto mx-auto overflow-visible"
                                    value={24}
                                    strokeWidth={16}
                                    styles={{
                                      trail: {
                                        strokeWidth: 16,
                                        stroke: "#ffe504",
                                      },
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
                                <div className="absolute bg-purple-A400 h-[95px] inset-[0] justify-center m-auto rotate-[158deg] rounded-[102px] w-full"></div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start sm:mt-0 mt-[39px] w-[54%] sm:w-full">
                              <div className="flex flex-row gap-[74px] items-start justify-start w-[89%] md:w-full">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtMontserratRegular16"
                                >
                                  Expected
                                </Text>
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtMontserratRegular16"
                                >
                                  Collected
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-white-A700 text-xl"
                                  size="txtMontserratSemiBold20"
                                >
                                  ₹ 6,58,000
                                </Text>
                                <Text
                                  className="text-cyan-A200 text-xl"
                                  size="txtMontserratSemiBold20CyanA200"
                                >
                                  ₹ 1,54,500
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex md:flex-1 flex-col gap-2.5 justify-end md:mt-0 mt-1 pt-2.5 px-2.5 rounded-[10px] w-[22%] md:w-full">
                      <CheckBox
                        className="leading-[normal] ml-1.5 md:ml-[0] mr-[142px] mt-1 sm:pr-5 text-base text-left"
                        inputClassName="h-3.5 mr-[5px] w-3.5"
                        name="furniture_Four"
                        id="furniture_Four"
                        label="Furniture"
                      ></CheckBox>
                      <div className="flex flex-col items-start justify-end mr-[11px] pt-1.5 px-1.5 w-[96%] md:w-full">
                        <div className="bg-gray-900 flex flex-row items-center justify-end md:ml-[0] ml-[3px] p-0.5 rounded-[10px] w-[99%] md:w-full">
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
                            alt="arrowright_Six"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end md:ml-[0] ml-[3px] mt-2.5 p-0.5 rounded-[10px] w-[99%] md:w-full">
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
                            alt="arrowright_Seven"
                          />
                        </div>
                        <div className="bg-gray-900 flex flex-row items-center justify-end md:ml-[0] ml-[3px] mt-2.5 p-0.5 rounded-[10px] w-[99%] md:w-full">
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
                            alt="arrowright_Eight"
                          />
                        </div>
                        <Line className="bg-gray-900 h-[-1px] md:ml-[0] ml-[3px] mt-2.5 w-[99%]" />
                        <Line className="bg-gray-900 h-[-48px] md:ml-[0] ml-[3px] mt-12 w-[99%]" />
                        <Img
                          className="h-px md:ml-[0] ml-[205px] mt-14"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrowright_Nine"
                        />
                        <Text
                          className="md:ml-[0] ml-[18px] mt-[58px] text-sm text-white-A700"
                          size="txtMontserratRegular14WhiteA700"
                        >
                          Kettle
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[178px] mt-[58px] text-sm text-white-A700"
                          size="txtMontserratRegular14WhiteA700"
                        >
                          12
                        </Text>
                        <Line className="bg-gray-900 h-[-95px] md:ml-[0] ml-[3px] mt-[95px] w-[99%]" />
                        <Img
                          className="h-px md:ml-[0] ml-[205px] mt-[103px]"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrowright_Ten"
                        />
                        <Text
                          className="md:ml-[0] ml-[18px] mt-[105px] text-sm text-white-A700"
                          size="txtMontserratRegular14WhiteA700"
                        >
                          Ceiling Fan
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[178px] mt-[105px] text-sm text-white-A700"
                          size="txtMontserratRegular14WhiteA700"
                        >
                          50
                        </Text>
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

export default HostelsroomsPage;
