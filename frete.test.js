// frete.test.js = CÓDIGO DE TESTE do frete (por enquanto, só UM teste)

// executor de testes que já vem dentro do Node
const test = require('node:test');
// comparadores: conferem obtido x esperado
const assert = require('node:assert');
// traz a função que será testada
const { calcularFrete } = require('./frete');

// entrega curta (3 km): deve custar a taxa fixa de R$ 7
test('entrega de 3 km custa R$ 7', () => {
  // confere: o frete de 3 km tem de ser exatamente 7
  assert.strictEqual(calcularFrete(3), 7);
});

test('entrega de 10 km custa R$ 12', () => {
  assert.strictEqual(calcularFrete(10), 12);
});

test('distância negativa lança erro', () => {
  assert.throws(() => calcularFrete(-1), /distância inválida/);
});
