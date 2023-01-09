import RWHomePage from '../pages/realworld/rw.home.page.js'
import RWLoginPage from '../pages/realworld/rw.login.page.js'
import Accounts from '../assets/accounts.js'

describe('Test Suite for RealWorld.io mock webapp', () => {

  before(async () => {
    // Go somewhere random:
    browser.url('https://theuselessweb.com/');
    // Wait for the page to load:
    browser.waitForReadyState('complete');
  });

  it('Should login with valid account', async () => {
    await RWHomePage.open();
    // Wait for the page to load:
    await browser.waitForReadyState('complete');
    // Click the SignIn link:
    await RWHomePage.SignInLink.waitForDisplayed();
    await RWHomePage.SignInLink.click();
    // Login using valid email & password:
    await RWLoginPage.login(Accounts.basic_account.email, Accounts.basic_account.password);
    // Assert user was redirected to home-page:
    await expect(await RWHomePage.Logo.isDisplayed()).toBe(true);
    // Assert user has logged in successfully:
    await expect(RWHomePage.UserProfile).toHaveTextContaining(Accounts.basic_account.name);
  });
});
