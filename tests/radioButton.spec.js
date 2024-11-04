const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})


test.describe('Radio Buttons page for Automation Testing Practice', () => {

    test('Select your favorite color and sport: Basketball, Blue', async ({ page }) => {

        await page.goto('/radio-buttons')
        await expect(page.locator('h1:has-text("Radio Buttons page for Automation Testing Practice")')).toBeVisible()

        let checkBasketball = page.getByLabel('Basketball')
        let checkFootball = page.getByLabel('Football')
        let checkTennis = page.getByLabel('Tennis')
        let checkBlue = page.getByLabel('Blue')
        let checkRed = page.getByLabel('Red')
        let checkYellow = page.getByLabel('Yellow')
        let checkBlack = page.getByLabel('Black')

        //Select Basketball, Blue
        await (checkBasketball).check()
        await (checkBlue).check()
        // Assert the checked state
        await expect((checkBasketball)).toBeChecked()
        await expect((checkBlue)).toBeChecked()
        // Assert the unchecked state
        await expect((checkFootball)).not.toBeChecked()
        await expect((checkTennis)).not.toBeChecked()
        await expect((checkRed)).not.toBeChecked()
        await expect((checkYellow)).not.toBeChecked()
        await expect((checkBlack)).not.toBeChecked()
        // Assert the disable radio
        

    })
    
    test('Select your favorite color and sport: Football, Red', async ({ page }) => {
        await page.goto('/radio-buttons')
        await expect(page.locator('h1:has-text("Radio Buttons page for Automation Testing Practice")')).toBeVisible()

        let checkBasketball = page.getByLabel('Basketball')
        let checkFootball = page.getByLabel('Football')
        let checkTennis = page.getByLabel('Tennis')
        let checkBlue = page.getByLabel('Blue')
        let checkRed = page.getByLabel('Red')
        let checkYellow = page.getByLabel('Yellow')
        let checkBlack = page.getByLabel('Black')

        //Select Basketball, Blue
        await (checkFootball).check()
        await (checkRed).check()
        // Assert the checked state
        await expect((checkFootball)).toBeChecked()
        await expect((checkRed)).toBeChecked()
        // Assert the unchecked state
        await expect((checkBasketball)).not.toBeChecked()
        await expect((checkTennis)).not.toBeChecked()
        await expect((checkBlue)).not.toBeChecked()
        await expect((checkYellow)).not.toBeChecked()
        await expect((checkBlack)).not.toBeChecked()
        // Assert the disable radio
    })

    test('Select your favorite color and sport: Tennis, Yellow', async ({ page }) => {
        await page.goto('/radio-buttons')
        await expect(page.locator('h1:has-text("Radio Buttons page for Automation Testing Practice")')).toBeVisible()
    
        let checkBasketball = page.getByLabel('Basketball')
        let checkFootball = page.getByLabel('Football')
        let checkTennis = page.getByLabel('Tennis')
        let checkBlue = page.getByLabel('Blue')
        let checkRed = page.getByLabel('Red')
        let checkYellow = page.getByLabel('Yellow')
        let checkBlack = page.getByLabel('Black')

        //Select Basketball, Blue
        await (checkTennis).check()
        await (checkYellow).check()
        // Assert the checked state
        await expect((checkTennis)).toBeChecked()
        await expect((checkYellow)).toBeChecked()
        // Assert the unchecked state
        await expect((checkBasketball)).not.toBeChecked()
        await expect((checkFootball)).not.toBeChecked()
        await expect((checkBlue)).not.toBeChecked()
        await expect((checkRed)).not.toBeChecked()
        await expect((checkBlack)).not.toBeChecked()
        // Assert the disable radio
    })
    
    test('Select your favorite color and sport: Football, Black', async ({ page }) => {
        await page.goto('/radio-buttons')
        await expect(page.locator('h1:has-text("Radio Buttons page for Automation Testing Practice")')).toBeVisible()

        let checkBasketball = page.getByLabel('Basketball')
        let checkFootball = page.getByLabel('Football')
        let checkTennis = page.getByLabel('Tennis')
        let checkBlue = page.getByLabel('Blue')
        let checkRed = page.getByLabel('Red')
        let checkYellow = page.getByLabel('Yellow')
        let checkBlack = page.getByLabel('Black')

        //Select Basketball, Blue
        await (checkFootball).check()
        await (checkBlack).check()
        // Assert the checked state
        await expect((checkFootball)).toBeChecked()
        await expect((checkBlack)).toBeChecked()
        // Assert the unchecked state
        await expect((checkBasketball)).not.toBeChecked()
        await expect((checkTennis)).not.toBeChecked()
        await expect((checkBlue)).not.toBeChecked()
        await expect((checkRed)).not.toBeChecked()
        await expect((checkYellow)).not.toBeChecked()
        // Assert the disable radio
    })

    test('Unselect your favorite color : Green', async ({ page }) => {
        await page.goto('/radio-buttons')
        await expect(page.locator('h1:has-text("Radio Buttons page for Automation Testing Practice")')).toBeVisible()
        const isDisabled = await page.isDisabled('#green');
        expect(isDisabled).toBe(true);
    })
    
})
