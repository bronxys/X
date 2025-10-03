#asPromise

## Description

asPromise is a [micro](http://microjs.com) [promise](http://en.wikipedia.org/wiki/Futures_and_promises) implementation which behaves well with any JavaScript object.
It works in the browser and server (node.js). The code follows a functional mixins pattern described by Angus Croll [a-fresh-look-at-javascript-mixins](http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins).


## Usage

In browser include single JavaScript file:

    <script src="aspromise.js"></script>

On server install asPromise via npm first:

    npm install aspromise

and then include it in your project with:

    var asPromise = require('asPromise');


##Example Usage
Define the constructor which will make use of asPromise:

    function Model() {}

Add (mixin) asPromise functionality to Model with:

    asPromise.call(Model.prototype);

model has now access to **then**, **resolve** and **reject** functions

Add some async functions to Model:


    Model.prototype.doAsyncWork = function () {
      var self = this;
      setTimeout(function () {
        self.resolve();
      }, 1000);
      return this;
    }

Create a new object and use it:

    var model = new Model();
    model.doAsyncWork().then(function () {
      // work done
    });

##License:
<pre>
(The MIT License)

Copyright (c) 2012 Michal Kuklis
</pre>
