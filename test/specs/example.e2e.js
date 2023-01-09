import LoginPage from '../pages/mvp/login.page.js'
import SecurePage from '../pages/mvp/secure.page.js'

describe('Login inside TheInternet Heroku webapp', () => {
  it('Should be able to login with valid credentials', async () => {
    await LoginPage.open();

    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      'You logged into a secure area!');
  });
});
