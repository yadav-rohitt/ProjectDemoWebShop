import HomePage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SocialmediaPage from "../pages/SocialmediaPage";



const homepage = new  HomePage();
const  registerPage = new RegisterPage();
const loginPage = new LoginPage();
const socialmediaPage = new SocialmediaPage();


describe('Demo Web Shop Home Page Test', () => {
    it('Check Homepage Functionality', () => {
        homepage.visit();
        homepage.clickRegister();
        homepage.openCategory('Computers');
    });

    it('Should open the Computers category', () => {
        homepage.visit();
        homepage.openCategory('Computers');
    });
    it('Should subscribe to the newsletter', () => {
        homepage.visit();
        homepage.subscribeNewsletter('test@gmail.com');

    });

    it('Verify customer details shown', () => {
        homepage.visit();
        homepage.customer();
    });
    it('My Account Details shown', () => {
        homepage.visit();
        homepage.myAccount();
    });
    it('Check the Footer Section Visible', () => {
        homepage.visit();
        homepage.footer();
    });
});
describe('Register Demowebshop Tests', () => {
    it('Should register a new user', () => {
        homepage.visit();
        homepage.clickRegister();

        registerPage.selectGender('M');
        registerPage.enterFirstName('Aadi');
        registerPage.enterLastName('Roy');
        registerPage.enterEmail('aaditya.roy@gmail.com');
        registerPage.enterPassword('Password123');
        registerPage.confirmPassword('Password123');
        registerPage.submit();
    });
    it('Should register with blank fields', () => {
        homepage.visit();
        homepage.clickRegister();
        registerPage.submit();
    });
    it('Should be Check the already registerd email id', () => {
        homepage.visit();
        homepage.clickRegister();

        registerPage.selectGender('M');
        registerPage.enterFirstName('Aaditya');
        registerPage.enterLastName('Singh');
        registerPage.enterEmail('aaditya.roy@gmail.com');
        registerPage.enterPassword('Password123');
        registerPage.confirmPassword('Password123');
        registerPage.submit();
    });
    it('Should be Check the Invalid details', () => {
        homepage.visit();
        homepage.clickRegister();

        registerPage.selectGender('M');
        registerPage.enterFirstName('123');
        registerPage.enterLastName('Singh');
        registerPage.enterEmail('@gmail.com');
        registerPage.enterPassword('-');
        registerPage.confirmPassword('-');
        registerPage.submit();
    });
 });
describe('Login Page', () => {
    it('Should be check the valid details', () => {

        homepage.visit();
        homepage.clickLogin();

        loginPage.validLogin('aaditya.roy@gmail.com');
        loginPage.validPassword('Password123');
    });
    it('Should be check invalid email', () => {
        homepage.visit();
        homepage.clickLogin();

        loginPage.invalidEmail('adity.roy.com')
        loginPage.invalidPassword('1111!')
    });
    it('Should be check with blank details', () => {
        homepage.visit();
        homepage.clickLogin();

        loginPage.invalidEmail()
        loginPage.invalidPassword()

    });
    it('Should be check forget password', () => {
        homepage.visit();
        homepage.clickLogin();

        loginPage.forgetPassword();
        loginPage.validLogin('aaditya.roy@gmail.com');
        loginPage.submitForgotPassword();
    });
});
describe('Logout Functionality Test', () => {
    it('Should log out successfully', () => {
        homepage.clickLogoutt
        homepage.verifyUserLoggedOut();
    });
});
describe('Add to Cart Tests', () => {
    it('Should add an item to the cart successfully', () => {
        homepage.visit();
        homepage.addItemToCart('Laptop');
    });
 });

describe('Social Media Links Tests', () => {
    it('Should navigate to Facebook page are opend', () => {
        homepage.visit();
        socialmediaPage.clickFacebook();

    });

    it('Should click to Twitter page and open the page', () => {
        homepage.visit();
        socialmediaPage.clickTwitter();

     });


});

