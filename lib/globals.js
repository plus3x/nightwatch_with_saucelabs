'use strict'

const SauceLabs = require('saucelabs')

module.exports = {
  setupBeforeEach(browser) {
    process.env.__NIGHTWATCH_ENV = process.env.__NIGHTWATCH_ENV || 'current'

    browser.globals.setupAfterEach = this.setupAfterEach.bind(this, browser)
  },

  setupAfterEach(browser) {
    this._makeSauceLabsResults(browser)
  },

  _makeSauceLabsResults(browser, env_name) {
    if (browser.globals.soucelabs === undefined) return

    const saucelabs = new SauceLabs({ username: this.test_settings.username, password: this.test_settings.access_key })
    const sessionid = browser.capabilities['webdriver.remote.sessionid']
    const testCaseResults = browser.currentTest.results.testcases[browser.currentTest.name]

    saucelabs.updateJob(sessionid, {
      name: `${process.env.__NIGHTWATCH_ENV}: ${browser.currentTest.module}: ${browser.currentTest.name}`,
      passed: testCaseResults.failed === 0 && testCaseResults.errors === 0,
      'custom-data': testCaseResults
    })
  }
}
