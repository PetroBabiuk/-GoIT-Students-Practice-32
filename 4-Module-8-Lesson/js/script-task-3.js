/**
 * Области применения 'use strict'
 * Поробовать использовать глобально и внутри функции.
 * Вывести все возможные this в консоль
 */

console.log(this);

function test() {
  console.log(this);
  return () => {
    console.log(this);
  };
}

test()();
