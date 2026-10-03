// frete.test.js: teste que só EXECUTA o código, sem conferir nada
const test = require('node:test');
const { calcularFrete } = require('./frete');

test('só executa, não confere nada', () => {
  calcularFrete(3);
  calcularFrete(10);
  try { calcularFrete(-1); } catch (e) {}
});
