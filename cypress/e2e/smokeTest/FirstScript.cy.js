/// <reference types = "cypress"/>
describe('Login Functionality',()=>{
    it('Login Test using conduit',()=>{

        cy.visit('https://react-redux.realworld.io/');
        cy.get('a').contains('conduit');
        cy.get('a').contains('Sign in').click();
        cy.get('h1').contains('Sign In');
        cy.get('[placeholder="Email"]').type('cypressdemo@gmail.com');
        cy.get('[placeholder="Password"]').type('cypressdemo');
        cy.get('.btn').contains('Sign in').click();
    })


})