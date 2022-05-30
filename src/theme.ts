import { DefaultTheme } from "styled-components";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: {
        primary: string;
      };
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    text: {
      primary: "#fff",
    },
  },
};

export default theme;
