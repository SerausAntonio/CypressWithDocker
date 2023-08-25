describe('Mocks And Stubs',()=>{
    beforeEach('Go to the loginpage',()=>{
        cy.fixture('credentials.json').then((DATA)=>{
        cy.LogMeIn(DATA.email,DATA.password);
     }) 
} )
    it('Mocking',()=>{
        cy.log(cy.url());

    })




})