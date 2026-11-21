import { DataTable, Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Browser, firefox, Page } from "@playwright/test";

//global variable
let page: Page;
let browser: Browser;
setDefaultTimeout(60000);

Given('Open firefox browser', async ()=> {

 browser = await firefox.launch({headless: false});
//     //open the new Tab/new Page in firefox browser
      page=await browser.newPage();
});

Given('Navigate to app url', async ()=> {

 await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
});

When('Enter the username', async ()=> {

  await page.locator("[name='txtUserName']").fill("Playwright");
});

When('Enter the password', async ()=> {

  await page.locator("[name='txtPassword']").fill("ravikumar");
});

// When('Enter the username {string}', async (username:string)=> {
//   // Write code here that turns the phrase above into concrete actions
//   await page.locator("[name='txtUserName']").fill(username);
// });

// When('Enter the password {string}', async (password:string)=>{
//   // Write code here that turns the phrase above into concrete actions
//   await page.locator("[name='txtPassword']").fill(password);
 
// });

// When('Enter the username', async (dataTable:DataTable)=> {
//   // Write code here that turns the phrase above into concrete actions
//   let data:string[][]=dataTable.raw();
//   let username:string = data[0][0];
//   console.log("username : " +username);
//   await page.locator("[name='txtUserName']").fill(username); 
// });

// When('Enter the password', async (dataTable:DataTable)=> {
//   // Write code here that turns the phrase above into concrete actions
//   let data:string[][]=dataTable.raw();
//   let password:string=data[0][0];
//   console.log("password : " +password);

//   await page.locator("[name='txtPassword']").fill(password);
 
// });

// When('Enter the username', async (dataTable:DataTable)=> {
//   // Write code here that turns the phrase above into concrete actions
//   let data =dataTable.hashes();
//   let username:string = data[0].username;
//   console.log("username : " +username);
//   await page.locator("[name='txtUserName']").fill(username); 
// });

// When('Enter the password', async (dataTable:DataTable)=> {
//   // Write code here that turns the phrase above into concrete actions
//   let data =dataTable.hashes();
//   let password:string=data[0].password;
//   console.log("password : " +password);

//   await page.locator("[name='txtPassword']").fill(password);
 
// });



When('Click on Login', async ()=> {

  await page.locator("[name='Submit']").click();
});

Then('Verify Welcome Page', async ()=> {

 //identify welcome selenium text
let text:null | string=await page.locator("xpath=/html/body/div[3]/ul/li[1]").textContent();
console.log("text:"+text);

 //verify welcome selenium text
if(text=="Welcome Playwright")
{
console.log("Welcome verified successfully:Test Passed");
}
 else
{
 console.log("Welcome not verified successfully:Test Failed");
}
});

When('Close the Browser', async ()=> {

  await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();
 await browser.close();
 console.log("Logout successfully:")

});



