const {test, expect} = require('@playwright/test')
const { count } = require('console')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('File Downloader page for Automation Testing Practice', () => {

    test('Downloader file .JPG', async ({ page }) => {

        const fileDownloadJPG = page.waitForEvent('download');
        
        await page.goto('/download') 
        await expect(page.locator('h1:has-text("File Downloader page for Automation Testing Practice")', { exact: true })).toBeVisible() 
        await page.locator('[data-testid="cdct.jpg"]').click()
        const download = await fileDownloadJPG
        await download.saveAs('cdct.jpg');
        console.log('Download completed!')
    })

    test('Downloader file .JSON', async ({ page }) => {

        const fileDownloadJSON = page.waitForEvent('download');
        
        await page.goto('/download') 
        await expect(page.locator('h1:has-text("File Downloader page for Automation Testing Practice")', { exact: true })).toBeVisible() 
        await page.getByTestId('some-file.json').click()
        const download = await fileDownloadJSON
        await download.saveAs('some-file.json');
        console.log('Download completed!')
        
    })

    test('Downloader file .TXT', async ({ page }) => {

        const fileDownloadTXT = page.waitForEvent('download');
        
        await page.goto('/download') 
        await expect(page.locator('h1:has-text("File Downloader page for Automation Testing Practice")', { exact: true })).toBeVisible() 
        await page.getByTestId('some-file.txt').click()
        const download = await fileDownloadTXT
        await download.saveAs('some-file.json');
        console.log('Download completed!')
         
    })
    
    test('Downloader file .PNG', async ({ page }) => {
        
        const fileDownloadPNG = page.waitForEvent('download');
        
        await page.goto('/download') 
        await expect(page.locator('h1:has-text("File Downloader page for Automation Testing Practice")', { exact: true })).toBeVisible() 
        await page.getByTestId('xpath-css.png').click()
        const download = await fileDownloadPNG
        await download.saveAs('xpath-css.png');
        console.log('Download completed!')
        
    })
  
})
