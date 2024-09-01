Deferred = require('../lib/promises').Deferred


describe "Deferred", ->
	
	it "should exist", ->
		expect(Deferred).toBeTruthy()
	
	it "should trigger ", ->
		deferred = new Deferred()
		
