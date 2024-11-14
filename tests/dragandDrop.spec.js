const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})


test.describe('Drag and Drop page for Automation Testing Practice', () => {

    test('Box A drag and drop Box B', async ({ page }) => {
        await page.goto('/drag-and-drop')
        await expect(page.locator('h1:has-text("Drag and Drop page for Automation Testing Practice")', { exact: true })).toBeVisible()

        // await page.locator('#column-a').dragTo(page.locator('#column-b'))
        await page.locator('#column-a').hover()
        await page.mouse.down()
        await page.locator('#column-b').hover()
        await page.mouse.up()        

        await expect(page.locator('#column-a header:has-text("B")', { exact: true })).toBeVisible()
        await expect(page.locator('#column-b header:has-text("A")', { exact: true })).toBeVisible()

    })

    test('Box B drag and drop Box A', async ({ page }) => {
        await page.goto('/drag-and-drop')
        await expect(page.locator('h1:has-text("Drag and Drop page for Automation Testing Practice")', { exact: true })).toBeVisible()

        // await page.locator('#column-a').dragTo(page.locator('#column-b'))
        await page.locator('#column-b').hover()
        await page.mouse.down()
        await page.locator('#column-a').hover()
        await page.mouse.up()        

        await expect(page.locator('#column-a header:has-text("B")', { exact: true })).toBeVisible()
        await expect(page.locator('#column-b header:has-text("A")', { exact: true })).toBeVisible()
        
    })

    test('Box A drag and drop no Box B', async ({ page }) => {
        await page.goto('/drag-and-drop')
        await expect(page.locator('h1:has-text("Drag and Drop page for Automation Testing Practice")', { exact: true })).toBeVisible()
        await expect(page.locator('.col-md-9')).toContainText("This is a drag-and-drop demo page.")

        // await page.locator('#column-a').dragTo(page.locator('.col-md-9'))
        await page.locator('#column-a').hover()
        await page.mouse.down()
        await page.locator('.col-md-9').hover()
        await page.mouse.up()        

        await expect(page.locator('#column-a header:has-text("A")', { exact: true })).toBeVisible()
        await expect(page.locator('#column-b header:has-text("B")', { exact: true })).toBeVisible()
        
    })

    test('Box B drag and drop no Box A', async ({ page }) => {
        await page.goto('/drag-and-drop')
        await expect(page.locator('h1:has-text("Drag and Drop page for Automation Testing Practice")', { exact: true })).toBeVisible()

        await page.locator('#column-b').dragTo(page.locator('.col-md-9'))
        // await page.locator('#column-b').hover()
        // await page.mouse.down()
        // await page.locator('#column-a').hover()
        // await page.mouse.up()        

        await expect(page.locator('#column-a header:has-text("A")', { exact: true })).toBeVisible()
        await expect(page.locator('#column-b header:has-text("B")', { exact: true })).toBeVisible()
        
    })


    
})
