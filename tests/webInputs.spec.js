const {test, expect} = require('@playwright/test')
const { describe } = require('node:test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Web inputs page for Automation Testing Practice', async () => {

//data-test
let webInputNumber = 23;
let webInputText = "Automation Testing"
let webInputPassword = "Test!@#123"
let webInputDate = "2024-10-24"

    test('Input: number', async ({ page }) => {
        await page.goto("/inputs")
        await expect(page.locator('h1:has-text("Web inputs page for Automation Testing Practice")', { exact: true })).toBeVisible()
        await page.fill('#input-number', String(webInputNumber))
        await page.locator('button:has-text("Display Inputs")').click()
        await expect(page.locator('#output-number')).toContainText(String(webInputNumber))
        const webOutputNumber = await page.getByLabel('output-number').isVisible()
        expect(webOutputNumber).toBe(false)
        
    })

    test('Input: Text', async ({ page }) => {
        await page.goto("/inputs")
        await page.locator('#input-text').fill(webInputText)
        //Clicks Display inputs button
        await page.getByRole("button", {name: "Display Inputs"}).click()
        await expect(page.locator('#output-text')).toHaveText(webInputText)
        //Clicks Clear Output button
        await page.getByRole("button", {name: "Clear Inputs"}).click()
        const webOutputText =  await page.getByLabel('Output: Text').isVisible()
        expect(webOutputText).toBe(false)
    })

    test('Input: Password', async ({ page }) => {
        await page.goto("/inputs")
        await page.locator('#input-password').fill(webInputPassword)
        //Clicks Display inputs button
        await page.getByRole("button", {name: "Display Inputs"}).click()
        await expect(page.locator('#output-password')).toHaveText(webInputPassword)
        await page.getByRole("button", {name: "Clear Inputs"}).click()
        const webOutputPassword =  await page.getByLabel('Output: Password').isVisible()
        expect(webOutputPassword).toBe(false)
    })

    test('Input: Date', async ({ page }) => {
        await page.goto("/inputs")
        await expect(page.locator('h1:has-text("Web inputs page for Automation Testing Practice")', { exact: true })).toBeVisible()
        await page.fill("#input-date", webInputDate);
        await page.waitForTimeout(3000)

        await page.locator('button:has-text("Display Inputs")').click()
        await expect(page.locator('#output-date')).toHaveText(webInputDate)
        const webOutputDate =  await page.getByLabel('Output: Date').isVisible()
        expect(webOutputDate).toBe(false)
    })
    
    

})
