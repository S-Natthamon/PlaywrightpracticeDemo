const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})


test.describe('Shadow DOM page for Automation Testing Practice', () => {
    
    test('Shadow DOM Here s a basic button example.', async ({ page }) => {
        await page.goto('/shadowdom')
        await expect(page.locator('h1:has-text("Shadow DOM page for Automation Testing Practice")', { exact: true })).toBeVisible()
        
        const shadowHost = await page.waitForSelector('#my-btn.btn')
        const shadowRoot = await shadowHost.shadowRoot()
        const button = await shadowRoot.$('#my-btn.btn')
        await button.click()
        await page.screenshot({ path: 'shadowdom-interaction.png' })
        //const button = await shadowRoot.$('div.some-container button')

    })

    test('Shadow DOM This button is inside a Shadow DOM.', async ({ page }) => {
        
    })
    
    
})
