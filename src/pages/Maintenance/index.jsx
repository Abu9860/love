import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header2 from "components/Header2";

const MaintenancePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[34px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header2 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between max-w-[1662px] mx-auto md:px-5 w-full">
            <div className="bg-gray-900 flex flex-col gap-[39px] justify-start pb-[728px] rounded-[10px]">
              <div className="bg-blue_gray-900_01 flex flex-row gap-[17px] items-center justify-start p-[23px] sm:px-5 rounded-[10px] w-full">
                <Img
                  className="h-6 mt-0.5 w-6"
                  src="images/img_materialsymbol_1.svg"
                  alt="materialsymbol_One"
                />
                <Text
                  className="text-lg text-white-A700"
                  size="txtMontserratSemiBold18"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-col gap-[50px] items-start justify-start md:ml-[0] ml-[23px] w-[55%] md:w-full">
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[92px]"
                  onClick={() => navigate("/stock")}
                  leftIcon={
                    <Img
                      className="h-6 mt-px mr-[17px]"
                      src="images/img_laboxes_gray_400.svg"
                      alt="la:boxes"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-gray-400 text-left text-lg">
                    Stock
                  </div>
                </Button>
                <div className="flex flex-row gap-[17px] items-center justify-start pr-[15px] w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    Complaints
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 h-52 mb-[728px] md:mt-0 mt-0.5 rounded-[5px] w-[79%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaintenancePage;
