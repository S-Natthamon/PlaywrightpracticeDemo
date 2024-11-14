const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})


test.describe('Add/Remove Elements page for Automation Testing Practice', () => {

    test('Add/Remove Elements #1', async ({ page }) => {

        await page.goto('/add-remove-elements') 
        await expect(page.locator('h1:has-text("Add/Remove Elements page for Automation Testing Practice")', { exact: true })).toBeVisible() 


        for (let addElement1 = 0; addElement1 < 20; addElement1++) {  // Adjust the loop for how many elements to add
            await page.click('button[onclick="addElement()"]');
            console.log(`Element added: ${addElement1 + 1}`);
        }

        // Wait for the elements to be added
        await page.waitForSelector('.added-manually');  // Wait until at least one element is added
      
        // Click the "Delete" button to remove the last added element
        // We will click the last 'Delete' button in the list of added elements
        const deleteButtons = await page.$$('button[onclick="deleteElement()"]');  // Find all Delete buttons
        if (deleteButtons.length > 0) {
          await deleteButtons[deleteButtons.length - 1].click();  // Click the last delete button
          console.log('Element deleted');
        }
      
        // Optionally, wait for the element to disappear from the DOM
        await page.waitForSelector('.added-manually', { state: 'detached' });

    })

    test('Add/Remove Elements #2', async ({ page }) => {

        await page.goto('/add-remove-elements') 
        await expect(page.locator('h1:has-text("Add/Remove Elements page for Automation Testing Practice")', { exact: true })).toBeVisible() 


        // Keep clicking "Add Element" button until you can't click anymore
        let addButton = await page.$('button[onclick="addElement()"]');
        let addCount = 0;
        
        // Add elements until "Add Element" button is no longer clickable
        while (addButton) {
            await addButton.click();
            addCount++;
            console.log(`Added element #${addCount}`);
            
            // Wait for a new element to be added to the DOM
            await page.waitForSelector('.added-manually');
            
            // Check if the "Add Element" button is still visible and clickable
            addButton = await page.$('button[onclick="addElement()"]');
        }

        console.log('No more elements can be added.');

        // Now we want to delete the last 3 added elements
        const deleteButtons = await page.$$('button[onclick="deleteElement()"]');
        
        // Ensure we have at least 3 elements to delete
        if (deleteButtons.length >= 3) {
            // Delete the last 3 added elements
            for (let i = 0; i < 3; i++) {
            const lastDeleteButton = deleteButtons[deleteButtons.length - 1 - i];
            await lastDeleteButton.click();
            console.log(`Deleted element #${i + 1}`);
            
            // Wait for the element to be removed from the DOM
            await page.waitForSelector('.added-manually', { state: 'detached' });
            }
        } else {
            console.log('There are less than 3 elements to delete.');
        }

    })

    test('Add/Remove Elements #3', async ({ page }) => {

        await page.goto('/add-remove-elements') 
        await expect(page.locator('h1:has-text("Add/Remove Elements page for Automation Testing Practice")', { exact: true })).toBeVisible() 


        for (let addElement = 0; addElement < 20; addElement++) {  // Adjust the loop for how many elements to add
            await page.click('button[onclick="addElement()"]');
            console.log(`Element added: ${addElement + 1}`);
        }

        //console.log('No more elements can be added.');

        // Now we want to delete the last 3 added elements
        const deleteButtons = await page.$$('button[onclick="deleteElement()"]');
    
        // Ensure we have at least 3 elements to delete
        if (deleteButtons.length >= 3) {
            // Delete the last 3 added elements
            for (let deleteElement = 0; deleteElement < 3; deleteElement++) {
            const lastDeleteButton = deleteButtons[deleteButtons.length - 1 - deleteElement];
            await lastDeleteButton.click();
            console.log(`Deleted element #${deleteElement + 1}`);
            
            // Wait for the element to be removed from the DOM
            //await page.waitForSelector('.added-manually', { state: 'detached' });
            }
        } else {
            console.log('There are less than 3 elements to delete.');
        }

    })
})

