
/// <reference types="Cypress" />

//Importing the page classes
import HomePage from "../../support/pageObjects/HomePage"
import ProductsPage from "../../support/pageObjects/ProductsPage"
import CheckOutPage from "../../support/pageObjects/CheckOutPage"


describe('Greenkart Validation suite', function () {
    //Creating objects of page classes
    const homePage = new HomePage()
    const productsPage = new ProductsPage()
    const checkoutPage = new CheckOutPage()

    //Get the data from fixtures
    before(function () {
        cy.fixture('TestAddSingleProductClickCheckout').then(function (data) {
            this.data = data
        })
    })


    it('Test Add Single Product Click Checkout Cart Test Case', function () {
        //Using Environment variable defined in Cypress.json file
        cy.visit(Cypress.env("url") + "/angularpractice/")
        //PageObject model implementation
        homePage.nameEditBox().type(this.data.name)
        //cy.get('select').select("Male")
        homePage.genderDropdown().select(this.data.gender)
        //Verify two way binding value should be name field value entered
        homePage.twoWayDataBinding().should('have.value', this.data.name)
        //Verify name field minimum chars that can entered
        homePage.nameEditBox().should('have.attr', 'minlength', '2')
        //Verify enterprneur radio button disabled
        homePage.enterpreneurCheckbox().should('be.disabled')
        //Click on Shop link
        homePage.shopTab().click()
        //Select one product
        cy.selectProduct(this.data.productName)
        //Click on checkout cart button
        productsPage.checkOutButtonCart().click()
        //Verify checkout buttopn present
        checkoutPage.checkoutButton().should('be.visible').should('be.enabled')
    })
})