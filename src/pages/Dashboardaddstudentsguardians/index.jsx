import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DashboardaddstudentsguardiansPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[113px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mt-[72px] p-[33px] md:px-5 rounded-[10px] w-1/2 md:w-full">
          <div className="flex flex-col items-start justify-start mb-1.5 w-[97%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Guardian’s Details
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Input
              name="groupNine"
              placeholder="Name of Guardian"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-[19px] w-full"
              type="text"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
              <Button
                className="!text-gray-400 cursor-pointer font-medium leading-[normal] min-w-[145px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="gray_800_05"
                size="lg"
                variant="fill"
              >
                +91
              </Button>
              <Input
                name="groupEleven"
                placeholder="Contact Number"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="sm:flex-1 sm:w-full"
                type="number"
                shape="round"
                color="gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[660px] md:min-w-full mt-5 rounded-[10px]"
              rightIcon={
                <Img
                  className="h-8 ml-[35px]"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              color="gray_900_01"
              size="lg"
              variant="fill"
            >
              <div className="leading-[normal] text-base text-left">
                Relationship with Tenant
              </div>
            </Button>
            <Input
              name="groupTwelve"
              placeholder="Email Address"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-5 w-full"
              type="email"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex flex-row gap-3.5 items-center justify-start mt-[15px] w-[56%] md:w-full">
              <Input
                name="groupSix"
                placeholder="Upload photo of Tenant"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="flex w-[77%]"
                suffix={
                  <Img
                    className="h-6 ml-[26px] my-auto"
                    src="images/img_icoutlinefileupload.svg"
                    alt="ic:outline-file-upload"
                  />
                }
                shape="round"
                color="gray_900_01"
                size="xl"
                variant="fill"
              ></Input>
              <Text
                className="text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Optional
              </Text>
            </div>
            <Text
              className="mt-[21px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Guardian Verification
            </Text>
            <Input
              name="groupEight"
              placeholder="Aadhaar Number of Guardian"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-6 w-full"
              type="number"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-[88%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[280px] rounded-[10px]"
                rightIcon={
                  <Img
                    className="h-6 ml-[18px]"
                    src="images/img_icoutlinefileupload.svg"
                    alt="ic:outline-file-upload"
                  />
                }
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                <div className="leading-[normal] text-base text-left">
                  Upload Front of Aadhaar
                </div>
              </Button>
              <Input
                name="groupFive"
                placeholder="Upload Back of Aadhaar"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="flex w-[49%] sm:w-full"
                suffix={
                  <Img
                    className="h-6 ml-[22px] my-auto"
                    src="images/img_icoutlinefileupload.svg"
                    alt="ic:outline-file-upload"
                  />
                }
                shape="round"
                color="gray_900_01"
                size="xl"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[55px] mt-[46px] w-[84%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/dashboardaddstudentsallocation")}
                color="cyan_800"
                size="lg"
                variant="fill"
              >
                Proceed
              </Button>
              <Button
                className="border-2 border-gray-800_04 border-solid cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="blue_gray_900_01"
                size="lg"
                variant="fill"
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddstudentsguardiansPage;
