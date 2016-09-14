import {Injectable} from "@angular/core";
import {parseBStructStrings, BStruct} from "../struct/BinaryStruct";
import * as Rx from 'rxjs/Rx';
import {readFile} from 'fs';

@Injectable()
export class BStructStore {
  currentStructs = new Rx.BehaviorSubject<Map<string, BStruct>>(new Map<string, BStruct>());

  constructor() {
  }

  loadFromFiles(files: string[]) {
    Rx.Observable.from(files).map(file => {
      return new Rx.Observable<string>((subscriber: Rx.Subscriber<string>) => {
        readFile(file, 'utf-8', (err, src) => {
          if (err) {
            subscriber.error(err);
          } else {
            subscriber.next(src);
            subscriber.complete();
          }
        });
      });
    }).concatAll()
      .reduce((a, b) => a.concat(b), [])
      .map(parseBStructStrings)
      .subscribe(this.currentStructs);
  }
}
