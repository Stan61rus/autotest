import Page from "./page";
import faker from "@faker-js/faker";

class ConsignmentPage extends Page {
  public get dateInput() {
    return $('.MuiInputBase-adornedEnd [class*="date-input_input"]');
  }

  public get consignmentNumberInput() {
    return $("input[required]");
  }

  public get creteOrganizationButton() {
    return $$(".MuiBox-root button.MuiButton-containedPrimary")[0];
  }

  public get creteProjectButton() {
    return $$(".MuiBox-root button.MuiButton-containedPrimary")[1];
  }

  public async creteConsignment() {
    const consignment = {
      date: `${faker.date.past()}`,
      consignmentNumber: faker.datatype.uuid(),
    };

    await this.dateInput.setValue(consignment.date);
    await this.consignmentNumberInput.setValue(consignment.consignmentNumber);
    await this.creteOrganization();

    return consignment;
  }

  public async creteOrganization() {
    const nameOrganization = faker.company.companyName();
    await this.creteOrganizationButton.click();
    await $('[placeholder="Введите наименование"]').setValue(nameOrganization);

    return nameOrganization;
  }

  public async creteProject() {
    const nameProject = faker.company.companyName();
    await this.creteOrganizationButton.click();
    await $('[placeholder="Введите наименование"]').setValue(nameProject);

    return nameProject;
  }

  public open() {
    return super.open("specimens/consignment/new");
  }

  //   public get organization() {
  //     return;
  //   }

  //   public get project() {
  //     return;
  //   }

  //   public get createButton() {
  //     return $("button.MuiButton-containedPrimary.MuiButton-disableElevation");
  //   }
}

export default new ConsignmentPage();
