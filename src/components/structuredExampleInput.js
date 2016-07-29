import * as React from "react";

import grammar from "../grammar.js";
import * as ohm from "../../third_party/ohm.js";
import {duplicate} from "../pexprUtils.js";

import Pexpr from "./pexpr.js";

export default class StructuredExampleInput extends React.Component {
  render() {
    var pexpr = this._pexpr(this.props.ruleName);
    return <Pexpr pexpr={pexpr}/>;
  }

  // TODO: this doesn't account for parametrized rules
  _pexpr(ruleName) {
    if (ruleName.includes('_')) {
      return duplicate(grammar.rules[ruleName].body);
    } else {
      return new ohm.pexprs.Apply(ruleName);
    }
  }
}
