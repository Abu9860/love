import React from "react";

import { Img, Input, List, Text } from "components";

const DashboardAddStudentsSetupPaymentColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[92%] md:w-full">
            <div className="bg-blue_gray-900_01 border-[6px] border-cyan-A200 border-solid h-6 mb-0.5 rounded-[50%] w-6"></div>
            <Text
              className="ml-3.5 sm:ml-[0] text-white-A700 text-xl"
              size="txtMontserratMedium20"
            >
              {props?.payinemis}
            </Text>
            <div className="bg-blue_gray-900_01 border-2 border-gray-800_01 border-solid h-6 mb-0.5 sm:ml-[0] ml-[75px] rounded-[50%] w-6"></div>
            <Text
              className="ml-3.5 sm:ml-[0] text-white-A700 text-xl"
              size="txtMontserratRegular20"
            >
              {props?.payinoneshot}
            </Text>
          </div>
          <Text
            className="mt-[33px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {props?.emicount}
          </Text>
          <Input
            name="group197"
            placeholder="Number of EMIs"
            className="!placeholder:text-gray-800_02 !text-gray-800_02 font-montserrat leading-[normal] p-0 text-left text-xl w-full"
            wrapClassName="mt-[11px] w-3/5"
            shape="round"
            color="gray_900_01"
            size="3xl"
            variant="fill"
          ></Input>
          <div className="flex flex-row items-center justify-between mt-[17px] w-4/5 md:w-full">
            <Text
              className="text-base text-white-A700"
              size="txtMontserratRegular16"
            >
              {props?.startdate}
            </Text>
            <Text
              className="text-base text-white-A700"
              size="txtMontserratRegular16"
            >
              {props?.duedate}
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[118px] grid sm:grid-cols-1 grid-cols-2 justify-center mt-[11px] w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-900_01 flex flex-1 flex-row gap-[11px] items-center justify-start p-[23px] sm:px-5 rounded-[10px] w-full">
              <div className="h-[23px] relative w-[17%]">
                <Img
                  className="absolute h-1 inset-x-[0] mx-auto top-[13%]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <Img
                  className="absolute h-[23px] inset-[0] justify-center m-auto"
                  src="images/img_calendar_white_a700.svg"
                  alt="calendar"
                />
              </div>
              <Text
                className="text-base text-white-A700"
                size="txtMontserratRegular16"
              >
                {props?.dateone}
              </Text>
            </div>
            <div className="bg-gray-900_01 flex flex-1 flex-row gap-[11px] items-center justify-center p-[23px] sm:px-5 rounded-[10px] w-full">
              <div className="h-[23px] relative w-[17%]">
                <Img
                  className="absolute h-1 inset-x-[0] mx-auto top-[13%]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <Img
                  className="absolute h-[23px] inset-[0] justify-center m-auto"
                  src="images/img_calendar_white_a700.svg"
                  alt="calendar"
                />
              </div>
              <Text
                className="mr-[3px] text-base text-white-A700"
                size="txtMontserratRegular16"
              >
                {props?.datetwo}
              </Text>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

DashboardAddStudentsSetupPaymentColumn.defaultProps = {
  payinemis: "Pay in EMIs",
  payinoneshot: "Pay in One Shot",
  emicount: "EMI Count",
  startdate: "Start Date",
  duedate: "Due Date",
  dateone: "12 Nov 2022",
  datetwo: "12 Nov 2022",
};

export default DashboardAddStudentsSetupPaymentColumn;
