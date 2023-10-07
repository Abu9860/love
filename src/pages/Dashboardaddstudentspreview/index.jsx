import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const DashboardaddstudentspreviewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-end mx-auto p-[106px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mt-[79px] p-[27px] md:px-5 rounded-[10px] w-1/2 md:w-full">
          <div className="flex flex-col items-center justify-start mb-[11px] mt-[5px] w-[99%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[96%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Preview
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <div className="flex flex-col items-center justify-start mt-[19px] pt-[3px] px-[3px] w-full">
              <div className="flex flex-col gap-2.5 justify-start w-[96%] md:w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[13px] w-[86%] md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Name
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Contact Number
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Input
                      name="groupFortyThree"
                      placeholder="Harsh Kadyan"
                      className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="sm:flex-1 w-[49%] sm:w-full"
                      shape="round"
                      color="gray_900_01"
                      size="3xl"
                      variant="fill"
                    ></Input>
                    <Text
                      className="ml-2 sm:ml-[0] text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      BG : A+
                    </Text>
                    <Input
                      name="mobileNo"
                      placeholder="+91 1234567890"
                      className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="sm:flex-1 ml-9 sm:ml-[0] w-[36%] sm:w-full"
                      shape="round"
                      color="gray_900_01"
                      size="3xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[13px] mt-5 w-[94%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      E-Mail
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      Emer. Contact Number
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-between mt-2.5 w-full">
                    <Input
                      name="email_One"
                      placeholder="kadyan.harsh2002@gmail.com"
                      className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="sm:flex-1 sm:w-full"
                      type="email"
                      shape="round"
                      color="gray_900_01"
                      size="3xl"
                      variant="fill"
                    ></Input>
                    <Input
                      name="mobileNo_One"
                      placeholder="+91 1234567890"
                      className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="sm:flex-1 sm:w-full"
                      shape="round"
                      color="gray_900_01"
                      size="3xl"
                      variant="fill"
                    ></Input>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[13px] mt-5 text-base text-white-A700"
                    size="txtMontserratMedium16WhiteA700"
                  >
                    Residential Address
                  </Text>
                  <Input
                    name="groupFortyOne"
                    placeholder="116, Lane Number 4, Rathore Nagar, Vaishali Nagar"
                    className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="mt-2.5 w-full"
                    type="number"
                    shape="round"
                    color="gray_900_01"
                    size="3xl"
                    variant="fill"
                  ></Input>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-[77%] md:w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer leading-[normal] min-w-[95px] rounded-[10px] text-base text-center"
                      color="gray_900_01"
                      size="xl"
                      variant="fill"
                    >
                      302021
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer leading-[normal] min-w-[95px] rounded-[10px] text-base text-center"
                      color="gray_900_01"
                      size="xl"
                      variant="fill"
                    >
                      Jaipur
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer leading-[normal] min-w-[123px] rounded-[10px] text-base text-center"
                      color="gray_900_01"
                      size="xl"
                      variant="fill"
                    >
                      Rajasthan
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer leading-[normal] min-w-[123px] rounded-[10px] text-base text-center"
                      color="gray_900_01"
                      size="xl"
                      variant="fill"
                    >
                      India
                    </Button>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[13px] mt-5 text-base text-white-A700"
                    size="txtMontserratMedium16WhiteA700"
                  >
                    Permanent Address
                  </Text>
                  <Input
                    name="groupForty"
                    placeholder="116, Lane Number 4, Rathore Nagar, Vaishali Nagar"
                    className="!placeholder:text-white-A700 !text-white-A700 leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="mt-2.5 w-full"
                    type="number"
                    shape="round"
                    color="gray_900_01"
                    size="3xl"
                    variant="fill"
                  ></Input>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-[77%] md:w-full">
                    <Button
                      className="!text-white-A700 cursor-pointer leading-[normal] min-w-[95px] rounded-[10px] text-base text-center"
                      color="gray_900_01"
                      size="xl"
                      variant="fill"
                    >
                      302021
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer leading-[normal] min-w-[95px] rounded-[10px] text-base text-center"
                      color="gray_900_01"
                      size="xl"
                      variant="fill"
                    >
                      Jaipur
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer leading-[normal] min-w-[123px] rounded-[10px] text-base text-center"
                      color="gray_900_01"
                      size="xl"
                      variant="fill"
                    >
                      Rajasthan
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer leading-[normal] min-w-[123px] rounded-[10px] text-base text-center"
                      color="gray_900_01"
                      size="xl"
                      variant="fill"
                    >
                      India
                    </Button>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[13px] mt-[19px] text-white-A700 text-xl"
                    size="txtMontserratMedium20"
                  >
                    Guardian’s Details
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[661px] md:min-w-full mt-[26px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/dashboardaddstudentsbilling")}
              color="cyan_800"
              size="lg"
              variant="fill"
            >
              Proceed to Billing
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddstudentspreviewPage;
