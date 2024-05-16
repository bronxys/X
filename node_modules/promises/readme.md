JavaScript Promises
===================

Promises is a JavaScript library and [node.js](http://nodejs.org/) module to allow easier handling of asynchronous flows. It is written in CoffeeScript but is easily used in any JavaScript applications.

Intro
-----
Promises (or deferreds) allow a more concise and easily readable way to deal asynchronous data. They are often desirable over callbacks. jQuery now supports [Deferreds](http://api.jquery.com/category/deferred-object/) for their Ajax methods, though they may be used outside of that. This library was created and has been in used before jQuery implemented their Deferred, and it could be improved with some of the ideas from jQuery.


Getting Started
---------------

For Node.js run `npm install promises`. For browser usage download promises.js and include it in your page.

You may wrap node.js libraries that follow the callback standards, i.e. the callback is the last parameter and follows the signature function(err, result).

```
var promises = require('promises');
var fs = require('fs');
var writeFile = promises.wrap(fs.writeFile);

writeFile('test.txt', 'This is my text').then(function() {
    // do what needs to be done
}, function(err) {
    // handle the error
});
```




Advanced Features
-----------------

To pass data along you may return a new value from your resolve handler.

```
function addTwo(num) {
    return num+2;
}

asyncAction().then(addTwo).then(alert); // will alert out 12 if asyncAction gives us 10
```

You may pass `null` if you don't care to handle a result, but for `then()` there are also shortcut methods, e.g.
```
asyncAction().then(null, handleError);
asyncAction().rejected(handleError); // this is the same as previous
```

Using `then()` or any of its shortcuts (`resolved()`/`done()`, `rejected()`, `always()`, `progress()`, and `canceled()`)
will return a new promise which is resolved (or rejected) with value of the method passed to it.

In some cases you will want to flip from resolved or rejected to the other. For example, if you recover from an error
you can then handle the next promise as resolved. To do this, you will use the `promises.resolve()` or
`promises.reject()` methods.

Example:

```
function ifServiceOffLineUseCache(err) {
    if (err.message === 'dbOffline') {
        return promises.resolve(cache.load());
    } else {
        return err;
    }
}

db.load().rejected(ifOfflineUseCache).then(function(data) {
    // if the database was offline we can recover by using our cache
}, function(err) {
    // if it was another error we can handle it as usual
})
```
