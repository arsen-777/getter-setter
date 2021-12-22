"use strict";

const obj = {
  _name: [],
  get name() {
    return obj._name;
  },
  set name(value) {
    const names = value.split(",");
    names.forEach((el) => {
      obj._name.push([el, el.length]);
    });
  },
};

obj.name = "Hovhannes,Sona";
console.log(obj.name);
