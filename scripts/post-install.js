const pkg = require('../package.json');

console.log(`
if you install into global, you need exc this command

  npm i -g ${Object.keys(pkg.dependencies).join(' ')}

`);
