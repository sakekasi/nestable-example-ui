/* @jsx plainJSX */

import makePexpr from "../makePexpr.js";

import PexprWithChildren from "./pexprWithChildren.js";

export default class Plus extends PexprWithChildren {
  constructor(pexpr) {
    super(pexpr);

    this.items = [makePexpr(this.pexpr.expr)];
    this.DOM = <span class="pexpr star">{
      this.items.map(item => item.DOM)
    }<indicator>+</indicator></span>;
    this.DOM.component = this;

    this._indicator = this.DOM.querySelector('indicator');
    this._indicator.addEventListener('click', event => {
      if (event.shiftKey) {
        this.removeItem();
      } else {
        this.addItem();
      }
    });
  }

  get children() { return this.items; }
  get pexprChildren() { return null; }

  // TODO: maybe just manually set?
  get isUserEditable() { return true; }

  addItem() {
    let addedItem = makePexpr(this.pexpr.expr);
    let addedItemPrev = this.items.slice(-1)[0];
    let addedItemNext = addedItemPrev.nextEntry;

    this.items.push(addedItem);
    this.DOM.insertBefore(addedItem.DOM, this._indicator);

    addedItem.tagNextEntry(addedItemPrev);
    if (addedItemNext) {
      addedItemNext.tagNextEntry(addedItem);
    }
  }

  removeItem() {
    let removedItem = this.items.pop;
    this.DOM.removeChild(removedItem.DOM);

    if (removedItem.nextEntry) {
      removedItem.nextEntry.tagNextEntry(removedItem.prevEntry);
    }
  }
}
