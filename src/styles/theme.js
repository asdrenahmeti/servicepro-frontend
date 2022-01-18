import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "#F5961F",
  primaryTint: "#F8B662",
  secondary: "#3B3B3B",
  terciary: "#616465",
  light_bg:"#f9f9f9",
  border_color:"#C4C4C4",
};

const weight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

const fonts = {
  inter: `'Inter', sans-serif`,
  openSans: `'Open Sans', sans-serif`,
};

const fontSizes = {
  xs: "1.6rem",
  sm: "1.8rem",
  md: "2rem",
  lg: "2.4rem ",
  xl: "4.4rem",
};

const Theme = createMuiTheme({
  colors,
  fonts,
  fontSizes,
  typography: {
    menu: {
      color: colors.secondary,
      fontWeight: weight.semiBold,
      fontFamily: fonts.inter,
      fontSize: fontSizes.sm,
    },
    placeholder: {
      color: colors.terciary,
      fontSize: fontSizes.sm,
      fontWeight: weight.regular,
      fontFamily:fonts.openSans
    },
    sectionTitle: {
      color: colors.secondary,
      fontSize: fontSizes.xl,
      fontWeight: weight.semiBold,
      fontFamily: fonts.inter,
    },
    description: {
      color: colors.terciary,
      fontSize: fontSizes.md,
      fontWeight: weight.regular,
      fontFamily:fonts.openSans
    },
    cardTitle: (size) => {
      return {
        fontFamily: fonts.inter,
        fontSize: fontSizes[size],
        fontWeight: "600",
        color: colors.secondary,
        letterSpacing: "-0.035em",
        fontStyle: "normal",
      };
    },
    cardData: (size) => {
      return {
        fontFamily: fonts.openSans,
        fontSize: fontSizes[size],
        fontWeight: "400",
        color: colors.terciary,
        letterSpacing: "-0.035em",
        fontStyle: "normal",
      };
    },
    fontSizes: { ...fontSizes },
  },
});

export default Theme;
