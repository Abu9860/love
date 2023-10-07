import React from "react";

import { Button, Img, Text } from "components";

const HostelfurniturepaymentpaylaterPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end p-32 md:px-5 w-full">
          <Text
            className="mt-[13px] md:text-5xl text-[64px] text-white-A700"
            size="txtMontserratMedium64"
          >
            Order Added
          </Text>
          <Text
            className="mt-[31px] text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl"
            size="txtMontserratRegular24Gray500"
          >
            <span className="text-gray-500 font-montserrat font-normal">
              <>Check Details in Accounts &gt; Debit &gt; </>
            </span>
            <a
              href="javascript:"
              className="text-cyan-A200 font-montserrat font-normal underline"
            >
              Pending
            </a>
          </Text>
          <Img
            className="h-[423px] sm:h-auto mt-32 object-cover w-[56%] md:w-full"
            src="images/img_rectangle78.png"
            alt="rectangleSeventyEight"
          />
          <Button
            className="!text-cyan-A200 border-2 border-cyan-800 border-solid cursor-pointer font-medium leading-[normal] min-w-[332px] mt-[87px] text-2xl md:text-[22px] text-center sm:text-xl"
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

export default HostelfurniturepaymentpaylaterPage;
