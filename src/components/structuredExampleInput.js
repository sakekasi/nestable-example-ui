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

    this._tagNextEntry();
  }

  get DOM() { return this.component.DOM; }

  // TODO: this doesn't account for parametrized rules
  _pexpr(ruleName) {
    if (ruleName.includes('_')) {
      return duplicate(grammar.rules[ruleName].body, ruleName);
    } else {
      return new ohm.pexprs.Apply(ruleName);
    }
  }

  visualReplace(subPexpr, index) {
    this.firstEntry.visualReplace(subPexpr, index);
  }

  _tagNextEntry() {
    this.component.tagNextEntry(this);
  }

  get firstEntry() { return this.nextEntry; }
}
