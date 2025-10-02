import {test, expect} from '@playwright/test'
import { Admin } from "../pages/admin.page";
import {TestData}  from '../utils/TestData';
import { LoginPage } from '../pages/LoginPagePage';

//create register user test case
test.describe('admin test', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page); //declare const login page
        await loginPage.goto(); //go to the login page url
        await loginPage.login(TestData.validUser.username, TestData.validUser.password);
    })
    test('Register a new user', async ({ page }) => {
        const admin = new Admin(page);
        await admin.registerNewUser(); 



    })

})




