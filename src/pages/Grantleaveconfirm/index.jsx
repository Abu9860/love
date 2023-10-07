import React from "react";

import { Button, Img, Input, Text } from "components";

const GrantleaveconfirmPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[748px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-start justify-start p-[26px] md:px-5 w-full">
          <div className="flex flex-col justify-start mb-14 mt-6 w-4/5 md:w-full">
            <Img
              className="h-[30px] w-[30px]"
              src="images/img_arrowleft_white_a700.svg"
              alt="arrowleft"
            />
            <Text
              className="mt-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Confirm Leave
            </Text>
            <Text
              className="md:ml-[0] ml-[33px] mt-[63px] text-base text-gray-500"
              size="txtMontserratRegular16Gray500"
            >
              Name of Student
            </Text>
            <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-start justify-start mt-6 mx-auto p-[15px] rounded-[10px] w-[91%] md:w-full">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_ellipse10.png"
                alt="ellipseTen"
              />
              <Text
                className="ml-3 md:ml-[0] md:mt-0 mt-2.5 text-base text-white-A700"
                size="txtMontserratRegular16"
              >
                Ramakant Sharma
              </Text>
              <Img
                className="h-6 md:ml-[0] ml-[70px] md:mt-0 mt-2.5 w-6"
                src="images/img_materialsymbol_gray_400.svg"
                alt="materialsymbol"
              />
              <Text
                className="md:ml-[0] ml-[18px] md:mt-0 mt-[13px] text-base text-gray-400"
                size="txtMontserratMedium16"
              >
                Room : 101
              </Text>
              <Img
                className="h-6 md:ml-[0] ml-[81px] md:mt-0 mt-2.5 w-6"
                src="images/img_ribuilding2line.svg"
                alt="ribuilding2line"
              />
              <Text
                className="md:ml-[0] ml-[17px] md:mt-0 mt-[13px] text-base text-gray-400"
                size="txtMontserratMedium16"
              >
                Hostel : H1
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[33px] mt-12 text-base text-gray-500"
              size="txtMontserratRegular16Gray500"
            >
              Remark for Leave
            </Text>
            <Text
              className="md:ml-[0] ml-[33px] mt-[25px] text-white-A700 text-xl"
              size="txtMontserratRegular20"
            >
              Illness due to lack of vitamin E in the body
            </Text>
            <Text
              className="md:ml-[0] ml-[34px] mt-[78px] text-white-A700 text-xl"
              size="txtMontserratMedium20"
            >
              Leave Duration
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[33px] mt-[30px] w-3/5 md:w-full">
              <Text
                className="sm:mt-0 mt-3 text-base text-white-A700"
                size="txtMontserratRegular16"
              >
                From
              </Text>
              <Button
                className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[152px] sm:ml-[0] ml-[22px] rounded-[10px]"
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
              <Text
                className="ml-7 sm:ml-[0] sm:mt-0 mt-[13px] text-base text-white-A700"
                size="txtMontserratRegular16"
              >
                To
              </Text>
              <Button
                className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[152px] sm:ml-[0] ml-[23px] rounded-[10px]"
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
                  20 Nov 2022
                </div>
              </Button>
            </div>
            <Text
              className="md:ml-[0] ml-[33px] mt-[101px] text-base text-gray-500"
              size="txtMontserratRegular16Gray500"
            >
              Leave Application
            </Text>
            <Input
              name="weburl"
              placeholder="leaveforsick.pdf"
              className="!placeholder:text-white-A700 !text-white-A700 font-medium leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="border border-gray-400 border-solid md:ml-[0] ml-[34px] mr-[521px] mt-2.5 w-1/4"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-center justify-end md:ml-[0] ml-[133px] mt-44 w-[82%] md:w-full">
              <Button
                className="!text-red-A400 border border-red-A700_01 border-solid cursor-pointer font-medium leading-[normal] min-w-[263px] text-center text-xl"
                shape="round"
                color="blue_gray_900_01"
                size="md"
                variant="fill"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[263px] text-center text-xl"
                shape="round"
                color="cyan_800"
                size="md"
                variant="fill"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrantleaveconfirmPage;
