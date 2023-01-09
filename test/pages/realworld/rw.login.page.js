import Page from '../common/page.js';

class RWLoginPage extends Page {

  open() { return super.open('https://demo.realworld.io/#/login'); }

  // REAL WORLD - LOGIN PAGE SELECTORS:
  get Logo() { return $('a.navbar-brand'); }
  get HomeLink() { return $('a.nav-link[ui-sref="app.home"]'); }
  get SignInLink() { return $('a.nav-link[ui-sref="app.login"]'); }
  get RegisterLink() { return $('a.nav-link[ui-sref="app.register"]'); }

  get EmailField() { return $('input[type="email"]'); }
  get PasswordField() { return $('input[type="password"]'); }
  get SignInButton() { return  $('button[type="submit"]'); }

  // REAL WORLD - LOGIN METHODS:
  async login (username, password) {
    // Wait for the page to load:
    browser.waitForReadyState('complete');
    // Populate Sign-In form & login:
    await this.EmailField.waitForDisplayed();
    await this.EmailField.setValue(username);
    await this.PasswordField.waitForDisplayed();
    await this.PasswordField.setValue(password);
    await this.SignInButton.waitForDisplayed();
    await this.SignInButton.click();
  }
}

export default new RWLoginPage();
