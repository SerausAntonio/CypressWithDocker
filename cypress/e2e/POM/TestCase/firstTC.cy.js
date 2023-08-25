
/// <reference types ="cypress"/>

import LandingPage from "../Pages/landingPage.cy.js"
import LoginPage from "../Pages/loginPage.cy.js"
import HomePage from "../Pages/homePage.cy.js"
const landingPage= new LandingPage();
const loginPage= new LoginPage();
const homePage = new HomePage();

describe('POM Test',()=>{
    beforeEach('Login Credentials',function(){
        cy.fixture('credentials.json').as('data');
    
    })
    it('Conduit Login using POM',function(){
        cy.visit('/');
        landingPage.clickSignInButton();
        loginPage.enterEmail(this.data.email);
        loginPage.enterPassword(this.data.password);
        loginPage.clickSignInButton();
        homePage.checkYourFeedIsVisible();
        homePage.clickSettingsButton();
    })    
})
