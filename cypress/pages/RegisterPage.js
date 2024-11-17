class RegisterPage{

    visit() {
        cy.visit('https://demowebshop.tricentis.com/');
    }
   clickRegister(){

      cy.get('.ico-register').click();
   }
   selectGender(gender) {
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(1)');
    cy.get(':nth-child(2) > .form-fields > :nth-child(1) > :nth-child(2)').click();
}

enterFirstName(firstName) {
    cy.get('#FirstName').type(firstName);

}

enterLastName(lastName) {
    cy.get('#LastName').type(lastName);
     }

    enterEmail(email) {
    cy.get('#Email').type(email);
      }

        enterPassword(password) {
    cy.get('#Password').type(password);
     }

    confirmPassword(password) {
    cy.get('#ConfirmPassword').type(password);
     }

     submit() {
    cy.get('#register-button').click();

      }
}
export default RegisterPage