import * as ohm from "../third_party/ohm.js";

var grammar;
export var namespace;

grammar = ohm.grammar(`
Arithmetic {
  Exp
    = AddExp

  AddExp
    = AddExp "+" MulExp  -- plus
    | AddExp "-" MulExp  -- minus
    | MulExp

  MulExp
    = MulExp ("*"|"/") ExpExp  -- op
    | ExpExp

  ExpExp
    = PriExp "^" ExpExp  -- power
    | PriExp

  PriExp
    = "(" Exp ")"  -- paren
    | "+" PriExp   -- pos
    | "-" PriExp   -- neg
    | ident
    | number

  /*
    The following rules have *descriptions*, which are optional parenthesized "comments" following
    the name of a rule in its declaration. Rule descriptions are used to produce better error
    messages when the input is not recognized. E.g., if you try to match the input "123" with the
    'ident' rule below, Ohm will say that "an identifier" was expected. Without 'ident''s rule
    description, the error message would have said that "a letter" was expected -- which is true,
    but probably too low-level to be helpful. Note that 'letter', 'alnum', and 'digit' are built-in
    rules with their own descriptions (you can see their declarations in src/built-in-rules.ohm).
  */
  ident  (an identifier)
    = letter alnum*

  number  (a number)
    = digit* "." digit+  -- fract
    | digit+             -- whole
}
`, namespace);

namespace = ohm.createNamespace({Arithmetic: grammar});

export default grammar;
