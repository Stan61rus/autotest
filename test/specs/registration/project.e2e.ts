import LoginPage from "../../pageobjects/login.page";
import ProjectPage from "../../pageobjects/newProject.page";

describe("Registration project", () => {
  it("Login", async () => {
    await LoginPage.open();
    await LoginPage.login();

    await expect(browser).toHaveUrlContaining("specimens");
  });

  it("Create project", async () => {
    await ProjectPage.open();
    await ProjectPage.creteProject();

    expect($('[class*="button-panel_panel__"]')).toBeDisplayed();
  });
});
