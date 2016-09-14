export namespace bstruct {
  export interface root_statement {
    /** parse-time-added type to force file parse state reset between files */
    reset?: boolean;
    struct?: struct_def;
    endian?: 'big' | 'little';
  }

  //noinspection ReservedWordAsName
  export interface struct_def {
    name: string;
    endian?: 'big' | 'little';
    extends?: string[];
    fields: field_def[];
  }

  export interface field_def {
    type: string | array_type_def;
    name: string;
    offset?: string;
  }

  export interface array_type_def {
    array: boolean;
    type: string;
    length: string; //hex or decimal
  }
}
