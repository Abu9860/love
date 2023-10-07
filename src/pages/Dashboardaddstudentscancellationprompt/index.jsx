import React from "react";

import { Button, Text } from "components";

const DashboardaddstudentscancellationpromptPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[223px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mb-[351px] p-[45px] md:px-5 rounded-[10px] w-[59%] md:w-full">
          <div className="flex flex-col items-center justify-start mb-[13px] w-[84%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Cancel Process ?
            </Text>
            <Text
              className="mt-[47px] text-center text-white-A700 text-xl"
              size="txtMontserratRegular20"
            >
              Data can not be saved if process if cancelled
            </Text>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-[52px] w-full">
              <Button
                className="!text-gray-400 cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="gray_800_05"
                size="lg"
                variant="fill"
              >
                Yes
              </Button>
              <Button
                className="border border-black-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="gray_400"
                size="lg"
                variant="fill"
              >
                No
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddstudentscancellationpromptPage;
