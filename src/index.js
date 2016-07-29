require("../stylesheets/style.css");

import * as ReactDOM from "react-dom";
import * as React from "react";
import * as ohm from "../third_party/ohm.js";

import grammar from "./grammar.js";
import {$, _, t} from "./utils.js";
import {duplicate} from "./pexprUtils.js";

import Pexpr from "./components/pexpr.js";

var root = document.querySelector('#root');

// TODO: create a simple set of methods that represents the actions you want
var inputs = $('#inputs');
var inputElements = [];
function makeInput(ruleName) {
  if (!grammar.rules.hasOwnProperty(ruleName)) {
    throw new Error(`grammar doesn't have rule ${ruleName}`);
  }

  var input = _('li', {class: 'root', draggable: 'true'});
  inputs.appendChild(input);

  let inputElement = <Pexpr pexpr={pexprFor(ruleName)}/>;
  ReactDOM.render(inputElement, input);
  inputElements.push(inputElement);

  return input;
}

function drag(fromLineNo, toLineNo, toIndex) {
  fromLineNo -= 1;
  toLineNo -= 1;

  let fromPexpr = inputElements[fromLineNo].props.pexpr;
  let toPexpr = inputElements[toLineNo].props.pexpr;

  let newToPexpr = visualReplace(duplicate(toPexpr), duplicate(fromPexpr), toIndex);

  let inputElement = <Pexpr pexpr={newToPexpr}/>;
  ReactDOM.render(inputElement, inputs.children[toLineNo]);
  inputElements[toLineNo] = inputElement;
}

// replace the leaf node of pexpr at index with subPexpr
function visualReplace(pexpr, subPexpr, index){
  let last = function(arr) {
    return arr.slice(-1)[0];
  }

  let stack = [[pexpr, null]];
  while (last(stack)[0] instanceof ohm.pexprs.Seq ||
         index > 0) {
    let [current, parent] = stack.pop();

    if (!(current instanceof ohm.pexprs.Terminal || current instanceof ohm.pexprs.Seq)) {
      index--;
      continue;
    } else if (current instanceof ohm.pexprs.Seq) {
      stack = stack.concat(
        current.factors.slice().filter( factor =>
          !(factor instanceof ohm.pexprs.Terminal)
        ).reverse().map(item => [item, current])
      );
      continue;
    }
  }

  let [val, parent] = stack.pop();
  console.log(val);
  parent.factors[parent.factors.indexOf(val)] = subPexpr;

  return pexpr;
}

function withIdx(item, idx) {
  return [item, idx];
}

// match a string to a pexpr

makeInput('AddExp_minus');

Object.assign(window, {
  grammar,
  makeInput,
  drag
});


// HELPERS

// function replaceWith(replacement, seq, childIndex) {
//   seq[childIndex] = duplicate(replacement);
// }

function pexprFor(ruleName) {
  if (ruleName.includes('_')) {
    return duplicate(grammar.rules[ruleName].body);
  } else {
    return new ohm.pexprs.Apply(ruleName);
  }
}
