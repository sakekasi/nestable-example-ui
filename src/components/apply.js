/* @jsx plainJSX */

import grammar from "../grammar.js";
import makePexpr from "../makePexpr.js";

import Pexpr from "./pexpr.js";

const SETTLED_CHANGE_LAG = 500; // ms

export default class Apply extends Pexpr {
  constructor(pexpr) {
    super(pexpr);

    this._timeout = null;

    this.DOM = <input type='text' class='pexpr apply' placeholder={pexpr.toString()}/>;
    this.DOM.addEventListener('input', (e)=> this.onChange(e));
    this.DOM.component = this;
  }

  onChange(event) {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    this._timeout = setTimeout(()=> this.emit('settledChange', event), SETTLED_CHANGE_LAG);

    if (grammar.match(this.DOM.value, this.pexpr.ruleName).succeeded()) {
      this.setValid(true);
    } else {
      this.setValid(false);
    }
  }

  visualReplace(subPexpr, index) {
    index--;
    if (index === -1) {
      this.replaceSelf(makePexpr(subPexpr));
    }

    return index;
  }
}
