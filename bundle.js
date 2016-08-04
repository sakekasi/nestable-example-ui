/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	var _keyboardeventKeyPolyfill = __webpack_require__(2);
	
	var _ohm = __webpack_require__(3);
	
	var ohm = _interopRequireWildcard(_ohm);
	
	var _grammar = __webpack_require__(4);
	
	var _grammar2 = _interopRequireDefault(_grammar);
	
	var _utils = __webpack_require__(5);
	
	var _dropUtils = __webpack_require__(6);
	
	var _structuredExampleInput = __webpack_require__(7);
	
	var _structuredExampleInput2 = _interopRequireDefault(_structuredExampleInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	__webpack_require__(32); /* eslint-env browser */
	/* @jsx plainJSX */
	
	(0, _keyboardeventKeyPolyfill.polyfill)();
	
	// TODO: create a simple set of methods that represents the actions you want
	var inputs = (0, _utils.$)('#inputs');
	var inputElements = [];
	function makeInput(ruleName) {
	  if (!_grammar2.default.rules.hasOwnProperty(ruleName)) {
	    throw new Error("grammar doesn't have rule " + ruleName);
	  }
	
	  var input = plainJSX("li", { "class": "root", draggable: "true" });
	  inputs.appendChild(input);
	
	  var inputElement = new _structuredExampleInput2.default(ruleName);
	  input.appendChild(inputElement.DOM);
	  inputElements.push(inputElement);
	
	  input.addEventListener('dragstart', function (event) {
	    var key = (0, _dropUtils.addData)(inputElement);
	    event.dataTransfer.setData('text/plain', key);
	    event.dataTransfer.effectAllowed = 'all';
	  });
	
	  return input;
	}
	
	// TODO: still need to preserve state
	function drag(fromLineNo, toLineNo, toIndex) {
	  fromLineNo -= 1;
	  toLineNo -= 1;
	
	  var fromPexpr = inputElements[fromLineNo].pexpr;
	  var toElement = inputElements[toLineNo];
	
	  toElement.visualReplace(fromPexpr, toIndex);
	}
	
	Object.keys(_grammar2.default.rules).forEach(function (ruleName) {
	  return makeInput(ruleName);
	});
	
	Object.assign(window, {
	  grammar: _grammar2.default,
	  ohm: ohm,
	  makeInput: makeInput,
	  drag: drag
	});
	
	/* eslint-disable no-console */
	console.log(_grammar2.default.source.contents);
	/* eslint-enable no-console */

/***/ },
/* 1 */
/***/ function(module, exports) {

	window.plainJSX = function (tagName, attributes) {
	  'use strict';
	
	  var children = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 2));
	
	  if (typeof tagName !== 'string') {
	    throw new Error('plain-jsx only renders regular HTML elements, not components');
	  }
	
	  var element = document.createElement(tagName);
	
	  for (var name in attributes) {
	    if (attributes.hasOwnProperty(name)) {
	      element.setAttribute(name, attributes[name]);
	    }
	  }
	
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	
	    if (child != null) {
	      element.appendChild(
	        child instanceof HTMLElement ?
	          child :
	          document.createTextNode(child)
	      );
	    }
	  }
	
	  return element;
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define, KeyboardEvent, module */
	
	(function () {
	
	  var keyboardeventKeyPolyfill = {
	    polyfill: polyfill,
	    keys: {
	      3: 'Cancel',
	      6: 'Help',
	      8: 'Backspace',
	      9: 'Tab',
	      12: 'Clear',
	      13: 'Enter',
	      16: 'Shift',
	      17: 'Control',
	      18: 'Alt',
	      19: 'Pause',
	      20: 'CapsLock',
	      27: 'Escape',
	      28: 'Convert',
	      29: 'NonConvert',
	      30: 'Accept',
	      31: 'ModeChange',
	      32: ' ',
	      33: 'PageUp',
	      34: 'PageDown',
	      35: 'End',
	      36: 'Home',
	      37: 'ArrowLeft',
	      38: 'ArrowUp',
	      39: 'ArrowRight',
	      40: 'ArrowDown',
	      41: 'Select',
	      42: 'Print',
	      43: 'Execute',
	      44: 'PrintScreen',
	      45: 'Insert',
	      46: 'Delete',
	      48: ['0', ')'],
	      49: ['1', '!'],
	      50: ['2', '@'],
	      51: ['3', '#'],
	      52: ['4', '$'],
	      53: ['5', '%'],
	      54: ['6', '^'],
	      55: ['7', '&'],
	      56: ['8', '*'],
	      57: ['9', '('],
	      91: 'OS',
	      93: 'ContextMenu',
	      144: 'NumLock',
	      145: 'ScrollLock',
	      181: 'VolumeMute',
	      182: 'VolumeDown',
	      183: 'VolumeUp',
	      186: [';', ':'],
	      187: ['=', '+'],
	      188: [',', '<'],
	      189: ['-', '_'],
	      190: ['.', '>'],
	      191: ['/', '?'],
	      192: ['`', '~'],
	      219: ['[', '{'],
	      220: ['\\', '|'],
	      221: [']', '}'],
	      222: ["'", '"'],
	      224: 'Meta',
	      225: 'AltGraph',
	      246: 'Attn',
	      247: 'CrSel',
	      248: 'ExSel',
	      249: 'EraseEof',
	      250: 'Play',
	      251: 'ZoomOut'
	    }
	  };
	
	  // Function keys (F1-24).
	  var i;
	  for (i = 1; i < 25; i++) {
	    keyboardeventKeyPolyfill.keys[111 + i] = 'F' + i;
	  }
	
	  // Printable ASCII characters.
	  var letter = '';
	  for (i = 65; i < 91; i++) {
	    letter = String.fromCharCode(i);
	    keyboardeventKeyPolyfill.keys[i] = [letter.toLowerCase(), letter.toUpperCase()];
	  }
	
	  function polyfill () {
	    if (!('KeyboardEvent' in window) ||
	        'key' in KeyboardEvent.prototype) {
	      return false;
	    }
	
	    // Polyfill `key` on `KeyboardEvent`.
	    var proto = {
	      get: function (x) {
	        var key = keyboardeventKeyPolyfill.keys[this.which || this.keyCode];
	
	        if (Array.isArray(key)) {
	          key = key[+this.shiftKey];
	        }
	
	        return key;
	      }
	    };
	    Object.defineProperty(KeyboardEvent.prototype, 'key', proto);
	    return proto;
	  }
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (keyboardeventKeyPolyfill), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    module.exports = keyboardeventKeyPolyfill;
	  } else if (window) {
	    window.keyboardeventKeyPolyfill = keyboardeventKeyPolyfill;
	  }
	
	})();


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function(f){if(( false?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}g.ohm=f();}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(require,module,exports){var ohm=require('..');module.exports=ohm.makeRecipe(["grammar",{"source":"BuiltInRules {\n\n  alnum  (an alpha-numeric character)\n    = letter\n    | digit\n\n  letter  (a letter)\n    = lower\n    | upper\n    | unicodeLtmo\n\n  digit  (a digit)\n    = \"0\"..\"9\"\n\n  hexDigit  (a hexadecimal digit)\n    = digit\n    | \"a\"..\"f\"\n    | \"A\"..\"F\"\n\n  ListOf<elem, sep>\n    = NonemptyListOf<elem, sep>\n    | EmptyListOf<elem, sep>\n\n  NonemptyListOf<elem, sep>\n    = elem (sep elem)*\n\n  EmptyListOf<elem, sep>\n    = /* nothing */\n\n  listOf<elem, sep>\n    = nonemptyListOf<elem, sep>\n    | emptyListOf<elem, sep>\n\n  nonemptyListOf<elem, sep>\n    = elem (sep elem)*\n\n  emptyListOf<elem, sep>\n    = /* nothing */\n\n}"},"BuiltInRules",null,null,{"alnum":["define",{"sourceInterval":[18,78]},"an alpha-numeric character",[],["alt",{"sourceInterval":[60,78]},["app",{"sourceInterval":[60,66]},"letter",[]],["app",{"sourceInterval":[73,78]},"digit",[]]]],"letter":["define",{"sourceInterval":[82,142]},"a letter",[],["alt",{"sourceInterval":[107,142]},["app",{"sourceInterval":[107,112]},"lower",[]],["app",{"sourceInterval":[119,124]},"upper",[]],["app",{"sourceInterval":[131,142]},"unicodeLtmo",[]]]],"digit":["define",{"sourceInterval":[146,177]},"a digit",[],["range",{"sourceInterval":[169,177]},"0","9"]],"hexDigit":["define",{"sourceInterval":[181,254]},"a hexadecimal digit",[],["alt",{"sourceInterval":[219,254]},["app",{"sourceInterval":[219,224]},"digit",[]],["range",{"sourceInterval":[231,239]},"a","f"],["range",{"sourceInterval":[246,254]},"A","F"]]],"ListOf":["define",{"sourceInterval":[258,336]},null,["elem","sep"],["alt",{"sourceInterval":[282,336]},["app",{"sourceInterval":[282,307]},"NonemptyListOf",[["param",{},0],["param",{},1]]],["app",{"sourceInterval":[314,336]},"EmptyListOf",[["param",{},0],["param",{},1]]]]],"NonemptyListOf":["define",{"sourceInterval":[340,388]},null,["elem","sep"],["seq",{"sourceInterval":[372,388]},["param",{},0],["star",{"sourceInterval":[377,388]},["seq",{"sourceInterval":[378,386]},["param",{},1],["param",{},0]]]]],"EmptyListOf":["define",{"sourceInterval":[392,434]},null,["elem","sep"],["seq",{"sourceInterval":[438,438]}]],"listOf":["define",{"sourceInterval":[438,516]},null,["elem","sep"],["alt",{"sourceInterval":[462,516]},["app",{"sourceInterval":[462,487]},"nonemptyListOf",[["param",{},0],["param",{},1]]],["app",{"sourceInterval":[494,516]},"emptyListOf",[["param",{},0],["param",{},1]]]]],"nonemptyListOf":["define",{"sourceInterval":[520,568]},null,["elem","sep"],["seq",{"sourceInterval":[552,568]},["param",{},0],["star",{"sourceInterval":[557,568]},["seq",{"sourceInterval":[558,566]},["param",{},1],["param",{},0]]]]],"emptyListOf":["define",{"sourceInterval":[572,614]},null,["elem","sep"],["seq",{"sourceInterval":[616,616]}]]}]);},{"..":41}],2:[function(require,module,exports){var ohm=require('..');module.exports=ohm.makeRecipe(["grammar",{"source":"Ohm {\n\n  Grammars\n    = Grammar*\n\n  Grammar\n    = ident SuperGrammar? \"{\" Rule* \"}\"\n\n  SuperGrammar\n    = \"<:\" ident\n\n  Rule\n    = ident Formals? ruleDescr? \"=\"  RuleBody  -- define\n    | ident Formals?            \":=\" RuleBody  -- override\n    | ident Formals?            \"+=\" RuleBody  -- extend\n\n  RuleBody\n    = \"|\"? NonemptyListOf<TopLevelTerm, \"|\">\n\n  TopLevelTerm\n    = Seq caseName  -- inline\n    | Seq\n\n  Formals\n    = \"<\" ListOf<ident, \",\"> \">\"\n\n  Params\n    = \"<\" ListOf<Seq, \",\"> \">\"\n\n  Alt\n    = NonemptyListOf<Seq, \"|\">\n\n  Seq\n    = Iter*\n\n  Iter\n    = Pred \"*\"  -- star\n    | Pred \"+\"  -- plus\n    | Pred \"?\"  -- opt\n    | Pred\n\n  Pred\n    = \"~\" Lex  -- not\n    | \"&\" Lex  -- lookahead\n    | Lex\n\n  Lex\n    = \"#\" Base  -- lex\n    | Base\n\n  Base\n    = ident Params? ~(ruleDescr? \"=\" | \":=\" | \"+=\")  -- application\n    | terminal \"..\" terminal                         -- range\n    | terminal                                       -- terminal\n    | \"(\" Alt \")\"                                    -- paren\n\n  ruleDescr  (a rule description)\n    = \"(\" ruleDescrText \")\"\n\n  ruleDescrText\n    = (~\")\" any)*\n\n  caseName\n    = \"--\" (~\"\\n\" space)* name (~\"\\n\" space)* (\"\\n\" | &\"}\")\n\n  name  (a name)\n    = nameFirst nameRest*\n\n  nameFirst\n    = \"_\"\n    | letter\n\n  nameRest\n    = \"_\"\n    | alnum\n\n  ident  (an identifier)\n    = name\n\n  terminal\n    = \"\\\"\" terminalChar* \"\\\"\"\n\n  terminalChar\n    = escapeChar\n    | ~\"\\\\\" ~\"\\\"\" ~\"\\n\" any\n\n  escapeChar  (an escape sequence)\n    = \"\\\\\\\\\"                                     -- backslash\n    | \"\\\\\\\"\"                                     -- doubleQuote\n    | \"\\\\\\'\"                                     -- singleQuote\n    | \"\\\\b\"                                      -- backspace\n    | \"\\\\n\"                                      -- lineFeed\n    | \"\\\\r\"                                      -- carriageReturn\n    | \"\\\\t\"                                      -- tab\n    | \"\\\\u\" hexDigit hexDigit hexDigit hexDigit  -- unicodeEscape\n    | \"\\\\x\" hexDigit hexDigit                    -- hexEscape\n\n  space\n   += comment\n\n  comment\n    = \"//\" (~\"\\n\" any)* \"\\n\"  -- singleLine\n    | \"/*\" (~\"*/\" any)* \"*/\"  -- multiLine\n\n  tokens = token*\n\n  token = caseName | comment | ident | operator | punctuation | terminal | any\n\n  operator = \"<:\" | \"=\" | \":=\" | \"+=\" | \"*\" | \"+\" | \"?\" | \"~\" | \"&\"\n\n  punctuation = \"<\" | \">\" | \",\" | \"--\"\n}"},"Ohm",null,"Grammars",{"Grammars":["define",{"sourceInterval":[9,32]},null,[],["star",{"sourceInterval":[24,32]},["app",{"sourceInterval":[24,31]},"Grammar",[]]]],"Grammar":["define",{"sourceInterval":[36,83]},null,[],["seq",{"sourceInterval":[50,83]},["app",{"sourceInterval":[50,55]},"ident",[]],["opt",{"sourceInterval":[56,69]},["app",{"sourceInterval":[56,68]},"SuperGrammar",[]]],["terminal",{"sourceInterval":[70,73]},"{"],["star",{"sourceInterval":[74,79]},["app",{"sourceInterval":[74,78]},"Rule",[]]],["terminal",{"sourceInterval":[80,83]},"}"]]],"SuperGrammar":["define",{"sourceInterval":[87,116]},null,[],["seq",{"sourceInterval":[106,116]},["terminal",{"sourceInterval":[106,110]},"<:"],["app",{"sourceInterval":[111,116]},"ident",[]]]],"Rule_define":["define",{"sourceInterval":[131,181]},null,[],["seq",{"sourceInterval":[131,170]},["app",{"sourceInterval":[131,136]},"ident",[]],["opt",{"sourceInterval":[137,145]},["app",{"sourceInterval":[137,144]},"Formals",[]]],["opt",{"sourceInterval":[146,156]},["app",{"sourceInterval":[146,155]},"ruleDescr",[]]],["terminal",{"sourceInterval":[157,160]},"="],["app",{"sourceInterval":[162,170]},"RuleBody",[]]]],"Rule_override":["define",{"sourceInterval":[188,240]},null,[],["seq",{"sourceInterval":[188,227]},["app",{"sourceInterval":[188,193]},"ident",[]],["opt",{"sourceInterval":[194,202]},["app",{"sourceInterval":[194,201]},"Formals",[]]],["terminal",{"sourceInterval":[214,218]},":="],["app",{"sourceInterval":[219,227]},"RuleBody",[]]]],"Rule_extend":["define",{"sourceInterval":[247,297]},null,[],["seq",{"sourceInterval":[247,286]},["app",{"sourceInterval":[247,252]},"ident",[]],["opt",{"sourceInterval":[253,261]},["app",{"sourceInterval":[253,260]},"Formals",[]]],["terminal",{"sourceInterval":[273,277]},"+="],["app",{"sourceInterval":[278,286]},"RuleBody",[]]]],"Rule":["define",{"sourceInterval":[120,297]},null,[],["alt",{"sourceInterval":[131,297]},["app",{"sourceInterval":[131,170]},"Rule_define",[]],["app",{"sourceInterval":[188,227]},"Rule_override",[]],["app",{"sourceInterval":[247,286]},"Rule_extend",[]]]],"RuleBody":["define",{"sourceInterval":[301,354]},null,[],["seq",{"sourceInterval":[316,354]},["opt",{"sourceInterval":[316,320]},["terminal",{"sourceInterval":[316,319]},"|"]],["app",{"sourceInterval":[321,354]},"NonemptyListOf",[["app",{"sourceInterval":[336,348]},"TopLevelTerm",[]],["terminal",{"sourceInterval":[350,353]},"|"]]]]],"TopLevelTerm_inline":["define",{"sourceInterval":[377,400]},null,[],["seq",{"sourceInterval":[377,389]},["app",{"sourceInterval":[377,380]},"Seq",[]],["app",{"sourceInterval":[381,389]},"caseName",[]]]],"TopLevelTerm":["define",{"sourceInterval":[358,410]},null,[],["alt",{"sourceInterval":[377,410]},["app",{"sourceInterval":[377,389]},"TopLevelTerm_inline",[]],["app",{"sourceInterval":[407,410]},"Seq",[]]]],"Formals":["define",{"sourceInterval":[414,454]},null,[],["seq",{"sourceInterval":[428,454]},["terminal",{"sourceInterval":[428,431]},"<"],["app",{"sourceInterval":[432,450]},"ListOf",[["app",{"sourceInterval":[439,444]},"ident",[]],["terminal",{"sourceInterval":[446,449]},","]]],["terminal",{"sourceInterval":[451,454]},">"]]],"Params":["define",{"sourceInterval":[458,495]},null,[],["seq",{"sourceInterval":[471,495]},["terminal",{"sourceInterval":[471,474]},"<"],["app",{"sourceInterval":[475,491]},"ListOf",[["app",{"sourceInterval":[482,485]},"Seq",[]],["terminal",{"sourceInterval":[487,490]},","]]],["terminal",{"sourceInterval":[492,495]},">"]]],"Alt":["define",{"sourceInterval":[499,533]},null,[],["app",{"sourceInterval":[509,533]},"NonemptyListOf",[["app",{"sourceInterval":[524,527]},"Seq",[]],["terminal",{"sourceInterval":[529,532]},"|"]]]],"Seq":["define",{"sourceInterval":[537,552]},null,[],["star",{"sourceInterval":[547,552]},["app",{"sourceInterval":[547,551]},"Iter",[]]]],"Iter_star":["define",{"sourceInterval":[567,584]},null,[],["seq",{"sourceInterval":[567,575]},["app",{"sourceInterval":[567,571]},"Pred",[]],["terminal",{"sourceInterval":[572,575]},"*"]]],"Iter_plus":["define",{"sourceInterval":[591,608]},null,[],["seq",{"sourceInterval":[591,599]},["app",{"sourceInterval":[591,595]},"Pred",[]],["terminal",{"sourceInterval":[596,599]},"+"]]],"Iter_opt":["define",{"sourceInterval":[615,631]},null,[],["seq",{"sourceInterval":[615,623]},["app",{"sourceInterval":[615,619]},"Pred",[]],["terminal",{"sourceInterval":[620,623]},"?"]]],"Iter":["define",{"sourceInterval":[556,642]},null,[],["alt",{"sourceInterval":[567,642]},["app",{"sourceInterval":[567,575]},"Iter_star",[]],["app",{"sourceInterval":[591,599]},"Iter_plus",[]],["app",{"sourceInterval":[615,623]},"Iter_opt",[]],["app",{"sourceInterval":[638,642]},"Pred",[]]]],"Pred_not":["define",{"sourceInterval":[657,672]},null,[],["seq",{"sourceInterval":[657,664]},["terminal",{"sourceInterval":[657,660]},"~"],["app",{"sourceInterval":[661,664]},"Lex",[]]]],"Pred_lookahead":["define",{"sourceInterval":[679,700]},null,[],["seq",{"sourceInterval":[679,686]},["terminal",{"sourceInterval":[679,682]},"&"],["app",{"sourceInterval":[683,686]},"Lex",[]]]],"Pred":["define",{"sourceInterval":[646,710]},null,[],["alt",{"sourceInterval":[657,710]},["app",{"sourceInterval":[657,664]},"Pred_not",[]],["app",{"sourceInterval":[679,686]},"Pred_lookahead",[]],["app",{"sourceInterval":[707,710]},"Lex",[]]]],"Lex_lex":["define",{"sourceInterval":[724,740]},null,[],["seq",{"sourceInterval":[724,732]},["terminal",{"sourceInterval":[724,727]},"#"],["app",{"sourceInterval":[728,732]},"Base",[]]]],"Lex":["define",{"sourceInterval":[714,751]},null,[],["alt",{"sourceInterval":[724,751]},["app",{"sourceInterval":[724,732]},"Lex_lex",[]],["app",{"sourceInterval":[747,751]},"Base",[]]]],"Base_application":["define",{"sourceInterval":[766,827]},null,[],["seq",{"sourceInterval":[766,811]},["app",{"sourceInterval":[766,771]},"ident",[]],["opt",{"sourceInterval":[772,779]},["app",{"sourceInterval":[772,778]},"Params",[]]],["not",{"sourceInterval":[780,811]},["alt",{"sourceInterval":[782,810]},["seq",{"sourceInterval":[782,796]},["opt",{"sourceInterval":[782,792]},["app",{"sourceInterval":[782,791]},"ruleDescr",[]]],["terminal",{"sourceInterval":[793,796]},"="]],["terminal",{"sourceInterval":[799,803]},":="],["terminal",{"sourceInterval":[806,810]},"+="]]]]],"Base_range":["define",{"sourceInterval":[834,889]},null,[],["seq",{"sourceInterval":[834,856]},["app",{"sourceInterval":[834,842]},"terminal",[]],["terminal",{"sourceInterval":[843,847]},".."],["app",{"sourceInterval":[848,856]},"terminal",[]]]],"Base_terminal":["define",{"sourceInterval":[896,954]},null,[],["app",{"sourceInterval":[896,904]},"terminal",[]]],"Base_paren":["define",{"sourceInterval":[961,1016]},null,[],["seq",{"sourceInterval":[961,972]},["terminal",{"sourceInterval":[961,964]},"("],["app",{"sourceInterval":[965,968]},"Alt",[]],["terminal",{"sourceInterval":[969,972]},")"]]],"Base":["define",{"sourceInterval":[755,1016]},null,[],["alt",{"sourceInterval":[766,1016]},["app",{"sourceInterval":[766,811]},"Base_application",[]],["app",{"sourceInterval":[834,856]},"Base_range",[]],["app",{"sourceInterval":[896,904]},"Base_terminal",[]],["app",{"sourceInterval":[961,972]},"Base_paren",[]]]],"ruleDescr":["define",{"sourceInterval":[1020,1079]},"a rule description",[],["seq",{"sourceInterval":[1058,1079]},["terminal",{"sourceInterval":[1058,1061]},"("],["app",{"sourceInterval":[1062,1075]},"ruleDescrText",[]],["terminal",{"sourceInterval":[1076,1079]},")"]]],"ruleDescrText":["define",{"sourceInterval":[1083,1114]},null,[],["star",{"sourceInterval":[1103,1114]},["seq",{"sourceInterval":[1104,1112]},["not",{"sourceInterval":[1104,1108]},["terminal",{"sourceInterval":[1105,1108]},")"]],["app",{"sourceInterval":[1109,1112]},"any",[]]]]],"caseName":["define",{"sourceInterval":[1118,1186]},null,[],["seq",{"sourceInterval":[1133,1186]},["terminal",{"sourceInterval":[1133,1137]},"--"],["star",{"sourceInterval":[1138,1152]},["seq",{"sourceInterval":[1139,1150]},["not",{"sourceInterval":[1139,1144]},["terminal",{"sourceInterval":[1140,1144]},"\n"]],["app",{"sourceInterval":[1145,1150]},"space",[]]]],["app",{"sourceInterval":[1153,1157]},"name",[]],["star",{"sourceInterval":[1158,1172]},["seq",{"sourceInterval":[1159,1170]},["not",{"sourceInterval":[1159,1164]},["terminal",{"sourceInterval":[1160,1164]},"\n"]],["app",{"sourceInterval":[1165,1170]},"space",[]]]],["alt",{"sourceInterval":[1174,1185]},["terminal",{"sourceInterval":[1174,1178]},"\n"],["lookahead",{"sourceInterval":[1181,1185]},["terminal",{"sourceInterval":[1182,1185]},"}"]]]]],"name":["define",{"sourceInterval":[1190,1230]},"a name",[],["seq",{"sourceInterval":[1211,1230]},["app",{"sourceInterval":[1211,1220]},"nameFirst",[]],["star",{"sourceInterval":[1221,1230]},["app",{"sourceInterval":[1221,1229]},"nameRest",[]]]]],"nameFirst":["define",{"sourceInterval":[1234,1266]},null,[],["alt",{"sourceInterval":[1250,1266]},["terminal",{"sourceInterval":[1250,1253]},"_"],["app",{"sourceInterval":[1260,1266]},"letter",[]]]],"nameRest":["define",{"sourceInterval":[1270,1300]},null,[],["alt",{"sourceInterval":[1285,1300]},["terminal",{"sourceInterval":[1285,1288]},"_"],["app",{"sourceInterval":[1295,1300]},"alnum",[]]]],"ident":["define",{"sourceInterval":[1304,1337]},"an identifier",[],["app",{"sourceInterval":[1333,1337]},"name",[]]],"terminal":["define",{"sourceInterval":[1341,1379]},null,[],["seq",{"sourceInterval":[1356,1379]},["terminal",{"sourceInterval":[1356,1360]},"\""],["star",{"sourceInterval":[1361,1374]},["app",{"sourceInterval":[1361,1373]},"terminalChar",[]]],["terminal",{"sourceInterval":[1375,1379]},"\""]]],"terminalChar":["define",{"sourceInterval":[1383,1440]},null,[],["alt",{"sourceInterval":[1402,1440]},["app",{"sourceInterval":[1402,1412]},"escapeChar",[]],["seq",{"sourceInterval":[1419,1440]},["not",{"sourceInterval":[1419,1424]},["terminal",{"sourceInterval":[1420,1424]},"\\"]],["not",{"sourceInterval":[1425,1430]},["terminal",{"sourceInterval":[1426,1430]},"\""]],["not",{"sourceInterval":[1431,1436]},["terminal",{"sourceInterval":[1432,1436]},"\n"]],["app",{"sourceInterval":[1437,1440]},"any",[]]]]],"escapeChar_backslash":["define",{"sourceInterval":[1483,1538]},null,[],["terminal",{"sourceInterval":[1483,1489]},"\\\\"]],"escapeChar_doubleQuote":["define",{"sourceInterval":[1545,1602]},null,[],["terminal",{"sourceInterval":[1545,1551]},"\\\""]],"escapeChar_singleQuote":["define",{"sourceInterval":[1609,1666]},null,[],["terminal",{"sourceInterval":[1609,1615]},"\\'"]],"escapeChar_backspace":["define",{"sourceInterval":[1673,1728]},null,[],["terminal",{"sourceInterval":[1673,1678]},"\\b"]],"escapeChar_lineFeed":["define",{"sourceInterval":[1735,1789]},null,[],["terminal",{"sourceInterval":[1735,1740]},"\\n"]],"escapeChar_carriageReturn":["define",{"sourceInterval":[1796,1856]},null,[],["terminal",{"sourceInterval":[1796,1801]},"\\r"]],"escapeChar_tab":["define",{"sourceInterval":[1863,1912]},null,[],["terminal",{"sourceInterval":[1863,1868]},"\\t"]],"escapeChar_unicodeEscape":["define",{"sourceInterval":[1919,1978]},null,[],["seq",{"sourceInterval":[1919,1960]},["terminal",{"sourceInterval":[1919,1924]},"\\u"],["app",{"sourceInterval":[1925,1933]},"hexDigit",[]],["app",{"sourceInterval":[1934,1942]},"hexDigit",[]],["app",{"sourceInterval":[1943,1951]},"hexDigit",[]],["app",{"sourceInterval":[1952,1960]},"hexDigit",[]]]],"escapeChar_hexEscape":["define",{"sourceInterval":[1985,2040]},null,[],["seq",{"sourceInterval":[1985,2008]},["terminal",{"sourceInterval":[1985,1990]},"\\x"],["app",{"sourceInterval":[1991,1999]},"hexDigit",[]],["app",{"sourceInterval":[2000,2008]},"hexDigit",[]]]],"escapeChar":["define",{"sourceInterval":[1444,2040]},"an escape sequence",[],["alt",{"sourceInterval":[1483,2040]},["app",{"sourceInterval":[1483,1489]},"escapeChar_backslash",[]],["app",{"sourceInterval":[1545,1551]},"escapeChar_doubleQuote",[]],["app",{"sourceInterval":[1609,1615]},"escapeChar_singleQuote",[]],["app",{"sourceInterval":[1673,1678]},"escapeChar_backspace",[]],["app",{"sourceInterval":[1735,1740]},"escapeChar_lineFeed",[]],["app",{"sourceInterval":[1796,1801]},"escapeChar_carriageReturn",[]],["app",{"sourceInterval":[1863,1868]},"escapeChar_tab",[]],["app",{"sourceInterval":[1919,1960]},"escapeChar_unicodeEscape",[]],["app",{"sourceInterval":[1985,2008]},"escapeChar_hexEscape",[]]]],"space":["extend",{"sourceInterval":[2044,2063]},null,[],["app",{"sourceInterval":[2056,2063]},"comment",[]]],"comment_singleLine":["define",{"sourceInterval":[2081,2118]},null,[],["seq",{"sourceInterval":[2081,2103]},["terminal",{"sourceInterval":[2081,2085]},"//"],["star",{"sourceInterval":[2086,2098]},["seq",{"sourceInterval":[2087,2096]},["not",{"sourceInterval":[2087,2092]},["terminal",{"sourceInterval":[2088,2092]},"\n"]],["app",{"sourceInterval":[2093,2096]},"any",[]]]],["terminal",{"sourceInterval":[2099,2103]},"\n"]]],"comment_multiLine":["define",{"sourceInterval":[2125,2161]},null,[],["seq",{"sourceInterval":[2125,2147]},["terminal",{"sourceInterval":[2125,2129]},"/*"],["star",{"sourceInterval":[2130,2142]},["seq",{"sourceInterval":[2131,2140]},["not",{"sourceInterval":[2131,2136]},["terminal",{"sourceInterval":[2132,2136]},"*/"]],["app",{"sourceInterval":[2137,2140]},"any",[]]]],["terminal",{"sourceInterval":[2143,2147]},"*/"]]],"comment":["define",{"sourceInterval":[2067,2161]},null,[],["alt",{"sourceInterval":[2081,2161]},["app",{"sourceInterval":[2081,2103]},"comment_singleLine",[]],["app",{"sourceInterval":[2125,2147]},"comment_multiLine",[]]]],"tokens":["define",{"sourceInterval":[2165,2180]},null,[],["star",{"sourceInterval":[2174,2180]},["app",{"sourceInterval":[2174,2179]},"token",[]]]],"token":["define",{"sourceInterval":[2184,2260]},null,[],["alt",{"sourceInterval":[2192,2260]},["app",{"sourceInterval":[2192,2200]},"caseName",[]],["app",{"sourceInterval":[2203,2210]},"comment",[]],["app",{"sourceInterval":[2213,2218]},"ident",[]],["app",{"sourceInterval":[2221,2229]},"operator",[]],["app",{"sourceInterval":[2232,2243]},"punctuation",[]],["app",{"sourceInterval":[2246,2254]},"terminal",[]],["app",{"sourceInterval":[2257,2260]},"any",[]]]],"operator":["define",{"sourceInterval":[2264,2329]},null,[],["alt",{"sourceInterval":[2275,2329]},["terminal",{"sourceInterval":[2275,2279]},"<:"],["terminal",{"sourceInterval":[2282,2285]},"="],["terminal",{"sourceInterval":[2288,2292]},":="],["terminal",{"sourceInterval":[2295,2299]},"+="],["terminal",{"sourceInterval":[2302,2305]},"*"],["terminal",{"sourceInterval":[2308,2311]},"+"],["terminal",{"sourceInterval":[2314,2317]},"?"],["terminal",{"sourceInterval":[2320,2323]},"~"],["terminal",{"sourceInterval":[2326,2329]},"&"]]],"punctuation":["define",{"sourceInterval":[2333,2369]},null,[],["alt",{"sourceInterval":[2347,2369]},["terminal",{"sourceInterval":[2347,2350]},"<"],["terminal",{"sourceInterval":[2353,2356]},">"],["terminal",{"sourceInterval":[2359,2362]},","],["terminal",{"sourceInterval":[2365,2369]},"--"]]]}]);},{"..":41}],3:[function(require,module,exports){var ohm=require('..');module.exports=ohm.makeRecipe(["grammar",{"source":"OperationsAndAttributes {\n\n  AttributeSignature =\n    name\n\n  OperationSignature =\n    name Formals?\n\n  Formals\n    = \"(\" ListOf<name, \",\"> \")\"\n\n  name  (a name)\n    = nameFirst nameRest*\n\n  nameFirst\n    = \"_\"\n    | letter\n\n  nameRest\n    = \"_\"\n    | alnum\n\n}"},"OperationsAndAttributes",null,"AttributeSignature",{"AttributeSignature":["define",{"sourceInterval":[29,58]},null,[],["app",{"sourceInterval":[54,58]},"name",[]]],"OperationSignature":["define",{"sourceInterval":[62,100]},null,[],["seq",{"sourceInterval":[87,100]},["app",{"sourceInterval":[87,91]},"name",[]],["opt",{"sourceInterval":[92,100]},["app",{"sourceInterval":[92,99]},"Formals",[]]]]],"Formals":["define",{"sourceInterval":[104,143]},null,[],["seq",{"sourceInterval":[118,143]},["terminal",{"sourceInterval":[118,121]},"("],["app",{"sourceInterval":[122,139]},"ListOf",[["app",{"sourceInterval":[129,133]},"name",[]],["terminal",{"sourceInterval":[135,138]},","]]],["terminal",{"sourceInterval":[140,143]},")"]]],"name":["define",{"sourceInterval":[147,187]},"a name",[],["seq",{"sourceInterval":[168,187]},["app",{"sourceInterval":[168,177]},"nameFirst",[]],["star",{"sourceInterval":[178,187]},["app",{"sourceInterval":[178,186]},"nameRest",[]]]]],"nameFirst":["define",{"sourceInterval":[191,223]},null,[],["alt",{"sourceInterval":[207,223]},["terminal",{"sourceInterval":[207,210]},"_"],["app",{"sourceInterval":[217,223]},"letter",[]]]],"nameRest":["define",{"sourceInterval":[227,257]},null,[],["alt",{"sourceInterval":[242,257]},["terminal",{"sourceInterval":[242,245]},"_"],["app",{"sourceInterval":[252,257]},"alnum",[]]]]}]);},{"..":41}],4:[function(require,module,exports){'use strict';module.exports={toAST:require('./semantics-toAST').helper,semanticsForToAST:require('./semantics-toAST').semantics};},{"./semantics-toAST":5}],5:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var pexprs=require('../src/pexprs');var MatchResult=require('../src/MatchResult');var Grammar=require('../src/Grammar');var extend=require('util-extend');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	var defaultOperation={_terminal:function _terminal(){return this.primitiveValue;},_nonterminal:function _nonterminal(children){var ctorName=this._node.ctorName;var mapping=this.args.mapping;// without customization
	if(!mapping.hasOwnProperty(ctorName)){// intermediate node
	if(this._node instanceof pexprs.Alt||this._node instanceof pexprs.Apply){return children[0].toAST(mapping);}// lexical rule
	if(this.isLexical()){return this.sourceString;}// singular node (e.g. only surrounded by literals or lookaheads)
	var realChildren=children.filter(function(child){return!child.isTerminal();});if(realChildren.length===1){return realChildren[0].toAST(mapping);}// rest: terms with multiple children
	}// direct forward
	if(typeof mapping[ctorName]==='number'){return children[mapping[ctorName]].toAST(mapping);}// named/mapped children or unnamed children ('0', '1', '2', ...)
	var propMap=mapping[ctorName]||children;var node={type:ctorName};for(var prop in propMap){var mappedProp=mapping[ctorName]&&mapping[ctorName][prop];if(typeof mappedProp==='number'){// direct forward
	node[prop]=children[mappedProp].toAST(mapping);}else if(typeof mappedProp==='string'||typeof mappedProp==='boolean'||mappedProp===null){// primitive value
	node[prop]=mappedProp;}else if((typeof mappedProp==="undefined"?"undefined":_typeof(mappedProp))==='object'&&mappedProp instanceof Number){// primitive number (must be unboxed)
	node[prop]=Number(mappedProp);}else if(typeof mappedProp==='function'){// computed value
	node[prop]=mappedProp.call(this,children);}else if(mappedProp===undefined){if(children[prop]&&!children[prop].isTerminal()){node[prop]=children[prop].toAST(mapping);}else{// delete predefined 'type' properties, like 'type', if explicitely removed
	delete node[prop];}}}return node;},_iter:function _iter(children){if(this._node.isOptional()){if(this.numChildren===0){return null;}else{return children[0].toAST(this.args.mapping);}}return children.map(function(child){return child.toAST(this.args.mapping);},this);},NonemptyListOf:function NonemptyListOf(first,sep,rest){return[first.toAST(this.args.mapping)].concat(rest.toAST(this.args.mapping));},EmptyListOf:function EmptyListOf(){return[];}};// Returns a plain JavaScript object that includes an abstract syntax tree (AST)
	// for the given match result `res` containg a concrete syntax tree (CST) and grammar.
	// The optional `mapping` parameter can be used to customize how the nodes of the CST
	// are mapped to the AST (see /doc/extras.md#toastmatchresult-mapping).
	function toAST(res,mapping){if(!(res instanceof MatchResult)||res.failed()){throw new Error('toAST() expects a succesfull MatchResult as first parameter');}mapping=extend({},mapping);var operation=extend({},defaultOperation);for(var termName in mapping){if(typeof mapping[termName]==='function'){operation[termName]=mapping[termName];delete mapping[termName];}}var g=res._cst.grammar;var s=g.semantics().addOperation('toAST(mapping)',operation);return s(res).toAST(mapping);}// Returns a semantics containg the toAST(mapping) operation for the given grammar g.
	function semanticsForToAST(g){if(!(g instanceof Grammar)){throw new Error('semanticsToAST() expects a Grammar as parameter');}return g.semantics().addOperation('toAST(mapping)',defaultOperation);}module.exports={helper:toAST,semantics:semanticsForToAST};},{"../src/Grammar":29,"../src/MatchResult":33,"../src/pexprs":59,"util-extend":26}],6:[function(require,module,exports){'use strict';module.exports=require('./is-implemented')()?Symbol:require('./polyfill');},{"./is-implemented":7,"./polyfill":22}],7:[function(require,module,exports){'use strict';module.exports=function(){var symbol;if(typeof Symbol!=='function')return false;symbol=Symbol('test symbol');try{String(symbol);}catch(e){return false;}if(_typeof(Symbol.iterator)==='symbol')return true;// Return 'true' for polyfills
	if(_typeof(Symbol.isConcatSpreadable)!=='object')return false;if(_typeof(Symbol.iterator)!=='object')return false;if(_typeof(Symbol.toPrimitive)!=='object')return false;if(_typeof(Symbol.toStringTag)!=='object')return false;if(_typeof(Symbol.unscopables)!=='object')return false;return true;};},{}],8:[function(require,module,exports){'use strict';module.exports=function(x){return x&&((typeof x==="undefined"?"undefined":_typeof(x))==='symbol'||x['@@toStringTag']==='Symbol')||false;};},{}],9:[function(require,module,exports){'use strict';var assign=require('es5-ext/object/assign'),normalizeOpts=require('es5-ext/object/normalize-options'),isCallable=require('es5-ext/object/is-callable'),contains=require('es5-ext/string/#/contains'),d;d=module.exports=function(dscr,value/*, options*/){var c,e,w,options,desc;if(arguments.length<2||typeof dscr!=='string'){options=value;value=dscr;dscr=null;}else{options=arguments[2];}if(dscr==null){c=w=true;e=false;}else{c=contains.call(dscr,'c');e=contains.call(dscr,'e');w=contains.call(dscr,'w');}desc={value:value,configurable:c,enumerable:e,writable:w};return!options?desc:assign(normalizeOpts(options),desc);};d.gs=function(dscr,get,set/*, options*/){var c,e,options,desc;if(typeof dscr!=='string'){options=set;set=get;get=dscr;dscr=null;}else{options=arguments[3];}if(get==null){get=undefined;}else if(!isCallable(get)){options=get;get=set=undefined;}else if(set==null){set=undefined;}else if(!isCallable(set)){options=set;set=undefined;}if(dscr==null){c=true;e=false;}else{c=contains.call(dscr,'c');e=contains.call(dscr,'e');}desc={get:get,set:set,configurable:c,enumerable:e};return!options?desc:assign(normalizeOpts(options),desc);};},{"es5-ext/object/assign":10,"es5-ext/object/is-callable":13,"es5-ext/object/normalize-options":17,"es5-ext/string/#/contains":19}],10:[function(require,module,exports){'use strict';module.exports=require('./is-implemented')()?Object.assign:require('./shim');},{"./is-implemented":11,"./shim":12}],11:[function(require,module,exports){'use strict';module.exports=function(){var assign=Object.assign,obj;if(typeof assign!=='function')return false;obj={foo:'raz'};assign(obj,{bar:'dwa'},{trzy:'trzy'});return obj.foo+obj.bar+obj.trzy==='razdwatrzy';};},{}],12:[function(require,module,exports){'use strict';var keys=require('../keys'),value=require('../valid-value'),max=Math.max;module.exports=function(dest,src/*, …srcn*/){var error,i,l=max(arguments.length,2),assign;dest=Object(value(dest));assign=function assign(key){try{dest[key]=src[key];}catch(e){if(!error)error=e;}};for(i=1;i<l;++i){src=arguments[i];keys(src).forEach(assign);}if(error!==undefined)throw error;return dest;};},{"../keys":14,"../valid-value":18}],13:[function(require,module,exports){// Deprecated
	'use strict';module.exports=function(obj){return typeof obj==='function';};},{}],14:[function(require,module,exports){'use strict';module.exports=require('./is-implemented')()?Object.keys:require('./shim');},{"./is-implemented":15,"./shim":16}],15:[function(require,module,exports){'use strict';module.exports=function(){try{Object.keys('primitive');return true;}catch(e){return false;}};},{}],16:[function(require,module,exports){'use strict';var keys=Object.keys;module.exports=function(object){return keys(object==null?object:Object(object));};},{}],17:[function(require,module,exports){'use strict';var forEach=Array.prototype.forEach,create=Object.create;var process=function process(src,obj){var key;for(key in src){obj[key]=src[key];}};module.exports=function(options/*, …options*/){var result=create(null);forEach.call(arguments,function(options){if(options==null)return;process(Object(options),result);});return result;};},{}],18:[function(require,module,exports){'use strict';module.exports=function(value){if(value==null)throw new TypeError("Cannot use null or undefined");return value;};},{}],19:[function(require,module,exports){'use strict';module.exports=require('./is-implemented')()?String.prototype.contains:require('./shim');},{"./is-implemented":20,"./shim":21}],20:[function(require,module,exports){'use strict';var str='razdwatrzy';module.exports=function(){if(typeof str.contains!=='function')return false;return str.contains('dwa')===true&&str.contains('foo')===false;};},{}],21:[function(require,module,exports){'use strict';var indexOf=String.prototype.indexOf;module.exports=function(searchString/*, position*/){return indexOf.call(this,searchString,arguments[1])>-1;};},{}],22:[function(require,module,exports){'use strict';var d=require('d'),validateSymbol=require('./validate-symbol'),create=Object.create,defineProperties=Object.defineProperties,defineProperty=Object.defineProperty,objPrototype=Object.prototype,_Symbol,HiddenSymbol,globalSymbols=create(null);var generateName=function(){var created=create(null);return function(desc){var postfix=0,name;while(created[desc+(postfix||'')]){++postfix;}desc+=postfix||'';created[desc]=true;name='@@'+desc;defineProperty(objPrototype,name,d.gs(null,function(value){defineProperty(this,name,d(value));}));return name;};}();HiddenSymbol=function _Symbol2(description){if(this instanceof HiddenSymbol)throw new TypeError('TypeError: Symbol is not a constructor');return _Symbol2(description);};module.exports=_Symbol=function _Symbol3(description){var symbol;if(this instanceof _Symbol3)throw new TypeError('TypeError: Symbol is not a constructor');symbol=create(HiddenSymbol.prototype);description=description===undefined?'':String(description);return defineProperties(symbol,{__description__:d('',description),__name__:d('',generateName(description))});};defineProperties(_Symbol,{for:d(function(key){if(globalSymbols[key])return globalSymbols[key];return globalSymbols[key]=_Symbol(String(key));}),keyFor:d(function(s){var key;validateSymbol(s);for(key in globalSymbols){if(globalSymbols[key]===s)return key;}}),hasInstance:d('',_Symbol('hasInstance')),isConcatSpreadable:d('',_Symbol('isConcatSpreadable')),iterator:d('',_Symbol('iterator')),match:d('',_Symbol('match')),replace:d('',_Symbol('replace')),search:d('',_Symbol('search')),species:d('',_Symbol('species')),split:d('',_Symbol('split')),toPrimitive:d('',_Symbol('toPrimitive')),toStringTag:d('',_Symbol('toStringTag')),unscopables:d('',_Symbol('unscopables'))});defineProperties(HiddenSymbol.prototype,{constructor:d(_Symbol),toString:d('',function(){return this.__name__;})});defineProperties(_Symbol.prototype,{toString:d(function(){return'Symbol ('+validateSymbol(this).__description__+')';}),valueOf:d(function(){return validateSymbol(this);})});defineProperty(_Symbol.prototype,_Symbol.toPrimitive,d('',function(){return validateSymbol(this);}));defineProperty(_Symbol.prototype,_Symbol.toStringTag,d('c','Symbol'));defineProperty(HiddenSymbol.prototype,_Symbol.toPrimitive,d('c',_Symbol.prototype[_Symbol.toPrimitive]));defineProperty(HiddenSymbol.prototype,_Symbol.toStringTag,d('c',_Symbol.prototype[_Symbol.toStringTag]));},{"./validate-symbol":23,"d":9}],23:[function(require,module,exports){'use strict';var isSymbol=require('./is-symbol');module.exports=function(value){if(!isSymbol(value))throw new TypeError(value+" is not a symbol");return value;};},{"./is-symbol":8}],24:[function(require,module,exports){if(typeof Object.create==='function'){// implementation from standard node.js 'util' module
	module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else{// old school shim for old browsers
	module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor;var TempCtor=function TempCtor(){};TempCtor.prototype=superCtor.prototype;ctor.prototype=new TempCtor();ctor.prototype.constructor=ctor;};}},{}],25:[function(require,module,exports){/**
	 * Determine if an object is Buffer
	 *
	 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * License:  MIT
	 *
	 * `npm install is-buffer`
	 */module.exports=function(obj){return!!(obj!=null&&obj.constructor&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj));};},{}],26:[function(require,module,exports){// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	module.exports=extend;function extend(origin,add){// Don't do anything if add isn't an object
	if(!add||(typeof add==="undefined"?"undefined":_typeof(add))!=='object')return origin;var keys=Object.keys(add);var i=keys.length;while(i--){origin[keys[i]]=add[keys[i]];}return origin;}},{}],27:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var GrammarDecl=require('./GrammarDecl');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function Builder(){}Builder.prototype={currentDecl:null,newGrammar:function newGrammar(name){return new GrammarDecl(name);},grammar:function grammar(metaInfo,name,superGrammar,defaultStartRule,rules){var gDecl=new GrammarDecl(name);if(superGrammar){gDecl.withSuperGrammar(this.fromRecipe(superGrammar));}if(defaultStartRule){gDecl.withDefaultStartRule(defaultStartRule);}if(metaInfo&&metaInfo.source){gDecl.withSource(metaInfo.source);}var self=this;this.currentDecl=gDecl;Object.keys(rules).forEach(function(ruleName){var ruleRecipe=rules[ruleName];var action=ruleRecipe[0];// define/extend/override
	var metaInfo=ruleRecipe[1];var description=ruleRecipe[2];var formals=ruleRecipe[3];var body=self.fromRecipe(ruleRecipe[4]);var source;if(gDecl.source&&metaInfo&&metaInfo.sourceInterval){var inputStream=gDecl.source.inputStream;source=inputStream.interval.apply(inputStream,metaInfo.sourceInterval);}gDecl[action](ruleName,formals,body,description,source);});this.currentDecl=null;return gDecl.build();},terminal:function terminal(x){return new pexprs.Terminal(x);},range:function range(from,to){return new pexprs.Range(from,to);},param:function param(index){return new pexprs.Param(index);},alt:function alt()/* term1, term1, ... */{var terms=[];for(var idx=0;idx<arguments.length;idx++){var arg=arguments[idx];if(!(arg instanceof pexprs.PExpr)){arg=this.fromRecipe(arg);}if(arg instanceof pexprs.Alt){terms=terms.concat(arg.terms);}else{terms.push(arg);}}return terms.length===1?terms[0]:new pexprs.Alt(terms);},seq:function seq()/* factor1, factor2, ... */{var factors=[];for(var idx=0;idx<arguments.length;idx++){var arg=arguments[idx];if(!(arg instanceof pexprs.PExpr)){arg=this.fromRecipe(arg);}if(arg instanceof pexprs.Seq){factors=factors.concat(arg.factors);}else{factors.push(arg);}}return factors.length===1?factors[0]:new pexprs.Seq(factors);},star:function star(expr){if(!(expr instanceof pexprs.PExpr)){expr=this.fromRecipe(expr);}return new pexprs.Star(expr);},plus:function plus(expr){if(!(expr instanceof pexprs.PExpr)){expr=this.fromRecipe(expr);}return new pexprs.Plus(expr);},opt:function opt(expr){if(!(expr instanceof pexprs.PExpr)){expr=this.fromRecipe(expr);}return new pexprs.Opt(expr);},not:function not(expr){if(!(expr instanceof pexprs.PExpr)){expr=this.fromRecipe(expr);}return new pexprs.Not(expr);},la:function la(expr){// TODO: temporary to still be able to read old recipes
	return this.lookahead(expr);},lookahead:function lookahead(expr){if(!(expr instanceof pexprs.PExpr)){expr=this.fromRecipe(expr);}return new pexprs.Lookahead(expr);},lex:function lex(expr){if(!(expr instanceof pexprs.PExpr)){expr=this.fromRecipe(expr);}return new pexprs.Lex(expr);},app:function app(ruleName,optParams){if(optParams&&optParams.length>0){optParams=optParams.map(function(param){return param instanceof pexprs.PExpr?param:this.fromRecipe(param);},this);}return new pexprs.Apply(ruleName,optParams);},fromRecipe:function fromRecipe(recipe){// the meta-info of 'grammar' is proccessed in Builder.grammar
	var result=this[recipe[0]].apply(this,recipe[0]==='grammar'?recipe.slice(1):recipe.slice(2));var metaInfo=recipe[1];if(metaInfo){if(metaInfo.sourceInterval&&this.currentDecl){result.withSource(this.currentDecl.sourceInterval.apply(this.currentDecl,metaInfo.sourceInterval));}}return result;}};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=Builder;},{"./GrammarDecl":30,"./pexprs":59}],28:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	/*
	  `Failure`s represent expressions that weren't matched while parsing. They are used to generate
	  error messages automatically. The interface of `Failure`s includes the collowing methods:
	
	  - getText() : String
	  - getType() : String  (one of {"description", "string", "code"})
	  - isDescription() : bool
	  - isStringTerminal() : bool
	  - isCode() : bool
	  - isFluffy() : bool
	  - makeFluffy() : void
	  - subsumes(Failure) : bool
	*/function isValidType(type){return type==='description'||type==='string'||type==='code';}function Failure(pexpr,text,type){if(!isValidType(type)){throw new Error('invalid Failure type: '+type);}this.pexpr=pexpr;this.text=text;this.type=type;this.fluffy=false;}Failure.prototype.getPExpr=function(){return this.pexpr;};Failure.prototype.getText=function(){return this.text;};Failure.prototype.getType=function(){return this.type;};Failure.prototype.isDescription=function(){return this.type==='description';};Failure.prototype.isStringTerminal=function(){return this.type==='string';};Failure.prototype.isCode=function(){return this.type==='code';};Failure.prototype.isFluffy=function(){return this.fluffy;};Failure.prototype.makeFluffy=function(){this.fluffy=true;};Failure.prototype.clearFluffy=function(){this.fluffy=false;};Failure.prototype.subsumes=function(that){return this.getText()===that.getText()&&this.type===that.type&&(!this.isFluffy()||this.isFluffy()&&that.isFluffy());};Failure.prototype.toString=function(){return this.type==='string'?JSON.stringify(this.getText()):this.getText();};Failure.prototype.clone=function(){var failure=new Failure(this.pexpr,this.text,this.type);if(this.isFluffy()){failure.makeFluffy();}return failure;};Failure.prototype.toKey=function(){return this.toString()+'#'+this.type;};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=Failure;},{}],29:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var MatchResult=require('./MatchResult');var Semantics=require('./Semantics');var State=require('./State');var common=require('./common');var errors=require('./errors');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function Grammar(name,superGrammar,rules,optDefaultStartRule){this.name=name;this.superGrammar=superGrammar;this.rules=rules;if(optDefaultStartRule){if(!(optDefaultStartRule in rules)){throw new Error("Invalid start rule: '"+optDefaultStartRule+"' is not a rule in grammar '"+name+"'");}this.defaultStartRule=optDefaultStartRule;}}var ohmGrammar;var buildGrammar;// This method is called from main.js once Ohm has loaded.
	Grammar.initApplicationParser=function(grammar,builderFn){ohmGrammar=grammar;buildGrammar=builderFn;};Grammar.prototype={// Return true if the grammar is a built-in grammar, otherwise false.
	// NOTE: This might give an unexpected result if called before BuiltInRules is defined!
	isBuiltIn:function isBuiltIn(){return this===Grammar.ProtoBuiltInRules||this===Grammar.BuiltInRules;},_match:function _match(input,opts){var state=new State(this,input,opts);state.evalFromStart();return state;},match:function match(input,optStartApplication){var state=this._match(input,{startApplication:optStartApplication});return MatchResult.newFor(state);},trace:function trace(input,optStartApplication){var state=this._match(input,{startApplication:optStartApplication,trace:true});// The trace node for the start rule is always the last entry. If it is a syntactic rule,
	// the first entry is for an application of 'spaces'.
	// TODO(pdubroy): Clean this up by introducing a special `Match<startAppl>` rule, which will
	// ensure that there is always a single root trace node.
	var rootTrace=state.trace[state.trace.length-1];rootTrace.state=state;rootTrace.result=MatchResult.newFor(state);return rootTrace;},semantics:function semantics(){return Semantics.createSemantics(this);},extendSemantics:function extendSemantics(superSemantics){return Semantics.createSemantics(this,superSemantics._getSemantics());},// Check that every key in `actionDict` corresponds to a semantic action, and that it maps to
	// a function of the correct arity. If not, throw an exception.
	_checkTopDownActionDict:function _checkTopDownActionDict(what,name,actionDict){function isSpecialAction(a){return a==='_iter'||a==='_terminal'||a==='_nonterminal'||a==='_default';}var problems=[];for(var k in actionDict){var v=actionDict[k];if(!isSpecialAction(k)&&!(k in this.rules)){problems.push("'"+k+"' is not a valid semantic action for '"+this.name+"'");}else if(typeof v!=='function'){problems.push("'"+k+"' must be a function in an action dictionary for '"+this.name+"'");}else{var actual=v.length;var expected=this._topDownActionArity(k);if(actual!==expected){problems.push("Semantic action '"+k+"' has the wrong arity: "+'expected '+expected+', got '+actual);}}}if(problems.length>0){var prettyProblems=problems.map(function(problem){return'- '+problem;});var error=new Error("Found errors in the action dictionary of the '"+name+"' "+what+':\n'+prettyProblems.join('\n'));error.problems=problems;throw error;}},// Return the expected arity for a semantic action named `actionName`, which
	// is either a rule name or a special action name like '_nonterminal'.
	_topDownActionArity:function _topDownActionArity(actionName){if(actionName==='_iter'||actionName==='_nonterminal'||actionName==='_default'){return 1;}else if(actionName==='_terminal'){return 0;}return this.rules[actionName].body.getArity();},_inheritsFrom:function _inheritsFrom(grammar){var g=this.superGrammar;while(g){if(g===grammar){return true;}g=g.superGrammar;}return false;},toRecipe:function toRecipe(optVarName){var metaInfo={};// Include the grammar source if it is available.
	if(this.source){metaInfo.source=this.source.contents;}var superGrammar=null;if(this.superGrammar&&!this.superGrammar.isBuiltIn()){superGrammar=JSON.parse(this.superGrammar.toRecipe());}var startRule=null;if(this.defaultStartRule){startRule=this.defaultStartRule;}var rules={};var self=this;Object.keys(this.rules).forEach(function(ruleName){var ruleInfo=self.rules[ruleName];var body=ruleInfo.body;var isDefinition=!self.superGrammar||!self.superGrammar.rules[ruleName];var operation;if(isDefinition){operation='define';}else{operation=body instanceof pexprs.Extend?'extend':'override';}var metaInfo={};if(ruleInfo.source&&self.source){var adjusted=ruleInfo.source.relativeTo(self.source);metaInfo.sourceInterval=[adjusted.startIdx,adjusted.endIdx];}var description=isDefinition?ruleInfo.description:null;var bodyRecipe=body.outputRecipe(ruleInfo.formals,self.source);rules[ruleName]=[operation,// "define"/"extend"/"override"
	metaInfo,description,ruleInfo.formals,bodyRecipe];});return JSON.stringify(['grammar',metaInfo,this.name,superGrammar,startRule,rules]);},// TODO: Come up with better names for these methods.
	// TODO: Write the analog of these methods for inherited attributes.
	toOperationActionDictionaryTemplate:function toOperationActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate();},toAttributeActionDictionaryTemplate:function toAttributeActionDictionaryTemplate(){return this._toOperationOrAttributeActionDictionaryTemplate();},_toOperationOrAttributeActionDictionaryTemplate:function _toOperationOrAttributeActionDictionaryTemplate(){// TODO: add the super-grammar's templates at the right place, e.g., a case for AddExpr_plus
	// should appear next to other cases of AddExpr.
	var sb=new common.StringBuffer();sb.append('{');var first=true;for(var ruleName in this.rules){var body=this.rules[ruleName].body;if(first){first=false;}else{sb.append(',');}sb.append('\n');sb.append('  ');this.addSemanticActionTemplate(ruleName,body,sb);}sb.append('\n}');return sb.contents();},addSemanticActionTemplate:function addSemanticActionTemplate(ruleName,body,sb){sb.append(ruleName);sb.append(': function(');var arity=this._topDownActionArity(ruleName);sb.append(common.repeat('_',arity).join(', '));sb.append(') {\n');sb.append('  }');},// Parse a string which expresses a rule application in this grammar, and return the
	// resulting Apply node.
	parseApplication:function parseApplication(str){var app;if(str.indexOf('<')===-1){// simple application
	app=new pexprs.Apply(str);}else{// parameterized application
	var cst=ohmGrammar.match(str,'Base_application');app=buildGrammar(cst,{});}// Ensure that the application is valid.
	if(!(app.ruleName in this.rules)){throw errors.undeclaredRule(app.ruleName,this.name);}var formals=this.rules[app.ruleName].formals;if(formals.length!==app.args.length){var source=this.rules[app.ruleName].source;throw errors.wrongNumberOfParameters(app.ruleName,formals.length,app.args.length,source);}return app;}};// The following grammar contains a few rules that couldn't be written  in "userland".
	// At the bottom of src/main.js, we create a sub-grammar of this grammar that's called
	// `BuiltInRules`. That grammar contains several convenience rules, e.g., `letter` and
	// `digit`, and is implicitly the super-grammar of any grammar whose super-grammar
	// isn't specified.
	Grammar.ProtoBuiltInRules=new Grammar('ProtoBuiltInRules',// name
	undefined,// supergrammar
	{// The following rules can't be written in userland because they reference
	// `any` and `end` directly.
	any:{body:pexprs.any,formals:[],description:'any object'},end:{body:pexprs.end,formals:[],description:'end of input'},// The following rule is invoked implicitly by syntactic rules to skip spaces.
	spaces:{body:new pexprs.Star(new pexprs.Apply('space')),formals:[]},// The `space` rule must be defined here because it's referenced by `spaces`.
	space:{body:new pexprs.Range('\x00',' '),formals:[],description:'a space'},// These rules are implemented natively because they use UnicodeChar directly, which is
	// not part of the Ohm grammar.
	lower:{body:new pexprs.UnicodeChar('Ll'),formals:[],description:'a lowercase letter'},upper:{body:new pexprs.UnicodeChar('Lu'),formals:[],description:'an uppercase letter'},// The union of Lt (titlecase), Lm (modifier), and Lo (other), i.e. any letter not
	// in Ll or Lu.
	unicodeLtmo:{body:new pexprs.UnicodeChar('Ltmo'),formals:[]}});// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=Grammar;},{"./MatchResult":33,"./Semantics":36,"./State":37,"./common":39,"./errors":40,"./pexprs":59}],30:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var Grammar=require('./Grammar');var InputStream=require('./InputStream');var common=require('./common');var errors=require('./errors');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Private Stuff
	// --------------------------------------------------------------------
	// Constructors
	function GrammarDecl(name){this.name=name;}// Helpers
	GrammarDecl.prototype.sourceInterval=function(startIdx,endIdx){var inputStream=this.source.inputStream;return inputStream.interval(startIdx,endIdx);};GrammarDecl.prototype.ensureSuperGrammar=function(){if(!this.superGrammar){this.withSuperGrammar(// TODO: The conditional expression below is an ugly hack. It's kind of ok because
	// I doubt anyone will ever try to declare a grammar called `BuiltInRules`. Still,
	// we should try to find a better way to do this.
	this.name==='BuiltInRules'?Grammar.ProtoBuiltInRules:Grammar.BuiltInRules);}return this.superGrammar;};GrammarDecl.prototype.installOverriddenOrExtendedRule=function(name,formals,body,source){var duplicateParameterNames=common.getDuplicates(formals);if(duplicateParameterNames.length>0){throw errors.duplicateParameterNames(name,duplicateParameterNames,body,source);}var ruleInfo=this.ensureSuperGrammar().rules[name];var expectedFormals=ruleInfo.formals;var expectedNumFormals=expectedFormals?expectedFormals.length:0;if(formals.length!==expectedNumFormals){throw errors.wrongNumberOfParameters(name,expectedNumFormals,formals.length,body,source);}return this.install(name,formals,body,ruleInfo.description,source);};GrammarDecl.prototype.install=function(name,formals,body,description,source){this.rules[name]={body:body.introduceParams(formals),formals:formals,description:description,source:source};return this;};// Stuff that you should only do once
	GrammarDecl.prototype.withSuperGrammar=function(superGrammar){if(this.superGrammar){throw new Error('the super grammar of a GrammarDecl cannot be set more than once');}this.superGrammar=superGrammar;this.rules=Object.create(superGrammar.rules);// Grammars with an explicit supergrammar inherit a default start rule.
	if(!superGrammar.isBuiltIn()){this.defaultStartRule=superGrammar.defaultStartRule;}return this;};GrammarDecl.prototype.withDefaultStartRule=function(ruleName){this.defaultStartRule=ruleName;return this;};GrammarDecl.prototype.withSource=function(source){this.source=new InputStream(source).interval(0,source.length);return this;};// Creates a Grammar instance, and if it passes the sanity checks, returns it.
	GrammarDecl.prototype.build=function(){var grammar=new Grammar(this.name,this.ensureSuperGrammar(),this.rules,this.defaultStartRule);// TODO: change the pexpr.prototype.assert... methods to make them add
	// exceptions to an array that's provided as an arg. Then we'll be able to
	// show more than one error of the same type at a time.
	// TODO: include the offending pexpr in the errors, that way we can show
	// the part of the source that caused it.
	var grammarErrors=[];var grammarHasInvalidApplications=false;Object.keys(grammar.rules).forEach(function(ruleName){var body=grammar.rules[ruleName].body;try{body.assertChoicesHaveUniformArity(ruleName);}catch(e){grammarErrors.push(e);}try{body.assertAllApplicationsAreValid(ruleName,grammar);}catch(e){grammarErrors.push(e);grammarHasInvalidApplications=true;}});if(!grammarHasInvalidApplications){// The following check can only be done if the grammar has no invalid applications.
	Object.keys(grammar.rules).forEach(function(ruleName){var body=grammar.rules[ruleName].body;try{body.assertIteratedExprsAreNotNullable(grammar,ruleName);}catch(e){grammarErrors.push(e);}});}if(grammarErrors.length>0){errors.throwErrors(grammarErrors);}if(this.source){grammar.source=this.source;}return grammar;};// Rule declarations
	GrammarDecl.prototype.define=function(name,formals,body,description,source){this.ensureSuperGrammar();if(this.superGrammar.rules[name]){throw errors.duplicateRuleDeclaration(name,this.name,this.superGrammar.name,body,source);}else if(this.rules[name]){throw errors.duplicateRuleDeclaration(name,this.name,this.name,body,source);}var duplicateParameterNames=common.getDuplicates(formals);if(duplicateParameterNames.length>0){throw errors.duplicateParameterNames(name,duplicateParameterNames,body,source);}return this.install(name,formals,body,description,source);};GrammarDecl.prototype.override=function(name,formals,body,descIgnored,source){var ruleInfo=this.ensureSuperGrammar().rules[name];if(!ruleInfo){throw errors.cannotOverrideUndeclaredRule(name,this.superGrammar.name,body,source);}this.installOverriddenOrExtendedRule(name,formals,body,source);return this;};GrammarDecl.prototype.extend=function(name,formals,fragment,descIgnored,source){var ruleInfo=this.ensureSuperGrammar().rules[name];if(!ruleInfo){throw errors.cannotExtendUndeclaredRule(name,this.superGrammar.name,fragment,source);}var body=new pexprs.Extend(this.superGrammar,name,fragment);body.source=fragment.source;this.installOverriddenOrExtendedRule(name,formals,body,source);return this;};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=GrammarDecl;},{"./Grammar":29,"./InputStream":31,"./common":39,"./errors":40,"./pexprs":59}],31:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var Interval=require('./Interval');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function InputStream(source){this.source=source;this.pos=0;this.posInfos=[];}InputStream.prototype={atEnd:function atEnd(){return this.pos===this.source.length;},next:function next(){return this.source[this.pos++];},matchString:function matchString(s){for(var idx=0;idx<s.length;idx++){if(this.next()!==s[idx]){return false;}}return true;},sourceSlice:function sourceSlice(startIdx,endIdx){return this.source.slice(startIdx,endIdx);},interval:function interval(startIdx,optEndIdx){return new Interval(this,startIdx,optEndIdx?optEndIdx:this.pos);}};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=InputStream;},{"./Interval":32}],32:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var assert=require('./common').assert;var errors=require('./errors');var util=require('./util');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function Interval(inputStream,startIdx,endIdx){this.inputStream=inputStream;this.startIdx=startIdx;this.endIdx=endIdx;}Interval.coverage=function()/* interval1, interval2, ... */{var inputStream=arguments[0].inputStream;var startIdx=arguments[0].startIdx;var endIdx=arguments[0].endIdx;for(var idx=1;idx<arguments.length;idx++){var interval=arguments[idx];if(interval.inputStream!==inputStream){throw errors.intervalSourcesDontMatch();}else{startIdx=Math.min(startIdx,arguments[idx].startIdx);endIdx=Math.max(endIdx,arguments[idx].endIdx);}}return new Interval(inputStream,startIdx,endIdx);};Interval.prototype={coverageWith:function coverageWith()/* interval1, interval2, ... */{var intervals=Array.prototype.slice.call(arguments);intervals.push(this);return Interval.coverage.apply(undefined,intervals);},collapsedLeft:function collapsedLeft(){return new Interval(this.inputStream,this.startIdx,this.startIdx);},collapsedRight:function collapsedRight(){return new Interval(this.inputStream,this.endIdx,this.endIdx);},getLineAndColumnMessage:function getLineAndColumnMessage(){var range=[this.startIdx,this.endIdx];return util.getLineAndColumnMessage(this.inputStream.source,this.startIdx,range);},// Returns an array of 0, 1, or 2 intervals that represents the result of the
	// interval difference operation.
	minus:function minus(that){if(this.inputStream!==that.inputStream){throw errors.intervalSourcesDontMatch();}else if(this.startIdx===that.startIdx&&this.endIdx===that.endIdx){// `this` and `that` are the same interval!
	return[];}else if(this.startIdx<that.startIdx&&that.endIdx<this.endIdx){// `that` splits `this` into two intervals
	return[new Interval(this.inputStream,this.startIdx,that.startIdx),new Interval(this.inputStream,that.endIdx,this.endIdx)];}else if(this.startIdx<that.endIdx&&that.endIdx<this.endIdx){// `that` contains a prefix of `this`
	return[new Interval(this.inputStream,that.endIdx,this.endIdx)];}else if(this.startIdx<that.startIdx&&that.startIdx<this.endIdx){// `that` contains a suffix of `this`
	return[new Interval(this.inputStream,this.startIdx,that.startIdx)];}else{// `that` and `this` do not overlap
	return[this];}},// Returns a new Interval that has the same extent as this one, but which is relative
	// to `that`, an Interval that fully covers this one.
	relativeTo:function relativeTo(that,newInputStream){if(this.inputStream!==that.inputStream){throw errors.intervalSourcesDontMatch();}assert(this.startIdx>=that.startIdx&&this.endIdx<=that.endIdx,'other interval does not cover this one');return new Interval(newInputStream,this.startIdx-that.startIdx,this.endIdx-that.startIdx);},// Returns a new Interval which contains the same contents as this one,
	// but with whitespace trimmed from both ends. (This only makes sense when
	// the input stream is a string.)
	trimmed:function trimmed(){var contents=this.contents;var startIdx=this.startIdx+contents.match(/^\s*/)[0].length;var endIdx=this.endIdx-contents.match(/\s*$/)[0].length;return new Interval(this.inputStream,startIdx,endIdx);}};Object.defineProperties(Interval.prototype,{contents:{get:function get(){if(this._contents===undefined){this._contents=this.inputStream.sourceSlice(this.startIdx,this.endIdx);}return this._contents;},enumerable:true},length:{get:function get(){return this.endIdx-this.startIdx;},enumerable:true}});// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=Interval;},{"./common":39,"./errors":40,"./util":60}],33:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var inherits=require('inherits');var common=require('./common');var nodes=require('./nodes');var util=require('./util');var Interval=require('./Interval');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	// Create a short error message for an error that occurred during matching.
	function getShortMatchErrorMessage(pos,source,detail){var errorInfo=util.getLineAndColumn(source,pos);return'Line '+errorInfo.lineNum+', col '+errorInfo.colNum+': '+detail;}// ----------------- MatchFailure -----------------
	function MatchResult(state){this.state=state;this._cst=state.bindings[0];}MatchResult.newFor=function(state){var succeeded=state.bindings.length>0;return succeeded?new MatchResult(state):new MatchFailure(state);};MatchResult.prototype.failed=function(){return false;};MatchResult.prototype.succeeded=function(){return!this.failed();};// Returns a `MatchResult` that can be fed into operations or attributes that care
	// about the whitespace that was implicitly skipped over by syntactic rules. This
	// is useful for doing things with comments, e.g., syntax highlighting.
	MatchResult.prototype.getDiscardedSpaces=function(){if(this.failed()){return[];}var state=this.state;var grammar=state.grammar;var inputStream=state.inputStream;var intervals=[new Interval(inputStream,0,inputStream.source.length)];// Subtract the interval of each terminal from the set of intervals above.
	var s=grammar.semantics().addOperation('subtractTerminals',{_nonterminal:function _nonterminal(children){children.forEach(function(child){child.subtractTerminals();});},_terminal:function _terminal(){var t=this;intervals=intervals.map(function(interval){return interval.minus(t.interval);}).reduce(function(xs,ys){return xs.concat(ys);},[]);}});s(this).subtractTerminals();// Now `intervals` holds the intervals of the input stream that were skipped over by syntactic
	// rules, because they contained spaces.
	// Next, we want to match the contents of each of those intervals with the grammar's `spaces`
	// rule, to reconstruct the CST nodes that were discarded by syntactic rules. But if we simply
	// pass each interval's `contents` to the grammar's `match` method, the resulting nodes and
	// their children will have intervals that are associated with a different input, i.e., a
	// substring of the original input. The following operation will fix this problem for us.
	s.addOperation('fixIntervals(idxOffset)',{_default:function _default(children){var idxOffset=this.args.idxOffset;this.interval.inputStream=inputStream;this.interval.startIdx+=idxOffset;this.interval.endIdx+=idxOffset;if(!this.isTerminal()){children.forEach(function(child){child.fixIntervals(idxOffset);});}}});// Now we're finally ready to reconstruct the discarded CST nodes.
	var discardedNodes=intervals.map(function(interval){var r=grammar.match(interval.contents,'spaces');s(r).fixIntervals(interval.startIdx);return r._cst;});// Rather than return a bunch of CST nodes and make the caller of this method loop over them,
	// we can construct a single CST node that is the parent of all of the discarded nodes. An
	// `IterationNode` is the obvious choice for this.
	discardedNodes=new nodes.IterationNode(grammar,discardedNodes,discardedNodes.length===0?new Interval(inputStream,0,0):new Interval(inputStream,discardedNodes[0].interval.startIdx,discardedNodes[discardedNodes.length-1].interval.endIdx));// But remember that a CST node can't be used directly by clients. What we really need to return
	// from this method is a successful `MatchResult` that can be used with the clients' semantics.
	// We already have one -- `this` -- but it's got a different CST node inside. So we create a new
	// object that delegates to `this`, and override its `_cst` property.
	var r=Object.create(this);r._cst=discardedNodes;// We also override its `getDiscardedSpaces` method, in case someone decides to call it.
	r.getDiscardedSpaces=function(){return r;};return r;};// ----------------- MatchFailure -----------------
	function MatchFailure(state){this.state=state;common.defineLazyProperty(this,'_failures',function(){return this.state.getFailures();});common.defineLazyProperty(this,'message',function(){var source=this.state.inputStream.source;if(typeof source!=='string'){return'match failed at position '+this.getRightmostFailurePosition();}var detail='Expected '+this.getExpectedText();return util.getLineAndColumnMessage(source,this.getRightmostFailurePosition())+detail;});common.defineLazyProperty(this,'shortMessage',function(){if(typeof this.state.inputStream.source!=='string'){return'match failed at position '+this.getRightmostFailurePosition();}var detail='expected '+this.getExpectedText();return getShortMatchErrorMessage(this.getRightmostFailurePosition(),this.state.inputStream.source,detail);});}inherits(MatchFailure,MatchResult);MatchFailure.prototype.toString=function(){return'[MatchFailure at position '+this.getRightmostFailurePosition()+']';};MatchFailure.prototype.failed=function(){return true;};MatchFailure.prototype.getRightmostFailurePosition=function(){return this.state.getRightmostFailurePosition();};MatchFailure.prototype.getRightmostFailures=function(){return this._failures;};// Return a string summarizing the expected contents of the input stream when
	// the match failure occurred.
	MatchFailure.prototype.getExpectedText=function(){var sb=new common.StringBuffer();var failures=this.getRightmostFailures();// Filter out the fluffy failures to make the default error messages more useful
	failures=failures.filter(function(failure){return!failure.isFluffy();});for(var idx=0;idx<failures.length;idx++){if(idx>0){if(idx===failures.length-1){sb.append(failures.length>2?', or ':' or ');}else{sb.append(', ');}}sb.append(failures[idx].toString());}return sb.contents();};MatchFailure.prototype.getInterval=function(){var pos=this.state.getRightmostFailurePosition();return new Interval(this.state.inputStream,pos,pos);};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=MatchResult;},{"./Interval":32,"./common":39,"./nodes":42,"./util":60,"inherits":24}],34:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var extend=require('util-extend');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function Namespace(){}Namespace.prototype=Object.create(null);Namespace.asNamespace=function(objOrNamespace){if(objOrNamespace instanceof Namespace){return objOrNamespace;}return Namespace.createNamespace(objOrNamespace);};// Create a new namespace. If `optProps` is specified, all of its properties
	// will be copied to the new namespace.
	Namespace.createNamespace=function(optProps){return Namespace.extend(Namespace.prototype,optProps);};// Create a new namespace which extends another namespace. If `optProps` is
	// specified, all of its properties will be copied to the new namespace.
	Namespace.extend=function(namespace,optProps){if(namespace!==Namespace.prototype&&!(namespace instanceof Namespace)){throw new TypeError('not a Namespace object: '+namespace);}var ns=Object.create(namespace,{constructor:{value:Namespace,enumerable:false,writable:true,configurable:true}});return extend(ns,optProps);};// TODO: Should this be a regular method?
	Namespace.toString=function(ns){return Object.prototype.toString.call(ns);};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=Namespace;},{"util-extend":26}],35:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function PosInfo(state){this.state=state;this.applicationMemoKeyStack=[];// a stack of "memo keys" of the active applications
	this.memo={};this.currentLeftRecursion=undefined;}PosInfo.prototype={isActive:function isActive(application){return this.applicationMemoKeyStack.indexOf(application.toMemoKey())>=0;},enter:function enter(application){this.state.enter(application);this.applicationMemoKeyStack.push(application.toMemoKey());},exit:function exit(){this.state.exit();this.applicationMemoKeyStack.pop();},startLeftRecursion:function startLeftRecursion(headApplication,memoRec){memoRec.isLeftRecursion=true;memoRec.headApplication=headApplication;memoRec.nextLeftRecursion=this.currentLeftRecursion;this.currentLeftRecursion=memoRec;var applicationMemoKeyStack=this.applicationMemoKeyStack;var indexOfFirstInvolvedRule=applicationMemoKeyStack.indexOf(headApplication.toMemoKey())+1;var involvedApplicationMemoKeys=applicationMemoKeyStack.slice(indexOfFirstInvolvedRule);memoRec.isInvolved=function(applicationMemoKey){return involvedApplicationMemoKeys.indexOf(applicationMemoKey)>=0;};memoRec.updateInvolvedApplicationMemoKeys=function(){for(var idx=indexOfFirstInvolvedRule;idx<applicationMemoKeyStack.length;idx++){var applicationMemoKey=applicationMemoKeyStack[idx];if(!this.isInvolved(applicationMemoKey)){involvedApplicationMemoKeys.push(applicationMemoKey);}}};},endLeftRecursion:function endLeftRecursion(){this.currentLeftRecursion=this.currentLeftRecursion.nextLeftRecursion;},// Note: this method doesn't get called for the "head" of a left recursion -- for LR heads,
	// the memoized result (which starts out being a failure) is always used.
	shouldUseMemoizedResult:function shouldUseMemoizedResult(memoRec){if(!memoRec.isLeftRecursion){return true;}var applicationMemoKeyStack=this.applicationMemoKeyStack;for(var idx=0;idx<applicationMemoKeyStack.length;idx++){var applicationMemoKey=applicationMemoKeyStack[idx];if(memoRec.isInvolved(applicationMemoKey)){return false;}}return true;}};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=PosInfo;},{}],36:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var _Symbol4=require('es6-symbol');// eslint-disable-line no-undef
	var inherits=require('inherits');var MatchResult=require('./MatchResult');var IterationNode=require('./nodes').IterationNode;var common=require('./common');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	// ----------------- Wrappers -----------------
	// Wrappers decorate CST nodes with all of the functionality (i.e., operations and attributes)
	// provided by a Semantics (see below). `Wrapper` is the abstract superclass of all wrappers. A
	// `Wrapper` must have `_node` and `_semantics` instance variables, which refer to the CST node and
	// Semantics (resp.) for which it was created, and a `_childWrappers` instance variable which is
	// used to cache the wrapper instances that are created for its child nodes. Setting these instance
	// variables is the responsibility of the constructor of each Semantics-specific subclass of
	// `Wrapper`.
	function Wrapper(){}Wrapper.prototype.toString=function(){return'[semantics wrapper for '+this._node.grammar.name+']';};Wrapper.prototype._forgetMemoizedResultFor=function(attributeName){// Remove the memoized attribute from the cstNode and all its children.
	delete this._node[this._semantics.attributeKeys[attributeName]];this.children.forEach(function(child){child._forgetMemoizedResultFor(attributeName);});};// Returns the wrapper of the specified child node. Child wrappers are created lazily and cached in
	// the parent wrapper's `_childWrappers` instance variable.
	Wrapper.prototype.child=function(idx){if(!(0<=idx&&idx<this._node.numChildren())){// TODO: Consider throwing an exception here.
	return undefined;}var childWrapper=this._childWrappers[idx];if(!childWrapper){childWrapper=this._childWrappers[idx]=this._semantics.wrap(this._node.childAt(idx));}return childWrapper;};// Returns an array containing the wrappers of all of the children of the node associated with this
	// wrapper.
	Wrapper.prototype._children=function(){// Force the creation of all child wrappers
	for(var idx=0;idx<this._node.numChildren();idx++){this.child(idx);}return this._childWrappers;};// Returns `true` if the CST node associated with this wrapper corresponds to an iteration
	// expression, i.e., a Kleene-*, Kleene-+, or an optional. Returns `false` otherwise.
	Wrapper.prototype.isIteration=function(){return this._node.isIteration();};// Returns `true` if the CST node associated with this wrapper is a terminal node, `false`
	// otherwise.
	Wrapper.prototype.isTerminal=function(){return this._node.isTerminal();};// Returns `true` if the CST node associated with this wrapper is a nonterminal node, `false`
	// otherwise.
	Wrapper.prototype.isNonterminal=function(){return this._node.isNonterminal();};// Returns `true` if the CST node associated with this wrapper is a nonterminal node
	// corresponding to a syntactic rule, `false` otherwise.
	Wrapper.prototype.isSyntactic=function(){return this.isNonterminal()&&this._node.isSyntactic();};// Returns `true` if the CST node associated with this wrapper is a nonterminal node
	// corresponding to a lexical rule, `false` otherwise.
	Wrapper.prototype.isLexical=function(){return this.isNonterminal()&&this._node.isLexical();};// Returns `true` if the CST node associated with this wrapper is an iterator node
	// having either one or no child (? operator), `false` otherwise.
	// Otherwise, throws an exception.
	Wrapper.prototype.isOptional=function(){return this._node.isOptional();};// Create a new IterationNode in the same semantics as this wrapper.
	Wrapper.prototype.iteration=function(optElements){var iter=new IterationNode(this._node.grammar,optElements||[],this.source,false);return this._semantics.wrap(iter);};Object.defineProperties(Wrapper.prototype,{// Returns an array containing the children of this CST node.
	children:{get:function get(){return this._children();}},// Returns the name of grammar rule that created this CST node.
	ctorName:{get:function get(){return this._node.ctorName;}},// Returns the interval consumed by the CST node associated with this wrapper.
	source:{get:function get(){return this._node.source;}},// Returns the number of children of this CST node.
	numChildren:{get:function get(){return this._node.numChildren();}},// Returns the primitive value of this CST node, if it's a terminal node. Otherwise,
	// throws an exception.
	primitiveValue:{get:function get(){if(this.isTerminal()){return this._node.primitiveValue;}throw new TypeError("tried to access the 'primitiveValue' attribute of a non-terminal CST node");}},// Returns the contents of the input stream consumed by this CST node.
	sourceString:{get:function get(){return this.source.contents;}}});// ----------------- Semantics -----------------
	// A Semantics is a container for a family of Operations and Attributes for a given grammar.
	// Semantics enable modularity (different clients of a grammar can create their set of operations
	// and attributes in isolation) and extensibility even when operations and attributes are mutually-
	// recursive. This constructor should not be called directly except from
	// `Semantics.createSemantics`. The normal ways to create a Semantics, given a grammar 'g', are
	// `g.semantics()` and `g.extendSemantics(parentSemantics)`.
	function Semantics(grammar,superSemantics){var self=this;this.grammar=grammar;this.checkedActionDicts=false;// Constructor for wrapper instances, which are passed as the arguments to the semantic actions
	// of an operation or attribute. Operations and attributes require double dispatch: the semantic
	// action is chosen based on both the node's type and the semantics. Wrappers ensure that
	// the `execute` method is called with the correct (most specific) semantics object as an
	// argument.
	this.Wrapper=function(node){self.checkActionDictsIfHaventAlready();this._semantics=self;this._node=node;this._childWrappers=[];};this.super=superSemantics;if(superSemantics){if(grammar!==this.super.grammar&&!grammar._inheritsFrom(this.super.grammar)){throw new Error("Cannot extend a semantics for grammar '"+this.super.grammar.name+"' for use with grammar '"+grammar.name+"' (not a sub-grammar)");}inherits(this.Wrapper,this.super.Wrapper);this.operations=Object.create(this.super.operations);this.attributes=Object.create(this.super.attributes);this.attributeKeys=Object.create(null);// Assign unique symbols for each of the attributes inherited from the super-semantics so that
	// they are memoized independently.
	for(var attributeName in this.attributes){this.attributeKeys[attributeName]=_Symbol4();}}else{inherits(this.Wrapper,Wrapper);this.operations=Object.create(null);this.attributes=Object.create(null);this.attributeKeys=Object.create(null);}}Semantics.prototype.toString=function(){return'[semantics for '+this.grammar.name+']';};Semantics.prototype.checkActionDictsIfHaventAlready=function(){if(!this.checkedActionDicts){this.checkActionDicts();this.checkedActionDicts=true;}};// Checks that the action dictionaries for all operations and attributes in this semantics,
	// including the ones that were inherited from the super-semantics, agree with the grammar.
	// Throws an exception if one or more of them doesn't.
	Semantics.prototype.checkActionDicts=function(){for(var name in this.operations){this.operations[name].checkActionDict(this.grammar);}for(name in this.attributes){this.attributes[name].checkActionDict(this.grammar);}};Semantics.prototype.toRecipe=function(semanticsOnly){function hasSuperSemantics(s){return s.super!==Semantics.BuiltInSemantics._getSemantics();}var str='(function(g) {\n';if(hasSuperSemantics(this)){str+='  var semantics = '+this.super.toRecipe(true)+'(g';var superSemanticsGrammar=this.super.grammar;var relatedGrammar=this.grammar;while(relatedGrammar!==superSemanticsGrammar){str+='.superGrammar';relatedGrammar=relatedGrammar.superGrammar;}str+=');\n';str+='  return g.extendSemantics(semantics)';}else{str+='  return g.semantics()';}['Operation','Attribute'].forEach(function(type){var semanticOperations=this[type.toLowerCase()+'s'];Object.keys(semanticOperations).forEach(function(name){var signature=name;if(semanticOperations[name].formals.length>0){signature+='('+semanticOperations[name].formals.join(', ')+')';}var method;if(hasSuperSemantics(this)&&this.super[type.toLowerCase()+'s'][name]){method='extend'+type;}else{method='add'+type;}str+='\n    .'+method+'('+JSON.stringify(signature)+', {';var actions=semanticOperations[name].actionDict;var srcArray=[];Object.keys(actions).forEach(function(actionName){if(semanticOperations[name].builtInDefault!==actions[actionName]){srcArray.push('\n      '+JSON.stringify(actionName)+': '+actions[actionName].toString());}});str+=srcArray.join(',');str+='\n    })';},this);},this);str+=';\n  })';if(!semanticsOnly){str='(function() {\n'+'  var grammar = this.fromRecipe('+this.grammar.toRecipe()+');\n'+'  var semantics = '+str+'(grammar);\n'+'  return semantics;\n'+'});\n';}return str;};var prototypeGrammar;var prototypeGrammarSemantics;// This method is called from main.js once Ohm has loaded.
	Semantics.initPrototypeParser=function(grammar){prototypeGrammarSemantics=grammar.semantics().addOperation('parse',{AttributeSignature:function AttributeSignature(name){return{name:name.parse(),formals:[]};},OperationSignature:function OperationSignature(name,optFormals){return{name:name.parse(),formals:optFormals.parse()[0]||[]};},Formals:function Formals(oparen,fs,cparen){return fs.asIteration().parse();},name:function name(first,rest){return this.sourceString;}});prototypeGrammar=grammar;};function parseSignature(signature,type){if(!prototypeGrammar){// The Operations and Attributes grammar won't be available while Ohm is loading,
	// but we can get away the following simplification b/c none of the operations
	// that are used while loading take arguments.
	common.assert(signature.indexOf('(')===-1);return{name:signature,formals:[]};}var r=prototypeGrammar.match(signature,type==='operation'?'OperationSignature':'AttributeSignature');if(r.failed()){throw new Error(r.message);}return prototypeGrammarSemantics(r).parse();}function newDefaultAction(type,name,doIt){return function(children){var self=this;var thisThing=this._semantics.operations[name]||this._semantics.attributes[name];var args=thisThing.formals.map(function(formal){return self.args[formal];});if(this.isIteration()){// This CST node corresponds to an iteration expression in the grammar (*, +, or ?). The
	// default behavior is to map this operation or attribute over all of its child nodes.
	return children.map(function(child){return doIt.apply(child,args);});}// This CST node corresponds to a non-terminal in the grammar (e.g., AddExpr). The fact that
	// we got here means that this action dictionary doesn't have an action for this particular
	// non-terminal or a generic `_nonterminal` action.
	if(children.length===1){// As a convenience, if this node only has one child, we just return the result of
	// applying this operation / attribute to the child node.
	return doIt.apply(children[0],args);}else{// Otherwise, we throw an exception to let the programmer know that we don't know what
	// to do with this node.
	throw new Error('Missing semantic action for '+this.ctorName+' in '+name+' '+type);}};}Semantics.prototype.addOperationOrAttribute=function(type,signature,actionDict){var typePlural=type+'s';var parsedNameAndFormalArgs=parseSignature(signature,type);var name=parsedNameAndFormalArgs.name;var formals=parsedNameAndFormalArgs.formals;// TODO: check that there are no duplicate formal arguments
	this.assertNewName(name,type);// Create the action dictionary for this operation / attribute that contains a `_default` action
	// which defines the default behavior of iteration, terminal, and non-terminal nodes...
	var builtInDefault=newDefaultAction(type,name,doIt);var realActionDict={_default:builtInDefault};// ... and add in the actions supplied by the programmer, which may override some or all of the
	// default ones.
	Object.keys(actionDict).forEach(function(name){realActionDict[name]=actionDict[name];});var entry=type==='operation'?new Operation(name,formals,realActionDict,builtInDefault):new Attribute(name,realActionDict,builtInDefault);// The following check is not strictly necessary (it will happen later anyway) but it's better to
	// catch errors early.
	entry.checkActionDict(this.grammar);this[typePlural][name]=entry;function doIt(){// Dispatch to most specific version of this operation / attribute -- it may have been
	// overridden by a sub-semantics.
	var thisThing=this._semantics[typePlural][name];// Check that the caller passed the correct number of arguments.
	if(arguments.length!==thisThing.formals.length){throw new Error('Invalid number of arguments passed to '+name+' '+type+' (expected '+thisThing.formals.length+', got '+arguments.length+')');}// Create an "arguments object" from the arguments that were passed to this
	// operation / attribute.
	var args=Object.create(null);for(var idx=0;idx<arguments.length;idx++){var formal=thisThing.formals[idx];args[formal]=arguments[idx];}var oldArgs=this.args;this.args=args;var ans=thisThing.execute(this._semantics,this);this.args=oldArgs;return ans;}if(type==='operation'){this.Wrapper.prototype[name]=doIt;this.Wrapper.prototype[name].toString=function(){return'['+name+' operation]';};}else{Object.defineProperty(this.Wrapper.prototype,name,{get:doIt,configurable:true// So the property can be deleted.
	});this.attributeKeys[name]=_Symbol4();}};Semantics.prototype.extendOperationOrAttribute=function(type,name,actionDict){var typePlural=type+'s';// Make sure that `name` really is just a name, i.e., that it doesn't also contain formals.
	parseSignature(name,'attribute');if(!(this.super&&name in this.super[typePlural])){throw new Error('Cannot extend '+type+" '"+name+"': did not inherit an "+type+' with that name');}if(Object.prototype.hasOwnProperty.call(this[typePlural],name)){throw new Error('Cannot extend '+type+" '"+name+"' again");}// Create a new operation / attribute whose actionDict delegates to the super operation /
	// attribute's actionDict, and which has all the keys from `inheritedActionDict`.
	var inheritedFormals=this[typePlural][name].formals;var inheritedActionDict=this[typePlural][name].actionDict;var newActionDict=Object.create(inheritedActionDict);Object.keys(actionDict).forEach(function(name){newActionDict[name]=actionDict[name];});this[typePlural][name]=type==='operation'?new Operation(name,inheritedFormals,newActionDict):new Attribute(name,newActionDict);// The following check is not strictly necessary (it will happen later anyway) but it's better to
	// catch errors early.
	this[typePlural][name].checkActionDict(this.grammar);};Semantics.prototype.assertNewName=function(name,type){if(Wrapper.prototype.hasOwnProperty(name)){throw new Error('Cannot add '+type+" '"+name+"': that's a reserved name");}if(name in this.operations){throw new Error('Cannot add '+type+" '"+name+"': an operation with that name already exists");}if(name in this.attributes){throw new Error('Cannot add '+type+" '"+name+"': an attribute with that name already exists");}};// Returns a wrapper for the given CST `node` in this semantics.
	// If `node` is already a wrapper, returns `node` itself.  // TODO: why is this needed?
	Semantics.prototype.wrap=function(node){return node instanceof this.Wrapper?node:new this.Wrapper(node);};// Creates a new Semantics instance for `grammar`, inheriting operations and attributes from
	// `optSuperSemantics`, if it is specified. Returns a function that acts as a proxy for the new
	// Semantics instance. When that function is invoked with a CST node as an argument, it returns
	// a wrapper for that node which gives access to the operations and attributes provided by this
	// semantics.
	Semantics.createSemantics=function(grammar,optSuperSemantics){var s=new Semantics(grammar,optSuperSemantics!==undefined?optSuperSemantics:Semantics.BuiltInSemantics._getSemantics());// To enable clients to invoke a semantics like a function, return a function that acts as a proxy
	// for `s`, which is the real `Semantics` instance.
	var proxy=function ASemantics(matchResult){if(!(matchResult instanceof MatchResult)){throw new TypeError('Semantics expected a MatchResult, but got '+common.unexpectedObjToString(matchResult));}if(!matchResult.succeeded()){throw new TypeError('cannot apply Semantics to '+matchResult.toString());}var cst=matchResult._cst;if(cst.grammar!==grammar){throw new Error("Cannot use a MatchResult from grammar '"+cst.grammar.name+"' with a semantics for '"+grammar.name+"'");}return s.wrap(cst);};// Forward public methods from the proxy to the semantics instance.
	proxy.addOperation=function(signature,actionDict){s.addOperationOrAttribute.call(s,'operation',signature,actionDict);return proxy;};proxy.extendOperation=function(name,actionDict){s.extendOperationOrAttribute.call(s,'operation',name,actionDict);return proxy;};proxy.addAttribute=function(name,actionDict){s.addOperationOrAttribute.call(s,'attribute',name,actionDict);return proxy;};proxy.extendAttribute=function(name,actionDict){s.extendOperationOrAttribute.call(s,'attribute',name,actionDict);return proxy;};proxy._getActionDict=function(operationOrAttributeName){var action=s.operations[operationOrAttributeName]||s.attributes[operationOrAttributeName];if(!action){throw new Error('"'+operationOrAttributeName+'" is not a valid operation or attribute '+'name in this semantics for "'+grammar.name+'"');}return action.actionDict;};proxy._remove=function(operationOrAttributeName){var semantic;if(operationOrAttributeName in s.operations){semantic=s.operations[operationOrAttributeName];delete s.operations[operationOrAttributeName];}else if(operationOrAttributeName in s.attributes){semantic=s.attributes[operationOrAttributeName];delete s.attributes[operationOrAttributeName];}delete s.Wrapper.prototype[operationOrAttributeName];return semantic;};proxy.getOperationNames=function(){return Object.keys(s.operations);};proxy.getAttributeNames=function(){return Object.keys(s.attributes);};proxy.getGrammar=function(){return s.grammar;};proxy.toRecipe=function(semanticsOnly){return s.toRecipe(semanticsOnly);};// Make the proxy's toString() work.
	proxy.toString=s.toString.bind(s);// Returns the semantics for the proxy.
	proxy._getSemantics=function(){return s;};return proxy;};Semantics.initBuiltInSemantics=function(builtInRules){var actions={empty:function empty(){return this.iteration();},nonEmpty:function nonEmpty(first,_,rest){return this.iteration([first].concat(rest.children));}};Semantics.BuiltInSemantics=Semantics.createSemantics(builtInRules,null).addOperation('asIteration',{emptyListOf:actions.empty,nonemptyListOf:actions.nonEmpty,EmptyListOf:actions.empty,NonemptyListOf:actions.nonEmpty});};// ----------------- Operation -----------------
	// An Operation represents a function to be applied to a concrete syntax tree (CST) -- it's very
	// similar to a Visitor (http://en.wikipedia.org/wiki/Visitor_pattern). An operation is executed by
	// recursively walking the CST, and at each node, invoking the matching semantic action from
	// `actionDict`. See `Operation.prototype.execute` for details of how a CST node's matching semantic
	// action is found.
	function Operation(name,formals,actionDict,builtInDefault){this.name=name;this.formals=formals;this.actionDict=actionDict;this.builtInDefault=builtInDefault;}Operation.prototype.typeName='operation';Operation.prototype.checkActionDict=function(grammar){grammar._checkTopDownActionDict(this.typeName,this.name,this.actionDict);};// Execute this operation on the CST node associated with `nodeWrapper` in the context of the given
	// Semantics instance.
	Operation.prototype.execute=function(semantics,nodeWrapper){// Look for a semantic action whose name matches the node's constructor name, which is either the
	// name of a rule in the grammar, or '_terminal' (for a terminal node), or '_iter' (for an
	// iteration node). In the latter case, the action function receives a single argument, which is
	// an array containing all of the children of the CST node.
	var actionFn=this.actionDict[nodeWrapper._node.ctorName];if(actionFn){return this.doAction(semantics,nodeWrapper,actionFn,nodeWrapper.isIteration());}// The action dictionary does not contain a semantic action for this specific type of node.
	// If this is a nonterminal node and the programmer has provided a `_nonterminal` semantic
	// action, we invoke it:
	if(nodeWrapper.isNonterminal()){actionFn=this.actionDict._nonterminal;if(actionFn){return this.doAction(semantics,nodeWrapper,actionFn,true);}}// Otherwise, we invoke the '_default' semantic action.
	return this.doAction(semantics,nodeWrapper,this.actionDict._default,true);};// Invoke `actionFn` on the CST node that corresponds to `nodeWrapper`, in the context of
	// `semantics`. If `optPassChildrenAsArray` is truthy, `actionFn` will be called with a single
	// argument, which is an array of wrappers. Otherwise, the number of arguments to `actionFn` will
	// be equal to the number of children in the CST node.
	Operation.prototype.doAction=function(semantics,nodeWrapper,actionFn,optPassChildrenAsArray){return optPassChildrenAsArray?actionFn.call(nodeWrapper,nodeWrapper._children()):actionFn.apply(nodeWrapper,nodeWrapper._children());};// ----------------- Attribute -----------------
	// Attributes are Operations whose results are memoized. This means that, for any given semantics,
	// the semantic action for a CST node will be invoked no more than once.
	function Attribute(name,actionDict,builtInDefault){this.name=name;this.formals=[];this.actionDict=actionDict;this.builtInDefault=builtInDefault;}inherits(Attribute,Operation);Attribute.prototype.typeName='attribute';Attribute.prototype.execute=function(semantics,nodeWrapper){var node=nodeWrapper._node;var key=semantics.attributeKeys[this.name];if(!node.hasOwnProperty(key)){// The following is a super-send -- isn't JS beautiful? :/
	node[key]=Operation.prototype.execute.call(this,semantics,nodeWrapper);}return node[key];};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=Semantics;},{"./MatchResult":33,"./common":39,"./nodes":42,"es6-symbol":6,"inherits":24}],37:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var InputStream=require('./InputStream');var PosInfo=require('./PosInfo');var Trace=require('./Trace');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	var RM_RIGHTMOST_FAILURE_POSITION=0;var RM_RIGHTMOST_FAILURES=1;var applySpaces=new pexprs.Apply('spaces');function State(grammar,input,opts){this.grammar=grammar;this.startExpr=this._getStartExpr(grammar,opts.startApplication);this.inputStream=new InputStream(input);this.tracingEnabled=opts.trace||false;this.init(RM_RIGHTMOST_FAILURE_POSITION);}State.prototype={init:function init(recordingMode){this.posInfos=[];this.bindings=[];this.applicationStack=[];this.inLexifiedContextStack=[false];this.recordingMode=recordingMode;if(recordingMode===RM_RIGHTMOST_FAILURE_POSITION){this.rightmostFailurePosition=-1;}else if(recordingMode===RM_RIGHTMOST_FAILURES){// We always run in *rightmost failure position* recording mode before running in
	// *rightmost failures* recording mode. And since the traces generated by each of
	// these passes would be identical, there's no need to record it now if we have
	// already recorded it in the first pass.
	this.tracingEnabled=false;}else{throw new Error('invalid recording mode: '+recordingMode);}if(this.isTracing()){this.trace=[];}},enter:function enter(app){this.applicationStack.push(app);this.inLexifiedContextStack.push(false);},exit:function exit(){this.applicationStack.pop();this.inLexifiedContextStack.pop();},enterLexifiedContext:function enterLexifiedContext(){this.inLexifiedContextStack.push(true);},exitLexifiedContext:function exitLexifiedContext(){this.inLexifiedContextStack.pop();},currentApplication:function currentApplication(){return this.applicationStack[this.applicationStack.length-1];},inSyntacticContext:function inSyntacticContext(){if(typeof this.inputStream.source!=='string'){return false;}var currentApplication=this.currentApplication();if(currentApplication){return currentApplication.isSyntactic()&&!this.inLexifiedContext();}else{// The top-level context is syntactic if the start application is.
	return this.startExpr.factors[0].isSyntactic();}},inLexifiedContext:function inLexifiedContext(){return this.inLexifiedContextStack[this.inLexifiedContextStack.length-1];},skipSpaces:function skipSpaces(){var origFailuresInfo=this.getFailuresInfo();this.eval(applySpaces);this.bindings.pop();this.restoreFailuresInfo(origFailuresInfo);return this.inputStream.pos;},skipSpacesIfInSyntacticContext:function skipSpacesIfInSyntacticContext(){return this.inSyntacticContext()?this.skipSpaces():this.inputStream.pos;},maybeSkipSpacesBefore:function maybeSkipSpacesBefore(expr){if(expr instanceof pexprs.Apply&&expr.isSyntactic()){return this.skipSpaces();}else if(expr.allowsSkippingPrecedingSpace()&&expr!==applySpaces){return this.skipSpacesIfInSyntacticContext();}else{return this.inputStream.pos;}},truncateBindings:function truncateBindings(newLength){// Yes, this is this really faster than setting the `length` property (tested with
	// bin/es5bench on Node v6.1.0).
	while(this.bindings.length>newLength){this.bindings.pop();}},getCurrentPosInfo:function getCurrentPosInfo(){return this.getPosInfo(this.inputStream.pos);},getPosInfo:function getPosInfo(pos){var posInfo=this.posInfos[pos];return posInfo||(this.posInfos[pos]=new PosInfo(this));},processFailure:function processFailure(pos,expr){if(this.recordingMode===RM_RIGHTMOST_FAILURE_POSITION){if(pos>this.rightmostFailurePosition){this.rightmostFailurePosition=pos;}}else/* if (this.recordingMode === RM_RIGHTMOST_FAILURES) */if(pos===this.rightmostFailurePosition){// We're only interested in failures at the rightmost failure position that haven't
	// already been recorded.
	var app=this.currentApplication();if(app){// Substitute parameters with the actual pexprs that were passed to
	// the current rule.
	expr=expr.substituteParams(app.args);}else{// This branch is only reached for the "end-check" that is
	// performed after the top-level application. In that case,
	// expr === pexprs.end so there is no need to substitute
	// parameters.
	}this.addRightmostFailure(expr.toFailure(this.grammar),false);}},ensureRightmostFailures:function ensureRightmostFailures(){if(!this.rightmostFailures){this.rightmostFailures=Object.create(null);}},addRightmostFailure:function addRightmostFailure(failure,shouldCloneIfNew){this.ensureRightmostFailures();var key=failure.toKey();if(!this.rightmostFailures[key]){this.rightmostFailures[key]=shouldCloneIfNew?failure.clone():failure;}else if(this.rightmostFailures[key].isFluffy()&&!failure.isFluffy()){this.rightmostFailures[key].clearFluffy();}},addRightmostFailures:function addRightmostFailures(failures,shouldCloneIfNew){var self=this;Object.keys(failures).forEach(function(key){self.addRightmostFailure(failures[key],shouldCloneIfNew);});},cloneRightmostFailures:function cloneRightmostFailures(){if(!this.rightmostFailures){return undefined;}var ans=Object.create(null);var self=this;Object.keys(this.rightmostFailures).forEach(function(key){ans[key]=self.rightmostFailures[key].clone();});return ans;},getRightmostFailurePosition:function getRightmostFailurePosition(){return this.rightmostFailurePosition;},getFailures:function getFailures(){if(this.recordingMode===RM_RIGHTMOST_FAILURE_POSITION){// Rewind, then try to match the input again, recording failures.
	this.init(RM_RIGHTMOST_FAILURES);this.evalFromStart();}this.ensureRightmostFailures();var self=this;return Object.keys(this.rightmostFailures).map(function(key){return self.rightmostFailures[key];});},// Returns the memoized trace entry for `expr` at `pos`, if one exists, `null` otherwise.
	getMemoizedTraceEntry:function getMemoizedTraceEntry(pos,expr){var posInfo=this.posInfos[pos];if(posInfo&&expr.ruleName){var memoRec=posInfo.memo[expr.toMemoKey()];if(memoRec&&memoRec.traceEntry){var entry=memoRec.traceEntry.cloneWithExpr(expr);entry.isMemoized=true;return entry;}}return null;},// Returns a new trace entry, with the currently active trace array as its children.
	getTraceEntry:function getTraceEntry(pos,expr,succeeded,bindings){return this.getMemoizedTraceEntry(pos,expr)||new Trace(this.inputStream,pos,expr,succeeded,bindings,this.trace);},isTracing:function isTracing(){return this.tracingEnabled;},useMemoizedResult:function useMemoizedResult(memoRec){if(this.isTracing()){this.trace.push(memoRec.traceEntry);}if(this.recordingMode===RM_RIGHTMOST_FAILURES&&memoRec.failuresAtRightmostPosition){this.addRightmostFailures(memoRec.failuresAtRightmostPosition,true);}if(memoRec.value){this.inputStream.pos=memoRec.pos;this.bindings.push(memoRec.value);return true;}return false;},// Evaluate `expr` and return `true` if it succeeded, `false` otherwise. On success, `bindings`
	// will have `expr.getArity()` more elements than before, and the input stream's position may
	// have increased. On failure, `bindings` and position will be unchanged.
	eval:function _eval(expr){var inputStream=this.inputStream;var origNumBindings=this.bindings.length;if(this.recordingMode===RM_RIGHTMOST_FAILURES){var origFailures=this.rightmostFailures;this.rightmostFailures=undefined;}var origPos=inputStream.pos;var memoPos=this.maybeSkipSpacesBefore(expr);if(this.isTracing()){var origTrace=this.trace;this.trace=[];}// Do the actual evaluation.
	var ans=expr.eval(this);if(this.isTracing()){var bindings=this.bindings.slice(origNumBindings);var traceEntry=this.getTraceEntry(memoPos,expr,ans,bindings);traceEntry.isImplicitSpaces=expr===applySpaces;traceEntry.isRootNode=expr===this.startExpr;origTrace.push(traceEntry);this.trace=origTrace;}if(ans){if(this.rightmostFailures&&(inputStream.pos===this.rightmostFailurePosition||this.skipSpacesIfInSyntacticContext()===this.rightmostFailurePosition)){var self=this;Object.keys(this.rightmostFailures).forEach(function(key){self.rightmostFailures[key].makeFluffy();});}}else{// Reset the position and the bindings.
	inputStream.pos=origPos;this.truncateBindings(origNumBindings);}if(this.recordingMode===RM_RIGHTMOST_FAILURES&&origFailures){this.addRightmostFailures(origFailures,false);}return ans;},// Return the starting expression for this grammar. If `optStartApplication` is specified, it
	// is a string expressing a rule application in the grammar. If not specified, the grammar's
	// default start rule will be used.
	_getStartExpr:function _getStartExpr(grammar,optStartApplication){var applicationStr=optStartApplication||grammar.defaultStartRule;if(!applicationStr){throw new Error('Missing start rule argument -- the grammar has no default start rule.');}var startApp=grammar.parseApplication(applicationStr);return new pexprs.Seq([startApp,pexprs.end]);},evalFromStart:function evalFromStart(){this.eval(this.startExpr);},getFailuresInfo:function getFailuresInfo(){if(this.recordingMode===RM_RIGHTMOST_FAILURE_POSITION){return this.rightmostFailurePosition;}else/* if (this.recordingMode === RM_RIGHTMOST_FAILURES) */{return this.rightmostFailures;}},restoreFailuresInfo:function restoreFailuresInfo(failuresInfo){if(this.recordingMode===RM_RIGHTMOST_FAILURE_POSITION){this.rightmostFailurePosition=failuresInfo;}else/* if (this.recordingMode === RM_RIGHTMOST_FAILURES) */{this.rightmostFailures=failuresInfo;}}};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=State;},{"./InputStream":31,"./PosInfo":35,"./Trace":38,"./pexprs":59}],38:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var Interval=require('./Interval');var common=require('./common');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	// Unicode characters that are used in the `toString` output.
	var BALLOT_X="✗";var CHECK_MARK="✓";var DOT_OPERATOR="⋅";var RIGHTWARDS_DOUBLE_ARROW="⇒";var SYMBOL_FOR_HORIZONTAL_TABULATION="␉";var SYMBOL_FOR_LINE_FEED="␊";var SYMBOL_FOR_CARRIAGE_RETURN="␍";function spaces(n){return common.repeat(' ',n).join('');}// Return a string representation of a portion of `inputStream` at offset `pos`.
	// The result will contain exactly `len` characters.
	function getInputExcerpt(inputStream,pos,len){var excerpt=asEscapedString(inputStream.sourceSlice(pos,pos+len));// Pad the output if necessary.
	if(excerpt.length<len){return excerpt+common.repeat(' ',len-excerpt.length).join('');}return excerpt;}function asEscapedString(obj){if(typeof obj==='string'){// Replace non-printable characters with visible symbols.
	return obj.replace(/ /g,DOT_OPERATOR).replace(/\t/g,SYMBOL_FOR_HORIZONTAL_TABULATION).replace(/\n/g,SYMBOL_FOR_LINE_FEED).replace(/\r/g,SYMBOL_FOR_CARRIAGE_RETURN);}return String(obj);}// ----------------- Trace -----------------
	function Trace(inputStream,pos,expr,succeeded,bindings,optChildren){this.inputStream=inputStream;this.pos=pos;this.source=new Interval(inputStream,pos,inputStream.pos);this.expr=expr;this.succeeded=succeeded;this.bindings=bindings;this.children=optChildren||[];this.isHeadOfLeftRecursion=false;// Is this the outermost LR application?
	this.isImplicitSpaces=false;this.isMemoized=false;this.isRootNode=false;this.terminatesLR=false;this.terminatingLREntry=null;}// A value that can be returned from visitor functions to indicate that a
	// node should not be recursed into.
	Trace.prototype.SKIP={};Object.defineProperty(Trace.prototype,'displayString',{get:function get(){return this.expr.toDisplayString();}});Trace.prototype.clone=function(){return this.cloneWithExpr(this.expr);};Trace.prototype.cloneWithExpr=function(expr){var ans=new Trace(this.inputStream,this.pos,expr,this.succeeded,this.bindings,this.children);ans.isHeadOfLeftRecursion=this.isHeadOfLeftRecursion;ans.isImplicitSpaces=this.isImplicitSpaces;ans.isMemoized=this.isMemoized;ans.isRootNode=this.isRootNode;ans.terminatesLR=this.terminatesLR;ans.terminatingLREntry=this.terminatingLREntry;return ans;};// Record the trace information for the terminating condition of the LR loop.
	Trace.prototype.recordLRTermination=function(ruleBodyTrace,value){this.terminatingLREntry=new Trace(this.inputStream,this.pos,this.expr,false,[value],[ruleBodyTrace]);this.terminatingLREntry.terminatesLR=true;};// Recursively traverse this trace node and all its descendents, calling a visitor function
	// for each node that is visited. If `vistorObjOrFn` is an object, then its 'enter' property
	// is a function to call before visiting the children of a node, and its 'exit' property is
	// a function to call afterwards. If `visitorObjOrFn` is a function, it represents the 'enter'
	// function.
	//
	// The functions are called with three arguments: the Trace node, its parent Trace, and a number
	// representing the depth of the node in the tree. (The root node has depth 0.) `optThisArg`, if
	// specified, is the value to use for `this` when executing the visitor functions.
	Trace.prototype.walk=function(visitorObjOrFn,optThisArg){var visitor=visitorObjOrFn;if(typeof visitor==='function'){visitor={enter:visitor};}function _walk(node,parent,depth){var recurse=true;if(visitor.enter){if(visitor.enter.call(optThisArg,node,parent,depth)===Trace.prototype.SKIP){recurse=false;}}if(recurse){node.children.forEach(function(child){_walk(child,node,depth+1);});if(visitor.exit){visitor.exit.call(optThisArg,node,parent,depth);}}}if(this.isRootNode){// Don't visit the root node itself, only its children.
	this.children.forEach(function(c){_walk(c,null,0);});}else{_walk(this,null,0);}};// Return a string representation of the trace.
	// Sample:
	//     12⋅+⋅2⋅*⋅3 ✓ exp ⇒  "12"
	//     12⋅+⋅2⋅*⋅3   ✓ addExp (LR) ⇒  "12"
	//     12⋅+⋅2⋅*⋅3       ✗ addExp_plus
	Trace.prototype.toString=function(){var sb=new common.StringBuffer();this.walk(function(node,parent,depth){if(!node){return this.SKIP;}var ctorName=node.expr.constructor.name;// Don't print anything for Alt nodes.
	if(ctorName==='Alt'){return;// eslint-disable-line consistent-return
	}sb.append(getInputExcerpt(node.inputStream,node.pos,10)+spaces(depth*2+1));sb.append((node.succeeded?CHECK_MARK:BALLOT_X)+' '+node.displayString);if(node.isHeadOfLeftRecursion){sb.append(' (LR)');}if(node.succeeded){var contents=asEscapedString(node.source.contents);sb.append(' '+RIGHTWARDS_DOUBLE_ARROW+'  ');sb.append(typeof contents==='string'?'"'+contents+'"':contents);}sb.append('\n');}.bind(this));return sb.contents();};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports=Trace;},{"./Interval":32,"./common":39}],39:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var extend=require('util-extend');// --------------------------------------------------------------------
	// Private Stuff
	// --------------------------------------------------------------------
	// Helpers
	var escapeStringFor={};for(var c=0;c<128;c++){escapeStringFor[c]=String.fromCharCode(c);}escapeStringFor["'".charCodeAt(0)]="\\'";escapeStringFor['"'.charCodeAt(0)]='\\"';escapeStringFor['\\'.charCodeAt(0)]='\\\\';escapeStringFor['\b'.charCodeAt(0)]='\\b';escapeStringFor['\f'.charCodeAt(0)]='\\f';escapeStringFor['\n'.charCodeAt(0)]='\\n';escapeStringFor['\r'.charCodeAt(0)]='\\r';escapeStringFor['\t'.charCodeAt(0)]='\\t';escapeStringFor["\u000b".charCodeAt(0)]='\\v';// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	exports.abstract=function(optMethodName){var methodName=optMethodName||'';return function(){throw new Error('this method '+methodName+' is abstract! '+'(it has no implementation in class '+this.constructor.name+')');};};exports.assert=function(cond,message){if(!cond){throw new Error(message);}};// Define a lazily-computed, non-enumerable property named `propName`
	// on the object `obj`. `getterFn` will be called to compute the value the
	// first time the property is accessed.
	exports.defineLazyProperty=function(obj,propName,getterFn){var memo;Object.defineProperty(obj,propName,{get:function get(){if(!memo){memo=getterFn.call(this);}return memo;}});};exports.clone=function(obj){if(obj){return extend({},obj);}return obj;};exports.extend=extend;exports.repeatFn=function(fn,n){var arr=[];while(n-->0){arr.push(fn());}return arr;};exports.repeatStr=function(str,n){return new Array(n+1).join(str);};exports.repeat=function(x,n){return exports.repeatFn(function(){return x;},n);};exports.getDuplicates=function(array){var duplicates=[];for(var idx=0;idx<array.length;idx++){var x=array[idx];if(array.lastIndexOf(x)!==idx&&duplicates.indexOf(x)<0){duplicates.push(x);}}return duplicates;};exports.copyWithoutDuplicates=function(array){var noDuplicates=[];array.forEach(function(entry){if(noDuplicates.indexOf(entry)<0){noDuplicates.push(entry);}});return noDuplicates;};exports.isSyntactic=function(ruleName){var firstChar=ruleName[0];return firstChar===firstChar.toUpperCase();};exports.isLexical=function(ruleName){return!exports.isSyntactic(ruleName);};exports.padLeft=function(str,len,optChar){var ch=optChar||' ';if(str.length<len){return exports.repeatStr(ch,len-str.length)+str;}return str;};// StringBuffer
	exports.StringBuffer=function(){this.strings=[];};exports.StringBuffer.prototype.append=function(str){this.strings.push(str);};exports.StringBuffer.prototype.contents=function(){return this.strings.join('');};// Character escaping and unescaping
	exports.escapeChar=function(c,optDelim){var charCode=c.charCodeAt(0);if((c==='"'||c==="'")&&optDelim&&c!==optDelim){return c;}else if(charCode<128){return escapeStringFor[charCode];}else if(128<=charCode&&charCode<256){return'\\x'+exports.padLeft(charCode.toString(16),2,'0');}else{return"\\u"+exports.padLeft(charCode.toString(16),4,'0');}};exports.unescapeChar=function(s){if(s.charAt(0)==='\\'){switch(s.charAt(1)){case'b':return'\b';case'f':return'\f';case'n':return'\n';case'r':return'\r';case't':return'\t';case'v':return'\v';case'x':return String.fromCharCode(parseInt(s.substring(2,4),16));case'u':return String.fromCharCode(parseInt(s.substring(2,6),16));default:return s.charAt(1);}}else{return s;}};// Helper for producing a description of an unknown object in a safe way.
	// Especially useful for error messages where an unexpected type of object was encountered.
	exports.unexpectedObjToString=function(obj){if(obj==null){return String(obj);}var baseToString=Object.prototype.toString.call(obj);try{var typeName;if(obj.constructor&&obj.constructor.name){typeName=obj.constructor.name;}else if(baseToString.indexOf('[object ')===0){typeName=baseToString.slice(8,-1);// Extract e.g. "Array" from "[object Array]".
	}else{typeName=typeof obj==="undefined"?"undefined":_typeof(obj);}return typeName+': '+JSON.stringify(String(obj));}catch(e){return baseToString;}};},{"util-extend":26}],40:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var Namespace=require('./Namespace');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function createError(message,optInterval){var e;if(optInterval){e=new Error(optInterval.getLineAndColumnMessage()+message);e.shortMessage=message;e.interval=optInterval;}else{e=new Error(message);}return e;}// ----------------- errors about intervals -----------------
	function intervalSourcesDontMatch(){return createError("Interval sources don't match");}// ----------------- errors about grammars -----------------
	// Grammar syntax error
	function grammarSyntaxError(matchFailure){var e=new Error();Object.defineProperty(e,'message',{get:function get(){return matchFailure.message;}});Object.defineProperty(e,'shortMessage',{get:function get(){return'Expected '+matchFailure.getExpectedText();}});e.interval=matchFailure.getInterval();return e;}// Undeclared grammar
	function undeclaredGrammar(grammarName,namespace,interval){var message=namespace?'Grammar '+grammarName+' is not declared in namespace '+Namespace.toString(namespace):'Undeclared grammar '+grammarName;return createError(message,interval);}// Duplicate grammar declaration
	function duplicateGrammarDeclaration(grammar,namespace){return createError('Grammar '+grammar.name+' is already declared in this namespace');}// ----------------- rules -----------------
	// Undeclared rule
	function undeclaredRule(ruleName,grammarName,optInterval){return createError('Rule '+ruleName+' is not declared in grammar '+grammarName,optInterval);}// Cannot override undeclared rule
	function cannotOverrideUndeclaredRule(ruleName,grammarName,optSource){return createError('Cannot override rule '+ruleName+' because it is not declared in '+grammarName,optSource);}// Cannot extend undeclared rule
	function cannotExtendUndeclaredRule(ruleName,grammarName,optSource){return createError('Cannot extend rule '+ruleName+' because it is not declared in '+grammarName,optSource);}// Duplicate rule declaration
	function duplicateRuleDeclaration(ruleName,grammarName,declGrammarName,body,optSource){var message="Duplicate declaration for rule '"+ruleName+"' in grammar '"+grammarName+"'";if(grammarName!==declGrammarName){message+=" (originally declared in '"+declGrammarName+"')";}return createError(message,optSource);}// Wrong number of parameters
	function wrongNumberOfParameters(ruleName,expected,actual,body,source){return createError('Wrong number of parameters for rule '+ruleName+' (expected '+expected+', got '+actual+')',source);}// Wrong number of arguments
	function wrongNumberOfArguments(ruleName,expected,actual,expr){return createError('Wrong number of arguments for rule '+ruleName+' (expected '+expected+', got '+actual+')',expr.source);}// Duplicate parameter names
	function duplicateParameterNames(ruleName,duplicates,body,source){return createError('Duplicate parameter names in rule '+ruleName+': '+duplicates.join(','),source);}// Invalid parameter expression
	function invalidParameter(ruleName,expr){return createError('Invalid parameter to rule '+ruleName+': '+expr+' has arity '+expr.getArity()+', but parameter expressions '+'must have arity 1',expr.source);}// Application of syntactic rule from lexical rule
	function applicationOfSyntacticRuleFromLexicalContext(ruleName,applyExpr){return createError('Cannot apply syntactic rule '+ruleName+' from here (inside a lexical context)',applyExpr.source);}// ----------------- Kleene operators -----------------
	function kleeneExprHasNullableOperand(kleeneExpr){return createError('Nullable expression '+kleeneExpr.expr.source.contents+" is not allowed inside '"+kleeneExpr.operator+"' (possible infinite loop)",kleeneExpr.expr.source);}// ----------------- arity -----------------
	function inconsistentArity(ruleName,expected,actual,expr){return createError('Rule '+ruleName+' involves an alternation which has inconsistent arity '+'(expected '+expected+', got '+actual+')',expr.source);}// ----------------- properties -----------------
	function duplicatePropertyNames(duplicates){return createError('Object pattern has duplicate property names: '+duplicates.join(', '));}// ----------------- constructors -----------------
	function invalidConstructorCall(grammar,ctorName,children){return createError('Attempt to invoke constructor '+ctorName+' with invalid or unexpected arguments');}// ----------------- convenience -----------------
	function multipleErrors(errors){var messages=errors.map(function(e){return e.message;});return createError(['Errors:'].concat(messages).join('\n- '),errors[0].interval);}// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports={applicationOfSyntacticRuleFromLexicalContext:applicationOfSyntacticRuleFromLexicalContext,cannotExtendUndeclaredRule:cannotExtendUndeclaredRule,cannotOverrideUndeclaredRule:cannotOverrideUndeclaredRule,duplicateGrammarDeclaration:duplicateGrammarDeclaration,duplicateParameterNames:duplicateParameterNames,duplicatePropertyNames:duplicatePropertyNames,duplicateRuleDeclaration:duplicateRuleDeclaration,inconsistentArity:inconsistentArity,intervalSourcesDontMatch:intervalSourcesDontMatch,invalidConstructorCall:invalidConstructorCall,invalidParameter:invalidParameter,grammarSyntaxError:grammarSyntaxError,kleeneExprHasNullableOperand:kleeneExprHasNullableOperand,undeclaredGrammar:undeclaredGrammar,undeclaredRule:undeclaredRule,wrongNumberOfArguments:wrongNumberOfArguments,wrongNumberOfParameters:wrongNumberOfParameters,throwErrors:function throwErrors(errors){if(errors.length===1){throw errors[0];}if(errors.length>1){throw multipleErrors(errors);}}};},{"./Namespace":34}],41:[function(require,module,exports){/* global document, XMLHttpRequest */'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var Builder=require('./Builder');var Grammar=require('./Grammar');var Namespace=require('./Namespace');var common=require('./common');var errors=require('./errors');var pexprs=require('./pexprs');var util=require('./util');var isBuffer=require('is-buffer');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	// The metagrammar, i.e. the grammar for Ohm grammars. Initialized at the
	// bottom of this file because loading the grammar requires Ohm itself.
	var ohmGrammar;// An object which makes it possible to stub out the document API for testing.
	var documentInterface={querySelector:function querySelector(sel){return document.querySelector(sel);},querySelectorAll:function querySelectorAll(sel){return document.querySelectorAll(sel);}};// Check if `obj` is a DOM element.
	function isElement(obj){return!!(obj&&obj.nodeType===1);}function isUndefined(obj){return obj===void 0;}var MAX_ARRAY_INDEX=Math.pow(2,53)-1;function isArrayLike(obj){if(obj==null){return false;}var length=obj.length;return typeof length==='number'&&length>=0&&length<=MAX_ARRAY_INDEX;}// TODO: just use the jQuery thing
	function load(url){var req=new XMLHttpRequest();req.open('GET',url,false);try{req.send();if(req.status===0||req.status===200){return req.responseText;}}catch(e){}throw new Error('unable to load url '+url);}// Returns a Grammar instance (i.e., an object with a `match` method) for
	// `tree`, which is the concrete syntax tree of a user-written grammar.
	// The grammar will be assigned into `namespace` under the name of the grammar
	// as specified in the source.
	function buildGrammar(match,namespace,optOhmGrammarForTesting){var builder=new Builder();var decl;var currentRuleName;var currentRuleFormals;var overriding=false;var metaGrammar=optOhmGrammarForTesting||ohmGrammar;// A visitor that produces a Grammar instance from the CST.
	var helpers=metaGrammar.semantics().addOperation('visit',{Grammar:function Grammar(n,s,open,rs,close){var grammarName=n.visit();decl=builder.newGrammar(grammarName,namespace);s.visit();rs.visit();var g=decl.build();g.source=this.source.trimmed();if(grammarName in namespace){throw errors.duplicateGrammarDeclaration(g,namespace);}namespace[grammarName]=g;return g;},SuperGrammar:function SuperGrammar(_,n){var superGrammarName=n.visit();if(superGrammarName==='null'){decl.withSuperGrammar(null);}else{if(!namespace||!(superGrammarName in namespace)){throw errors.undeclaredGrammar(superGrammarName,namespace,n.source);}decl.withSuperGrammar(namespace[superGrammarName]);}},Rule_define:function Rule_define(n,fs,d,_,b){currentRuleName=n.visit();currentRuleFormals=fs.visit()[0]||[];// If there is no default start rule yet, set it now. This must be done before visiting
	// the body, because it might contain an inline rule definition.
	if(!decl.defaultStartRule&&decl.ensureSuperGrammar()!==Grammar.ProtoBuiltInRules){decl.withDefaultStartRule(currentRuleName);}var body=b.visit();var description=d.visit()[0];var source=this.source.trimmed();return decl.define(currentRuleName,currentRuleFormals,body,description,source);},Rule_override:function Rule_override(n,fs,_,b){currentRuleName=n.visit();currentRuleFormals=fs.visit()[0]||[];overriding=true;var body=b.visit();var source=this.source.trimmed();var ans=decl.override(currentRuleName,currentRuleFormals,body,null,source);overriding=false;return ans;},Rule_extend:function Rule_extend(n,fs,_,b){currentRuleName=n.visit();currentRuleFormals=fs.visit()[0]||[];var body=b.visit();var source=this.source.trimmed();var ans=decl.extend(currentRuleName,currentRuleFormals,body,null,source);return ans;},RuleBody:function RuleBody(_,terms){var args=terms.visit();return builder.alt.apply(builder,args).withSource(this.source);},Formals:function Formals(opointy,fs,cpointy){return fs.visit();},Params:function Params(opointy,ps,cpointy){return ps.visit();},Alt:function Alt(seqs){var args=seqs.visit();return builder.alt.apply(builder,args).withSource(this.source);},TopLevelTerm_inline:function TopLevelTerm_inline(b,n){var inlineRuleName=currentRuleName+'_'+n.visit();var body=b.visit();var source=this.source.trimmed();var isNewRuleDeclaration=!(decl.superGrammar&&decl.superGrammar.rules[inlineRuleName]);if(overriding&&!isNewRuleDeclaration){decl.override(inlineRuleName,currentRuleFormals,body,null,source);}else{decl.define(inlineRuleName,currentRuleFormals,body,null,source);}var params=currentRuleFormals.map(function(formal){return builder.app(formal);});return builder.app(inlineRuleName,params).withSource(body.source);},Seq:function Seq(expr){return builder.seq.apply(builder,expr.visit()).withSource(this.source);},Iter_star:function Iter_star(x,_){return builder.star(x.visit()).withSource(this.source);},Iter_plus:function Iter_plus(x,_){return builder.plus(x.visit()).withSource(this.source);},Iter_opt:function Iter_opt(x,_){return builder.opt(x.visit()).withSource(this.source);},Pred_not:function Pred_not(_,x){return builder.not(x.visit()).withSource(this.source);},Pred_lookahead:function Pred_lookahead(_,x){return builder.lookahead(x.visit()).withSource(this.source);},Lex_lex:function Lex_lex(_,x){return builder.lex(x.visit()).withSource(this.source);},Base_application:function Base_application(rule,ps){return builder.app(rule.visit(),ps.visit()[0]||[]).withSource(this.source);},Base_range:function Base_range(from,_,to){return builder.range(from.visit(),to.visit()).withSource(this.source);},Base_terminal:function Base_terminal(expr){return builder.terminal(expr.visit()).withSource(this.source);},Base_paren:function Base_paren(open,x,close){return x.visit();},ruleDescr:function ruleDescr(open,t,close){return t.visit();},ruleDescrText:function ruleDescrText(_){return this.sourceString.trim();},caseName:function caseName(_,space1,n,space2,end){return n.visit();},name:function name(first,rest){return this.sourceString;},nameFirst:function nameFirst(expr){},nameRest:function nameRest(expr){},terminal:function terminal(open,cs,close){return cs.visit().map(function(c){return common.unescapeChar(c);}).join('');},terminalChar:function terminalChar(_){return this.sourceString;},escapeChar:function escapeChar(_){return this.sourceString;},NonemptyListOf:function NonemptyListOf(x,_,xs){return[x.visit()].concat(xs.visit());},EmptyListOf:function EmptyListOf(){return[];},_terminal:function _terminal(){return this.primitiveValue;}});return helpers(match).visit();}function compileAndLoad(source,namespace){var m=ohmGrammar.match(source,'Grammars');if(m.failed()){throw errors.grammarSyntaxError(m);}return buildGrammar(m,namespace);}// Return the contents of a script element, fetching it via XHR if necessary.
	function getScriptElementContents(el){if(!isElement(el)){throw new TypeError('Expected a DOM Node, got '+common.unexpectedObjToString(el));}if(el.type!=='text/ohm-js'){throw new Error('Expected a script tag with type="text/ohm-js", got '+el);}return el.getAttribute('src')?load(el.getAttribute('src')):el.innerHTML;}function grammar(source,optNamespace){var ns=grammars(source,optNamespace);// Ensure that the source contained no more than one grammar definition.
	var grammarNames=Object.keys(ns);if(grammarNames.length===0){throw new Error('Missing grammar definition');}else if(grammarNames.length>1){var secondGrammar=ns[grammarNames[1]];var interval=secondGrammar.source;throw new Error(util.getLineAndColumnMessage(interval.inputStream.source,interval.startIdx)+'Found more than one grammar definition -- use ohm.grammars() instead.');}return ns[grammarNames[0]];// Return the one and only grammar.
	}function grammars(source,optNamespace){var ns=Namespace.extend(Namespace.asNamespace(optNamespace));if(typeof source!=='string'){// For convenience, detect Node.js Buffer objects and automatically call toString().
	if(isBuffer(source)){source=source.toString();}else{throw new TypeError('Expected string as first argument, got '+common.unexpectedObjToString(source));}}compileAndLoad(source,ns);return ns;}function grammarFromScriptElement(optNode){var node=optNode;if(isUndefined(node)){var nodeList=documentInterface.querySelectorAll('script[type="text/ohm-js"]');if(nodeList.length!==1){throw new Error('Expected exactly one script tag with type="text/ohm-js", found '+nodeList.length);}node=nodeList[0];}return grammar(getScriptElementContents(node));}function grammarsFromScriptElements(optNodeOrNodeList){// Simple case: the argument is a DOM node.
	if(isElement(optNodeOrNodeList)){return grammars(optNodeOrNodeList);}// Otherwise, it must be either undefined or a NodeList.
	var nodeList=optNodeOrNodeList;if(isUndefined(nodeList)){// Find all script elements with type="text/ohm-js".
	nodeList=documentInterface.querySelectorAll('script[type="text/ohm-js"]');}else if(typeof nodeList==='string'||!isElement(nodeList)&&!isArrayLike(nodeList)){throw new TypeError('Expected a Node, NodeList, or Array, but got '+nodeList);}var ns=Namespace.createNamespace();for(var i=0;i<nodeList.length;++i){// Copy the new grammars into `ns` to keep the namespace flat.
	common.extend(ns,grammars(getScriptElementContents(nodeList[i]),ns));}return ns;}function makeRecipe(recipe){if(typeof recipe==='function'){return recipe.call(new Builder());}else{if(typeof recipe==='string'){// stringified JSON recipe
	recipe=JSON.parse(recipe);}return new Builder().fromRecipe(recipe);}}// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	// Stuff that users should know about
	module.exports={createNamespace:Namespace.createNamespace,grammar:grammar,grammars:grammars,grammarFromScriptElement:grammarFromScriptElement,grammarsFromScriptElements:grammarsFromScriptElements,makeRecipe:makeRecipe,ohmGrammar:null,// Initialized below, after Grammar.BuiltInRules.
	pexprs:pexprs,util:util,extras:require('../extras')};// Stuff for testing, etc.
	module.exports._buildGrammar=buildGrammar;module.exports._setDocumentInterfaceForTesting=function(doc){documentInterface=doc;};// Late initialization for stuff that is bootstrapped.
	Grammar.BuiltInRules=require('../dist/built-in-rules');var Semantics=require('./Semantics');var operationsAndAttributesGrammar=require('../dist/operations-and-attributes');Semantics.initBuiltInSemantics(Grammar.BuiltInRules);Semantics.initPrototypeParser(operationsAndAttributesGrammar);// requires BuiltInSemantics
	module.exports.ohmGrammar=ohmGrammar=require('../dist/ohm-grammar');Grammar.initApplicationParser(ohmGrammar,buildGrammar);},{"../dist/built-in-rules":1,"../dist/ohm-grammar":2,"../dist/operations-and-attributes":3,"../extras":4,"./Builder":27,"./Grammar":29,"./Namespace":34,"./Semantics":36,"./common":39,"./errors":40,"./pexprs":59,"./util":60,"is-buffer":25}],42:[function(require,module,exports){'use strict';var inherits=require('inherits');var common=require('./common');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function Node(grammar,ctorName,children,source){this.grammar=grammar;this.ctorName=ctorName;this.children=children;this.source=source;}Node.prototype.numChildren=function(){return this.children.length;};Node.prototype.childAt=function(idx){return this.children[idx];};Node.prototype.indexOfChild=function(arg){return this.children.indexOf(arg);};Node.prototype.hasChildren=function(){return this.children.length>0;};Node.prototype.hasNoChildren=function(){return!this.hasChildren();};Node.prototype.onlyChild=function(){if(this.children.length!==1){throw new Error('cannot get only child of a node of type '+this.ctorName+' (it has '+this.numChildren()+' children)');}else{return this.firstChild();}};Node.prototype.firstChild=function(){if(this.hasNoChildren()){throw new Error('cannot get first child of a '+this.ctorName+' node, which has no children');}else{return this.childAt(0);}};Node.prototype.lastChild=function(){if(this.hasNoChildren()){throw new Error('cannot get last child of a '+this.ctorName+' node, which has no children');}else{return this.childAt(this.numChildren()-1);}};Node.prototype.childBefore=function(child){var childIdx=this.indexOfChild(child);if(childIdx<0){throw new Error('Node.childBefore() called w/ an argument that is not a child');}else if(childIdx===0){throw new Error('cannot get child before first child');}else{return this.childAt(childIdx-1);}};Node.prototype.childAfter=function(child){var childIdx=this.indexOfChild(child);if(childIdx<0){throw new Error('Node.childAfter() called w/ an argument that is not a child');}else if(childIdx===this.numChildren()-1){throw new Error('cannot get child after last child');}else{return this.childAt(childIdx+1);}};Node.prototype.isTerminal=function(){return false;};Node.prototype.isNonterminal=function(){return false;};Node.prototype.isIteration=function(){return false;};Node.prototype.isOptional=function(){return false;};Node.prototype.toJSON=function(){var r={};r[this.ctorName]=this.children;return r;};// Terminals
	function TerminalNode(grammar,value,source){Node.call(this,grammar,'_terminal',[],source);this.primitiveValue=value;}inherits(TerminalNode,Node);TerminalNode.prototype.isTerminal=function(){return true;};// Nonterminals
	function NonterminalNode(grammar,ruleName,children,source){Node.call(this,grammar,ruleName,children,source);}inherits(NonterminalNode,Node);NonterminalNode.prototype.isNonterminal=function(){return true;};NonterminalNode.prototype.isLexical=function(){return common.isLexical(this.ctorName);};NonterminalNode.prototype.isSyntactic=function(){return common.isSyntactic(this.ctorName);};// Iterations
	function IterationNode(grammar,children,source,optional){Node.call(this,grammar,'_iter',children,source);this.optional=optional;}inherits(IterationNode,Node);IterationNode.prototype.isIteration=function(){return true;};IterationNode.prototype.isOptional=function(){return this.optional;};// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	module.exports={Node:Node,TerminalNode:TerminalNode,NonterminalNode:NonterminalNode,IterationNode:IterationNode};},{"./common":39,"inherits":24}],43:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	/*
	  Return true if we should skip spaces preceding this expression in a syntactic context.
	*/pexprs.PExpr.prototype.allowsSkippingPrecedingSpace=common.abstract('allowsSkippingPrecedingSpace');/*
	  Generally, these are all first-order expressions that operate on strings and (with the
	  exception of Apply) directly read from the input stream.
	*/pexprs.any.allowsSkippingPrecedingSpace=pexprs.end.allowsSkippingPrecedingSpace=pexprs.Apply.prototype.allowsSkippingPrecedingSpace=pexprs.Terminal.prototype.allowsSkippingPrecedingSpace=pexprs.Range.prototype.allowsSkippingPrecedingSpace=pexprs.UnicodeChar.prototype.allowsSkippingPrecedingSpace=function(){return true;};/*
	  Higher-order expressions that don't directly consume input, and expressions that
	  don't operate on string input streams (e.g. Obj and Arr).
	*/pexprs.Alt.prototype.allowsSkippingPrecedingSpace=pexprs.Iter.prototype.allowsSkippingPrecedingSpace=pexprs.Lex.prototype.allowsSkippingPrecedingSpace=pexprs.Lookahead.prototype.allowsSkippingPrecedingSpace=pexprs.Not.prototype.allowsSkippingPrecedingSpace=pexprs.Param.prototype.allowsSkippingPrecedingSpace=pexprs.Seq.prototype.allowsSkippingPrecedingSpace=function(){return false;};},{"./common":39,"./pexprs":59}],44:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var errors=require('./errors');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	var lexifyCount;pexprs.PExpr.prototype.assertAllApplicationsAreValid=function(ruleName,grammar){lexifyCount=0;this._assertAllApplicationsAreValid(ruleName,grammar);};pexprs.PExpr.prototype._assertAllApplicationsAreValid=common.abstract('_assertAllApplicationsAreValid');pexprs.any._assertAllApplicationsAreValid=pexprs.end._assertAllApplicationsAreValid=pexprs.Terminal.prototype._assertAllApplicationsAreValid=pexprs.Range.prototype._assertAllApplicationsAreValid=pexprs.Param.prototype._assertAllApplicationsAreValid=pexprs.UnicodeChar.prototype._assertAllApplicationsAreValid=function(ruleName,grammar){// no-op
	};pexprs.Lex.prototype._assertAllApplicationsAreValid=function(ruleName,grammar){lexifyCount++;this.expr._assertAllApplicationsAreValid(ruleName,grammar);lexifyCount--;};pexprs.Alt.prototype._assertAllApplicationsAreValid=function(ruleName,grammar){for(var idx=0;idx<this.terms.length;idx++){this.terms[idx]._assertAllApplicationsAreValid(ruleName,grammar);}};pexprs.Seq.prototype._assertAllApplicationsAreValid=function(ruleName,grammar){for(var idx=0;idx<this.factors.length;idx++){this.factors[idx]._assertAllApplicationsAreValid(ruleName,grammar);}};pexprs.Iter.prototype._assertAllApplicationsAreValid=pexprs.Not.prototype._assertAllApplicationsAreValid=pexprs.Lookahead.prototype._assertAllApplicationsAreValid=function(ruleName,grammar){this.expr._assertAllApplicationsAreValid(ruleName,grammar);};pexprs.Apply.prototype._assertAllApplicationsAreValid=function(ruleName,grammar){var ruleInfo=grammar.rules[this.ruleName];// Make sure that the rule exists...
	if(!ruleInfo){throw errors.undeclaredRule(this.ruleName,grammar.name,this.source);}// ...and that this application is allowed
	if(common.isSyntactic(this.ruleName)&&(!common.isSyntactic(ruleName)||lexifyCount>0)){throw errors.applicationOfSyntacticRuleFromLexicalContext(this.ruleName,this);}// ...and that this application has the correct number of arguments
	var actual=this.args.length;var expected=ruleInfo.formals.length;if(actual!==expected){throw errors.wrongNumberOfArguments(this.ruleName,expected,actual,this);}// ...and that all of the argument expressions only have valid applications and have arity 1.
	var self=this;this.args.forEach(function(arg){arg._assertAllApplicationsAreValid(ruleName,grammar);if(arg.getArity()!==1){throw errors.invalidParameter(self.ruleName,arg);}});};},{"./common":39,"./errors":40,"./pexprs":59}],45:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var errors=require('./errors');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	pexprs.PExpr.prototype.assertChoicesHaveUniformArity=common.abstract('assertChoicesHaveUniformArity');pexprs.any.assertChoicesHaveUniformArity=pexprs.end.assertChoicesHaveUniformArity=pexprs.Terminal.prototype.assertChoicesHaveUniformArity=pexprs.Range.prototype.assertChoicesHaveUniformArity=pexprs.Param.prototype.assertChoicesHaveUniformArity=pexprs.Lex.prototype.assertChoicesHaveUniformArity=pexprs.UnicodeChar.prototype.assertChoicesHaveUniformArity=function(ruleName){// no-op
	};pexprs.Alt.prototype.assertChoicesHaveUniformArity=function(ruleName){if(this.terms.length===0){return;}var arity=this.terms[0].getArity();for(var idx=0;idx<this.terms.length;idx++){var term=this.terms[idx];term.assertChoicesHaveUniformArity();var otherArity=term.getArity();if(arity!==otherArity){throw errors.inconsistentArity(ruleName,arity,otherArity,term);}}};pexprs.Extend.prototype.assertChoicesHaveUniformArity=function(ruleName){// Extend is a special case of Alt that's guaranteed to have exactly two
	// cases: [extensions, origBody].
	var actualArity=this.terms[0].getArity();var expectedArity=this.terms[1].getArity();if(actualArity!==expectedArity){throw errors.inconsistentArity(ruleName,expectedArity,actualArity,this.terms[0]);}};pexprs.Seq.prototype.assertChoicesHaveUniformArity=function(ruleName){for(var idx=0;idx<this.factors.length;idx++){this.factors[idx].assertChoicesHaveUniformArity(ruleName);}};pexprs.Iter.prototype.assertChoicesHaveUniformArity=function(ruleName){this.expr.assertChoicesHaveUniformArity(ruleName);};pexprs.Not.prototype.assertChoicesHaveUniformArity=function(ruleName){// no-op (not required b/c the nested expr doesn't show up in the CST)
	};pexprs.Lookahead.prototype.assertChoicesHaveUniformArity=function(ruleName){this.expr.assertChoicesHaveUniformArity(ruleName);};pexprs.Apply.prototype.assertChoicesHaveUniformArity=function(ruleName){// The arities of the parameter expressions is required to be 1 by
	// `assertAllApplicationsAreValid()`.
	};},{"./common":39,"./errors":40,"./pexprs":59}],46:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var errors=require('./errors');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	pexprs.PExpr.prototype.assertIteratedExprsAreNotNullable=common.abstract('assertIteratedExprsAreNotNullable');pexprs.any.assertIteratedExprsAreNotNullable=pexprs.end.assertIteratedExprsAreNotNullable=pexprs.Terminal.prototype.assertIteratedExprsAreNotNullable=pexprs.Range.prototype.assertIteratedExprsAreNotNullable=pexprs.Param.prototype.assertIteratedExprsAreNotNullable=pexprs.UnicodeChar.prototype.assertIteratedExprsAreNotNullable=function(grammar,ruleName){// no-op
	};pexprs.Alt.prototype.assertIteratedExprsAreNotNullable=function(grammar,ruleName){for(var idx=0;idx<this.terms.length;idx++){this.terms[idx].assertIteratedExprsAreNotNullable(grammar,ruleName);}};pexprs.Seq.prototype.assertIteratedExprsAreNotNullable=function(grammar,ruleName){for(var idx=0;idx<this.factors.length;idx++){this.factors[idx].assertIteratedExprsAreNotNullable(grammar,ruleName);}};pexprs.Iter.prototype.assertIteratedExprsAreNotNullable=function(grammar,ruleName){// Note: this is the implementation of this method for `Star` and `Plus` expressions.
	// It is overridden for `Opt` below.
	this.expr.assertIteratedExprsAreNotNullable(grammar,ruleName);if(this.expr.isNullable(grammar)){throw errors.kleeneExprHasNullableOperand(this,ruleName);}};pexprs.Opt.prototype.assertIteratedExprsAreNotNullable=pexprs.Not.prototype.assertIteratedExprsAreNotNullable=pexprs.Lookahead.prototype.assertIteratedExprsAreNotNullable=pexprs.Lex.prototype.assertIteratedExprsAreNotNullable=function(grammar,ruleName){this.expr.assertIteratedExprsAreNotNullable(grammar,ruleName);};pexprs.Apply.prototype.assertIteratedExprsAreNotNullable=function(grammar,ruleName){this.args.forEach(function(arg){arg.assertIteratedExprsAreNotNullable(grammar,ruleName);});};},{"./common":39,"./errors":40,"./pexprs":59}],47:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var nodes=require('./nodes');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	pexprs.PExpr.prototype.check=common.abstract('check');pexprs.any.check=function(grammar,vals){return vals.length>=1;};pexprs.end.check=function(grammar,vals){return vals[0]instanceof nodes.Node&&vals[0].isTerminal()&&vals[0].primitiveValue===undefined;};pexprs.Terminal.prototype.check=function(grammar,vals){return vals[0]instanceof nodes.Node&&vals[0].isTerminal()&&vals[0].primitiveValue===this.obj;};pexprs.Range.prototype.check=function(grammar,vals){return vals[0]instanceof nodes.Node&&vals[0].isTerminal()&&_typeof(vals[0].primitiveValue)===_typeof(this.from);};pexprs.Param.prototype.check=function(grammar,vals){return vals.length>=1;};pexprs.Alt.prototype.check=function(grammar,vals){for(var i=0;i<this.terms.length;i++){var term=this.terms[i];if(term.check(grammar,vals)){return true;}}return false;};pexprs.Seq.prototype.check=function(grammar,vals){var pos=0;for(var i=0;i<this.factors.length;i++){var factor=this.factors[i];if(factor.check(grammar,vals.slice(pos))){pos+=factor.getArity();}else{return false;}}return true;};pexprs.Iter.prototype.check=function(grammar,vals){var arity=this.getArity();var columns=vals.slice(0,arity);if(columns.length!==arity){return false;}var rowCount=columns[0].length;var i;for(i=1;i<arity;i++){if(columns[i].length!==rowCount){return false;}}for(i=0;i<rowCount;i++){var row=[];for(var j=0;j<arity;j++){row.push(columns[j][i]);}if(!this.expr.check(grammar,row)){return false;}}return true;};pexprs.Not.prototype.check=function(grammar,vals){return true;};pexprs.Lookahead.prototype.check=pexprs.Lex.prototype.check=function(grammar,vals){return this.expr.check(grammar,vals);};pexprs.Apply.prototype.check=function(grammar,vals){if(!(vals[0]instanceof nodes.Node&&vals[0].grammar===grammar&&vals[0].ctorName===this.ruleName)){return false;}// TODO: think about *not* doing the following checks, i.e., trusting that the rule
	// was correctly constructed.
	var ruleNode=vals[0];var body=grammar.rules[this.ruleName].body;return body.check(grammar,ruleNode.children)&&ruleNode.numChildren()===body.getArity();};pexprs.UnicodeChar.prototype.check=function(grammar,vals){return vals[0]instanceof nodes.Node&&vals[0].isTerminal()&&typeof vals[0].primitiveValue==='string';};},{"./common":39,"./nodes":42,"./pexprs":59}],48:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var Trace=require('./Trace');var common=require('./common');var nodes=require('./nodes');var pexprs=require('./pexprs');var TerminalNode=nodes.TerminalNode;var NonterminalNode=nodes.NonterminalNode;var IterationNode=nodes.IterationNode;// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	/*
	  Evaluate the expression and return `true` if it succeeds, `false` otherwise. This method should
	  only be called directly by `State.prototype.eval(expr)`, which also updates the data structures
	  that are used for tracing. (Making those updates in a method of `State` enables the trace-specific
	  data structures to be "secrets" of that class, which is good for modularity.)
	
	  The contract of this method is as follows:
	  * When the return value is `true`,
	    - the state object will have `expr.getArity()` more bindings than it did before the call.
	  * When the return value is `false`,
	    - the state object may have more bindings than it did before the call, and
	    - its input stream's position may be anywhere.
	
	  Note that `State.prototype.eval(expr)`, unlike this method, guarantees that neither the state
	  object's bindings nor its input stream's position will change if the expression fails to match.
	*/pexprs.PExpr.prototype.eval=common.abstract('eval');// function(state) { ... }
	pexprs.any.eval=function(state){var inputStream=state.inputStream;var origPos=inputStream.pos;var ch=inputStream.next();if(ch){var source=inputStream.interval(origPos);state.bindings.push(new TerminalNode(state.grammar,ch,source));return true;}else{state.processFailure(origPos,this);return false;}};pexprs.end.eval=function(state){var inputStream=state.inputStream;var origPos=inputStream.pos;if(inputStream.atEnd()){var source=inputStream.interval(inputStream.pos);state.bindings.push(new TerminalNode(state.grammar,undefined,source));return true;}else{state.processFailure(origPos,this);return false;}};pexprs.Terminal.prototype.eval=function(state){var inputStream=state.inputStream;var origPos=inputStream.pos;if(!inputStream.matchString(this.obj)){state.processFailure(origPos,this);return false;}else{var source=inputStream.interval(origPos);var primitiveValue=this.obj;state.bindings.push(new TerminalNode(state.grammar,primitiveValue,source));return true;}};pexprs.Range.prototype.eval=function(state){var inputStream=state.inputStream;var origPos=inputStream.pos;var ch=inputStream.next();if(ch&&this.from<=ch&&ch<=this.to){var source=inputStream.interval(origPos);state.bindings.push(new TerminalNode(state.grammar,ch,source));return true;}else{state.processFailure(origPos,this);return false;}};pexprs.Param.prototype.eval=function(state){return state.eval(state.currentApplication().args[this.index]);};pexprs.Lex.prototype.eval=function(state){state.enterLexifiedContext();var ans=state.eval(this.expr);state.exitLexifiedContext();return ans;};pexprs.Alt.prototype.eval=function(state){for(var idx=0;idx<this.terms.length;idx++){if(state.eval(this.terms[idx])){return true;}}return false;};pexprs.Seq.prototype.eval=function(state){for(var idx=0;idx<this.factors.length;idx++){var factor=this.factors[idx];if(!state.eval(factor)){return false;}}return true;};pexprs.Iter.prototype.eval=function(state){var inputStream=state.inputStream;var origPos=inputStream.pos;var arity=this.getArity();var cols=[];while(cols.length<arity){cols.push([]);}var numMatches=0;var idx;while(numMatches<this.maxNumMatches&&state.eval(this.expr)){numMatches++;var row=state.bindings.splice(state.bindings.length-arity,arity);for(idx=0;idx<row.length;idx++){cols[idx].push(row[idx]);}}if(numMatches<this.minNumMatches){return false;}var source;if(numMatches===0){source=inputStream.interval(origPos,origPos);}else{var firstCol=cols[0];var lastCol=cols[cols.length-1];source=inputStream.interval(firstCol[0].source.startIdx,lastCol[lastCol.length-1].source.endIdx);}for(idx=0;idx<cols.length;idx++){state.bindings.push(new IterationNode(state.grammar,cols[idx],source,this instanceof pexprs.Opt));}return true;};pexprs.Not.prototype.eval=function(state){/*
	    TODO:
	    - Right now we're just throwing away all of the failures that happen inside a `not`, and
	      recording `this` as a failed expression.
	    - Double negation should be equivalent to lookahead, but that's not the case right now wrt
	      failures. E.g., ~~'foo' produces a failure for ~~'foo', but maybe it should produce
	      a failure for 'foo' instead.
	  */var inputStream=state.inputStream;var origPos=inputStream.pos;var failuresInfo=state.getFailuresInfo();var ans=state.eval(this.expr);state.restoreFailuresInfo(failuresInfo);if(ans){state.processFailure(origPos,this);return false;}inputStream.pos=origPos;return true;};pexprs.Lookahead.prototype.eval=function(state){var inputStream=state.inputStream;var origPos=inputStream.pos;if(state.eval(this.expr)){inputStream.pos=origPos;return true;}else{return false;}};pexprs.Apply.prototype.eval=function(state){var caller=state.currentApplication();var actuals=caller?caller.args:[];var app=this.substituteParams(actuals);var posInfo=state.getCurrentPosInfo();if(posInfo.isActive(app)){// This rule is already active at this position, i.e., it is left-recursive.
	return app.handleCycle(state);}var memoKey=app.toMemoKey();var memoRec=posInfo.memo[memoKey];return memoRec&&posInfo.shouldUseMemoizedResult(memoRec)?state.useMemoizedResult(memoRec):app.reallyEval(state);};pexprs.Apply.prototype.handleCycle=function(state){var posInfo=state.getCurrentPosInfo();var currentLeftRecursion=posInfo.currentLeftRecursion;var memoKey=this.toMemoKey();var memoRec=posInfo.memo[memoKey];if(currentLeftRecursion&&currentLeftRecursion.headApplication.toMemoKey()===memoKey){// We already know about this left recursion, but it's possible there are "involved
	// applications" that we don't already know about, so...
	memoRec.updateInvolvedApplicationMemoKeys();}else if(!memoRec){// New left recursion detected! Memoize a failure to try to get a seed parse.
	memoRec=posInfo.memo[memoKey]={pos:-1,value:false};posInfo.startLeftRecursion(this,memoRec);}return state.useMemoizedResult(memoRec);};pexprs.Apply.prototype.reallyEval=function(state){var inputStream=state.inputStream;var origPos=inputStream.pos;var origPosInfo=state.getCurrentPosInfo();var ruleInfo=state.grammar.rules[this.ruleName];var body=ruleInfo.body;var description=ruleInfo.description;origPosInfo.enter(this);if(description){var origFailuresInfo=state.getFailuresInfo();}var value=this.evalOnce(body,state);var currentLR=origPosInfo.currentLeftRecursion;var memoKey=this.toMemoKey();var isHeadOfLeftRecursion=!!currentLR&&currentLR.headApplication.toMemoKey()===memoKey;var memoized=true;if(isHeadOfLeftRecursion){value=this.growSeedResult(body,state,origPos,currentLR,value);origPosInfo.endLeftRecursion();}else if(currentLR&&currentLR.isInvolved(memoKey)){// Don't memoize the result
	memoized=false;}else{origPosInfo.memo[memoKey]={pos:inputStream.pos,value:value,failuresAtRightmostPosition:state.cloneRightmostFailures()};}if(description){state.restoreFailuresInfo(origFailuresInfo);if(!value){state.processFailure(origPos,this);}if(memoized){origPosInfo.memo[memoKey].failuresAtRightmostPosition=state.cloneRightmostFailures();}}// Record trace information in the memo table, so that it is available if the memoized result
	// is used later.
	if(state.isTracing()&&origPosInfo.memo[memoKey]){var succeeded=!!value;var entry=state.getTraceEntry(origPos,this,succeeded,succeeded?[value]:[]);if(isHeadOfLeftRecursion){common.assert(entry.terminatingLREntry!=null||!succeeded);entry.isHeadOfLeftRecursion=true;}origPosInfo.memo[memoKey].traceEntry=entry;}origPosInfo.exit();if(value){state.bindings.push(value);return true;}else{return false;}};pexprs.Apply.prototype.evalOnce=function(expr,state){var inputStream=state.inputStream;var origPos=inputStream.pos;if(state.eval(expr)){var arity=expr.getArity();var bindings=state.bindings.splice(state.bindings.length-arity,arity);var ans=new NonterminalNode(state.grammar,this.ruleName,bindings,inputStream.interval(origPos));return ans;}else{return false;}};pexprs.Apply.prototype.growSeedResult=function(body,state,origPos,lrMemoRec,newValue){if(!newValue){return false;}var inputStream=state.inputStream;while(true){lrMemoRec.pos=inputStream.pos;lrMemoRec.value=newValue;lrMemoRec.failuresAtRightmostPosition=state.cloneRightmostFailures();if(state.isTracing()){// Before evaluating the body again, add a trace node for this application to the memo entry.
	// Its only child is a copy of the trace node from `newValue`, which will always be the last
	// element in `state.trace`.
	var seedTrace=state.trace[state.trace.length-1];lrMemoRec.traceEntry=new Trace(state.inputStream,origPos,this,true,[newValue],[seedTrace.clone()]);}inputStream.pos=origPos;newValue=this.evalOnce(body,state);if(inputStream.pos<=lrMemoRec.pos){break;}if(state.isTracing()){state.trace.splice(-2,1);// Drop the trace for the old seed.
	}}if(state.isTracing()){// The last entry is for an unused result -- pop it and save it in the "real" entry.
	lrMemoRec.traceEntry.recordLRTermination(state.trace.pop(),newValue);}inputStream.pos=lrMemoRec.pos;return lrMemoRec.value;};pexprs.UnicodeChar.prototype.eval=function(state){var inputStream=state.inputStream;var origPos=inputStream.pos;var ch=inputStream.next();if(ch&&this.pattern.test(ch)){var source=inputStream.interval(origPos);state.bindings.push(new TerminalNode(state.grammar,ch,source));return true;}else{state.processFailure(origPos,this);return false;}};},{"./Trace":38,"./common":39,"./nodes":42,"./pexprs":59}],49:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	pexprs.PExpr.prototype.getArity=common.abstract('getArity');pexprs.any.getArity=pexprs.end.getArity=pexprs.Terminal.prototype.getArity=pexprs.Range.prototype.getArity=pexprs.Param.prototype.getArity=pexprs.Apply.prototype.getArity=pexprs.UnicodeChar.prototype.getArity=function(){return 1;};pexprs.Alt.prototype.getArity=function(){// This is ok b/c all terms must have the same arity -- this property is
	// checked by the Grammar constructor.
	return this.terms.length===0?0:this.terms[0].getArity();};pexprs.Seq.prototype.getArity=function(){var arity=0;for(var idx=0;idx<this.factors.length;idx++){arity+=this.factors[idx].getArity();}return arity;};pexprs.Iter.prototype.getArity=function(){return this.expr.getArity();};pexprs.Not.prototype.getArity=function(){return 0;};pexprs.Lookahead.prototype.getArity=pexprs.Lex.prototype.getArity=function(){return this.expr.getArity();};},{"./common":39,"./pexprs":59}],50:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	/*
	  Called at grammar creation time to rewrite a rule body, replacing each reference to a formal
	  parameter with a `Param` node. Returns a PExpr -- either a new one, or the original one if
	  it was modified in place.
	*/pexprs.PExpr.prototype.introduceParams=common.abstract('introduceParams');pexprs.any.introduceParams=pexprs.end.introduceParams=pexprs.Terminal.prototype.introduceParams=pexprs.Range.prototype.introduceParams=pexprs.Param.prototype.introduceParams=pexprs.UnicodeChar.prototype.introduceParams=function(formals){return this;};pexprs.Alt.prototype.introduceParams=function(formals){this.terms.forEach(function(term,idx,terms){terms[idx]=term.introduceParams(formals);});return this;};pexprs.Seq.prototype.introduceParams=function(formals){this.factors.forEach(function(factor,idx,factors){factors[idx]=factor.introduceParams(formals);});return this;};pexprs.Iter.prototype.introduceParams=pexprs.Not.prototype.introduceParams=pexprs.Lookahead.prototype.introduceParams=pexprs.Lex.prototype.introduceParams=function(formals){this.expr=this.expr.introduceParams(formals);return this;};pexprs.Apply.prototype.introduceParams=function(formals){var index=formals.indexOf(this.ruleName);if(index>=0){if(this.args.length>0){// TODO: Should this be supported? See issue #64.
	throw new Error('Parameterized rules cannot be passed as arguments to another rule.');}return new pexprs.Param(index);}else{this.args.forEach(function(arg,idx,args){args[idx]=arg.introduceParams(formals);});return this;}};},{"./common":39,"./pexprs":59}],51:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	// Returns `true` if this parsing expression may accept without consuming any input.
	pexprs.PExpr.prototype.isNullable=function(grammar){return this._isNullable(grammar,Object.create(null));};pexprs.PExpr.prototype._isNullable=common.abstract('_isNullable');pexprs.any._isNullable=pexprs.Range.prototype._isNullable=pexprs.Param.prototype._isNullable=pexprs.Plus.prototype._isNullable=pexprs.UnicodeChar.prototype._isNullable=function(grammar,memo){return false;};pexprs.end._isNullable=function(grammar,memo){return true;};pexprs.Terminal.prototype._isNullable=function(grammar,memo){if(typeof this.obj==='string'){// This is an over-simplification: it's only correct if the input is a string. If it's an array
	// or an object, then the empty string parsing expression is not nullable.
	return this.obj==='';}else{return false;}};pexprs.Alt.prototype._isNullable=function(grammar,memo){return this.terms.length===0||this.terms.some(function(term){return term._isNullable(grammar,memo);});};pexprs.Seq.prototype._isNullable=function(grammar,memo){return this.factors.every(function(factor){return factor._isNullable(grammar,memo);});};pexprs.Star.prototype._isNullable=pexprs.Opt.prototype._isNullable=pexprs.Not.prototype._isNullable=pexprs.Lookahead.prototype._isNullable=function(grammar,memo){return true;};pexprs.Lex.prototype._isNullable=function(grammar,memo){return this.expr._isNullable(grammar,memo);};pexprs.Apply.prototype._isNullable=function(grammar,memo){var key=this.toMemoKey();if(!Object.prototype.hasOwnProperty.call(memo,key)){var body=grammar.rules[this.ruleName].body;var inlined=body.substituteParams(this.args);memo[key]=false;// Prevent infinite recursion for recursive rules.
	memo[key]=inlined._isNullable(grammar,memo);}return memo[key];};},{"./common":39,"./pexprs":59}],52:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	pexprs.PExpr.prototype.generateExample=common.abstract;pexprs.any.generateExample=function(grammar,examples,inSyntacticContext,actuals){return{example:String.fromCharCode(Math.floor(Math.random()*255))};};function categorizeExamples(examples){var examplesNeeded=examples.filter(function(example){return example.hasOwnProperty('examplesNeeded');}).map(function(example){return example.examplesNeeded;});examplesNeeded=[].concat.apply([],examplesNeeded).filter(function(value,index,arr){return arr.indexOf(value)===index;});var successfulExamples=examples.filter(function(example){return example.hasOwnProperty('example');}).map(function(item){return item.example;});// could check examples here, here's an example that's invalid
	var needHelp=examples.some(function(item){return item.needHelp;});return{examplesNeeded:examplesNeeded,successfulExamples:successfulExamples,needHelp:needHelp};}pexprs.Alt.prototype.generateExample=function(grammar,examples,inSyntacticContext,actuals){// items -> termExamples
	var termExamples=this.terms.map(function(term){return term.generateExample(grammar,examples,inSyntacticContext,actuals);});var categorizedExamples=categorizeExamples(termExamples);var examplesNeeded=categorizedExamples.examplesNeeded;var successfulExamples=categorizedExamples.successfulExamples;var needHelp=categorizedExamples.needHelp;var returnObj={};// Alt can contain both an example and a request for examples
	if(successfulExamples.length>0){var i=Math.floor(Math.random()*successfulExamples.length);returnObj.example=successfulExamples[i];}if(examplesNeeded.length>0){returnObj.examplesNeeded=examplesNeeded;}returnObj.needHelp=needHelp;return returnObj;};// safe thing to do might just be to omit whitespace period?
	// for lexical rules, should we request their components?
	pexprs.Seq.prototype.generateExample=function(grammar,examples,inSyntacticContext,actuals){var factorExamples=this.factors.map(function(factor){return factor.generateExample(grammar,examples,inSyntacticContext,actuals);});var categorizedExamples=categorizeExamples(factorExamples);var examplesNeeded=categorizedExamples.examplesNeeded;var successfulExamples=categorizedExamples.successfulExamples;var needHelp=categorizedExamples.needHelp;var returnObj={};// in a Seq, all pieces must succeed in order to have a successful example
	if(examplesNeeded.length>0||needHelp){returnObj.examplesNeeded=examplesNeeded;returnObj.needHelp=needHelp;}else{returnObj.example=successfulExamples.join(inSyntacticContext?' ':'');}return returnObj;};pexprs.Apply.prototype.generateExample=function(grammar,examples,inSyntacticContext,actuals){var returnObj={};var ruleName=this.substituteParams(actuals).toString();if(!examples.hasOwnProperty(ruleName)){returnObj.examplesNeeded=[ruleName];}else{var relevantExamples=examples[ruleName];var i=Math.floor(Math.random()*relevantExamples.length);returnObj.example=relevantExamples[i];}return returnObj;};// assumes that terminal's object is always a string
	pexprs.Terminal.prototype.generateExample=function(grammar,examples,inSyntacticContext){return{example:this.obj};};pexprs.Range.prototype.generateExample=function(grammar,examples,inSyntacticContext){var rangeSize=this.to.charCodeAt(0)-this.from.charCodeAt(0);return{example:String.fromCharCode(this.from.charCodeAt(0)+Math.floor(rangeSize*Math.random()))};};// these all fail for now
	pexprs.Not.prototype.generateExample=function(grammar,examples,inSyntacticContext){return{example:''};};pexprs.Lookahead.prototype.generateExample=function(grammar,examples,inSyntacticContext){return{example:''};};pexprs.Param.prototype.generateExample=function(grammar,examples,inSyntacticContext,actuals){return actuals[this.index].generateExample(grammar,examples,inSyntacticContext,actuals);};function repeat(n,fn){if(n<0){return;}while(n>0){fn(n);n--;}}var generateNExamples=function generateNExamples(that,grammar,examples,inSyntacticContext,actuals,numTimes){var items=[];repeat(numTimes,function(){items.push(that.expr.generateExample(grammar,examples,inSyntacticContext,actuals));});var categorizedExamples=categorizeExamples(items);var examplesNeeded=categorizedExamples.examplesNeeded;var successfulExamples=categorizedExamples.successfulExamples;var returnObj={};// it's always either one or the other
	if(successfulExamples.length>0){returnObj.example=successfulExamples.join(inSyntacticContext?' ':'');}if(examplesNeeded.length>0){returnObj.examplesNeeded=examplesNeeded;}return returnObj;};pexprs.Star.prototype.generateExample=function(grammar,examples,inSyntacticContext,actuals){return generateNExamples(this,grammar,examples,inSyntacticContext,actuals,Math.floor(Math.random()*4));};pexprs.Plus.prototype.generateExample=function(grammar,examples,inSyntacticContext,actuals){return generateNExamples(this,grammar,examples,inSyntacticContext,actuals,Math.floor(Math.random()*3+1));};pexprs.Opt.prototype.generateExample=function(grammar,examples,inSyntacticContext,actuals){return generateNExamples(this,grammar,examples,inSyntacticContext,actuals,Math.floor(Math.random()*2));};pexprs.UnicodeChar.prototype.generateExample=function(grammar,examples,inSyntacticContext,actuals){var char;switch(this.category){case'Lu':char='Á';break;case'Ll':char='ŏ';break;case'Lt':char='ǅ';break;case'Lm':char='ˮ';break;case'Lo':char='ƻ';break;case'Nl':char='ↂ';break;case'Nd':char='½';break;case'Mn':char="҇";break;case'Mc':char='ि';break;case'Pc':char='⁀';break;case'Zs':char=" ";break;case'L':char='Á';break;case'Ltmo':char='ǅ';break;}return{example:char};// 💩
	};},{"./common":39,"./pexprs":59}],53:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function getMetaInfo(expr,grammarInterval){var metaInfo={};if(expr.source&&grammarInterval){var adjusted=expr.source.relativeTo(grammarInterval);metaInfo.sourceInterval=[adjusted.startIdx,adjusted.endIdx];}return metaInfo;}// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	pexprs.PExpr.prototype.outputRecipe=common.abstract('outputRecipe');pexprs.any.outputRecipe=function(formals,grammarInterval){return['any',getMetaInfo(this,grammarInterval)];};pexprs.end.outputRecipe=function(formals,grammarInterval){return['end',getMetaInfo(this,grammarInterval)];};pexprs.Terminal.prototype.outputRecipe=function(formals,grammarInterval){return['terminal',getMetaInfo(this,grammarInterval),this.obj];};pexprs.Range.prototype.outputRecipe=function(formals,grammarInterval){return['range',getMetaInfo(this,grammarInterval),this.from,this.to];};pexprs.Param.prototype.outputRecipe=function(formals,grammarInterval){return['param',getMetaInfo(this,grammarInterval),this.index];};pexprs.Alt.prototype.outputRecipe=function(formals,grammarInterval){return['alt',getMetaInfo(this,grammarInterval)].concat(this.terms.map(function(term){return term.outputRecipe(formals,grammarInterval);}));};pexprs.Extend.prototype.outputRecipe=function(formals,grammarInterval){var extension=this.terms[0];// [extension, orginal]
	return extension.outputRecipe(formals,grammarInterval);};pexprs.Seq.prototype.outputRecipe=function(formals,grammarInterval){return['seq',getMetaInfo(this,grammarInterval)].concat(this.factors.map(function(factor){return factor.outputRecipe(formals,grammarInterval);}));};pexprs.Star.prototype.outputRecipe=pexprs.Plus.prototype.outputRecipe=pexprs.Opt.prototype.outputRecipe=pexprs.Not.prototype.outputRecipe=pexprs.Lookahead.prototype.outputRecipe=pexprs.Lex.prototype.outputRecipe=function(formals,grammarInterval){return[this.constructor.name.toLowerCase(),getMetaInfo(this,grammarInterval),this.expr.outputRecipe(formals,grammarInterval)];};pexprs.Apply.prototype.outputRecipe=function(formals,grammarInterval){return['app',getMetaInfo(this,grammarInterval),this.ruleName,this.args.map(function(arg){return arg.outputRecipe(formals,grammarInterval);})];};pexprs.UnicodeChar.prototype.outputRecipe=function(formals,grammarInterval){return['unicodeChar',getMetaInfo(this,grammarInterval),this.category];};},{"./common":39,"./pexprs":59}],54:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	/*
	  Returns a PExpr that results from recursively replacing every formal parameter (i.e., instance
	  of `Param`) inside this PExpr with its actual value from `actuals` (an Array).
	
	  The receiver must not be modified; a new PExpr must be returned if any replacement is necessary.
	*/// function(actuals) { ... }
	pexprs.PExpr.prototype.substituteParams=common.abstract('substituteParams');pexprs.any.substituteParams=pexprs.end.substituteParams=pexprs.Terminal.prototype.substituteParams=pexprs.Range.prototype.substituteParams=pexprs.Terminal.prototype.substituteParams=pexprs.UnicodeChar.prototype.substituteParams=function(actuals){return this;};pexprs.Param.prototype.substituteParams=function(actuals){return actuals[this.index];};pexprs.Alt.prototype.substituteParams=function(actuals){return new pexprs.Alt(this.terms.map(function(term){return term.substituteParams(actuals);}));};pexprs.Seq.prototype.substituteParams=function(actuals){return new pexprs.Seq(this.factors.map(function(factor){return factor.substituteParams(actuals);}));};pexprs.Iter.prototype.substituteParams=pexprs.Not.prototype.substituteParams=pexprs.Lookahead.prototype.substituteParams=pexprs.Lex.prototype.substituteParams=function(actuals){return new this.constructor(this.expr.substituteParams(actuals));};pexprs.Apply.prototype.substituteParams=function(actuals){if(this.args.length===0){// Avoid making a copy of this application, as an optimization
	return this;}else{var args=this.args.map(function(arg){return arg.substituteParams(actuals);});return new pexprs.Apply(this.ruleName,args);}};},{"./common":39,"./pexprs":59}],55:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');var copyWithoutDuplicates=common.copyWithoutDuplicates;// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	function isRestrictedJSIdentifier(str){return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(str);}function resolveDuplicatedNames(argumentNameList){// `count` is used to record the number of times each argument name occurs in the list,
	// this is useful for checking duplicated argument name. It maps argument names to ints.
	var count=Object.create(null);argumentNameList.forEach(function(argName){count[argName]=(count[argName]||0)+1;});// Append subscripts ('_1', '_2', ...) to duplicate argument names.
	Object.keys(count).forEach(function(dupArgName){if(count[dupArgName]<=1){return;}// This name shows up more than once, so add subscripts.
	var subscript=1;argumentNameList.forEach(function(argName,idx){if(argName===dupArgName){argumentNameList[idx]=argName+'_'+subscript++;}});});}// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	/*
	  Returns a list of strings that will be used as the default argument names for its receiver
	  (a pexpr) in a semantic action. This is used exclusively by the Semantics Editor.
	
	  `firstArgIndex` is the 1-based index of the first argument name that will be generated for this
	  pexpr. It enables us to name arguments positionally, e.g., if the second argument is a
	  non-alphanumeric terminal like "+", it will be named '$2'.
	
	  `noDupCheck` is true if the caller of `toArgumentNameList` is not a top level caller. It enables
	  us to avoid nested duplication subscripts appending, e.g., '_1_1', '_1_2', by only checking
	  duplicates at the top level.
	
	  Here is a more elaborate example that illustrates how this method works:
	  `(a "+" b).toArgumentNameList(1)` evaluates to `['a', '$2', 'b']` with the following recursive
	  calls:
	
	    (a).toArgumentNameList(1) -> ['a'],
	    ("+").toArgumentNameList(2) -> ['$2'],
	    (b).toArgumentNameList(3) -> ['b']
	
	  Notes:
	  * This method must only be called on well-formed expressions, e.g., the receiver must
	    not have any Alt sub-expressions with inconsistent arities.
	  * e.getArity() === e.toArgumentNameList(1).length
	*/// function(firstArgIndex, noDupCheck) { ... }
	pexprs.PExpr.prototype.toArgumentNameList=common.abstract('toArgumentNameList');pexprs.any.toArgumentNameList=function(firstArgIndex,noDupCheck){return['any'];};pexprs.end.toArgumentNameList=function(firstArgIndex,noDupCheck){return['end'];};pexprs.Terminal.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){if(typeof this.obj==='string'&&/^[_a-zA-Z0-9]+$/.test(this.obj)){// If this terminal is a valid suffix for a JS identifier, just prepend it with '_'
	return['_'+this.obj];}else{// Otherwise, name it positionally.
	return['$'+firstArgIndex];}};pexprs.Range.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){var argName=this.from+'_to_'+this.to;// If the `argName` is not valid then try to prepend a `_`.
	if(!isRestrictedJSIdentifier(argName)){argName='_'+argName;}// If the `argName` still not valid after prepending a `_`, then name it positionally.
	if(!isRestrictedJSIdentifier(argName)){argName='$'+firstArgIndex;}return[argName];};pexprs.Alt.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){// `termArgNameLists` is an array of arrays where each row is the
	// argument name list that corresponds to a term in this alternation.
	var termArgNameLists=this.terms.map(function(term){return term.toArgumentNameList(firstArgIndex,true);});var argumentNameList=[];var numArgs=termArgNameLists[0].length;for(var colIdx=0;colIdx<numArgs;colIdx++){var col=[];for(var rowIdx=0;rowIdx<this.terms.length;rowIdx++){col.push(termArgNameLists[rowIdx][colIdx]);}var uniqueNames=copyWithoutDuplicates(col);argumentNameList.push(uniqueNames.join('_or_'));}if(!noDupCheck){resolveDuplicatedNames(argumentNameList);}return argumentNameList;};pexprs.Seq.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){// Generate the argument name list, without worrying about duplicates.
	var argumentNameList=[];this.factors.forEach(function(factor){var factorArgumentNameList=factor.toArgumentNameList(firstArgIndex,true);argumentNameList=argumentNameList.concat(factorArgumentNameList);// Shift the firstArgIndex to take this factor's argument names into account.
	firstArgIndex+=factorArgumentNameList.length;});if(!noDupCheck){resolveDuplicatedNames(argumentNameList);}return argumentNameList;};pexprs.Iter.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){var argumentNameList=this.expr.toArgumentNameList(firstArgIndex,noDupCheck).map(function(exprArgumentString){return exprArgumentString[exprArgumentString.length-1]==='s'?exprArgumentString+'es':exprArgumentString+'s';});if(!noDupCheck){resolveDuplicatedNames(argumentNameList);}return argumentNameList;};pexprs.Opt.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){return this.expr.toArgumentNameList(firstArgIndex,noDupCheck).map(function(argName){return'opt'+argName[0].toUpperCase()+argName.slice(1);});};pexprs.Not.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){return[];};pexprs.Lookahead.prototype.toArgumentNameList=pexprs.Lex.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){return this.expr.toArgumentNameList(firstArgIndex,noDupCheck);};pexprs.Apply.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){return[this.ruleName];};pexprs.UnicodeChar.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){return['$'+firstArgIndex];};pexprs.Param.prototype.toArgumentNameList=function(firstArgIndex,noDupCheck){return['param'+this.index];};// "Value pexprs" (Value, Str, Arr, Obj) are going away soon, so we don't worry about them here.
	},{"./common":39,"./pexprs":59}],56:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	// Returns a string representing the PExpr, for use as a UI label, etc.
	pexprs.PExpr.prototype.toDisplayString=common.abstract('toDisplayString');pexprs.Alt.prototype.toDisplayString=pexprs.Seq.prototype.toDisplayString=pexprs.Iter.prototype.toDisplayString=pexprs.Not.prototype.toDisplayString=pexprs.Lookahead.prototype.toDisplayString=pexprs.Lex.prototype.toDisplayString=function(){if(this.source){return this.source.trimmed().contents;}return'['+this.constructor.name+']';};pexprs.any.toDisplayString=function(){return'any';};pexprs.end.toDisplayString=function(){return'end';};pexprs.Terminal.prototype.toDisplayString=function(){return JSON.stringify(this.obj);};pexprs.Range.prototype.toDisplayString=function(){return JSON.stringify(this.from)+'..'+JSON.stringify(this.to);};pexprs.Param.prototype.toDisplayString=function(){return'#'+this.index;};pexprs.Apply.prototype.toDisplayString=function(){return this.toString();};pexprs.UnicodeChar.prototype.toDisplayString=function(){return'Unicode {'+this.category+'} character';};},{"./common":39,"./pexprs":59}],57:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var Failure=require('./Failure');var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	pexprs.PExpr.prototype.toFailure=common.abstract('toFailure');pexprs.any.toFailure=function(grammar){return new Failure(this,'any object','description');};pexprs.end.toFailure=function(grammar){return new Failure(this,'end of input','description');};pexprs.Terminal.prototype.toFailure=function(grammar){return new Failure(this,this.obj,'string');};pexprs.Range.prototype.toFailure=function(grammar){// TODO: come up with something better
	return new Failure(this,JSON.stringify(this.from)+'..'+JSON.stringify(this.to),'code');};pexprs.Not.prototype.toFailure=function(grammar){var description=this.expr===pexprs.any?'nothing':'not '+this.expr.toFailure(grammar);return new Failure(this,description,'description');};pexprs.Lookahead.prototype.toFailure=function(grammar){return this.expr.toFailure(grammar);};pexprs.Apply.prototype.toFailure=function(grammar){var description=grammar.rules[this.ruleName].description;if(!description){var article=/^[aeiouAEIOU]/.test(this.ruleName)?'an':'a';description=article+' '+this.ruleName;}return new Failure(this,description,'description');};pexprs.UnicodeChar.prototype.toFailure=function(grammar){return new Failure(this,this.toDisplayString(),'description');};pexprs.Alt.prototype.toFailure=function(grammar){var fs=this.terms.map(function(t){return t.toFailure();});var description='('+fs.join(' or ')+')';return new Failure(this,description,'description');};pexprs.Seq.prototype.toFailure=function(grammar){var fs=this.factors.map(function(f){return f.toFailure();});var description='('+fs.join(' ')+')';return new Failure(this,description,'description');};pexprs.Iter.prototype.toFailure=function(grammar){var description='('+this.expr.toFailure()+this.operator+')';return new Failure(this,description,'description');};},{"./Failure":28,"./common":39,"./pexprs":59}],58:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');var pexprs=require('./pexprs');// --------------------------------------------------------------------
	// Operations
	// --------------------------------------------------------------------
	/*
	  e1.toString() === e2.toString() ==> e1 and e2 are semantically equivalent.
	  Note that this is not an iff (<==>): e.g.,
	  (~"b" "a").toString() !== ("a").toString(), even though
	  ~"b" "a" and "a" are interchangeable in any grammar,
	  both in terms of the languages they accept and their arities.
	*/pexprs.PExpr.prototype.toString=common.abstract('toString');pexprs.any.toString=function(){return'any';};pexprs.end.toString=function(){return'end';};pexprs.Terminal.prototype.toString=function(){return JSON.stringify(this.obj);};pexprs.Range.prototype.toString=function(){return JSON.stringify(this.from)+'..'+JSON.stringify(this.to);};pexprs.Param.prototype.toString=function(){return'$'+this.index;};pexprs.Lex.prototype.toString=function(){return'#('+this.expr.toString()+')';};pexprs.Alt.prototype.toString=function(){return this.terms.length===1?this.terms[0].toString():'('+this.terms.map(function(term){return term.toString();}).join(' | ')+')';};pexprs.Seq.prototype.toString=function(){return this.factors.length===1?this.factors[0].toString():'('+this.factors.map(function(factor){return factor.toString();}).join(' ')+')';};pexprs.Iter.prototype.toString=function(){return this.expr+this.operator;};pexprs.Not.prototype.toString=function(){return'~'+this.expr;};pexprs.Lookahead.prototype.toString=function(){return'&'+this.expr;};pexprs.Apply.prototype.toString=function(){if(this.args.length>0){var ps=this.args.map(function(arg){return arg.toString();});return this.ruleName+'<'+ps.join(',')+'>';}else{return this.ruleName;}};pexprs.UnicodeChar.prototype.toString=function(){return'\\p{'+this.category+'}';};},{"./common":39,"./pexprs":59}],59:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var UnicodeCategories=require('../third_party/UnicodeCategories');var common=require('./common');var errors=require('./errors');var inherits=require('inherits');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	// General stuff
	function PExpr(){throw new Error("PExpr cannot be instantiated -- it's abstract");}// Set the `source` property to the interval containing the source for this expression.
	PExpr.prototype.withSource=function(interval){if(interval){this.source=interval.trimmed();}return this;};// Any
	var any=Object.create(PExpr.prototype);// End
	var end=Object.create(PExpr.prototype);// Terminals
	function Terminal(obj){this.obj=obj;}inherits(Terminal,PExpr);// Ranges
	function Range(from,to){this.from=from;this.to=to;}inherits(Range,PExpr);// Parameters
	function Param(index){this.index=index;}inherits(Param,PExpr);// Alternation
	function Alt(terms){this.terms=terms;}inherits(Alt,PExpr);// Extend is an implementation detail of rule extension
	function Extend(superGrammar,name,body){this.superGrammar=superGrammar;this.name=name;this.body=body;var origBody=superGrammar.rules[name].body;this.terms=[body,origBody];}inherits(Extend,Alt);// Sequences
	function Seq(factors){this.factors=factors;}inherits(Seq,PExpr);// Iterators and optionals
	function Iter(expr){this.expr=expr;}inherits(Iter,PExpr);function Star(expr){this.expr=expr;}inherits(Star,Iter);function Plus(expr){this.expr=expr;}inherits(Plus,Iter);function Opt(expr){this.expr=expr;}inherits(Opt,Iter);Star.prototype.operator='*';Plus.prototype.operator='+';Opt.prototype.operator='?';Star.prototype.minNumMatches=0;Plus.prototype.minNumMatches=1;Opt.prototype.minNumMatches=0;Star.prototype.maxNumMatches=Number.POSITIVE_INFINITY;Plus.prototype.maxNumMatches=Number.POSITIVE_INFINITY;Opt.prototype.maxNumMatches=1;// Predicates
	function Not(expr){this.expr=expr;}inherits(Not,PExpr);function Lookahead(expr){this.expr=expr;}inherits(Lookahead,PExpr);// "Lexification"
	function Lex(expr){this.expr=expr;}inherits(Lex,PExpr);// Array decomposition
	function Arr(expr){this.expr=expr;}inherits(Arr,PExpr);// String decomposition
	function Str(expr){this.expr=expr;}inherits(Str,PExpr);// Object decomposition
	function Obj(properties,isLenient){var names=properties.map(function(property){return property.name;});var duplicates=common.getDuplicates(names);if(duplicates.length>0){throw errors.duplicatePropertyNames(duplicates);}else{this.properties=properties;this.isLenient=isLenient;}}inherits(Obj,PExpr);// Rule application
	function Apply(ruleName,optArgs){this.ruleName=ruleName;this.args=optArgs||[];}inherits(Apply,PExpr);Apply.prototype.isSyntactic=function(){return common.isSyntactic(this.ruleName);};// This method just caches the result of `this.toString()` in a non-enumerable property.
	Apply.prototype.toMemoKey=function(){if(!this._memoKey){Object.defineProperty(this,'_memoKey',{value:this.toString()});}return this._memoKey;};// Unicode character
	function UnicodeChar(category){this.category=category;this.pattern=UnicodeCategories[category];}inherits(UnicodeChar,PExpr);// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	exports.PExpr=PExpr;exports.any=any;exports.end=end;exports.Terminal=Terminal;exports.Range=Range;exports.Param=Param;exports.Alt=Alt;exports.Extend=Extend;exports.Seq=Seq;exports.Iter=Iter;exports.Star=Star;exports.Plus=Plus;exports.Opt=Opt;exports.Not=Not;exports.Lookahead=Lookahead;exports.Lex=Lex;exports.Arr=Arr;exports.Str=Str;exports.Obj=Obj;exports.Apply=Apply;exports.UnicodeChar=UnicodeChar;// --------------------------------------------------------------------
	// Extensions
	// --------------------------------------------------------------------
	require('./pexprs-allowsSkippingPrecedingSpace');require('./pexprs-assertAllApplicationsAreValid');require('./pexprs-assertChoicesHaveUniformArity');require('./pexprs-assertIteratedExprsAreNotNullable');require('./pexprs-check');require('./pexprs-eval');require('./pexprs-getArity');require('./pexprs-outputRecipe');require('./pexprs-introduceParams');require('./pexprs-isNullable');require('./pexprs-substituteParams');require('./pexprs-toDisplayString');require('./pexprs-toArgumentNameList');require('./pexprs-toFailure');require('./pexprs-toString');require('./pexprs-madlibs');},{"../third_party/UnicodeCategories":61,"./common":39,"./errors":40,"./pexprs-allowsSkippingPrecedingSpace":43,"./pexprs-assertAllApplicationsAreValid":44,"./pexprs-assertChoicesHaveUniformArity":45,"./pexprs-assertIteratedExprsAreNotNullable":46,"./pexprs-check":47,"./pexprs-eval":48,"./pexprs-getArity":49,"./pexprs-introduceParams":50,"./pexprs-isNullable":51,"./pexprs-madlibs":52,"./pexprs-outputRecipe":53,"./pexprs-substituteParams":54,"./pexprs-toArgumentNameList":55,"./pexprs-toDisplayString":56,"./pexprs-toFailure":57,"./pexprs-toString":58,"inherits":24}],60:[function(require,module,exports){'use strict';// --------------------------------------------------------------------
	// Imports
	// --------------------------------------------------------------------
	var common=require('./common');// --------------------------------------------------------------------
	// Private stuff
	// --------------------------------------------------------------------
	// Given an array of numbers `arr`, return an array of the numbers as strings,
	// right-justified and padded to the same length.
	function padNumbersToEqualLength(arr){var maxLen=0;var strings=arr.map(function(n){var str=n.toString();maxLen=Math.max(maxLen,str.length);return str;});return strings.map(function(s){return common.padLeft(s,maxLen);});}// Produce a new string that would be the result of copying the contents
	// of the string `src` onto `dest` at offset `offest`.
	function strcpy(dest,src,offset){var origDestLen=dest.length;var start=dest.slice(0,offset);var end=dest.slice(offset+src.length);return(start+src+end).substr(0,origDestLen);}// --------------------------------------------------------------------
	// Exports
	// --------------------------------------------------------------------
	// Return an object with the line and column information for the given
	// offset in `str`.
	exports.getLineAndColumn=function(str,offset){var lineNum=1;var colNum=1;var currOffset=0;var lineStartOffset=0;var nextLine=null;var prevLine=null;var prevLineStartOffset=-1;while(currOffset<offset){var c=str.charAt(currOffset++);if(c==='\n'){lineNum++;colNum=1;prevLineStartOffset=lineStartOffset;lineStartOffset=currOffset;}else if(c!=='\r'){colNum++;}}// Find the end of the target line.
	var lineEndOffset=str.indexOf('\n',lineStartOffset);if(lineEndOffset===-1){lineEndOffset=str.length;}else{// Get the next line.
	var nextLineEndOffset=str.indexOf('\n',lineEndOffset+1);nextLine=nextLineEndOffset===-1?str.slice(lineEndOffset):str.slice(lineEndOffset,nextLineEndOffset);// Strip leading and trailing EOL char(s).
	nextLine=nextLine.replace(/^\r?\n/,'').replace(/\r$/,'');}// Get the previous line.
	if(prevLineStartOffset>=0){prevLine=str.slice(prevLineStartOffset,lineStartOffset).replace(/\r?\n$/,'');// Strip trailing EOL char(s).
	}// Get the target line, stripping a trailing carriage return if necessary.
	var line=str.slice(lineStartOffset,lineEndOffset).replace(/\r$/,'');return{lineNum:lineNum,colNum:colNum,line:line,prevLine:prevLine,nextLine:nextLine};};// Return a nicely-formatted string describing the line and column for the
	// given offset in `str`.
	exports.getLineAndColumnMessage=function(str,offset/* ...ranges */){var repeatStr=common.repeatStr;var lineAndCol=exports.getLineAndColumn(str,offset);var sb=new common.StringBuffer();sb.append('Line '+lineAndCol.lineNum+', col '+lineAndCol.colNum+':\n');// An array of the previous, current, and next line numbers as strings of equal length.
	var lineNumbers=padNumbersToEqualLength([lineAndCol.prevLine==null?0:lineAndCol.lineNum-1,lineAndCol.lineNum,lineAndCol.nextLine==null?0:lineAndCol.lineNum+1]);// Helper for appending formatting input lines to the buffer.
	function appendLine(num,content,prefix){sb.append(prefix+lineNumbers[num]+' | '+content+'\n');}// Include the previous line for context if possible.
	if(lineAndCol.prevLine!=null){appendLine(0,lineAndCol.prevLine,'  ');}// Line that the error occurred on.
	appendLine(1,lineAndCol.line,'> ');// Build up the line that points to the offset and possible indicates one or more ranges.
	// Start with a blank line, and indicate each range by overlaying a string of `~` chars.
	var lineLen=lineAndCol.line.length;var indicationLine=repeatStr(' ',lineLen+1);var ranges=Array.prototype.slice.call(arguments,2);for(var i=0;i<ranges.length;++i){var startIdx=ranges[i][0];var endIdx=ranges[i][1];common.assert(startIdx>=0&&startIdx<=endIdx,'range start must be >= 0 and <= end');var lineStartOffset=offset-lineAndCol.colNum+1;startIdx=Math.max(0,startIdx-lineStartOffset);endIdx=Math.min(endIdx-lineStartOffset,lineLen);indicationLine=strcpy(indicationLine,repeatStr('~',endIdx-startIdx),startIdx);}var gutterWidth=2+lineNumbers[1].length+3;sb.append(repeatStr(' ',gutterWidth));indicationLine=strcpy(indicationLine,'^',lineAndCol.colNum-1);sb.append(indicationLine.replace(/ +$/,'')+'\n');// Include the next line for context if possible.
	if(lineAndCol.nextLine!=null){appendLine(2,lineAndCol.nextLine,'  ');}return sb.contents();};},{"./common":39}],61:[function(require,module,exports){// Based on https://github.com/tvcutsem/es-lab/blob/master/src/parser/unicode.js.
	// These are just categories that are used in ES5.
	// The full list of Unicode categories is here: http://www.fileformat.info/info/unicode/category/index.htm.
	module.exports={// Letters
	Lu:/[\u0041-\u005A]|[\u00C0-\u00D6]|[\u00D8-\u00DE]|[\u0100-\u0100]|[\u0102-\u0102]|[\u0104-\u0104]|[\u0106-\u0106]|[\u0108-\u0108]|[\u010A-\u010A]|[\u010C-\u010C]|[\u010E-\u010E]|[\u0110-\u0110]|[\u0112-\u0112]|[\u0114-\u0114]|[\u0116-\u0116]|[\u0118-\u0118]|[\u011A-\u011A]|[\u011C-\u011C]|[\u011E-\u011E]|[\u0120-\u0120]|[\u0122-\u0122]|[\u0124-\u0124]|[\u0126-\u0126]|[\u0128-\u0128]|[\u012A-\u012A]|[\u012C-\u012C]|[\u012E-\u012E]|[\u0130-\u0130]|[\u0132-\u0132]|[\u0134-\u0134]|[\u0136-\u0136]|[\u0139-\u0139]|[\u013B-\u013B]|[\u013D-\u013D]|[\u013F-\u013F]|[\u0141-\u0141]|[\u0143-\u0143]|[\u0145-\u0145]|[\u0147-\u0147]|[\u014A-\u014A]|[\u014C-\u014C]|[\u014E-\u014E]|[\u0150-\u0150]|[\u0152-\u0152]|[\u0154-\u0154]|[\u0156-\u0156]|[\u0158-\u0158]|[\u015A-\u015A]|[\u015C-\u015C]|[\u015E-\u015E]|[\u0160-\u0160]|[\u0162-\u0162]|[\u0164-\u0164]|[\u0166-\u0166]|[\u0168-\u0168]|[\u016A-\u016A]|[\u016C-\u016C]|[\u016E-\u016E]|[\u0170-\u0170]|[\u0172-\u0172]|[\u0174-\u0174]|[\u0176-\u0176]|[\u0178-\u0179]|[\u017B-\u017B]|[\u017D-\u017D]|[\u0181-\u0182]|[\u0184-\u0184]|[\u0186-\u0187]|[\u0189-\u018B]|[\u018E-\u0191]|[\u0193-\u0194]|[\u0196-\u0198]|[\u019C-\u019D]|[\u019F-\u01A0]|[\u01A2-\u01A2]|[\u01A4-\u01A4]|[\u01A6-\u01A7]|[\u01A9-\u01A9]|[\u01AC-\u01AC]|[\u01AE-\u01AF]|[\u01B1-\u01B3]|[\u01B5-\u01B5]|[\u01B7-\u01B8]|[\u01BC-\u01BC]|[\u01C4-\u01C4]|[\u01C7-\u01C7]|[\u01CA-\u01CA]|[\u01CD-\u01CD]|[\u01CF-\u01CF]|[\u01D1-\u01D1]|[\u01D3-\u01D3]|[\u01D5-\u01D5]|[\u01D7-\u01D7]|[\u01D9-\u01D9]|[\u01DB-\u01DB]|[\u01DE-\u01DE]|[\u01E0-\u01E0]|[\u01E2-\u01E2]|[\u01E4-\u01E4]|[\u01E6-\u01E6]|[\u01E8-\u01E8]|[\u01EA-\u01EA]|[\u01EC-\u01EC]|[\u01EE-\u01EE]|[\u01F1-\u01F1]|[\u01F4-\u01F4]|[\u01FA-\u01FA]|[\u01FC-\u01FC]|[\u01FE-\u01FE]|[\u0200-\u0200]|[\u0202-\u0202]|[\u0204-\u0204]|[\u0206-\u0206]|[\u0208-\u0208]|[\u020A-\u020A]|[\u020C-\u020C]|[\u020E-\u020E]|[\u0210-\u0210]|[\u0212-\u0212]|[\u0214-\u0214]|[\u0216-\u0216]|[\u0386-\u0386]|[\u0388-\u038A]|[\u038C-\u038C]|[\u038E-\u038F]|[\u0391-\u03A1]|[\u03A3-\u03AB]|[\u03D2-\u03D4]|[\u03DA-\u03DA]|[\u03DC-\u03DC]|[\u03DE-\u03DE]|[\u03E0-\u03E0]|[\u03E2-\u03E2]|[\u03E4-\u03E4]|[\u03E6-\u03E6]|[\u03E8-\u03E8]|[\u03EA-\u03EA]|[\u03EC-\u03EC]|[\u03EE-\u03EE]|[\u0401-\u040C]|[\u040E-\u042F]|[\u0460-\u0460]|[\u0462-\u0462]|[\u0464-\u0464]|[\u0466-\u0466]|[\u0468-\u0468]|[\u046A-\u046A]|[\u046C-\u046C]|[\u046E-\u046E]|[\u0470-\u0470]|[\u0472-\u0472]|[\u0474-\u0474]|[\u0476-\u0476]|[\u0478-\u0478]|[\u047A-\u047A]|[\u047C-\u047C]|[\u047E-\u047E]|[\u0480-\u0480]|[\u0490-\u0490]|[\u0492-\u0492]|[\u0494-\u0494]|[\u0496-\u0496]|[\u0498-\u0498]|[\u049A-\u049A]|[\u049C-\u049C]|[\u049E-\u049E]|[\u04A0-\u04A0]|[\u04A2-\u04A2]|[\u04A4-\u04A4]|[\u04A6-\u04A6]|[\u04A8-\u04A8]|[\u04AA-\u04AA]|[\u04AC-\u04AC]|[\u04AE-\u04AE]|[\u04B0-\u04B0]|[\u04B2-\u04B2]|[\u04B4-\u04B4]|[\u04B6-\u04B6]|[\u04B8-\u04B8]|[\u04BA-\u04BA]|[\u04BC-\u04BC]|[\u04BE-\u04BE]|[\u04C1-\u04C1]|[\u04C3-\u04C3]|[\u04C7-\u04C7]|[\u04CB-\u04CB]|[\u04D0-\u04D0]|[\u04D2-\u04D2]|[\u04D4-\u04D4]|[\u04D6-\u04D6]|[\u04D8-\u04D8]|[\u04DA-\u04DA]|[\u04DC-\u04DC]|[\u04DE-\u04DE]|[\u04E0-\u04E0]|[\u04E2-\u04E2]|[\u04E4-\u04E4]|[\u04E6-\u04E6]|[\u04E8-\u04E8]|[\u04EA-\u04EA]|[\u04EE-\u04EE]|[\u04F0-\u04F0]|[\u04F2-\u04F2]|[\u04F4-\u04F4]|[\u04F8-\u04F8]|[\u0531-\u0556]|[\u10A0-\u10C5]|[\u1E00-\u1E00]|[\u1E02-\u1E02]|[\u1E04-\u1E04]|[\u1E06-\u1E06]|[\u1E08-\u1E08]|[\u1E0A-\u1E0A]|[\u1E0C-\u1E0C]|[\u1E0E-\u1E0E]|[\u1E10-\u1E10]|[\u1E12-\u1E12]|[\u1E14-\u1E14]|[\u1E16-\u1E16]|[\u1E18-\u1E18]|[\u1E1A-\u1E1A]|[\u1E1C-\u1E1C]|[\u1E1E-\u1E1E]|[\u1E20-\u1E20]|[\u1E22-\u1E22]|[\u1E24-\u1E24]|[\u1E26-\u1E26]|[\u1E28-\u1E28]|[\u1E2A-\u1E2A]|[\u1E2C-\u1E2C]|[\u1E2E-\u1E2E]|[\u1E30-\u1E30]|[\u1E32-\u1E32]|[\u1E34-\u1E34]|[\u1E36-\u1E36]|[\u1E38-\u1E38]|[\u1E3A-\u1E3A]|[\u1E3C-\u1E3C]|[\u1E3E-\u1E3E]|[\u1E40-\u1E40]|[\u1E42-\u1E42]|[\u1E44-\u1E44]|[\u1E46-\u1E46]|[\u1E48-\u1E48]|[\u1E4A-\u1E4A]|[\u1E4C-\u1E4C]|[\u1E4E-\u1E4E]|[\u1E50-\u1E50]|[\u1E52-\u1E52]|[\u1E54-\u1E54]|[\u1E56-\u1E56]|[\u1E58-\u1E58]|[\u1E5A-\u1E5A]|[\u1E5C-\u1E5C]|[\u1E5E-\u1E5E]|[\u1E60-\u1E60]|[\u1E62-\u1E62]|[\u1E64-\u1E64]|[\u1E66-\u1E66]|[\u1E68-\u1E68]|[\u1E6A-\u1E6A]|[\u1E6C-\u1E6C]|[\u1E6E-\u1E6E]|[\u1E70-\u1E70]|[\u1E72-\u1E72]|[\u1E74-\u1E74]|[\u1E76-\u1E76]|[\u1E78-\u1E78]|[\u1E7A-\u1E7A]|[\u1E7C-\u1E7C]|[\u1E7E-\u1E7E]|[\u1E80-\u1E80]|[\u1E82-\u1E82]|[\u1E84-\u1E84]|[\u1E86-\u1E86]|[\u1E88-\u1E88]|[\u1E8A-\u1E8A]|[\u1E8C-\u1E8C]|[\u1E8E-\u1E8E]|[\u1E90-\u1E90]|[\u1E92-\u1E92]|[\u1E94-\u1E94]|[\u1EA0-\u1EA0]|[\u1EA2-\u1EA2]|[\u1EA4-\u1EA4]|[\u1EA6-\u1EA6]|[\u1EA8-\u1EA8]|[\u1EAA-\u1EAA]|[\u1EAC-\u1EAC]|[\u1EAE-\u1EAE]|[\u1EB0-\u1EB0]|[\u1EB2-\u1EB2]|[\u1EB4-\u1EB4]|[\u1EB6-\u1EB6]|[\u1EB8-\u1EB8]|[\u1EBA-\u1EBA]|[\u1EBC-\u1EBC]|[\u1EBE-\u1EBE]|[\u1EC0-\u1EC0]|[\u1EC2-\u1EC2]|[\u1EC4-\u1EC4]|[\u1EC6-\u1EC6]|[\u1EC8-\u1EC8]|[\u1ECA-\u1ECA]|[\u1ECC-\u1ECC]|[\u1ECE-\u1ECE]|[\u1ED0-\u1ED0]|[\u1ED2-\u1ED2]|[\u1ED4-\u1ED4]|[\u1ED6-\u1ED6]|[\u1ED8-\u1ED8]|[\u1EDA-\u1EDA]|[\u1EDC-\u1EDC]|[\u1EDE-\u1EDE]|[\u1EE0-\u1EE0]|[\u1EE2-\u1EE2]|[\u1EE4-\u1EE4]|[\u1EE6-\u1EE6]|[\u1EE8-\u1EE8]|[\u1EEA-\u1EEA]|[\u1EEC-\u1EEC]|[\u1EEE-\u1EEE]|[\u1EF0-\u1EF0]|[\u1EF2-\u1EF2]|[\u1EF4-\u1EF4]|[\u1EF6-\u1EF6]|[\u1EF8-\u1EF8]|[\u1F08-\u1F0F]|[\u1F18-\u1F1D]|[\u1F28-\u1F2F]|[\u1F38-\u1F3F]|[\u1F48-\u1F4D]|[\u1F59-\u1F59]|[\u1F5B-\u1F5B]|[\u1F5D-\u1F5D]|[\u1F5F-\u1F5F]|[\u1F68-\u1F6F]|[\u1F88-\u1F8F]|[\u1F98-\u1F9F]|[\u1FA8-\u1FAF]|[\u1FB8-\u1FBC]|[\u1FC8-\u1FCC]|[\u1FD8-\u1FDB]|[\u1FE8-\u1FEC]|[\u1FF8-\u1FFC]|[\u2102-\u2102]|[\u2107-\u2107]|[\u210B-\u210D]|[\u2110-\u2112]|[\u2115-\u2115]|[\u2119-\u211D]|[\u2124-\u2124]|[\u2126-\u2126]|[\u2128-\u2128]|[\u212A-\u212D]|[\u2130-\u2131]|[\u2133-\u2133]|[\uFF21-\uFF3A]/,Ll:/[\u0061-\u007A]|[\u00AA-\u00AA]|[\u00B5-\u00B5]|[\u00BA-\u00BA]|[\u00DF-\u00F6]|[\u00F8-\u00FF]|[\u0101-\u0101]|[\u0103-\u0103]|[\u0105-\u0105]|[\u0107-\u0107]|[\u0109-\u0109]|[\u010B-\u010B]|[\u010D-\u010D]|[\u010F-\u010F]|[\u0111-\u0111]|[\u0113-\u0113]|[\u0115-\u0115]|[\u0117-\u0117]|[\u0119-\u0119]|[\u011B-\u011B]|[\u011D-\u011D]|[\u011F-\u011F]|[\u0121-\u0121]|[\u0123-\u0123]|[\u0125-\u0125]|[\u0127-\u0127]|[\u0129-\u0129]|[\u012B-\u012B]|[\u012D-\u012D]|[\u012F-\u012F]|[\u0131-\u0131]|[\u0133-\u0133]|[\u0135-\u0135]|[\u0137-\u0138]|[\u013A-\u013A]|[\u013C-\u013C]|[\u013E-\u013E]|[\u0140-\u0140]|[\u0142-\u0142]|[\u0144-\u0144]|[\u0146-\u0146]|[\u0148-\u0149]|[\u014B-\u014B]|[\u014D-\u014D]|[\u014F-\u014F]|[\u0151-\u0151]|[\u0153-\u0153]|[\u0155-\u0155]|[\u0157-\u0157]|[\u0159-\u0159]|[\u015B-\u015B]|[\u015D-\u015D]|[\u015F-\u015F]|[\u0161-\u0161]|[\u0163-\u0163]|[\u0165-\u0165]|[\u0167-\u0167]|[\u0169-\u0169]|[\u016B-\u016B]|[\u016D-\u016D]|[\u016F-\u016F]|[\u0171-\u0171]|[\u0173-\u0173]|[\u0175-\u0175]|[\u0177-\u0177]|[\u017A-\u017A]|[\u017C-\u017C]|[\u017E-\u0180]|[\u0183-\u0183]|[\u0185-\u0185]|[\u0188-\u0188]|[\u018C-\u018D]|[\u0192-\u0192]|[\u0195-\u0195]|[\u0199-\u019B]|[\u019E-\u019E]|[\u01A1-\u01A1]|[\u01A3-\u01A3]|[\u01A5-\u01A5]|[\u01A8-\u01A8]|[\u01AB-\u01AB]|[\u01AD-\u01AD]|[\u01B0-\u01B0]|[\u01B4-\u01B4]|[\u01B6-\u01B6]|[\u01B9-\u01BA]|[\u01BD-\u01BD]|[\u01C6-\u01C6]|[\u01C9-\u01C9]|[\u01CC-\u01CC]|[\u01CE-\u01CE]|[\u01D0-\u01D0]|[\u01D2-\u01D2]|[\u01D4-\u01D4]|[\u01D6-\u01D6]|[\u01D8-\u01D8]|[\u01DA-\u01DA]|[\u01DC-\u01DD]|[\u01DF-\u01DF]|[\u01E1-\u01E1]|[\u01E3-\u01E3]|[\u01E5-\u01E5]|[\u01E7-\u01E7]|[\u01E9-\u01E9]|[\u01EB-\u01EB]|[\u01ED-\u01ED]|[\u01EF-\u01F0]|[\u01F3-\u01F3]|[\u01F5-\u01F5]|[\u01FB-\u01FB]|[\u01FD-\u01FD]|[\u01FF-\u01FF]|[\u0201-\u0201]|[\u0203-\u0203]|[\u0205-\u0205]|[\u0207-\u0207]|[\u0209-\u0209]|[\u020B-\u020B]|[\u020D-\u020D]|[\u020F-\u020F]|[\u0211-\u0211]|[\u0213-\u0213]|[\u0215-\u0215]|[\u0217-\u0217]|[\u0250-\u02A8]|[\u0390-\u0390]|[\u03AC-\u03CE]|[\u03D0-\u03D1]|[\u03D5-\u03D6]|[\u03E3-\u03E3]|[\u03E5-\u03E5]|[\u03E7-\u03E7]|[\u03E9-\u03E9]|[\u03EB-\u03EB]|[\u03ED-\u03ED]|[\u03EF-\u03F2]|[\u0430-\u044F]|[\u0451-\u045C]|[\u045E-\u045F]|[\u0461-\u0461]|[\u0463-\u0463]|[\u0465-\u0465]|[\u0467-\u0467]|[\u0469-\u0469]|[\u046B-\u046B]|[\u046D-\u046D]|[\u046F-\u046F]|[\u0471-\u0471]|[\u0473-\u0473]|[\u0475-\u0475]|[\u0477-\u0477]|[\u0479-\u0479]|[\u047B-\u047B]|[\u047D-\u047D]|[\u047F-\u047F]|[\u0481-\u0481]|[\u0491-\u0491]|[\u0493-\u0493]|[\u0495-\u0495]|[\u0497-\u0497]|[\u0499-\u0499]|[\u049B-\u049B]|[\u049D-\u049D]|[\u049F-\u049F]|[\u04A1-\u04A1]|[\u04A3-\u04A3]|[\u04A5-\u04A5]|[\u04A7-\u04A7]|[\u04A9-\u04A9]|[\u04AB-\u04AB]|[\u04AD-\u04AD]|[\u04AF-\u04AF]|[\u04B1-\u04B1]|[\u04B3-\u04B3]|[\u04B5-\u04B5]|[\u04B7-\u04B7]|[\u04B9-\u04B9]|[\u04BB-\u04BB]|[\u04BD-\u04BD]|[\u04BF-\u04BF]|[\u04C2-\u04C2]|[\u04C4-\u04C4]|[\u04C8-\u04C8]|[\u04CC-\u04CC]|[\u04D1-\u04D1]|[\u04D3-\u04D3]|[\u04D5-\u04D5]|[\u04D7-\u04D7]|[\u04D9-\u04D9]|[\u04DB-\u04DB]|[\u04DD-\u04DD]|[\u04DF-\u04DF]|[\u04E1-\u04E1]|[\u04E3-\u04E3]|[\u04E5-\u04E5]|[\u04E7-\u04E7]|[\u04E9-\u04E9]|[\u04EB-\u04EB]|[\u04EF-\u04EF]|[\u04F1-\u04F1]|[\u04F3-\u04F3]|[\u04F5-\u04F5]|[\u04F9-\u04F9]|[\u0561-\u0587]|[\u10D0-\u10F6]|[\u1E01-\u1E01]|[\u1E03-\u1E03]|[\u1E05-\u1E05]|[\u1E07-\u1E07]|[\u1E09-\u1E09]|[\u1E0B-\u1E0B]|[\u1E0D-\u1E0D]|[\u1E0F-\u1E0F]|[\u1E11-\u1E11]|[\u1E13-\u1E13]|[\u1E15-\u1E15]|[\u1E17-\u1E17]|[\u1E19-\u1E19]|[\u1E1B-\u1E1B]|[\u1E1D-\u1E1D]|[\u1E1F-\u1E1F]|[\u1E21-\u1E21]|[\u1E23-\u1E23]|[\u1E25-\u1E25]|[\u1E27-\u1E27]|[\u1E29-\u1E29]|[\u1E2B-\u1E2B]|[\u1E2D-\u1E2D]|[\u1E2F-\u1E2F]|[\u1E31-\u1E31]|[\u1E33-\u1E33]|[\u1E35-\u1E35]|[\u1E37-\u1E37]|[\u1E39-\u1E39]|[\u1E3B-\u1E3B]|[\u1E3D-\u1E3D]|[\u1E3F-\u1E3F]|[\u1E41-\u1E41]|[\u1E43-\u1E43]|[\u1E45-\u1E45]|[\u1E47-\u1E47]|[\u1E49-\u1E49]|[\u1E4B-\u1E4B]|[\u1E4D-\u1E4D]|[\u1E4F-\u1E4F]|[\u1E51-\u1E51]|[\u1E53-\u1E53]|[\u1E55-\u1E55]|[\u1E57-\u1E57]|[\u1E59-\u1E59]|[\u1E5B-\u1E5B]|[\u1E5D-\u1E5D]|[\u1E5F-\u1E5F]|[\u1E61-\u1E61]|[\u1E63-\u1E63]|[\u1E65-\u1E65]|[\u1E67-\u1E67]|[\u1E69-\u1E69]|[\u1E6B-\u1E6B]|[\u1E6D-\u1E6D]|[\u1E6F-\u1E6F]|[\u1E71-\u1E71]|[\u1E73-\u1E73]|[\u1E75-\u1E75]|[\u1E77-\u1E77]|[\u1E79-\u1E79]|[\u1E7B-\u1E7B]|[\u1E7D-\u1E7D]|[\u1E7F-\u1E7F]|[\u1E81-\u1E81]|[\u1E83-\u1E83]|[\u1E85-\u1E85]|[\u1E87-\u1E87]|[\u1E89-\u1E89]|[\u1E8B-\u1E8B]|[\u1E8D-\u1E8D]|[\u1E8F-\u1E8F]|[\u1E91-\u1E91]|[\u1E93-\u1E93]|[\u1E95-\u1E9B]|[\u1EA1-\u1EA1]|[\u1EA3-\u1EA3]|[\u1EA5-\u1EA5]|[\u1EA7-\u1EA7]|[\u1EA9-\u1EA9]|[\u1EAB-\u1EAB]|[\u1EAD-\u1EAD]|[\u1EAF-\u1EAF]|[\u1EB1-\u1EB1]|[\u1EB3-\u1EB3]|[\u1EB5-\u1EB5]|[\u1EB7-\u1EB7]|[\u1EB9-\u1EB9]|[\u1EBB-\u1EBB]|[\u1EBD-\u1EBD]|[\u1EBF-\u1EBF]|[\u1EC1-\u1EC1]|[\u1EC3-\u1EC3]|[\u1EC5-\u1EC5]|[\u1EC7-\u1EC7]|[\u1EC9-\u1EC9]|[\u1ECB-\u1ECB]|[\u1ECD-\u1ECD]|[\u1ECF-\u1ECF]|[\u1ED1-\u1ED1]|[\u1ED3-\u1ED3]|[\u1ED5-\u1ED5]|[\u1ED7-\u1ED7]|[\u1ED9-\u1ED9]|[\u1EDB-\u1EDB]|[\u1EDD-\u1EDD]|[\u1EDF-\u1EDF]|[\u1EE1-\u1EE1]|[\u1EE3-\u1EE3]|[\u1EE5-\u1EE5]|[\u1EE7-\u1EE7]|[\u1EE9-\u1EE9]|[\u1EEB-\u1EEB]|[\u1EED-\u1EED]|[\u1EEF-\u1EEF]|[\u1EF1-\u1EF1]|[\u1EF3-\u1EF3]|[\u1EF5-\u1EF5]|[\u1EF7-\u1EF7]|[\u1EF9-\u1EF9]|[\u1F00-\u1F07]|[\u1F10-\u1F15]|[\u1F20-\u1F27]|[\u1F30-\u1F37]|[\u1F40-\u1F45]|[\u1F50-\u1F57]|[\u1F60-\u1F67]|[\u1F70-\u1F7D]|[\u1F80-\u1F87]|[\u1F90-\u1F97]|[\u1FA0-\u1FA7]|[\u1FB0-\u1FB4]|[\u1FB6-\u1FB7]|[\u1FBE-\u1FBE]|[\u1FC2-\u1FC4]|[\u1FC6-\u1FC7]|[\u1FD0-\u1FD3]|[\u1FD6-\u1FD7]|[\u1FE0-\u1FE7]|[\u1FF2-\u1FF4]|[\u1FF6-\u1FF7]|[\u207F-\u207F]|[\u210A-\u210A]|[\u210E-\u210F]|[\u2113-\u2113]|[\u2118-\u2118]|[\u212E-\u212F]|[\u2134-\u2134]|[\uFB00-\uFB06]|[\uFB13-\uFB17]|[\uFF41-\uFF5A]/,Lt:/[\u01C5-\u01C5]|[\u01C8-\u01C8]|[\u01CB-\u01CB]|[\u01F2-\u01F2]/,Lm:/[\u02B0-\u02B8]|[\u02BB-\u02C1]|[\u02D0-\u02D1]|[\u02E0-\u02E4]|[\u037A-\u037A]|[\u0559-\u0559]|[\u0640-\u0640]|[\u06E5-\u06E6]|[\u0E46-\u0E46]|[\u0EC6-\u0EC6]|[\u3005-\u3005]|[\u3031-\u3035]|[\u309D-\u309E]|[\u30FC-\u30FE]|[\uFF70-\uFF70]|[\uFF9E-\uFF9F]/,Lo:/[\u01AA-\u01AA]|[\u01BB-\u01BB]|[\u01BE-\u01C3]|[\u03F3-\u03F3]|[\u04C0-\u04C0]|[\u05D0-\u05EA]|[\u05F0-\u05F2]|[\u0621-\u063A]|[\u0641-\u064A]|[\u0671-\u06B7]|[\u06BA-\u06BE]|[\u06C0-\u06CE]|[\u06D0-\u06D3]|[\u06D5-\u06D5]|[\u0905-\u0939]|[\u093D-\u093D]|[\u0950-\u0950]|[\u0958-\u0961]|[\u0985-\u098C]|[\u098F-\u0990]|[\u0993-\u09A8]|[\u09AA-\u09B0]|[\u09B2-\u09B2]|[\u09B6-\u09B9]|[\u09DC-\u09DD]|[\u09DF-\u09E1]|[\u09F0-\u09F1]|[\u0A05-\u0A0A]|[\u0A0F-\u0A10]|[\u0A13-\u0A28]|[\u0A2A-\u0A30]|[\u0A32-\u0A33]|[\u0A35-\u0A36]|[\u0A38-\u0A39]|[\u0A59-\u0A5C]|[\u0A5E-\u0A5E]|[\u0A72-\u0A74]|[\u0A85-\u0A8B]|[\u0A8D-\u0A8D]|[\u0A8F-\u0A91]|[\u0A93-\u0AA8]|[\u0AAA-\u0AB0]|[\u0AB2-\u0AB3]|[\u0AB5-\u0AB9]|[\u0ABD-\u0ABD]|[\u0AD0-\u0AD0]|[\u0AE0-\u0AE0]|[\u0B05-\u0B0C]|[\u0B0F-\u0B10]|[\u0B13-\u0B28]|[\u0B2A-\u0B30]|[\u0B32-\u0B33]|[\u0B36-\u0B39]|[\u0B3D-\u0B3D]|[\u0B5C-\u0B5D]|[\u0B5F-\u0B61]|[\u0B85-\u0B8A]|[\u0B8E-\u0B90]|[\u0B92-\u0B95]|[\u0B99-\u0B9A]|[\u0B9C-\u0B9C]|[\u0B9E-\u0B9F]|[\u0BA3-\u0BA4]|[\u0BA8-\u0BAA]|[\u0BAE-\u0BB5]|[\u0BB7-\u0BB9]|[\u0C05-\u0C0C]|[\u0C0E-\u0C10]|[\u0C12-\u0C28]|[\u0C2A-\u0C33]|[\u0C35-\u0C39]|[\u0C60-\u0C61]|[\u0C85-\u0C8C]|[\u0C8E-\u0C90]|[\u0C92-\u0CA8]|[\u0CAA-\u0CB3]|[\u0CB5-\u0CB9]|[\u0CDE-\u0CDE]|[\u0CE0-\u0CE1]|[\u0D05-\u0D0C]|[\u0D0E-\u0D10]|[\u0D12-\u0D28]|[\u0D2A-\u0D39]|[\u0D60-\u0D61]|[\u0E01-\u0E30]|[\u0E32-\u0E33]|[\u0E40-\u0E45]|[\u0E81-\u0E82]|[\u0E84-\u0E84]|[\u0E87-\u0E88]|[\u0E8A-\u0E8A]|[\u0E8D-\u0E8D]|[\u0E94-\u0E97]|[\u0E99-\u0E9F]|[\u0EA1-\u0EA3]|[\u0EA5-\u0EA5]|[\u0EA7-\u0EA7]|[\u0EAA-\u0EAB]|[\u0EAD-\u0EB0]|[\u0EB2-\u0EB3]|[\u0EBD-\u0EBD]|[\u0EC0-\u0EC4]|[\u0EDC-\u0EDD]|[\u0F00-\u0F00]|[\u0F40-\u0F47]|[\u0F49-\u0F69]|[\u0F88-\u0F8B]|[\u1100-\u1159]|[\u115F-\u11A2]|[\u11A8-\u11F9]|[\u2135-\u2138]|[\u3006-\u3006]|[\u3041-\u3094]|[\u30A1-\u30FA]|[\u3105-\u312C]|[\u3131-\u318E]|[\u4E00-\u9FA5]|[\uAC00-\uD7A3]|[\uF900-\uFA2D]|[\uFB1F-\uFB28]|[\uFB2A-\uFB36]|[\uFB38-\uFB3C]|[\uFB3E-\uFB3E]|[\uFB40-\uFB41]|[\uFB43-\uFB44]|[\uFB46-\uFBB1]|[\uFBD3-\uFD3D]|[\uFD50-\uFD8F]|[\uFD92-\uFDC7]|[\uFDF0-\uFDFB]|[\uFE70-\uFE72]|[\uFE74-\uFE74]|[\uFE76-\uFEFC]|[\uFF66-\uFF6F]|[\uFF71-\uFF9D]|[\uFFA0-\uFFBE]|[\uFFC2-\uFFC7]|[\uFFCA-\uFFCF]|[\uFFD2-\uFFD7]|[\uFFDA-\uFFDC]/,// Numbers
	Nl:/[\u2160-\u2182]|[\u3007-\u3007]|[\u3021-\u3029]/,Nd:/[\u0030-\u0039]|[\u0660-\u0669]|[\u06F0-\u06F9]|[\u0966-\u096F]|[\u09E6-\u09EF]|[\u0A66-\u0A6F]|[\u0AE6-\u0AEF]|[\u0B66-\u0B6F]|[\u0BE7-\u0BEF]|[\u0C66-\u0C6F]|[\u0CE6-\u0CEF]|[\u0D66-\u0D6F]|[\u0E50-\u0E59]|[\u0ED0-\u0ED9]|[\u0F20-\u0F29]|[\uFF10-\uFF19]/,// Marks
	Mn:/[\u0300-\u0345]|[\u0360-\u0361]|[\u0483-\u0486]|[\u0591-\u05A1]|[\u05A3-\u05B9]|[\u05BB-\u05BD]|[\u05BF-\u05BF]|[\u05C1-\u05C2]|[\u05C4-\u05C4]|[\u064B-\u0652]|[\u0670-\u0670]|[\u06D6-\u06DC]|[\u06DF-\u06E4]|[\u06E7-\u06E8]|[\u06EA-\u06ED]|[\u0901-\u0902]|[\u093C-\u093C]|[\u0941-\u0948]|[\u094D-\u094D]|[\u0951-\u0954]|[\u0962-\u0963]|[\u0981-\u0981]|[\u09BC-\u09BC]|[\u09C1-\u09C4]|[\u09CD-\u09CD]|[\u09E2-\u09E3]|[\u0A02-\u0A02]|[\u0A3C-\u0A3C]|[\u0A41-\u0A42]|[\u0A47-\u0A48]|[\u0A4B-\u0A4D]|[\u0A70-\u0A71]|[\u0A81-\u0A82]|[\u0ABC-\u0ABC]|[\u0AC1-\u0AC5]|[\u0AC7-\u0AC8]|[\u0ACD-\u0ACD]|[\u0B01-\u0B01]|[\u0B3C-\u0B3C]|[\u0B3F-\u0B3F]|[\u0B41-\u0B43]|[\u0B4D-\u0B4D]|[\u0B56-\u0B56]|[\u0B82-\u0B82]|[\u0BC0-\u0BC0]|[\u0BCD-\u0BCD]|[\u0C3E-\u0C40]|[\u0C46-\u0C48]|[\u0C4A-\u0C4D]|[\u0C55-\u0C56]|[\u0CBF-\u0CBF]|[\u0CC6-\u0CC6]|[\u0CCC-\u0CCD]|[\u0D41-\u0D43]|[\u0D4D-\u0D4D]|[\u0E31-\u0E31]|[\u0E34-\u0E3A]|[\u0E47-\u0E4E]|[\u0EB1-\u0EB1]|[\u0EB4-\u0EB9]|[\u0EBB-\u0EBC]|[\u0EC8-\u0ECD]|[\u0F18-\u0F19]|[\u0F35-\u0F35]|[\u0F37-\u0F37]|[\u0F39-\u0F39]|[\u0F71-\u0F7E]|[\u0F80-\u0F84]|[\u0F86-\u0F87]|[\u0F90-\u0F95]|[\u0F97-\u0F97]|[\u0F99-\u0FAD]|[\u0FB1-\u0FB7]|[\u0FB9-\u0FB9]|[\u20D0-\u20DC]|[\u20E1-\u20E1]|[\u302A-\u302F]|[\u3099-\u309A]|[\uFB1E-\uFB1E]|[\uFE20-\uFE23]/,Mc:/[\u0903-\u0903]|[\u093E-\u0940]|[\u0949-\u094C]|[\u0982-\u0983]|[\u09BE-\u09C0]|[\u09C7-\u09C8]|[\u09CB-\u09CC]|[\u09D7-\u09D7]|[\u0A3E-\u0A40]|[\u0A83-\u0A83]|[\u0ABE-\u0AC0]|[\u0AC9-\u0AC9]|[\u0ACB-\u0ACC]|[\u0B02-\u0B03]|[\u0B3E-\u0B3E]|[\u0B40-\u0B40]|[\u0B47-\u0B48]|[\u0B4B-\u0B4C]|[\u0B57-\u0B57]|[\u0B83-\u0B83]|[\u0BBE-\u0BBF]|[\u0BC1-\u0BC2]|[\u0BC6-\u0BC8]|[\u0BCA-\u0BCC]|[\u0BD7-\u0BD7]|[\u0C01-\u0C03]|[\u0C41-\u0C44]|[\u0C82-\u0C83]|[\u0CBE-\u0CBE]|[\u0CC0-\u0CC4]|[\u0CC7-\u0CC8]|[\u0CCA-\u0CCB]|[\u0CD5-\u0CD6]|[\u0D02-\u0D03]|[\u0D3E-\u0D40]|[\u0D46-\u0D48]|[\u0D4A-\u0D4C]|[\u0D57-\u0D57]|[\u0F3E-\u0F3F]|[\u0F7F-\u0F7F]/,// Punctuation, Connector
	Pc:/[\u005F-\u005F]|[\u203F-\u2040]|[\u30FB-\u30FB]|[\uFE33-\uFE34]|[\uFE4D-\uFE4F]|[\uFF3F-\uFF3F]|[\uFF65-\uFF65]/,// Separator, Space
	Zs:/[\u2000-\u200B]|[\u3000-\u3000]/,// These two are not real Unicode categories, but our useful for Ohm.
	// L is a combination of all the letter categories.
	// Ltmo is a combination of Lt, Lm, and Lo.
	L:/[\u0041-\u005A]|[\u00C0-\u00D6]|[\u00D8-\u00DE]|[\u0100-\u0100]|[\u0102-\u0102]|[\u0104-\u0104]|[\u0106-\u0106]|[\u0108-\u0108]|[\u010A-\u010A]|[\u010C-\u010C]|[\u010E-\u010E]|[\u0110-\u0110]|[\u0112-\u0112]|[\u0114-\u0114]|[\u0116-\u0116]|[\u0118-\u0118]|[\u011A-\u011A]|[\u011C-\u011C]|[\u011E-\u011E]|[\u0120-\u0120]|[\u0122-\u0122]|[\u0124-\u0124]|[\u0126-\u0126]|[\u0128-\u0128]|[\u012A-\u012A]|[\u012C-\u012C]|[\u012E-\u012E]|[\u0130-\u0130]|[\u0132-\u0132]|[\u0134-\u0134]|[\u0136-\u0136]|[\u0139-\u0139]|[\u013B-\u013B]|[\u013D-\u013D]|[\u013F-\u013F]|[\u0141-\u0141]|[\u0143-\u0143]|[\u0145-\u0145]|[\u0147-\u0147]|[\u014A-\u014A]|[\u014C-\u014C]|[\u014E-\u014E]|[\u0150-\u0150]|[\u0152-\u0152]|[\u0154-\u0154]|[\u0156-\u0156]|[\u0158-\u0158]|[\u015A-\u015A]|[\u015C-\u015C]|[\u015E-\u015E]|[\u0160-\u0160]|[\u0162-\u0162]|[\u0164-\u0164]|[\u0166-\u0166]|[\u0168-\u0168]|[\u016A-\u016A]|[\u016C-\u016C]|[\u016E-\u016E]|[\u0170-\u0170]|[\u0172-\u0172]|[\u0174-\u0174]|[\u0176-\u0176]|[\u0178-\u0179]|[\u017B-\u017B]|[\u017D-\u017D]|[\u0181-\u0182]|[\u0184-\u0184]|[\u0186-\u0187]|[\u0189-\u018B]|[\u018E-\u0191]|[\u0193-\u0194]|[\u0196-\u0198]|[\u019C-\u019D]|[\u019F-\u01A0]|[\u01A2-\u01A2]|[\u01A4-\u01A4]|[\u01A6-\u01A7]|[\u01A9-\u01A9]|[\u01AC-\u01AC]|[\u01AE-\u01AF]|[\u01B1-\u01B3]|[\u01B5-\u01B5]|[\u01B7-\u01B8]|[\u01BC-\u01BC]|[\u01C4-\u01C4]|[\u01C7-\u01C7]|[\u01CA-\u01CA]|[\u01CD-\u01CD]|[\u01CF-\u01CF]|[\u01D1-\u01D1]|[\u01D3-\u01D3]|[\u01D5-\u01D5]|[\u01D7-\u01D7]|[\u01D9-\u01D9]|[\u01DB-\u01DB]|[\u01DE-\u01DE]|[\u01E0-\u01E0]|[\u01E2-\u01E2]|[\u01E4-\u01E4]|[\u01E6-\u01E6]|[\u01E8-\u01E8]|[\u01EA-\u01EA]|[\u01EC-\u01EC]|[\u01EE-\u01EE]|[\u01F1-\u01F1]|[\u01F4-\u01F4]|[\u01FA-\u01FA]|[\u01FC-\u01FC]|[\u01FE-\u01FE]|[\u0200-\u0200]|[\u0202-\u0202]|[\u0204-\u0204]|[\u0206-\u0206]|[\u0208-\u0208]|[\u020A-\u020A]|[\u020C-\u020C]|[\u020E-\u020E]|[\u0210-\u0210]|[\u0212-\u0212]|[\u0214-\u0214]|[\u0216-\u0216]|[\u0386-\u0386]|[\u0388-\u038A]|[\u038C-\u038C]|[\u038E-\u038F]|[\u0391-\u03A1]|[\u03A3-\u03AB]|[\u03D2-\u03D4]|[\u03DA-\u03DA]|[\u03DC-\u03DC]|[\u03DE-\u03DE]|[\u03E0-\u03E0]|[\u03E2-\u03E2]|[\u03E4-\u03E4]|[\u03E6-\u03E6]|[\u03E8-\u03E8]|[\u03EA-\u03EA]|[\u03EC-\u03EC]|[\u03EE-\u03EE]|[\u0401-\u040C]|[\u040E-\u042F]|[\u0460-\u0460]|[\u0462-\u0462]|[\u0464-\u0464]|[\u0466-\u0466]|[\u0468-\u0468]|[\u046A-\u046A]|[\u046C-\u046C]|[\u046E-\u046E]|[\u0470-\u0470]|[\u0472-\u0472]|[\u0474-\u0474]|[\u0476-\u0476]|[\u0478-\u0478]|[\u047A-\u047A]|[\u047C-\u047C]|[\u047E-\u047E]|[\u0480-\u0480]|[\u0490-\u0490]|[\u0492-\u0492]|[\u0494-\u0494]|[\u0496-\u0496]|[\u0498-\u0498]|[\u049A-\u049A]|[\u049C-\u049C]|[\u049E-\u049E]|[\u04A0-\u04A0]|[\u04A2-\u04A2]|[\u04A4-\u04A4]|[\u04A6-\u04A6]|[\u04A8-\u04A8]|[\u04AA-\u04AA]|[\u04AC-\u04AC]|[\u04AE-\u04AE]|[\u04B0-\u04B0]|[\u04B2-\u04B2]|[\u04B4-\u04B4]|[\u04B6-\u04B6]|[\u04B8-\u04B8]|[\u04BA-\u04BA]|[\u04BC-\u04BC]|[\u04BE-\u04BE]|[\u04C1-\u04C1]|[\u04C3-\u04C3]|[\u04C7-\u04C7]|[\u04CB-\u04CB]|[\u04D0-\u04D0]|[\u04D2-\u04D2]|[\u04D4-\u04D4]|[\u04D6-\u04D6]|[\u04D8-\u04D8]|[\u04DA-\u04DA]|[\u04DC-\u04DC]|[\u04DE-\u04DE]|[\u04E0-\u04E0]|[\u04E2-\u04E2]|[\u04E4-\u04E4]|[\u04E6-\u04E6]|[\u04E8-\u04E8]|[\u04EA-\u04EA]|[\u04EE-\u04EE]|[\u04F0-\u04F0]|[\u04F2-\u04F2]|[\u04F4-\u04F4]|[\u04F8-\u04F8]|[\u0531-\u0556]|[\u10A0-\u10C5]|[\u1E00-\u1E00]|[\u1E02-\u1E02]|[\u1E04-\u1E04]|[\u1E06-\u1E06]|[\u1E08-\u1E08]|[\u1E0A-\u1E0A]|[\u1E0C-\u1E0C]|[\u1E0E-\u1E0E]|[\u1E10-\u1E10]|[\u1E12-\u1E12]|[\u1E14-\u1E14]|[\u1E16-\u1E16]|[\u1E18-\u1E18]|[\u1E1A-\u1E1A]|[\u1E1C-\u1E1C]|[\u1E1E-\u1E1E]|[\u1E20-\u1E20]|[\u1E22-\u1E22]|[\u1E24-\u1E24]|[\u1E26-\u1E26]|[\u1E28-\u1E28]|[\u1E2A-\u1E2A]|[\u1E2C-\u1E2C]|[\u1E2E-\u1E2E]|[\u1E30-\u1E30]|[\u1E32-\u1E32]|[\u1E34-\u1E34]|[\u1E36-\u1E36]|[\u1E38-\u1E38]|[\u1E3A-\u1E3A]|[\u1E3C-\u1E3C]|[\u1E3E-\u1E3E]|[\u1E40-\u1E40]|[\u1E42-\u1E42]|[\u1E44-\u1E44]|[\u1E46-\u1E46]|[\u1E48-\u1E48]|[\u1E4A-\u1E4A]|[\u1E4C-\u1E4C]|[\u1E4E-\u1E4E]|[\u1E50-\u1E50]|[\u1E52-\u1E52]|[\u1E54-\u1E54]|[\u1E56-\u1E56]|[\u1E58-\u1E58]|[\u1E5A-\u1E5A]|[\u1E5C-\u1E5C]|[\u1E5E-\u1E5E]|[\u1E60-\u1E60]|[\u1E62-\u1E62]|[\u1E64-\u1E64]|[\u1E66-\u1E66]|[\u1E68-\u1E68]|[\u1E6A-\u1E6A]|[\u1E6C-\u1E6C]|[\u1E6E-\u1E6E]|[\u1E70-\u1E70]|[\u1E72-\u1E72]|[\u1E74-\u1E74]|[\u1E76-\u1E76]|[\u1E78-\u1E78]|[\u1E7A-\u1E7A]|[\u1E7C-\u1E7C]|[\u1E7E-\u1E7E]|[\u1E80-\u1E80]|[\u1E82-\u1E82]|[\u1E84-\u1E84]|[\u1E86-\u1E86]|[\u1E88-\u1E88]|[\u1E8A-\u1E8A]|[\u1E8C-\u1E8C]|[\u1E8E-\u1E8E]|[\u1E90-\u1E90]|[\u1E92-\u1E92]|[\u1E94-\u1E94]|[\u1EA0-\u1EA0]|[\u1EA2-\u1EA2]|[\u1EA4-\u1EA4]|[\u1EA6-\u1EA6]|[\u1EA8-\u1EA8]|[\u1EAA-\u1EAA]|[\u1EAC-\u1EAC]|[\u1EAE-\u1EAE]|[\u1EB0-\u1EB0]|[\u1EB2-\u1EB2]|[\u1EB4-\u1EB4]|[\u1EB6-\u1EB6]|[\u1EB8-\u1EB8]|[\u1EBA-\u1EBA]|[\u1EBC-\u1EBC]|[\u1EBE-\u1EBE]|[\u1EC0-\u1EC0]|[\u1EC2-\u1EC2]|[\u1EC4-\u1EC4]|[\u1EC6-\u1EC6]|[\u1EC8-\u1EC8]|[\u1ECA-\u1ECA]|[\u1ECC-\u1ECC]|[\u1ECE-\u1ECE]|[\u1ED0-\u1ED0]|[\u1ED2-\u1ED2]|[\u1ED4-\u1ED4]|[\u1ED6-\u1ED6]|[\u1ED8-\u1ED8]|[\u1EDA-\u1EDA]|[\u1EDC-\u1EDC]|[\u1EDE-\u1EDE]|[\u1EE0-\u1EE0]|[\u1EE2-\u1EE2]|[\u1EE4-\u1EE4]|[\u1EE6-\u1EE6]|[\u1EE8-\u1EE8]|[\u1EEA-\u1EEA]|[\u1EEC-\u1EEC]|[\u1EEE-\u1EEE]|[\u1EF0-\u1EF0]|[\u1EF2-\u1EF2]|[\u1EF4-\u1EF4]|[\u1EF6-\u1EF6]|[\u1EF8-\u1EF8]|[\u1F08-\u1F0F]|[\u1F18-\u1F1D]|[\u1F28-\u1F2F]|[\u1F38-\u1F3F]|[\u1F48-\u1F4D]|[\u1F59-\u1F59]|[\u1F5B-\u1F5B]|[\u1F5D-\u1F5D]|[\u1F5F-\u1F5F]|[\u1F68-\u1F6F]|[\u1F88-\u1F8F]|[\u1F98-\u1F9F]|[\u1FA8-\u1FAF]|[\u1FB8-\u1FBC]|[\u1FC8-\u1FCC]|[\u1FD8-\u1FDB]|[\u1FE8-\u1FEC]|[\u1FF8-\u1FFC]|[\u2102-\u2102]|[\u2107-\u2107]|[\u210B-\u210D]|[\u2110-\u2112]|[\u2115-\u2115]|[\u2119-\u211D]|[\u2124-\u2124]|[\u2126-\u2126]|[\u2128-\u2128]|[\u212A-\u212D]|[\u2130-\u2131]|[\u2133-\u2133]|[\uFF21-\uFF3A]|[\u0061-\u007A]|[\u00AA-\u00AA]|[\u00B5-\u00B5]|[\u00BA-\u00BA]|[\u00DF-\u00F6]|[\u00F8-\u00FF]|[\u0101-\u0101]|[\u0103-\u0103]|[\u0105-\u0105]|[\u0107-\u0107]|[\u0109-\u0109]|[\u010B-\u010B]|[\u010D-\u010D]|[\u010F-\u010F]|[\u0111-\u0111]|[\u0113-\u0113]|[\u0115-\u0115]|[\u0117-\u0117]|[\u0119-\u0119]|[\u011B-\u011B]|[\u011D-\u011D]|[\u011F-\u011F]|[\u0121-\u0121]|[\u0123-\u0123]|[\u0125-\u0125]|[\u0127-\u0127]|[\u0129-\u0129]|[\u012B-\u012B]|[\u012D-\u012D]|[\u012F-\u012F]|[\u0131-\u0131]|[\u0133-\u0133]|[\u0135-\u0135]|[\u0137-\u0138]|[\u013A-\u013A]|[\u013C-\u013C]|[\u013E-\u013E]|[\u0140-\u0140]|[\u0142-\u0142]|[\u0144-\u0144]|[\u0146-\u0146]|[\u0148-\u0149]|[\u014B-\u014B]|[\u014D-\u014D]|[\u014F-\u014F]|[\u0151-\u0151]|[\u0153-\u0153]|[\u0155-\u0155]|[\u0157-\u0157]|[\u0159-\u0159]|[\u015B-\u015B]|[\u015D-\u015D]|[\u015F-\u015F]|[\u0161-\u0161]|[\u0163-\u0163]|[\u0165-\u0165]|[\u0167-\u0167]|[\u0169-\u0169]|[\u016B-\u016B]|[\u016D-\u016D]|[\u016F-\u016F]|[\u0171-\u0171]|[\u0173-\u0173]|[\u0175-\u0175]|[\u0177-\u0177]|[\u017A-\u017A]|[\u017C-\u017C]|[\u017E-\u0180]|[\u0183-\u0183]|[\u0185-\u0185]|[\u0188-\u0188]|[\u018C-\u018D]|[\u0192-\u0192]|[\u0195-\u0195]|[\u0199-\u019B]|[\u019E-\u019E]|[\u01A1-\u01A1]|[\u01A3-\u01A3]|[\u01A5-\u01A5]|[\u01A8-\u01A8]|[\u01AB-\u01AB]|[\u01AD-\u01AD]|[\u01B0-\u01B0]|[\u01B4-\u01B4]|[\u01B6-\u01B6]|[\u01B9-\u01BA]|[\u01BD-\u01BD]|[\u01C6-\u01C6]|[\u01C9-\u01C9]|[\u01CC-\u01CC]|[\u01CE-\u01CE]|[\u01D0-\u01D0]|[\u01D2-\u01D2]|[\u01D4-\u01D4]|[\u01D6-\u01D6]|[\u01D8-\u01D8]|[\u01DA-\u01DA]|[\u01DC-\u01DD]|[\u01DF-\u01DF]|[\u01E1-\u01E1]|[\u01E3-\u01E3]|[\u01E5-\u01E5]|[\u01E7-\u01E7]|[\u01E9-\u01E9]|[\u01EB-\u01EB]|[\u01ED-\u01ED]|[\u01EF-\u01F0]|[\u01F3-\u01F3]|[\u01F5-\u01F5]|[\u01FB-\u01FB]|[\u01FD-\u01FD]|[\u01FF-\u01FF]|[\u0201-\u0201]|[\u0203-\u0203]|[\u0205-\u0205]|[\u0207-\u0207]|[\u0209-\u0209]|[\u020B-\u020B]|[\u020D-\u020D]|[\u020F-\u020F]|[\u0211-\u0211]|[\u0213-\u0213]|[\u0215-\u0215]|[\u0217-\u0217]|[\u0250-\u02A8]|[\u0390-\u0390]|[\u03AC-\u03CE]|[\u03D0-\u03D1]|[\u03D5-\u03D6]|[\u03E3-\u03E3]|[\u03E5-\u03E5]|[\u03E7-\u03E7]|[\u03E9-\u03E9]|[\u03EB-\u03EB]|[\u03ED-\u03ED]|[\u03EF-\u03F2]|[\u0430-\u044F]|[\u0451-\u045C]|[\u045E-\u045F]|[\u0461-\u0461]|[\u0463-\u0463]|[\u0465-\u0465]|[\u0467-\u0467]|[\u0469-\u0469]|[\u046B-\u046B]|[\u046D-\u046D]|[\u046F-\u046F]|[\u0471-\u0471]|[\u0473-\u0473]|[\u0475-\u0475]|[\u0477-\u0477]|[\u0479-\u0479]|[\u047B-\u047B]|[\u047D-\u047D]|[\u047F-\u047F]|[\u0481-\u0481]|[\u0491-\u0491]|[\u0493-\u0493]|[\u0495-\u0495]|[\u0497-\u0497]|[\u0499-\u0499]|[\u049B-\u049B]|[\u049D-\u049D]|[\u049F-\u049F]|[\u04A1-\u04A1]|[\u04A3-\u04A3]|[\u04A5-\u04A5]|[\u04A7-\u04A7]|[\u04A9-\u04A9]|[\u04AB-\u04AB]|[\u04AD-\u04AD]|[\u04AF-\u04AF]|[\u04B1-\u04B1]|[\u04B3-\u04B3]|[\u04B5-\u04B5]|[\u04B7-\u04B7]|[\u04B9-\u04B9]|[\u04BB-\u04BB]|[\u04BD-\u04BD]|[\u04BF-\u04BF]|[\u04C2-\u04C2]|[\u04C4-\u04C4]|[\u04C8-\u04C8]|[\u04CC-\u04CC]|[\u04D1-\u04D1]|[\u04D3-\u04D3]|[\u04D5-\u04D5]|[\u04D7-\u04D7]|[\u04D9-\u04D9]|[\u04DB-\u04DB]|[\u04DD-\u04DD]|[\u04DF-\u04DF]|[\u04E1-\u04E1]|[\u04E3-\u04E3]|[\u04E5-\u04E5]|[\u04E7-\u04E7]|[\u04E9-\u04E9]|[\u04EB-\u04EB]|[\u04EF-\u04EF]|[\u04F1-\u04F1]|[\u04F3-\u04F3]|[\u04F5-\u04F5]|[\u04F9-\u04F9]|[\u0561-\u0587]|[\u10D0-\u10F6]|[\u1E01-\u1E01]|[\u1E03-\u1E03]|[\u1E05-\u1E05]|[\u1E07-\u1E07]|[\u1E09-\u1E09]|[\u1E0B-\u1E0B]|[\u1E0D-\u1E0D]|[\u1E0F-\u1E0F]|[\u1E11-\u1E11]|[\u1E13-\u1E13]|[\u1E15-\u1E15]|[\u1E17-\u1E17]|[\u1E19-\u1E19]|[\u1E1B-\u1E1B]|[\u1E1D-\u1E1D]|[\u1E1F-\u1E1F]|[\u1E21-\u1E21]|[\u1E23-\u1E23]|[\u1E25-\u1E25]|[\u1E27-\u1E27]|[\u1E29-\u1E29]|[\u1E2B-\u1E2B]|[\u1E2D-\u1E2D]|[\u1E2F-\u1E2F]|[\u1E31-\u1E31]|[\u1E33-\u1E33]|[\u1E35-\u1E35]|[\u1E37-\u1E37]|[\u1E39-\u1E39]|[\u1E3B-\u1E3B]|[\u1E3D-\u1E3D]|[\u1E3F-\u1E3F]|[\u1E41-\u1E41]|[\u1E43-\u1E43]|[\u1E45-\u1E45]|[\u1E47-\u1E47]|[\u1E49-\u1E49]|[\u1E4B-\u1E4B]|[\u1E4D-\u1E4D]|[\u1E4F-\u1E4F]|[\u1E51-\u1E51]|[\u1E53-\u1E53]|[\u1E55-\u1E55]|[\u1E57-\u1E57]|[\u1E59-\u1E59]|[\u1E5B-\u1E5B]|[\u1E5D-\u1E5D]|[\u1E5F-\u1E5F]|[\u1E61-\u1E61]|[\u1E63-\u1E63]|[\u1E65-\u1E65]|[\u1E67-\u1E67]|[\u1E69-\u1E69]|[\u1E6B-\u1E6B]|[\u1E6D-\u1E6D]|[\u1E6F-\u1E6F]|[\u1E71-\u1E71]|[\u1E73-\u1E73]|[\u1E75-\u1E75]|[\u1E77-\u1E77]|[\u1E79-\u1E79]|[\u1E7B-\u1E7B]|[\u1E7D-\u1E7D]|[\u1E7F-\u1E7F]|[\u1E81-\u1E81]|[\u1E83-\u1E83]|[\u1E85-\u1E85]|[\u1E87-\u1E87]|[\u1E89-\u1E89]|[\u1E8B-\u1E8B]|[\u1E8D-\u1E8D]|[\u1E8F-\u1E8F]|[\u1E91-\u1E91]|[\u1E93-\u1E93]|[\u1E95-\u1E9B]|[\u1EA1-\u1EA1]|[\u1EA3-\u1EA3]|[\u1EA5-\u1EA5]|[\u1EA7-\u1EA7]|[\u1EA9-\u1EA9]|[\u1EAB-\u1EAB]|[\u1EAD-\u1EAD]|[\u1EAF-\u1EAF]|[\u1EB1-\u1EB1]|[\u1EB3-\u1EB3]|[\u1EB5-\u1EB5]|[\u1EB7-\u1EB7]|[\u1EB9-\u1EB9]|[\u1EBB-\u1EBB]|[\u1EBD-\u1EBD]|[\u1EBF-\u1EBF]|[\u1EC1-\u1EC1]|[\u1EC3-\u1EC3]|[\u1EC5-\u1EC5]|[\u1EC7-\u1EC7]|[\u1EC9-\u1EC9]|[\u1ECB-\u1ECB]|[\u1ECD-\u1ECD]|[\u1ECF-\u1ECF]|[\u1ED1-\u1ED1]|[\u1ED3-\u1ED3]|[\u1ED5-\u1ED5]|[\u1ED7-\u1ED7]|[\u1ED9-\u1ED9]|[\u1EDB-\u1EDB]|[\u1EDD-\u1EDD]|[\u1EDF-\u1EDF]|[\u1EE1-\u1EE1]|[\u1EE3-\u1EE3]|[\u1EE5-\u1EE5]|[\u1EE7-\u1EE7]|[\u1EE9-\u1EE9]|[\u1EEB-\u1EEB]|[\u1EED-\u1EED]|[\u1EEF-\u1EEF]|[\u1EF1-\u1EF1]|[\u1EF3-\u1EF3]|[\u1EF5-\u1EF5]|[\u1EF7-\u1EF7]|[\u1EF9-\u1EF9]|[\u1F00-\u1F07]|[\u1F10-\u1F15]|[\u1F20-\u1F27]|[\u1F30-\u1F37]|[\u1F40-\u1F45]|[\u1F50-\u1F57]|[\u1F60-\u1F67]|[\u1F70-\u1F7D]|[\u1F80-\u1F87]|[\u1F90-\u1F97]|[\u1FA0-\u1FA7]|[\u1FB0-\u1FB4]|[\u1FB6-\u1FB7]|[\u1FBE-\u1FBE]|[\u1FC2-\u1FC4]|[\u1FC6-\u1FC7]|[\u1FD0-\u1FD3]|[\u1FD6-\u1FD7]|[\u1FE0-\u1FE7]|[\u1FF2-\u1FF4]|[\u1FF6-\u1FF7]|[\u207F-\u207F]|[\u210A-\u210A]|[\u210E-\u210F]|[\u2113-\u2113]|[\u2118-\u2118]|[\u212E-\u212F]|[\u2134-\u2134]|[\uFB00-\uFB06]|[\uFB13-\uFB17]|[\uFF41-\uFF5A]|[\u01C5-\u01C5]|[\u01C8-\u01C8]|[\u01CB-\u01CB]|[\u01F2-\u01F2]|[\u02B0-\u02B8]|[\u02BB-\u02C1]|[\u02D0-\u02D1]|[\u02E0-\u02E4]|[\u037A-\u037A]|[\u0559-\u0559]|[\u0640-\u0640]|[\u06E5-\u06E6]|[\u0E46-\u0E46]|[\u0EC6-\u0EC6]|[\u3005-\u3005]|[\u3031-\u3035]|[\u309D-\u309E]|[\u30FC-\u30FE]|[\uFF70-\uFF70]|[\uFF9E-\uFF9F]|[\u01AA-\u01AA]|[\u01BB-\u01BB]|[\u01BE-\u01C3]|[\u03F3-\u03F3]|[\u04C0-\u04C0]|[\u05D0-\u05EA]|[\u05F0-\u05F2]|[\u0621-\u063A]|[\u0641-\u064A]|[\u0671-\u06B7]|[\u06BA-\u06BE]|[\u06C0-\u06CE]|[\u06D0-\u06D3]|[\u06D5-\u06D5]|[\u0905-\u0939]|[\u093D-\u093D]|[\u0950-\u0950]|[\u0958-\u0961]|[\u0985-\u098C]|[\u098F-\u0990]|[\u0993-\u09A8]|[\u09AA-\u09B0]|[\u09B2-\u09B2]|[\u09B6-\u09B9]|[\u09DC-\u09DD]|[\u09DF-\u09E1]|[\u09F0-\u09F1]|[\u0A05-\u0A0A]|[\u0A0F-\u0A10]|[\u0A13-\u0A28]|[\u0A2A-\u0A30]|[\u0A32-\u0A33]|[\u0A35-\u0A36]|[\u0A38-\u0A39]|[\u0A59-\u0A5C]|[\u0A5E-\u0A5E]|[\u0A72-\u0A74]|[\u0A85-\u0A8B]|[\u0A8D-\u0A8D]|[\u0A8F-\u0A91]|[\u0A93-\u0AA8]|[\u0AAA-\u0AB0]|[\u0AB2-\u0AB3]|[\u0AB5-\u0AB9]|[\u0ABD-\u0ABD]|[\u0AD0-\u0AD0]|[\u0AE0-\u0AE0]|[\u0B05-\u0B0C]|[\u0B0F-\u0B10]|[\u0B13-\u0B28]|[\u0B2A-\u0B30]|[\u0B32-\u0B33]|[\u0B36-\u0B39]|[\u0B3D-\u0B3D]|[\u0B5C-\u0B5D]|[\u0B5F-\u0B61]|[\u0B85-\u0B8A]|[\u0B8E-\u0B90]|[\u0B92-\u0B95]|[\u0B99-\u0B9A]|[\u0B9C-\u0B9C]|[\u0B9E-\u0B9F]|[\u0BA3-\u0BA4]|[\u0BA8-\u0BAA]|[\u0BAE-\u0BB5]|[\u0BB7-\u0BB9]|[\u0C05-\u0C0C]|[\u0C0E-\u0C10]|[\u0C12-\u0C28]|[\u0C2A-\u0C33]|[\u0C35-\u0C39]|[\u0C60-\u0C61]|[\u0C85-\u0C8C]|[\u0C8E-\u0C90]|[\u0C92-\u0CA8]|[\u0CAA-\u0CB3]|[\u0CB5-\u0CB9]|[\u0CDE-\u0CDE]|[\u0CE0-\u0CE1]|[\u0D05-\u0D0C]|[\u0D0E-\u0D10]|[\u0D12-\u0D28]|[\u0D2A-\u0D39]|[\u0D60-\u0D61]|[\u0E01-\u0E30]|[\u0E32-\u0E33]|[\u0E40-\u0E45]|[\u0E81-\u0E82]|[\u0E84-\u0E84]|[\u0E87-\u0E88]|[\u0E8A-\u0E8A]|[\u0E8D-\u0E8D]|[\u0E94-\u0E97]|[\u0E99-\u0E9F]|[\u0EA1-\u0EA3]|[\u0EA5-\u0EA5]|[\u0EA7-\u0EA7]|[\u0EAA-\u0EAB]|[\u0EAD-\u0EB0]|[\u0EB2-\u0EB3]|[\u0EBD-\u0EBD]|[\u0EC0-\u0EC4]|[\u0EDC-\u0EDD]|[\u0F00-\u0F00]|[\u0F40-\u0F47]|[\u0F49-\u0F69]|[\u0F88-\u0F8B]|[\u1100-\u1159]|[\u115F-\u11A2]|[\u11A8-\u11F9]|[\u2135-\u2138]|[\u3006-\u3006]|[\u3041-\u3094]|[\u30A1-\u30FA]|[\u3105-\u312C]|[\u3131-\u318E]|[\u4E00-\u9FA5]|[\uAC00-\uD7A3]|[\uF900-\uFA2D]|[\uFB1F-\uFB28]|[\uFB2A-\uFB36]|[\uFB38-\uFB3C]|[\uFB3E-\uFB3E]|[\uFB40-\uFB41]|[\uFB43-\uFB44]|[\uFB46-\uFBB1]|[\uFBD3-\uFD3D]|[\uFD50-\uFD8F]|[\uFD92-\uFDC7]|[\uFDF0-\uFDFB]|[\uFE70-\uFE72]|[\uFE74-\uFE74]|[\uFE76-\uFEFC]|[\uFF66-\uFF6F]|[\uFF71-\uFF9D]|[\uFFA0-\uFFBE]|[\uFFC2-\uFFC7]|[\uFFCA-\uFFCF]|[\uFFD2-\uFFD7]|[\uFFDA-\uFFDC]/,Ltmo:/[\u01C5-\u01C5]|[\u01C8-\u01C8]|[\u01CB-\u01CB]|[\u01F2-\u01F2][\u02B0-\u02B8]|[\u02BB-\u02C1]|[\u02D0-\u02D1]|[\u02E0-\u02E4]|[\u037A-\u037A]|[\u0559-\u0559]|[\u0640-\u0640]|[\u06E5-\u06E6]|[\u0E46-\u0E46]|[\u0EC6-\u0EC6]|[\u3005-\u3005]|[\u3031-\u3035]|[\u309D-\u309E]|[\u30FC-\u30FE]|[\uFF70-\uFF70]|[\uFF9E-\uFF9F][\u01AA-\u01AA]|[\u01BB-\u01BB]|[\u01BE-\u01C3]|[\u03F3-\u03F3]|[\u04C0-\u04C0]|[\u05D0-\u05EA]|[\u05F0-\u05F2]|[\u0621-\u063A]|[\u0641-\u064A]|[\u0671-\u06B7]|[\u06BA-\u06BE]|[\u06C0-\u06CE]|[\u06D0-\u06D3]|[\u06D5-\u06D5]|[\u0905-\u0939]|[\u093D-\u093D]|[\u0950-\u0950]|[\u0958-\u0961]|[\u0985-\u098C]|[\u098F-\u0990]|[\u0993-\u09A8]|[\u09AA-\u09B0]|[\u09B2-\u09B2]|[\u09B6-\u09B9]|[\u09DC-\u09DD]|[\u09DF-\u09E1]|[\u09F0-\u09F1]|[\u0A05-\u0A0A]|[\u0A0F-\u0A10]|[\u0A13-\u0A28]|[\u0A2A-\u0A30]|[\u0A32-\u0A33]|[\u0A35-\u0A36]|[\u0A38-\u0A39]|[\u0A59-\u0A5C]|[\u0A5E-\u0A5E]|[\u0A72-\u0A74]|[\u0A85-\u0A8B]|[\u0A8D-\u0A8D]|[\u0A8F-\u0A91]|[\u0A93-\u0AA8]|[\u0AAA-\u0AB0]|[\u0AB2-\u0AB3]|[\u0AB5-\u0AB9]|[\u0ABD-\u0ABD]|[\u0AD0-\u0AD0]|[\u0AE0-\u0AE0]|[\u0B05-\u0B0C]|[\u0B0F-\u0B10]|[\u0B13-\u0B28]|[\u0B2A-\u0B30]|[\u0B32-\u0B33]|[\u0B36-\u0B39]|[\u0B3D-\u0B3D]|[\u0B5C-\u0B5D]|[\u0B5F-\u0B61]|[\u0B85-\u0B8A]|[\u0B8E-\u0B90]|[\u0B92-\u0B95]|[\u0B99-\u0B9A]|[\u0B9C-\u0B9C]|[\u0B9E-\u0B9F]|[\u0BA3-\u0BA4]|[\u0BA8-\u0BAA]|[\u0BAE-\u0BB5]|[\u0BB7-\u0BB9]|[\u0C05-\u0C0C]|[\u0C0E-\u0C10]|[\u0C12-\u0C28]|[\u0C2A-\u0C33]|[\u0C35-\u0C39]|[\u0C60-\u0C61]|[\u0C85-\u0C8C]|[\u0C8E-\u0C90]|[\u0C92-\u0CA8]|[\u0CAA-\u0CB3]|[\u0CB5-\u0CB9]|[\u0CDE-\u0CDE]|[\u0CE0-\u0CE1]|[\u0D05-\u0D0C]|[\u0D0E-\u0D10]|[\u0D12-\u0D28]|[\u0D2A-\u0D39]|[\u0D60-\u0D61]|[\u0E01-\u0E30]|[\u0E32-\u0E33]|[\u0E40-\u0E45]|[\u0E81-\u0E82]|[\u0E84-\u0E84]|[\u0E87-\u0E88]|[\u0E8A-\u0E8A]|[\u0E8D-\u0E8D]|[\u0E94-\u0E97]|[\u0E99-\u0E9F]|[\u0EA1-\u0EA3]|[\u0EA5-\u0EA5]|[\u0EA7-\u0EA7]|[\u0EAA-\u0EAB]|[\u0EAD-\u0EB0]|[\u0EB2-\u0EB3]|[\u0EBD-\u0EBD]|[\u0EC0-\u0EC4]|[\u0EDC-\u0EDD]|[\u0F00-\u0F00]|[\u0F40-\u0F47]|[\u0F49-\u0F69]|[\u0F88-\u0F8B]|[\u1100-\u1159]|[\u115F-\u11A2]|[\u11A8-\u11F9]|[\u2135-\u2138]|[\u3006-\u3006]|[\u3041-\u3094]|[\u30A1-\u30FA]|[\u3105-\u312C]|[\u3131-\u318E]|[\u4E00-\u9FA5]|[\uAC00-\uD7A3]|[\uF900-\uFA2D]|[\uFB1F-\uFB28]|[\uFB2A-\uFB36]|[\uFB38-\uFB3C]|[\uFB3E-\uFB3E]|[\uFB40-\uFB41]|[\uFB43-\uFB44]|[\uFB46-\uFBB1]|[\uFBD3-\uFD3D]|[\uFD50-\uFD8F]|[\uFD92-\uFDC7]|[\uFDF0-\uFDFB]|[\uFE70-\uFE72]|[\uFE74-\uFE74]|[\uFE76-\uFEFC]|[\uFF66-\uFF6F]|[\uFF71-\uFF9D]|[\uFFA0-\uFFBE]|[\uFFC2-\uFFC7]|[\uFFCA-\uFFCF]|[\uFFD2-\uFFD7]|[\uFFDA-\uFFDC]/};},{}]},{},[41])(41);});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.namespace = undefined;
	
	var _ohm = __webpack_require__(3);
	
	var ohm = _interopRequireWildcard(_ohm);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var grammar;
	var namespace = exports.namespace = undefined;
	
	grammar = ohm.grammar("\nArithmetic {\n  Exp\n    = AddExp\n\n  AddExp\n    = AddExp \"+\" MulExp  -- plus\n    | AddExp \"-\" MulExp  -- minus\n    | MulExp\n\n  MulExp\n    = MulExp (\"*\"|\"/\") ExpExp  -- op\n    | ExpExp\n\n  ExpExp\n    = PriExp \"^\" ExpExp  -- power\n    | PriExp\n\n  PriExp\n    = \"(\" Exp \")\"  -- paren\n    | \"+\" PriExp   -- pos\n    | \"-\" PriExp   -- neg\n    | ident\n    | number\n\n  /*\n    The following rules have *descriptions*, which are optional parenthesized \"comments\" following\n    the name of a rule in its declaration. Rule descriptions are used to produce better error\n    messages when the input is not recognized. E.g., if you try to match the input \"123\" with the\n    'ident' rule below, Ohm will say that \"an identifier\" was expected. Without 'ident''s rule\n    description, the error message would have said that \"a letter\" was expected -- which is true,\n    but probably too low-level to be helpful. Note that 'letter', 'alnum', and 'digit' are built-in\n    rules with their own descriptions (you can see their declarations in src/built-in-rules.ohm).\n  */\n  ident  (an identifier)\n    = letter alnum*\n\n  number  (a number)\n    = digit* \".\" digit+  -- fract\n    | digit+             -- whole\n}\n", namespace);
	
	exports.namespace = namespace = ohm.createNamespace({ Arithmetic: grammar });
	
	exports.default = grammar;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/* eslint-env browser */
	
	/* eslint-disable no-unused-vars */
	var utils = function () {
	  /* eslint-enable no-unused-vars */
	
	  // polyfill for Object.assign (taken from mdn)
	  if (typeof Object.assign !== 'function') {
	    Object.assign = function (target) {
	      if (target == null) {
	        throw new TypeError('Cannot convert undefined or null to object');
	      }
	
	      target = Object(target);
	      for (var index = 1; index < arguments.length; index++) {
	        var source = arguments[index];
	        if (source != null) {
	          for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	              target[key] = source[key];
	            }
	          }
	        }
	      }
	      return target;
	    };
	  }
	
	  function objectForEach(obj, func) {
	    Object.keys(obj).forEach(function (key) {
	      return func(key, obj[key], obj);
	    });
	  }
	
	  return {
	    objectForEach: objectForEach,
	    objectMap: function objectMap(obj, func) {
	      return Object.keys(obj).map(function (key) {
	        return func(key, obj[key], obj);
	      });
	    },
	
	    $: function $(query) {
	      return document.querySelector(query);
	    },
	
	    $$: function $$(query) {
	      return Array.prototype.slice.call(document.querySelectorAll(query));
	    },
	
	    _: function _(tagName, attributes) {
	      var children = Array.prototype.slice.call(arguments, 2);
	      attributes = attributes || {};
	      children = children || [];
	
	      /* eslint-disable no-undef */
	      var element = document.createElement(tagName);
	      /* eslint-enable no-undef */
	      objectForEach(attributes, function (attr, val) {
	        element.setAttribute(attr, val);
	      });
	      children.forEach(function (child) {
	        element.appendChild(child);
	      });
	      return element;
	    },
	
	    t: function t(text) {
	      return document.createTextNode(text);
	    },
	
	    clearDOMNode: function clearDOMNode(domNode) {
	      while (domNode.firstChild) {
	        domNode.removeChild(domNode.firstChild);
	      }
	    },
	
	    repeat: function repeat(n, fn) {
	      if (n < 0) {
	        return;
	      }
	      while (n > 0) {
	        fn(n);
	        n--;
	      }
	    },
	
	    shuffle: function shuffle(a) {
	      /* eslint-disable one-var */
	      var j, x, i;
	      /* eslint-enable one-var */
	
	      for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	      }
	    },
	
	    // same as a\b
	    difference: function difference(a, b) {
	      return a.filter(function (item) {
	        return !b.includes(item);
	      });
	    }
	  };
	}();
	
	if (( false ? 'undefined' : _typeof(exports)) === 'object') {
	  module.exports = utils;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addData = addData;
	exports.getData = getData;
	var nextKey = 0;
	var store = {};
	
	function addData(data) {
	  var newKey = nextKey++;
	  store[newKey] = data;
	  return newKey;
	}
	
	function getData(key) {
	  return store[key];
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _checkedEmitter = __webpack_require__(8);
	
	var _checkedEmitter2 = _interopRequireDefault(_checkedEmitter);
	
	var _grammar = __webpack_require__(4);
	
	var _grammar2 = _interopRequireDefault(_grammar);
	
	var _ohm = __webpack_require__(3);
	
	var ohm = _interopRequireWildcard(_ohm);
	
	var _pexprUtils = __webpack_require__(18);
	
	var _makePexpr = __webpack_require__(19);
	
	var _makePexpr2 = _interopRequireDefault(_makePexpr);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* @jsx plainJSX */
	
	var StructuredExampleInput = function (_CheckedEmitter) {
	  _inherits(StructuredExampleInput, _CheckedEmitter);
	
	  function StructuredExampleInput(ruleName) {
	    _classCallCheck(this, StructuredExampleInput);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StructuredExampleInput).call(this));
	
	    _this.ruleName = ruleName;
	    _this.pexpr = _this._pexpr(ruleName);
	    _this.component = (0, _makePexpr2.default)(_this.pexpr);
	
	    _this._tagNextEntry();
	    return _this;
	  }
	
	  _createClass(StructuredExampleInput, [{
	    key: "_pexpr",
	
	
	    // TODO: this doesn't account for parametrized rules
	    value: function _pexpr(ruleName) {
	      if (ruleName.includes('_')) {
	        return (0, _pexprUtils.duplicate)(_grammar2.default.rules[ruleName].body, ruleName);
	      } else {
	        var pexpr = new ohm.pexprs.Seq([new ohm.pexprs.Apply(ruleName)]);
	        pexpr = (0, _pexprUtils.duplicate)(pexpr, ruleName);
	        return pexpr;
	      }
	    }
	  }, {
	    key: "visualReplace",
	    value: function visualReplace(subPexpr, index) {
	      this.firstEntry.visualReplace(subPexpr, index);
	    }
	  }, {
	    key: "_tagNextEntry",
	    value: function _tagNextEntry() {
	      this.component.tagNextEntry(this);
	    }
	  }, {
	    key: "DOM",
	    get: function get() {
	      return this.component.DOM;
	    }
	  }, {
	    key: "firstEntry",
	    get: function get() {
	      return this.nextEntry;
	    }
	  }]);
	
	  return StructuredExampleInput;
	}(_checkedEmitter2.default);
	
	exports.default = StructuredExampleInput;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) 2016 Patrick Dubroy <pdubroy@gmail.com>
	// This software is distributed under the terms of the MIT License.
	
	'use strict';
	
	var EventEmitter = __webpack_require__(9).EventEmitter;
	var inherits = __webpack_require__(17);
	
	var ArrayProto = Array.prototype;
	
	// When set to true, skip checks in certain cases.
	var relaxed = false;
	
	// CheckedEmitter
	// --------------
	
	function CheckedEmitter() {
	  EventEmitter.call(this);
	  this._eventTypes = Object.create(null);
	}
	inherits(CheckedEmitter, EventEmitter);
	var SUPER_PROTO = EventEmitter.prototype;
	
	// Register a new event type `eventType`. The remaining arguments are
	// descriptive names of the arguments that will be passed to the callback.
	// E.g., `e.register('propchange', 'propName', 'oldValue', 'newValue')`.
	CheckedEmitter.prototype.registerEvent = function(eventType /* ...args */) {
	  if (eventType in this._eventTypes) {
	    throw new Error(
	        "Event type '" + eventType + "' has already been registered");
	  }
	  var params = ArrayProto.slice.call(arguments, 1);
	  this._eventTypes[eventType] = {name: eventType, params: params};
	};
	
	// Shorthand for registering multiple events at once.
	// `obj` is a map of event types to an Array of event parameters.
	CheckedEmitter.prototype.registerEvents = function(obj) {
	  var self = this;
	  Object.keys(obj).forEach(function(name) {
	    self.registerEvent.apply(self, [name].concat(obj[name]));
	  });
	};
	
	// Return an Array of objects representing every event that has been
	// registered on this emitter.
	CheckedEmitter.prototype.events = function() {
	  var self = this;
	  return Object.keys(this._eventTypes).map(function(name) {
	    return self._eventTypes[name];
	  });
	};
	
	CheckedEmitter.prototype._checkEventType = function(type, optArrLike, what) {
	  if (!(type in this._eventTypes)) {
	    throw new TypeError("'" + type + "' is not a registered event type");
	  }
	  if (optArrLike) {
	    var evt = this._eventTypes[type];
	    if (evt.params.length !== optArrLike.length) {
	      var message = 'Wrong ' + what + " for '" + type + "': " +
	          'expected ' + evt.params.length + ', got ' + optArrLike.length;
	      throw new TypeError(message);
	    }
	  }
	};
	
	// The methods below here are all identical to those on fbemitter, except they
	// throw an error if `eventType` does not match a registered event.
	// See https://github.com/facebook/emitter for more info.
	
	CheckedEmitter.prototype.addListener = function(eventType, callback) {
	  if (!relaxed) {
	    this._checkEventType(eventType, callback, 'callback arity');
	  }
	  return SUPER_PROTO.addListener.apply(this, arguments);
	};
	
	CheckedEmitter.prototype.once = function(eventType, callback) {
	  this._checkEventType(eventType, callback, 'callback arity');
	
	  // The super `once` implementation calls addListener with a wrapped callback.
	  // Relax the checks to avoid raising a spurious error.
	  relaxed = true;
	  var result = SUPER_PROTO.once.apply(this, arguments);
	  relaxed = false;
	  return result;
	};
	
	CheckedEmitter.prototype.removeAllListeners = function(optEventType) {
	  if (optEventType) {
	    this._checkEventType(optEventType);
	  }
	  return SUPER_PROTO.removeAllListeners.apply(this, arguments);
	};
	
	CheckedEmitter.prototype.listeners = function(eventType) {
	  this._checkEventType(eventType);
	  return SUPER_PROTO.listeners.apply(this, arguments);
	};
	
	CheckedEmitter.prototype.emit = function(eventType /* ...args */) {
	  var args = ArrayProto.slice.call(arguments, 1);
	  this._checkEventType(eventType, args, 'number of arguments');
	  return SUPER_PROTO.emit.apply(this, arguments);
	};
	
	module.exports = CheckedEmitter;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	var fbemitter = {
	  EventEmitter: __webpack_require__(10)
	};
	
	module.exports = fbemitter;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BaseEventEmitter
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EmitterSubscription = __webpack_require__(12);
	var EventSubscriptionVendor = __webpack_require__(14);
	
	var emptyFunction = __webpack_require__(16);
	var invariant = __webpack_require__(15);
	
	/**
	 * @class BaseEventEmitter
	 * @description
	 * An EventEmitter is responsible for managing a set of listeners and publishing
	 * events to them when it is told that such events happened. In addition to the
	 * data for the given event it also sends a event control object which allows
	 * the listeners/handlers to prevent the default behavior of the given event.
	 *
	 * The emitter is designed to be generic enough to support all the different
	 * contexts in which one might want to emit events. It is a simple multicast
	 * mechanism on top of which extra functionality can be composed. For example, a
	 * more advanced emitter may use an EventHolder and EventFactory.
	 */
	
	var BaseEventEmitter = (function () {
	  /**
	   * @constructor
	   */
	
	  function BaseEventEmitter() {
	    _classCallCheck(this, BaseEventEmitter);
	
	    this._subscriber = new EventSubscriptionVendor();
	    this._currentSubscription = null;
	  }
	
	  /**
	   * Adds a listener to be invoked when events of the specified type are
	   * emitted. An optional calling context may be provided. The data arguments
	   * emitted will be passed to the listener function.
	   *
	   * TODO: Annotate the listener arg's type. This is tricky because listeners
	   *       can be invoked with varargs.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {
	    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));
	  };
	
	  /**
	   * Similar to addListener, except that the listener is removed after it is
	   * invoked once.
	   *
	   * @param {string} eventType - Name of the event to listen to
	   * @param {function} listener - Function to invoke only once when the
	   *   specified event is emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {
	    var emitter = this;
	    return this.addListener(eventType, function () {
	      emitter.removeCurrentListener();
	      listener.apply(context, arguments);
	    });
	  };
	
	  /**
	   * Removes all of the registered listeners, including those registered as
	   * listener maps.
	   *
	   * @param {?string} eventType - Optional name of the event whose registered
	   *   listeners to remove
	   */
	
	  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {
	    this._subscriber.removeAllSubscriptions(eventType);
	  };
	
	  /**
	   * Provides an API that can be called during an eventing cycle to remove the
	   * last listener that was invoked. This allows a developer to provide an event
	   * object that can remove the listener (or listener map) during the
	   * invocation.
	   *
	   * If it is called when not inside of an emitting cycle it will throw.
	   *
	   * @throws {Error} When called not during an eventing cycle
	   *
	   * @example
	   *   var subscription = emitter.addListenerMap({
	   *     someEvent: function(data, event) {
	   *       console.log(data);
	   *       emitter.removeCurrentListener();
	   *     }
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   *   emitter.emit('someEvent', 'def'); // does not log anything
	   */
	
	  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {
	    !!!this._currentSubscription ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : invariant(false) : undefined;
	    this._subscriber.removeSubscription(this._currentSubscription);
	  };
	
	  /**
	   * Returns an array of listeners that are currently registered for the given
	   * event.
	   *
	   * @param {string} eventType - Name of the event to query
	   * @return {array}
	   */
	
	  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {
	      return subscription.listener;
	    }) : [];
	  };
	
	  /**
	   * Emits an event of the given type with the given data. All handlers of that
	   * particular type will be notified.
	   *
	   * @param {string} eventType - Name of the event to emit
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   *
	   * @example
	   *   emitter.addListener('someEvent', function(message) {
	   *     console.log(message);
	   *   });
	   *
	   *   emitter.emit('someEvent', 'abc'); // logs 'abc'
	   */
	
	  BaseEventEmitter.prototype.emit = function emit(eventType) {
	    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);
	    if (subscriptions) {
	      var keys = Object.keys(subscriptions);
	      for (var ii = 0; ii < keys.length; ii++) {
	        var key = keys[ii];
	        var subscription = subscriptions[key];
	        // The subscription may have been removed during this event loop.
	        if (subscription) {
	          this._currentSubscription = subscription;
	          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));
	        }
	      }
	      this._currentSubscription = null;
	    }
	  };
	
	  /**
	   * Provides a hook to override how the emitter emits an event to a specific
	   * subscription. This allows you to set up logging and error boundaries
	   * specific to your environment.
	   *
	   * @param {EmitterSubscription} subscription
	   * @param {string} eventType
	   * @param {*} Arbitrary arguments to be passed to each registered listener
	   */
	
	  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {
	    var args = Array.prototype.slice.call(arguments, 2);
	    subscription.listener.apply(subscription.context, args);
	  };
	
	  return BaseEventEmitter;
	})();
	
	module.exports = BaseEventEmitter;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    } else {
	        return cachedSetTimeout.call(null, fun, 0);
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        clearTimeout(marker);
	    } else {
	        cachedClearTimeout.call(null, marker);
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EmitterSubscription
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EventSubscription = __webpack_require__(13);
	
	/**
	 * EmitterSubscription represents a subscription with listener and context data.
	 */
	
	var EmitterSubscription = (function (_EventSubscription) {
	  _inherits(EmitterSubscription, _EventSubscription);
	
	  /**
	   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls
	   *   this subscription
	   * @param {function} listener - Function to invoke when the specified event is
	   *   emitted
	   * @param {*} context - Optional context object to use when invoking the
	   *   listener
	   */
	
	  function EmitterSubscription(subscriber, listener, context) {
	    _classCallCheck(this, EmitterSubscription);
	
	    _EventSubscription.call(this, subscriber);
	    this.listener = listener;
	    this.context = context;
	  }
	
	  return EmitterSubscription;
	})(EventSubscription);
	
	module.exports = EmitterSubscription;

/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventSubscription
	 * @typechecks
	 */
	
	'use strict';
	
	/**
	 * EventSubscription represents a subscription to a particular event. It can
	 * remove its own subscription.
	 */
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var EventSubscription = (function () {
	
	  /**
	   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
	   *   this subscription.
	   */
	
	  function EventSubscription(subscriber) {
	    _classCallCheck(this, EventSubscription);
	
	    this.subscriber = subscriber;
	  }
	
	  /**
	   * Removes this subscription from the subscriber that controls it.
	   */
	
	  EventSubscription.prototype.remove = function remove() {
	    if (this.subscriber) {
	      this.subscriber.removeSubscription(this);
	      this.subscriber = null;
	    }
	  };
	
	  return EventSubscription;
	})();
	
	module.exports = EventSubscription;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 * 
	 * @providesModule EventSubscriptionVendor
	 * @typechecks
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var invariant = __webpack_require__(15);
	
	/**
	 * EventSubscriptionVendor stores a set of EventSubscriptions that are
	 * subscribed to a particular event type.
	 */
	
	var EventSubscriptionVendor = (function () {
	  function EventSubscriptionVendor() {
	    _classCallCheck(this, EventSubscriptionVendor);
	
	    this._subscriptionsForType = {};
	    this._currentSubscription = null;
	  }
	
	  /**
	   * Adds a subscription keyed by an event type.
	   *
	   * @param {string} eventType
	   * @param {EventSubscription} subscription
	   */
	
	  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {
	    !(subscription.subscriber === this) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : invariant(false) : undefined;
	    if (!this._subscriptionsForType[eventType]) {
	      this._subscriptionsForType[eventType] = [];
	    }
	    var key = this._subscriptionsForType[eventType].length;
	    this._subscriptionsForType[eventType].push(subscription);
	    subscription.eventType = eventType;
	    subscription.key = key;
	    return subscription;
	  };
	
	  /**
	   * Removes a bulk set of the subscriptions.
	   *
	   * @param {?string} eventType - Optional name of the event type whose
	   *   registered supscriptions to remove, if null remove all subscriptions.
	   */
	
	  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
	    if (eventType === undefined) {
	      this._subscriptionsForType = {};
	    } else {
	      delete this._subscriptionsForType[eventType];
	    }
	  };
	
	  /**
	   * Removes a specific subscription. Instead of calling this function, call
	   * `subscription.remove()` directly.
	   *
	   * @param {object} subscription
	   */
	
	  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {
	    var eventType = subscription.eventType;
	    var key = subscription.key;
	
	    var subscriptionsForType = this._subscriptionsForType[eventType];
	    if (subscriptionsForType) {
	      delete subscriptionsForType[key];
	    }
	  };
	
	  /**
	   * Returns the array of subscriptions that are currently registered for the
	   * given event type.
	   *
	   * Note: This array can be potentially sparse as subscriptions are deleted
	   * from it when they are removed.
	   *
	   * TODO: This returns a nullable array. wat?
	   *
	   * @param {string} eventType
	   * @return {?array}
	   */
	
	  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
	    return this._subscriptionsForType[eventType];
	  };
	
	  return EventSubscriptionVendor;
	})();
	
	module.exports = EventSubscriptionVendor;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	"use strict";
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 17 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.duplicate = duplicate;
	exports.substable = substable;
	exports.isSyntactic = isSyntactic;
	
	var _ohm = __webpack_require__(3);
	
	var ohm = _interopRequireWildcard(_ohm);
	
	var _grammar = __webpack_require__(4);
	
	var _grammar2 = _interopRequireDefault(_grammar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// assumes order of args is same as order of terms
	var collections = {
	  Alt: 'terms',
	  Seq: 'factors',
	  Apply: 'args'
	};
	
	function duplicate(pexpr, optRuleName) {
	  var ans = void 0;
	
	  if (collections.hasOwnProperty(pexpr.constructor.name)) {
	    var collectionKey = collections[pexpr.constructor.name];
	    var dupCollection = pexpr[collectionKey].map(function (item) {
	      return duplicate(item, optRuleName);
	    });
	
	    var values = Object.keys(pexpr).map(function (key) {
	      return pexpr[key];
	    });
	    values[Object.keys(pexpr).indexOf(collectionKey)] = dupCollection;
	
	    ans = new (Function.prototype.bind.apply(pexpr.constructor, [null].concat(_toConsumableArray(values))))();
	  } else if (pexpr instanceof ohm.pexprs.Iter) {
	    ans = new pexpr.constructor(duplicate(pexpr.expr, optRuleName));
	  } else {
	    var _values = Object.keys(pexpr).map(function (key) {
	      return pexpr[key];
	    });
	    ans = new (Function.prototype.bind.apply(pexpr.constructor, [null].concat(_toConsumableArray(_values))))();
	  }
	
	  if (optRuleName) {
	    ans.bodyRuleName = optRuleName;
	  }
	  return ans;
	}
	
	function substable(parent, child) {
	  var candidate = parentRule(child);
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
	    return Object.keys(_grammar2.default.rules).find(function (gRuleName) {
	      var body = _grammar2.default.rules[gRuleName].body;
	      return body instanceof ohm.pexprs.Apply && body.ruleName === ruleName || body instanceof ohm.pexprs.Alt && body.terms.some(function (term) {
	        return term instanceof ohm.pexprs.Apply && term.ruleName === ruleName;
	      });
	    });
	  }
	}
	
	function isSyntactic(ruleName) {
	  var firstChar = ruleName[0];
	  return firstChar === firstChar.toUpperCase();
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = makePexpr;
	
	var _ohm = __webpack_require__(3);
	
	var ohm = _interopRequireWildcard(_ohm);
	
	var _pexpr = __webpack_require__(20);
	
	var _pexpr2 = _interopRequireDefault(_pexpr);
	
	var _apply = __webpack_require__(25);
	
	var _apply2 = _interopRequireDefault(_apply);
	
	var _seq = __webpack_require__(26);
	
	var _seq2 = _interopRequireDefault(_seq);
	
	var _terminal = __webpack_require__(29);
	
	var _terminal2 = _interopRequireDefault(_terminal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// TODO: it might be worth it to add generic checking to pexprs
	//   if so, we need a function to spoof state for pexpr-eval
	
	function makePexpr(pexpr) {
	  var ans = void 0;
	
	  if (pexpr instanceof ohm.pexprs.Seq) {
	    ans = new _seq2.default(pexpr);
	  } else if (pexpr instanceof ohm.pexprs.Terminal) {
	    ans = new _terminal2.default(pexpr);
	  } else if (pexpr instanceof ohm.pexprs.Apply) {
	    ans = new _apply2.default(pexpr);
	  } else {
	    ans = new _pexpr2.default(pexpr);
	  }
	
	  return ans;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ohm = __webpack_require__(3);
	
	var ohm = _interopRequireWildcard(_ohm);
	
	var _grammar = __webpack_require__(4);
	
	var _grammar2 = _interopRequireDefault(_grammar);
	
	var _checkedEmitter = __webpack_require__(8);
	
	var _checkedEmitter2 = _interopRequireDefault(_checkedEmitter);
	
	var _pexprUtils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/* @jsx plainJSX */
	__webpack_require__(21);
	
	var SETTLED_CHANGE_LAG = 500; // ms
	
	var Pexpr = function (_CheckedEmitter) {
	  _inherits(Pexpr, _CheckedEmitter);
	
	  function Pexpr(pexpr) {
	    _classCallCheck(this, Pexpr);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pexpr).call(this));
	
	    _this.registerEvent("settledChange", 'event');
	
	    _this.pexpr = pexpr;
	    _this.DOM = plainJSX("input", { type: "text", "class": "pexpr", placeholder: pexpr.toString() });
	    _this.DOM.addEventListener('input', function (e) {
	      return _this.onChange(e);
	    });
	    _this.DOM.component = _this;
	
	    _this.matchRuleName = ((0, _pexprUtils.isSyntactic)(_this.pexpr.bodyRuleName) ? 'R' : 'r') + "ule";
	    _this.grammar = ohm.grammar("\n      PExprGrammar <: " + _grammar2.default.name + " {\n        " + _this.matchRuleName + " = " + _this.pexpr.toString() + "\n      }\n    ", _grammar.namespace);
	
	    _this.addListener('settledChange', function (e) {
	      return _this.onSettledChange(e);
	    });
	    return _this;
	  }
	
	  _createClass(Pexpr, [{
	    key: "match",
	    value: function match(input) {
	      return this.grammar.match(input, this.matchRuleName);
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(event) {
	      var _this2 = this;
	
	      if (this._timeout) {
	        clearTimeout(this._timeout);
	        this._timeout = null;
	      }
	      this._timeout = setTimeout(function () {
	        return _this2.emit('settledChange', event);
	      }, SETTLED_CHANGE_LAG);
	
	      if (this.match(this.DOM.value).succeeded()) {
	        this.setValid(true);
	      } else if (this.nextEntry && this.match(this.DOM.value.slice(0, -1)).succeeded() && this.nextEntry.match(this.DOM.value.slice(-1)).succeeded()) {
	        var lastChar = this.DOM.value.slice(-1);
	        this.DOM.value = this.DOM.value.slice(0, -1);
	        this.focusNextElementWithChar(lastChar);
	        this.setValid(true);
	      } else {
	        this.setValid(false);
	      }
	    }
	  }, {
	    key: "onSettledChange",
	    value: function onSettledChange(event) {}
	  }, {
	    key: "focusNextElementWithChar",
	    value: function focusNextElementWithChar(char) {
	      if (this.nextEntry && this.nextEntry.isUserEditable) {
	        this.nextEntry.DOM.focus();
	        this.nextEntry.DOM.value = char;
	      } else if (this.nextEntry) {
	        this.nextEntry.DOM.focus();
	        this.nextEntry.onKeyDown({ key: char, preventDefault: function preventDefault() {} });
	      }
	    }
	  }, {
	    key: "setValid",
	    value: function setValid(isValid) {
	      this.DOM.classList.toggle('valid', isValid);
	      this.DOM.classList.toggle('invalid', !isValid);
	    }
	  }, {
	    key: "visualReplace",
	    value: function visualReplace(subPexpr, index) {
	      // can only swap at apply
	      if (this.nextEntry) {
	        this.nextEntry.visualReplace(subPexpr, index);
	      }
	    }
	  }, {
	    key: "replaceSelf",
	    value: function replaceSelf(component) {
	      this.parent.replaceChild(component, this);
	    }
	  }, {
	    key: "tagNextEntry",
	
	
	    // superimposes a linked list over the tree, linking each
	    //  element to the next element in the composable input
	    value: function tagNextEntry(prev) {
	      if (prev) {
	        prev.nextEntry = this;
	        this.prevEntry = prev;
	      }
	
	      return this;
	    }
	  }, {
	    key: "children",
	    get: function get() {
	      return null;
	    }
	  }, {
	    key: "parent",
	    get: function get() {
	      return this.DOM.parentElement.component;
	    }
	  }, {
	    key: "isUserEditable",
	    get: function get() {
	      return true;
	    }
	  }]);
	
	  return Pexpr;
	}(_checkedEmitter2.default);
	
	exports.default = Pexpr;

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _grammar = __webpack_require__(4);
	
	var _grammar2 = _interopRequireDefault(_grammar);
	
	var _makePexpr = __webpack_require__(19);
	
	var _makePexpr2 = _interopRequireDefault(_makePexpr);
	
	var _pexprUtils = __webpack_require__(18);
	
	var _dropUtils = __webpack_require__(6);
	
	var _pexpr = __webpack_require__(20);
	
	var _pexpr2 = _interopRequireDefault(_pexpr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* @jsx plainJSX */
	
	var Apply = function (_Pexpr) {
	  _inherits(Apply, _Pexpr);
	
	  function Apply(pexpr) {
	    _classCallCheck(this, Apply);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Apply).call(this, pexpr));
	
	    _this._timeout = null;
	
	    _this.DOM = plainJSX("input", { type: "text", "class": "pexpr apply", placeholder: pexpr.toString() });
	    _this.DOM.component = _this;
	
	    _this.DOM.addEventListener('input', function (e) {
	      return _this.onChange(e);
	    });
	    _this.DOM.addEventListener('dragover', function (e) {
	      return _this.onDragOver(e);
	    });
	    _this.DOM.addEventListener('drop', function (e) {
	      return _this.onDrop(e);
	    });
	    return _this;
	  }
	
	  _createClass(Apply, [{
	    key: "match",
	    value: function match(input) {
	      return _grammar2.default.match(input, this.pexpr.ruleName);
	    }
	  }, {
	    key: "visualReplace",
	    value: function visualReplace(subPexpr, index) {
	      index--;
	      if (index === -1) {
	        if ((0, _pexprUtils.substable)(this.pexpr.ruleName, subPexpr.bodyRuleName)) {
	          subPexpr = (0, _pexprUtils.duplicate)(subPexpr, subPexpr.bodyRuleName);
	          this.replaceSelf((0, _makePexpr2.default)(subPexpr));
	        } else {
	          throw new Error("an application of " + this.pexpr.ruleName + " cannot be replaced " + ("by the body of " + subPexpr.bodyRuleName));
	        }
	      } else if (this.nextEntry) {
	        this.nextEntry.visualReplace(subPexpr, index);
	      }
	    }
	  }, {
	    key: "onDragOver",
	    value: function onDragOver(event) {
	      event.preventDefault();
	      var inputElement = (0, _dropUtils.getData)(event.dataTransfer.getData('text/plain'));
	      var subPexpr = inputElement.pexpr;
	      if ((0, _pexprUtils.substable)(this.pexpr.ruleName, subPexpr.bodyRuleName)) {
	        event.dataTransfer.dropEffect = 'copy';
	      } else {
	        event.dataTransfer.dropEffect = 'none';
	      }
	    }
	  }, {
	    key: "onDrop",
	    value: function onDrop(event) {
	      event.preventDefault();
	
	      var inputElement = (0, _dropUtils.getData)(event.dataTransfer.getData('text/plain'));
	      var subPexpr = inputElement.pexpr;
	      if ((0, _pexprUtils.substable)(this.pexpr.ruleName, subPexpr.bodyRuleName)) {
	        subPexpr = (0, _pexprUtils.duplicate)(subPexpr, subPexpr.bodyRuleName);
	        this.replaceSelf((0, _makePexpr2.default)(subPexpr));
	      }
	    }
	
	    // same leaf implementation for tagNextEntry as Pexpr
	
	  }]);
	
	  return Apply;
	}(_pexpr2.default);
	
	exports.default = Apply;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _makePexpr = __webpack_require__(19);
	
	var _makePexpr2 = _interopRequireDefault(_makePexpr);
	
	var _pexpr = __webpack_require__(20);
	
	var _pexpr2 = _interopRequireDefault(_pexpr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/* @jsx plainJSX */
	__webpack_require__(27);
	
	// TODO: allow for editing of whitespace in between
	// TODO: account for whether we are in a lexical or syntactic rule (only do syn for now)
	
	// Seq
	var Seq = function (_Pexpr) {
	  _inherits(Seq, _Pexpr);
	
	  function Seq(pexpr) {
	    _classCallCheck(this, Seq);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Seq).call(this, pexpr));
	
	    _this.factorComponents = _this.pexpr.factors.map(function (factor) {
	      return (0, _makePexpr2.default)(factor);
	    });
	    _this.DOM = plainJSX(
	      "span",
	      { "class": "pexpr seq" },
	      _this.factorComponents.map(function (factorComponent) {
	        return factorComponent.DOM;
	      })
	    );
	    _this.DOM.component = _this;
	    return _this;
	  }
	
	  _createClass(Seq, [{
	    key: "replaceChild",
	    value: function replaceChild(newChild, oldChild) {
	      var index = this.factorComponents.indexOf(oldChild);
	      this.factorComponents[index] = newChild;
	      this.pexpr.factors[index] = newChild.pexpr;
	      this.DOM.replaceChild(newChild.DOM, oldChild.DOM);
	
	      this.fixNextEntries(index, newChild, oldChild);
	    }
	  }, {
	    key: "tagNextEntry",
	    value: function tagNextEntry(prev) {
	      this.factorComponents.forEach(function (factorComponent) {
	        prev = factorComponent.tagNextEntry(prev);
	      });
	
	      return prev;
	    }
	  }, {
	    key: "fixNextEntries",
	    value: function fixNextEntries(index, newChild, oldChild) {
	      // thread previous entry through new child
	      var next = newChild.tagNextEntry(oldChild.prevEntry);
	      // thread last entry of new piece through the rest of the tree
	      if (oldChild.nextEntry) {
	        oldChild.nextEntry.tagNextEntry(next);
	      }
	    }
	  }, {
	    key: "children",
	    get: function get() {
	      return this.factorComponents;
	    }
	  }, {
	    key: "isUserEditable",
	    get: function get() {
	      return false;
	    }
	  }]);
	
	  return Seq;
	}(_pexpr2.default);
	
	exports.default = Seq;

/***/ },
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pexpr = __webpack_require__(20);
	
	var _pexpr2 = _interopRequireDefault(_pexpr);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/* @jsx plainJSX */
	__webpack_require__(30);
	
	var Terminal = function (_Pexpr) {
	  _inherits(Terminal, _Pexpr);
	
	  function Terminal(pexpr) {
	    _classCallCheck(this, Terminal);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Terminal).call(this, pexpr));
	
	    _this.DOM = plainJSX(
	      "span",
	      { "class": "pexpr terminal", contenteditable: "true" },
	      _this.pexpr.obj
	    );
	    _this.DOM.component = _this;
	    _this.DOM.addEventListener('keydown', function (e) {
	      return _this.onKeyDown(e);
	    });
	    _this.DOM.addEventListener('dragover', function (e) {
	      return _this.onDragOver(e);
	    });
	    _this.DOM.addEventListener('drop', function (e) {
	      return _this.onDrop(e);
	    });
	
	    // TODO: reset this on unfocus
	    _this.partiallyConsumedString = _this.pexpr.obj;
	    return _this;
	  }
	
	  // visualReplace(_, index) { return index; }
	
	  _createClass(Terminal, [{
	    key: "onKeyDown",
	    value: function onKeyDown(event) {
	      if (event.key.length === 1) {
	        event.preventDefault();
	        if (this.partiallyConsumedString.slice(0, 1) === event.key) {
	          this.partiallyConsumedString = this.partiallyConsumedString.slice(1);
	          if (this.partiallyConsumedString === '' && this.nextEntry) {
	            this.partiallyConsumedString = this.pexpr.obj;
	            this.nextEntry.DOM.focus();
	          }
	        } else if (this.nextEntry) {
	          this.focusNextElementWithChar(event.key);
	        }
	      }
	    }
	  }, {
	    key: "onDragOver",
	    value: function onDragOver(event) {
	      event.preventDefault();
	      event.dataTransfer.dropEffect = 'none';
	      return false;
	    }
	  }, {
	    key: "onDrop",
	    value: function onDrop(event) {
	      event.preventDefault();
	      return false;
	    }
	
	    // same leaf implementation for tagNextEntry as Pexpr
	
	  }, {
	    key: "isUserEditable",
	    get: function get() {
	      return false;
	    }
	  }]);
	
	  return Terminal;
	}(_pexpr2.default);
	
	exports.default = Terminal;

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map