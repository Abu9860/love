import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const HostelfurnituremodalPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end p-[11px] md:px-5 w-full">
          <div className="flex flex-col gap-[7px] items-center justify-start mt-11 w-[98%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
              <div className="flex flex-row sm:gap-10 items-center justify-between mt-[19px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtMontserratMedium32"
                >
                  Bed
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[78px] text-base text-center"
                  onClick={() => navigate("/hosteladdfurniture")}
                  shape="round"
                  color="cyan_800"
                  size="sm"
                  variant="fill"
                >
                  +Add
                </Button>
              </div>
              <div className="flex flex-row gap-[43px] items-center justify-start mt-[34px] w-2/5 md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  <span className="text-white-A700 font-montserrat text-left font-medium">
                    Total{" "}
                  </span>
                  <span className="text-cyan-A200 font-montserrat text-left font-medium">
                    65
                  </span>
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  <span className="text-white-A700 font-montserrat text-left font-medium">
                    Available{" "}
                  </span>
                  <span className="text-yellow-A400 font-montserrat text-left font-medium">
                    05
                  </span>
                </Text>
              </div>
              <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-end mt-[25px] p-5 rounded-[5px] w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtMontserratMedium16WhiteA700"
                >
                  Utilized : 35
                </Text>
                <Text
                  className="ml-12 md:ml-[0] text-base text-white-A700"
                  size="txtMontserratMedium16WhiteA700"
                >
                  Damaged : 25
                </Text>
                <div className="h-[7px] md:ml-[0] ml-[100px] md:mt-0 my-2 overflow-hidden relative w-[47%]">
                  <div className="w-full h-full absolute bg-blue_gray_900_01"></div>
                  <div
                    className="h-full absolute bg-cyan_A200"
                    style={{ width: "58%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex flex-row gap-[22px] items-center justify-start mt-[9px] p-2 rounded-[5px] w-[34%] md:w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[88px] text-base text-center"
                  shape="round"
                  color="blue_gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  General
                </Button>
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-white-A700"
                    size="txtMontserratMedium16WhiteA700"
                  >
                    Distribution
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[27px] text-base text-white-A700"
                size="txtMontserratMedium16WhiteA700"
              >
                Added on : 12 September 2023
              </Text>
              <Text
                className="mt-[17px] text-base text-white-A700"
                size="txtMontserratMedium16WhiteA700"
              >
                Added by : Satyananarayan prakash
              </Text>
            </div>
            <List
              className="flex flex-col gap-5 items-center pt-3 px-3 w-full"
              orientation="vertical"
            >
              <div className="bg-blue_gray-900_01 border border-gray-800_05 border-solid flex md:flex-1 flex-col items-start justify-start p-4 rounded-[5px] w-[96%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtMontserratRegular16Bluegray400"
                  >
                    Addition
                  </Text>
                  <Text
                    className="mt-3.5 text-gray-100 text-xl"
                    size="txtMontserratMedium20Gray100"
                  >
                    Neelkamal double bunker steel bed 1022255
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-3 w-[72%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-3/5 sm:w-full">
                      <Button
                        className="!text-blue_gray-400 cursor-pointer leading-[normal] min-w-[81px] text-base text-center"
                        shape="round"
                        color="gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Qty . 125
                      </Button>
                      <div className="bg-gray-900_01 flex flex-row gap-2.5 items-center justify-evenly p-[7px] rounded-[5px]">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtMontserratRegular16Bluegray400"
                        >
                          Price / Unit
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          ₹ 1500
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-row gap-[31px] items-center justify-start p-1.5 rounded-[5px] w-[39%] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtMontserratRegular16Bluegray400"
                      >
                        Total
                      </Text>
                      <Text
                        className="mt-[3px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        ₹ 1,87,500
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between mt-2.5 w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[258px] text-base text-center"
                      shape="round"
                      color="red_A700_16"
                      size="sm"
                      variant="fill"
                    >
                      Status : Unpaid/Undelivered
                    </Button>
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium leading-[normal] min-w-[337px] text-base text-center"
                      shape="round"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Vendor : NS Furniture Private Limited
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start mt-[15px] w-[67%] md:w-full">
                    <Text
                      className="text-base text-yellow-A400"
                      size="txtMontserratMedium16YellowA400"
                    >
                      Ordered By - NS Murthy
                    </Text>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[45%] sm:w-full">
                      <Img
                        className="h-5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratMedium16WhiteA700"
                      >
                        12 September 2023
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[198px] mt-[19px] text-base text-center"
                    onClick={() => navigate("/hostelfurnitureorderviewdetails")}
                    shape="round"
                    color="gray_800_05"
                    size="sm"
                    variant="fill"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="bg-blue_gray-900_01 border border-gray-800_05 border-solid flex md:flex-1 flex-col items-start justify-start p-4 rounded-[5px] w-[96%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtMontserratRegular16Bluegray400"
                  >
                    Addition
                  </Text>
                  <Text
                    className="mt-3.5 text-gray-100 text-xl"
                    size="txtMontserratMedium20Gray100"
                  >
                    Neelkamal double bunker steel bed 1022255
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-3 w-[72%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-3/5 sm:w-full">
                      <Button
                        className="!text-blue_gray-400 cursor-pointer leading-[normal] min-w-[81px] text-base text-center"
                        shape="round"
                        color="gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Qty . 125
                      </Button>
                      <div className="bg-gray-900_01 flex flex-row gap-2.5 items-center justify-evenly p-[7px] rounded-[5px]">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtMontserratRegular16Bluegray400"
                        >
                          Price / Unit
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          ₹ 1500
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-row gap-[31px] items-center justify-start p-1.5 rounded-[5px] w-[39%] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtMontserratRegular16Bluegray400"
                      >
                        Total
                      </Text>
                      <Text
                        className="mt-[3px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        ₹ 1,87,500
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between mt-2.5 w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[258px] text-base text-center"
                      shape="round"
                      color="red_A700_16"
                      size="sm"
                      variant="fill"
                    >
                      Status : Unpaid/Undelivered
                    </Button>
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium leading-[normal] min-w-[337px] text-base text-center"
                      shape="round"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Vendor : NS Furniture Private Limited
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[29px] items-start justify-start mt-[15px] w-[67%] md:w-full">
                    <Text
                      className="text-base text-yellow-A400"
                      size="txtMontserratMedium16YellowA400"
                    >
                      Ordered By - NS Murthy
                    </Text>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[45%] sm:w-full">
                      <Img
                        className="h-5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratMedium16WhiteA700"
                      >
                        12 September 2023
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[198px] mt-[19px] text-base text-center"
                    shape="round"
                    color="gray_800_05"
                    size="sm"
                    variant="fill"
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <div className="flex md:h-[282px] sm:h-[389px] h-[46px] justify-end relative w-[96%] md:w-full">
                <div className="bg-blue_gray-900_01 border border-gray-800_05 border-solid h-[282px] mt-auto mx-auto rounded-[5px] w-full"></div>
                <div className="absolute bottom-[0] flex flex-col items-start justify-end left-[2%] w-[85%]">
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtMontserratRegular16Bluegray400"
                  >
                    Addition
                  </Text>
                  <Text
                    className="mt-3.5 text-gray-100 text-xl"
                    size="txtMontserratMedium20Gray100"
                  >
                    Neelkamal double bunker steel bed 1022255
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-[13px] w-[72%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-between w-3/5 sm:w-full">
                      <Button
                        className="!text-blue_gray-400 cursor-pointer leading-[normal] min-w-[81px] text-base text-center"
                        shape="round"
                        color="gray_900_01"
                        size="sm"
                        variant="fill"
                      >
                        Qty . 125
                      </Button>
                      <div className="bg-gray-900_01 flex flex-row gap-2.5 items-center justify-between p-2 rounded-[5px] w-[65%]">
                        <Text
                          className="text-base text-blue_gray-400"
                          size="txtMontserratRegular16Bluegray400"
                        >
                          Price / Unit
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtMontserratRegular16"
                        >
                          ₹ 1500
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-900_01 flex flex-row gap-[31px] items-center justify-start p-2 rounded-[5px] w-[39%] sm:w-full">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtMontserratRegular16Bluegray400"
                      >
                        Total
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        ₹ 1,87,500
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between mt-2.5 w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[258px] text-base text-center"
                      shape="round"
                      color="red_A700_16"
                      size="sm"
                      variant="fill"
                    >
                      Status : Unpaid/Undelivered
                    </Button>
                    <Button
                      className="border border-blue_gray-400 border-solid cursor-pointer font-medium leading-[normal] min-w-[337px] text-base text-center"
                      shape="round"
                      color="blue_gray_900_01"
                      size="sm"
                      variant="fill"
                    >
                      Vendor : NS Furniture Private Limited
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-start mt-[15px] w-[67%] md:w-full">
                    <Text
                      className="text-base text-yellow-A400"
                      size="txtMontserratMedium16YellowA400"
                    >
                      Ordered By - NS Murthy
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[45%] sm:w-full">
                      <Img
                        className="h-5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratMedium16WhiteA700"
                      >
                        12 September 2023
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[198px] mt-[21px] text-base text-center"
                    shape="round"
                    color="gray_800_05"
                    size="sm"
                    variant="fill"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelfurnituremodalPage;
