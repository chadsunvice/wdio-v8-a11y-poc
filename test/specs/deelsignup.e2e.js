// Please implement a test based on the following scenario:
// URL: https://www-dev-1xvlyp49rj.deel.training/
// Steps:
// 1. Open the Login page
// 2. Navigate to Sign Up page
// 3. Select a Usage type (Business or Contract)
// 4. Click Next
// 5. Fill the Sign up form
// 6. Verify that the button "Create Your Deel account" is enabled

import DeelSignUp from '../pages/deel/signup.page.js'

describe('Deel SignUp Test Suite', () => {

  it('Should be able to sign up inside Deel as Business', async () => {
    // Navigate to Deel login:
    await DeelSignUp.open();
    // Wait for the page to load:
    browser.waitForReadyState('complete');
    await DeelSignUp.DeelLogo.waitForDisplayed(15000);
    // Assert user is on Login page:
    await expect(await browser.getUrl()).toContain('/login');
    // Click SignUp link:
    await DeelSignUp.SignUpLink.waitForDisplayed();
    await DeelSignUp.SignUpLink.click();
    // Assert user is on the SignUp page:
    await expect(await browser.getUrl()).toContain('/signup');
    // Check SignUp page:
    await DeelSignUp.AccountTypeField.isDisplayed();
    // Click Next button:
    await DeelSignUp.NextButton.click();
    // Assert user is taken to SignIn form:
    await DeelSignUp.FirstName.waitForDisplayed();
    await expect(await browser.getUrl()).toContain('/create-profile?user-type=client');
    // SignUp to Deel webapp:
    await DeelSignUp.fillSignUpForm();
    await expect(DeelSignUp.CreateAccountButton).not.toBeEnabled();
    // Check 'Create Your Deel Account' button:
    await expect(DeelSignUp.CreateAccountButton).toBeEnabled();
    await expect(DeelSignUp.CreateAccountButton).toHaveText('Create Your Deel Account');
  });
});
