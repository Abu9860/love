import React from "react";

import { Img, Text } from "components";

const HostelfurniturepaymentPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-[146px] md:px-5 w-full">
          <Text
            className="md:text-5xl text-[64px] text-white-A700"
            size="txtMontserratMedium64"
          >
            Hold Tight
          </Text>
          <Text
            className="mt-6 text-2xl md:text-[22px] text-center text-gray-500 sm:text-xl"
            size="txtMontserratRegular24Gray500"
          >
            <>
              Redirecting to Payment Gateway
              <br />
              of Payment Processing
            </>
          </Text>
          <Img
            className="h-[423px] sm:h-auto mt-[70px] object-cover w-[59%] md:w-full"
            src="images/img_rectangle78.png"
            alt="rectangleSeventyEight"
          />
          <Text
            className="mb-[95px] mt-11 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
            size="txtMontserratMedium24"
          >
            Do not Refresh or Close this Window
          </Text>
        </div>
      </div>
    </>
  );
};

export default HostelfurniturepaymentPage;
