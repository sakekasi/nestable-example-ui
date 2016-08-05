/* @jsx plainJSX */

import Pexpr from "./pexpr.js";

// this.children should return somthing for subclasses of this class
export default class PexprWithChildren extends Pexpr {
  constructor(pexpr) {
    super(pexpr);

    if (new.target === PexprWithChildren) {
      throw new TypeError('Cannot construct PexprWithChildren directly');
    }
  }

  tagNextEntry(prev) {
    this.children.forEach(child => {
      prev = child.tagNextEntry(prev);
    });

    return prev;
  }

  replaceChild(newChild, oldChild) {
    let index = this.children.indexOf(oldChild);
    this.children[index] = newChild;
    if (this.pexprChildren) {
      this.pexprChildren[index] = newChild.pexpr;
    }
    this.DOM.replaceChild(newChild.DOM, oldChild.DOM);

    this.fixNextEntries(index, newChild, oldChild);
  }

  fixNextEntries(index, newChild, oldChild) {
    // thread previous entry through new child
    let next = newChild.tagNextEntry(oldChild.prevEntry);
    // thread last entry of new piece through the rest of the tree
    if (oldChild.nextEntry) {
      oldChild.nextEntry.tagNextEntry(next);
    }
  }
}
