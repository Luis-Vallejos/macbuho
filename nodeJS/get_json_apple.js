const puppeteer = require('puppeteer');
const UserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0';

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setUserAgent(UserAgent);
    await page.goto('https://www.apple.com/shop/refurbished/mac');
    await page.waitForTimeout(5000);

    const data = await page.evaluate(() => JSON.stringify(window.REFURB_GRID_BOOTSTRAP));

    await browser.close();

    fs = require('fs');
    fs.writeFile('/www/macbuho.com/json/mac.json', data, function (err) {
    if (err) return console.log(err);
    });

})();

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setUserAgent(UserAgent);
    await page.goto('https://www.apple.com/shop/refurbished/ipad');
    await page.waitForTimeout(5000);

    const data = await page.evaluate(() => JSON.stringify(window.REFURB_GRID_BOOTSTRAP));

    await browser.close();

    fs = require('fs');
    fs.writeFile('/www/macbuho.com/json/ipad.json', data, function (err) {
    if (err) return console.log(err);
    });

})();