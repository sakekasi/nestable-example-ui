import * as ohm from "../third_party/ohm.js";
import grammar from "./grammar.js";

// assumes order of args is same as order of terms
let collections = {
  Alt: 'terms',
  Seq: 'factors',
  Apply: 'args'
};

export function duplicate(pexpr, optRuleName) {
  let ans;

  if (collections.hasOwnProperty(pexpr.constructor.name)) {
    let collectionKey = collections[pexpr.constructor.name];
    let dupCollection = pexpr[collectionKey].map(item => duplicate(item, optRuleName));

    let values = Object.keys(pexpr).map(key => pexpr[key]);
    values[Object.keys(pexpr).indexOf(collectionKey)] = dupCollection;

    ans = new pexpr.constructor(...values);
  } else if (pexpr instanceof ohm.pexprs.Iter) {
    ans = new pexpr.constructor(duplicate(pexpr.expr, optRuleName));
  } else {
    let values = Object.keys(pexpr).map(key => pexpr[key]);
    ans = new pexpr.constructor(...values);
  }

  if (optRuleName) {
    ans.bodyRuleName = optRuleName;
  }
  return ans;
}

export function substable(parent, child) {
  let candidate = parentRule(child);
  while (candidate && candidate !== parent) {
    candidate = parentRule(candidate);
  }

  // could also do return 'candidate;', but this is more explicit
  if (candidate) {
    return true;
  } else {
    return false;
  }
}

// TODO: is there a less brittle way to do this?
function parentRule(ruleName) {
  if (ruleName.includes('_')) {
    return ruleName.slice(0, ruleName.lastIndexOf('_'));
  } else {
    return Object.keys(grammar.rules).find(gRuleName => {
      let body = grammar.rules[gRuleName].body;
      return (body instanceof ohm.pexprs.Apply && body.ruleName === ruleName) ||
             (body instanceof ohm.pexprs.Alt &&
              body.terms.some(term =>
                term instanceof ohm.pexprs.Apply &&
                term.ruleName === ruleName
              ));
    });
  }
}

export function isSyntactic(ruleName) {
  var firstChar = ruleName[0];
  return firstChar === firstChar.toUpperCase();
}
