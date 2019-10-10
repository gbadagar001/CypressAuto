class HomePage
{

    nameEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    emailEditBox()
    {
        return cy.get('[name="email"]')
    }

    passwordEditBox()
    {
        return cy.get('#exampleInputPassword1')
    }

    loveIcecreamsCheckbox()
    {
        return cy.get('#exampleCheck1')
    }

    dob()
    {
        return cy.get('[name="bday"]')
    }

    buttonSubmit()
    {
        return cy.get('[value="Submit"]')
    }
    
    twoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    genderDropdown()
    {
        return cy.get('select')
    }

    enterpreneurCheckbox()
    {
        return cy.get('#inlineRadio3')
    }

    shopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;