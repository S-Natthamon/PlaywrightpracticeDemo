const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('My IP Information page for Automation Testing Practice', () => {
    test('My computer IP Address', async ({ page }) => {
        await page.goto('/my-ip')
        //await expect(page.locator('h1:has-text("My IP Information page for Automation Testing Practice")', { exact: true })).toBeVisible()
        await page.waitForSelector('body')
        const ipAddressDefinition = await page.textContent('body')
        console.log(ipAddressDefinition)
        await page.screenshot({ path: 'ip-address-info.png' })
    })
    
    
})
