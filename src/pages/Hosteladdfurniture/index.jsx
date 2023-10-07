import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Datepicker, Img, Input, SelectBox, Text } from "components";
import HostelAddFurnitureSelectvendor from "components/HostelAddFurnitureSelectvendor";

const selectVendorOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HosteladdfurniturePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[910px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-6 md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[58px] mt-[31px] w-full">
            <Img
              className="h-6 w-6"
              src="images/img_radixiconscross1.svg"
              alt="radixiconscross"
            />
            <Text
              className="mt-[18px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Add Furniture
            </Text>
            <Text
              className="mt-[30px] text-base text-white-A700"
              size="txtMontserratMedium16WhiteA700"
            >
              Category : Bed
            </Text>
            <div className="flex md:flex-col flex-row gap-[27px] items-start justify-between md:ml-[0] ml-[3px] mt-[52px] w-full">
              <HostelAddFurnitureSelectvendor className="flex sm:flex-1 flex-col items-center justify-start sm:w-full" />
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] mb-[188px] min-w-[188px] text-base text-center"
                onClick={() => navigate("/hosteladdvendor")}
                shape="round"
                color="cyan_800"
                size="lg"
                variant="fill"
              >
                +Add Vendor
              </Button>
            </div>
            <Text
              className="mt-[97px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Product Details
            </Text>
            <Input
              name="group804"
              placeholder="Product Name"
              className="!placeholder:text-gray-500 !text-gray-500 leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="mt-[18px] rounded-[5px] w-[72%]"
              type="text"
              color="gray_900_01"
              size="lg"
              variant="fill"
            ></Input>
            <div className="flex flex-row gap-5 items-center justify-start mt-[15px] w-[43%] md:w-full">
              <Text
                className="bg-gray-900_01 h-[52px] justify-center pb-3.5 pl-4 sm:pr-5 pr-[35px] pt-[17px] rounded-[5px] text-base text-gray-500 w-[89px]"
                size="txtMontserratRegular16Gray500"
              >
                Qty.
              </Text>
              <div className="bg-gray-900_01 flex flex-row gap-[19px] items-center justify-center p-[15px] rounded-[5px] w-[67%]">
                <Text
                  className="text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  ₹
                </Text>
                <Text
                  className="mr-[71px] text-base text-gray-500"
                  size="txtMontserratRegular16Gray500"
                >
                  Price/Unit
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-5 w-[74%] md:w-full">
              <Input
                name="group808"
                placeholder="Upload Invoice"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="flex rounded-[5px] w-[39%] sm:w-full"
                suffix={
                  <Img
                    className="h-6 ml-[26px] my-auto"
                    src="images/img_icoutlinefileupload.svg"
                    alt="ic:outline-file-upload"
                  />
                }
                color="gray_900_01"
                size="xl"
                variant="fill"
              ></Input>
              <Input
                name="group805"
                placeholder="Product Images"
                className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                wrapClassName="flex ml-10 sm:ml-[0] rounded-[5px] w-[39%] sm:w-full"
                suffix={
                  <Img
                    className="h-6 ml-[17px] my-auto"
                    src="images/img_icoutlinefileupload.svg"
                    alt="ic:outline-file-upload"
                  />
                }
                color="gray_900_01"
                size="xl"
                variant="fill"
              ></Input>
              <Text
                className="sm:ml-[0] ml-[17px] sm:mt-0 mt-[39px] text-base text-gray-400"
                size="txtMontserratRegular16Gray400"
              >
                Optional
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between mt-[25px] w-[53%] md:w-full">
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
            <div className="flex sm:flex-col flex-row gap-10 items-center justify-start mt-[9px] w-[63%] md:w-full">
              <Datepicker
                className="group807"
                placeholder="12 Sep 2023"
              ></Datepicker>
              <Datepicker
                className="group806"
                placeholder="12 Sep 2023"
              ></Datepicker>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[546px] sm:min-w-full md:ml-[0] ml-[23px] mt-[33px] text-center text-xl"
              onClick={() => navigate("/hostelfurniturepayamount")}
              shape="round"
              color="cyan_800"
              size="md"
              variant="fill"
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HosteladdfurniturePage;
