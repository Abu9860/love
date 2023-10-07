import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Line, ReactTable, Text } from "components";

const DashboardAddStudentsSetupPaymentEmibreaker = (props) => {
  const table3Data = React.useRef([
    {
      weburl: "1",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 11 / 2022",
    },
    {
      weburl: "2",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 05 / 2023",
    },
    {
      weburl: "3",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 09 / 2023",
    },
    {
      weburl: "4",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 03 / 2024",
    },
    {
      weburl: "5",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 09 / 2024",
    },
    {
      weburl: "6",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 03 / 2025",
    },
    {
      weburl: "7",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 09 / 2025",
    },
    {
      weburl: "8",
      remarks: "Hostel Fees",
      amount: "₹ 49,965",
      duedateOne: "12 / 03 / 2026",
    },
  ]);
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("weburl", {
        cell: (info) => (
          <Text
            className="pb-[-9px] pt-[35px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[82px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.weburl}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("remarks", {
        cell: (info) => (
          <Text
            className="pb-[-9px] pt-[35px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[238px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.remarks}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pb-[-10px] pt-[35px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[143px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.amount}
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("duedateOne", {
        cell: (info) => (
          <Text
            className="pb-[-9px] pt-[35px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[89px] text-sm text-white-A700"
            size="txtMontserratRegular14WhiteA700"
          >
            {props?.duedateOne}
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer font-medium font-montserrat leading-[normal] min-w-[82px] md:ml-[0] ml-[483px] mr-[49px] rounded-[10px] text-center text-xl"
          color="cyan_800"
          size="2xl"
          variant="fill"
        >
          {props?.ok}
        </Button>
        <div className="flex flex-col gap-[18px] items-start justify-start w-full">
          <Text
            className="text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {props?.paymentscheduleOne}
          </Text>
          <div className="bg-gray-900_01 md:h-[371px] h-[372px] relative w-full">
            <div className="overflow-auto m-auto w-[90%]">
              <ReactTable
                columns={table3Columns}
                data={table3Data.current}
                rowClass={""}
                headerClass="border-b border-blue_gray-900_02"
              />
            </div>
            <div className="absolute h-[371px] inset-[0] justify-center m-auto w-full">
              <div className="h-[371px] m-auto md:px-10 sm:px-5 px-[74px] w-full">
                <Line className="absolute bg-blue_gray-900_02 h-[371px] inset-y-[0] left-[20%] my-auto w-px" />
              </div>
              <Line className="absolute bg-blue_gray-900_02 h-[371px] inset-[0] justify-center m-auto w-px" />
              <Line className="absolute bg-blue_gray-900_02 h-[371px] inset-y-[0] my-auto right-[24%] w-px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardAddStudentsSetupPaymentEmibreaker.defaultProps = {
  ok: "OK",
  paymentscheduleOne: "Payment Schedule",
  weburl: "S.No",
  remarks: "Remarks",
  amount: "Amount",
  duedateOne: "Due Date",
  one: "1",
  hostelfees: "Hostel Fees",
  price: "₹ 49,965",
  p12112022: "12 / 11 / 2022",
  two: "2",
  hostelfeesOne: "Hostel Fees",
  priceOne: "₹ 49,965",
  p12052023: "12 / 05 / 2023",
  three: "3",
  hostelfeesTwo: "Hostel Fees",
  priceTwo: "₹ 49,965",
  p12092023: "12 / 09 / 2023",
  four: "4",
  hostelfeesThree: "Hostel Fees",
  priceThree: "₹ 49,965",
  p12032024: "12 / 03 / 2024",
  five: "5",
  hostelfeesFour: "Hostel Fees",
  priceFour: "₹ 49,965",
  p12092024: "12 / 09 / 2024",
  six: "6",
  hostelfeesFive: "Hostel Fees",
  priceFive: "₹ 49,965",
  p12032025: "12 / 03 / 2025",
  seven: "7",
  hostelfeesSix: "Hostel Fees",
  priceSix: "₹ 49,965",
  p12092025: "12 / 09 / 2025",
  eight: "8",
  hostelfeesSeven: "Hostel Fees",
  priceSeven: "₹ 49,965",
  p12032026: "12 / 03 / 2026",
};

export default DashboardAddStudentsSetupPaymentEmibreaker;
