// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPagePage';
import { DashboardPage } from '../pages/DashboardPage';
import { Admin } from '../pages/admin.page';
import {allure} from 'allure-playwright';
//import { TestData } from '../utils/TestData';  

test.describe('Login Functionality', () => {
  allure.label('feature', 'Authentication');
  allure.severity('Critical');
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.loginWithValidUser();

    // Assertions after login
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // const upgradeBtn = page.locator('[type="button"]');
    //  await expect(upgradeBtn ).toBeVisible();
    await expect(page.locator('.oxd-topbar-header-breadcrumb')).toBeVisible();
    //await expect(page.locator("//p[normalize-space()='Time at Work']")).toContainText('Time at Work');
   //await expect(page.locator("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)", {hasText: 'Admin'})).toBeVisible();

    // // Perform logout
    // await dashboardPage.logout();

    // // Assertion after logout
    // await expect(page).toHaveURL(/auth\/login/);
      allure.attachment('screenshot', await page.screenshot(), 'image/png');
  });

  

  test('should not login with invalid credentials', async ({page})=>{
    //Declare the variables
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    //called the methods
    await loginPage.goto();
    await loginPage.loginWithInvalidUser();

    //do assertions
    await expect(page.getByText('Invalid credentials')).toBeVisible();

  })
});
