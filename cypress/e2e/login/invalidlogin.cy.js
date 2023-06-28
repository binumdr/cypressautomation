describe('MyTestSuite', function()
{
    it('invalidusernamelogin', function()
    {
        cy.visit('https://gold.noveltytechnology.com/login').wait(3000)
        cy.get('#username').type('test@noveltytechnology.com').wait(3000)
        cy.get('#password').type('P@ssw0rd@2023').wait(3000)
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu').click().wait(3000)
    })

    it('invalidpasswordlogin', function()
    {
        cy.visit('https://gold.noveltytechnology.com/login').wait(3000)
        cy.get('#username').type('tester@noveltytechnology.com').wait(3000)
        cy.get('#password').type('P@ssw0rd@202').wait(3000)
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu').click().wait(3000)
    })

})