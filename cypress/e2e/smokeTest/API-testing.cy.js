describe("API - Testing",()=>{
   
    it('GET Method',()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then(Response =>{
            cy.log(JSON.stringify(Response.body.data[0].email));
            expect(Response.status).equal(200);
            expect(JSON.stringify(Response.body.data[0].email)).equal('michael.lawson@reqres.in');
        });


    })

    it('POST - request',()=>{
        cy.request('POST','https://reqres.in/api/users',{"name": "morpheus",
    "job": "leader"}).then(response =>{

          expect(response.status).equal(201);
          cy.log(JSON.stringify(response.body));
          expect(response.body.name).equal('morpheus');
        })

    })

    it('PUT request',()=>{
        cy.request('PUT','https://reqres.in/api/users/2',{"name": "morpheus",
        "job": "zion resident"}).then(response =>{
            expect(response.status).equal(200);
            cy.log(JSON.stringify(response.body));
            expect(response.body.job).equal('zion resident');
        })
     })
 
     it('DELETE - Method',()=> {
        cy.request('DELETE','https://reqres.in/api/users/2').then(response =>{
        cy.log(response.status);
        expect(response.status).equal(204);
       })
    })
})