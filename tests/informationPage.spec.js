const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('My Browser Information page', () => {
    test('Show Browser Information', async ({ page }) => {
        await page.goto('/my-browser')
        await expect(page.locator('h1:has-text("My Browser Information page for Automation Testing Practice")')).toBeVisible()
        await page.click('#browser-toggle')
        
        const userAgentText = page.locator('.table')
        await expect(userAgentText).toContainText('User Agent')
        const codeNameText = page.locator('#browser-info')
        await expect(codeNameText).toContainText("CodeName")
        await expect(page.locator('#browser-info')).toContainText("Name")
        await expect(page.locator('#browser-info')).toContainText("Version")
        await expect(page.locator('#browser-info')).toContainText("Cookies Enabled")
        await expect(page.locator('#browser-info')).toContainText("Platform")
    })
    
    test('Hide Browser Information', async ({ page }) => {
        await page.goto('/my-browser')
        await expect(page.locator('h1:has-text("My Browser Information page for Automation Testing Practice")')).toBeVisible()
        await page.getByRole("button", {name: "Show Browser Information"}).click()
        await page.getByRole("button", {name: "Hide Browser Information"}).click()
        const hideBrowserInformation =  await page.locator('div #browser-info').isVisible()
        expect(hideBrowserInformation).toBe(false) 
    })
    
})
