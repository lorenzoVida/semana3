describe('esperas en cypess',()=>{
    it('wait',()=>{
        cy.visit('https://automationtesting.co.uk/loader.html')
        cy.wait(9000)
        cy.get('#loaderBtn').click()
        cy.get('#p_wording').should('contain','And you have clicked the button!')
    })

    it('wait por cada elemento',()=>{
        cy.visit('https://automationtesting.co.uk/loader.html')
        cy.get('#loaderBtn',{timeout:4000}).click()

    })


})