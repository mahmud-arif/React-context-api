import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",
      width: "calc (100vw - 3px)",
      height: "calc(100vh - 20px)",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
