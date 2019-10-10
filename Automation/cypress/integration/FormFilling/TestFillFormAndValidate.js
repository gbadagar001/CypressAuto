
/// <reference types="Cypress" />

import HomePage from "../../support/pageObjects/HomePage"


describe('Greenkart Validation suite', function () {
  //Creating objects of page classes
  const homePage = new HomePage()

  //Get the data from fixtures
  before(function () {
    cy.fixture('TestFillFormAndValidate').then(function (data) {
      this.data = data
    })
  })


  it('Test Fill Form And Validate Test Case', function () {
    //Using Environment variable defined in Cypress.json file
    cy.visit(Cypress.env("url")+"/angularpractice/")

    //PageObject model implementation
    //cy.get('input[name="name"]:nth-child(2)').type("Giri")
    homePage.nameEditBox().type(this.data.name)

    //cy.get('select').select("Male")
    homePage.genderDropdown().select(this.data.gender)

    //cy.get(':nth-child(4) > .ng-untouched').should('have.value', "Giri")
    homePage.twoWayDataBinding().should('have.value', this.data.name)

    //cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
    homePage.nameEditBox().should('have.attr', 'minlength', '2')

    //cy.get('#inlineRadio3').should('be.disabled')
    homePage.enterpreneurCheckbox().should('be.disabled')
  })
})