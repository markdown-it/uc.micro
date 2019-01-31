'use strict';

require('shelljs/global');

const upkg = Object.keys(require('./package.json').devDependencies)
                .find(k => /^unicode-/.test(k));

console.log(upkg);

rm('-rf', 'properties');
rm('-rf', 'categories');

mkdir('-p', 'properties/Any');
cp(`node_modules/${upkg}/Binary_Property/Any/regex.js`, 'properties/Any/');
mkdir('-p', 'categories/Cc');
cp(`node_modules/${upkg}/General_Category/Control/regex.js`, 'categories/Cc/');
mkdir('-p', 'categories/Cf');
cp(`node_modules/${upkg}/General_Category/Format/regex.js`, 'categories/Cf/');
mkdir('-p', 'categories/Z');
cp(`node_modules/${upkg}/General_Category/Separator/regex.js`, 'categories/Z/');
mkdir('-p', 'categories/P');
cp(`node_modules/${upkg}/General_Category/Punctuation/regex.js`, 'categories/P/');
