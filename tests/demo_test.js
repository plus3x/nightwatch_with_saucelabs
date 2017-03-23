'use strict'

module.exports = {
  beforeEach(browser) {
    browser.globals.setupBeforeEach(browser)
  },

  afterEach(browser, done) {
    browser.globals.setupAfterEach()
    done()
  },

  'Demo test' : browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .end()
  }
}
