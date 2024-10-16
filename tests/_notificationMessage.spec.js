const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Notification Message', () => {
    test('Action Successful', async ({ page }) => {
        await page.goto('/notification-message')
        await expect(page.locator('h1:has-text("Notification Message page for Automation Testing Practice")')).toBeVisible()
        await page.locator('button.btn-close').click()

        await page.click('a[href="/notification-message"]');
        await expect(page.locator('div[id="flash-message"]')).toHaveText("Action successful")
    })
    
    test('Action Unsuccessful', async ({ page }) => {
        await page.goto('/notification-message')
        await expect(page.locator('h1:has-text("Notification Message page for Automation Testing Practice")')).toBeVisible()
        await page.locator('button.btn-close').click()

        await page.click('a[href="/notification-message"]');
        await expect(page.locator('div[id="flash-message"]')).toHaveText("Action successful")
        await page.click('a[href="/notification-message"]');
        await expect(page.locator('div[id="flash-message"]')).toHaveText("Action unsuccessful, please try again") 
    })
    
})

