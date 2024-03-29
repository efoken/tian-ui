import { createVars } from "./create-vars"
import { css } from "./css"

export const [globalVars, globalStyles] = createVars({
  none: "0px",
  xxs: "0.125rem",
  xs: "0.25rem",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.625rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.25rem",
  "4xl": "1.5rem",
  "5xl": "2rem",
  "6xl": "2.5rem",
  "7xl": "3rem",
  "8xl": "4rem",
  "9xl": "5rem",
  "10xl": "6rem",
  "11xl": "8rem",

  text: {
    heading: {
      "2xl": {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "4.5rem",
        letterSpacing: "-2%",
        lineHeight: "1.25",
      },
      xl: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "3.75rem",
        letterSpacing: "-2%",
        lineHeight: "1.2",
      },
      lg: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "3rem",
        letterSpacing: "-2%",
        lineHeight: "1.25",
      },
      md: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "2.25rem",
        letterSpacing: "-2%",
        lineHeight: "1.22222",
      },
      sm: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "1.875rem",
        letterSpacing: 0,
        lineHeight: "1.26667",
      },
      xs: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "1.5rem",
        letterSpacing: 0,
        lineHeight: "1.33333",
      },
    },
    paragraph: {
      xl: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "1.25rem",
        letterSpacing: 0,
        lineHeight: "1.5",
      },
      lg: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "1.125rem",
        letterSpacing: 0,
        lineHeight: "1.55556",
      },
      md: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "1rem",
        letterSpacing: 0,
        lineHeight: "1.5",
      },
      sm: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.875rem",
        letterSpacing: 0,
        lineHeight: "1.42857",
      },
      xs: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.75rem",
        letterSpacing: 0,
        lineHeight: "1.5",
      },
    },
    button: {
      lg: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "1rem",
        fontWeight: 650,
        letterSpacing: 0,
        lineHeight: "normal",
      },
      md: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "1rem",
        fontWeight: 650,
        letterSpacing: 0,
        lineHeight: "normal",
      },
      sm: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.875rem",
        fontWeight: 650,
        letterSpacing: 0,
        lineHeight: "normal",
      },
    },
    input: {
      lg: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "1rem",
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: "normal",
      },
      md: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.875rem",
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: "normal",
      },
      sm: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: "normal",
      },
    },
  },

  color: {
    black: "#000",
    white: "#fff",
    neutral: {
      0: "initial",
      25: "#f5f6f7",
      50: "#eeeff0",
      100: "#dcdee2",
      200: "#c9cdd2",
      300: "#a8adb6",
      400: "#8f95a1",
      500: "#6f7786",
      600: "#525c6c",
      700: "#3e4859",
      800: "#2b3444",
      900: "#171d29",
      950: "#0b0d12",
    },
    brand: {
      25: "#f5f5ff",
      50: "#ededff",
      100: "#dbdbff",
      200: "#c6c7ff",
      300: "#a4a4ff",
      400: "#8788ff",
      500: "#6061ff",
      600: "#4546d7",
      700: "#3535af",
      800: "#252681",
      900: "#16164c",
    },
    success: {
      25: "#e2fceb",
      50: "#c9fbda",
      100: "#82f5aa",
      200: "#48e780",
      300: "#21c65a",
      400: "#16ab4a",
      500: "#0d8939",
      600: "#096a2b",
      700: "#075322",
      800: "#053c18",
      900: "#04230f",
    },
    error: {
      25: "#fdf3f4",
      50: "#fdebed",
      100: "#fad4d8",
      200: "#f7bec4",
      300: "#f2919b",
      400: "#ed6B79",
      500: "#e4263B",
      600: "#b51526",
      700: "#90101e",
      800: "#6b0c17",
      900: "#3f070d",
    },
    warning: {
      25: "#fef5ec",
      50: "#fdecd9",
      100: "#fbd8b3",
      200: "#f9c287",
      300: "#f59632",
      400: "#e67700",
      500: "#b85e00",
      600: "#8e4900",
      700: "#703900",
      800: "#512900",
      900: "#2f1800",
    },
  },

  bg: {
    primary: "var(--color-white)",
    secondary: "var(--color-neutral-25)",
    tertiary: "var(--color-neutral-50)",
    solid: "var(--color-neutral-50)",
    neutral: {
      primary: "var(--color-white)",
      secondary: "var(--color-neutral-50)",
      secondaryHover: "var(--color-neutral-100)",
      secondaryActive: "var(--color-neutral-200)",
      tertiary: "var(--color-neutral-100)",
      tertiaryHover: "var(--color-neutral-200)",
      tertiaryActive: "var(--color-neutral-300)",
      solid: "var(--color-neutral-500)",
      solidHover: "var(--color-neutral-600)",
      solidActive: "var(--color-neutral-700)",
    },
    brand: {
      primary: "var(--color-brand-25)",
      secondary: "var(--color-brand-50)",
      secondaryHover: "var(--color-brand-100)",
      secondaryActive: "var(--color-brand-200)",
      solid: "var(--color-brand-500)",
      solidHover: "var(--color-brand-600)",
      solidActive: "var(--color-brand-700)",
    },
    success: {
      primary: "var(--color-success-25)",
      secondary: "var(--color-success-50)",
      secondaryHover: "var(--color-success-100)",
      secondaryActive: "var(--color-success-200)",
      solid: "var(--color-success-500)",
      solidHover: "var(--color-success-600)",
      solidActive: "var(--color-success-700)",
    },
    warning: {
      primary: "var(--color-warning-25)",
      secondary: "var(--color-warning-50)",
      secondaryHover: "var(--color-warning-100)",
      secondaryActive: "var(--color-warning-200)",
      solid: "var(--color-warning-500)",
      solidHover: "var(--color-warning-600)",
      solidActive: "var(--color-warning-700)",
    },
    error: {
      primary: "var(--color-error-25)",
      secondary: "var(--color-error-50)",
      secondaryHover: "var(--color-error-100)",
      secondaryActive: "var(--color-error-200)",
      solid: "var(--color-error-500)",
      solidHover: "var(--color-error-600)",
      solidActive: "var(--color-error-700)",
    },
  },

  fg: {
    primary: "var(--color-neutral-950)",
    secondary: "var(--color-neutral-700)",
    tertiary: "var(--color-neutral-500)",
    quaternary: "var(--color-neutral-400)",
    white: "var(--color-white)",
    neutral: {
      primary: "var(--color-neutral-900)",
      secondary: "var(--color-neutral-700)",
      secondaryHover: "var(--color-neutral-800)",
      secondaryActive: "var(--color-neutral-900)",
      tertiary: "var(--color-neutral-500)",
      tertiaryHover: "var(--color-neutral-600)",
      tertiaryActive: "var(--color-neutral-700)",
      quaternary: "var(--color-neutral-400)",
      solid: "var(--color-white)",
    },
    brand: {
      primary: "var(--color-brand-900)",
      secondary: "var(--color-brand-700)",
      secondaryHover: "var(--color-brand-800)",
      secondaryActive: "var(--color-brand-900)",
      tertiary: "var(--color-brand-500)",
      tertiaryHover: "var(--color-brand-600)",
      tertiaryActive: "var(--color-brand-700)",
      quaternary: "var(--color-brand-400)",
      solid: "var(--color-white)",
    },
    success: {
      primary: "var(--color-success-900)",
      secondary: "var(--color-success-700)",
      secondaryHover: "var(--color-success-800)",
      secondaryActive: "var(--color-success-900)",
      tertiary: "var(--color-success-500)",
      tertiaryHover: "var(--color-success-600)",
      tertiaryActive: "var(--color-success-700)",
      quaternary: "var(--color-success-400)",
      solid: "var(--color-white)",
    },
    warning: {
      primary: "var(--color-warning-900)",
      secondary: "var(--color-warning-700)",
      secondaryHover: "var(--color-warning-800)",
      secondaryActive: "var(--color-warning-900)",
      tertiary: "var(--color-warning-500)",
      tertiaryHover: "var(--color-warning-600)",
      tertiaryActive: "var(--color-warning-700)",
      quaternary: "var(--color-warning-400)",
      solid: "var(--color-white)",
    },
    error: {
      primary: "var(--color-error-900)",
      secondary: "var(--color-error-700)",
      secondaryHover: "var(--color-error-800)",
      secondaryActive: "var(--color-error-900)",
      tertiary: "var(--color-error-500)",
      tertiaryHover: "var(--color-error-600)",
      tertiaryActive: "var(--color-error-700)",
      quaternary: "var(--color-error-400)",
      solid: "var(--color-white)",
    },
  },

  border: {
    primary: "var(--color-neutral-200)",
    secondary: "var(--color-neutral-100)",
    tertiary: "var(--color-neutral-50)",
    neutral: {
      primary: "var(--color-neutral-200)",
      secondary: "var(--color-neutral-100)",
      tertiary: "var(--color-neutral-50)",
      solid: "var(--color-neutral-600)",
    },
    brand: {
      primary: "var(--color-brand-200)",
      secondary: "var(--color-brand-100)",
      tertiary: "var(--color-brand-50)",
      solid: "var(--color-brand-600)",
    },
    success: {
      primary: "var(--color-success-200)",
      secondary: "var(--color-success-100)",
      tertiary: "var(--color-success-50)",
      solid: "var(--color-success-600)",
    },
    warning: {
      primary: "var(--color-warning-200)",
      secondary: "var(--color-warning-100)",
      tertiary: "var(--color-warning-50)",
      solid: "var(--color-warning-600)",
    },
    error: {
      primary: "var(--color-error-200)",
      secondary: "var(--color-error-100)",
      tertiary: "var(--color-error-50)",
      solid: "var(--color-error-600)",
    },
  },
})

const [, darkTheme] = createVars({
  color: {
    neutral: {
      0: "#0b0d12",
      25: "#0f131b",
      50: "#131923",
      100: "#1f2735",
      200: "#2a3343",
      300: "#3f495a",
      400: "#535c6d",
      500: "#6f7786",
      600: "#8f95a1",
      700: "#aaafb8",
      800: "#c8cbd1",
      900: "#e8e9ec",
      950: "initial",
    },
    brand: {
      25: "#0d0e2d",
      50: "#131342",
      100: "#1c1d63",
      200: "#252680",
      300: "#3636b2",
      400: "#4546d7",
      500: "#6061ff",
      600: "#8788ff",
      700: "#a6a6ff",
      800: "#c6c6ff",
      900: "#e7e7ff",
    },
    success: {
      25: "#031509",
      50: "#031e0d",
      100: "#042e13",
      200: "#053c18",
      300: "#075522",
      400: "#096a2b",
      500: "#0e8939",
      600: "#16ab4a",
      700: "#22c85c",
      800: "#48e67f",
      900: "#b3f9cb",
    },
    error: {
      25: "#2a0509",
      50: "#37060c",
      100: "#520911",
      200: "#690c16",
      300: "#93111f",
      400: "#b51526",
      500: "#e5263b",
      600: "#ed6b7a",
      700: "#f2949f",
      800: "#f7bcc3",
      900: "#fce3e6",
    },
    warning: {
      25: "#1e0f00",
      50: "#271400",
      100: "#3e2000",
      200: "#502900",
      300: "#723b00",
      400: "#8f4900",
      500: "#b85f00",
      600: "#e67700",
      700: "#f69936",
      800: "#f9c084",
      900: "#fde5cd",
    },
  },

  bg: {
    primary: "var(--color-neutral-0)",
    secondary: "var(--color-neutral-25)",
    tertiary: "var(--color-neutral-50)",
    solid: "var(--color-neutral-0)",
    neutral: {
      primary: "var(--color-neutral-25)",
      secondary: "var(--color-neutral-50)",
      secondaryHover: "var(--color-neutral-100)",
      secondaryActive: "var(--color-neutral-200)",
      tertiary: "var(--color-neutral-100)",
      tertiaryHover: "var(--color-neutral-200)",
      tertiaryActive: "var(--color-neutral-300)",
      solid: "var(--color-neutral-500)",
      solidHover: "var(--color-neutral-600)",
      solidActive: "var(--color-neutral-700)",
    },
    brand: {
      primary: "var(--color-brand-25)",
      secondary: "var(--color-brand-50)",
      secondaryHover: "var(--color-brand-100)",
      secondaryActive: "var(--color-brand-200)",
      solid: "var(--color-brand-500)",
      solidHover: "var(--color-brand-600)",
      solidActive: "var(--color-brand-700)",
    },
    success: {
      primary: "var(--color-success-25)",
      secondary: "var(--color-success-50)",
      secondaryHover: "var(--color-success-100)",
      secondaryActive: "var(--color-success-200)",
      solid: "var(--color-success-500)",
      solidHover: "var(--color-success-600)",
      solidActive: "var(--color-success-700)",
    },
    warning: {
      primary: "var(--color-warning-25)",
      secondary: "var(--color-warning-50)",
      secondaryHover: "var(--color-warning-100)",
      secondaryActive: "var(--color-warning-200)",
      solid: "var(--color-warning-500)",
      solidHover: "var(--color-warning-600)",
      solidActive: "var(--color-warning-700)",
    },
    error: {
      primary: "var(--color-error-25)",
      secondary: "var(--color-error-50)",
      secondaryHover: "var(--color-error-100)",
      secondaryActive: "var(--color-error-200)",
      solid: "var(--color-error-500)",
      solidHover: "var(--color-error-600)",
      solidActive: "var(--color-error-700)",
    },
  },

  fg: {
    primary: "var(--color-white)",
    secondary: "var(--color-neutral-700)",
    tertiary: "var(--color-neutral-500)",
    quaternary: "var(--color-neutral-400)",
    white: "var(--color-white)",
    neutral: {
      primary: "var(--color-neutral-900)",
      secondary: "var(--color-neutral-700)",
      secondaryHover: "var(--color-neutral-800)",
      secondaryActive: "var(--color-neutral-900)",
      tertiary: "var(--color-neutral-500)",
      tertiaryHover: "var(--color-neutral-600)",
      tertiaryActive: "var(--color-neutral-700)",
      quaternary: "var(--color-neutral-400)",
      solid: "var(--color-white)",
    },
    brand: {
      primary: "var(--color-brand-900)",
      secondary: "var(--color-brand-700)",
      secondaryHover: "var(--color-brand-800)",
      secondaryActive: "var(--color-brand-900)",
      tertiary: "var(--color-brand-500)",
      tertiaryHover: "var(--color-brand-600)",
      tertiaryActive: "var(--color-brand-700)",
      quaternary: "var(--color-brand-400)",
      solid: "var(--color-white)",
    },
    success: {
      primary: "var(--color-success-900)",
      secondary: "var(--color-success-700)",
      secondaryHover: "var(--color-success-800)",
      secondaryActive: "var(--color-success-900)",
      tertiary: "var(--color-success-500)",
      tertiaryHover: "var(--color-success-600)",
      tertiaryActive: "var(--color-success-700)",
      quaternary: "var(--color-success-400)",
      solid: "var(--color-white)",
    },
    warning: {
      primary: "var(--color-warning-900)",
      secondary: "var(--color-warning-700)",
      secondaryHover: "var(--color-warning-800)",
      secondaryActive: "var(--color-warning-900)",
      tertiary: "var(--color-warning-500)",
      tertiaryHover: "var(--color-warning-600)",
      tertiaryActive: "var(--color-warning-700)",
      quaternary: "var(--color-warning-400)",
      solid: "var(--color-white)",
    },
    error: {
      primary: "var(--color-error-900)",
      secondary: "var(--color-error-700)",
      secondaryHover: "var(--color-error-800)",
      secondaryActive: "var(--color-error-900)",
      tertiary: "var(--color-error-500)",
      tertiaryHover: "var(--color-error-600)",
      tertiaryActive: "var(--color-error-700)",
      quaternary: "var(--color-error-400)",
      solid: "var(--color-white)",
    },
  },

  border: {
    primary: "var(--color-neutral-200)",
    secondary: "var(--color-neutral-100)",
    tertiary: "var(--color-neutral-50)",
    neutral: {
      primary: "var(--color-neutral-200)",
      secondary: "var(--color-neutral-100)",
      tertiary: "var(--color-neutral-50)",
      solid: "var(--color-neutral-600)",
    },
    brand: {
      primary: "var(--color-brand-200)",
      secondary: "var(--color-brand-100)",
      tertiary: "var(--color-brand-50)",
      solid: "var(--color-brand-600)",
    },
    success: {
      primary: "var(--color-success-200)",
      secondary: "var(--color-success-100)",
      tertiary: "var(--color-success-50)",
      solid: "var(--color-success-600)",
    },
    warning: {
      primary: "var(--color-warning-200)",
      secondary: "var(--color-warning-100)",
      tertiary: "var(--color-warning-50)",
      solid: "var(--color-warning-600)",
    },
    error: {
      primary: "var(--color-error-200)",
      secondary: "var(--color-error-100)",
      tertiary: "var(--color-error-50)",
      solid: "var(--color-error-600)",
    },
  },
})

export const globalTokens = css(globalStyles, {
  "@media (prefers-color-scheme: dark)": darkTheme,
})

export const globalReset = css({
  ":host": {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
  },

  "*, ::before, ::after": {
    borderStyle: "solid",
    borderWidth: 0,
    boxSizing: "border-box",
    wordWrap: "break-word",
  },

  ":where(button)": {
    font: "inherit",
  },
})
