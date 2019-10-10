
/// <reference types="Cypress" />

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
        cy.fixture('TestAddMultipleProductsAndValidateTotalPrices').then(function (data) {
            this.data = data
        })
    })


    it('Test Add Multiple Products And Validate Total Prices Test Case', function () {

        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        //Using Environment variable defined in Cypress.json file
        cy.visit(Cypress.env("url") + "/angularpractice/")

        //PageObject model implementation
        //cy.get('input[name="name"]:nth-child(2)').type("Giriyappa Badagar")
        homePage.nameEditBox().type(this.data.name)

        //cy.get('select').select("Male")
        homePage.genderDropdown().select(this.data.gender)

        //cy.get(':nth-child(4) > .ng-untouched').should('have.value', "Giriyappa Badagar")
        homePage.twoWayDataBinding().should('have.value',this.data.name)

        //cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        homePage.nameEditBox().should('have.attr', 'minlength', '2')

        //cy.get('#inlineRadio3').should('be.disabled')
        homePage.enterpreneurCheckbox().should('be.disabled')

        //Click on Shop link
        //cy.get(':nth-child(2) > .nav-link').click()
        homePage.shopTab().click()

        this.data.productName.forEach(element => {
            cy.selectProduct(element)
        });

        productsPage.checkOutButtonCart().click()
        var sum = 0
        var total = 0
        cy.get('tr td:nth-child(4) strong').each((el, index, list) => {
            const amount = el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            total = res[1].trim()

            expect(Number(total)).to.equal(sum)
        })
    })
})