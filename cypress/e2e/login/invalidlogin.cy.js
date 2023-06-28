describe('MyTestSuite', function()
{
    it('invalidusernamelogin', function()
    {
        cy.visit('https://gold.noveltytechnology.com/login')
        cy.wait(3000)
        cy.get('#username').type('test@noveltytechnology.com')
        cy.wait(3000)
        cy.get('#password').type('P@ssw0rd@2023')
        cy.wait(3000)
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu').click()
        cy.wait(3000)
    })

    it('invalidpasswordlogin', function()
    {
        cy.visit('https://gold.noveltytechnology.com/login')
        cy.wait(3000)
        cy.get('#username').type('tester@noveltytechnology.com')
        cy.wait(3000)
        cy.get('#password').type('P@ssw0rd@202')
        cy.wait(3000)
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu').click()
        cy.wait(3000)
    })

})