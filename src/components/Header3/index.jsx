import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header3 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-1.5 items-center justify-center mb-8 md:ml-[0] ml-[52px] md:mt-0 mt-[67px] w-[6%] md:w-full">
          <div className="bg-cyan-A200 h-6 my-0.5 rounded-[50%] w-6"></div>
          <Text
            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtMontserratSemiBold24"
          >
            HMS
          </Text>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start md:ml-[0] ml-[184px] md:mt-0 mt-[49px] w-[14%] md:w-full"
          style={{ backgroundImage: "url('images/img_group191.svg')" }}
        >
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[81px] items-center justify-start p-[23px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group192.png')" }}
          >
            <div className="flex flex-row gap-2.5 items-center justify-center mb-[9px] w-[82%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_materialsymbol.svg"
                alt="materialsymbol"
              />
              <Text
                className="text-white-A700 text-xl"
                size="txtMontserratMedium20"
              >
                Dashboard
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-8 min-w-[106px] md:ml-[0] ml-[27px] md:mt-0 mt-[72px]"
          onClick={() => navigate("/rooms")}
          leftIcon={
            <Img
              className="h-6 mr-2.5 my-px"
              src="images/img_fluentdevicemeetingroom20regular.svg"
              alt="fluent:device-meeting-room-20-regular"
            />
          }
        >
          <div className="font-medium font-montserrat leading-[normal] text-gray-400 text-left text-xl">
            Rooms
          </div>
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-8 min-w-[154px] md:ml-[0] ml-[66px] md:mt-0 mt-[72px]"
          onClick={() => navigate("/attendance")}
          leftIcon={
            <Img
              className="h-6 mr-[9px] my-px"
              src="images/img_materialsymbolscopresentoutlinesharp.svg"
              alt="material-symbols:co-present-outline-sharp"
            />
          }
        >
          <div className="font-medium font-montserrat leading-[normal] text-gray-400 text-left text-xl">
            Attendance
          </div>
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-8 min-w-[130px] md:ml-[0] ml-[66px] md:mt-0 mt-[72px]"
          onClick={() => navigate("/accounts")}
          leftIcon={
            <Img
              className="h-6 mr-[9px] my-px"
              src="images/img_materialsymbolsaccountbalanceoutlinerounded.svg"
              alt="material-symbols:account-balance-outline-rounded"
            />
          }
        >
          <div className="font-medium font-montserrat leading-[normal] text-gray-400 text-left text-xl">
            Accounts
          </div>
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-[33px] min-w-[168px] md:ml-[0] ml-[66px] md:mt-0 mt-[71px]"
          onClick={() => navigate("/maintenance")}
          leftIcon={
            <Img
              className="h-6 mt-px mr-2.5"
              src="images/img_materialsymbolsaccountbalanceoutlinerounded_gray_400.svg"
              alt="material-symbols:account-balance-outline-rounded"
            />
          }
        >
          <div className="font-medium font-montserrat leading-[normal] text-gray-400 text-left text-xl">
            Maintenance
          </div>
        </Button>
        <Button
          className="flex h-[62px] items-center justify-center md:ml-[0] ml-[89px] md:mt-0 my-[34px] rounded-[50%] w-[62px]"
          shape="circle"
          color="blue_gray_900"
          size="lg"
          variant="fill"
        >
          <Img src="images/img_calendar.svg" alt="calendar" />
        </Button>
        <Button
          className="flex h-[62px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[34px] rounded-[50%] w-[62px]"
          shape="circle"
          color="blue_gray_900"
          size="xl"
          variant="fill"
        >
          <Img src="images/img_notification.svg" alt="notification" />
        </Button>
        <Button
          className="flex h-[62px] items-center justify-center ml-10 md:ml-[0] mr-[51px] md:mt-0 my-[34px] rounded-[50%] w-[62px]"
          shape="circle"
          color="blue_gray_900"
          size="md"
          variant="fill"
        >
          <Img
            className="h-10"
            src="images/img_typcnuser.svg"
            alt="typcnuser"
          />
        </Button>
      </header>
    </>
  );
};

Header3.defaultProps = {};

export default Header3;
