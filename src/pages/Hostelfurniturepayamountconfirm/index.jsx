import React from "react";

import { Button, Img, Text } from "components";

const HostelfurniturepayamountconfirmPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end p-[39px] md:px-5 w-full">
          <Text
            className="mt-[187px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratMedium32"
          >
            Amount Paid Successfully !!
          </Text>
          <Text
            className="mt-[18px] text-base text-center text-white-A700"
            size="txtMontserratMedium16WhiteA700"
          >
            <span className="text-white-A700 font-montserrat font-medium">
              <>You can check details in Accounts &gt; </>
            </span>
            <a
              href="javascript:"
              className="text-cyan-A200 font-montserrat font-medium underline"
            >
              Debit
            </a>
          </Text>
          <div className="bg-gray-900_01 flex flex-col items-start justify-start mt-[71px] p-[31px] sm:px-5 rounded-[5px] w-[70%] md:w-full">
            <div className="flex flex-col items-start justify-start mb-[21px] ml-3 md:ml-[0] w-[88%] md:w-full">
              <div className="flex flex-row gap-[15px] items-start justify-start w-[89%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_user_white_a700.svg"
                  alt="user"
                />
                <Text
                  className="mt-[3px] text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  Naraymuthry Furniture Private Limited
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between md:ml-[0] ml-[3px] mt-[31px] w-[96%] md:w-full">
                <Text
                  className="text-base text-cyan-A200"
                  size="txtMontserratRegular16CyanA200"
                >
                  Amount Paid
                </Text>
                <Text
                  className="text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  Total Amount
                </Text>
                <Text
                  className="text-base text-yellow-A400"
                  size="txtMontserratRegular16YellowA400"
                >
                  Remaining
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[3px] mt-[9px] w-full">
                <Text
                  className="text-cyan-A200 text-xl"
                  size="txtMontserratRegular20CyanA200"
                >
                  ₹ 3,60,000
                </Text>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtMontserratRegular20"
                >
                  ₹ 5,60,000
                </Text>
                <Text
                  className="text-xl text-yellow-A400"
                  size="txtMontserratRegular20YellowA400"
                >
                  ₹ 5,60,000
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium leading-[normal] mb-[37px] min-w-[708px] md:min-w-full mt-[393px] text-center text-xl"
            shape="round"
            color="cyan_800"
            size="3xl"
            variant="fill"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </>
  );
};

export default HostelfurniturepayamountconfirmPage;
