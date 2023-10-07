import React from "react";

import { Button, Img, Text } from "components";
import HostelAddFurnitureTwoColumnOne from "components/HostelAddFurnitureTwoColumnOne";

const HosteladdfurnitureTwoPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-[15px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[27px] mt-[30px] w-[99%] md:w-full">
            <div className="flex md:flex-col flex-row gap-5 items-start justify-between ml-1 md:ml-[0] w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[57%] md:w-full">
                <Img
                  className="h-[31px] w-[31px]"
                  src="images/img_arrowleft_white_a700_20x20.svg"
                  alt="arrowleft"
                />
                <Text
                  className="mt-[25px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtMontserratMedium32"
                >
                  Make Payment
                </Text>
                <Text
                  className="md:ml-[0] ml-[18px] mt-[23px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtMontserratMedium24"
                >
                  Vendor Details
                </Text>
                <Text
                  className="md:ml-[0] ml-[19px] mt-[33px] text-white-A700 text-xl"
                  size="txtMontserratRegular20"
                >
                  Naraymuthry Furniture Private Limited
                </Text>
                <Text
                  className="md:ml-[0] ml-[19px] mt-[29px] text-base text-gray-500 w-[96%] sm:w-full"
                  size="txtMontserratRegular16Gray500"
                >
                  GSTIN / LLP Reg No. / Prop. Number : GSTUIN45698PORI
                </Text>
                <Text
                  className="md:ml-[0] ml-[19px] mt-3 text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  <>
                    101-103 Chanda Tower, Opp. Grand Utsave Marriage Garden,
                    Main Gandhi Path Road, Vaishali Nagar,
                    <br />
                    Jaipur , Rajasthan - 302021 India
                  </>
                </Text>
                <Text
                  className="mt-[53px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
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
              </div>
              <div className="bg-gray-900_01 flex flex-col items-start justify-start mb-[85px] md:mt-0 mt-[54px] p-[27px] sm:px-5 rounded-[5px] w-[41%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[19px] w-[61%] md:w-full">
                  <Text
                    className="text-base text-gray-500"
                    size="txtMontserratRegular16Gray500"
                  >
                    Grand Total
                  </Text>
                  <Text
                    className="mt-4 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtMontserratMedium24"
                  >
                    ₹ 1,59,963
                  </Text>
                  <Text
                    className="mt-[33px] text-base text-gray-400"
                    size="txtMontserratRegular16Gray400"
                  >
                    Due Date
                  </Text>
                  <div className="flex flex-row gap-3.5 items-start justify-start mt-[15px] w-full">
                    <Img
                      className="h-[30px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <Text
                      className="mt-1 text-white-A700 text-xl"
                      size="txtMontserratRegular20"
                    >
                      12 Sep 2023
                    </Text>
                  </div>
                  <Text
                    className="mt-[29px] text-base text-gray-400"
                    size="txtMontserratRegular16Gray400"
                  >
                    Expected Delivery
                  </Text>
                  <div className="flex flex-row gap-3.5 items-start justify-start mt-3.5 w-full">
                    <Img
                      className="h-[30px]"
                      src="images/img_calendar.svg"
                      alt="calendar_One"
                    />
                    <Text
                      className="mt-1 text-white-A700 text-xl"
                      size="txtMontserratRegular20"
                    >
                      12 Sep 2023
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[3px] text-white-A700 text-xl"
              size="txtMontserratMedium20"
            >
              Khaitan Steel Bed
            </Text>
            <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-5 w-[29%] md:w-full">
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
            <div className="flex flex-row items-start justify-start ml-1 md:ml-[0] mt-[7px] w-[30%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtMontserratRegular20"
              >
                121
              </Text>
              <Text
                className="ml-[115px] text-white-A700 text-xl"
                size="txtMontserratRegular20"
              >
                ₹
              </Text>
              <Text
                className="ml-2 text-white-A700 text-xl"
                size="txtMontserratRegular20"
              >
                12,000
              </Text>
            </div>
            <Text
              className="ml-1 md:ml-[0] mt-[34px] text-base text-white-A700"
              size="txtMontserratMedium16WhiteA700"
            >
              Invoice
            </Text>
            <Button
              className="cursor-pointer leading-[normal] min-w-[218px] ml-1 md:ml-[0] mt-[9px] text-base text-center"
              shape="round"
              color="gray_900_01"
              size="xl"
              variant="fill"
            >
              Invoice_8974587...pdf
            </Button>
            <Text
              className="ml-1 md:ml-[0] mt-7 text-base text-white-A700"
              size="txtMontserratMedium16WhiteA700"
            >
              Product Images
            </Text>
            <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-0.5 pl-1 py-1 w-full">
              <Button
                className="cursor-pointer leading-[normal] mb-2 min-w-[209px] md:mt-0 mt-[5px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                img9809809899...jpg
              </Button>
              <Button
                className="cursor-pointer leading-[normal] mb-2 min-w-[209px] md:mt-0 mt-[5px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                img9809809899...jpg
              </Button>
              <Button
                className="cursor-pointer leading-[normal] mb-2 min-w-[209px] md:mt-0 mt-[5px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="xl"
                variant="fill"
              >
                img9809809899...jpg
              </Button>
              <Text
                className="bg-gray-900_01 h-[58px] justify-center mb-2 md:mt-0 mt-[5px] pb-[17px] pl-5 pt-5 rounded-[5px] text-base text-gray-400 w-[101px]"
                size="txtMontserratRegular16Gray400"
              >
                img9809809899...jpg
              </Text>
            </div>
            <HostelAddFurnitureTwoColumnOne className="flex flex-col items-center justify-start md:ml-[0] ml-[114px] mt-[42px] w-[70%] md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HosteladdfurnitureTwoPage;
