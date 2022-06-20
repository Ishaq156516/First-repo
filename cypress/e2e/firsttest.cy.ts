import { idText } from "typescript";

describe("First test in Typescript", function () {
  beforeEach(function () {
    cy.visit(Cypress.env("loginUrl"));
    // cy.fixture(Cypress.env("fixtureFile")).then((data) => {
    //   this.data = data;
    // });
  });
  it("Visit the Facebook URL", function () {
    cy.get("#login-email-input").click().type("musman@clickup.com");
    cy.get("#login-password-input").type("Jutt109781101@");
  });
});
