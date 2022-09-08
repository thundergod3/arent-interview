import { extendTheme } from "@chakra-ui/react";
import {
  PRIMARY_BACKGROUND,
  PRIMARY_TEXT,
  SECONDARY_BACKGROUND,
  SECONDARY_TEXT,
} from "./globalStyles";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "white",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
  colors: {
    text: {
      primary: PRIMARY_TEXT,
      secondary: SECONDARY_TEXT,
    },
    background: {
      primary: PRIMARY_BACKGROUND,
      secondary: SECONDARY_BACKGROUND,
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default theme;
