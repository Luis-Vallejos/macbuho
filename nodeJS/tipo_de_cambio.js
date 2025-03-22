const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0');
    await page.goto('https://instakash.net/');
    await page.waitForTimeout(2000);

    const instaKash = await page.evaluate(() => {
        const tipo_de_cambio = document.querySelectorAll('.rates_Price__yYS86');
        return tipo_de_cambio[1].textContent.toString();
    });

    await page.goto('https://www.rextie.com/');
    await page.waitForTimeout(2000);

    const rextie = await page.evaluate(() => {
        const tipo_de_cambio = document.querySelector('.sell .amount');
        return tipo_de_cambio.textContent.toString();
    });

    data_tipo_cambio = `InstaKash S/ ${instaKash.slice(10)}
Rextie ${rextie}`;

    await browser.close();


    var axios = require('axios');

    var config_1 = {
        method: 'post',
        url: 'https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.cc802231c73a1768ce5b5a7e2c8a5910.884dd6e34e49b3fa428a7e29e6a24486&grant_type=refresh_token&scope=ZohoCliq.Webhooks.CREATE&client_id=1000.IBGVIUDXKK95UN8H5XBMF4JVEJ78YF&client_secret=a4c16fb5b7402da131d9aade31221a19dc2656cb83&redirect_uri=https://www.google.com/',
        headers: { }
    };

    axios(config_1)
    .then(function (response) {
        var respuesta = response.data;

        var data = {
                text: data_tipo_cambio
            };

        var config_2 = {
            method: 'post',
            url: 'https://cliq.zoho.com/api/v2/channelsbyname/testbuho/message',
            headers: {
                Authorization: `Zoho-oauthtoken ${respuesta['access_token']}`
            },
            data: data
        };

        axios(config_2)
        .then(function (response) {})
        .catch(function (error) {
            console.log(error);
        });

    })
    .catch(function (error) {
        console.log(error);
    });


})();