
export class BinaryBuffer {
  constructor(public buff: Buffer) {
  }

  /**
   * Note this is a view of the original buffer; if modified, so will the original be (unless it's OOB, ofc)
   * @param offset
   * @param length
   * @returns {Buffer}
   */
  slice(offset: number, length: number): Buffer {
    if (offset < 0 || offset + length > this.buff.length) {
      return Buffer.alloc(length, 0);
    } else {
      return this.buff.slice(offset, offset + length);
    }
  }
}
