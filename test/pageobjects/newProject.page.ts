import Page from "./page";

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

  public async creteProject(name: string) {
    await this.date.setValue("01.03.2022");
    await this.name.setValue(name);
    await this.fullName.setValue(name);

    await this.createButton.click();
  }

  public open() {
    return super.open("specimens/project/new");
  }
}

export default new ProjectPage();
