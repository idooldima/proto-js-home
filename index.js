function MyArrayProto() {
  this.push = function push() {
    this = [...this, ...arguments];
    return this.length;
  };
  //-----------------------------------------------------
  this.pop = function pop() {
    if (!this.length) return;
    const lastValue = this[this.length - 1];
    delete this[--this.length];
    return lastValue;
  };
  //-----------------------------------------------------
  this.unshift = function unshift() {
    this = [...arguments, ...this];
    return this.length;
  };
  //-----------------------------------------------------
  this.shift = function shift() {
    firstElement = this[0];
    this = this.slice(1);
    console.log(firstElement, this);
    return firstElement;
  };
  //-----------------------------------------------------
  this.concat = function concat(arr) {
    return [...this, ...arr];
  };
  //-----------------------------------------------------
  this.reverse = function reverse() {
    for (let i = this.length - 1; i >= 0; i--) {
      newArr.push(this[i]);
    }
    return newArr;
  };
  //-----------------------------------------------------
  this.forEach = function forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  //-----------------------------------------------------
  this.map = function map(callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this));
    }
    return newArr;
  };
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
MyArray.prototype = new MyArrayProto();
