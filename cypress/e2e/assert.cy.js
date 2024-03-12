describe('tipos de assert basicos',()=>{
    it('assert que coincide con el atributo-valor',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').should('have.attr','placeholder','First Name')
    })

    it('assert contaneado',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#lastName').should('be.visible').should('have.attr','placeholder','lorenxzo Name')
    })

    it('expect assert',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').then((variable1)=>{
            expect(variable1).to.be.visible
            expect(variable1).to.have.attr('placeholder','First Name')
        })
    })

    it.only('assert concat',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').then((objeto2)=>{
            assert.equal(objeto2.attr('placeholder'),'First Name')
        })
    })    
})