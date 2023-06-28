describe('MyTestSuite', function()
{
    it('usercreatewithsameemail', function()
    {
       /*-----login---*/
       
        cy.visit('https://gold.noveltytechnology.com/login').wait(300)
        cy.get('#username').type('tester@noveltytechnology.com').wait(300)
        cy.get('#password').type('P@ssw0rd@2023').wait(300)
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu').click().wait(500)   

        /*-----user add with same email---*/
        cy.get('.css-kprzq2').click().wait(3000)
        cy.get('body',{timeout:2000}).click()
        cy.get('.css-69i1ev > .MuiStack-root > .MuiButtonBase-root').click().wait(2000)
        cy.get('.MuiDialogContent-root > :nth-child(1) > .MuiGrid-grid-xs-6 > .MuiFormControl-root > .MuiInputBase-root > #firstName').type('Sita').wait(3000)
        cy.get('.MuiGrid-root.css-13bpl69 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Lama').wait(2000)
        cy.get('#dob',{timeout:2000}).type('11/23/1999')
        cy.get('#gender').click( ).wait(3000)
        cy.get('[data-value="Female"]').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #email',{timeout:2000}).type('bnu@gmail.com')
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > #phone',{timeout:2000}).type('9841235671')
        cy.get('.MuiDialogActions-root.css-1bsw83b > .MuiButtonBase-root.css-1q39k4i').click()
    })

})    