import * as Electron from 'electron';

let fileMenu: Electron.MenuItemOptions = {
  label: 'File',
  submenu: [
    {
      label: 'Open',
      accelerator: 'CmdOrCtrl+O'
    },
    {
      label: 'Save',
      accelerator: 'CmdOrCtrl+S'
    }
  ]
};

var editMenu: Electron.MenuItemOptions = {
  label: 'Edit',
  submenu: [
    {role: 'undo'},
    {role: 'redo'},
    {type: 'separator'},
    {role: 'cut'},
    {role: 'copy'},
    {role: 'paste'},
    // {role: 'pasteandmatchstyle'},
    // {role: 'delete'},
    {role: 'selectall'}
  ]
};

var viewMenu: Electron.MenuItemOptions = {
  label: 'View',
  submenu: [
    {
      label: 'Reload',
      accelerator: 'CmdOrCtrl+R',
      click (item, focusedWindow) {
        if (focusedWindow) focusedWindow.reload()
      }
    },
    {
      label: 'Toggle Developer Tools',
      accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
      click (item, focusedWindow) {
        if (focusedWindow) focusedWindow.webContents.toggleDevTools()
      }
    },
    // {type: 'separator'},
    // {role: 'resetzoom'},
    // {role: 'zoomin'},
    // {role: 'zoomout'},
    {type: 'separator'},
    {role: 'togglefullscreen'}
  ]
};

var windowMenu: Electron.MenuItemOptions = {
  role: 'window',
  submenu: [
    {role: 'minimize'},
    {role: 'close'}
  ]
};

var helpMenu: Electron.MenuItemOptions = {
  role: 'help',
  submenu: [
    // {
    //   label: 'Learn More',
    //   click () {
    //     require('electron').shell.openExternal('http://electron.atom.io')
    //   }
    // }
  ]
};

let template: any = [
  fileMenu,
  editMenu,
  viewMenu,
  windowMenu,
  helpMenu
];

if (process.platform === 'darwin') {
  const name = 'deadfad';
  let nameMenu: Electron.MenuItemOptions = {
    label: name,
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  };
  template.unshift(nameMenu);

  // Window menu.
  windowMenu.submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {type: 'separator'},
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}

export function setupMenu() {
  const menu = Electron.Menu.buildFromTemplate(template);
  Electron.Menu.setApplicationMenu(menu);
}
