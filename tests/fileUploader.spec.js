const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})


test.describe('File Uploader page for Automation Testing Practice', () => {

    let fileInputUpload = "D:/BEER/QA_Tester/Automate/Playwright/PlaywrightpracticeDemo/tests-examples/fileInputUpload.pdf"
    let fileInputUploadThan500KB = "D:/BEER/QA_Tester/Automate/Playwright/PlaywrightpracticeDemo/tests-examples/fileInputUploadThan500KB.pdf"
    let fileNameInputUpload = "fileInputUpload.pdf"
    
    test('Verify Choose a file on your system and then click upload.', async ({ page }) => {
        await page.goto('/upload') 
        await expect(page.locator('h1:has-text("File Uploader page for Automation Testing Practice")', { exact: true })).toBeVisible()
        await page.locator('#fileInput').setInputFiles(fileInputUpload)
        await page.locator('#fileSubmit').click()

        await expect(page.locator('h1:has-text("File Uploaded!")', { exact: true })).toBeVisible()
        await expect(page.locator('#uploaded-files')).toContainText(fileNameInputUpload)
    })

    test('Verify drag and drop a file into the area below.', async ({ page }) => {
        await page.goto('/upload') 
        await expect(page.locator('h1:has-text("File Uploader page for Automation Testing Practice")', { exact: true })).toBeVisible()

         // Locate the drop zone element (by its class or id)
        const dropZone = await page.$('#fileInput');  // This is the class for the drop zone
        // Get the position and size of the drop zone
        const dropZoneBox = await dropZone.boundingBox();

        // Path to the file you want to upload
        const filePath = fileInputUpload;  // Specify your file path here

        // Move the mouse to the center of the drop zone
        await page.mouse.move(dropZoneBox.x + dropZoneBox.width / 2, dropZoneBox.y + dropZoneBox.height / 2);

        // Press the mouse down (this simulates "dragging")
        await page.mouse.down();

        // Move the mouse to simulate dragging the file into the drop zone
        await page.mouse.move(dropZoneBox.x + dropZoneBox.width / 2, dropZoneBox.y + dropZoneBox.height / 2 + 100); // Slight vertical movement

        // Release the mouse (this simulates dropping the file)
        await page.mouse.up();

        // Optionally, you can wait for a success message or verify that the file was uploaded
        // For example, you can wait for the success message to appear:
        //await page.waitForSelector('.uploaded-file', { timeout: 5000 });


})

test('Verify upload a file file less than 500KB will be accepted.', async ({ page }) => {
    await page.goto('/upload') 
    await expect(page.locator('h1:has-text("File Uploader page for Automation Testing Practice")', { exact: true })).toBeVisible()
    await expect(page.locator('.badge')).toContainText("Only a file less than 500KB will be accepted.")

    await page.locator('#fileInput').setInputFiles(fileInputUploadThan500KB)
    
    await expect(page.locator('.alert#flash')).toContainText("File too large, please select a file less than 500KB")
})

})