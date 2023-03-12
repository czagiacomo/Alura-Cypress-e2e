
describe('Registro de Usuário', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verificação de mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('Verificação de email inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('catharina');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
      
    })
    
    it('Verificação de caracteres mínimos do usuário', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('c');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
      
    })

    it('Verifição do nome de usuário em letra maiúscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('CATHARINA');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
      
    })

    it('Verifição de caracteres mínimos da senha', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
      
    })

const listaDeUsuarios = require('../../fixtures/novos-usuarios.json');

listaDeUsuarios.forEach(usuario => {
    it.only(`Registro de novo usuário válido: ${usuario.fullName} `, () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type(usuario.email);
        cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
        cy.get('input[formcontrolname="userName"]').type(usuario.userName);
        cy.get('input[formcontrolname="password"]').type(usuario.password);
        cy.contains('button', 'Register').click();
    })
})

})
