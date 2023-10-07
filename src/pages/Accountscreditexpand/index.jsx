import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, ReactTable, Text } from "components";
import Header from "components/Header";

const AccountscreditexpandPage = () => {
  const table1Data = React.useRef([
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Fees",
      room: "112",
      hostel: "H1",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Fees",
      room: "112",
      hostel: "H1",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Fees",
      room: "112",
      hostel: "H1",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Fees",
      room: "112",
      hostel: "H1",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Fees",
      room: "112",
      hostel: "H1",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Fees",
      room: "112",
      hostel: "H1",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Fees",
      room: "112",
      hostel: "H1",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Fees",
      room: "112",
      hostel: "H1",
      contactno: "images/img_group204.svg",
    },
  ]);
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("name", {
        cell: (info) => (
          <Text
            className="pb-3.5 sm:pl-5 pl-7 pt-[35px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[279px] pl-[5px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Name
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pb-[13px] pt-[35px] text-base text-cyan-A200"
            size="txtMontserratRegular16CyanA200"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[130px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Amount
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("dateEight", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[35px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[129px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Date
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("remark", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[35px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[102px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Remark
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("room", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[35px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[100px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Room
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("hostel", {
        cell: (info) => (
          <Text
            className="pb-3.5 pt-[35px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[103px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Hostel
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("contactno", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between">
            <Text
              className="text-base text-white-A700"
              size="txtMontserratRegular16"
            >
              +91 52345 64545
            </Text>
            <div className="bg-gray-900_01 flex flex-col items-start justify-start mt-[33px] p-[21px] sm:px-5 rounded-[5px]">
              <Img className="h-[21px]" alt="group204" src="info?.getValue()" />
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[378px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Contact No.
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[18px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1662px] mx-auto md:px-5 w-full">
            <div className="bg-gray-900 flex md:flex-1 flex-col items-start justify-start mb-4 py-6 rounded-[10px] w-[18%] md:w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[204px] md:ml-[0] ml-[23px] pr-[35px]"
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
              <Input
                name="group225"
                placeholder="Credit"
                className="font-semibold leading-[normal] p-0 placeholder:text-white-A700 text-left text-lg w-full"
                wrapClassName="flex mt-[21px] w-full"
                prefix={
                  <Img
                    className="h-6 mr-[17px] my-auto"
                    src="images/img_materialsymbolsinhomemodesharp_cyan_a200.svg"
                    alt="material-symbols:in-home-mode-sharp"
                  />
                }
                shape="round"
                color="blue_gray_900_01"
                size="3xl"
                variant="fill"
              ></Input>
              <div className="flex flex-col gap-[51px] items-start justify-start mb-[429px] md:ml-[0] ml-[22px] mt-[25px] w-[43%] md:w-full">
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
                <div className="flex flex-row gap-[17px] items-start justify-start w-[93%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_rewind_gray_400.svg"
                    alt="rewind"
                  />
                  <Text
                    className="text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    Vendors
                  </Text>
                </div>
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
            <div className="bg-gray-900 flex md:flex-1 flex-col items-center justify-start p-[15px] rounded-[5px] w-[78%] md:w-full">
              <div className="flex flex-col items-center justify-start mb-[9px] w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start pb-[52px] w-[97%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtMontserratSemiBold20"
                    >
                      Credit History
                    </Text>
                    <Img
                      className="common-pointer h-6 ml-2.5 md:ml-[0] w-6"
                      src="images/img_minimize_white_a700.svg"
                      alt="minimize"
                      onClick={() => navigate("/accountscredit")}
                    />
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[170px] md:ml-[0] ml-[583px] md:mt-0 mt-[7px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-[11px]"
                          src="images/img_vscodeiconsfiletypeexcel2.svg"
                          alt="vscode-icons:file-type-excel2"
                        />
                      }
                      shape="round"
                      color="green_800"
                      size="sm"
                      variant="fill"
                    >
                      <div className="font-medium leading-[normal] text-base text-left">
                        Export Data
                      </div>
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[67px] text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      Entries /Page
                    </Text>
                    <Button
                      className="cursor-pointer flex items-center justify-center mb-3.5 min-w-[72px] ml-2 md:ml-[0]"
                      rightIcon={
                        <Img
                          className="h-6 ml-4"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      color="gray_900_01"
                      size="xs"
                      variant="fill"
                    >
                      <div className="!text-white-A700 leading-[normal] text-base text-left">
                        10
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={table1Columns}
                      data={table1Data.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                  <div className="md:h-[260px] h-[38px] sm:h-[63px] sm:pl-5 pl-7 relative w-full">
                    <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-center justify-start left-[74%] w-[78%]">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[102px] text-base text-cyan-A200"
                        size="txtMontserratRegular16CyanA200"
                      >
                        ₹ 1,56,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[51px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        12 Feb 2023
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Fees
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[65px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        112
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[79px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        H1
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[84px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        +91 52345 64545
                      </Text>
                    </div>
                    <div className="absolute bg-gray-900_01 bottom-[0] flex flex-col items-start justify-start p-[21px] sm:px-5 right-[0] rounded-[5px] w-[5%]">
                      <Img
                        className="h-[21px]"
                        src="images/img_group204_white_a700.svg"
                        alt="group204_Eight"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-9 w-[54%] md:w-full">
                  <div className="flex flex-row gap-[7px] items-center justify-start w-[11%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowleft_white_a700_20x20.svg"
                      alt="arrowleft"
                    />
                    <Text
                      className="text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      Prev.
                    </Text>
                  </div>
                  <Button
                    className="!text-white-A700 cursor-pointer h-[35px] leading-[normal] ml-2.5 md:ml-[0] text-base text-center w-[35px]"
                    shape="round"
                    color="gray_900_01"
                    size="sm"
                    variant="fill"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer h-[35px] leading-[normal] md:ml-[0] ml-[5px] text-base text-center w-[35px]"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer h-[35px] leading-[normal] md:ml-[0] ml-[5px] text-base text-center w-[35px]"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    3
                  </Button>
                  <Button
                    className="cursor-pointer h-[35px] leading-[normal] md:ml-[0] ml-[5px] text-base text-center w-[35px]"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    4
                  </Button>
                  <Button
                    className="cursor-pointer h-[35px] leading-[normal] md:ml-[0] ml-[5px] text-base text-center w-[35px]"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    5
                  </Button>
                  <Text
                    className="bg-gray-900 h-[35px] justify-center md:ml-[0] ml-[5px] pb-0.5 pl-1 pr-[11px] pt-3 rounded-[5px] text-base text-white-A700 w-[125px]"
                    size="txtMontserratRegular16"
                  >
                    . . . . . . . . . . . . . . .
                  </Text>
                  <div className="flex flex-row items-center justify-center ml-1 md:ml-[0] w-[24%] md:w-full">
                    <Button
                      className="cursor-pointer h-[35px] leading-[normal] text-base text-center w-[35px]"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    >
                      97
                    </Button>
                    <Button
                      className="cursor-pointer h-[35px] leading-[normal] ml-[5px] text-base text-center w-[35px]"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    >
                      98
                    </Button>
                    <Button
                      className="cursor-pointer h-[35px] leading-[normal] ml-[5px] text-base text-center w-[35px]"
                      shape="round"
                      color="gray_900"
                      size="sm"
                      variant="fill"
                    >
                      99
                    </Button>
                    <Text
                      className="bg-gray-900 flex h-[35px] items-center justify-center ml-[5px] rounded-[5px] text-base text-center text-white-A700 w-[35px]"
                      size="txtMontserratRegular16"
                    >
                      100
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-between md:ml-[0] ml-[22px] w-[11%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      Next
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountscreditexpandPage;
