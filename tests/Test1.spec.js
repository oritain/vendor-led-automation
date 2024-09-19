const{test,expect} = require('@playwright/test');
let webContext;

test.beforeAll("To verify dashboard is displayed after user login", async ({browser})=>
    {
       console.log(process.env.tamas);
       
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto("https://dev.provenorigin.com/");
       //console.log(await page.title());
      // await expect(page).toHaveTitle("Oritain | Customer Portal");
       await page.locator('text="Accept All Cookies"').click();
       await page.locator('#emailAddressField').fill('pbhosale@oritain.com');
       await page.locator('#passwordField').fill("Password@1234");  
       await page.locator('#enableButton').click();
       await page.waitForLoadState("networkidle");
       await context.storageState({path:'state.json'});
       webContext = await browser.newContext({storageState:'state.json'});
    
    });

    test('First Test', async ()=>
        {
      
        const page = await webContext.newPage();
        await page.goto("https://dev.provenorigin.com/dashboard");
        await expect(page.locator('.welcome')).toContainText("Welcome Billy Jane");
        
           
        });