import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[5px]" };
const variants = {
  outline: {
    red_A700_red_900:
      "bg-gradient  border-2 border-solid red_A200_red_500_00_border text-white-A700",
  },
  fill: {
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    gray_900_01: "bg-gray-900_01 text-gray-400",
    gray_900_02: "bg-gray-900_02 text-white-A700",
    cyan_A200: "bg-cyan-A200 text-black-900",
    gray_400: "bg-gray-400 text-gray-900_05",
    black_900: "bg-black-900 text-cyan-A200",
    blue_gray_900_03: "bg-blue_gray-900_03 text-red-A700_01",
    gray_900_04: "bg-gray-900_04 text-white-A700",
    gray_800_03: "bg-gray-800_03 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    red_500_01: "bg-red-500_01 text-white-A700",
    red_A700_16: "bg-red-A700_16 text-red-A700_01",
    green_800: "bg-green-800 text-white-A700",
    cyan_600: "bg-cyan-600 text-white-A700",
    orange_A700: "bg-orange-A700 text-white-A700",
    gray_800_05: "bg-gray-800_05 text-white-A700",
    gray_900_05: "bg-gray-900_05 text-gray-400",
    cyan_800: "bg-cyan-800 text-white-A700",
    red_A700_01: "bg-red-A700_01 text-white-A700",
  },
};
const sizes = {
  xs: "p-1",
  sm: "p-2",
  md: "p-[13px]",
  lg: "p-4",
  xl: "p-[19px]",
  "2xl": "p-[23px] sm:px-5",
  "3xl": "p-[26px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "red_A700_red_900",
    "blue_gray_900_01",
    "blue_gray_900",
    "gray_900_01",
    "gray_900_02",
    "cyan_A200",
    "gray_400",
    "black_900",
    "blue_gray_900_03",
    "gray_900_04",
    "gray_800_03",
    "gray_900",
    "red_500_01",
    "red_A700_16",
    "green_800",
    "cyan_600",
    "orange_A700",
    "gray_800_05",
    "gray_900_05",
    "cyan_800",
    "red_A700_01",
  ]),
};

export { Button };
