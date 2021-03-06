import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $('[type="text"]');
  }

  public get inputPassword() {
    return $('[type="password"]');
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login() {
    await this.inputUsername.setValue(process.env.LOGIN);
    await this.inputPassword.setValue(process.env.PASSWORD);
    await this.btnSubmit.click();

    browser.waitUntil(async () => {
      let pageUrl = await browser.getUrl();
      return pageUrl.indexOf("specimens") > -1;
    });
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("login");
  }
}

export default new LoginPage();
