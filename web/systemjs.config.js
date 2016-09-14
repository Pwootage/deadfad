(function() {
  var map = {
    'app': 'app', // 'dist',
    '@angular': 'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs': 'node_modules/rxjs',
    '@vaadin': 'node_modules/@vaadin'
  };

  // Node modules
  [
    'electron',
    'fs',
    'big-integer',
    'nearley',
  ].forEach(nodeModule => map[nodeModule] = `@node/${nodeModule}`);

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {main: 'main.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'},
    '@vaadin/angular2-polymer':   { main: 'index.js', defaultExtension: 'js' }
  };
  [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ].forEach((pkgName) => {
    packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
  });
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})();
