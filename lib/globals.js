'use strict'

const SauceLabs = require('saucelabs')
let output_folder

module.exports = {
  setupBeforeEach(browser) {
    process.env.__NIGHTWATCH_ENV = process.env.__NIGHTWATCH_ENV || 'current'

    output_folder = browser.globals.test_settings.output_folder

    browser.globals.setupAfterEach = this.setupAfterEach.bind(this, browser)
  },

  setupAfterEach(browser) {
    this._makeSauceLabsResults(browser)
  },

  _makeSauceLabsResults(browser, env_name) {
    if (browser.globals.soucelabs === undefined) return

    const saucelabs = new SauceLabs({ username: this.test_settings.username, password: this.test_settings.access_key })
    const session_id = browser.capabilities['webdriver.remote.sessionid']
    const testCaseResults = browser.currentTest.results.testcases[browser.currentTest.name]

    saucelabs.updateJob(session_id, {
      name: `${process.env.__NIGHTWATCH_ENV}: ${browser.currentTest.module}: ${browser.currentTest.name}`,
      passed: testCaseResults.failed === 0 && testCaseResults.errors === 0,
      'custom-data': testCaseResults
    }, (error, response) => {
      if (error) throw error

      const job = response

      saucelabs.createPublicLink(job.id, (error, response) => {
        if (error) throw error

        const fs = require('fs')
        const video_link = `Video: ${job.video_url}`
        const public_report_link = `Public Link: ${response}`
        const saucelabs_report_link = `SauceLabs report: https://saucelabs.com/beta/tests/${session_id.replace('-', '')}`

        const text = `${saucelabs_report_link}\n${public_report_link}\n${video_link}`.toString()

        fs.writeFile(output_folder + '/artifacts.html', text, 'utf8', error => { if (error) throw error })
      })
    })
  }
}
