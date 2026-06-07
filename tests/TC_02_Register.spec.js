// import {test, expect} from '@playwright/test';
import {PlaywrightBlocker} from '@cliqz/adblocker-playwright';
import fetch from 'cross-fetch';
import {HomePage} from '../PageObjects/HomePage';
import {LoginPage} from '../PageObjects/LoginPage';
import {RegistrationPage} from '../PageObjects/RegistrationPage';
import {EntryPage} from  '../PageObjects/EntryPage';
import {AccountPage} from '../PageObjects/AccountPage';
import {Actions} from '../PageObjects/Actions';
import {customTest as test, expect} from '../Fixtures/testfixture';


test.describe('User Registration and Login Tests', () => {
test('User Registration with Fixture', async({page, testData})=>{
    // Adblocker setup
    const blocker= await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    await blocker.enableBlockingInPage(page);

    const entryPage= new EntryPage(page);
    const homePage= new HomePage(page);
    const registrationPage= new RegistrationPage(page);
    const accountPage= new AccountPage(page);
    const actions= new Actions(page);

    await test.step('Open the URL and go to registration page', async()=>{
    await actions.gotoUrl('https://medimention.com/');
    await actions.clickElement(entryPage.homeBtn);
    await actions.clickElement(homePage.registerBtn); 
    });
    
        await test.step('Fill the registration form and submit', async()=>{
    await actions.clickElement(registrationPage.dropButton);
    await actions.clickElement(registrationPage.dropOption.nth(1));
    await actions.fillInput(registrationPage.BussName, testData.BussName);
    await actions.fillInput(registrationPage.Username, testData.UserName);
    await actions.fillInput(registrationPage.email, testData.Email);
    await actions.fillInput(registrationPage.password, testData.Password);
    await actions.fillInput(registrationPage.confirmPassword, testData.Password);
    await actions.clickElement(registrationPage.agreeTick);
    await actions.clickElement(registrationPage.registerBtn);
        })

        await page.waitForTimeout(5000);
    console.log(`Registered user: ${testData.UserName}`);
    console.log(`Email: ${testData.Email}`);
    console.log(`Business Name: ${testData.Password}`);

    // Assertion
    const accountHeadText= await actions.getText(accountPage.accountHead);
    console.log(accountHeadText);
    await expect(accountHeadText.includes(testData.BussName)).toBe(true); 
    await page.waitForTimeout(3000);

})

// test('Login with Registered User', async({page})=>{

//      const blocker= await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await blocker.enableBlockingInPage(page);

//     const entryPage= new EntryPage(page);
//     const homePage= new HomePage(page);
//     // const registrationPage= new RegistrationPage(page);
//     const loginPage= new LoginPage(page);
//     const accountPage= new AccountPage(page);
//     const actions= new Actions(page);

//     await actions.gotoUrl('https://medimention.com/');
//     await actions.clickElement(entryPage.homeBtn);
//     await actions.clickElement(homePage.login);
//     await actions.fillInput(homePage.usernameInput, 'test425user');
//     await actions.fillInput(homePage.passwordInput, 'testpassword');
//     await actions.clickElement(homePage.loginSubmitBtn);
//     await page.waitForTimeout(5000);

// })
})