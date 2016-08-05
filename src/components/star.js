/* @jsx plainJSX */

import makePexpr from "../makePexpr.js";

import PexprWithChildren from "./pexprWithChildren.js";

export default class Star extends PexprWithChildren {
  constructor(pexpr) {
    super(pexpr);

    this.items = [makePexpr(this.pexpr.expr)];
    this.DOM = <span class="pexpr star">{
      this.items.map(item => item.DOM)
    }</span>;
    this.DOM.component = this;
  }

  get children() { return this.items; }
  get pexprChildren() { return null; }

  // TODO: maybe just manually set?
  get isUserEditable() { return true; }
}
