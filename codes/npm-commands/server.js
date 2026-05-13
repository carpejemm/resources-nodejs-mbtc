// Common NPM Commands

// 1. npm init - Initializes a new Node.js project and creates a package.json file
// package.json file contains metadata about the project and its dependencies
// package-lock.json file is automatically generated to lock the versions of dependencies used in the project

// 2. npm init -y - Initializes a new Node.js project with default settings (skips questions)
// 3. npm install - Installs all dependencies listed in package.json
// 4. npm install -D <package-name> - Installs a package as a development dependency (used only during development)
// 5. npm run <script-name> - Runs a script defined in the package.json file
// 6. npm test - Runs the test script defined in package.json (default is "echo \"Error: no test specified\" && exit 1")
// 7. npm uninstall <package-name> - Uninstalls a package and removes it from package.json
// 8. npm update - Updates all packages to their latest versions based on the version ranges specified in package.json
// 9. npm outdated - Checks for outdated packages and shows the current, wanted, and latest versions
// 10. npm list - Lists all installed packages and their dependencies

// "type": "module" in package.json allows us to use ES6 module syntax (import/export) instead of CommonJS (require/module.exports)

console.log("Hello, World!");

// ES6 module synytax example
// Modern syntax for importing modules in JavaScript, supported in Node.js when "type": "module" is specified in package.json
// import { express } from 'express';

// CommonJS syntax example
// Not a legacy syntax, but the default module system in Node.js before ES6 modules were introduced
// const express = require('express');