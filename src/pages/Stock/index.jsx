import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Text } from "components";
import Header2 from "components/Header2";

const StockPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header2 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1663px] mx-auto md:px-5 w-full">
            <div className="bg-gray-900 flex flex-col items-start justify-start py-[25px] rounded-[10px]">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[204px] md:ml-[0] ml-[23px] pr-[35px]"
                onClick={() => navigate("/maintenance")}
                leftIcon={
                  <Img
                    className="h-6 mr-[17px]"
                    src="images/img_materialsymbolsborderallrounded.svg"
                    alt="material-symbols:border-all-rounded"
                  />
                }
              >
                <div className="font-medium leading-[normal] sm:pr-5 text-gray-400 text-left text-lg">
                  Dashboard
                </div>
              </Button>
              <Input
                name="group627"
                placeholder="Stock"
                className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-left text-lg w-full"
                wrapClassName="flex mt-[39px] pl-[23px] pr-[35px] py-[23px] w-full"
                prefix={
                  <Img
                    className="mt-px mb-auto h-6 mr-[17px]"
                    src="images/img_laboxes.svg"
                    alt="la:boxes"
                  />
                }
                shape="round"
                color="blue_gray_900_01"
                variant="fill"
              ></Input>
              <div className="flex flex-row gap-[17px] items-center justify-start mb-[703px] md:ml-[0] ml-[23px] mt-[26px] pr-[15px] w-[55%] md:w-full">
                <Img className="h-6 w-6" src="images/img_user.svg" alt="user" />
                <Text
                  className="text-gray-400 text-lg"
                  size="txtMontserratMedium18"
                >
                  Complaints
                </Text>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col gap-8 items-start justify-start mb-[570px] md:mt-0 mt-5 p-[17px] rounded-[10px]">
              <CheckBox
                className="font-semibold leading-[normal] md:ml-[0] ml-[3px] mt-0.5 sm:pr-5 text-left text-xl"
                inputClassName="h-3 mr-[5px] w-3"
                name="stock"
                id="stock"
                label="Stock"
              ></CheckBox>
              <div className="bg-blue_gray-900_01 h-56 mb-[30px] rounded-[50%] w-56"></div>
            </div>
            <div className="bg-gray-900 h-[286px] mb-[631px] md:mt-0 mt-5 rounded-[10px] w-1/5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockPage;
