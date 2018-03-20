import * as React from "react";
import { Component, ComponentType } from "react";
import withStyles, { Classes } from "react-jss";
import styles from "./styles";

const App: ComponentType<{}> = withStyles(styles)(
  /** */
  class App extends Component<{
    classes: Classes;    
  }> {
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <div className={classes.header}>
            <h2>{process.env.REACT_APP_TITLE}</h2>
          </div>
        </div>
      );
    }
  },
);

export default App;
