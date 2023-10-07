import React from "react";

import { Button, Img, Text } from "components";

const DashboardaddDefaulterconfirmPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[185px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mb-[241px] p-[33px] md:px-5 rounded-[10px] w-[56%] md:w-full">
          <div className="flex flex-col items-start justify-start mb-[3px] w-[96%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Add Defaulter
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <div className="flex flex-row gap-3 items-start justify-start mt-[98px] w-[41%] md:w-full">
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src="images/img_ellipse32.png"
                alt="ellipseThirtyTwo"
              />
              <Text
                className="mt-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratRegular24WhiteA700"
              >
                Abhinav Srivastva
              </Text>
            </div>
            <Text
              className="mt-6 text-white-A700 text-xl"
              size="txtMontserratRegular20"
            >
              Broke 4 Test Tubes in Hostel Mess
            </Text>
            <div className="flex flex-row gap-3.5 items-center justify-start mt-6 w-[44%] md:w-full">
              <Button
                className="!text-gray-400_01 border border-blue_gray-900_01 border-solid cursor-pointer leading-[normal] min-w-[125px] rounded-[10px] text-base text-center"
                color="gray_900_01"
                size="sm"
                variant="fill"
              >
                Fine : ₹ 1,500
              </Button>
              <Button
                className="border border-blue_gray-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[141px] rounded-[10px]"
                leftIcon={
                  <div className="mt-0.5 mb-px mr-2.5 bg-gray-400_01">
                    <Img
                      src="images/img_calendar_gray_400_01.svg"
                      alt="calendar"
                    />
                  </div>
                }
                color="gray_900_01"
                size="sm"
                variant="fill"
              >
                <div className="!text-gray-400_01 leading-[normal] text-base text-left">
                  12 Nov 2022
                </div>
              </Button>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[266px] md:ml-[0] ml-[198px] mt-[89px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
              color="cyan_800"
              size="lg"
              variant="fill"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddDefaulterconfirmPage;
