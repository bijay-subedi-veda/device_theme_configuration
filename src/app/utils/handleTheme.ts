export type ThemeMode = "light" | "dark";

interface ThemeProperties {
  [key: string]: string;
}

interface ThemeConfig {
  light: ThemeProperties;
  dark: ThemeProperties;
}

const themeConfig: ThemeConfig = {
  light: {
    "--primary": "var(--primary)",
    "--secondary": "var(--secondary)",
    "--tertiary": "var(--tertiary)",

    // '--primary': '#004CB5',
    // '--secondary': '#FF9800',
    // '--tertiary': '#4CAF50',

    "--primary_on": "--gray_0",
    "--primary_container": "--primary_50",
    "--primary_on_container": "--primary_900",

    "--secondary_on": "--secondary_900",
    "--secondary_container": "--secondary_50",
    "--secondary_on_container": "--secondary_900",

    "--tertiary_on": "--gray_0",
    "--tertiary_container": "--tertiary_50",
    "--tertiary_on_container": "--tertiary_900",

    "--gray_surface": "--gray_0",
    "--gray_on_surface": "--gray_700",
    "--gray_surface_variant": "--gray_50",
    "--gray_on_surface_variant": "--gray_500",
    "--gray_text_soft": "--gray_400",
    "--gray_outline": "--gray_50",
    "--gray_outline_brighter": "--gray_100",
    "--gray_surface_variant_brighter": "--gray_25",
    "--gray_on_surface_variant_brighter": "--gray_600",

    "--error": "--error_700",
    "--error_on": "--gray_0",
    "--error_container": "--error_100",
    "--error_on_container": "--error_900",

    "--warning": "--warning_300",
    "--warning_on": "--gray_900",
    "--warning_container": "--warning_100",
    "--warning_on_container": "--warning_900",

    "--success": "--success_500",
    "--success_on": "--gray_0",
    "--success_container": "--success_100",
    "--success_on_container": "--success_900",

    "--info": "--info_500",
    "--info_on": "--gray_0",
    "--info_container": "--info_100",
    "--info_on_container": "--info_900",
  },
  dark: {
    "--primary": "--primary_200",
    "--secondary": "--secondary_200",
    "--tertiary": "--tertiary_200",

    "--primary_on": "--primary_800",
    "--primary_container": "--primary_700",
    "--primary_on_container": "--primary_100",

    "--secondary_on": "--secondary_800",
    "--secondary_container": "--secondary_700",
    "--secondary_on_container": "--secondary_100",

    "--tertiary_on": "--tertiary_800",
    "--tertiary_container": "--tertiary_700",
    "--tertiary_on_container": "--tertiary_100",

    "--gray_surface": "--gray_700",
    "--gray_on_surface": "--gray_25",
    "--gray_surface_variant": "--gray_500",
    "--gray_on_surface_variant": "--gray_100",
    "--gray_text_soft": "--gray_300",
    "--gray_outline": "--gray_600",
    "--gray_outline_brighter": "--gray_500",
    "--gray_surface_variant_brighter": "--gray_600",
    "--gray_on_surface_variant_brighter": "--gray_50",

    "--error": "--error_200",
    "--error_on": "--error_800",
    "--error_container": "--error_700",
    "--error_on_container": "--error_100",

    "--warning": "--warning_200",
    "--warning_on": "--warning_800",
    "--warning_container": "--warning_700",
    "--warning_on_container": "--warning_100",

    "--success": "--success_200",
    "--success_on": "--success_800",
    "--success_container": "--success_700",
    "--success_on_container": "--success_100",

    "--info": "--info_200",
    "--info_on": "--info_800",
    "--info_container": "--info_700",
    "--info_on_container": "--info_100",
  },
};

export const handleThemeConfiguration = (mode: ThemeMode) => {
  const root = document.documentElement;
  const themeProperties = themeConfig[mode];

  Object.keys(themeProperties).forEach((property) => {
    // Fetch the value of the variable from the :root or the current document style
    const value = getComputedStyle(root)
      .getPropertyValue(themeProperties[property])
      .trim();
    root.style.setProperty(property, value);
  });
};
