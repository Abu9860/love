import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DashboardaddstudentsdurationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[185px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end mb-[389px] p-[29px] md:px-5 rounded-[10px] w-[56%] md:w-full">
          <div className="flex flex-col items-start justify-start mt-[5px] w-[95%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Tenant’s Stay Duration
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <div className="flex flex-row gap-[23px] items-center justify-start mt-[57px] w-[54%] md:w-full">
              <Input
                name="groupOne"
                placeholder="Duration..."
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="w-[53%]"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[142px] rounded-[10px]"
                rightIcon={
                  <Img
                    className="h-8 ml-[31px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                color="gray_900_01"
                size="lg"
                variant="fill"
              >
                <div className="leading-[normal] text-base text-left">
                  Years
                </div>
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[55px] mt-[83px] w-[85%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/dashboardaddstudentspreview")}
                color="cyan_800"
                size="lg"
                variant="fill"
              >
                Proceed
              </Button>
              <Button
                className="common-pointer border-2 border-gray-800_04 border-solid cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/dashboardaddstudentsmeal")}
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

export default DashboardaddstudentsdurationPage;
