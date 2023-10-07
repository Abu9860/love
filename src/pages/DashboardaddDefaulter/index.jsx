import React from "react";

import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const DashboardaddDefaulterPage = () => {
  const [group350value, setGroup350value] = React.useState("");

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[113px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end mt-[72px] p-[30px] md:px-5 rounded-[10px] w-1/2 md:w-full">
          <div className="flex flex-col items-start justify-start mt-[3px] w-[95%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Add Defaulter
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Input
              name="group350"
              placeholder="Student..."
              value={group350value}
              onChange={(e) => setGroup350value(e)}
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="flex mt-[30px] w-[76%]"
              prefix={
                <Img
                  className="cursor-pointer h-6 mr-[17px] my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#b0b0b0"
                  className="cursor-pointer h-6 my-auto"
                  onClick={() => setGroup350value("")}
                  style={{
                    visibility:
                      group350value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              }
              shape="round"
              color="gray_900_01"
              size="xl"
              variant="fill"
            ></Input>
            <Input
              name="writedefault"
              placeholder="Write Default"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-5 w-[77%]"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <Text
              className="md:ml-[0] ml-[450px] mt-2 text-base text-gray-400"
              size="txtMontserratRegular16Gray400"
            >
              0/100
            </Text>
            <Input
              name="amount"
              placeholder="₹ Amount"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[21px] w-[77%]"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <Text
              className="mt-[41px] text-base text-white-A700"
              size="txtMontserratRegular16"
            >
              Due Date
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[175px] mt-[11px] rounded-[10px]"
              leftIcon={
                <div className="mr-2.5 bg-white-A700">
                  <Img
                    src="images/img_calendar_white_a700.svg"
                    alt="calendar"
                  />
                </div>
              }
              color="gray_900_01"
              size="2xl"
              variant="fill"
            >
              <div className="!text-white-A700 leading-[normal] text-base text-left">
                12 Nov 2022
              </div>
            </Button>
            <Input
              name="uploadproof"
              placeholder="Upload Proof"
              className="!placeholder:text-white-A700 !text-white-A700 font-medium leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="border border-gray-400 border-solid flex mt-[52px] w-[44%]"
              suffix={
                <Img
                  className="h-6 ml-[35px] my-auto"
                  src="images/img_icoutlinefileupload.svg"
                  alt="ic:outline-file-upload"
                />
              }
              shape="round"
              color="gray_900_01"
              size="xl"
              variant="fill"
            ></Input>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[266px] md:ml-[0] ml-[198px] mt-28 rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
              color="cyan_800"
              size="lg"
              variant="fill"
            >
              Add Defaulter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddDefaulterPage;
