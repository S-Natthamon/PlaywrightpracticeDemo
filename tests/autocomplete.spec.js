const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})


test.describe('Autocomplete page for Automation Testing Practice', () => {

    test('Autocomplete page', async ({ page }) => {
        await page.goto('/autocomplete')
        await expect(page.locator('h1:has-text("Autocomplete page for Automation Testing Practice")', { exact: true })).toBeVisible()

        const countryName = '#country[placeholder="Country name"]'
        const countryNameSearch = "li"
        const countryNameSelect = "Liechtenstein"

        await page.fill(countryName,  countryNameSearch)
        await page.waitForSelector('.autocomplete-items#countryautocomplete-list')

        const fromCountryName = await page.$$('.autocomplete-items#countryautocomplete-list')

        for (let option of fromCountryName) {
            
            const value = await option.textContent()
            //console.log(value);

            // if (value.includes(countryNameSelect)) {
                
            //     await option.click()
            //     break;
            // }
        }

        await page.waitForTimeout(5000)
    })
    
    test('Autocomplete page #2', async ({ page }) => {
        await page.goto('/autocomplete')
        await expect(page.locator('h1:has-text("Autocomplete page for Automation Testing Practice")', { exact: true })).toBeVisible()

        const countryName = '#country[placeholder="Country name"]'
        const countryNameSearch = "l"
        const countryNameExcept = "Luxembourg"

        //Type in search box
        await page.fill(countryName,  countryNameSearch, {delay: 100})
        await page.waitForSelector('.autocomplete-items#countryautocomplete-list')

        //Locator for suggested value
        const fromCountryNameOption = page.locator('.autocomplete-items#countryautocomplete-list')

        //Count suggested value
        const fromCountryNameOptionCount = fromCountryNameOption.count()

        //Iterate through each value
        for (let i = 0; i < fromCountryNameOptionCount; i++) 
            {
                //get text of nth value
                const textCountryName = await fromCountryNameOption.nth(i).textContent()
                //If text matches the expected value
                if (text === countryNameExcept) 
                    {
                        await fromCountryNameOption.nth(i).click()
                        break;
                    }
            }

        await page.waitForTimeout(5000)
    })
})
