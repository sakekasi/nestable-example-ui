/* @jsx plainJSX */
import "plain-jsx";

require("../stylesheets/style.css");

import * as ohm from "../third_party/ohm.js";

import grammar from "./grammar.js";
import {$, _, t} from "./utils.js";
import {duplicate} from "./pexprUtils.js";
import makePexpr from "./makePexpr.js";

import StructuredExampleInput from "./components/structuredExampleInput.js";

var root = document.querySelector('#root');

// TODO: create a simple set of methods that represents the actions you want
var inputs = $('#inputs');
var inputElements = [];
function makeInput(ruleName) {
  if (!grammar.rules.hasOwnProperty(ruleName)) {
    throw new Error(`grammar doesn't have rule ${ruleName}`);
  }

  var input = <li class='root' draggable='true'/>;
  inputs.appendChild(input);

  let inputElement = new StructuredExampleInput(ruleName);
  input.appendChild(inputElement.DOM);
  inputElements.push(inputElement);

  return input;
}

// TODO: still need to preserve state
function drag(fromLineNo, toLineNo, toIndex) {
  fromLineNo -= 1;
  toLineNo -= 1;

  let fromPexpr = inputElements[fromLineNo].pexpr;
  let toElement = inputElements[toLineNo];

  toElement.visualReplace(fromPexpr, toIndex);
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
