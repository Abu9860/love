import React from "react";

import { Button, Img, Text } from "components";

const DashboardAddRoomsFurnitureAddfuniture = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[277px]"
          rightIcon={
            <Img
              className="h-6 ml-[35px]"
              src="images/img_arrowdown_gray_100.svg"
              alt="arrow_down"
            />
          }
          shape="round"
          color="gray_900_01"
          size="sm"
          variant="fill"
        >
          <div className="!text-white-A700 font-montserrat leading-[normal] text-base text-left">
            {props?.selectFurniture}
          </div>
        </Button>
        <Text
          className="bg-gray-900_01 h-[38px] justify-center pl-[21px] pr-[35px] sm:px-5 py-2 rounded-[5px] text-base text-white-A700 w-[105px]"
          size="txtMontserratRegular16"
        >
          {props?.group741}
        </Text>
        <Button
          className="cursor-pointer font-montserrat leading-[normal] min-w-[40px] text-center text-xl"
          shape="round"
          color="cyan_800"
          size="sm"
          variant="fill"
        >
          {props?.furniturelabel}
        </Button>
      </div>
    </>
  );
};

DashboardAddRoomsFurnitureAddfuniture.defaultProps = {
  group741: "114",
  furniturelabel: "+",
};

export default DashboardAddRoomsFurnitureAddfuniture;
