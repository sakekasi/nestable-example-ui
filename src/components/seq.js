/* @jsx plainJSX */
require("../../stylesheets/components/seq.css");

import makePexpr from "../makePexpr.js";

import PexprWithChildren from "./pexprWithChildren.js";

// TODO: allow for editing of whitespace in between
// TODO: account for whether we are in a lexical or syntactic rule (only do syn for now)

// Seq
export default class Seq extends PexprWithChildren {
  constructor(pexpr) {
    super(pexpr);

    this.factorComponents = this.pexpr.factors.map(factor => makePexpr(factor));
    this.DOM = <span class="pexpr seq">{
      this.factorComponents.map(factorComponent => factorComponent.DOM)
    }</span>;
    this.DOM.component = this;
  }

  get children() { return this.factorComponents; }
  get pexprChildren() { return this.pexpr.factors; }

  get isUserEditable() { return false; }
}
