const {test, expect} = require('@playwright/test')

test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("/")
})

test.describe('Dynamic Table page for Automation Testing Practice', () => {
    test('For Chrome process get value of CPU load.', async ({ page }) => {

        await page.goto('/dynamic-table')
        // Wait for the table to load
        await page.waitForSelector('table.table-striped');

        // Extract the CPU load for the Chrome process
        const cpuLoad = await page.evaluate(() => {
            // Select all rows from the table
            const rows = Array.from(document.querySelectorAll('table.table-striped tbody tr'));
            
            // Find the row for Chrome
            const chromeRow = rows.find(row => row.cells[0].innerText.trim() === 'Chrome');
            
            // Return the CPU load from the second cell
            return chromeRow ? chromeRow.cells[1].innerText.trim() : null; // CPU load is in the second cell
        });

        // Log the CPU load for Chrome
        console.log(`CPU Load for Chrome: ${cpuLoad}`);
    })

    test('Compare it with value in the yellow label.', async ({ page }) => {
        //await page.goto('URL_OF_YOUR_PAGE'); // Replace with your actual URL

        await page.goto('/dynamic-table')
        // Wait for the table to load
        await page.waitForSelector('table.table-striped');

    // Extract the CPU load for Chrome from the table
    const cpuLoadTable = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('table.table-striped tbody tr'));
        const chromeRow = rows.find(row => row.cells[0].innerText.trim() === 'Chrome');
        return chromeRow ? chromeRow.cells[1].innerText.trim() : null;
    });

    // Extract the CPU load for Chrome from the yellow label
    const cpuLoadLabel = await page.evaluate(() => {
        const label = document.querySelector('#chrome-cpu');
        return label ? label.innerText.match(/(\d+\.\d+)%/)?.[1] : null; // Extract the numeric value
    });

    // Compare the values
    if (cpuLoadTable && cpuLoadLabel) {
        console.log(`CPU Load from Table: ${cpuLoadTable}`);
        console.log(`CPU Load from Label: ${cpuLoadLabel}`);

        const comparisonResult = cpuLoadTable === `${cpuLoadLabel}%` ? "Values match!" : "Values do not match.";
        console.log(comparisonResult);
    } else {
        console.log("Unable to extract CPU load from one of the sources.");
    }

    })
    
    
})

