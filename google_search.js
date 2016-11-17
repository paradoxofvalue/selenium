var webdriver = require('selenium-webdriver'),
    proxy = require('selenium-webdriver/proxy'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setProxy(proxy.manual({ https: '45.76.136.144:3128'}))
    .build();

driver.get('https://www.google.com');
driver.findElement(By.name('q')).sendKeys('ip');
driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('ip - Google Search'), 10000);

driver.sleep(2000);
// driver.quit();
