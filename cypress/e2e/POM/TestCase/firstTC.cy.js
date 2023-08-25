import LandingPage from "../Pages/landingPage.cy.js"
const landingPage= new LandingPage();
describe('POM Test',()=>{
    it('Conduit Login using POM',()=>{
        cy.visit('/');
        landingPage.clickSignInButton();
    })
})
