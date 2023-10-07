import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DashboardaddstudentsbillingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[75px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mb-[25px] p-[15px] md:px-5 rounded-[10px] w-[48%] md:w-full">
          <div className="flex flex-col items-center justify-start mb-[17px] w-[98%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
              <Text
                className="mt-5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Billing
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center mb-3.5 min-w-[106px]"
                leftIcon={
                  <Img
                    className="h-6 mr-2.5"
                    src="images/img_materialsymbolsprintoutline.svg"
                    alt="material-symbols:print-outline"
                  />
                }
                shape="round"
                color="gray_800_03"
                size="sm"
                variant="fill"
              >
                <div className="font-medium leading-[normal] text-base text-left">
                  Print
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start mt-2 p-[15px] w-full">
              <div className="flex flex-col items-start justify-start mb-[3px] md:ml-[0] ml-[5px] w-[87%] md:w-full">
                <div className="flex flex-row items-start justify-between w-[65%] md:w-full">
                  <Text
                    className="text-sm text-white-A700"
                    size="txtMontserratMedium14WhiteA700"
                  >
                    Receipt Number
                  </Text>
                  <Text
                    className="text-sm text-white-A700"
                    size="txtMontserratMedium14WhiteA700"
                  >
                    Date
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[7px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtMontserratMedium32"
                  >
                    #140220235236
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtMontserratMedium32"
                  >
                    08 March 2023
                  </Text>
                </div>
                <Text
                  className="mt-[35px] text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  From
                </Text>
                <Text
                  className="mt-2.5 text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  Manipal University
                </Text>
                <Text
                  className="mt-[18px] text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  Address
                </Text>
                <Text
                  className="mt-2.5 text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  Manipal University, Bangalore - 303030
                </Text>
                <Text
                  className="mt-[18px] text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  Contact
                </Text>
                <Text
                  className="mt-[9px] text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  +91 85245 85245
                </Text>
                <Text
                  className="mt-2.5 text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  edu@maipal.online.com
                </Text>
                <div className="flex flex-row sm:gap-10 items-center justify-between mt-[46px] w-[96%] md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Name of Client
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Contact Number
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between mt-[9px] w-[99%] md:w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtMontserratMedium20"
                  >
                    Harsh Kadyan
                  </Text>
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtMontserratRegular20"
                  >
                    +91 1234567890
                  </Text>
                </div>
                <Text
                  className="mt-[18px] text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  E-Mail
                </Text>
                <Text
                  className="mt-2.5 text-white-A700 text-xl"
                  size="txtMontserratRegular20"
                >
                  kadyan.harsh2002@gmail.com
                </Text>
                <Text
                  className="mt-[38px] text-white-A700 text-xl"
                  size="txtMontserratSemiBold20"
                >
                  Billing Address
                </Text>
                <Text
                  className="mt-[19px] text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  116, Lane Number 4, Rathore Nagar, Vaishali Nagar
                </Text>
                <Text
                  className="mt-2 text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  Pincode : 302021
                </Text>
                <Text
                  className="mt-[11px] text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  District : Jaipur
                </Text>
                <Text
                  className="mt-2.5 text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  State : Rajasthan
                </Text>
                <Text
                  className="mt-2.5 text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  Country : India
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[13px] w-[96%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Grand Total : ₹ 3,99,725
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[217px] text-base text-center"
                onClick={() => navigate("/dashboardaddstudentssetuppayment")}
                shape="round"
                color="cyan_800"
                size="lg"
                variant="fill"
              >
                Setup Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddstudentsbillingPage;
