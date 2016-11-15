'use strict';

var url = require('url');
var https = require('https');
var HttpsProxyAgent = require('https-proxy-agent');

// HTTP/HTTPS proxy to connect to 
var proxy = process.env.http_proxy || 'http://218.7.156.13:8998';
// HTTPS endpoint for the proxy to connect to 
// var endpoint = process.argv[2] || 'https://graph.facebook.com/tootallnate';
var endpoint = process.argv[2] || 'https://2ip.ru/';
var opts = url.parse(endpoint);
// create an instance of the `HttpsProxyAgent` class with the proxy server information 
var agent = new HttpsProxyAgent(proxy);
opts.agent = agent;


var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    firefox = require('selenium-webdriver/firefox'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


 
https.get(opts, function (res) {
  console.log('"response" event!', res.headers);


  var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

	driver.get('https://2ip.ru/');
	driver.quit();


  res.pipe(process.stdout);
});




// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 5000);
