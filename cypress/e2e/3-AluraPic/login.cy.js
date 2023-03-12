describe('Login de Usuário', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Login de usuário valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');
       
    })

    it('Login de usuário inválido', () => {
        cy.login('catharina', '12345678')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

})
