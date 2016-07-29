import * as React from "react";

import Pexpr from "./pexpr.js";
import grammar from "../grammar.js";

// Seq
export default class Apply extends React.Component {
  constructor() {
    super();
    this.state = {
      valid: true
    };
  }

  render() {
    return <input type='text'
      ref={(input)=> this.DOM = input}
      className={`pexpr apply ${this.state.valid ? 'valid' : 'invalid'}`}
      placeholder={this.props.pexpr.toString()}
      onChange={(event)=> this.onChange(event)} />;
  }

  onChange(event) {
    if (grammar.match(this.DOM.value, this.props.pexpr.ruleName).succeeded()) {
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }
  }
}
