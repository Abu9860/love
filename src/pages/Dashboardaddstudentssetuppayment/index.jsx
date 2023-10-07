import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import DashboardAddStudentsSetupPaymentColumn from "components/DashboardAddStudentsSetupPaymentColumn";
import DashboardAddStudentsSetupPaymentEmibreaker from "components/DashboardAddStudentsSetupPaymentEmibreaker";

const DashboardaddstudentssetuppaymentPage = () => {
  const table2Data = React.useRef([
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
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("weburl", {
        cell: (info) => (
          <Text className="pb-[-9px] pt-[35px] text-sm text-white-A700">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text className="min-w-[82px] text-sm text-white-A700">S.No</Text>
        ),
      }),
      table2ColumnHelper.accessor("remarks", {
        cell: (info) => (
          <Text className="pb-[-9px] pt-[35px] text-sm text-white-A700">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text className="min-w-[238px] text-sm text-white-A700">Remarks</Text>
        ),
      }),
      table2ColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text className="pb-[-10px] pt-[35px] text-sm text-white-A700">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text className="min-w-[143px] text-sm text-white-A700">Amount</Text>
        ),
      }),
      table2ColumnHelper.accessor("duedateOne", {
        cell: (info) => (
          <Text className="pb-[-9px] pt-[35px] text-sm text-white-A700">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text className="min-w-[89px] text-sm text-white-A700">Due Date</Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="flex flex-col font-montserrat items-center justify-start mx-auto p-[70px] md:px-10 sm:px-5 w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-end justify-start mb-[35px] p-[15px] md:px-5 rounded-[10px] w-[48%] md:w-full">
          <div className="flex flex-col justify-start mb-3 mt-[25px] w-[95%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratMedium24"
            >
              Setup Payment
            </Text>
            <div className="md:h-[562px] sm:h-[684px] h-[726px] ml-1.5 md:ml-[0] mt-[43px] relative w-[92%] md:w-full">
              <DashboardAddStudentsSetupPaymentColumn className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[76%]" />
              <DashboardAddStudentsSetupPaymentEmibreaker className="absolute bottom-[0] flex flex-col md:gap-10 gap-[162px] inset-x-[0] justify-start mx-auto w-[99%]" />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[13px] mt-[25px] w-[99%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratMedium24"
              >
                Grand Total : ₹ 3,99,725
              </Text>
              <Button
                className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[217px] text-base text-center"
                onClick={() =>
                  navigate("/dashboardaddstudentssetuppaymentlinksuccess")
                }
                shape="round"
                color="cyan_800"
                size="lg"
                variant="fill"
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardaddstudentssetuppaymentPage;
