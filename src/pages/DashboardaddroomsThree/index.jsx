import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const DashboardaddroomsThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[247px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mt-[52px] p-8 md:px-5 rounded-[10px] w-[45%] md:w-full">
          <div className="flex flex-col items-start justify-start mb-[7px] w-[98%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
              <Img
                className="h-[30px] sm:mt-0 mt-1.5 w-[30px]"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrowleft"
              />
              <Text
                className="ml-4 sm:ml-[0] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Hostel Allocation
              </Text>
              <Img
                className="h-6 sm:ml-[0] ml-[121px] w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[466px] sm:min-w-full mt-[31px] rounded-[10px]"
              rightIcon={
                <Img
                  className="h-[26px] ml-[35px]"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrow_down"
                />
              }
              color="gray_900_01"
              size="xl"
              variant="fill"
            >
              <div className="leading-[normal] text-base text-left">H1</div>
            </Button>
            <Text
              className="mt-[30px] text-base text-gray-400"
              size="txtMontserratRegular16Gray400"
            >
              Select Floors
            </Text>
            <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-3.5 p-[9px] rounded-[10px] w-full">
              <List
                className="flex flex-col gap-2.5 items-center w-[99%]"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between my-0 w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between my-0 w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between my-0 w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between my-0 w-full">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[53px] text-base text-center"
                    shape="round"
                    color="gray_900_05"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                </div>
              </List>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] md:ml-[0] ml-[95px] mt-[47px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/dashboardaddrooms")}
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

export default DashboardaddroomsThreePage;
