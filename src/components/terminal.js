require("../../stylesheets/components/terminal.css");

import * as React from "react";

export default class Terminal extends React.Component {
  render() {
    return <span className="terminal">{
      this.props.pexpr.obj
    }</span>;
  }
}
