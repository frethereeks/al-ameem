import { ThemeConfig } from "antd";

const THEME_COLOR = {
    primary: "#382a33",
    accentColor: "#777",
    "light-primary": "#382a3335",
    "lighter-primary": "#382a3315",
    secondary: "#ee791d",
    "light-secondary": "#ffe8ca",
    background: "#fcf9f6",
    // text: "#b8a8a8",
    text: "#584455",
}

const fontFamily = {
    eugusto: "var(--eugusto)",
    urbanist: "var(--urbanist)",
    inspiration: "var(--inspiration)",
}

export const appThemeConfig: ThemeConfig = {
    cssVar: true,
    token: {
        fontFamily: fontFamily.inspiration,
        colorPrimary: THEME_COLOR.primary,
        colorLinkHover: THEME_COLOR.accentColor,
        colorLink: THEME_COLOR.accentColor,
    },
    components: {
        Layout: {
            bodyBg: THEME_COLOR.background,
            siderBg: THEME_COLOR.text,
            headerBg: THEME_COLOR["light-secondary"],
            screenXS: 200
        },
        Table: {
            headerBg: THEME_COLOR.background,
            headerColor: THEME_COLOR.primary,
            rowHoverBg: THEME_COLOR["light-primary"],
            rowSelectedBg: THEME_COLOR["light-primary"],
            rowSelectedHoverBg: THEME_COLOR["lighter-primary"],
            // fontFamily: "helvetica",
            fontSizeLG: 20,
            fontSizeSM: 15,
        },
        Button: {
            primaryColor: THEME_COLOR.background,
            colorPrimaryBg: THEME_COLOR.primary
        },
        Dropdown: {
            zIndexPopup: 2000,
        }
    },

}