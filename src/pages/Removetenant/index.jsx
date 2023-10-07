import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, FloatingInput, Img, Text } from "components";

const RemovetenantPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-center p-[50px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[45px] mt-12 w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Remove Tenant
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Text
              className="mt-[34px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Room Number : 101
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-6 w-[78%] md:w-full">
              <div className="flex flex-row gap-[17px] items-center justify-start w-[39%] sm:w-full">
                <Img
                  className="h-9 w-9"
                  src="images/img_materialsymbol_white_a700.svg"
                  alt="materialsymbol"
                />
                <Text
                  className="text-lg text-white-A700"
                  size="txtMontserratSemiBold18"
                >
                  6 Bedded Bunker
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-row gap-[13px] items-center justify-center sm:ml-[0] ml-[31px] p-1.5 rounded-[5px] w-[23%] sm:w-full">
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
              <Button
                className="cursor-pointer flex items-center justify-center mb-0.5 min-w-[63px] sm:ml-[0] ml-[30px]"
                leftIcon={
                  <Img
                    className="h-6 mr-[3px]"
                    src="images/img_materialsymbolsreducecapacityrounded.svg"
                    alt="material-symbols:reduce-capacity-rounded"
                  />
                }
                shape="round"
                color="gray_900_01"
                size="xs"
                variant="fill"
              >
                <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                  06
                </div>
              </Button>
            </div>
            <Text
              className="mt-[62px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Tenant Details
            </Text>
            <div className="bg-gray-900_01 flex flex-col items-center justify-start md:ml-[0] ml-[3px] mt-5 p-3 rounded-[5px] w-full">
              <div className="flex flex-col items-start justify-start mb-1.5 mt-[3px] w-full">
                <div className="flex flex-row gap-3 items-start justify-start w-[41%] md:w-full">
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
                <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[9px] mt-[22px] w-[32%] md:w-full">
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
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-2.5 pl-2 py-2 w-full">
                  <FloatingInput
                    wrapClassName="placeholder:bg-gray-900_01 font-medium leading-[normal] placeholder:left-[11px] p-0 sm:pr-5 text-left placeholder:text-white-A700 text-white-A700 text-xl placeholder:top-[0] w-full"
                    className="font-medium leading-[normal] p-0 sm:pr-5 text-left text-white-A700 text-xl w-full"
                    name="price"
                    labelClasses="bg-gray-900_01 left-[11px] top-[0] text-white-A700"
                    focusedClasses="translate-y-[35px] scale-[1]"
                    wrapperClasses="top-[0] my-1.5"
                    labelText="Rent Due"
                    defaultText="₹ 50,000"
                  ></FloatingInput>
                  <FloatingInput
                    wrapClassName="placeholder:bg-gray-900_01 font-medium leading-[normal] placeholder:left-[11px] p-0 sm:pr-5 text-left placeholder:text-white-A700 text-white-A700 text-xl placeholder:top-[0] w-full"
                    className="font-medium leading-[normal] p-0 sm:pr-5 text-left text-white-A700 text-xl w-full"
                    name="SixtyFive"
                    labelClasses="bg-gray-900_01 left-[11px] top-[0] text-white-A700"
                    focusedClasses="translate-y-[34px] scale-[1]"
                    wrapperClasses="top-[0] my-1.5"
                    labelText="Defaults"
                    defaultText="65"
                  ></FloatingInput>
                  <FloatingInput
                    wrapClassName="placeholder:bg-gray-900_01 font-medium leading-[normal] placeholder:left-[11px] p-0 text-left placeholder:text-white-A700 text-white-A700 text-xl placeholder:top-[0] w-full"
                    className="font-medium leading-[normal] p-0 text-left text-white-A700 text-xl w-full"
                    name="continentalveg"
                    labelClasses="bg-gray-900_01 left-[11px] top-[0] text-white-A700"
                    focusedClasses="translate-y-[35px] scale-[1]"
                    wrapperClasses="top-[0] my-1.5"
                    labelText="Meal Type"
                    defaultText="Continental Veg"
                  ></FloatingInput>
                  <FloatingInput
                    wrapClassName="placeholder:bg-gray-900_01 font-medium leading-[normal] placeholder:left-[11px] p-0 sm:pr-5 text-left placeholder:text-white-A700 text-white-A700 text-xl placeholder:top-[0] w-full"
                    className="font-medium leading-[normal] p-0 sm:pr-5 text-left text-white-A700 text-xl w-full"
                    name="3perday"
                    labelClasses="bg-gray-900_01 left-[11px] top-[0] text-white-A700"
                    focusedClasses="translate-y-[35px] scale-[1]"
                    wrapperClasses="top-[0] my-1.5"
                    labelText="Meal Frequency"
                    defaultText="3 / Per Day"
                  ></FloatingInput>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between md:ml-[0] ml-[3px] mt-[35px] w-[99%] md:w-full">
              <div className="bg-gray-900_01 flex flex-col items-start justify-start p-3.5 rounded-[5px]">
                <Text
                  className="mb-[142px] ml-2.5 md:ml-[0] text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Remarks for Removal...
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-col items-center justify-end p-[18px] rounded-[5px] w-[48%] md:w-full">
                <div className="bg-blue_gray-900_01 flex flex-col h-[76px] items-center justify-start p-[21px] sm:px-5 rounded-[50%] w-[76px]">
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_mdiclouduploadoutline.svg"
                    alt="mdiclouduploado"
                  />
                </div>
                <Text
                  className="mt-[17px] text-2xl md:text-[22px] text-center text-gray-400 sm:text-xl"
                  size="txtMontserratMedium24Gray400"
                >
                  Proof of Remark
                </Text>
                <Text
                  className="mt-[11px] text-gray-400 text-sm"
                  size="txtMontserratRegular14Gray400"
                >
                  JPG, PNG, SVG, PDF upto 15 MB
                </Text>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[291px] mt-[13px] text-base text-gray-400"
              size="txtMontserratRegular16Gray400"
            >
              0/100
            </Text>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[332px] md:ml-[0] ml-[193px] mt-[89px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/removetenantcheck")}
              shape="round"
              color="cyan_800"
              size="xl"
              variant="fill"
            >
              Remove Tenant
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemovetenantPage;
