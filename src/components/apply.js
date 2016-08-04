/* @jsx plainJSX */

import grammar from "../grammar.js";
import makePexpr from "../makePexpr.js";
import {substable} from "../pexprUtils.js";
import {getData} from "../dropUtils.js";

import Pexpr from "./pexpr.js";

const SETTLED_CHANGE_LAG = 500; // ms

export default class Apply extends Pexpr {
  constructor(pexpr) {
    super(pexpr);

    this._timeout = null;

    this.DOM = <input type='text' class='pexpr apply' placeholder={pexpr.toString()}/>;
    this.DOM.component = this;

    this.DOM.addEventListener('input', (e)=> this.onChange(e));
    this.DOM.addEventListener('dragover', (e)=> this.onDragOver(e));
    this.DOM.addEventListener('dragenter', (e)=> this.onDragOver(e));
    this.DOM.addEventListener('drop', (e)=> this.onDrop(e));
  }

  match(input) {
    return grammar.match(input, this.pexpr.ruleName);
  }

  visualReplace(subPexpr, index) {
    index--;
    if (index === -1) {
      if (substable(this.pexpr.ruleName, subPexpr.bodyRuleName)) {
        this.replaceSelf(makePexpr(subPexpr));
      } else {
        throw new Error(`an application of ${this.pexpr.ruleName} cannot be replaced ` +
                        `by the body of ${subPexpr.bodyRuleName}`)
      }
    } else if(this.nextEntry) {
      this.nextEntry.visualReplace(subPexpr, index);
    }
  }

  onDragOver(event) {
    event.preventDefault();
    let inputElement = getData(event.dataTransfer.getData('text/plain'));
    let subPexpr = inputElement.pexpr;
    if (substable(this.pexpr.ruleName, subPexpr.bodyRuleName)) {
      event.dataTransfer.dropEffect = 'copy';
    } else {
      event.dataTransfer.dropEffect = 'none';
    }
  }

  onDrop(event) {
    event.preventDefault();

    let inputElement = getData(event.dataTransfer.getData('text/plain'));
    let subPexpr = inputElement.pexpr;
    if (substable(this.pexpr.ruleName, subPexpr.bodyRuleName)) {
      this.replaceSelf(makePexpr(subPexpr));
    }
  }

  // same leaf implementation for tagNextEntry as Pexpr

}
