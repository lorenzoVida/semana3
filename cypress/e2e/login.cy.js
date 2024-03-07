describe('Suite de pruebas de Login',() =>{
    it('usuario incorrecto',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('badUser')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.contains('Invalid credentials').should('be.visible')
    })

    it.only('boton dinamico',()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('button').eq(3).click()
       // cy.contains('Click Me').click()
        cy.get("#dynamicClickMessage").should('be.visible').and('contain','You have done a dynamic click')
    })

})