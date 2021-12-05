const dns = require('dns')

dns.lookup('digg.com', function(err, result) {
  console.log(result)
})
