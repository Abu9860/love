import React from "react";

import { Button, Img, Input, Text } from "components";

const HosteladdvendorPage = () => {
  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-start justify-start p-[49px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[222px] mt-[5px] w-[77%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_radixiconscross1.svg"
              alt="radixiconscross"
            />
            <Text
              className="mt-[19px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Add Vendor
            </Text>
            <Input
              name="group771"
              placeholder="Name of Vendor"
              className="!placeholder:text-gray-500_03 !text-gray-500_03 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="md:ml-[0] ml-[3px] mt-[52px] rounded-[5px] w-full"
              type="text"
              color="gray_900_01"
              size="lg"
              variant="fill"
            ></Input>
            <Input
              name="group769"
              placeholder="GSTIN / LLP No. / Prop No."
              className="!placeholder:text-gray-500_03 !text-gray-500_03 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="md:ml-[0] ml-[3px] mt-5 rounded-[5px] w-full"
              color="gray_900_01"
              size="lg"
              variant="fill"
            ></Input>
            <Input
              name="group768"
              placeholder="Address Line 1"
              className="!placeholder:text-gray-500_03 !text-gray-500_03 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="md:ml-[0] ml-[3px] mt-5 rounded-[5px] w-full"
              color="gray_900_01"
              size="lg"
              variant="fill"
            ></Input>
            <Input
              name="group767"
              placeholder="Address Line 2"
              className="!placeholder:text-gray-500_03 !text-gray-500_03 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="md:ml-[0] ml-[3px] mt-5 rounded-[5px] w-full"
              color="gray_900_01"
              size="lg"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start md:ml-[0] ml-[3px] mt-5 w-[82%] md:w-full">
              <Button
                className="!text-gray-500_03 cursor-pointer leading-[normal] min-w-[107px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="lg"
                variant="fill"
              >
                Pincode
              </Button>
              <Button
                className="!text-gray-500_03 cursor-pointer leading-[normal] min-w-[150px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="lg"
                variant="fill"
              >
                District
              </Button>
              <Button
                className="!text-gray-500_03 cursor-pointer leading-[normal] min-w-[150px] text-base text-center"
                shape="round"
                color="gray_900_01"
                size="lg"
                variant="fill"
              >
                State
              </Button>
            </div>
            <Button
              className="!text-gray-500_03 cursor-pointer leading-[normal] min-w-[150px] mt-5 text-base text-center"
              shape="round"
              color="gray_900_01"
              size="lg"
              variant="fill"
            >
              Country
            </Button>
            <Input
              name="group766"
              placeholder="Contact Number"
              className="!placeholder:text-gray-500_03 !text-gray-500_03 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="md:ml-[0] ml-[3px] mt-5 rounded-[5px] w-full"
              type="number"
              color="gray_900_01"
              size="lg"
              variant="fill"
            ></Input>
            <Input
              name="group765"
              placeholder="Email Address"
              className="!placeholder:text-gray-500_03 !text-gray-500_03 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="md:ml-[0] ml-[3px] mt-5 rounded-[5px] w-full"
              type="email"
              color="gray_900_01"
              size="lg"
              variant="fill"
            ></Input>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[546px] sm:min-w-full md:ml-[0] ml-[3px] mt-[46px] text-center text-xl"
              shape="round"
              color="cyan_800"
              size="md"
              variant="fill"
            >
              Add Vendor
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HosteladdvendorPage;
