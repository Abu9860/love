import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const HostelfurnitureorderviewdetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-8 md:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[34px] mt-[21px] w-full">
            <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Img
                  className="h-6 mt-0.5 w-6"
                  src="images/img_radixiconscross1.svg"
                  alt="radixiconscross"
                />
                <Button
                  className="cursor-pointer leading-[normal] min-w-[119px] text-base text-center"
                  shape="round"
                  color="cyan_800"
                  size="md"
                  variant="fill"
                >
                  Save
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[19px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtMontserratMedium32"
                >
                  Order Details
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[333px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-[35px]"
                      src="images/img_arrowdown_red_a700_01.svg"
                      alt="arrow_down"
                    />
                  }
                  shape="round"
                  color="blue_gray_900_03"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium leading-[normal] text-base text-left">
                    Status : Unpaid/Undelivered
                  </div>
                </Button>
              </div>
              <Text
                className="md:ml-[0] ml-[3px] mt-[5px] text-base text-white-A700"
                size="txtMontserratMedium16WhiteA700"
              >
                Order ID : #MAN301020232333
              </Text>
              <div className="flex sm:flex-col flex-row gap-10 items-center justify-start mt-[31px] w-[68%] md:w-full">
                <div className="bg-gray-900_01 flex flex-col gap-4 items-start justify-end p-5 rounded-[5px]">
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
                <div className="bg-gray-900_01 flex flex-col gap-3.5 items-start justify-end p-[22px] sm:px-5 rounded-[5px]">
                  <Text
                    className="ml-1.5 md:ml-[0] text-base text-gray-500"
                    size="txtMontserratRegular16Gray500"
                  >
                    Amount Paid
                  </Text>
                  <Text
                    className="ml-1.5 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtMontserratMedium24"
                  >
                    ₹ 0
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between mt-[26px] w-[61%] md:w-full">
                <Text
                  className="text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Due Date
                </Text>
                <Text
                  className="text-base text-gray-400"
                  size="txtMontserratRegular16Gray400"
                >
                  Expected Delivery
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3.5 w-[63%] md:w-full">
                <Img
                  className="h-[30px]"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
                <Text
                  className="sm:ml-[0] ml-[13px] sm:mt-0 mt-1 text-white-A700 text-xl"
                  size="txtMontserratRegular20"
                >
                  12 Sep 2023
                </Text>
                <Img
                  className="h-[30px] sm:ml-[0] ml-[147px]"
                  src="images/img_calendar.svg"
                  alt="calendar_One"
                />
                <Text
                  className="sm:ml-[0] ml-[13px] sm:mt-0 mt-1 text-white-A700 text-xl"
                  size="txtMontserratRegular20"
                >
                  12 Sep 2023
                </Text>
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-[39px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Vendor Details
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[33px] text-white-A700 text-xl"
                size="txtMontserratRegular20"
              >
                Naraymuthry Furniture Private Limited
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-[29px] text-base text-gray-500 w-[57%] sm:w-full"
                size="txtMontserratRegular16Gray500"
              >
                GSTIN / LLP Reg No. / Prop. Number : GSTUIN45698PORI
              </Text>
              <Text
                className="md:ml-[0] ml-[3px] mt-3 text-base text-gray-500"
                size="txtMontserratRegular16Gray500"
              >
                <>
                  101-103 Chanda Tower, Opp. Grand Utsave Marriage Garden, Main
                  Gandhi Path Road, Vaishali Nagar,
                  <br />
                  Jaipur , Rajasthan - 302021 India
                </>
              </Text>
              <Text
                className="mt-[39px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Product Details
              </Text>
              <Text
                className="mt-[18px] text-base text-gray-500"
                size="txtMontserratRegular16Gray500"
              >
                Name
              </Text>
              <Text
                className="mt-[3px] text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                Khaitan Steel Bed
              </Text>
              <div className="flex flex-row items-start justify-between mt-5 w-[31%] md:w-full">
                <Text
                  className="text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Qty.
                </Text>
                <Text
                  className="text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Price/Unit
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[7px] w-[28%] md:w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtMontserratRegular20"
                >
                  121
                </Text>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtMontserratRegular20"
                >
                  12,000
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[34px] items-center justify-between w-[97%] md:w-full">
              <Button
                className="common-pointer cursor-pointer leading-[normal] min-w-[259px] md:mt-0 my-2.5 text-center text-xl"
                onClick={() => navigate("/hostelfurniturepayamount")}
                shape="round"
                color="cyan_800"
                size="3xl"
                variant="fill"
              >
                Pay Now
              </Button>
              <Button
                className="!text-red-A700_03 border border-red-A700_03 border-solid cursor-pointer leading-[normal] min-w-[259px] md:mt-0 my-2.5 text-center text-xl"
                shape="round"
                color="blue_gray_900_01"
                size="3xl"
                variant="fill"
              >
                Cancel Order
              </Button>
              <div className="flex flex-col gap-[7px] items-center justify-start">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelfurnitureorderviewdetailsPage;
