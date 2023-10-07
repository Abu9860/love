import React from "react";

import { Button, Img, Text } from "components";

const HostelfurniturepaymentsuccesfullPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-[65px] md:px-5 w-full">
          <Img
            className="h-[158px] md:h-auto object-cover w-[158px]"
            src="images/img_rectangle_158x158.png"
            alt="rectangle"
          />
          <Text
            className="mt-[63px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
            size="txtMontserratMedium48"
          >
            Payment Succesfull
          </Text>
          <Text
            className="mt-[46px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
            size="txtMontserratMedium32"
          >
            Amount : ₹ 1,59,698
          </Text>
          <div className="bg-blue_gray-900_01 border border-gray-800_04 border-solid flex flex-col items-start justify-start mt-[38px] p-[22px] sm:px-5 rounded-[5px] w-[86%] md:w-full">
            <div className="flex flex-col gap-[13px] justify-start mb-[34px] ml-1 md:ml-[0] w-[71%] md:w-full">
              <Text
                className="text-base text-blue_gray-100 text-center"
                size="txtMontserratRegular16Bluegray100"
              >
                Paid to
              </Text>
              <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-start md:ml-[0] ml-[7px] w-[99%] md:w-full">
                <Button
                  className="flex h-[34px] items-center justify-center w-[34px]"
                  shape="circle"
                  color="gray_800_03"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_user_blue_gray_100.svg"
                    alt="user"
                  />
                </Button>
                <Text
                  className="text-base text-blue_gray-100 text-center"
                  size="txtMontserratRegular16Bluegray100"
                >
                  Narayanmurthy Furniture Private Limited
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[42px] text-center text-white-A700 text-xl"
            size="txtMontserratMedium20"
          >
            <span className="text-white-A700 font-montserrat font-medium">
              <>Check further details in Accounts &gt; </>
            </span>
            <a
              href="javascript:"
              className="text-cyan-A200 font-montserrat font-medium underline"
            >
              Debit{" "}
            </a>
            <span className="text-white-A700 font-montserrat font-medium">
              Section
            </span>
          </Text>
          <Button
            className="!text-cyan-A200 border-2 border-cyan-800 border-solid cursor-pointer font-medium leading-[normal] mb-[169px] min-w-[332px] mt-32 text-2xl md:text-[22px] text-center sm:text-xl"
            shape="round"
            color="blue_gray_900_01"
            size="xl"
            variant="fill"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </>
  );
};

export default HostelfurniturepaymentsuccesfullPage;
