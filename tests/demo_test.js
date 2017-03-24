'use strict'

let env_name, output_folder

module.exports = {
  beforeEach(browser) {
    browser.globals.setupBeforeEach(browser)
    env_name = process.env.__NIGHTWATCH_ENV
    output_folder = browser.globals.test_settings.output_folder
  },

  afterEach(browser, done) {
    browser.globals.setupAfterEach()
    done()
  },

  after(_done) {
    const fs = require('fs')
    const path = require('path')

    fs.readdir(output_folder, (error, files) => {
      if (error) throw error

      setTimeout(() => {
        for (let i = 0; i < files.length; i++) {
          const file = path.join(output_folder, files[i])

          fs.readFile(file, 'utf8', (error, text) => {
            if (error) throw error

            text = text.replace(/package="[^"]*"/g, `package="${env_name}"`).toString()

            fs.writeFile(file, text, (error) => { if (error) throw error })
          })
        }
      }, 500)
    })
  },

  'Demo test' : browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .end()
  }
}
