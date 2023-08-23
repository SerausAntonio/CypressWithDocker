/// <reference types="cypress"/>
describe('Hooks Conduit',()=>{
    beforeEach('Log me in',()=>{
        cy.visit("https://react-redux.realworld.io/");
        cy.contains('Sign in').click();
        cy.get('input[type="email"]').type('cypressdemo@gmail.com');
        cy.get('input[type="password"]').type('cypressdemo');
        cy.get('button[type="submit"]').click();
        cy.contains('Settings').click();
        cy.contains('Or click here to logout.').click();

    } )
    it('Create a new post',()=>{
        cy.log(cy.url());



    })



})