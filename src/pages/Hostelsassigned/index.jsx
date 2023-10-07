import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";
import Header4 from "components/Header4";

import { CloseSVG } from "../../assets/images";

const roomtypesOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const hosteltypeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const hosteltypeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HostelsassignedPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const [group392value, setGroup392value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header4 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]"
            >
              <div className="flex flex-col gap-[47px] items-start justify-start md:ml-[0] ml-[22px] mr-[130px] mt-[25px] w-[49%]">
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
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[106px]"
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
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "16px",
                    marginTop: "24px",
                    paddingBottom: "38px",
                    fontSize: "18px",
                    paddingLeft: "38px",
                    paddingRight: "38px",
                  },
                }}
                className="flex flex-col items-center justify-start mb-[602px] mt-6 pr-[15px] w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_mdiassignmentindoutline_cyan_a200.svg"
                      alt="mdiassignmentin"
                    />
                  }
                  active={window.location.pathname === "/hostelsassigned"}
                  href="/hostelsassigned"
                >
                  <Text className="font-semibold text-white-A700">
                    Assigned
                  </Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mb-2.5 w-6"
                      src="images/img_mapfurniturestore.svg"
                      alt="mapfurnituresto"
                    />
                  }
                  active={
                    window.location.pathname === "/dashboardaddroomsfurniture"
                  }
                  href="/dashboardaddroomsfurniture"
                >
                  <Text className="font-medium text-gray-400">Furniture</Text>
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[15px] justify-start w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start ml-6 md:ml-[0] w-[57%] md:w-full">
                <Input
                  name="group392"
                  placeholder="Search ..."
                  value={group392value}
                  onChange={(e) => setGroup392value(e)}
                  className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] p-0 text-left text-lg w-full"
                  wrapClassName="flex w-[59%]"
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
                      onClick={() => setGroup392value("")}
                      style={{
                        visibility:
                          group392value?.length <= 0 ? "hidden" : "visible",
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
                <div className="bg-gray-900_03 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-2 rounded-[5px] w-full">
                  <Text
                    className="text-gray-400 text-lg"
                    size="txtMontserratRegular18Gray400"
                  >
                    Room Types
                  </Text>
                  <SelectBox
                    className="sm:flex-1 leading-[normal] sm:ml-[0] ml-[18px] text-left text-lg w-[14%] sm:w-full"
                    placeholderClassName="text-gray-400"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="images/img_materialsymbolsarrowdropdown.svg"
                        alt="material-symbols:arrow-drop-down"
                      />
                    }
                    isMulti={false}
                    name="roomtypes_One"
                    options={roomtypesOneOptionsList}
                    isSearchable={false}
                    placeholder="All"
                    shape="round"
                    color="gray_900_01"
                    size="xs"
                    variant="fill"
                  />
                  <Text
                    className="sm:ml-[0] ml-[79px] text-gray-400 text-lg"
                    size="txtMontserratRegular18Gray400"
                  >
                    Hostels
                  </Text>
                  <SelectBox
                    className="sm:flex-1 leading-[normal] sm:ml-[0] ml-[17px] text-left text-lg w-[14%] sm:w-full"
                    placeholderClassName="text-gray-400"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="images/img_materialsymbolsarrowdropdown.svg"
                        alt="material-symbols:arrow-drop-down"
                      />
                    }
                    isMulti={false}
                    name="hosteltype"
                    options={hosteltypeOptionsList}
                    isSearchable={false}
                    placeholder="All"
                    shape="round"
                    color="gray_900_01"
                    size="xs"
                    variant="fill"
                  />
                  <Text
                    className="sm:ml-[0] ml-[79px] text-gray-400 text-lg"
                    size="txtMontserratRegular18Gray400"
                  >
                    Floors
                  </Text>
                  <SelectBox
                    className="sm:flex-1 leading-[normal] ml-7 sm:ml-[0] mr-0.5 text-left text-lg w-[14%] sm:w-full"
                    placeholderClassName="text-gray-400"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="images/img_materialsymbolsarrowdropdown.svg"
                        alt="material-symbols:arrow-drop-down"
                      />
                    }
                    isMulti={false}
                    name="hosteltype_One"
                    options={hosteltypeOneOptionsList}
                    isSearchable={false}
                    placeholder="All"
                    shape="round"
                    color="gray_900_01"
                    size="xs"
                    variant="fill"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-end pt-6 sm:px-5 px-6 w-full">
                <div className="md:gap-5 gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[3px] w-[98%]">
                  <div className="bg-gray-900 flex flex-col items-center justify-start py-3 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[29px] justify-start mb-[7px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[15px] w-[72%] md:w-full">
                        <Img
                          className="h-9 w-9"
                          src="images/img_materialsymbol_white_a700.svg"
                          alt="materialsymbol"
                        />
                        <Text
                          className="sm:ml-[0] ml-[17px] sm:mt-0 mt-1.5 text-lg text-white-A700"
                          size="txtMontserratSemiBold18"
                        >
                          6 Bedded Bunker
                        </Text>
                        <div className="bg-gray-900_01 flex flex-row gap-[13px] items-center justify-center sm:ml-[0] ml-[31px] p-1.5 rounded-[5px] w-[28%] sm:w-full">
                          <Text
                            className="ml-[3px] text-base text-white-A700"
                            size="txtMontserratMedium16WhiteA700"
                          >
                            Floor No.
                          </Text>
                          <Text
                            className="mr-[3px] text-base text-white-A700"
                            size="txtMontserratMedium16WhiteA700"
                          >
                            07
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center mb-0.5 min-w-[59px] sm:ml-[0] ml-[27px]"
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
                      </div>
                      <div className="flex flex-col items-center justify-start p-2 w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mb-[7px] w-full">
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              101
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              102
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              103
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              104
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              105
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              106
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              107
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              108
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              109
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              110
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              111
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              112
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              113
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              114
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              115
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              116
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              117
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              118
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              119
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              120
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              121
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              122
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              123
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              124
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              125
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              126
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              127
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              128
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              129
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              130
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              131
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              132
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              133
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              134
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              135
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="orange_A700"
                              size="sm"
                              variant="fill"
                            >
                              136
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="orange_A700"
                              size="sm"
                              variant="fill"
                            >
                              137
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              138
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              139
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              140
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              131
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              132
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              133
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              134
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              135
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              136
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              137
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              138
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              139
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              140
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              101
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              102
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              103
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              104
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              105
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              106
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              107
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              108
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              109
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              110
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 flex flex-col items-center justify-start py-3 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[29px] justify-start mb-[7px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[15px] w-[72%] md:w-full">
                        <Img
                          className="h-9 w-9"
                          src="images/img_materialsymbol_white_a700.svg"
                          alt="materialsymbol"
                        />
                        <Text
                          className="sm:ml-[0] ml-[17px] sm:mt-0 mt-1.5 text-lg text-white-A700"
                          size="txtMontserratSemiBold18"
                        >
                          6 Bedded Bunker
                        </Text>
                        <div className="bg-gray-900_01 flex flex-row gap-[13px] items-center justify-center sm:ml-[0] ml-[31px] p-1.5 rounded-[5px] w-[28%] sm:w-full">
                          <Text
                            className="ml-[3px] text-base text-white-A700"
                            size="txtMontserratMedium16WhiteA700"
                          >
                            Floor No.
                          </Text>
                          <Text
                            className="mr-[3px] text-base text-white-A700"
                            size="txtMontserratMedium16WhiteA700"
                          >
                            07
                          </Text>
                        </div>
                        <Button
                          className="cursor-pointer flex items-center justify-center mb-0.5 min-w-[59px] sm:ml-[0] ml-[27px]"
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
                      </div>
                      <div className="flex flex-col items-center justify-start p-2 w-full">
                        <div className="flex flex-col gap-[15px] items-center justify-start mb-[7px] w-full">
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              101
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              102
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              103
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              104
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              105
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              106
                            </Button>
                            <Button
                              className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                              onClick={() => navigate("/hostelassignedmodal")}
                              size="sm"
                            >
                              107
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              108
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              109
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              110
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              111
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              112
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              113
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              114
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              115
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              116
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              117
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              118
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              119
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              120
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              121
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              122
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              123
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              124
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              125
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              126
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              127
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              128
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              129
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              130
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              131
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              132
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              133
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              134
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              135
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="orange_A700"
                              size="sm"
                              variant="fill"
                            >
                              136
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="orange_A700"
                              size="sm"
                              variant="fill"
                            >
                              137
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              138
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              139
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              140
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              131
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              132
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              133
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              134
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              135
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              136
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              137
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              138
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              139
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              140
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              101
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              102
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              103
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              104
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              105
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              106
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="red_A700_01"
                              size="sm"
                              variant="fill"
                            >
                              107
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              108
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              109
                            </Button>
                            <Button
                              className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                              shape="round"
                              color="gray_900_01"
                              size="sm"
                              variant="fill"
                            >
                              110
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[286px] sm:h-[3878px] md:h-[410px] justify-end relative w-full">
                    <div className="bg-gray-900 h-[410px] mt-auto mx-auto rounded-[10px] w-full"></div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-start justify-between left-[2%] top-[4%] w-[72%]">
                      <Img
                        className="h-9 w-9"
                        src="images/img_materialsymbol_white_a700.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="sm:mt-0 mt-1.5 text-lg text-white-A700"
                        size="txtMontserratSemiBold18"
                      >
                        6 Bedded Bunker
                      </Text>
                      <div className="bg-gray-900_01 flex flex-row gap-[13px] items-center justify-center p-1.5 rounded-[5px]">
                        <Text
                          className="ml-[3px] text-base text-white-A700"
                          size="txtMontserratMedium16WhiteA700"
                        >
                          Floor No.
                        </Text>
                        <Text
                          className="mr-[3px] text-base text-white-A700"
                          size="txtMontserratMedium16WhiteA700"
                        >
                          07
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center mb-0.5 min-w-[59px]"
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
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start mb-[7px] w-full">
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            101
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            102
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            103
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            104
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            105
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            106
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            107
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            108
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            109
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            110
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            111
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            112
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            113
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            114
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            115
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            116
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            117
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            118
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            119
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            120
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            121
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            122
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            123
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            124
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            125
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            126
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            127
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            128
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            129
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            130
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            131
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            132
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            133
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            134
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            135
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="orange_A700"
                            size="sm"
                            variant="fill"
                          >
                            136
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="orange_A700"
                            size="sm"
                            variant="fill"
                          >
                            137
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            138
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            139
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            140
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            101
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            102
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            103
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            104
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            105
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            106
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            107
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            108
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            109
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            110
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[286px] sm:h-[3878px] md:h-[410px] justify-end relative w-full">
                    <div className="bg-gray-900 h-[410px] mt-auto mx-auto rounded-[10px] w-full"></div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-10 items-start justify-between left-[2%] top-[4%] w-[72%]">
                      <Img
                        className="h-9 w-9"
                        src="images/img_materialsymbol_white_a700.svg"
                        alt="materialsymbol"
                      />
                      <Text
                        className="sm:mt-0 mt-1.5 text-lg text-white-A700"
                        size="txtMontserratSemiBold18"
                      >
                        6 Bedded Bunker
                      </Text>
                      <div className="bg-gray-900_01 flex flex-row gap-[13px] items-center justify-center p-1.5 rounded-[5px]">
                        <Text
                          className="ml-[3px] text-base text-white-A700"
                          size="txtMontserratMedium16WhiteA700"
                        >
                          Floor No.
                        </Text>
                        <Text
                          className="mr-[3px] text-base text-white-A700"
                          size="txtMontserratMedium16WhiteA700"
                        >
                          07
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center mb-0.5 min-w-[59px]"
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
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-2 w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start mb-[7px] w-full">
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            101
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            102
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            103
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            104
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            105
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            106
                          </Button>
                          <Button
                            className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[53px] text-base text-center text-white-A700"
                            onClick={() => navigate("/hostelassignedmodal")}
                            size="sm"
                          >
                            107
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            108
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            109
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            110
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            111
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            112
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            113
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            114
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            115
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            116
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            117
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            118
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            119
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            120
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            121
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            122
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            123
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            124
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            125
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            126
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            127
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            128
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            129
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            130
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            131
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            132
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            133
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            134
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            135
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="orange_A700"
                            size="sm"
                            variant="fill"
                          >
                            136
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="orange_A700"
                            size="sm"
                            variant="fill"
                          >
                            137
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            138
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            139
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            140
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                          <div className="bg-gray-900_01 h-9 rounded-[5px] w-[9%]"></div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            101
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            102
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            103
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            104
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            105
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            106
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="red_A700_01"
                            size="sm"
                            variant="fill"
                          >
                            107
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            108
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            109
                          </Button>
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                            shape="round"
                            color="gray_900_01"
                            size="sm"
                            variant="fill"
                          >
                            110
                          </Button>
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

export default HostelsassignedPage;
