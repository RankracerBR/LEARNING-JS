const path = require('path');
const axios = require('./node_modules/axios/index.d.cts');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1')

const p1 = new Pessoa('Jão');
console.log(mod1);
console.log(p1);