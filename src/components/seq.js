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
    this.DOM = <span class="pexpr seq">{
      this.factorComponents.map(factorComponent => factorComponent.DOM)
    }</span>;
    this.DOM.component = this;
  }

  get children() { return this.factorComponents; }

  replaceChild(newChild, oldChild) {
    let index = this.factorComponents.indexOf(oldChild);
    this.factorComponents[index] = newChild;
    this.pexpr.factors[index] = duplicate(newChild.pexpr, newChild.pexpr.bodyRuleName);

    this.fixNextEntries(index, newChild, oldChild);
  }

  tagNextEntry(prev) {
    this.factorComponents.forEach(factorComponent => {
      prev = factorComponent.tagNextEntry(prev);
    });

    return prev;
  }

  fixNextEntries(index, newChild, oldChild) {
    // thread previous entry through new child
    let next = newChild.tagNextEntry(oldChild.prevEntry);
    // thread last entry of new piece through the rest of the tree
    if (oldChild.nextEntry) {
      oldChild.nextEntry.tagNextEntry(next);
    }
  }

  get isUserEditable() { return false; }
}
