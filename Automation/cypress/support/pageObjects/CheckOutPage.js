class CheckOutPage
{

    removeButton()
    {
        return cy.get('button.btn.btn-danger')
    }
    
    checkoutButton()
    {
        return cy.get('button.btn.btn-success')
    }

    continousShopingButton()
    {
        return cy.get('button.btn.btn-default')
    }

    tableProducts()
    {
        return cy.get('table.table.table-hover')
    }

    termsConditions()
    {
        return cy.get('[id="checkbox2"]')
    }

    coutryDynamicDropdown()
    {
        return cy.get('#country')
    }

    purchageButton()
    {
        return cy.get('[value="Purchase"]')
    }

    succcessMessage()
    {
        return cy.get('[class="alert alert-success alert-dismissible"]')
    }

}

export default CheckOutPage;