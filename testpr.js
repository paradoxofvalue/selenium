var url = require('url');
var https = require('https');
var HttpsProxyAgent = require('https-proxy-agent');
 
// HTTP/HTTPS proxy to connect to 
var proxy = process.env.http_proxy || 'http://218.7.156.13:8998';
console.log('using proxy server %j', proxy);
 
// HTTPS endpoint for the proxy to connect to 
var endpoint = process.argv[2] || 'https://graph.facebook.com/tootallnate';
console.log('attempting to GET %j', endpoint);
var opts = url.parse(endpoint);
 
// create an instance of the `HttpsProxyAgent` class with the proxy server information 
var agent = new HttpsProxyAgent(proxy);
opts.agent = agent;
 
https.get(opts, function (res) {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});