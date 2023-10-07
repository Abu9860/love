import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const GrantleavePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[748px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-start justify-start p-[26px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-14 mt-[18px] w-[93%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_radixiconscross1.svg"
              alt="radixiconscross"
            />
            <Text
              className="mt-[30px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Grant Leave
            </Text>
            <Input
              name="group120"
              placeholder="Name of Student"
              className="!placeholder:text-gray-500 !text-gray-500 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="ml-1 md:ml-[0] mt-[43px] rounded-[5px] w-full"
              type="text"
              color="gray_900_01"
              size="xl"
              variant="fill"
            ></Input>
            <Input
              name="group119"
              placeholder="Remark for Leave"
              className="!placeholder:text-gray-500 !text-gray-500 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="ml-1 md:ml-[0] mt-[15px] rounded-[5px] w-full"
              color="gray_900_01"
              size="xl"
              variant="fill"
            ></Input>
            <Text
              className="md:ml-[0] ml-[816px] mt-3.5 text-gray-500 text-sm"
              size="txtMontserratRegular14"
            >
              0/100
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-12 text-white-A700 text-xl"
              size="txtMontserratMedium20"
            >
              Leave Duration
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[30px] w-[52%] md:w-full">
              <Text
                className="sm:mt-0 mt-3 text-base text-gray-500"
                size="txtMontserratRegular16Gray500"
              >
                From
              </Text>
              <Button
                className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[152px] sm:ml-[0] ml-[22px] rounded-[10px]"
                leftIcon={
                  <Img
                    className="mr-2.5"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                }
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                <div className="leading-[normal] text-base text-left">
                  12 Nov 2022
                </div>
              </Button>
              <Text
                className="ml-7 sm:ml-[0] sm:mt-0 mt-[13px] text-base text-white-A700"
                size="txtMontserratRegular16"
              >
                To
              </Text>
              <Button
                className="border border-gray-800 border-solid cursor-pointer flex items-center justify-center min-w-[152px] sm:ml-[0] ml-[23px] rounded-[10px]"
                leftIcon={
                  <Img
                    className="mr-2.5"
                    src="images/img_calendar_gray_700.svg"
                    alt="calendar"
                  />
                }
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                <div className="!text-gray-700 leading-[normal] text-base text-left">
                  12 Nov 2022
                </div>
              </Button>
            </div>
            <Button
              className="border border-gray-400 border-solid cursor-pointer flex items-center justify-center min-w-[286px] ml-1 md:ml-[0] mt-[82px] rounded-[10px]"
              rightIcon={
                <Img
                  className="h-6 ml-[9px]"
                  src="images/img_icoutlinefileupload.svg"
                  alt="ic:outline-file-upload"
                />
              }
              color="gray_900_01"
              size="xl"
              variant="fill"
            >
              <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                Upload Leave Application
              </div>
            </Button>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[546px] sm:min-w-full md:ml-[0] ml-[189px] mt-[346px] text-center text-xl"
              onClick={() => navigate("/grantleaveconfirm")}
              shape="round"
              color="cyan_800"
              size="md"
              variant="fill"
            >
              Grant Leave
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrantleavePage;
