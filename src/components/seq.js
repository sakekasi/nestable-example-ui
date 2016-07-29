/* @jsx plainJSX */
require("../../stylesheets/components/seq.css");

import makePexpr from "../makePexpr.js";
import {duplicate} from "../pexprUtils.js";

import Pexpr from "./pexpr.js";

// TODO: allow for editing of whitespace in between
// TODO: account for whether we are in a lexical or syntactic rule (only do syn for now)

// Seq
export default class Seq extends Pexpr {
  constructor(pexpr) {
    super(pexpr);

    this.factorComponents = this.pexpr.factors.map(factor => makePexpr(factor));
    this.DOM = <span class='pexpr seq'>{
      this.factorComponents.map(factorComponent => factorComponent.DOM)
    }</span>;
    this.DOM.component = this;
  }

  get children() { return this.factorComponents; }

  visualReplace(subPexpr, index) {
    for (let factorComponent of this.factorComponents) {
      index = factorComponent.visualReplace(subPexpr, index);
      if (index === -1) {
        return index;
      }
    }
    return index;
  }

  replaceChild(newChild, oldChild) {
    let index = this.factorComponents.indexOf(oldChild);
    this.factorComponents[index] = newChild;
    this.pexpr.factors[index] = duplicate(newChild.pexpr);
  }
}
