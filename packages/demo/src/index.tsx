import * as React from "react";
import * as ReactDOM from "react-dom";
// jss
import { ThemeProvider } from "react-jss";
import theme from "./theme";
import jss from "jss";
import preset from "jss-preset-default";
jss.setup(preset());
// local:
import App from "./app";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
);
