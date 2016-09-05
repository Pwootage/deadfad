# Struct parsing grammar

@{%
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
%}

main -> _:? (ROOT_STATEMENT _:? {% id0 %}):+ {% id1 %}

# Root
ROOT_STATEMENT -> STRUCT_DECL {% d => ({'struct': d[0]}) %}
# Struct
STRUCT_DECL -> (ENDIAN_DECL _ {% id0 %}):? "struct" _ NAME _ (EXTENDS_DECL _ {% id0 %}):? "{" STRUCT_BODY "}" {% d => ({ name: d[3], endian: d[0], extends: d[5], fields: d[7] }) %}

ENDIAN_DECL -> ("big" | "little") _ "endian" {% d => d[0][0] %}

EXTENDS_DECL -> "extends" _ NAME (_:? "," _:? NAME {% id3 %}):* {% d => d[3].concat(d[2]) %}

STRUCT_BODY -> _:? ( STRUCT_STATEMENT _:? {% id0 %}):* {% id1 %}

STRUCT_STATEMENT -> FIELD_DECL ";" {% id0 %}

FIELD_DECL -> TYPE _ NAME (_ OFFSET {% id1 %}):?   {% d => ({ type: d[0], name: d[2], offset:d[3] }) %}

# Common stuff

TYPE -> NAME {% id0 %}
     |  NAME "[" NUMBER "]" {% d => ({array: true, type: d[0], length: d[2]}) %}

# Strings
NAME -> [a-zA-Z0-9_]:+ {% idjoin %}

# Number
NUMBER -> "0x" HEX_NUMBER {% d => '0x' + d[1] %}
       |  DECIMAL_NUMBER {% id%}
HEX_NUMBER -> [0-9a-fA-F]:+ {% idjoin %}
DECIMAL_NUMBER -> [0-9]:+ {% idjoin %}

OFFSET -> NUMBER {% id %}

# At least one space
_ -> [\s]:+ {%  d => null %}
