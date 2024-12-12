import { Breakpoint, Theme, useMediaQuery, useTheme } from "@mui/material";

export const useLayoutDetect = (breakpoint: Breakpoint = "md") => {
  const theme = useTheme() as Theme;
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};
