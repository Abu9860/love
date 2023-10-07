import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DashboardaddstudentsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[113px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end mt-[72px] p-[30px] md:px-5 rounded-[10px] w-1/2 md:w-full">
          <div className="flex flex-col items-start justify-start mt-[3px] w-[97%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Add Student
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[30px] w-full">
              <Input
                name="group379"
                placeholder="Name of Student"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="md:flex-1 md:w-full"
                type="text"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <div className="bg-gray-900_01 flex md:flex-1 flex-row items-center justify-between sm:pl-5 pl-[22px] rounded-[10px] w-[28%] md:w-full">
                <Text
                  className="text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  BG
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[91px] rounded-br-[10px] rounded-tr-[10px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-3.5"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_down"
                    />
                  }
                  color="gray_900_01"
                  size="xl"
                  variant="fill"
                >
                  <div className="!text-white-A700 leading-[normal] text-base text-left">
                    A+
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
              <Button
                className="!text-gray-400 cursor-pointer font-medium leading-[normal] min-w-[145px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="gray_800_05"
                size="lg"
                variant="fill"
              >
                +91
              </Button>
              <Input
                name="group370"
                placeholder="Contact Number"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                type="number"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
              <Button
                className="!text-gray-400 cursor-pointer font-medium leading-[normal] min-w-[145px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="gray_800_05"
                size="lg"
                variant="fill"
              >
                +91
              </Button>
              <Input
                name="group369"
                placeholder="Emergency Contact Number"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                type="number"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
            </div>
            <Input
              name="group377"
              placeholder="Email Address"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-5 w-full"
              type="email"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <Text
              className="mt-[29px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Residential Address
            </Text>
            <Input
              name="group376"
              placeholder="Address Line 1"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-5 w-full"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[9px] w-full">
              <Input
                name="group375"
                placeholder="Address Line 2"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer leading-[normal] min-w-[106px] rounded-[10px] text-base text-center"
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                Pincode
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[9px] w-full">
              <Input
                name="group374"
                placeholder="District"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="md:flex-1 md:w-full"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Input
                name="group372"
                placeholder="State"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="md:flex-1 md:w-full"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Text
                className="bg-gray-900_01 h-[62px] justify-center pb-[19px] pl-5 sm:pr-5 pr-[35px] pt-[22px] rounded-[10px] text-base text-gray-400 w-[137px]"
                size="txtMontserratRegular16Gray400"
              >
                Country
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[55px] mt-[30px] w-[84%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/dashboardaddstudentsaddress")}
                color="cyan_800"
                size="lg"
                variant="fill"
              >
                Proceed
              </Button>
              <Button
                className="border-2 border-gray-800_04 border-solid cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="blue_gray_900_01"
                size="lg"
                variant="fill"
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddstudentsPage;
