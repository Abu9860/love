import React from "react";

import { Button, Img, Text } from "components";

const DashboardaddroomsTwoPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[175px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end p-5 md:px-5 rounded-[10px] w-2/5 md:w-full">
          <div className="flex flex-col items-center justify-start mt-2.5 w-[95%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[99%] md:w-full">
              <Img
                className="h-[30px] sm:mt-0 mt-1.5 w-[30px]"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrowleft"
              />
              <Text
                className="ml-2.5 sm:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Preview
              </Text>
              <Img
                className="h-6 sm:ml-[0] ml-[273px] w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <div className="flex flex-col items-start justify-start mt-[41px] pt-[9px] px-[9px] w-full">
              <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                <Text
                  className="text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Name of Room
                </Text>
                <Text
                  className="mt-3.5 text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  6 Bedded Double Bunker
                </Text>
                <Text
                  className="mt-[26px] text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Occupancy
                </Text>
                <Text
                  className="mt-3 text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  8/Room
                </Text>
                <Text
                  className="mt-6 text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Number of Rooms
                </Text>
                <Text
                  className="mt-3.5 text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  456
                </Text>
                <Text
                  className="mt-6 text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Hostel
                </Text>
                <Text
                  className="mt-3.5 text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  H1
                </Text>
                <Text
                  className="mt-6 text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Room Distribution
                </Text>
                <Text
                  className="mt-3.5 text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  <>
                    Floor 1 = 114 Rooms
                    <br />
                    Floor 2 = 114 Rooms
                    <br />
                    Floor 3 = 114 Rooms
                    <br />
                    Floor 4 = 114 Rooms
                  </>
                </Text>
                <div className="flex flex-row items-start justify-between mt-3.5 w-full">
                  <Text
                    className="text-base text-gray-400"
                    size="txtMontserratRegular16Gray400"
                  >
                    Furniture
                  </Text>
                  <Text
                    className="text-base text-gray-400"
                    size="txtMontserratRegular16Gray400"
                  >
                    Quantity / Room
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[266px] mt-[23px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
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

export default DashboardaddroomsTwoPage;
