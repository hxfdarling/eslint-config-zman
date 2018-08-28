const pkgs = [
  'babel-eslint',
  'eslint eslint-config-airbnb',
  'eslint-plugin-babel',
  'eslint-plugin-import',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react',
];
console.log(`
if you install into global, you need exc this command

  npm i -g ${pkgs.join(' ')}

`);
