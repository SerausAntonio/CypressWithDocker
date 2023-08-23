/// <reference types="cypress"/>
describe('Hooks Conduit',()=>{
    
    beforeEach('Go to the loginpage',()=>{
            cy.fixture('credentials.json').then((DATA)=>{
            cy.LogMeIn(DATA.email,DATA.password);
         }) 
    } )
    it('Create a new post',()=>{
        cy.log(cy.url());
        cy.contains('New Post').click();
        cy.get('[placeholder="Article Title"]').type('Demo Post111111');
        cy.get('[placeholder="What\'s this article about?"]').type('Demo Post for testing');
        cy.get('[placeholder="Write your article (in markdown)"]').type('This is a Demo post for testing');
        cy.get('input[placeholder="Enter tags"').type('Demo');
        cy.get('button.btn').click();
        cy.LogMeOut();
    })



})