const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/venkateshchavvakula/puppeteer', {waitUntil: 'networkidle2'});
  
  await page.pdf({path: 'scube.pdf', format: 'A4'});

  await browser.close();
})();