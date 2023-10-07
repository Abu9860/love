import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DashboardaddhostelsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[122px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end mt-[63px] p-[31px] md:px-5 rounded-[10px] w-[51%] md:w-full">
          <div className="flex flex-col items-start justify-start mt-0.5 w-[97%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Add Hostel
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Input
              name="groupNinetySix"
              placeholder="Name of Hostel"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[30px] w-[71%]"
              type="text"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <Input
              name="groupNinetyFive"
              placeholder="Number of Floors"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[15px] w-[71%]"
              type="number"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <Input
              name="groupNinetyFour"
              placeholder="Number of Kitchens/ Cafeterias"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[11px] w-[71%]"
              type="number"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <Input
              name="groupNinetyThree"
              placeholder="Number of Washrooms"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-2.5 w-[71%]"
              type="number"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <Text
              className="mt-[34px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Hostel Address
            </Text>
            <Input
              name="groupNinetyTwo"
              placeholder="Address Line 1"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[19px] w-full"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[9px] w-full">
              <Input
                name="groupNinetyOne"
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
                name="groupNinety"
                placeholder="District"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="md:flex-1 md:w-full"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Input
                name="groupEightyEight"
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
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] md:ml-[0] ml-[198px] mt-10 rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/dashboardaddhostelsconfirmation")}
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

export default DashboardaddhostelsPage;
