/* @jsx plainJSX */
require("../../stylesheets/components/pexpr.css");

import * as ohm from "../../third_party/ohm.js";
import {namespace, default as grammar} from "../grammar.js";
import CheckedEmitter from "checked-emitter";

import {isSyntactic} from "../pexprUtils.js";

const SETTLED_CHANGE_LAG = 500; // ms

export default class Pexpr extends CheckedEmitter {
  constructor(pexpr) {
    super();

    this.registerEvent("settledChange", 'event');

    this.pexpr = pexpr;
    this.DOM = <input type="text" class="pexpr" placeholder={pexpr.toString()}/>;
    this.DOM.addEventListener('input', e => this.onChange(e));
    this.DOM.component = this;

    this.matchRuleName = `${isSyntactic(this.pexpr.bodyRuleName) ? 'R' : 'r'}ule`;
    this.grammar = ohm.grammar(`
      PExprGrammar <: ${grammar.name} {
        ${this.matchRuleName} = ${this.pexpr.toString()}
      }
    `, namespace);

    this.addListener('settledChange', e => this.onSettledChange(e));
  }

  match(input) {
    return this.grammar.match(input, this.matchRuleName);
  }

  onChange(event) {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    this._timeout = setTimeout(() => this.emit('settledChange', event), SETTLED_CHANGE_LAG);

    if (this.match(this.DOM.value).succeeded()) {
      this.setValid(true);
    } else if (this.nextEntry &&
               this.match(this.DOM.value.slice(0, -1)).succeeded() &&
               this.nextEntry.match(this.DOM.value.slice(-1)).succeeded()) {
      let lastChar = this.DOM.value.slice(-1);
      this.DOM.value = this.DOM.value.slice(0, -1);
      this.focusNextElementWithChar(lastChar);
      this.setValid(true);
    } else {
      this.setValid(false);
    }
  }

  onSettledChange(event) {
  }

  focusNextElementWithChar(char) {
    if (this.nextEntry && this.nextEntry.isUserEditable) {
      this.nextEntry.DOM.focus();
      this.nextEntry.DOM.value = char;
    } else if (this.nextEntry) {
      this.nextEntry.DOM.focus();
      this.nextEntry.onKeyDown({key: char, preventDefault: function() {}});
    }
  }

  setValid(isValid) {
    this.DOM.classList.toggle('valid', isValid);
    this.DOM.classList.toggle('invalid', !isValid);
  }

  visualReplace(subPexpr, index) { // can only swap at apply
    if (this.nextEntry) {
      this.nextEntry.visualReplace(subPexpr, index);
    }
  }

  replaceSelf(component) {
    this.parent.replaceChild(component, this);
  }

  get children() { return null; }
  get pexprChildren() { return null; }

  get parent() { return this.DOM.parentElement.component; }

  // superimposes a linked list over the tree, linking each
  //  element to the next element in the composable input
  tagNextEntry(prev) {
    if (prev) {
      prev.nextEntry = this;
      this.prevEntry = prev;
    }

    return this;
  }

  get isUserEditable() { return true; }
}
