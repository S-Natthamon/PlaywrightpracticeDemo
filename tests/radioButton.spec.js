const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Radio Buttons page for Automation Testing Practice', () => {
    test('Select your favorite color and sport: Basketball, Blue', async ({ page }) => {
        
    })
    
    test('Select your favorite color and sport: Football, Red', async ({ page }) => {
        
    })

    test('Select your favorite color and sport: Tennis, Yellow', async ({ page }) => {
        
    })
    
    test('Select your favorite color and sport: Football, Black', async ({ page }) => {
        
    })

    test('Unselect your favorite color : Green', async ({ page }) => {
        
    })
    
    
})
