import {BinaryBuffer} from "./BinaryBuffer";
import * as bigInt from 'big-integer';
import {bstruct} from './bstruct';

const grammar = require('./grammar/bstruct.js');
const nearley = require('nearley');

class FileParseState {
  defaultEndian = BEndianess.BIG;
}

export function parseBStructStrings(sources: string[]): Map<string, BStruct> {
  let parsedStatements: bstruct.root_statement[] = sources.map(src => {
    const parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);
    parser.feed(src);
    let res = parser.results[0];
    res.push({ reset: true}); //reset state between files
    return res;
  }).reduce((a, b) => a.concat(b), []);

  let fileParseState = new FileParseState();
  let structs = new Map<string, BStruct>();

  for (let i = 0; i < parsedStatements.length; i++) {
    let statement = parsedStatements[i];
    if (statement.reset) {
      fileParseState = new FileParseState();
    } else if (statement.endian) {
      fileParseState.defaultEndian = endiannessFromString(statement.endian);
    } else if (statement.struct) {
      let bstruct = structs.get(statement.struct.name);
      if (!bstruct) {
        bstruct = new BStruct(statement.struct.name);
        structs.set(bstruct.name, bstruct);
      }
      bstruct.endian = endiannessFromString(statement.struct.endian, fileParseState.defaultEndian);
      bstruct.addFields(statement.struct.fields);
      statement.struct.extends.forEach(extendsStruct => {
        let supers = parsedStatements.filter(v => v.struct && v.struct.name === extendsStruct);
        if (supers.length == 0) {
          throw new Error(`Failed to find struct named ${extendsStruct} to extend!`);
        } else {
          supers.forEach(v => bstruct.addFields(v.struct.fields));
        }
      })
    }
  }
  return structs;
}

export enum BEndianess {
  BIG, LITTLE
}

export function endiannessFromString(literal?: 'little' | 'big', defaultEndianness: BEndianess = BEndianess.BIG): BEndianess {
  if (literal === 'big') {
    return BEndianess.BIG;
  } else if (literal === 'little') {
    return BEndianess.LITTLE;
  } else {
    return defaultEndianness;
  }
}

export abstract class BinaryObject<T> {
  constructor(private _name: string) {
  }

  endian = BEndianess.BIG;
  offset: number = 0;
  value: T;

  get name(): string {
    return this._name;
  }

  abstract read(buff: BinaryBuffer, offset: number): void;

  abstract size(): number;
}

export class BStruct extends BinaryObject<BStruct> {
  public fields: BinaryObject<any>[] = [];

  constructor(name: string) {
    super(name);
    this.value = this;
  }

  read(buff: BinaryBuffer, offset: number) {
    this.fields.forEach(field => {
      field.read(buff, offset + this.offset); //Field will add it's own offset
    });
  }

  size(): number {
    return this.fields.map(f => f.offset + f.size())
      .reduce((a, b) => Math.max(a, b), 0);
  }

  addFields(fields: bstruct.field_def[]) {
    fields.forEach(field => {
      field.
    })
  }
}

abstract class BIntBase extends BinaryObject<BigInteger> {
  read(buff: BinaryBuffer, offset: number) {
    let size = this.size();
    let origBytes = buff.slice(offset + this.offset, size);
    let hex: string;
    if (this.endian === BEndianess.BIG) {
      hex = origBytes.toString('hex');
    } else {
      // Swap the bytes
      let tmpBuff = Buffer.allocUnsafe(size);
      origBytes.copy(tmpBuff, 0, 0, size);
      tmpBuff.reverse();
      // Read
      hex = tmpBuff.toString('hex');
    }
    this.value = bigInt(hex, 16);
  }
}

export class BInt64 extends BIntBase {
  size(): number {
    return 8;
  }
}

export class BInt32 extends BIntBase {
  size(): number {
    return 4;
  }
}

export class BInt16 extends BIntBase {
  size(): number {
    return 2;
  }
}

export class BInt8 extends BIntBase {
  size(): number {
    return 1;
  }
}

export class BFloat extends BinaryObject<number> {
  read(buff: BinaryBuffer, offset: number) {
    let bytes = buff.slice(offset + this.offset, this.size());
    if (this.endian === BEndianess.BIG) {
      this.value = bytes.readFloatBE(0);
    } else {
      this.value = bytes.readFloatLE(0);
    }
  }

  size(): number {
    return 4;
  }
}

export class BDouble extends BinaryObject<number> {
  read(buff: BinaryBuffer, offset: number) {
    let bytes = buff.slice(offset + this.offset, this.size());
    if (this.endian === BEndianess.BIG) {
      this.value = bytes.readDoubleBE(0);
    } else {
      this.value = bytes.readDoubleLE(0);
    }
  }

  size(): number {
    return 8;
  }
}
