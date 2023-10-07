import React from "react";

const sizeClasses = {
  txtMontserratMedium20: "font-medium font-montserrat",
  txtMontserratMedium16YellowA400: "font-medium font-montserrat",
  txtMontserratMedium64: "font-medium font-montserrat",
  txtMontserratMedium20YellowA400: "font-medium font-montserrat",
  txtMontserratMedium24: "font-medium font-montserrat",
  txtMontserratSemiBold24CyanA200: "font-montserrat font-semibold",
  txtMontserratMedium20Gray400: "font-medium font-montserrat",
  txtMontserratMedium16WhiteA700: "font-medium font-montserrat",
  txtMontserratSemiBold32: "font-montserrat font-semibold",
  txtMontserratRegular20YellowA400: "font-montserrat font-normal",
  txtMontserratMedium20CyanA200: "font-medium font-montserrat",
  txtMontserratRegular16Gray40002: "font-montserrat font-normal",
  txtMontserratRegular16Red500: "font-montserrat font-normal",
  txtMontserratMedium32: "font-medium font-montserrat",
  txtMontserratSemiBold20YellowA400: "font-montserrat font-semibold",
  txtMontserratMedium36: "font-medium font-montserrat",
  txtMontserratRegular16Bluegray400: "font-montserrat font-normal",
  txtMontserratRegular20Gray400: "font-montserrat font-normal",
  txtMontserratRegular20Red50001: "font-montserrat font-normal",
  txtMontserratRegular16Gray500: "font-montserrat font-normal",
  txtMontserratRegular20CyanA200: "font-montserrat font-normal",
  txtMontserratMedium20Gray100: "font-medium font-montserrat",
  txtMontserratMedium14WhiteA700: "font-medium font-montserrat",
  txtMontserratMedium24PurpleA400: "font-medium font-montserrat",
  txtMontserratRegular14WhiteA700: "font-montserrat font-normal",
  txtMontserratSemiBold32YellowA400: "font-montserrat font-semibold",
  txtMontserratMedium48: "font-medium font-montserrat",
  txtMontserratSemiBold18: "font-montserrat font-semibold",
  txtMontserratSemiBold16: "font-montserrat font-semibold",
  txtMontserratRegular20: "font-montserrat font-normal",
  txtMontserratRegular16CyanA200: "font-montserrat font-normal",
  txtMontserratRegular18: "font-montserrat font-normal",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtMontserratMedium20PurpleA400: "font-medium font-montserrat",
  txtMontserratRegular24WhiteA700: "font-montserrat font-normal",
  txtMontserratSemiBold24PurpleA400: "font-montserrat font-semibold",
  txtMontserratMedium20DeeporangeA700: "font-medium font-montserrat",
  txtMontserratSemiBold24YellowA400: "font-montserrat font-semibold",
  txtMontserratMedium12: "font-medium font-montserrat",
  txtMontserratSemiBold32CyanA200: "font-montserrat font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtMontserratRegular16Bluegray100: "font-montserrat font-normal",
  txtMontserratMedium24CyanA200: "font-medium font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratMedium18: "font-medium font-montserrat",
  txtMontserratRegular16Red50001: "font-montserrat font-normal",
  txtMontserratRegular16YellowA400: "font-montserrat font-normal",
  txtMontserratSemiBold20CyanA200: "font-montserrat font-semibold",
  txtMontserratRegular24Gray500: "font-montserrat font-normal",
  txtMontserratSemiBold24: "font-montserrat font-semibold",
  txtMontserratSemiBold20: "font-montserrat font-semibold",
  txtMontserratMedium24RedA70002: "font-medium font-montserrat",
  txtMontserratMedium24YellowA400: "font-medium font-montserrat",
  txtMontserratMedium24Gray400: "font-medium font-montserrat",
  txtMontserratRegular16Gray400: "font-montserrat font-normal",
  txtMontserratRegular18Gray400: "font-montserrat font-normal",
  txtMontserratRegular14Gray400: "font-montserrat font-normal",
  txtMontserratRegular24: "font-montserrat font-normal",
  txtMontserratSemiBold20PurpleA400: "font-montserrat font-semibold",
  txtMontserratLight14: "font-light font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
