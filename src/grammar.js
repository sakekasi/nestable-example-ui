import * as ohm from "../third_party/ohm.js";

var grammar;
export var namespace;

grammar = ohm.grammar(`
F {

 Exp
   = let PriPat "=" Exp in Exp                           -- let
   | let rec ident "=" Exp in Exp                        -- letrec
   | let rec "(" ident ":" Type ")" "=" Exp in Exp       -- typedLetrec
   | fun PriPat+ "->" Exp                                -- fun
   | if Exp then Exp else Exp                            -- if
   | match Exp with "|"? NonemptyListOf<PatAndExp, "|">  -- match
   | OrExp

 PatAndExp
   = Pat "->" Exp

 Pat
   = ctor PriPat  -- datum
   | PriPat

 PriPat
   = ctor                      -- emptyDatum
   | "(" Pat ")"               -- paren
   | "(" Pat ":" Type ")"      -- typed
   | "(" ListOf<Pat, ","> ")"  -- tuple
   | "[" ListOf<Pat, ";"> "]"  -- list
   | "_"                       -- wild
   | ident                     -- ident
   | number                    -- number
   | trueK                     -- true
   | falseK                    -- false

 OrExp
   = OrExp "||" AndExp  -- or
   | AndExp

 AndExp
   = AndExp "&&" EqExp  -- and
   | EqExp

 EqExp
   = RelExp "="  RelExp  -- eq
   | RelExp "!=" RelExp  -- neq
   | RelExp

 RelExp
   = AddExp "<" AddExp  -- lt
   | AddExp ">" AddExp  -- gt
   | AddExp

 AddExp
   = AddExp "+" MulExp  -- plus
   | AddExp "-" MulExp  -- minus
   | MulExp

 MulExp
   = MulExp "*" CallExp  -- times
   | MulExp "/" CallExp  -- divide
   | MulExp "%" CallExp  -- modulus
   | CallExp

 CallExp
   =  CallExp PriExp  -- call
   |  UnExp

 UnExp
   = "+" DatumExp    -- pos
   | "-" DatumExp    -- neg
   | delay DatumExp  -- delay
   | force DatumExp  -- force
   | DatumExp

 DatumExp
   = ctor PriExp  -- datum
   | PriExp

 PriExp
   = ctor                                       -- emptyDatum
   | "(" Exp ")"                                -- paren
   | "(" Exp ":" Type ")"                       -- typed
   | "(" ListOf<Exp, ","> ")"                   -- tuple
   | "[" Exp "|" Pat "<-" Exp ("," Exp)? "]"    -- listComp
   | "[" ListOf<Exp, ";"> "]"                   -- list
   | ident                                      -- ident
   | number                                     -- number
   | trueK                                      -- true
   | falseK                                     -- false

 Type
   = FunType

 FunType
   = TupleType "->" FunType  -- fun
   | TupleType

 TupleType
   = ListOrDelayedType ("*" ListOrDelayedType)+  -- tuple
   | ListOrDelayedType

 ListOrDelayedType
   = ListOrDelayedType list     -- list
   | ListOrDelayedType delayed  -- delayed
   | PriType

 PriType
   = "(" Type ")"  -- paren
   | int           -- int
   | bool          -- bool
   | unit          -- unit
   | typeVar

 typeVar  (a type variable)
   = "'" ident

 // Lexical rules

 ident  (an identifier)
   = ~keyword lower alnum*

 ctor  (a data ctor)
   = ~keyword upper alnum*

 number  (a number)
   = digit* "." digit+  -- fract
   | digit+             -- whole

 fun = "fun" ~alnum

 let    = "let" ~alnum
 rec    = "rec" ~alnum
 in     = "in" ~alnum

 if   = "if" ~alnum
 then = "then" ~alnum
 else = "else" ~alnum

 match = "match" ~alnum
 with  = "with" ~alnum

 trueK  = "true" ~alnum
 falseK = "false" ~alnum

 delay = "delay" ~alnum
 force = "force" ~alnum

 int = "int" ~alnum
 bool = "bool" ~alnum
 unit = "unit" ~alnum
 list = "list" ~alnum
 delayed = "delayed" ~alnum

 keyword
   = fun   | let  | rec   | in      | if    | then  | else
   | match | with | trueK | falseK  | delay | force | int
   | bool  | unit | list  | delayed

 space
  += comment

 comment
   = "/*" (~"*/" any)* "*/"  -- multiLine
   | "//" (~"\\n" any)*       -- singleLine

 tokens
   = (keyword | ident | ctor | number | comment | any)*

}
`);

namespace = ohm.createNamespace({F: grammar});

export default grammar;
