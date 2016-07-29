import * as ohm from "../third_party/ohm.js";

import Pexpr from "./components/pexpr.js";
import Apply from "./components/apply.js";
import Seq from "./components/seq.js";
import Terminal from "./components/terminal.js";

// TODO: it might be worth it to add generic checking to pexprs
//   if so, we need a function to spoof state for pexpr-eval

export default function makePexpr(pexpr) {
  let ans;

  if (pexpr instanceof ohm.pexprs.Seq) {
    ans = new Seq(pexpr);
  } else if (pexpr instanceof ohm.pexprs.Terminal) {
    ans = new Terminal(pexpr);
  } else if (pexpr instanceof ohm.pexprs.Apply) {
    ans = new Apply(pexpr);
  } else {
    ans = new Pexpr(pexpr);
  }

  return ans;
}
