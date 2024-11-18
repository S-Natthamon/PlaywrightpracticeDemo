const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Secure File Download for Automation Testing Practice', () => {

    test('Secure File Download', async ({ page }) => {
        await page.goto('/download-secure')

        

    })
    
    
})
