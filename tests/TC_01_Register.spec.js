import {test, expect} from '@playwright/test';
import {PlaywrightBlocker} from '@cliqz/adblocker-playwright';
import fetch from 'cross-fetch';
import {EntryPage} from  '../PageObjects/EntryPage';
import {HomePage} from '../PageObjects/HomePage';
import {RegistrationPage} from '../PageObjects/RegistrationPage';
import {AccountPage} from '../PageObjects/AccountPage';
import data from './utils/register.json';

for(const userData of data) {
    test(`User Registration for ${userData.UserName}`, async({page})=>{

            // Adblocker setup
            const blocker= await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
            await blocker.enableBlockingInPage(page);
            
        const entryPage= new EntryPage(page);
        const homePage= new HomePage(page);
        const registrationPage= new RegistrationPage(page);
        const accountPage= new AccountPage(page);

        await entryPage.goto();
        await entryPage.clickHome();
        await homePage.clickRegister();
        await registrationPage.registerNewUser(userData.BussName, userData.UserName, userData.Email, userData.Password);
        await page.waitForTimeout(5000);

        //Assertion
        const accountHeadText= await accountPage.getAccountHead();
        console.log(accountHeadText);
        await expect(accountHeadText.includes(userData.BussName)).toBe(true); 
        await page.waitForTimeout(3000);
    });
}

// test('User Registration', async({page})=>{
//     const entryPage= new EntryPage(page);
//     const homePage= new HomePage(page);
//     const registrationPage= new RegistrationPage(page);
//     const accountPage= new AccountPage(page);

//     await entryPage.goto();
//     await entryPage.clickHome();
//     await homePage.clickRegister();
//     await registrationPage.registerNewUser('Test2 Business', 'test2user', 'test2Email@example.com', 'test2password');
//     await page.waitForTimeout(5000);

//     //Assertion
//     const accountHeadText= await accountPage.getAccountHead();
//     console.log(accountHeadText);
//     await expect(accountHeadText.includes('Test2 Business')).toBe(true); 
//     await page.waitForTimeout(3000);
// })
