import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, ReactTable, Text } from "components";
import Header from "components/Header";
import Sidebar1 from "components/Sidebar1";

const AccountsdebitexpandPage = () => {
  const tableData = React.useRef([
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Salary",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Order Payment",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Salary",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Order Payment",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Salary",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Order Payment",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Salary",
      contactno: "images/img_group204.svg",
    },
    {
      name: "Ramakant Sharma",
      amount: "₹ 1,56,000",
      dateEight: "12 Feb 2023",
      remark: "Order Payment",
      contactno: "images/img_group204.svg",
    },
  ]);
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <Text
            className="pb-3 sm:pl-5 pl-7 pt-[35px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[346px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text
            className="pb-[11px] pt-[35px] text-base text-red-500"
            size="txtMontserratRegular16Red500"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[144px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Amount
          </Text>
        ),
      }),
      tableColumnHelper.accessor("dateEight", {
        cell: (info) => (
          <Text
            className="pb-3 pt-[35px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[159px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Date
          </Text>
        ),
      }),
      tableColumnHelper.accessor("remark", {
        cell: (info) => (
          <Text
            className="pb-[11px] pt-[35px] text-base text-white-A700"
            size="txtMontserratRegular16"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[275px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Remark
          </Text>
        ),
      }),
      tableColumnHelper.accessor("contactno", {
        cell: (info) => (
          <div className="flex flex-row items-end justify-between pt-[38px]">
            <Text
              className="mb-3 mt-[22px] text-base text-white-A700"
              size="txtMontserratRegular16"
            >
              +91 52345 64545
            </Text>
            <div className="bg-gray-900_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[5px]">
              <Img className="h-[21px]" alt="group204" src="info?.getValue()" />
            </div>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[282px] text-base text-white-A700"
            size="txtMontserratSemiBold16"
          >
            Contact No.
          </Text>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowleft.svg"
          alt="arrowleft"
        />
      ),
      label: "Debit",
      href: "/accountsdebitexpandone",
      active: window.location.pathname === "/accountsdebitexpandone",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_rewind_gray_400.svg"
          alt="rewind"
        />
      ),
      label: "Vendors",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_iconparkoutlineorder.svg"
          alt="iconparkoutline"
        />
      ),
      label: "Orders",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_heroiconssolidcollection.svg"
          alt="heroiconssolidc"
        />
      ),
      label: "Expected",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_mdiclockalertoutline.svg"
          alt="mdiclockalertou"
        />
      ),
      label: "Overdue",
    },
  ];

  return (
    <>
      <div className="bg-black-900 flex flex-col font-montserrat items-center justify-start mx-auto pb-[18px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <Header className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-[298px] bg-blue_gray-900_01 flex h-screen md:hidden justify-start overflow-auto rounded-[10px] top-[0]" />
            <div className="bg-gray-900 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[5px] w-full">
              <div className="flex flex-col items-center justify-start mb-[9px] w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                  <Text
                    className="text-white-A700 text-xl"
                    size="txtMontserratSemiBold20"
                  >
                    Debit History
                  </Text>
                  <Img
                    className="common-pointer h-6 md:ml-[0] ml-[33px] w-6"
                    src="images/img_minimize_white_a700.svg"
                    alt="minimize"
                    onClick={() => navigate("/accountsdebit")}
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
                <div className="flex flex-col gap-5 items-center justify-start mt-8 w-[99%] md:w-full">
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                  <div className="md:h-[180px] h-[34px] sm:h-[63px] sm:pl-5 pl-7 relative w-full">
                    <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-center justify-start left-[82%] w-[86%]">
                      <Text
                        className="text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Ramakant Sharma
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[168px] text-base text-red-500"
                        size="txtMontserratRegular16Red500"
                      >
                        ₹ 1,56,000
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[65px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        12 Feb 2023
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[67px] text-base text-white-A700"
                        size="txtMontserratRegular16"
                      >
                        Salary
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[225px] text-base text-white-A700"
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
                      alt="arrowleft_One"
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

export default AccountsdebitexpandPage;
