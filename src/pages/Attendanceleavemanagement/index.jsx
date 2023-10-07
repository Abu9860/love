import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, FloatingInput, Img, List, Text } from "components";
import Header1 from "components/Header1";

import "react-circular-progressbar/dist/styles.css";

const AttendanceleavemanagementPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header1 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-[51px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]"
            >
              <div className="flex flex-col gap-[46px] items-start justify-start md:ml-[0] ml-[22px] mr-[199px] mt-6 w-[26%]">
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[65px]"
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
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[59px]"
                  onClick={() => navigate("/attendancein")}
                  leftIcon={
                    <Img
                      className="h-6 mr-[17px]"
                      src="images/img_materialsymbolsinhomemodesharp.svg"
                      alt="material-symbols:in-home-mode-sharp"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                    In
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[77px]"
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
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: " ",
                    gap: "18px",
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
                className="flex flex-col items-center justify-start mb-[673px] mt-0.5 pt-6 w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  }
                  active={window.location.pathname === "/grantleaveconfirm"}
                  href="/grantleaveconfirm"
                >
                  <Text>Leave</Text>
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[25px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-[43px] items-start justify-between w-full">
                <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start md:mt-0 mt-1 p-3.5 rounded-[10px]">
                  <div className="flex md:flex-col flex-row gap-[25px] items-end justify-start mb-3 w-[94%] md:w-full">
                    <div className="h-[183px] md:h-[186px] mb-[3px] relative w-[183px]">
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-white-A700 text-xl w-max"
                        size="txtMontserratSemiBold20"
                      >
                        50%
                      </Text>
                      <div className="absolute bg-purple-A400 h-[183px] inset-[0] justify-center m-auto rotate-[72deg] rounded-[91px] w-[183px]"></div>
                      <div className="!w-[145px] absolute h-[145px] inset-[0] justify-center m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[145px] absolute h-[145px] inset-[0] justify-center m-auto overflow-visible"
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
                    <div className="flex flex-col gap-[17px] items-center justify-start md:mt-0 mt-3 w-[77%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-[42px] items-center justify-between w-full">
                        <FloatingInput
                          wrapClassName="bg-gray-900_01 border-0 flex flex-1 pb-[11px] pl-5 pr-[35px] pt-[37px] rounded-[10px] top-[0] w-full"
                          className="font-medium leading-[normal] p-0 placeholder:bg-gray-900_01 placeholder:left-5 placeholder:text-white-A700 placeholder:top-[0] sm:pr-5 text-2xl text-left text-white-A700 w-full"
                          name="5546"
                          labelClasses="bg-gray-900_01 left-5 top-[0] text-white-A700"
                          focusedClasses="translate-y-[37px] scale-[1]"
                          wrapperClasses="top-[0]"
                          labelText="Total Students"
                          defaultText="5,546"
                          suffix={
                            <Img
                              className="top-[0] my-auto"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          }
                        ></FloatingInput>
                        <div className="bg-gray-900_01 flex flex-col items-center justify-start p-2.5 rounded-[10px]">
                          <div className="flex flex-row items-center justify-between mb-[3px] w-[96%] md:w-full">
                            <div className="flex flex-col gap-[5px] justify-start">
                              <Text
                                className="text-base text-white-A700"
                                size="txtMontserratRegular16"
                              >
                                Outside Hostel
                              </Text>
                              <Text
                                className="ml-1.5 md:ml-[0] text-2xl md:text-[22px] sm:text-xl text-yellow-A400"
                                size="txtMontserratMedium24YellowA400"
                              >
                                589
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
                          wrapClassName="bg-gray-900_01 border-0 flex flex-1 pb-[11px] pl-5 pr-[35px] pt-[37px] rounded-[10px] top-[0] w-full"
                          className="font-medium leading-[normal] p-0 placeholder:bg-gray-900_01 placeholder:left-5 placeholder:text-white-A700 placeholder:top-[0] sm:pr-5 text-2xl text-cyan-A200 text-left w-full"
                          name="zipcode"
                          labelClasses="bg-gray-900_01 left-5 top-[0] text-white-A700"
                          focusedClasses="translate-y-[37px] scale-[1]"
                          wrapperClasses="top-[0]"
                          labelText="Inside Hostel"
                          defaultText="4852"
                          suffix={
                            <Img
                              className="top-[0] my-auto"
                              src="images/img_maximize_cyan_a200.svg"
                              alt="maximize"
                            />
                          }
                        ></FloatingInput>
                        <FloatingInput
                          wrapClassName="bg-gray-900_01 border-0 flex flex-1 pb-[11px] pl-[18px] pr-[35px] pt-[37px] rounded-[10px] top-[0] w-full"
                          className="font-medium leading-[normal] p-0 placeholder:bg-gray-900_01 placeholder:left-[18px] placeholder:text-white-A700 placeholder:top-[0] sm:pr-5 text-2xl text-left text-purple-A400 w-full"
                          name="OneHundredFive"
                          labelClasses="bg-gray-900_01 left-[18px] top-[0] text-white-A700"
                          focusedClasses="translate-y-[37px] scale-[1]"
                          wrapperClasses="top-[0]"
                          labelText="On Leave"
                          defaultText="105"
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
                <Button
                  className="common-pointer border-2 border-cyan-A200 border-solid cursor-pointer font-medium leading-[normal] mb-[159px] min-w-[269px] rounded-[10px] text-center text-xl"
                  onClick={() => navigate("/grantleave")}
                  color="black_900"
                  size="2xl"
                  variant="fill"
                >
                  Grant Leave
                </Button>
              </div>
              <div className="sm:h-[1342px] md:h-[1668px] h-[672px] relative w-[76%] md:w-full">
                <div className="absolute bg-blue_gray-900_01 flex sm:flex-col flex-row gap-10 h-full inset-[0] items-end justify-center m-auto p-[18px] rounded-[10px] w-full">
                  <Text
                    className="mb-[600px] ml-4 sm:ml-[0] sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtMontserratMedium24"
                  >
                    Students on Leave
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center mb-[596px] min-w-[170px]"
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
                <div className="absolute bottom-[3%] flex flex-col inset-x-[0] items-center justify-start mx-auto pt-[19px] px-[19px] w-full">
                  <List
                    className="flex flex-col gap-[15px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-6 items-start justify-start mb-[13px] w-[98%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseTen"
                          />
                          <Text
                            className="ml-3 md:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Img
                            className="h-3.5 md:ml-[0] ml-[92px] w-3.5"
                            src="images/img_icoutlinelogin_yellow_a400_14x14.svg"
                            alt="icoutlinelogin"
                          />
                          <Text
                            className="ml-1.5 md:ml-[0] text-sm text-white-A700"
                            size="txtMontserratLight14"
                          >
                            12:30
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[165px] w-6"
                            src="images/img_materialsymbol_gray_400.svg"
                            alt="materialsymbol"
                          />
                          <Text
                            className="md:ml-[0] ml-[18px] text-base text-gray-400"
                            size="txtMontserratMedium16"
                          >
                            Room : 101
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[81px] w-6"
                            src="images/img_ribuilding2line.svg"
                            alt="ribuilding2line"
                          />
                          <Text
                            className="md:ml-[0] ml-[17px] text-base text-gray-400"
                            size="txtMontserratMedium16"
                          >
                            Hostel : H1
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="sm:mt-0 mt-2.5 text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Leave Taken on : 26 Feb 2023
                          </Text>
                          <Text
                            className="sm:mt-0 mt-[11px] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Duration : 7 Days
                          </Text>
                          <Text
                            className="sm:mt-0 mt-[11px] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Expected Arrival : 5 Mar 2023
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[178px] text-base text-center"
                            shape="round"
                            color="cyan_800"
                            size="sm"
                            variant="fill"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-6 items-start justify-start mb-[13px] w-[98%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseTen"
                          />
                          <Text
                            className="ml-3 md:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Img
                            className="h-3.5 md:ml-[0] ml-[92px] w-3.5"
                            src="images/img_icoutlinelogin_yellow_a400_14x14.svg"
                            alt="icoutlinelogin"
                          />
                          <Text
                            className="ml-1.5 md:ml-[0] text-sm text-white-A700"
                            size="txtMontserratLight14"
                          >
                            12:30
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[165px] w-6"
                            src="images/img_materialsymbol_gray_400.svg"
                            alt="materialsymbol"
                          />
                          <Text
                            className="md:ml-[0] ml-[18px] text-base text-gray-400"
                            size="txtMontserratMedium16"
                          >
                            Room : 101
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[81px] w-6"
                            src="images/img_ribuilding2line.svg"
                            alt="ribuilding2line"
                          />
                          <Text
                            className="md:ml-[0] ml-[17px] text-base text-gray-400"
                            size="txtMontserratMedium16"
                          >
                            Hostel : H1
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="sm:mt-0 mt-2.5 text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Leave Taken on : 26 Feb 2023
                          </Text>
                          <Text
                            className="sm:mt-0 mt-[11px] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Duration : 7 Days
                          </Text>
                          <Text
                            className="sm:mt-0 mt-[11px] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Expected Arrival : 5 Mar 2023
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[178px] text-base text-center"
                            shape="round"
                            color="cyan_800"
                            size="sm"
                            variant="fill"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                      <div className="flex flex-col gap-6 items-start justify-start mb-[13px] w-[98%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_ellipse10.png"
                            alt="ellipseTen"
                          />
                          <Text
                            className="ml-3 md:ml-[0] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Ramakant Sharma
                          </Text>
                          <Img
                            className="h-3.5 md:ml-[0] ml-[92px] w-3.5"
                            src="images/img_icoutlinelogin_yellow_a400_14x14.svg"
                            alt="icoutlinelogin"
                          />
                          <Text
                            className="ml-1.5 md:ml-[0] text-sm text-white-A700"
                            size="txtMontserratLight14"
                          >
                            12:30
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[165px] w-6"
                            src="images/img_materialsymbol_gray_400.svg"
                            alt="materialsymbol"
                          />
                          <Text
                            className="md:ml-[0] ml-[18px] text-base text-gray-400"
                            size="txtMontserratMedium16"
                          >
                            Room : 101
                          </Text>
                          <Img
                            className="h-6 md:ml-[0] ml-[81px] w-6"
                            src="images/img_ribuilding2line.svg"
                            alt="ribuilding2line"
                          />
                          <Text
                            className="md:ml-[0] ml-[17px] text-base text-gray-400"
                            size="txtMontserratMedium16"
                          >
                            Hostel : H1
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="sm:mt-0 mt-2.5 text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Leave Taken on : 26 Feb 2023
                          </Text>
                          <Text
                            className="sm:mt-0 mt-[11px] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Duration : 7 Days
                          </Text>
                          <Text
                            className="sm:mt-0 mt-[11px] text-base text-white-A700"
                            size="txtMontserratRegular16"
                          >
                            Expected Arrival : 5 Mar 2023
                          </Text>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[178px] text-base text-center"
                            shape="round"
                            color="cyan_800"
                            size="sm"
                            variant="fill"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:h-80 sm:h-[148px] h-[70px] justify-end my-0 relative w-full">
                      <div className="bg-gray-900_01 h-[148px] mt-auto mx-auto rounded-[10px] w-full"></div>
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-center justify-start left-[2%] my-auto w-[90%]">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse10.png"
                          alt="ellipseTen"
                        />
                        <Text
                          className="ml-3 md:ml-[0] text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          Ramakant Sharma
                        </Text>
                        <Img
                          className="h-3.5 md:ml-[0] ml-[92px] w-3.5"
                          src="images/img_icoutlinelogin_yellow_a400_14x14.svg"
                          alt="icoutlinelogin"
                        />
                        <Text
                          className="ml-1.5 md:ml-[0] text-sm text-white-A700"
                          size="txtMontserratLight14"
                        >
                          12:30
                        </Text>
                        <Img
                          className="h-6 md:ml-[0] ml-[165px] w-6"
                          src="images/img_materialsymbol_gray_400.svg"
                          alt="materialsymbol"
                        />
                        <Text
                          className="md:ml-[0] ml-[18px] text-base text-gray-400"
                          size="txtMontserratMedium16"
                        >
                          Room : 101
                        </Text>
                        <Img
                          className="h-6 md:ml-[0] ml-[81px] w-6"
                          src="images/img_ribuilding2line.svg"
                          alt="ribuilding2line"
                        />
                        <Text
                          className="md:ml-[0] ml-[17px] text-base text-gray-400"
                          size="txtMontserratMedium16"
                        >
                          Hostel : H1
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceleavemanagementPage;
