/* @jsx plainJSX */

import CheckedEmitter from "checked-emitter";

import grammar from "../grammar.js";
import * as ohm from "../../third_party/ohm.js";
import {duplicate} from "../pexprUtils.js";
import makePexpr from "../makePexpr.js";

export default class StructuredExampleInput extends CheckedEmitter {
  constructor(ruleName) {
    super();

    this.ruleName = ruleName;
    this.pexpr = this._pexpr(ruleName);
    this.component = makePexpr(this.pexpr);
  }

  get DOM() { return this.component.DOM; }

  // TODO: this doesn't account for parametrized rules
  _pexpr(ruleName) {
    if (ruleName.includes('_')) {
      return duplicate(grammar.rules[ruleName].body);
    } else {
      return new ohm.pexprs.Apply(ruleName);
    }
  }

  visualReplace(subPexpr, index) {
    this.component.visualReplace(subPexpr, index);
  }
}
