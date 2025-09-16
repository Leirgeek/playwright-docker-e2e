import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPagePage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Functionality', () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  // Before each test, initialize page objects and navigate to login page
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goto();
  });

  test('should login and logout successfully', async () => {
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.logout();
  });
});
