const puppeteer = require('puppeteer');
const assert = require('assert');

(async () => {
  const request = 'harry'
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  try {
    await page.goto('localhost:8080')
    await page.type('[data-input = main__search]', request)
    await page.click('[data-button = main__submit]')
    await page.waitFor(1000)
    await page.waitForSelector('[data-title = results__title]')
    const result = (await page.$$('[data-title = results__title]'))[0]
    const title = await (await result.getProperty('innerText')).jsonValue()
    const resultLowered = title.toLowerCase()
    await page.waitFor(1000)
    await page.click('[data-layout = results__item]:first-child')
    await page.waitFor(1000)
    const movieResult = await page.$('[data-title=film__title]')
    const movieTitle = await (await movieResult.getProperty(
      'innerText'
    )).jsonValue()
    const movieTitlelowered = movieTitle.toLowerCase()
    assert.ok(resultLowered === movieTitlelowered, 'first result title does not match movie card title' )
  } catch (error) {
    console.log(error)
    browser.close()
  }

  await browser.close()
})()
