import Page from '../common/page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

  open () {
    return super.open('https://the-internet.herokuapp.com/login');
  }
  /**
   * define selectors using getter methods
   */
  get inputUsername () {
    return $('#username');
  }

  get inputPassword () {
    return $('#password');
  }

  get btnSubmit () {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new LoginPage();
