module.exports = {
  'Demo test' : function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .end()
  }
}
