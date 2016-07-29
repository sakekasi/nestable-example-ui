import * as ohm from "../third_party/ohm.js";

// assumes order of args is same as order of terms
let collections = {
  'Alt': 'terms',
  'Seq': 'factors',
  'Apply': 'args'
};

export function duplicate(pexpr) {
  if (collections.hasOwnProperty(pexpr.constructor.name)) {
    let collectionKey = collections[pexpr.constructor.name];
    let dupCollection = pexpr[collectionKey].map(item => duplicate(item));

    let values = Object.keys(pexpr).map(key => pexpr[key]);
    values[Object.keys(pexpr).indexOf(collectionKey)] = dupCollection;

    return new pexpr.constructor(...values);
  } else if (pexpr instanceof ohm.pexprs.Iter) {
    return new pexpr.constructor(duplicate(pexpr.expr));
  } else {
    let values = Object.keys(pexpr).map(key => pexpr[key]);
    return new pexpr.constructor(...values);
  }
}
