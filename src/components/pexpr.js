require("../../stylesheets/components/pexpr.css");

import * as React from "react";

import * as ohm from "../../third_party/ohm.js";

import Apply from "./apply.js";
import Seq from "./seq.js";
import Terminal from "./terminal.js";

// TODO: it might be worth it to add generic checking to pexprs
//   if so, we need a function to spoof state for pexpr-eval

export default class Pexpr extends React.Component {
  render() {
    let ans;

    if (this.props.pexpr instanceof ohm.pexprs.Seq) {
      ans = <Seq pexpr={this.props.pexpr}/>;
    } else if (this.props.pexpr instanceof ohm.pexprs.Terminal) {
      ans = <Terminal pexpr={this.props.pexpr}/>;
    } else if (this.props.pexpr instanceof ohm.pexprs.Apply) {
      ans = <Apply pexpr={this.props.pexpr}/>;
    } else {
      ans = <input type="text" className="pexpr"
                   placeholder={this.props.pexpr.toString()}/>;
    }

    return ans;
  }
}
