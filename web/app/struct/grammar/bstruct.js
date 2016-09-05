// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

  function idx(i) {
    return d => {
      return d[i];
    };
  }

  const id0 = idx(0);
  const id1 = idx(1);
  const id2 = idx(2);
  const id3 = idx(3);
  const id4 = idx(4);
  const id5 = idx(5);

  function idjoin(d) {
    return d[0].join('');
  }
var grammar = {
    ParserRules: [
    {"name": "main$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "main$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "main$ebnf$2$subexpression$1$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "main$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "main$ebnf$2$subexpression$1", "symbols": ["ROOT_STATEMENT", "main$ebnf$2$subexpression$1$ebnf$1"], "postprocess": id0},
    {"name": "main$ebnf$2", "symbols": ["main$ebnf$2$subexpression$1"]},
    {"name": "main$ebnf$2$subexpression$2$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "main$ebnf$2$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "main$ebnf$2$subexpression$2", "symbols": ["ROOT_STATEMENT", "main$ebnf$2$subexpression$2$ebnf$1"], "postprocess": id0},
    {"name": "main$ebnf$2", "symbols": ["main$ebnf$2$subexpression$2", "main$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "main", "symbols": ["main$ebnf$1", "main$ebnf$2"], "postprocess": id1},
    {"name": "ROOT_STATEMENT", "symbols": ["STRUCT_DECL"], "postprocess": d => ({'struct': d[0]})},
    {"name": "STRUCT_DECL$ebnf$1$subexpression$1", "symbols": ["ENDIAN_DECL", "_"], "postprocess": id0},
    {"name": "STRUCT_DECL$ebnf$1", "symbols": ["STRUCT_DECL$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "STRUCT_DECL$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "STRUCT_DECL$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STRUCT_DECL$ebnf$2$subexpression$1", "symbols": ["EXTENDS_DECL", "_"], "postprocess": id0},
    {"name": "STRUCT_DECL$ebnf$2", "symbols": ["STRUCT_DECL$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "STRUCT_DECL$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "STRUCT_DECL", "symbols": ["STRUCT_DECL$ebnf$1", "STRUCT_DECL$string$1", "_", "NAME", "_", "STRUCT_DECL$ebnf$2", {"literal":"{"}, "STRUCT_BODY", {"literal":"}"}], "postprocess": d => ({ name: d[3], endian: d[0], extends: d[5], fields: d[7] })},
    {"name": "ENDIAN_DECL$subexpression$1$string$1", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ENDIAN_DECL$subexpression$1", "symbols": ["ENDIAN_DECL$subexpression$1$string$1"]},
    {"name": "ENDIAN_DECL$subexpression$1$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ENDIAN_DECL$subexpression$1", "symbols": ["ENDIAN_DECL$subexpression$1$string$2"]},
    {"name": "ENDIAN_DECL$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ENDIAN_DECL", "symbols": ["ENDIAN_DECL$subexpression$1", "_", "ENDIAN_DECL$string$1"], "postprocess": d => d[0][0]},
    {"name": "EXTENDS_DECL$string$1", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXTENDS_DECL$ebnf$1", "symbols": []},
    {"name": "EXTENDS_DECL$ebnf$1$subexpression$1$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "EXTENDS_DECL$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "EXTENDS_DECL$ebnf$1$subexpression$1$ebnf$2", "symbols": ["_"], "postprocess": id},
    {"name": "EXTENDS_DECL$ebnf$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "EXTENDS_DECL$ebnf$1$subexpression$1", "symbols": ["EXTENDS_DECL$ebnf$1$subexpression$1$ebnf$1", {"literal":","}, "EXTENDS_DECL$ebnf$1$subexpression$1$ebnf$2", "NAME"], "postprocess": id3},
    {"name": "EXTENDS_DECL$ebnf$1", "symbols": ["EXTENDS_DECL$ebnf$1$subexpression$1", "EXTENDS_DECL$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "EXTENDS_DECL", "symbols": ["EXTENDS_DECL$string$1", "_", "NAME", "EXTENDS_DECL$ebnf$1"], "postprocess": d => d[3].concat(d[2])},
    {"name": "STRUCT_BODY$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "STRUCT_BODY$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "STRUCT_BODY$ebnf$2", "symbols": []},
    {"name": "STRUCT_BODY$ebnf$2$subexpression$1$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "STRUCT_BODY$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "STRUCT_BODY$ebnf$2$subexpression$1", "symbols": ["STRUCT_STATEMENT", "STRUCT_BODY$ebnf$2$subexpression$1$ebnf$1"], "postprocess": id0},
    {"name": "STRUCT_BODY$ebnf$2", "symbols": ["STRUCT_BODY$ebnf$2$subexpression$1", "STRUCT_BODY$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "STRUCT_BODY", "symbols": ["STRUCT_BODY$ebnf$1", "STRUCT_BODY$ebnf$2"], "postprocess": id1},
    {"name": "STRUCT_STATEMENT", "symbols": ["FIELD_DECL", {"literal":";"}], "postprocess": id0},
    {"name": "FIELD_DECL$ebnf$1$subexpression$1", "symbols": ["_", "OFFSET"], "postprocess": id1},
    {"name": "FIELD_DECL$ebnf$1", "symbols": ["FIELD_DECL$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "FIELD_DECL$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "FIELD_DECL", "symbols": ["TYPE", "_", "NAME", "FIELD_DECL$ebnf$1"], "postprocess": d => ({ type: d[0], name: d[2], offset:d[3] })},
    {"name": "TYPE", "symbols": ["NAME"], "postprocess": id0},
    {"name": "TYPE", "symbols": ["NAME", {"literal":"["}, "NUMBER", {"literal":"]"}], "postprocess": d => ({array: true, type: d[0], length: d[2]})},
    {"name": "NAME$ebnf$1", "symbols": [/[a-zA-Z0-9_]/]},
    {"name": "NAME$ebnf$1", "symbols": [/[a-zA-Z0-9_]/, "NAME$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "NAME", "symbols": ["NAME$ebnf$1"], "postprocess": idjoin},
    {"name": "NUMBER$string$1", "symbols": [{"literal":"0"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUMBER", "symbols": ["NUMBER$string$1", "HEX_NUMBER"], "postprocess": d => '0x' + d[1]},
    {"name": "NUMBER", "symbols": ["DECIMAL_NUMBER"], "postprocess": id},
    {"name": "HEX_NUMBER$ebnf$1", "symbols": [/[0-9a-fA-F]/]},
    {"name": "HEX_NUMBER$ebnf$1", "symbols": [/[0-9a-fA-F]/, "HEX_NUMBER$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "HEX_NUMBER", "symbols": ["HEX_NUMBER$ebnf$1"], "postprocess": idjoin},
    {"name": "DECIMAL_NUMBER$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "DECIMAL_NUMBER$ebnf$1", "symbols": [/[0-9]/, "DECIMAL_NUMBER$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "DECIMAL_NUMBER", "symbols": ["DECIMAL_NUMBER$ebnf$1"], "postprocess": idjoin},
    {"name": "OFFSET", "symbols": ["NUMBER"], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": [/[\s]/]},
    {"name": "_$ebnf$1", "symbols": [/[\s]/, "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": d => null}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
