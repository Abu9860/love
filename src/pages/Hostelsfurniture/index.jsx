import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HostelsfurniturePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_materialsymbol_gray_400.svg"
          alt="materialsymbol_Three"
        />
      ),
      label: "Rooms",
      href: "/rooms",
      active: window.location.pathname === "/rooms",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_mdiassignmentindoutline.svg"
          alt="mdiassignmentin"
        />
      ),
      label: "Assigned",
      href: "/hostelsassigned",
      active: window.location.pathname === "/hostelsassigned",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_mapfurniturestore_cyan_a200.svg"
          alt="mapfurnituresto"
        />
      ),
      label: "Furniture",
      href: "/dashboardaddroomsfurniture",
      active: window.location.pathname === "/dashboardaddroomsfurniture",
    },
  ];
  const [group867value, setGroup867value] = React.useState("");

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-1 flex-row gap-1.5 items-center justify-center mb-8 md:ml-[0] ml-[52px] md:mt-0 mt-[67px] w-[6%] md:w-full">
              <div className="bg-cyan-A200 h-6 my-0.5 rounded-[50%] w-6"></div>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratSemiBold24"
              >
                HMS
              </Text>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-8 min-w-[146px] ml-56 md:ml-[0] md:mt-0 mt-[72px]"
              onClick={() => navigate("/")}
              leftIcon={
                <Img
                  className="h-6 mr-2.5 my-px"
                  src="images/img_materialsymbolsdashboardoutline.svg"
                  alt="material-symbols:dashboard-outline"
                />
              }
            >
              <div className="font-medium leading-[normal] text-gray-400 text-left text-xl">
                Dashboard
              </div>
            </Button>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[81px] items-center justify-start ml-1.5 md:ml-[0] md:mt-0 mt-[49px] w-[14%] md:w-full"
              style={{ backgroundImage: "url('images/img_group191.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start p-[23px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group192.png')" }}
              >
                <div className="flex flex-row gap-2.5 items-center justify-center mb-2 w-3/5 md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_fluentdevicem.svg"
                    alt="fluentdevicem"
                  />
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtMontserratMedium20"
                  >
                    Rooms
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-row gap-[9px] items-center justify-center mb-8 md:ml-[0] ml-[7px] md:mt-0 mt-[72px] w-[9%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_materialsymbolscopresentoutlinesharp.svg"
                alt="materialsymbol"
              />
              <Text
                className="text-gray-400 text-xl"
                size="txtMontserratMedium20Gray400"
              >
                Attendance
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-[9px] items-center justify-center mb-8 md:ml-[0] ml-[66px] md:mt-0 mt-[72px] w-[8%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_materialsymbolsaccountbalanceoutlinerounded.svg"
                alt="materialsymbol_One"
              />
              <Text
                className="text-gray-400 text-xl"
                size="txtMontserratMedium20Gray400"
              >
                Accounts
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-center mb-[33px] md:ml-[0] ml-[66px] md:mt-0 mt-[71px] w-[10%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_materialsymbolsaccountbalanceoutlinerounded_gray_400.svg"
                alt="materialsymbol_Two"
              />
              <Text
                className="text-gray-400 text-xl"
                size="txtMontserratMedium20Gray400"
              >
                Maintenance
              </Text>
            </div>
            <Button
              className="flex h-[62px] items-center justify-center md:ml-[0] ml-[89px] md:mt-0 my-[34px] rounded-[50%] w-[62px]"
              shape="circle"
              color="blue_gray_900"
              size="lg"
              variant="fill"
            >
              <Img src="images/img_calendar.svg" alt="calendar" />
            </Button>
            <Button
              className="flex h-[62px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[34px] rounded-[50%] w-[62px]"
              shape="circle"
              color="blue_gray_900"
              size="xl"
              variant="fill"
            >
              <Img src="images/img_notification.svg" alt="notification" />
            </Button>
            <Button
              className="flex h-[62px] items-center justify-center ml-10 md:ml-[0] mr-[51px] md:mt-0 my-[34px] rounded-[50%] w-[62px]"
              shape="circle"
              color="blue_gray_900"
              size="md"
              variant="fill"
            >
              <Img
                className="h-10"
                src="images/img_typcnuser.svg"
                alt="typcnuser"
              />
            </Button>
          </header>
          <div className="flex md:flex-col flex-row md:gap-[51px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[298px] flex h-screen md:hidden justify-start overflow-auto top-[0]"
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
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[109px] md:ml-[0] ml-[23px] mr-[166px] mt-[47px]"
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
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "22px 22px 22px 23px",
                    gap: "18px",
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
                className="flex flex-col items-center justify-start mb-[603px] mt-[23px] w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[25px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[69%] md:w-full">
                <Input
                  name="group867"
                  placeholder="Search ..."
                  value={group867value}
                  onChange={(e) => setGroup867value(e)}
                  className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] p-0 text-left text-lg w-full"
                  wrapClassName="flex w-[52%] md:w-full"
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
                      onClick={() => setGroup867value("")}
                      style={{
                        visibility:
                          group867value?.length <= 0 ? "hidden" : "visible",
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
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[185px] md:ml-[0] ml-[30px] rounded-[10px] text-center text-xl"
                  onClick={() => navigate("/hosteladdfurnitureselectcategory")}
                  color="cyan_800"
                  size="2xl"
                  variant="fill"
                >
                  +Add Furniture
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[197px] md:ml-[0] ml-[25px] rounded-[10px] text-center text-xl"
                  onClick={() => navigate("/hostelfurniturereportdamageone")}
                  color="red_A700_01"
                  size="2xl"
                  variant="fill"
                >
                  Report Damage
                </Button>
              </div>
              <div className="bg-gray-900_03 flex flex-col items-center justify-start p-4 rounded-[10px] w-[71%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between my-[9px] w-[99%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-[43%] md:w-full">
                    <div className="gap-[17px] grid grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="bg-black-900 flex flex-1 flex-col gap-[11px] items-start justify-end p-[7px] rounded-[10px] w-full">
                        <Text
                          className="ml-3 md:ml-[0] text-lg text-white-A700"
                          size="txtMontserratRegular18"
                        >
                          Total
                        </Text>
                        <Text
                          className="ml-3 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtMontserratMedium24"
                        >
                          45,689
                        </Text>
                      </div>
                      <div className="bg-black-900 flex flex-1 flex-col gap-[11px] items-start justify-end p-[7px] rounded-[10px] w-full">
                        <Text
                          className="ml-3 md:ml-[0] text-lg text-white-A700"
                          size="txtMontserratRegular18"
                        >
                          Utilized
                        </Text>
                        <Text
                          className="ml-3 md:ml-[0] text-2xl md:text-[22px] text-cyan-A200 sm:text-xl"
                          size="txtMontserratMedium24CyanA200"
                        >
                          24,569
                        </Text>
                      </div>
                      <div className="bg-black-900 flex flex-1 flex-col gap-[11px] items-start justify-end p-[7px] rounded-[10px] w-full">
                        <Text
                          className="ml-3 md:ml-[0] text-lg text-white-A700"
                          size="txtMontserratRegular18"
                        >
                          Unutilized
                        </Text>
                        <Text
                          className="ml-3 md:ml-[0] text-2xl md:text-[22px] sm:text-xl text-yellow-A400"
                          size="txtMontserratMedium24YellowA400"
                        >
                          21,120
                        </Text>
                      </div>
                      <div className="bg-black-900 flex flex-1 flex-col gap-2 items-start justify-end p-[9px] rounded-[10px] w-full">
                        <Text
                          className="ml-2.5 md:ml-[0] text-lg text-white-A700"
                          size="txtMontserratRegular18"
                        >
                          Damaged
                        </Text>
                        <Text
                          className="ml-2.5 md:ml-[0] text-2xl md:text-[22px] text-purple-A400 sm:text-xl"
                          size="txtMontserratMedium24PurpleA400"
                        >
                          569
                        </Text>
                      </div>
                    </div>
                    <div className="bg-black-900 flex flex-row items-center justify-between p-2.5 rounded-[10px] w-full">
                      <Text
                        className="ml-2.5 text-lg text-white-A700"
                        size="txtMontserratRegular18"
                      >
                        Categories : 56
                      </Text>
                      <Button
                        className="!text-white-A700 border border-blue_gray-900_02 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] text-base text-center"
                        shape="round"
                        color="black_900"
                        size="sm"
                        variant="fill"
                      >
                        View All
                      </Button>
                    </div>
                  </div>
                  <div className="bg-black-900 flex flex-col items-center justify-start p-3 rounded-[10px] w-[55%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between my-0.5 w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtMontserratRegular18"
                        >
                          Expense Monitor
                        </Text>
                        <Text
                          className="mt-[19px] text-gray-400 text-sm"
                          size="txtMontserratRegular14Gray400"
                        >
                          Total Expense
                        </Text>
                        <Text
                          className="mt-3 text-xl text-yellow-A400"
                          size="txtMontserratMedium20YellowA400"
                        >
                          ₹ 5,24,45,685
                        </Text>
                        <Text
                          className="mt-[33px] text-gray-400 text-sm"
                          size="txtMontserratRegular14Gray400"
                        >
                          Unpaid Payments
                        </Text>
                        <Text
                          className="mt-3 text-deep_orange-A700 text-xl"
                          size="txtMontserratMedium20DeeporangeA700"
                        >
                          ₹ 5,24,45,685
                        </Text>
                      </div>
                      <div className="flex flex-col gap-2.5 items-center justify-start w-[52%] sm:w-full">
                        <div className="bg-black-900 border border-blue_gray-900_02 border-solid flex flex-col items-start justify-start p-[11px] rounded-[10px] w-full">
                          <Text
                            className="text-gray-400 text-sm"
                            size="txtMontserratRegular14Gray400"
                          >
                            Highest Expense
                          </Text>
                          <Text
                            className="mt-[7px] text-base text-white-A700"
                            size="txtMontserratMedium16WhiteA700"
                          >
                            Beds
                          </Text>
                          <Text
                            className="mb-0.5 mt-2.5 text-purple-A400 text-xl"
                            size="txtMontserratMedium20PurpleA400"
                          >
                            ₹ 24,45,685
                          </Text>
                        </div>
                        <div className="bg-black-900 border border-blue_gray-900_02 border-solid flex flex-col items-start justify-start p-[11px] rounded-[10px] w-full">
                          <Text
                            className="text-gray-400 text-sm"
                            size="txtMontserratRegular14Gray400"
                          >
                            Lowest Expense
                          </Text>
                          <Text
                            className="mt-[7px] text-base text-white-A700"
                            size="txtMontserratMedium16WhiteA700"
                          >
                            Irons
                          </Text>
                          <Text
                            className="mb-0.5 mt-2.5 text-cyan-A200 text-xl"
                            size="txtMontserratMedium20CyanA200"
                          >
                            ₹ 4,45,685
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="bg-gray-900_03 flex md:flex-1 flex-col items-center justify-start py-4 rounded-[10px] w-1/2 md:w-full">
                  <div className="flex flex-col gap-4 items-center justify-start mb-[11px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[93%] md:w-full">
                      <Text
                        className="md:mt-0 mt-1 text-white-A700 text-xl"
                        size="txtMontserratMedium20"
                      >
                        Categories
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[13px] md:mt-0 mt-[3px] text-xl text-yellow-A400"
                        size="txtMontserratMedium20YellowA400"
                      >
                        56
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[140px] ml-80 md:ml-[0] text-base text-center"
                        shape="round"
                        color="cyan_800"
                        size="sm"
                        variant="fill"
                      >
                        +Add Category
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-end pt-[9px] px-[9px] w-full">
                      <div className="flex flex-col gap-5 items-center justify-start w-[96%] md:w-full">
                        <div className="sm:gap-5 gap-[25px] grid sm:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
                          <div
                            className="common-pointer bg-black-900 flex flex-1 flex-col items-start justify-end p-2.5 rounded-[10px] w-full"
                            onClick={() => navigate("/hostelfurnituremodal")}
                          >
                            <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-[90%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Bed
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-end p-2.5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Iron
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-start p-[9px] rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start my-0.5 w-[92%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Drapes
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-end p-2.5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-[90%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Bed
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-end p-2.5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Iron
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-start p-[9px] rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start my-0.5 w-[92%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Drapes
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-end p-2.5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-[90%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Bed
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-end p-2.5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Iron
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-start p-[9px] rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start my-0.5 w-[92%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Drapes
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-end p-2.5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] w-[90%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Bed
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-end p-2.5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Iron
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-1 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-black-900 flex flex-1 flex-col items-start justify-start p-[9px] rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start my-0.5 w-[92%] md:w-full">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Drapes
                              </Text>
                              <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtMontserratMedium24"
                                >
                                  65
                                </Text>
                                <Img
                                  className="common-pointer h-[30px] w-[30px]"
                                  src="images/img_categorydetails.svg"
                                  alt="categorydetails"
                                  onClick={() =>
                                    navigate("/hostelfurnituremodal")
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-full">
                          <Line className="bg-black-900 h-[3px] rounded-[1px] w-[31%]" />
                          <Line className="bg-black-900 h-[3px] rounded-[1px] w-[31%]" />
                          <Line className="bg-black-900 h-[3px] rounded-[1px] w-[31%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 flex md:flex-1 flex-col items-center justify-end py-[13px] rounded-[10px] w-[49%] md:w-full">
                  <div className="flex flex-col gap-[11px] justify-start mt-1.5 w-full">
                    <div className="flex flex-row gap-[7px] items-center justify-start md:ml-[0] ml-[15px] w-[15%] md:w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtMontserratMedium20"
                      >
                        Orders
                      </Text>
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-end pt-2 px-2 w-full">
                      <List
                        className="flex flex-col gap-[15px] items-center w-[97%]"
                        orientation="vertical"
                      >
                        <div className="bg-black-900 flex flex-col items-center justify-start my-0 p-[11px] rounded-[10px] w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mb-[3px] w-[97%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Bed
                              </Text>
                              <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-100 text-xl"
                                  size="txtMontserratMedium20Gray100"
                                >
                                  Neelkamal double ...
                                </Text>
                                <Text
                                  className="text-gray-100 text-xl"
                                  size="txtMontserratMedium20Gray100"
                                >
                                  245
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="sm:mt-0 mt-[30px] text-gray-100 text-xl"
                              size="txtMontserratMedium20Gray100"
                            >
                              ₹ 4,526
                            </Text>
                            <Button
                              className="common-pointer border border-cyan-A200 border-solid cursor-pointer leading-[normal] mb-1.5 min-w-[120px] sm:mt-0 mt-[9px] text-base text-center"
                              onClick={() => navigate("/hostelfurnituremodal")}
                              shape="round"
                              color="black_900"
                              size="sm"
                              variant="fill"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                        <div className="bg-black-900 flex flex-col items-center justify-start my-0 p-[11px] rounded-[10px] w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mb-[3px] w-[97%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Bed
                              </Text>
                              <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-100 text-xl"
                                  size="txtMontserratMedium20Gray100"
                                >
                                  Neelkamal double ...
                                </Text>
                                <Text
                                  className="text-gray-100 text-xl"
                                  size="txtMontserratMedium20Gray100"
                                >
                                  245
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="sm:mt-0 mt-[30px] text-gray-100 text-xl"
                              size="txtMontserratMedium20Gray100"
                            >
                              ₹ 4,526
                            </Text>
                            <Button
                              className="common-pointer border border-cyan-A200 border-solid cursor-pointer leading-[normal] mb-1.5 min-w-[120px] sm:mt-0 mt-[9px] text-base text-center"
                              onClick={() => navigate("/hostelfurnituremodal")}
                              shape="round"
                              color="black_900"
                              size="sm"
                              variant="fill"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                        <div className="bg-black-900 flex flex-col items-center justify-start my-0 p-[11px] rounded-[10px] w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mb-[3px] w-[97%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Bed
                              </Text>
                              <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-100 text-xl"
                                  size="txtMontserratMedium20Gray100"
                                >
                                  Neelkamal double ...
                                </Text>
                                <Text
                                  className="text-gray-100 text-xl"
                                  size="txtMontserratMedium20Gray100"
                                >
                                  245
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="sm:mt-0 mt-[30px] text-gray-100 text-xl"
                              size="txtMontserratMedium20Gray100"
                            >
                              ₹ 4,526
                            </Text>
                            <Button
                              className="common-pointer border border-cyan-A200 border-solid cursor-pointer leading-[normal] mb-1.5 min-w-[120px] sm:mt-0 mt-[9px] text-base text-center"
                              onClick={() => navigate("/hostelfurnituremodal")}
                              shape="round"
                              color="black_900"
                              size="sm"
                              variant="fill"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                        <div className="bg-black-900 flex flex-col items-center justify-start my-0 p-[11px] rounded-[10px] w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mb-[3px] w-[97%] md:w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start">
                              <Text
                                className="text-base text-blue_gray-400"
                                size="txtMontserratRegular16Bluegray400"
                              >
                                Bed
                              </Text>
                              <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                                <Text
                                  className="text-gray-100 text-xl"
                                  size="txtMontserratMedium20Gray100"
                                >
                                  Neelkamal double ...
                                </Text>
                                <Text
                                  className="text-gray-100 text-xl"
                                  size="txtMontserratMedium20Gray100"
                                >
                                  245
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="sm:mt-0 mt-[30px] text-gray-100 text-xl"
                              size="txtMontserratMedium20Gray100"
                            >
                              ₹ 4,526
                            </Text>
                            <Button
                              className="common-pointer border border-cyan-A200 border-solid cursor-pointer leading-[normal] mb-1.5 min-w-[120px] sm:mt-0 mt-[9px] text-base text-center"
                              onClick={() => navigate("/hostelfurnituremodal")}
                              shape="round"
                              color="black_900"
                              size="sm"
                              variant="fill"
                            >
                              Details
                            </Button>
                          </div>
                        </div>
                      </List>
                      <div className="flex h-[33px] md:h-[81px] justify-end relative w-[97%] md:w-full">
                        <div className="bg-black-900 h-[81px] mt-auto mx-auto rounded-[10px] w-full"></div>
                        <div className="absolute bottom-[0] flex flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto w-[94%]">
                          <Text
                            className="text-base text-blue_gray-400"
                            size="txtMontserratRegular16Bluegray400"
                          >
                            Bed
                          </Text>
                          <Img
                            className="common-pointer h-[39px] mt-[9px]"
                            src="images/img_orderdetails.svg"
                            alt="orderdetails"
                            onClick={() => navigate("/hostelfurnituremodal")}
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

export default HostelsfurniturePage;
