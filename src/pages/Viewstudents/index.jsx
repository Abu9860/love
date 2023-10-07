import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ViewstudentsPage = () => {
  const [groupfiftysixvalue, setGroupfiftysixvalue] = React.useState("");

  return (
    <>
      <div className="flex flex-col font-montserrat items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[748px] w-full">
        <div className="bg-blue_gray-900_01 flex flex-col items-start justify-end p-3 md:px-5 w-full">
          <div className="flex flex-col gap-[19px] justify-start mb-[3px] mt-8 w-[92%] md:w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start ml-3.5 md:ml-[0] w-[54%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_radixiconscross1.svg"
                alt="radixiconscross"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtMontserratMedium32"
              >
                Students
              </Text>
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between w-full">
                <Input
                  name="groupFiftySix"
                  placeholder="Search ..."
                  value={groupfiftysixvalue}
                  onChange={(e) => setGroupfiftysixvalue(e)}
                  className="leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                  wrapClassName="flex sm:flex-1 sm:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-6 mr-[23px] my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#b0b0b0"
                      className="cursor-pointer h-6 my-auto"
                      onClick={() => setGroupfiftysixvalue("")}
                      style={{
                        visibility:
                          groupfiftysixvalue?.length <= 0
                            ? "hidden"
                            : "visible",
                      }}
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  }
                  shape="round"
                  color="gray_900_01"
                  size="md"
                  variant="fill"
                ></Input>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[124px] rounded-[10px]"
                  leftIcon={
                    <Img
                      className="h-8 mr-3.5"
                      src="images/img_phfunnelsimplebold.svg"
                      alt="ph:funnel-simple-bold"
                    />
                  }
                  color="gray_800_05"
                  size="sm"
                  variant="fill"
                >
                  <div className="leading-[normal] text-base text-left">
                    Filter
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end pt-3 px-3 w-full">
              <List
                className="flex flex-col gap-5 items-center w-[99%]"
                orientation="vertical"
              >
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="bg-gray-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-start my-0 p-[15px] rounded-[10px] w-full">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_ellipse31.png"
                    alt="ellipseThirtyOne"
                  />
                  <Text
                    className="ml-3 md:ml-[0] text-base text-white-A700"
                    size="txtMontserratRegular16"
                  >
                    Abhinav Srivastva
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[141px] w-6"
                    src="images/img_ribuilding2line.svg"
                    alt="ribuilding2line"
                  />
                  <Text
                    className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    H1
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[92px] w-6"
                    src="images/img_materialsymbol_gray_400.svg"
                    alt="materialsymbol"
                  />
                  <Text
                    className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                    size="txtMontserratMedium18"
                  >
                    112
                  </Text>
                  <Img
                    className="h-6 md:ml-[0] ml-[234px] w-6"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
                <div className="flex md:h-[286px] h-[55px] sm:h-[60px] justify-end my-0 relative w-full">
                  <div className="bg-gray-900_01 h-[60px] mt-auto mx-auto rounded-[10px] w-full"></div>
                  <div className="absolute bottom-[18%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-[97%]">
                    <Img
                      className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                      src="images/img_ellipse31.png"
                      alt="ellipseThirtyOne"
                    />
                    <Text
                      className="ml-3 md:ml-[0] text-base text-white-A700"
                      size="txtMontserratRegular16"
                    >
                      Abhinav Srivastva
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[141px] w-6"
                      src="images/img_ribuilding2line.svg"
                      alt="ribuilding2line"
                    />
                    <Text
                      className="md:ml-[0] ml-[17px] text-gray-400 text-lg"
                      size="txtMontserratMedium18"
                    >
                      H1
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[92px] w-6"
                      src="images/img_materialsymbol_gray_400.svg"
                      alt="materialsymbol"
                    />
                    <Text
                      className="md:ml-[0] ml-[18px] text-gray-400 text-lg"
                      size="txtMontserratMedium18"
                    >
                      112
                    </Text>
                    <Img
                      className="h-6 md:ml-[0] ml-[234px] w-6"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewstudentsPage;
