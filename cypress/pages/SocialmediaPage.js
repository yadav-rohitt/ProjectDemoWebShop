class SocialmediaPage{
    // visit() {
    //     cy.visit('https://demowebshop.tricentis.com/');
    // }
    clickFacebook() {

        cy.get('.facebook > a').click();
        cy.url();
    }

    clickTwitter() {

        cy.get('.twitter > a').click();
        cy.url();
    }


}
export default SocialmediaPage