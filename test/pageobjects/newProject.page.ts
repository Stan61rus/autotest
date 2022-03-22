import Page from "./page";
import faker from "@faker-js/faker";

class ProjectPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get date() {
    return $('.MuiInputBase-adornedEnd [class*="date-input_input"]');
  }

  public get name() {
    return $("input[required]");
  }

  public get fullName() {
    return $("textarea[required]");
  }

  public get createButton() {
    return $("button.MuiButton-containedPrimary.MuiButton-disableElevation");
  }

  public async creteProject() {
    const project = {
      date: `${faker.date.past()}`,
      name: faker.company.companyName(),
    };

    await this.date.setValue(project.date);
    await this.name.setValue(project.name);
    await this.fullName.setValue(project.name);
    await this.createButton.click();

    return project;
  }

  public open() {
    return super.open("specimens/project/new");
  }
}

export default new ProjectPage();
