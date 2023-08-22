/// <reference types = "cypress"/>
describe('Handling Alerts',()=>{
   beforeEach('Go to homepage',()=>{
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
   })
 
   it('Simple alert',()=>{
       cy.contains('JavaScript Alerts');    
       cy.contains('Click for JS Alert').click();
       cy.on('window:alert',(str)=>{
        expect(str).to.equal('I am a JS Alert');
       })     
       cy.get('#result')
       .should('contain','You successfully clicked an alert');
   })
   it('Confirmation Alert',()=>{
       cy.contains('Click for JS Confirm').click();
       cy.on('window:confirm',(str)=>{
        expect(str).to.equal('I am a JS Confirm');
       })
       cy.get('#result').should('contain','You clicked: Ok');
    })
    it('Cancel Alert',()=>{
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('I am a JS Confirm');
            return false;
           })
           cy.get('#result').should('contain','You clicked: Cancel');
     })
     it.only('Prompt Text box',()=>{
        cy.contains('Click for JS Prompt').click();
        cy.window().then(function($win){
            cy.stub($win,'prompt').returns('Hello Alert')
            cy.contains('Click for JS Prompt').click();
        })
           cy.get('#result').should('contain','You entered: Hello Alert');
     })
})