import React from "react";

import { Img, Input, SelectBox } from "components";

const selectVendorOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HostelAddFurnitureSelectvendor = (props) => {
  return (
    <>
      <div className={props.className}>
        <SelectBox
          className="!text-white-A700 font-medium font-montserrat leading-[normal] text-base text-left w-full"
          placeholderClassName="!text-white-A700"
          indicator={
            <Img
              className="h-6 mr-[0] w-6"
              src="images/img_arrowleft_white_a700.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="group813"
          options={selectVendorOptionsList}
          isSearchable={false}
          placeholder="Select Vendor"
          shape="round"
          color="gray_900_01"
          size="sm"
          variant="fill"
        />
        <Input
          name="group811"
          placeholder="GSTIN / LLP No. / Prop No."
          className="!placeholder:text-gray-500_03 !text-gray-500_03 font-montserrat leading-[normal] p-0 text-base text-left w-full"
          wrapClassName="mt-[54px] rounded-[5px] w-full"
          color="gray_900_01"
          size="lg"
          variant="fill"
        ></Input>
        <Input
          name="language"
          placeholder="Address "
          className="!placeholder:text-gray-500_03 !text-gray-500_03 font-montserrat leading-[normal] p-0 text-base text-left w-full"
          wrapClassName="mt-[30px] rounded-[5px] w-full"
          color="gray_900_01"
          size="lg"
          variant="fill"
        ></Input>
      </div>
    </>
  );
};

HostelAddFurnitureSelectvendor.defaultProps = {};

export default HostelAddFurnitureSelectvendor;
