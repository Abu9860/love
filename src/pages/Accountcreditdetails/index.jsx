import React from "react";

import { Button, Img, Text } from "components";

const AccountcreditdetailsPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[748px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-start justify-start p-[26px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[227px] mt-[18px] w-[83%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_radixiconscross1.svg"
              alt="radixiconscross"
            />
            <Text
              className="md:ml-[0] ml-[694px] mt-[9px] text-base text-white-A700"
              size="txtMontserratMedium16WhiteA700"
            >
              Method
            </Text>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Credit Details
              </Text>
              <Button
                className="!text-white-A700 border border-gray-400 border-solid cursor-pointer font-medium leading-[normal] min-w-[74px] mt-[9px] rounded-[10px] text-base text-center"
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                UPI
              </Button>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[19px] text-base text-white-A700"
              size="txtMontserratRegular16"
            >
              Transaction ID/UTR Number
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-[31px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              #12345HGFKL678$jjjjOPI
            </Text>
            <div className="bg-gray-900_01 flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[102px] p-3 rounded-[5px] w-3/4 md:w-full">
              <div className="flex flex-col items-start justify-start mb-0.5 w-[95%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Text
                    className="text-base text-gray-500"
                    size="txtMontserratRegular16Gray500"
                  >
                    Name
                  </Text>
                  <div className="bg-gray-900_01 border border-blue_gray-900_02 border-solid flex sm:flex-1 flex-row gap-[7px] items-center justify-start sm:ml-[0] ml-[173px] p-[5px] rounded-[5px] w-[17%] sm:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_materialsymbol_white_a700.svg"
                      alt="materialsymbol"
                    />
                    <Text
                      className="text-base text-white-A700"
                      size="txtMontserratMedium16WhiteA700"
                    >
                      702
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border border-blue_gray-900_02 border-solid flex sm:flex-1 flex-row gap-[13px] items-center justify-center ml-2.5 sm:ml-[0] p-1.5 rounded-[5px] w-1/4 sm:w-full">
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
                    className="border border-blue_gray-900_02 border-solid cursor-pointer flex items-center justify-center min-w-[59px] ml-2.5 sm:ml-[0]"
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
                <Text
                  className="mt-[3px] text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  Harsh Kadyan
                </Text>
                <Text
                  className="mt-5 text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Contact Number
                </Text>
                <Text
                  className="mt-[7px] text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  +91 85289 85298
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[47px] items-center justify-start ml-1 md:ml-[0] mt-[51px] w-3/4 md:w-full">
              <div className="bg-gray-900_01 flex flex-col gap-3.5 items-start justify-start p-[19px] rounded-[5px] w-[46%] sm:w-full">
                <div className="h-5 md:ml-[0] ml-[9px] relative w-[29%]">
                  <Text
                    className="m-auto text-base text-gray-500"
                    size="txtMontserratRegular16Gray500"
                  >
                    Remark
                  </Text>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-base text-gray-500 w-max"
                    size="txtMontserratRegular16Gray500"
                  >
                    Remark
                  </Text>
                </div>
                <Text
                  className="mb-[7px] md:ml-[0] ml-[9px] text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  Fees
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-col gap-[15px] items-start justify-start p-[19px] rounded-[5px]">
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Amount
                </Text>
                <Text
                  className="mb-[5px] md:ml-[0] ml-[9px] text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  ₹ 1,56,810
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-1 md:ml-[0] mt-16 w-[62%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                Date
              </Text>
              <Text
                className="sm:ml-[0] ml-[153px] text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                Due Date
              </Text>
              <Text
                className="sm:ml-[0] ml-[98px] text-white-A700 text-xl"
                size="txtMontserratRegular20"
              >
                Receipt
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-1 md:ml-[0] mt-[27px] w-3/4 md:w-full">
              <Button
                className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[152px] rounded-[10px]"
                leftIcon={
                  <Img
                    className="mr-2.5"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                }
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                <div className="leading-[normal] text-base text-left">
                  12 Nov 2022
                </div>
              </Button>
              <Button
                className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[152px] sm:ml-[0] ml-[50px] rounded-[10px]"
                leftIcon={
                  <Img
                    className="mr-2.5"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                }
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                <div className="leading-[normal] text-base text-left">
                  12 Nov 2022
                </div>
              </Button>
              <Button
                className="border border-solid border-white-A700 cursor-pointer leading-[normal] min-w-[173px] sm:ml-[0] ml-[43px] rounded-[10px] text-center text-xl"
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                transc_89...pdf
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountcreditdetailsPage;
