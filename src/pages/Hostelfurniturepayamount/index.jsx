import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const HostelfurniturepayamountPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col justify-center p-[33px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] mr-[423px] mt-[22px] w-[42%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_radixiconscross1.svg"
              alt="radixiconscross"
            />
            <Text
              className="mt-[22px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Pay Bill
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-[17px] text-base text-white-A700"
              size="txtMontserratMedium16WhiteA700"
            >
              Order ID : #MAN301020232333
            </Text>
            <div className="bg-gray-900_01 flex flex-col gap-3.5 items-start justify-end mt-[19px] p-5 rounded-[5px] w-full">
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
                ₹ 1,59,963
              </Text>
            </div>
            <Text
              className="mt-[38px] text-base text-gray-500"
              size="txtMontserratRegular16Gray500"
            >
              Enter amount to Pay
            </Text>
            <Input
              name="group853"
              placeholder="Amount"
              className="!placeholder:text-gray-500_c9 !text-gray-500_c9 leading-[normal] p-0 text-left text-xl w-full"
              wrapClassName="mt-[17px] rounded-[5px] w-full"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-start mr-[148px] mt-[50px] p-[3px] w-[81%] md:w-full">
            <div className="flex flex-col items-start justify-start mb-1 md:ml-[0] ml-[13px] w-[77%] md:w-full">
              <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3.5 w-full">
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
                className="md:ml-[0] ml-[3px] mt-[29px] text-base text-gray-500 w-[92%] sm:w-full"
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
            </div>
          </div>
          <Button
            className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[708px] md:min-w-full ml-1.5 md:ml-[0] mr-[38px] my-11 text-center text-xl"
            onClick={() => navigate("/hostelfurniturepayamountconfirm")}
            shape="round"
            color="cyan_800"
            size="3xl"
            variant="fill"
          >
            Proceed to Pay
          </Button>
        </div>
      </div>
    </>
  );
};

export default HostelfurniturepayamountPage;
