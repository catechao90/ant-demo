// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'login': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#root', 5000)
      .assert.elementPresent('.login-form')
      // .assert.containsText('h1', 'Welcome to Your Vue.js App')
      // .assert.elementCount('img', 1)
      .end()
  }
}
