import React from "react";

import { Button, FloatingInput, Img, Text } from "components";

const RemovetenantsuccessPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[149px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mb-[7px] p-8 md:px-5 rounded-[5px] w-[58%] md:w-full">
          <div className="flex flex-col items-start justify-start mt-4 w-full">
            <div className="flex flex-col items-start justify-start ml-3 md:ml-[0] w-[96%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtMontserratMedium32"
                >
                  Tenant Removed Successfully
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_radixiconscross1.svg"
                  alt="radixiconscross"
                />
              </div>
              <div className="flex flex-row gap-3 items-start justify-start mt-[67px] w-[39%] md:w-full">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse10.png"
                  alt="ellipseTen"
                />
                <Text
                  className="mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  Ramakant Sharma
                </Text>
              </div>
              <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[9px] mt-[22px] w-[30%] md:w-full">
                <Img
                  className="h-6"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
                <Text
                  className="mt-1 text-base text-white-A700"
                  size="txtMontserratMedium16WhiteA700"
                >
                  Since : 08 March 2023
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[9px] mt-[22px] text-base text-white-A700"
                size="txtMontserratMedium16WhiteA700"
              >
                Room Number : 101
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-5 w-[65%] md:w-full">
                <Img
                  className="h-9 w-9"
                  src="images/img_materialsymbol_white_a700.svg"
                  alt="materialsymbol"
                />
                <Text
                  className="sm:ml-[0] ml-[17px] sm:mt-0 mt-1.5 text-lg text-white-A700"
                  size="txtMontserratSemiBold18"
                >
                  6 Bedded Bunker
                </Text>
                <div className="bg-gray-900_01 flex flex-row gap-[13px] items-center justify-center sm:ml-[0] ml-[31px] p-1.5 rounded-[5px] w-[28%] sm:w-full">
                  <Text
                    className="ml-[3px] text-base text-white-A700"
                    size="txtMontserratMedium16WhiteA700"
                  >
                    Floor No.
                  </Text>
                  <Text
                    className="mr-[3px] text-base text-white-A700"
                    size="txtMontserratMedium16WhiteA700"
                  >
                    07
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-0.5 min-w-[59px] sm:ml-[0] ml-[30px]"
                  leftIcon={
                    <Img
                      className="h-5 mb-px mr-1.5"
                      src="images/img_ribuilding2line_white_a700.svg"
                      alt="ri:building-2-line"
                    />
                  }
                  shape="round"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                    H1
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-[29px] p-2 w-full">
              <FloatingInput
                wrapClassName="placeholder:bg-gray-900_01 font-medium leading-[normal] placeholder:left-[11px] sm:mx-0 p-0 sm:pr-5 text-left placeholder:text-white-A700 text-white-A700 text-xl placeholder:top-[0] w-full"
                className="font-medium leading-[normal] p-0 sm:mx-0 sm:pr-5 text-left text-white-A700 text-xl w-full"
                name="price"
                labelClasses="bg-gray-900_01 left-[11px] top-[0] text-white-A700"
                focusedClasses="translate-y-[35px] scale-[1]"
                wrapperClasses="sm:w-full sm:mx-0 w-1/5 top-[0] my-1.5"
                labelText="Rent Due"
                defaultText="₹ 50,000"
              ></FloatingInput>
              <FloatingInput
                wrapClassName="placeholder:bg-gray-900_01 font-medium leading-[normal] placeholder:left-[11px] sm:mx-0 p-0 sm:pr-5 text-left placeholder:text-white-A700 text-white-A700 text-xl placeholder:top-[0] w-full"
                className="font-medium leading-[normal] p-0 sm:mx-0 sm:pr-5 text-left text-white-A700 text-xl w-full"
                name="SixtyFive"
                labelClasses="bg-gray-900_01 left-[11px] top-[0] text-white-A700"
                focusedClasses="translate-y-[34px] scale-[1]"
                wrapperClasses="sm:w-full sm:mx-0 w-1/5 top-[0] my-1.5"
                labelText="Defaults"
                defaultText="65"
              ></FloatingInput>
              <FloatingInput
                wrapClassName="placeholder:bg-gray-900_01 font-medium leading-[normal] placeholder:left-[11px] sm:mx-0 p-0 text-left placeholder:text-white-A700 text-white-A700 text-xl placeholder:top-[0] w-full"
                className="font-medium leading-[normal] p-0 sm:mx-0 text-left text-white-A700 text-xl w-full"
                name="continentalveg"
                labelClasses="bg-gray-900_01 left-[11px] top-[0] text-white-A700"
                focusedClasses="translate-y-[35px] scale-[1]"
                wrapperClasses="sm:w-full sm:mx-0 w-[26%] top-[0] my-1.5"
                labelText="Meal Type"
                defaultText="Continental Veg"
              ></FloatingInput>
              <FloatingInput
                wrapClassName="placeholder:bg-gray-900_01 font-medium leading-[normal] placeholder:left-[11px] sm:mx-0 p-0 sm:pr-5 text-left placeholder:text-white-A700 text-white-A700 text-xl placeholder:top-[0] w-full"
                className="font-medium leading-[normal] p-0 sm:mx-0 sm:pr-5 text-left text-white-A700 text-xl w-full"
                name="3perday"
                labelClasses="bg-gray-900_01 left-[11px] top-[0] text-white-A700"
                focusedClasses="translate-y-[35px] scale-[1]"
                wrapperClasses="sm:w-full sm:mx-0 w-1/4 top-[0] my-1.5"
                labelText="Meal Frequency"
                defaultText="3 / Per Day"
              ></FloatingInput>
            </div>
            <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-[21px] w-[71%] md:w-full">
              <Text
                className="text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Remarks for Removal
              </Text>
              <Text
                className="mt-5 text-white-A700 text-xl w-[95%] sm:w-full"
                size="txtMontserratRegular20"
              >
                Creating nuisance and engaged in Narcotics activity
              </Text>
              <div className="flex flex-row gap-[29px] items-center justify-start mt-[22px] w-[59%] md:w-full">
                <Text
                  className="text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Proof
                </Text>
                <Button
                  className="!text-white-A700 cursor-pointer font-medium leading-[normal] min-w-[240px] text-base text-center"
                  shape="round"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  Whatsappimage_7879.jpg
                </Button>
              </div>
              <Button
                className="!text-cyan-A200 border-2 border-cyan-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[332px] md:ml-[0] ml-[197px] mt-[61px] text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                color="blue_gray_900_01"
                size="xl"
                variant="fill"
              >
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemovetenantsuccessPage;
