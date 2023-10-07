import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DashboardaddstudentsaddressPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[100px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mt-[25px] p-[33px] md:px-5 rounded-[10px] w-[49%] md:w-full">
          <div className="flex flex-col items-start justify-start mb-[9px] w-[97%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Permanent Address
              </Text>
              <Text
                className="md:ml-[0] ml-[13px] md:mt-0 mt-[9px] text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Skip if same as Residential Address
              </Text>
              <Img
                className="h-6 md:ml-[0] ml-[89px] w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Input
              name="group736"
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
                name="group732"
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
                name="group730"
                placeholder="District"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="md:flex-1 md:w-full"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Input
                name="group725"
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
            <div className="flex flex-row items-end justify-start mt-[38px] w-[48%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Institutional Details
              </Text>
              <Text
                className="ml-[5px] mt-[9px] text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Optional
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
              <Input
                name="group734"
                placeholder="ID Number"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                type="number"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Input
                name="group733"
                placeholder="Institution Name"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                type="text"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
            </div>
            <Input
              name="group735"
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
                name="group731"
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
                name="group729"
                placeholder="District"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="md:flex-1 md:w-full"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer leading-[normal] min-w-[204px] rounded-[10px] text-base text-center"
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                Arunanchal Pardesh
              </Button>
              <Text
                className="bg-gray-900_01 h-[62px] justify-center pb-[19px] pl-5 sm:pr-5 pr-[35px] pt-[22px] rounded-[10px] text-base text-gray-400 w-[137px]"
                size="txtMontserratRegular16Gray400"
              >
                Country
              </Text>
            </div>
            <Input
              name="group728"
              placeholder="Upload Institutional ID"
              className="!placeholder:text-white-A700 !text-white-A700 font-medium leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="border border-gray-400 border-solid flex mt-[19px] w-[44%]"
              suffix={
                <Img
                  className="h-6 ml-[33px] my-auto"
                  src="images/img_icoutlinefileupload.svg"
                  alt="ic:outline-file-upload"
                />
              }
              shape="round"
              color="gray_900_01"
              size="xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[55px] mt-[42px] w-[84%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/dashboardaddstudentsguardians")}
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

export default DashboardaddstudentsaddressPage;
