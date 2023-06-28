describe('MyTestSuite', function()
{
    it('loginpage', function()
    {
        cy.visit('https://gold.noveltytechnology.com/login')
        cy.wait(300)
        cy.get('#username').type('tester@noveltytechnology.com')
        cy.wait(300)
        cy.get('#password').type('P@ssw0rd@2023')
        cy.wait(300)
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu').click()
        cy.wait(3000)
        cy.get('.MuiButtonBase-root',{ multiple: true }).click()
        cy.wait(3000)
    })

})