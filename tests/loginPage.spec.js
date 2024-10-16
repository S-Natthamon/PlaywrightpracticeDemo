const {test, expect} = require('@playwright/test')
const { describe } = require('node:test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Test Login page', async () => {

//data-test
let userName = "practice"
let passWord = "SuperSecretPassword!"
let userNameFail = "automattesting"
let passWordFail = "Test!@#123"

    test('Valid Username and Password ', async ({ page }) => {
        await page.goto('/login')
        await expect(page.locator('h1:has-text("Test Login page for Automation Testing Practice")')).toBeVisible()
        await expect(page.locator('.col-9')).toContainText("Test Login page")

        await page.getByLabel('Username')
        await page.fill('.form-label[for="username"]', userName)
        await page.getByLabel('Password')
        await page.fill('.form-control[type="password"]', passWord)
        //click Login
        await page.locator('button[type="submit"]').click()
        //Verify login and password success
        const loginSuccess = page.locator('div#flash-message')
        await expect(loginSuccess).toHaveText("You logged into a secure area!")
        await expect(page.locator('h1:has-text("Secure Area page for Automation Testing Practice")')).toBeVisible()
        //Logout 
        await page.locator('i.icon-2x').click()
        //Verify logout success
        const logoutSuccess = page.locator('div[id="flash-message"]')
        await expect(logoutSuccess).toHaveText('You logged out of the secure area!')
        await expect(page.locator('h1:has-text("Test Login page for Automation Testing Practice")')).toBeVisible()
        await expect(page.locator('.col-9')).toContainText("Test Login page")
    })

    test('Entering incorrect password for a valid username.', async ({ page }) => {
        await page.goto('/login')
        await expect(page.locator('h1:has-text("Test Login page for Automation Testing Practice")')).toBeVisible()
        await expect(page.locator('.col-9')).toContainText("Test Login page")

        await page.getByLabel('Username')
        await page.fill('.form-label[for="username"]', userName)
        await page.getByLabel('Password')
        await page.fill('.form-control[type="password"]', passWordFail)
        //click Login
        await page.locator('button[type="submit"]').click()
        //Verify login Err
        const loginSuccess = page.locator('div#flash-message')
        await expect(loginSuccess).toHaveText("Your password is invalid!")
    })

    test('Entering incorrect username for a valid password.', async ({ page }) => {
        await page.goto('/login')
        await expect(page.locator('h1:has-text("Test Login page for Automation Testing Practice")')).toBeVisible()
        await expect(page.locator('.col-9')).toContainText("Test Login page")

        await page.getByLabel('Username')
        await page.fill('.form-label[for="username"]', userNameFail)
        await page.getByLabel('Password')
        await page.fill('.form-control[type="password"]', passWord)
        //click Login
        await page.locator('button[type="submit"]').click()
        //Verify login Err
        const loginSuccess = page.locator('div#flash-message')
        await expect(loginSuccess).toHaveText("Your username is invalid!")
    })
    
    test('Entering an empty username field.', async ({ page }) => {
        await page.goto('/login')
        await expect(page.locator('h1:has-text("Test Login page for Automation Testing Practice")')).toBeVisible()
        await expect(page.locator('.col-9')).toContainText("Test Login page")

        await page.getByLabel('Username')
        await page.fill('.form-label[for="username"]', userName)
        await page.getByLabel('Password')
        await page.fill('.form-control[type="password"]', " ")
        //click Login
        await page.locator('button[type="submit"]').click()
        //Verify login Err
        const loginSuccess = page.locator('div#flash-message')
        await expect(loginSuccess).toHaveText("Your password is invalid!")
    })

    test('Entering an empty Password field.', async ({ page }) => {
        await page.goto('/login')
        await expect(page.locator('h1:has-text("Test Login page for Automation Testing Practice")')).toBeVisible()
        await expect(page.locator('.col-9')).toContainText("Test Login page")

        await page.getByLabel('Username')
        await page.fill('.form-label[for="username"]', " ")
        await page.getByLabel('Password')
        await page.fill('.form-control[type="password"]', passWord)
        //click Login
        await page.locator('button[type="submit"]').click()
        //Verify login Err
        const loginSuccess = page.locator('div#flash-message')
        await expect(loginSuccess).toHaveText("Your username is invalid!")
    })
    

    test('Invalid Username and Password.', async ({ page }) => {
        await page.goto('/login')
        await expect(page.locator('h1:has-text("Test Login page for Automation Testing Practice")')).toBeVisible()
        await expect(page.locator('.col-9')).toContainText("Test Login page")

        await page.getByLabel('Username')
        await page.fill('.form-label[for="username"]', userNameFail)
        await page.getByLabel('Password')
        await page.fill('.form-control[type="password"]', passWordFail)
        //click Login
        await page.locator('button[type="submit"]').click()
        //Verify login Err
        const loginSuccess = page.locator('div#flash-message')
        await expect(loginSuccess).toHaveText("Your username is invalid!")
    })
})
