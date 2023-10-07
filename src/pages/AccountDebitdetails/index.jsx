import React from "react";

import { Button, Img, List, Text } from "components";

const AccountDebitdetailsPage = () => {
  return (
    <>
      <div className="font-montserrat h-[1117px] mx-auto md:pl-10 sm:pl-5 pl-[747px] relative w-full">
        <div className="absolute bg-blue_gray-900_01 flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-[26px] md:px-5 right-[0] w-[57%]">
          <div className="flex flex-col gap-2.5 items-start justify-start mb-[953px] w-[95%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
              <Button
                className="!text-white-A700 border border-gray-400 border-solid cursor-pointer font-medium leading-[normal] min-w-[74px] rounded-[10px] text-base text-center"
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                UPI
              </Button>
            </div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Debit Details
            </Text>
          </div>
        </div>
        <div className="absolute bottom-[1%] flex flex-col items-center justify-end p-3 right-[11%] w-[47%]">
          <div className="flex flex-col items-start justify-start mt-[3px] w-[98%] md:w-full">
            <Text
              className="ml-1 md:ml-[0] text-base text-white-A700"
              size="txtMontserratRegular16"
            >
              Transaction ID/UTR Number
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-[31px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              #12345HGFKL678$jjjjOPI
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-1 md:ml-[0] mt-[62px] w-[64%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                Date
              </Text>
              <Text
                className="sm:ml-[0] ml-[153px] text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                Due Date
              </Text>
              <Text
                className="sm:ml-[0] ml-[98px] text-white-A700 text-xl"
                size="txtMontserratRegular20"
              >
                Receipt
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-1 md:ml-[0] mt-[27px] w-[77%] md:w-full">
              <Button
                className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[152px] rounded-[10px]"
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
              <Button
                className="border border-solid border-white-A700 cursor-pointer flex items-center justify-center min-w-[152px] sm:ml-[0] ml-[50px] rounded-[10px]"
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
              <Button
                className="border border-solid border-white-A700 cursor-pointer leading-[normal] min-w-[173px] sm:ml-[0] ml-[43px] rounded-[10px] text-center text-xl"
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                transc_89...pdf
              </Button>
            </div>
            <div className="bg-gray-900_01 flex flex-col items-start justify-end ml-1 md:ml-[0] mt-[71px] p-3.5 rounded-[5px]">
              <Text
                className="ml-3.5 md:ml-[0] mt-1 text-base text-gray-500"
                size="txtMontserratRegular16Gray500"
              >
                Name
              </Text>
              <Text
                className="ml-3.5 md:ml-[0] mt-2.5 text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                Harsh Kadyan
              </Text>
              <Text
                className="ml-3.5 md:ml-[0] mt-5 text-base text-gray-500"
                size="txtMontserratRegular16Gray500"
              >
                Contact Number
              </Text>
              <Text
                className="ml-3.5 md:ml-[0] mt-[7px] text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                +91 85289 85298
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[47px] items-center justify-start ml-1 md:ml-[0] mt-[51px] w-[76%] md:w-full">
              <div className="bg-gray-900_01 flex flex-col gap-[15px] items-start justify-start p-[19px] rounded-[5px]">
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Remark
                </Text>
                <Text
                  className="mb-[5px] md:ml-[0] ml-[9px] text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  Vendor Payment
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-col gap-[15px] items-start justify-start p-[19px] rounded-[5px]">
                <Text
                  className="md:ml-[0] ml-[9px] text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Amount
                </Text>
                <Text
                  className="mb-[5px] md:ml-[0] ml-[9px] text-white-A700 text-xl"
                  size="txtMontserratMedium20"
                >
                  ₹ 1,56,810
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[50px] w-[88%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Order Details
              </Text>
              <div className="flex flex-row gap-[23px] items-center justify-between w-[46%] sm:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[137px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-[15px]"
                      src="images/img_materialsymbolsdownload.svg"
                      alt="material-symbols:download"
                    />
                  }
                  shape="round"
                  color="gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                    Invoice
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[137px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-[15px]"
                      src="images/img_materialsymbolsdownload.svg"
                      alt="material-symbols:download"
                    />
                  }
                  shape="round"
                  color="gray_900_01"
                  size="md"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-medium leading-[normal] text-base text-left">
                    Images
                  </div>
                </Button>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[3px] mt-1 text-base text-white-A700"
              size="txtMontserratMedium16WhiteA700"
            >
              Order ID : #MAN301020232333
            </Text>
            <List
              className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[31px] w-full"
              orientation="horizontal"
            >
              <div className="bg-gray-900_01 flex flex-1 flex-col gap-4 items-start justify-end p-5 rounded-[5px] w-full">
                <Text
                  className="ml-2 md:ml-[0] mt-0.5 text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Grand Total
                </Text>
                <Text
                  className="ml-2 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  ₹ 1,59,963
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-1 flex-col gap-4 items-start justify-end p-5 rounded-[5px] w-full">
                <Text
                  className="ml-2 md:ml-[0] mt-0.5 text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Amount Paid
                </Text>
                <Text
                  className="ml-2 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  ₹ 1,56,810
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-1 flex-col gap-3.5 items-start justify-end p-5 rounded-[5px] w-full">
                <Text
                  className="ml-2 md:ml-[0] mt-[3px] text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Amount Remaining
                </Text>
                <Text
                  className="ml-2 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  ₹ 3,810
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDebitdetailsPage;
