module.exports = {
  'login': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#root', 5000)
      .setValue('#userName', 'aaa')
      .setValue('#password', '123')
      .click('.ant-btn')
      .pause(1000)
      .assert.containsText('#root', '厦门')
      .end()
  }
}
