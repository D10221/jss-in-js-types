import { Styles } from "react-jss";
import { CSSProperties } from "react";

export default (_theme: any): Styles => {
  const col: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };
  const row: CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };
  return {
    col,
    row,
    root: {
      ...col,
    },
    header: {
      ...row,
      padding: "1rem",
      background: "whitesmoke"      
    },
  };
};
