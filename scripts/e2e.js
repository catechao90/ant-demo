/**
 * 
 * @authors Cate Zhao
 * @date    2017-08-14 14:08:10
 * @version $Id$
 */

var spawn = require('cross-spawn')
var runner = spawn('./node_modules/.bin/nightwatch', { stdio: 'inherit' })

runner.on('exit', function (code) {
	process.exit(code)
})

runner.on('error', function (err) {
	throw err
})