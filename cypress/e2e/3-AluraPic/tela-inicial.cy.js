
describe('Funções da Tela Inicial', () => {

    beforeEach(() => {
      cy.visit('/')
    })

    it('Verificação de Mensagens da Tela Inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
 
    })

    it('Verificação de Botão de Login na Tela Inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('Catharina');
        cy.get('input[formcontrolname="password"]').type('1234');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('Verificação do Nome da Aplicação na Tela Inicial', () => {
        cy.contains('a' ,' ALURAPIC ').should('be.visible');
    })

    it('Verificação de Menu Lateral da Tela Inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })
    
})