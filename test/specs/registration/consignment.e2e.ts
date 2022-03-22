import LoginPage from "../../pageobjects/login.page";
import ProjectPage from "../../pageobjects/newProject.page";

describe("Registration consignment", () => {
  const ctx = {
    project: null,
  };

  before(async () => {
    await LoginPage.open();
    await LoginPage.login();

    await browser.debug();
    // await ProjectPage.open();
    // ctx.project = await ProjectPage.creteProject();
  });

  it("Create consignment", async () => {
    await ProjectPage.open();
    await ProjectPage.creteProject();

    expect($('[class*="button-panel_panel__"]')).toBeDisplayed();
  });
});
