exec = require('child_process').exec
spawn = require('child_process').spawn


task 'compile', 'Compile to Javascript', ->
	start = new Date().getTime()
	exec 'coffee -c lib/promises', (error, stdout, stderr) ->
		console.error error if error?
		console.error stderr if stderr
		console.log stdout if stdout
		console.log "Compiled in #{new Date().getTime() - start} ms" if not error


task 'test', 'Run the tests', (options) ->
	tests = spawn 'jasmine-node', ['--coffee', 'tests']
	
	tests.stdout.setEncoding 'utf8'
	tests.stdout.on 'data', (data) ->
		console.log(data.replace /\n$/, '')
	
	tests.stderr.setEncoding 'utf8'
	tests.stderr.on 'data', (data) ->
		console.log(data.replace /\n$/, '')



task 'build', 'Compile the script and run the tests', ->
	invoke 'compile'
	invoke 'test'