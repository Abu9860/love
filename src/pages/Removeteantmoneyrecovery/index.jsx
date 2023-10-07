import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const RemoveteantmoneyrecoveryPage = () => {
  const navigate = useNavigate();

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
          <div className="flex flex-col items-start justify-start mb-[122px] w-[91%] md:w-full">
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
            <div className="bg-gray-900_01 flex flex-col items-start justify-start mt-[25px] p-[23px] sm:px-5 rounded-[5px] w-full">
              <div className="flex flex-col items-start justify-start mb-[13px] mt-0.5 w-[62%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-start ml-0.5 md:ml-[0] w-[73%] md:w-full">
                  <Img
                    className="h-16 md:h-auto rounded-[50%] w-16"
                    src="images/img_ellipse44.png"
                    alt="ellipseFortyFour"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtMontserratMedium20"
                    >
                      Harsh Goenkar
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      Blood Group : A+
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[17px] items-start justify-start ml-0.5 md:ml-[0] mt-[30px] w-[39%] md:w-full">
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
                <div className="flex flex-row gap-[18px] items-start justify-start ml-0.5 md:ml-[0] mt-[19px] w-[39%] md:w-full">
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
                <Text
                  className="ml-0.5 md:ml-[0] mt-[25px] text-gray-400 text-sm"
                  size="txtMontserratMedium14"
                >
                  Stay Duration
                </Text>
                <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-[7px] w-[99%] md:w-full">
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
                  <Img
                    className="h-[23px]"
                    src="images/img_calendar.svg"
                    alt="calendar_One"
                  />
                  <Text
                    className="mt-[3px] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    12 Nov 2024
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-end justify-start mt-[29px] w-[98%] md:w-full">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_ionmailopenoutline.svg"
                    alt="ionmailopenoutl"
                  />
                  <Text
                    className="mb-[3px] mt-1.5 text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    harshgoenkar458906@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] mt-[22px] w-[53%] md:w-full">
                  <Img
                    className="h-7 w-7"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="mt-[3px] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    +91 85285 85285
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[217px] md:ml-[0] ml-[179px] mt-9 text-base text-center"
              onClick={() => navigate("/removetenantcheckpaymentlink")}
              shape="round"
              color="cyan_800"
              size="lg"
              variant="fill"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveteantmoneyrecoveryPage;
