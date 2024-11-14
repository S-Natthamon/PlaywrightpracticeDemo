const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})


test.describe('Form Validation page for Automation Testing Practice', () => {

    let inputContactName = "Test Demo"
    let inputContactNumber = "012-4561237"
    let inputPickupDate = "2024-10-24"
    
    test('Valid register select payment method: cash on delivery', async ({ page }) => {
        await page.goto('/form-validation') 
        await expect(page.locator('h1:has-text("Form Validation page for Automation Testing Practice")', { exact: true })).toBeVisible()

        await page.getByLabel('Contact Name')
        await page.fill('.form-control[name="ContactName"]', inputContactName)
        const contactNameValid = page.locator('#validationCustom01 ~ .valid-feedback');
        await expect(contactNameValid).toHaveText("Looks good!");

        await page.getByLabel('Contact number')
        await page.fill('.form-control[name="contactnumber"]', inputContactNumber)

        await page.getByLabel('PickUp Date')
        await page.fill('.form-control[name="pickupdate"]', inputPickupDate)

        await page.selectOption('[name="payment"]', {value:"cashondelivery"});

        await page.getByRole("button", {name: " Register "}).click()

        await expect(page.locator('h1:has-text("Form Confirmation page for Automation Testing Practice")', { exact: true })).toBeVisible()
        await expect(page.locator('.alert[role="alert"]')).toHaveText("Thank you for validating your ticket")
    
    })

    test('Valid register select payment method: card', async ({ page }) => {
        await page.goto('/form-validation') 
        await expect(page.locator('h1:has-text("Form Validation page for Automation Testing Practice")', { exact: true })).toBeVisible()

        await page.getByLabel('Contact Name')
        await page.fill('.form-control[name="ContactName"]', inputContactName)
        const contactNameValid = page.locator('#validationCustom01 ~ .valid-feedback');
        await expect(contactNameValid).toHaveText("Looks good!");

        await page.getByLabel('Contact number')
        await page.fill('.form-control[name="contactnumber"]', inputContactNumber)

        await page.getByLabel('PickUp Date')
        await page.fill('.form-control[name="pickupdate"]', inputPickupDate)

        await page.selectOption('[name="payment"]', {value:"card"});

        await page.getByRole("button", {name: " Register "}).click()

        await expect(page.locator('h1:has-text("Form Confirmation page for Automation Testing Practice")', { exact: true })).toBeVisible()
        await expect(page.locator('.alert[role="alert"]')).toHaveText("Thank you for validating your ticket")
    
    })
    
    test('Verify payment method "Choose..." is not selected', async ({ page }) => {
        
        await page.goto('/form-validation') 
        await expect(page.locator('h1:has-text("Form Validation page for Automation Testing Practice")', { exact: true })).toBeVisible()

        const paymentSelect = page.locator('#validationCustom04');
        const selectedValue = await paymentSelect.evaluate(select => select.value);
        await expect(selectedValue).toBe('');
        const selectedOptionText = await paymentSelect.locator('option:checked').textContent();
        await expect(selectedOptionText.trim()).toBe('Choose...');
        
    })
    
    test('Verify Form Validation page is not input', async ({ page }) => {
        
        await page.goto('/form-validation') 
        await expect(page.locator('h1:has-text("Form Validation page for Automation Testing Practice")', { exact: true })).toBeVisible()

        await page.getByLabel('Contact Name')
        await page.locator('.form-control[name="ContactName"]').clear()
        
        await page.getByRole("button", {name: " Register "}).click()

        await page.getByLabel('Contact Name')
        const contactNameErr = page.locator('#validationCustom01 ~ .invalid-feedback');
        await expect(contactNameErr).toHaveText("Please enter your Contact name.");
        
        await page.getByLabel('Contact number')
        const contactNumberErr = page.locator('[placeholder="012-3456789"] ~ .invalid-feedback');
        await expect(contactNumberErr).toHaveText("Please provide your Contact number.");

        await page.getByLabel('PickUp Date')
        const pickUpDateErr = page.locator('[name="pickupdate"] ~ .invalid-feedback');
        await expect(pickUpDateErr).toHaveText("Please provide valid Date.");

        await page.getByLabel('Payment Method')
        const paymentMethodErr = page.locator('[name="payment"] ~ .invalid-feedback');
        await expect(paymentMethodErr).toHaveText("Please select the Paymeny Method.");
        
    })
    
})
