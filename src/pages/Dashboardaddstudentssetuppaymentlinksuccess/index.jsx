import React from "react";

import { Button, Img, Text } from "components";

const DashboardaddstudentssetuppaymentlinksuccessPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[70px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col gap-[25px] items-center justify-start mb-[35px] p-[59px] md:px-5 rounded-[10px] w-[48%] md:w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-[71%] sm:w-full"
            size="txtMontserratMedium36"
          >
            Payment Link Sent to Tenant Successfully
          </Text>
          <div className="flex flex-col items-start justify-start mb-[18px] w-[91%] md:w-full">
            <Text
              className="text-base text-white-A700"
              size="txtMontserratMedium16WhiteA700"
            >
              Payment Link
            </Text>
            <div className="bg-gray-900_01 flex sm:flex-col flex-row gap-[21px] items-center justify-between mt-[13px] pl-[13px] rounded-[5px] w-full">
              <a
                href="https://easebuzz.in//payment_id%20%manipal%university%ho..."
                className="text-base text-white-A700"
                target="_blank"
                rel="noreferrer"
              >
                <Text size="txtMontserratRegular16">
                  https://easebuzz.in//payment_id%20%manipal%university%ho...
                </Text>
              </a>
              <div className="bg-gray-900_04 flex flex-col h-[38px] items-center justify-start p-[7px] rounded-br-[5px] rounded-tr-[5px] w-[38px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_mdilinkvariant.svg"
                  alt="mdilinkvariant"
                />
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-col items-center justify-end mt-[25px] p-[9px] rounded-[5px] w-full">
              <div className="flex flex-col items-start justify-start mt-[3px] w-[97%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between w-full">
                  <Img
                    className="h-16 md:h-auto sm:mt-0 mt-[13px] rounded-[50%] w-16"
                    src="images/img_ellipse44.png"
                    alt="ellipseFortyFour"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start mb-[5px]">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="mt-[18px] text-white-A700 text-xl"
                        size="txtMontserratMedium20"
                      >
                        Harsh Goenkar
                      </Text>
                      <Button
                        className="cursor-pointer flex items-center justify-center mb-[5px] min-w-[96px]"
                        leftIcon={
                          <Img
                            className="h-6 mr-2.5"
                            src="images/img_materialsymbolsprintoutline.svg"
                            alt="material-symbols:print-outline"
                          />
                        }
                        shape="round"
                        color="gray_900_04"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-medium leading-[normal] text-base text-left">
                          Print
                        </div>
                      </Button>
                    </div>
                    <Text
                      className="text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      Blood Group : A+
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[17px] items-start justify-start mt-[30px] w-[24%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="mt-[3px] text-base text-gray-400"
                    size="txtMontserratMedium16"
                  >
                    Hostel : H1
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start mt-[19px] w-[24%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="mt-[3px] text-base text-gray-400"
                    size="txtMontserratMedium16"
                  >
                    Room : 101
                  </Text>
                </div>
                <div className="flex flex-row gap-[17px] items-start justify-start mt-3.5 w-[46%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxdish.svg"
                    alt="bxdish"
                  />
                  <Text
                    className="text-base text-gray-400"
                    size="txtMontserratMedium16"
                  >
                    Veg Continental : 3 / Day
                  </Text>
                </div>
                <Text
                  className="mt-4 text-gray-400 text-sm"
                  size="txtMontserratMedium14"
                >
                  Stay Duration
                </Text>
                <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] mt-[7px] w-3/5 md:w-full">
                  <div className="flex flex-col justify-start w-[55%]">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Img
                        className="h-[23px]"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="mt-[3px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        12 Nov 2022
                      </Text>
                      <Text
                        className="mt-0.5 text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        To
                      </Text>
                    </div>
                    <Img
                      className="h-6 md:ml-[0] ml-[11px] mt-0.5 w-6"
                      src="images/img_materialsymbolscallsharp.svg"
                      alt="materialsymbols"
                    />
                  </div>
                  <div className="md:h-6 h-[43px] ml-5 relative w-[9%]">
                    <Img
                      className="absolute h-[23px] left-[0] top-[0]"
                      src="images/img_calendar.svg"
                      alt="calendar_One"
                    />
                    <Img
                      className="absolute bottom-[0] h-6 right-[0] w-6"
                      src="images/img_group.svg"
                      alt="group"
                    />
                  </div>
                  <Text
                    className="ml-1.5 mt-[3px] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    12 Nov 2024
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[217px] md:ml-[0] ml-[178px] mt-[221px] text-base text-center"
              shape="round"
              color="cyan_800"
              size="lg"
              variant="fill"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddstudentssetuppaymentlinksuccessPage;
