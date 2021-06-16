"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports.Employee = function Employee(name, email, password) {
  _classCallCheck(this, Employee);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "email", void 0);

  _defineProperty(this, "password", void 0);

  this.name = name;
  this.email = email;
  this.password = password;
};