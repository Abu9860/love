import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import DashboardAddRoomsFurnitureAddfuniture from "components/DashboardAddRoomsFurnitureAddfuniture";

const DashboardaddroomsfurniturePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[273px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-[33px] md:px-5 rounded-[10px] w-[46%] md:w-full">
          <div className="flex flex-col gap-[37px] items-center justify-start mb-[7px] w-full">
            <div className="flex flex-row items-start justify-between w-full">
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
            <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Furniture Management
              </Text>
              <div className="flex flex-row items-center justify-between mt-8 w-[86%] md:w-full">
                <Text
                  className="text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Item
                </Text>
                <Text
                  className="text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Qty / Room
                </Text>
              </div>
              <DashboardAddRoomsFurnitureAddfuniture className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[11px] w-full" />
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] md:ml-[0] ml-[95px] mt-[227px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/dashboardaddroomstwo")}
                color="cyan_600"
                size="lg"
                variant="fill"
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddroomsfurniturePage;
