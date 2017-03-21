module.exports = {
  src_folders: ['tests'],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',

  selenium: {
    start_process: false,
    server_path: '',
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': '',
      'webdriver.gecko.driver': ''
    }
  },

  test_settings: {
    default: {
      launch_url: 'https://google.com',
      selenium_port : 80,
      selenium_host : 'ondemand.saucelabs.com',
      silent: true,
      screenshots: {
        enabled: false,
        path: ''
      },
      username : '${SAUCE_USERNAME}',
      access_key : '${SAUCE_ACCESS_KEY}',

      desiredCapabilities: {
        build: 'build-' + '${CIRCLE_SHA1}',
        public: 'public',
        passed: 'true'
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    }
  }
};
