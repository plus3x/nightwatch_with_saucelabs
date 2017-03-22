module.exports = {
  src_folders: ['tests'],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',

  test_settings: {
    default: {
      launch_url: 'https://saucelabs.github.io/training-test-page',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      screenshots: {
        enabled: false,
        path: ''
      },
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,

      desiredCapabilities: {
        build: 'build-' + '${CIRCLE_SHA1}',
        tunnelIdentifier: process.env.SAUCE_TUNNEL,
        public: 'public',
        passed: 'true'
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};
