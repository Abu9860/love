import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const AccountsdebitexpandOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1659px] mx-auto md:px-5 w-full">
            <div className="bg-gray-900 flex md:flex-1 flex-col items-start justify-start py-6 rounded-[10px] w-[18%] md:w-full">
              <div className="flex flex-col gap-[46px] items-start justify-start md:ml-[0] ml-[22px] w-[69%] md:w-full">
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[204px] pr-[35px]"
                  onClick={() => navigate("/accounts")}
                  leftIcon={
                    <Img
                      className="h-6 mt-px mr-[17px]"
                      src="images/img_materialsymbolsborderallrounded.svg"
                      alt="material-symbols:border-all-rounded"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] sm:pr-5 text-gray-400 text-left text-lg">
                    Dashboard
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[108px] pr-2.5"
                  onClick={() => navigate("/accountscredit")}
                  leftIcon={
                    <Img
                      className="h-6 mr-[17px]"
                      src="images/img_materialsymbolsinhomemodesharp.svg"
                      alt="material-symbols:in-home-mode-sharp"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                    Credit
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[93px]"
                  onClick={() => navigate("/accountsdebit")}
                  leftIcon={
                    <Img
                      className="h-6 mr-[18px]"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                    Debit
                  </div>
                </Button>
              </div>
              <Input
                name="group319"
                placeholder="Vendors"
                className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-left text-lg w-full"
                wrapClassName="flex mt-[25px] w-full"
                prefix={
                  <Img
                    className="h-6 mr-[17px] my-auto"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                }
                shape="round"
                color="blue_gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <div className="flex flex-col gap-[50px] items-start justify-start mb-[429px] md:ml-[0] ml-[22px] mt-7 w-[43%] md:w-full">
                <div className="flex flex-row gap-5 items-start justify-start ml-0.5 md:ml-[0] w-4/5 md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconparkoutlineorder.svg"
                    alt="iconparkoutline"
                  />
                  <Text
                    className="text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    Orders
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-start justify-start ml-0.5 md:ml-[0] w-[99%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_heroiconssolidcollection.svg"
                    alt="heroiconssolidc"
                  />
                  <Text
                    className="text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    Expected
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start w-[95%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_mdiclockalertoutline.svg"
                    alt="mdiclockalertou"
                  />
                  <Text
                    className="text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    Overdue
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[67px] md:mt-0 mt-[26px] w-[59%] md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Vendors
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-[11px] text-base text-white-A700"
                size="txtMontserratRegular16"
              >
                <span className="text-white-A700 font-montserrat text-left font-normal">
                  Showing total{" "}
                </span>
                <span className="text-yellow-A400 font-montserrat text-left font-normal">
                  985
                </span>
                <span className="text-white-A700 font-montserrat text-left font-normal">
                  {" "}
                  Vendors
                </span>
              </Text>
              <div className="bg-gray-900 flex flex-row sm:gap-10 gap-[147px] items-center justify-start mt-[58px] p-[23px] sm:px-5 rounded-[5px] w-full">
                <Text
                  className="my-2.5 text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  Naraymuthry Furn...
                </Text>
                <Text
                  className="my-2.5 text-base text-white-A700"
                  size="txtMontserratRegular16"
                >
                  ₹ 56,852
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] mb-[850px] min-w-[188px] md:ml-[0] ml-[139px] md:mt-0 mt-9 text-base text-center"
              shape="round"
              color="cyan_800"
              size="lg"
              variant="fill"
            >
              +Add Vendor
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsdebitexpandOnePage;
