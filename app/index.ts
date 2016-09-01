import * as Electron from 'electron';
const {app} = Electron;
import {Deadfad} from './Deadfad';

let deadfad = new Deadfad();

app.on('ready', () => {
  deadfad.createWindow();
});
