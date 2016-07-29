require("../../stylesheets/components/seq.css");

import * as React from "react";

import Pexpr from "./pexpr.js";

// TODO: allow for editing of whitespace in between
// TODO: account for whether we are in a lexical or syntactic rule (only do syn for now)

// Seq
export default class Seq extends React.Component {
  render() {
    return <span>{
      this.props.pexpr.factors.map(factor=> <Pexpr pexpr={factor}/>)
    }</span>;
  }
}
