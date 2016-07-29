/* @jsx plainJSX */
require("../../stylesheets/components/pexpr.css");

import * as ohm from "../../third_party/ohm.js";
import {namespace, default as grammar} from "../grammar.js";
import CheckedEmitter from "checked-emitter";

import makePexpr from "../makePexpr.js";

const SETTLED_CHANGE_LAG = 500; // ms

export default class Pexpr extends CheckedEmitter {
  constructor(pexpr) {
    super();

    this.registerEvent("settledChange", 'event');

    this.pexpr = pexpr;
    this.DOM = <input type='text' class='pexpr' placeholder={pexpr.toString()}/>;
    this.DOM.addEventListener('input', (e)=> this.onChange(e));
    this.DOM.component = this;

    // TODO: for now, this is lexical, but we need a way
    //   to indicate syntactic or lexical
    this.grammar = ohm.grammar(`
      PExprGrammar <: ${grammar.name} {
        __rule = ${this.pexpr.toString()}
      }
    `, namespace);
  }

  match(input) {
    return this.grammar.match(input, '__rule');
  }

  onChange(event) {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    this._timeout = setTimeout(()=> this.emit('settledChange', event), SETTLED_CHANGE_LAG);

    if (this.match(this.DOM.value).succeeded()) {
      this.setValid(true);
    } else {
      this.setValid(false);
    }
  }

  setValid(isValid) {
    this.DOM.classList.toggle('valid', isValid);
    this.DOM.classList.toggle('invalid', !isValid);
  }

  visualReplace(subPexpr, index) {
    index--;
    if (index === -1) {
      this.replaceSelf(makePexpr(subPexpr));
    }

    return index;
  }

  replaceSelf(component) {
    this.parent.replaceChild(component, this);
    this.DOM.parentElement.replaceChild(component.DOM, this.DOM);
  }

  get children() { return null; }
  get parent() { return this.DOM.parentElement.component; }
}
