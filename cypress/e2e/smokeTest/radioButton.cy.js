describe('Radio buttons',()=>{
    it('Handling different radio buttons',()=>{
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/');
        cy.get('h1').contains('Radio buttons');
        cy.get('#radio-choice-0a')
        .should('not.be.checked').click({force:true});
        cy.get('#radio-choice-0b')
        .should('not.be.checked')
        .click({force:true});
        cy.get('#radio-choice-v-2b')
        .should('not.be.checked')
        .click({force:true});
    })



})