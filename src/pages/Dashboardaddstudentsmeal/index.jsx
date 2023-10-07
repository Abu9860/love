import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";

const mealtypeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardaddstudentsmealPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[185px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-center justify-end mb-[389px] p-[29px] md:px-5 rounded-[10px] w-[56%] md:w-full">
          <div className="flex flex-col items-center justify-start mt-1 w-[96%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Tenant’s Meal
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
            </div>
            <SelectBox
              className="leading-[normal] mt-[29px] rounded-[10px] text-base text-left w-full"
              placeholderClassName="text-gray-400"
              indicator={
                <Img
                  className="h-8 mr-[0] w-8"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="mealtype"
              options={mealtypeOptionsList}
              isSearchable={false}
              placeholder="Select Type of Meal"
              color="gray_900_01"
              size="md"
              variant="fill"
            />
            <Input
              name="frequency"
              placeholder="Frequency of Meal per Day"
              className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
              wrapClassName="mt-5 w-full"
              shape="round"
              color="gray_900_01"
              size="3xl"
              variant="fill"
            ></Input>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-[31px] w-[84%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={() => navigate("/dashboardaddstudentsduration")}
                color="cyan_800"
                size="lg"
                variant="fill"
              >
                Proceed
              </Button>
              <Button
                className="border-2 border-gray-800_04 border-solid cursor-pointer font-medium leading-[normal] min-w-[266px] rounded-[10px] text-2xl md:text-[22px] text-center sm:text-xl"
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
    </>
  );
};

export default DashboardaddstudentsmealPage;
