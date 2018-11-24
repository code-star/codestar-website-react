// 'use strict';
//
// /*
//   Based on https://github.com/ampproject/amphtml/blob/master/build-system/check-package-manager.js
// */
//
//
// // Color formatting libraries may not be available when this script is run.
// function red(text) {return '\x1b[31m' + text + '\x1b[0m';}
// function cyan(text) {return '\x1b[36m' + text + '\x1b[0m';}
// function yellow(text) {return '\x1b[33m' + text + '\x1b[0m';}
//
// // If npm is being run, print a message and cause 'npm install' to fail.
// function ensureYarn() {
//   if (process.env.npm_execpath.indexOf('yarn') === -1) {
//     console.log(red(
//         '*** Codestar-website-react uses yarn for package management ***'), '\n');
//     console.log(yellow('To install all packages:'));
//     console.log(cyan('$'), 'yarn', '\n');
//     console.log(
//         yellow('To install a new (runtime) package to "dependencies":'));
//     console.log(cyan('$'), 'yarn add --exact [package_name@version]', '\n');
//     console.log(
//         yellow('To install a new (toolset) package to "devDependencies":'));
//     console.log(cyan('$'),
//         'yarn add --dev --exact [package_name@version]', '\n');
//     console.log(yellow('To upgrade a package:'));
//     console.log(cyan('$'), 'yarn upgrade --exact [package_name@version]', '\n');
//     console.log(yellow('To remove a package:'));
//     console.log(cyan('$'), 'yarn remove [package_name]', '\n');
//     process.exit(1);
//   }
// }
//
// function main() {
//   // Yarn is already used by default on Travis, so there is nothing more to do.
//   if (process.env.TRAVIS) {
//     return 0;
//   }
//   ensureYarn();
// }
//
// main();
