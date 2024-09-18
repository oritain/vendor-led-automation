const{test,expect} = require('@playwright/test');
const LoginPage = require('../tests/pages/login.page');
const { timeout } = require('../playwright.config');

// test('First Test', async ({browser})=>
// {
// const context = await browser.newContext();
// const page = await context.newPage();
// await page.goto("https://dev.provenorigin.com/");
// console.log( await page.title());
// //await expect(browser).toHaveTitle("Oritain | Customer Portal");
// await expect(page).toHaveTitle("Oritain | Customer Portal");

// });



test("Login using POM-1", async ({page})=>
    {
      
       const loginPage = new LoginPage(page);
    
       await loginPage.navigate();
       await loginPage.AcceptCookies();
       await loginPage.login('pbhosale@oritain.com', 'Password@1234');
       await page.waitForURL("https://dev.provenorigin.com/dashboard");
      
    // Add assertions to verify successful login
      await expect(page).toHaveURL("https://dev.provenorigin.com/dashboard");
      console.log(await page.locator('.welcome').textContent());
      await expect(page.locator('.welcome')).toContainText("Welcome Billy Jane");
      
    });

    
test("Login using POM-2", async ({page})=>
      {
        
         const loginPage = new LoginPage(page);
      
         await loginPage.navigate();
         await loginPage.AcceptCookies();
         await loginPage.login('zpathan@oritain.com', 'ZPathan2024!#0');
         await page.waitForURL("https://dev.provenorigin.com/dashboard");
        
      // Add assertions to verify successful login
        await expect(page).toHaveURL("https://dev.provenorigin.com/dashboard");
        console.log(await page.locator('.welcome').textContent());
        await expect(page.locator('.welcome')).toContainText("Welcome Sam Coats");
        
      });

test.only("Login using POM-3", async ({page})=>
        {
           console.log("Username: " + process.env.LOGIN_USERNAME);
           let str = process.env.LOGIN_PASSWORD;
           console.log("Password: " + str.replace(str.substr(1,str.length-2), str.substr(1,str.length-2).replace(/./g,"*")));

           const loginPage = new LoginPage(page);
        
           await loginPage.navigate();
           await loginPage.AcceptCookies();
           await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);
           await page.waitForURL("https://dev.provenorigin.com/dashboard");
          
        // Add assertions to verify successful login
          await expect(page).toHaveURL("https://dev.provenorigin.com/dashboard");
          console.log(await page.locator('.welcome').textContent());
          await expect(page.locator('.welcome')).toContainText("Welcome Sam Coats");
          
        });
