describe('Dropdown Functionality',()=>{
    it('Handling Static Dropdown',()=>{

        cy.visit('https://seleniumbase.io/demo_page');
        cy.get('h1').contains('Demo Page');
        cy.get('#mySelect').select('75%').should('have.value','75%');
        cy.get('#mySelect > option').its('length').should('eq',4);

        cy.get('#myDropdown').contains('Hover Dropdown').click({force:true});
    })

    it('Handling Multiple Dropdown',()=>{

        cy.visit('https://demos.telrik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx');
        cy.get('h1').contains('Demo Page');
        cy.get('#mySelect').select('75%').should('have.value','75%');
        cy.get('#mySelect > option').its('length').should('eq',4);

        cy.get('#myDropdown').contains('Hover Dropdown').click({force:true});
    })
    it.only('Handling Multiple Dropdown',()=>{

        cy.visit('https://demo.mobiscroll.com/select/multiple-select');
        cy.get('.demo-description-title').contains('Multiple select');
        cy.get('.mbsc-textfield-tags').should('be.visible');
        cy.get('#multiple-select-select').invoke('attr','style', 'display:none').select('4',{force:true});
       // cy.get('[option[value="4"]').click();
     //   cy.contains('Health & Beauty').click();
    }
    )

})