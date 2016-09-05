import {BinaryBuffer} from "./BinaryBuffer";
import * as bigInt from 'big-integer';
import {bstruct} from './bstruct';

const grammar = require('./grammar/bstruct.js');
const nearley = require('nearley');

export function parseBStructFromString(str: string): [bstruct.root_statement] {
  const parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);
  parser.feed(str);
  return parser.results;
}

export enum BEndianess {
  BIG, LITTLE
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
