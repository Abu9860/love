import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const DashboardaddhostelsconfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[185px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-start justify-start mb-[123px] p-[33px] md:px-5 rounded-[10px] w-[56%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[61px] justify-start mb-[21px] md:ml-[0] ml-[9px] w-[90%] md:w-full">
            <Text
              className="md:ml-[0] ml-[265px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtMontserratMedium32"
            >
              Confirm
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Name of Hostel : H6
              </Text>
              <Text
                className="mt-3.5 text-gray-400 text-xl"
                size="txtMontserratRegular20Gray400"
              >
                Number of Floors : 7
              </Text>
              <Text
                className="mt-[19px] text-gray-400 text-xl"
                size="txtMontserratRegular20Gray400"
              >
                Number of Kitchens/ Cafeterias : 7
              </Text>
              <Text
                className="mt-[19px] text-gray-400 text-xl"
                size="txtMontserratRegular20Gray400"
              >
                Number of Washrooms : 7
              </Text>
              <Text
                className="mt-[30px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Hostel Address
              </Text>
              <Text
                className="mt-5 text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                size="txtMontserratRegular24"
              >
                <>
                  Plot number 206, Tihri Nagar, Main Hawai Sadak
                  <br />
                  Jaipur - Rajasthan - 302021 India
                </>
              </Text>
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-end md:ml-[0] ml-[49px] mt-[67px] w-[93%] md:w-full">
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  color="cyan_600"
                  size="lg"
                  variant="fill"
                >
                  Add Hostel
                </Button>
                <Button
                  className="common-pointer border-2 border-gray-800_04 border-solid cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                  onClick={() => navigate("/dashboardaddhostels")}
                  color="blue_gray_900_01"
                  size="lg"
                  variant="fill"
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddhostelsconfirmationPage;
