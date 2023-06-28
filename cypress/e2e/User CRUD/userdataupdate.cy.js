describe('MyTestSuite', function()
{
    it('userdataupdate', function()
    {
       /*-----login---*/
       
        cy.visit('https://gold.noveltytechnology.com/login').wait(300)
        cy.get('#username').type('tester@noveltytechnology.com').wait(300)
        cy.get('#password').type('P@ssw0rd@2023').wait(300)
        cy.get('#root > div.MuiBox-root.css-1b3jhod > div.MuiBox-root.css-18b97fs > div > form > div.MuiBox-root.css-xuhmcu').click().wait(500)   

        /*-----user add with same email---*/
        cy.get('.css-kprzq2').click().wait(3000)
        cy.get('body',{timeout:2000}).click()
        cy.get(':nth-child(1) > .MuiTableCell-alignRight > .MuiButtonBase-root').click().wait(1000)
        cy.get('.MuiList-root > :nth-child(1) > .MuiButtonBase-root').click().wait(1000)
        cy.get('#middleName',{timeout:1000}).type('a')
        cy.get('.MuiDialogActions-root.css-1bsw83b > .MuiButtonBase-root.css-1q39k4i').click()
    })

}) 