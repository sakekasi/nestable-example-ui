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
    this.DOM.addEventListener('dragover', e => this.onDragOver(e));
    this.DOM.addEventListener('drop', e => this.onDrop(e));

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
      } else if (this.nextEntry) {
        this.focusNextElementWithChar(event.key);
      }
    }
  }

  onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'none';
    return false;
  }

  onDrop(event) {
    event.preventDefault();
    return false;
  }

  // same leaf implementation for tagNextEntry as Pexpr

  get isUserEditable() { return false; }
}
