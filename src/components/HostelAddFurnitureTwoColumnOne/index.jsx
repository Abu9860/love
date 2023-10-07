import React from "react";

import { Button, Text } from "components";

const HostelAddFurnitureTwoColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between w-full">
            <div className="bg-blue_gray-900_01 border border-gray-700 border-solid flex sm:flex-1 flex-row gap-8 items-center justify-start p-[18px] rounded-[5px] w-[46%] sm:w-full">
              <div className="bg-blue_gray-900_01 border-2 border-gray-700 border-solid h-[30px] my-0.5 rounded-[50%] w-[30px]"></div>
              <Text
                className="text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                {props?.paynowtext}
              </Text>
            </div>
            <div className="bg-blue_gray-900_01 border border-gray-700 border-solid flex sm:flex-1 flex-row gap-8 items-center justify-start p-[18px] rounded-[5px] w-[46%] sm:w-full">
              <div className="bg-blue_gray-900_01 border-8 border-cyan-A200 border-solid h-[30px] my-0.5 rounded-[50%] w-[30px]"></div>
              <Text
                className="text-cyan-A200 text-xl"
                size="txtMontserratMedium20CyanA200"
              >
                {props?.paylatertext}
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium font-montserrat leading-[normal] min-w-[539px] sm:min-w-full text-center text-xl"
            shape="round"
            color="cyan_800"
            size="lg"
            variant="fill"
          >
            {props?.proceedbuttontext}
          </Button>
        </div>
      </div>
    </>
  );
};

HostelAddFurnitureTwoColumnOne.defaultProps = {
  paynowtext: "Pay Now",
  paylatertext: "Pay Later",
  proceedbuttontext: "Proceed",
};

export default HostelAddFurnitureTwoColumnOne;
