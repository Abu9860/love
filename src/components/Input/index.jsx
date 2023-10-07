import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    gray_900_01: "bg-gray-900_01 text-gray-400",
    gray_900_03: "bg-gray-900_03",
  },
};
const shapes = { round: "rounded-[10px]" };
const sizes = {
  xs: "pb-2 pt-[9px] px-2",
  sm: "pb-[3px] pt-2.5 px-[3px]",
  md: "p-3",
  lg: "pb-[15px] pt-4 px-[15px]",
  xl: "pb-[18px] pt-[19px] px-[18px]",
  "2xl": "pl-4 sm:pr-5 pr-[21px] py-[21px]",
  "3xl": "pb-[22px] pt-[26px] sm:px-5 px-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_900_01", "gray_900_01", "gray_900_03"]),
};

export { Input };
