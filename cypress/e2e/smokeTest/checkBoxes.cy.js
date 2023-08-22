describe('Check boxes',()=>{
 it('Handling different checkboxes',()=>{
    cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/');
    cy.get('h1').contains('Checkbox');
    cy.get('#checkbox-v-2a').should('not.be.checked').check({force: true}).should('be.checked')
    cy.get('[name="checkbox-0 "]').check({force:true});
    cy.get('.ui-controlgroup-controls').find('[type="checkbox"]').click({force:true, multiple:true});

 })



} )