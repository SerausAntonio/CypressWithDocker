describe('Webtables',()=>{
    it('Webtables',()=>{
        cy.visit('http://the-internet.herokuapp.com/tables');
        cy.get('h3').contains('Data Tables');
        cy.get('#table1 > tbody > tr').its('length').should('eq',4);
        
        cy.get('#table1').contains('td','http://www.jdoe.com').should('be.visible');
        cy.get('#table1 > tbody > tr:nth-child(1) > td:nth-child(3)')
        .contains('td','jsmith@gmail.com').should('be.visible');

        cy.get('#table1>tbody>tr>td:nth-child(2)').each(($el, index)=>{
            const fname = $el.text();
            if (fname.includes('Frank')){
                cy.get('#table1>tbody>tr>td:nth-child(4)').eq(3).then($due =>{
                    const dueAmount = $due.text();
                    expect(dueAmount).to.equal('$50.00');

                })
               cy.log(index); 
            }
            //cy.log($el.text(), index);
        })

    })



})