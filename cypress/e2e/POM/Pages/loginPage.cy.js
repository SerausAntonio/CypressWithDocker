class LoginPage{

getEmail(){ return 'input[type="email"]'}
getPassword(){ return 'input[type="password"]'}
getSignIn(){return 'button[type="submit"]'}

enterEmail(email){
    cy.get(this.getEmail()).type(email)
}
enterPassword(password){
    cy.get(this.getPassword()).type(password)
}
clickSignInButton(){
    cy.get(this.getSignIn()).click()
}
}

export default LoginPage;