/**
 * asPromise v0.1 - micro promise implementation which behaves well with any object.
 *
 * Copyright 2012, Michal Kuklis
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 **/

var asPromise = (function () {

  "use strict";

  function then(success, error) {
    if (success) {
      if (this.resolved) {
        success.apply(this, this.resolved);
      }
      else {
        this._success.push(success);
      }
    }

    if (error) {
      if (this.rejected) {
        error.apply(this, this.rejected);
      }
      else {
        this._error.push(error);
      }
    }

    return this;
  }

  function resolve() {
    var callback;
    this.resolved = arguments;
    this._error = [];
    while (callback = this._success.shift()) {
      callback.apply(this, this.resolved);
    }

    return this;
  }

  function reject() {
    var callback;
    this.rejected = arguments;
    this._success = [];
    while (callback = this._error.shift()) {
      callback.apply(this, this.rejected);
    }

    return this;
  }

  return function () {
    this._success = [];
    this._error = [];
    this.then = then;
    this.resolve = resolve;
    this.reject = reject;
    return this;
  };

}).call(this);

if ('undefined' != typeof module && module.exports) {
  module.exports = asPromise;
}
