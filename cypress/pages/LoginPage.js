class LoginPage{

    // visit() {
    //     cy.visit('https://demowebshop.tricentis.com/');
    // }
    validLogin() {
        cy.get('#Email').type('aaditya.roy@gmail.com');

    }
    validPassword(){
        cy.get('#Password').type('Password123');

    }
    invalidEmail(){
        cy.get('#Email').type('adity1');
    }
   invalidPassword(){
    cy.get('#Password').type('1111!');
   }
   forgetPassword(){
    cy.get('.forgot-password').contains('Forgot password?').click();
    cy.get('.email')
   }
   submitForgotPassword(email) {

    cy.get('.email');
    cy.get('.button-1.password-recovery-button').contains('Recover').click();
}


}
export default LoginPage