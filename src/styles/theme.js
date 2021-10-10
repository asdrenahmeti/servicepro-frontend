import { createMuiTheme } from "@material-ui/core/styles";

const colors =  {
    primary: "#F5961F",
    primaryTint: "#F8B662",
    secondary: "#3B3B3B",
    terciary: "#616465" 
  }

const weight = {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800
}

const fonts = {
    inter: `'Inter', sans-serif`,
    openSans: `'Open Sans', sans-serif`
}

const fontSizes = {
  xs: "1.6rem",
  sm: "1.8rem",
  md: "2rem",
  lg: "2.4rem ",
  xl: "4.4rem"
}
 

const Theme = createMuiTheme({
 colors,
  typography: {
    menu: {
      color: colors.secondary,
      fontWeight: weight.semiBold,
      fontFamily: fonts.inter,
      fontSize: fontSizes.sm
    },

    placeholder: {
      color: colors.terciary,
      fontSize: fontSizes.sm,
      fontWeight: weight.regular,
    },

    sectionTitle: {
      color: colors.secondary,
      fontSize: fontSizes.xl,
      fontWeight: weight.bold,
    },

    description: {
      color: colors.terciary,
      fontSize: fontSizes.md,
      fontWeight: weight.regular
    }


  }
});

export default Theme;
