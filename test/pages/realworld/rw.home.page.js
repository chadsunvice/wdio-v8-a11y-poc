import Page from '../common/page.js';

class RWHomePage extends Page {

  open () { return super.open('https://demo.realworld.io'); }

  // REAL WORLD - HOME PAGE SELECTORS:
  get Logo() { return $('a.navbar-brand'); }
  get HomeLink() { return $('a.nav-link[ui-sref="app.home"]'); }
  get SignInLink() { return $('a.nav-link[ui-sref="app.login"]'); }
  get RegisterLink() { return $('a.nav-link[ui-sref="app.register"]'); }
  get SettingsLink() { return $('a.nav-link[ui-sref="app.settings"]');}
  get NewArticleLink() { return $('a.nav-link[ui-sref="app.editor"]'); }
  get UserProfile() { return $('a[ui-sref^="app.profile.main"]'); } 

}

export default new RWHomePage();
