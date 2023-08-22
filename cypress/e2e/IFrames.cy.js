describe('Iframes',()=>{
    it('iFrames',()=>{
        cy.visit('http://the-internet.herokuapp.com/iframe')
        cy.get('h3').contains('An iFrame containing the TinyMCE WYSIWYG Editor');
       // cy.get('body > #tinymce > p').then(el =>{
       //     cy.log(el.text());
       // })
        cy.get('#mce_0_ifr').within(function($iframe){
            const frame = $iframe.contents().find('#tinymce')
            cy.wrap(frame).clear().type('Hello Antonio how are you?');

        })
    
    })



})