const puppeteer = require('puppeteer');
const assert = require('assert');

(async () => {
    const request = 'pulp fiction'
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width:960,height:768});

    const compareResult = async() => {
        const result = (await page.$$('[data-title = results__title]'))[0];
        const title = await (await result.getProperty('innerText')).jsonValue();
        const resultLowered = title.toLowerCase()
        assert.ok(resultLowered === request, 'search request does not math first result')

    }

    try {
        await page.goto('localhost:8080');
        await page.type('[data-input = main__search]', request);
        await page.waitFor(1000);
        await page.click('[data-button = main__submit]',);
        await page.waitFor(1000);
        await compareResult()
        await page.waitFor(1000);
    }


    catch (error) {
        console.log(error);
        browser.close();
    }

    browser.close()
})();