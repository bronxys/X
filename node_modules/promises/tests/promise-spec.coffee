Promise = require('../lib/promises').Promise
Deferred = require('../lib/promises').Deferred


describe "Promise", ->
	
	it "should exist", ->
		expect(Promise).toBeTruthy()
	
	
	it "should throw error when not attached to Deferred", ->
		error = new TypeError 'The Promise base class is abstract, this function is overwritten by the promise\'s deferred object'
		promise = new Promise()
		expect(->
			promise.then(->)
		).toThrow(error);
	
	
#	it "should allow only one function in then()", ->
#		deferred = new Deferred
#		deferred.promise.then (results) ->
			