describe('MyTestSuite', function()
{
    it('emptyusernamelogin', function()
    {
        cy.visit('https://gold.noveltytechnology.com/login').wait(3000)
        cy.get('#password').type('P@ssw0rd@2023').wait(3000)
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu').click().wait(3000)
    })
    it('emptypswdlogin', function()
    {
        cy.visit('https://gold.noveltytechnology.com/login',{timeout:3000})
        cy.get('#username',{timeout:3000}).type('tester@noveltytechnology.com')
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu',{timeout:3000}).click()
    })

})