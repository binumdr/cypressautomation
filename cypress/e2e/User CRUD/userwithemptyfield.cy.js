describe('MyTestSuite', function()
{
    it('usercreatewithallfieldempty', function()
    {
        //login
        cy.visit('https://gold.noveltytechnology.com/login',).wait(2000)
        cy.get('#username',{timeout:300}).type('tester@noveltytechnology.com')
        cy.get('#password',{timeout:300}).type('P@ssw0rd@2023')
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu',{timeout:1000}).click()

        //user with empty field create 
        cy.get('.css-kprzq2').click().wait(5000)
        cy.reload().wait(5000)
        cy.get('body').click()
        cy.get('.css-69i1ev > .MuiStack-root > .MuiButtonBase-root').click().wait(2000)
        cy.get('.MuiDialogActions-root.css-1bsw83b > .MuiButtonBase-root.css-1q39k4i').click()
    })

})