/* @jsx plainJSX */
require("../../stylesheets/components/terminal.css");

import Pexpr from "./pexpr.js";

export default class Terminal extends Pexpr {
  constructor(pexpr) {
    super(pexpr);

    this.DOM = <span class="pexpr terminal" contenteditable="true">{
      this.pexpr.obj
    }</span>;
    this.DOM.component = this;
    this.DOM.addEventListener('keydown', e => this.onKeyDown(e));

    // TODO: reset this on unfocus
    this.partiallyConsumedString = this.pexpr.obj;
  }

  // visualReplace(_, index) { return index; }

  onKeyDown(event) {
    if (event.key.length === 1) {
      event.preventDefault();
      if (this.partiallyConsumedString.slice(0, 1) === event.key) {
        this.partiallyConsumedString = this.partiallyConsumedString.slice(1);
        if (this.partiallyConsumedString === '' &&
            this.nextEntry) {
          this.partiallyConsumedString = this.pexpr.obj;
          this.nextEntry.DOM.focus();
        }
      } else {
        this.focusNextElementWithChar(event.key);
      }
    }
  }

  // same leaf implementation for tagNextEntry as Pexpr

  get isUserEditable() { return false; }
}
