import React from "react";

import { Text } from "components";

const HostelFurnitureReportDamageOneRowellipseeightynine = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-900_01 border-[6px] border-cyan-A200 border-solid h-5 my-0.5 rounded-[50%] w-5"></div>
        <Text
          className="ml-[13px] text-white-A700 text-xl"
          size="txtMontserratMedium20"
        >
          {props?.yestext}
        </Text>
        <div className="bg-blue_gray-900_01 border-2 border-blue_gray-700 border-solid h-5 ml-[49px] my-0.5 rounded-[50%] w-5"></div>
        <Text
          className="ml-3.5 text-white-A700 text-xl"
          size="txtMontserratMedium20"
        >
          {props?.notext}
        </Text>
      </div>
    </>
  );
};

HostelFurnitureReportDamageOneRowellipseeightynine.defaultProps = {
  yestext: "Yes",
  notext: "No",
};

export default HostelFurnitureReportDamageOneRowellipseeightynine;
