/* @jsx plainJSX */
require("../../stylesheets/components/terminal.css");

import Pexpr from "./pexpr.js";

export default class Terminal extends Pexpr {
  constructor(pexpr) {
    super(pexpr);

    this.DOM = <span class='pexpr terminal'>{
      this.pexpr.obj
    }</span>;
    this.DOM.component = this;
  }

  visualReplace(_, index) { return index; }
}
