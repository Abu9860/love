import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const RemovetenantpaymentnotrecievedPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end p-[22px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[53px] mt-[76px] w-[97%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[97%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Remove Tenant ?
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <Text
              className="mt-9 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Pending Amount not yet recovered
            </Text>
            <div className="flex flex-row gap-3 items-start justify-start mt-[43px] w-[38%] md:w-full">
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
            <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[9px] mt-[22px] w-[29%] md:w-full">
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
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-5 w-[62%] md:w-full">
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
            <div className="bg-blue_gray-900_01 border border-gray-800_06 border-solid flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[49px] p-[17px] rounded-[5px] w-[98%] md:w-full">
              <Text
                className="ml-0.5 md:ml-[0] text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Remarks for Removal
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-5 text-white-A700 text-xl w-[73%] sm:w-full"
                size="txtMontserratRegular20"
              >
                Creating nuisance and engaged in Narcotics activity
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-[29px] text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Proof
              </Text>
              <Button
                className="!text-white-A700 cursor-pointer font-medium leading-[normal] mb-1.5 min-w-[240px] ml-0.5 md:ml-[0] mt-[13px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="sm"
                variant="fill"
              >
                Whatsappimage_7879.jpg
              </Button>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[730px] md:min-w-full mt-[94px] text-2xl md:text-[22px] text-center sm:text-xl"
              shape="round"
              color="red_500_01"
              size="md"
              variant="fill"
            >
              Tenant has a Due Rent of : ₹ 50,000
            </Button>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[101px] w-full">
              <Button
                className="!text-cyan-A200 border-2 border-cyan-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[332px] text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                color="blue_gray_900_01"
                size="xl"
                variant="fill"
              >
                Cancel
              </Button>
              <Button
                className="common-pointer border border-gray-700_01 border-solid cursor-pointer font-medium leading-[normal] min-w-[332px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/removetenantsuccess")}
                shape="round"
                color="blue_gray_900_01"
                size="xl"
                variant="fill"
              >
                Yes, Remove Tenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemovetenantpaymentnotrecievedPage;
