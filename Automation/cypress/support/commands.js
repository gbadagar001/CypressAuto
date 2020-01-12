// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//import ATLoginPage from "../../support/pageObjects/ATLoginPage"


Cypress.Commands.add("selectProduct", (productName) => {

    cy.get('h4.card-title').each((el, index, list) => {

        if (el.text().includes(productName)) {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })

})

//const loginPage = new ATLoginPage()

Cypress.Commands.add("login", (username,pwd) => {

    cy.visit('https://online.actitime.com/pwc/login.do')
    cy.get('#username').type(username)
    cy.get('input.textField.pwdfield').type(pwd)
    cy.get('#loginButton').click()

})




//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
