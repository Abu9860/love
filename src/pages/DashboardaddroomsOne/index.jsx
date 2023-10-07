import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DashboardaddroomsOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[298px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-[33px] md:px-5 rounded-[10px] w-[48%] md:w-full">
          <div className="flex flex-col items-center justify-start mb-4 w-[98%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <Img
                className="h-[30px] sm:mt-0 mt-[5px] w-[30px]"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrowleft"
              />
              <Text
                className="sm:ml-[0] ml-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Add Rooms
              </Text>
              <Img
                className="h-6 sm:ml-[0] ml-[203px] w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Input
              name="group212"
              placeholder="Name of Room"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[30px] w-full"
              type="text"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <Input
              name="group211"
              placeholder="Occupancy"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[26px] w-full"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-between mt-[26px] w-full">
              <Input
                name="group210"
                placeholder="Rent Amount / Guest"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 mb-1 sm:w-full"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer leading-[normal] min-w-[135px] rounded-[10px] text-base text-center"
                color="gray_900_01"
                size="2xl"
                variant="fill"
              >
                Per Month
              </Button>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] mt-[63px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/dashboardaddroomsthree")}
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

export default DashboardaddroomsOnePage;
