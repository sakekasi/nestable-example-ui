/* @jsx plainJSX */
import "plain-jsx";

require("../stylesheets/style.css");

import {polyfill} from "keyboardevent-key-polyfill";
polyfill();

import * as ohm from "../third_party/ohm.js";

import grammar from "./grammar.js";
import {$, _, t} from "./utils.js";
import {duplicate} from "./pexprUtils.js";
import makePexpr from "./makePexpr.js";
import {addData} from "./dropUtils.js";

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

  input.addEventListener('dragstart', function(event) {
    let key = addData(inputElement);
    event.dataTransfer.setData('text/plain', key);
    event.dataTransfer.effectAllowed = 'all';
  });

  return input;
}

// TODO: still need to preserve state
function drag(fromLineNo, toLineNo, toIndex) {
  // TODO: add drag check
  fromLineNo -= 1;
  toLineNo -= 1;

  let fromPexpr = inputElements[fromLineNo].pexpr;
  let toElement = inputElements[toLineNo];

  toElement.visualReplace(fromPexpr, toIndex);
}

// match a string to a pexpr

makeInput('AddExp_minus');
makeInput('AddExp_plus');

Object.assign(window, {
  grammar,
  ohm,
  makeInput,
  drag
});

console.log(grammar.source.contents);


// HELPERS

function pexprFor(ruleName) {
  if (ruleName.includes('_')) {
    return duplicate(grammar.rules[ruleName].body);
  } else {
    return new ohm.pexprs.Apply(ruleName);
  }
}
