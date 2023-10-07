import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import DashboardAddStudentsAllocationMealselection from "components/DashboardAddStudentsAllocationMealselection";

const DashboardaddstudentsallocationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[121px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end mt-1 p-[22px] md:px-5 rounded-[10px] w-[51%] md:w-full">
          <div className="flex flex-col items-start justify-start mt-2.5 w-[94%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Tenant’s Documentation
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Input
              name="group658"
              placeholder="Aadhaar Number of Tenant"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[30px] w-full"
              type="number"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-[88%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[280px] rounded-[10px]"
                rightIcon={
                  <Img
                    className="h-6 ml-[18px]"
                    src="images/img_icoutlinefileupload.svg"
                    alt="ic:outline-file-upload"
                  />
                }
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                <div className="leading-[normal] text-base text-left">
                  Upload Front of Aadhaar
                </div>
              </Button>
              <Input
                name="group655"
                placeholder="Upload Back of Aadhaar"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="flex w-[49%] sm:w-full"
                suffix={
                  <Img
                    className="h-6 ml-[22px] my-auto"
                    src="images/img_icoutlinefileupload.svg"
                    alt="ic:outline-file-upload"
                  />
                }
                shape="round"
                color="gray_900_01"
                size="xl"
                variant="fill"
              ></Input>
            </div>
            <div className="bg-gray-900_01 flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-2.5 p-[15px] rounded-[10px] w-[88%] md:w-full">
              <Text
                className="sm:ml-[0] ml-[5px] sm:mt-0 mt-[7px] text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Upload Additional Documents
              </Text>
              <Text
                className="sm:ml-[0] ml-[11px] sm:mt-0 mt-2 text-gray-400 text-sm"
                size="txtMontserratRegular14Gray400"
              >
                ( Optional )
              </Text>
              <Img
                className="h-6 sm:ml-[0] ml-[184px] sm:mt-0 mt-1 w-6"
                src="images/img_icoutlinefileupload.svg"
                alt="icoutlinefileup_Two"
              />
            </div>
            <Text
              className="mt-7 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Hostel Allocation
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[660px] md:min-w-full mt-[25px] rounded-[10px]"
              rightIcon={
                <Img
                  className="h-8 ml-[35px]"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              color="gray_900_01"
              size="lg"
              variant="fill"
            >
              <div className="leading-[normal] text-base text-left">
                Select Hostel
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[660px] md:min-w-full mt-5 rounded-[10px]"
              rightIcon={
                <Img
                  className="h-8 ml-[35px]"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              color="gray_900_01"
              size="lg"
              variant="fill"
            >
              <div className="leading-[normal] text-base text-left">
                Select Room Type
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[660px] md:min-w-full mt-5 rounded-[10px]"
              rightIcon={
                <Img
                  className="h-8 ml-[35px]"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              color="gray_900_01"
              size="lg"
              variant="fill"
            >
              <div className="leading-[normal] text-base text-left">
                Select Floor
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[660px] md:min-w-full mt-5 rounded-[10px]"
              rightIcon={
                <Img
                  className="h-8 ml-[35px]"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              color="gray_900_01"
              size="lg"
              variant="fill"
            >
              <div className="leading-[normal] text-base text-left">
                Select Room Number
              </div>
            </Button>
            <div className="flex sm:flex-col flex-row gap-11 items-start justify-start mt-[35px] w-[70%] md:w-full">
              <Text
                className="sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Meal for Tenant
              </Text>
              <DashboardAddStudentsAllocationMealselection className="flex flex-row items-center justify-start w-1/2 sm:w-full" />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[55px] mt-[31px] w-[84%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/dashboardaddstudentsmeal")}
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

export default DashboardaddstudentsallocationPage;
