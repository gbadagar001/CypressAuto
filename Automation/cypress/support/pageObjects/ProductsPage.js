class ProductsPage
{

    checkOutButtonCart()
    {
        return cy.get('a[class="nav-link btn btn-primary"]')
        //return cy.contains('Checkout')
        //return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    
}

export default ProductsPage;