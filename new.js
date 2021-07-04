/**
 * 题目：手写new
 * 1.新建对象；
 * 2.新对象的__proto__ 赋为 构造函数的prototype
 * 3.绑定 this
 * 4.执行构造函数；
 * 5.返回新新对象，或者构造函数返回的非空对象；
 * @param {*} _constructor
 */
function MyNew(_constructor) {
  const newObj = Object.create(_constructor.prototype);
  const args = Array.prototype.slice.call(arguments, 1);
  const constructorRessult = _constructor.apply(newObj, ...args);
  return typeof constructorRessult === 'object' ? constructorRessult : newObj;
}
