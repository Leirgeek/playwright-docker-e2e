// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPagePage';
import { DashboardPage } from '../pages/DashboardPage';
import { TestData } from '../utils/TestData';  

test.describe('Login Functionality', () => {
  test('should login and logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.loginWithValidUser();

    // Assertions after login
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page.getByText('Time at Work')).toBeVisible();

    // Perform logout
    await dashboardPage.logout();

    // Assertion after logout
    await expect(page).toHaveURL(/auth\/login/);
  });
});
