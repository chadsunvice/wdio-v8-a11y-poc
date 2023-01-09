import Page from '../common/page.js';
import MockData from '../../assets/mocks.js';

const signInData = MockData.basic_sign_in;

class DeelSignUp extends Page {

  open() { return super.open('https://www-dev-1xvlyp49rj.deel.training/'); }

  // DEEL: SIGN-IN PAGE SELECTORS:
  get DeelLogo() { return $('a.logo'); }
  get SignUpLink() { return $('button[data-qa="sign-up"]'); }
  get AccountTypeField() { return $('div.sign-up-account-type-toggle'); }
  get AccountTypeBusiness() { return $('button[value="client"]'); }
  get AccountTypeClient() { return $('button[value="contractor"]'); }
  get AccountTypeEmployee() { return $('button[value="employee"]'); }
  get NextButton() { return $('button.MuiButton-containedPrimary'); }

  // SignIn form selectors:
  get FirstName() { return $('input[id=":r1:"]'); }
  get LastName() { return $('input[id=":r2:"]'); }
  get Email() { return $('input[id=":r3:"]'); }
  get Password() { return $('input[id=":r5:"]'); }
  get DeelDropdown() { return $('div#mui-component-select-source') }
  // !Note: The index can be random, or passed based on features tested.
  //        Currently read from mocks/fixtures.
  get DropDownGenericOption() { return $(`li.MuiMenuItem-root:nth-of-type(${signInData.dropdownIndex})`) }
  get CreateAccountButton() { return $('button.MuiButton-containedPrimary'); }

  // SignUp in Deel webapp:
  async fillSignUpForm() {
    await this.FirstName.waitForDisplayed();
    await this.FirstName.setValue(signInData.firstname);
    await this.LastName.waitForDisplayed();
    await this.LastName.setValue(signInData.lastname);
    await this.Email.waitForDisplayed();
    await this.Email.setValue(signInData.email);
    await this.Password.waitForDisplayed();
    await this.Password.setValue(signInData.password);
    await this.DeelDropdown.waitForDisplayed();
    await this.DeelDropdown.click();
    await this.DropDownGenericOption.waitForDisplayed();
    await this.DropDownGenericOption.click();
  }
}

export default new DeelSignUp();
