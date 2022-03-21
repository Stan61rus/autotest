import LoginPage from "../pageobjects/login.page";
import ProjectPage from "../pageobjects/newProject.page";
import faker from "@faker-js/faker";

describe("Test login", () => {
  it("Login", async () => {
    await LoginPage.open();
    await LoginPage.login("adw", "adw");

    await expect(browser).toHaveUrlContaining("specimens");
  });

  it("Create project", async () => {
    await ProjectPage.open();
    await ProjectPage.creteProject(faker.company.companyName());

    expect($('[class*="button-panel_panel__"]')).toBeDisplayed();
  });
});
