import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DashboardaddroomsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[273px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-[33px] md:px-5 rounded-[10px] w-[46%] md:w-full">
          <div className="flex flex-col items-start justify-start mb-[7px] w-[98%] md:w-full">
            <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] w-full">
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrowleft"
              />
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Text
              className="mt-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Room Distribution
            </Text>
            <Text
              className="mt-3.5 text-white-A700 text-xl"
              size="txtMontserratMedium20"
            >
              Total Rooms : 456
            </Text>
            <div className="flex flex-row gap-11 items-center justify-start mt-5 w-[66%] md:w-full">
              <Text
                className="text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Floor Number
              </Text>
              <Text
                className="text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Number of Rooms
              </Text>
            </div>
            <div className="flex flex-row gap-10 items-center justify-start ml-0.5 md:ml-[0] mt-[11px] w-[66%] md:w-full">
              <Button
                className="!text-white-A700 cursor-pointer leading-[normal] min-w-[116px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="sm"
                variant="fill"
              >
                1
              </Button>
              <Input
                name="group203"
                placeholder="114"
                className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                wrapClassName="rounded-[5px] w-[49%]"
                color="gray_900_01"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row gap-10 items-center justify-start ml-0.5 md:ml-[0] mt-2.5 w-[66%] md:w-full">
              <Button
                className="!text-white-A700 cursor-pointer leading-[normal] min-w-[116px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="sm"
                variant="fill"
              >
                2
              </Button>
              <Text
                className="bg-gray-900_01 h-[38px] justify-center pl-[21px] pr-[35px] sm:px-5 py-2 rounded-[5px] text-base text-white-A700 w-[148px]"
                size="txtMontserratRegular16"
              >
                114
              </Text>
            </div>
            <div className="flex flex-row gap-10 items-center justify-start ml-0.5 md:ml-[0] mt-2.5 w-[66%] md:w-full">
              <Button
                className="!text-white-A700 cursor-pointer leading-[normal] min-w-[116px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="sm"
                variant="fill"
              >
                3
              </Button>
              <Text
                className="bg-gray-900_01 h-[38px] justify-center pl-[21px] pr-[35px] sm:px-5 py-2 rounded-[5px] text-base text-white-A700 w-[148px]"
                size="txtMontserratRegular16"
              >
                114
              </Text>
            </div>
            <div className="flex flex-row gap-10 items-center justify-start ml-0.5 md:ml-[0] mt-2.5 w-[66%] md:w-full">
              <Button
                className="!text-white-A700 cursor-pointer leading-[normal] min-w-[116px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="sm"
                variant="fill"
              >
                4
              </Button>
              <Text
                className="bg-gray-900_01 h-[38px] justify-center pl-[21px] pr-[35px] sm:px-5 py-2 rounded-[5px] text-base text-white-A700 w-[148px]"
                size="txtMontserratRegular16"
              >
                114
              </Text>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] ml-24 md:ml-[0] mt-[73px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/dashboardaddroomsfurniture")}
              color="cyan_600"
              size="lg"
              variant="fill"
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddroomsPage;
