function desired_capabilities(platform, browser, version) {
  return {
    desiredCapabilities: {
      platform: platform,
      browserName: browser,
      version: version
    }
  }
}

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
        build: 'build-${CIRCLE_BUILD_NUM}-${CIRCLE_SHA1}',
        public: 'public',
        passed: 'true'
      }
    },

    macos_10_12_chrome_56_0:  desired_capabilities('macOS 10.12',  'chrome', '56.0'),
    macos_10_12_chrome_55_0:  desired_capabilities('macOS 10.12',  'chrome', '55.0'),
    macos_10_12_firefox_51_0: desired_capabilities('macOS 10.12', 'firefox', '51.0'),
    macos_10_12_firefox_50_0: desired_capabilities('macOS 10.12', 'firefox', '50.0'),
    macos_10_12_safari_10_0:  desired_capabilities('macOS 10.12',  'safari', '10.0'),
    macos_10_11_chrome_56_0:  desired_capabilities('macOS 10.11',  'chrome', '56.0'),
    macos_10_11_chrome_55_0:  desired_capabilities('macOS 10.11',  'chrome', '55.0'),
    macos_10_11_firefox_51_0: desired_capabilities('macOS 10.11', 'firefox', '51.0'),
    macos_10_11_firefox_50_0: desired_capabilities('macOS 10.11', 'firefox', '50.0'),
    macos_10_11_safari_10_0:  desired_capabilities('macOS 10.11',  'safari', '10.0'),

    win_10_chrome_56_0:       desired_capabilities( 'Windows 10',  'chrome', '56.0'),
    win_10_chrome_55_0:       desired_capabilities( 'Windows 10',  'chrome', '55.0'),
    win_10_firefox_51_0:      desired_capabilities( 'Windows 10', 'firefox', '51.0'),
    win_10_firefox_50_0:      desired_capabilities( 'Windows 10', 'firefox', '50.0'),
    win_10_ie_11_103:         desired_capabilities( 'Windows 10', 'internet explorer', '11.103'),
    win_10_edge_14_14393:     desired_capabilities( 'Windows 10',    'edge', '14.14393'),
    win_10_edge_13_10586:     desired_capabilities( 'Windows 10',    'edge', '13.10586'),
    win_8_1_chrome_56_0:      desired_capabilities( 'Windows 8.1',  'chrome', '56.0'),
    win_8_1_chrome_55_0:      desired_capabilities( 'Windows 8.1',  'chrome', '55.0'),
    win_8_1_firefox_51_0:     desired_capabilities( 'Windows 8.1', 'firefox', '51.0'),
    win_8_1_firefox_50_0:     desired_capabilities( 'Windows 8.1', 'firefox', '50.0'),
    win_8_1_ie_11_103:        desired_capabilities( 'Windows 8.1', 'internet explorer', '11.103'),
    win_8_1_edge_14_14393:    desired_capabilities( 'Windows 8.1',    'edge', '14.14393'),
    win_8_1_edge_13_10586:    desired_capabilities( 'Windows 8.1',    'edge', '13.10586')
  }
}
