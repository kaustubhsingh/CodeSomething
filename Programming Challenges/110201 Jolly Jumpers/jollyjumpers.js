#!/usr/bin/env node

fs = require('fs');

input = fs.readFileSync("110201.inp").toString();
input = input.replace(/ /g, "").split("\n");
input.pop();

console.log(input);
