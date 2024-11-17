class HomePage {
    visit() {
        cy.visit('https://demowebshop.tricentis.com/');
    }

    clickLogin() {
        cy.get('.ico-login').click();
    }

    clickRegister() {
        cy.get('.ico-register').click();
    }
    verifyUserLoggedIn(username) {
        cy.contains(`Welcome, ${username}`).should('be.visible');
    }
    openCategory(categoryName) {
        cy.get('.top-menu')
            .contains(categoryName)
            .click();
    }
    verifyCategoryPageOpened(categoryName) {
        cy.get('.page-title').should('contain.text', categoryName);
    }

    viewFeaturedProduct(productName) {
        cy.get('.featured-products')
            .contains(productName)
            .click();
    }

    verifyProductPage(productName) {
        cy.get('.product-title').should('contain.text', productName);
    }
    subscribeNewsletter(email) {
        cy.get('#newsletter-email').type(email);
        cy.get('#newsletter-subscribe-button').click();
    }
    // searchForProduct(searchTerm) {
    //     cy.get('#small-searchterms').type(searchTerm);
    //     cy.get('.search-box-button').click();
    // }

    verifySearchResults(searchTerm) {
        cy.get('.search-results').should('contain.text', searchTerm);
    }
    clickLogoutt(){
        cy.get('.ico-logout').click();
    }
    verifyUserLoggedOut(){

        cy.get('.ico-logout').should('not.exist');
    }
    addItemToCart(Laptop) {
        cy.contains(Laptop)
            .parents('.product-item')
            .find('.product-box-add-to-cart-button')
            .click();
    }

    customer(){
        cy.get('.column.customer-service')
    }
    myAccount(){
        cy.get('.column.my-account').click()
     }
     footer(){
        cy.get('.footer-menu-wrapper').should('be.visible');
     }
}
export default HomePage