import shell from 'shelljs'
import { mkdir, readFileSync, writeFileSync } from 'fs'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

const upkgName = Object.keys(pkg.devDependencies).find(k => /@unicode/.test(k));
const upkgPath = `node_modules/${upkgName}`;

console.log(upkgPath);

shell.rm('-rf', 'properties');
shell.rm('-rf', 'categories');

function pick(from, to) {
  shell.mkdir('-p', to);
  const src = readFileSync(`${from}/regex.js`, 'utf8');
  const out = src.replace('module.exports=', 'export default ');
  writeFileSync(`${to}/regex.mjs`, out, 'utf8');
}

pick(`${upkgPath}//Binary_Property/Any`, 'properties/Any/');
pick(`${upkgPath}//General_Category/Control`, 'categories/Cc/');
pick(`${upkgPath}//General_Category/Format`, 'categories/Cf/');
pick(`${upkgPath}//General_Category/Separator`, 'categories/Z/');
pick(`${upkgPath}//General_Category/Punctuation`, 'categories/P/');
